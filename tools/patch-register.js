'use strict';
/* One-shot: log the Owner queries raised on 31 July in the register, and let an
   answered item show as answered. Idempotent — safe to re-run.
   Temporary: delete this file and .github/workflows/patch-register.yml once it has run. */
const fs = require('fs');
const path = require('path');

const DATA = 'data.js';
const PAGE = 'index.html';

/* Newest first — this is the order they appear in the register. */
const NEW_ITEMS = [
  {
    ref: 'MQ-20260731-0843',
    subject: 'Verification that the installed PV and game fence meet the authority’s requirements, with drawings redlined where the installation differs',
    area: 'Quality and inspection',
    raisedBy: 'James Burnett',
    raisedISO: '2026-07-31',
    dueISO: '2026-08-07',
    respondedISO: '2026-07-31',
    turnaroundDays: 0,
    status: 'Answered',
    assignedTo: 'Engineering lead'
  },
  {
    ref: 'MQ-20260731-0759',
    subject: 'Easement staking on the MV route east of the substation, and confirmation that cable is installed within that easement',
    area: 'MV collection',
    raisedBy: 'James Burnett',
    raisedISO: '2026-07-31',
    dueISO: '2026-08-07',
    status: 'Open',
    assignedTo: 'Construction Manager'
  }
];

const ORDER = ['ref', 'subject', 'area', 'raisedBy', 'raisedISO', 'dueISO', 'respondedISO', 'turnaroundDays', 'status', 'assignedTo'];

function render(it) {
  const lines = ORDER.filter(function (k) { return it[k] !== undefined; })
    .map(function (k) { return '        ' + JSON.stringify(k) + ': ' + JSON.stringify(it[k]); });
  return '      {\n' + lines.join(',\n') + '\n      },\n';
}

/* ---------- data.js: insert any query not already logged ---------- */
let s = fs.readFileSync(DATA, 'utf8');
const ANCHOR = 'the formal correspondence provisions of the Agreement.",\n    "items": [\n';
if (s.indexOf(ANCHOR) === -1) {
  console.error('Register anchor not found in ' + DATA + ' - aborting, nothing changed.');
  process.exit(1);
}

const added = [];
let block = '';
NEW_ITEMS.forEach(function (it) {
  if (s.indexOf('"' + it.ref + '"') !== -1) { console.log('Already logged: ' + it.ref); return; }
  block += render(it);
  added.push(it.ref);
});

if (block) {
  s = s.replace(ANCHOR, ANCHOR + block);
  fs.writeFileSync(DATA, s);
}

/* ---------- index.html: an answered query should not read as "not started" ---------- */
let h = fs.readFileSync(PAGE, 'utf8');
const PILL_FROM = "if(s.indexOf('complete')>=0||s.indexOf('on target')>=0||s.indexOf('on track')>=0) return 'p-good';";
const PILL_TO = "if(s.indexOf('complete')>=0||s.indexOf('answered')>=0||s.indexOf('on target')>=0||s.indexOf('on track')>=0) return 'p-good';";
if (h.indexOf(PILL_TO) !== -1) {
  console.log('Status pill already handles "Answered".');
} else if (h.indexOf(PILL_FROM) !== -1) {
  fs.writeFileSync(PAGE, h.replace(PILL_FROM, PILL_TO));
  console.log('Status pill now shows "Answered" as resolved.');
} else {
  console.error('Status pill helper not found in ' + PAGE + ' - aborting.');
  process.exit(1);
}

/* ---------- verify what the page will actually read ---------- */
global.window = {};
require(path.resolve(DATA));
const items = global.window.MURCH_REPORT.clientQueries.items;
NEW_ITEMS.forEach(function (it) {
  if (!items.some(function (q) { return q.ref === it.ref; })) {
    console.error('Insert did not take for ' + it.ref);
    process.exit(1);
  }
});
console.log((added.length ? 'Logged ' + added.join(', ') + '. ' : 'No new queries. ') +
  'Register holds ' + items.length + ' queries, ' +
  items.filter(function (q) { return q.status === 'Open' || q.status === 'In review'; }).length + ' outstanding.');
