'use strict';
/* One-shot, idempotent: environmental queries belong to the Environmental lead.
   MQ-20260804-0726 (erosion control) was sitting with the Construction Manager, and
   MQ-20260801-0736 (surface water drainage and vegetation) had been retagged from
   Environmental to Quality by an automated sweep. Both return to Environmental.
   Verified against a real DOM before publishing. Delete with its workflow once run. */
const fs = require('fs');
const path = require('path');
const DATA = 'data.js';

const FIX = {
  'MQ-20260804-0726': { area: 'Environmental', assignedTo: 'Environmental lead' },
  'MQ-20260801-0736': { area: 'Environmental', assignedTo: 'Environmental lead' }
};

global.window = {};
require(path.resolve(DATA));
const items = global.window.MURCH_REPORT.clientQueries.items;

let changed = 0;
items.forEach(function (q) {
  const f = FIX[q.ref];
  if (!f) return;
  Object.keys(f).forEach(function (k) {
    if (q[k] !== f[k]) { console.log(q.ref + ': ' + k + ' ' + q[k] + ' -> ' + f[k]); q[k] = f[k]; changed++; }
  });
});
if (!changed) { console.log('Already correct.'); process.exit(0); }

const ORDER = ['ref', 'subject', 'area', 'raisedBy', 'raisedISO', 'dueISO', 'respondedISO', 'turnaroundDays', 'status', 'assignedTo'];
function render(it) {
  const keys = ORDER.filter(function (k) { return it[k] !== undefined; })
    .concat(Object.keys(it).filter(function (k) { return ORDER.indexOf(k) === -1; }));
  return '      {\n' + keys.map(function (k) {
    return '        ' + JSON.stringify(k) + ': ' + JSON.stringify(it[k]);
  }).join(',\n') + '\n      }';
}
let src = fs.readFileSync(DATA, 'utf8');
const OPEN = 'the formal correspondence provisions of the Agreement.",\n    "items": [\n';
const start = src.indexOf(OPEN);
if (start === -1) { console.error('register anchor not found'); process.exit(1); }
const from = start + OPEN.length;
const end = src.indexOf('\n    ]', from);
if (end === -1) { console.error('register end not found'); process.exit(1); }
fs.writeFileSync(DATA, src.slice(0, from) + items.map(render).join(',\n') + src.slice(end));
console.log(changed + ' field(s) changed across ' + items.length + ' queries.');
