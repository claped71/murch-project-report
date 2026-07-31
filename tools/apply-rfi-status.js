'use strict';
/* Apply the internal RFI control page's decisions to the Owner query register.
 *
 *   node tools/apply-rfi-status.js path/to/rfi-status.json [--write]
 *
 * rfi-status.json is produced by MURCH_RFI_control.html on the Construction
 * Director's machine. It is the human override: whatever it says about a
 * reference wins over what the register inferred.
 *
 * Only status, respondedISO and the derived turnaround reach data.js.
 * The RAG colour and the internal note are deliberately NOT published — they are
 * working judgements about our own performance and have no place in a document
 * the Owner reads. They are printed here so the run log still shows them.
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const statusFile = args.find(function (a) { return a !== '--write'; });
if (!statusFile) {
  console.error('usage: node tools/apply-rfi-status.js <rfi-status.json> [--write]');
  process.exit(2);
}

const DATA = path.resolve('data.js');
const VALID = ['Open', 'In review', 'Answered', 'Closed'];

/* Working days elapsed, Monday to Friday, counting the raise day as day 0. */
function workingDays(fromISO, toISO) {
  const a = new Date(fromISO + 'T12:00:00');
  const b = new Date(toISO + 'T12:00:00');
  if (isNaN(a) || isNaN(b) || b < a) return null;
  let n = 0;
  const cur = new Date(a.getTime());
  while (cur < b) {
    cur.setDate(cur.getDate() + 1);
    const wd = cur.getDay();
    if (wd !== 0 && wd !== 6) n++;
  }
  return n;
}

const incoming = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
if (!incoming || !Array.isArray(incoming.items)) {
  console.error(statusFile + ': no items[] — nothing to apply.');
  process.exit(1);
}

global.window = {};
require(DATA);
const report = global.window.MURCH_REPORT;
const items = report.clientQueries.items;

const changes = [];
const unknown = [];

incoming.items.forEach(function (row) {
  const q = items.find(function (x) { return x.ref === row.ref; });
  if (!q) { unknown.push(row.ref); return; }

  if (row.status && VALID.indexOf(row.status) === -1) {
    console.error('  ! ' + row.ref + ': unknown status "' + row.status + '" — left as ' + q.status);
  } else if (row.status && row.status !== q.status) {
    changes.push(row.ref + ': ' + q.status + ' -> ' + row.status);
    q.status = row.status;
  }

  /* A closing date is a response date too, if no explicit one was given. */
  const responded = row.respondedISO || (row.status === 'Closed' ? row.closedISO : null) || null;

  if (responded && responded !== q.respondedISO) {
    changes.push(row.ref + ': responded ' + (q.respondedISO || '—') + ' -> ' + responded);
    q.respondedISO = responded;
  } else if (!responded && q.respondedISO) {
    changes.push(row.ref + ': responded ' + q.respondedISO + ' -> cleared');
    delete q.respondedISO;
    delete q.turnaroundDays;
  }

  if (q.respondedISO) {
    const wd = workingDays(q.raisedISO, q.respondedISO);
    if (wd !== null && wd !== q.turnaroundDays) {
      changes.push(row.ref + ': turnaround -> ' + wd + ' wd');
      q.turnaroundDays = wd;
    }
    if (wd === null) console.error('  ! ' + row.ref + ': response date is before the raise date — turnaround left alone.');
  }

  if (row.note) console.log('  note (internal, not published) ' + row.ref + ': ' + row.note);
  if (row.rag) console.log('  rag  (internal, not published) ' + row.ref + ': ' + row.rag);
});

unknown.forEach(function (ref) {
  console.error('  ! ' + ref + ' is in the status file but not in the register — ignored.');
});

if (!changes.length) {
  console.log('Register already matches the control page. Nothing to apply.');
  process.exit(0);
}

console.log('\nChanges to apply:');
changes.forEach(function (c) { console.log('  ' + c); });

if (!WRITE) {
  console.log('\nDry run. Re-run with --write to apply, then run tools/guard.js before publishing.');
  process.exit(0);
}

/* Rewrite only the clientQueries.items array, so nothing else in data.js moves. */
const ORDER = ['ref', 'subject', 'area', 'raisedBy', 'raisedISO', 'dueISO', 'respondedISO', 'turnaroundDays', 'status', 'assignedTo'];
function renderItem(it) {
  const keys = ORDER.filter(function (k) { return it[k] !== undefined; })
    .concat(Object.keys(it).filter(function (k) { return ORDER.indexOf(k) === -1; }));
  const lines = keys.map(function (k) { return '        ' + JSON.stringify(k) + ': ' + JSON.stringify(it[k]); });
  return '      {\n' + lines.join(',\n') + '\n      }';
}

let src = fs.readFileSync(DATA, 'utf8');
const OPEN = 'the formal correspondence provisions of the Agreement.",\n    "items": [\n';
const start = src.indexOf(OPEN);
if (start === -1) { console.error('Could not locate the register in data.js — nothing written.'); process.exit(1); }
const from = start + OPEN.length;
const end = src.indexOf('\n    ]', from);
if (end === -1) { console.error('Could not find the end of the register — nothing written.'); process.exit(1); }

src = src.slice(0, from) + items.map(renderItem).join(',\n') + src.slice(end);
fs.writeFileSync(DATA, src);

/* Read it back the way the page will. */
delete require.cache[DATA];
global.window = {};
require(DATA);
const after = global.window.MURCH_REPORT.clientQueries.items;
if (after.length !== items.length) { console.error('Rewrite changed the item count — check data.js.'); process.exit(1); }
console.log('\nApplied. ' + after.length + ' queries, ' +
  after.filter(function (q) { return q.status === 'Open' || q.status === 'In review'; }).length + ' outstanding. ' +
  'Run tools/guard.js, then publish.');
