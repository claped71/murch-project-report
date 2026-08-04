'use strict';
/* One-shot: log the Owner queries raised 1-4 August. Idempotent.
   Temporary - delete with its workflow once it has run.

   Status rule applied: a reply demonstrably went to the Owner on 3 August for
   seven of these, so they carry respondedISO but stay Open - the reply bodies
   were not read, and Open is the honest default until they are. */
const fs = require('fs');
const path = require('path');

const DATA = 'data.js';
const R = '2026-08-03';   // date Luis replied to Burnett

const NEW = [
  ['MQ-20260804-0732', 'Inverter station foundations', 'Substation and inverters', '2026-08-04', '2026-08-11', null, 'Engineering lead'],
  ['MQ-20260804-0728', 'Medium-voltage trench crossings at site roads', 'MV collection', '2026-08-04', '2026-08-11', null, 'Electrical lead (MV)'],
  ['MQ-20260804-0726', 'Erosion control devices', 'Environmental', '2026-08-04', '2026-08-11', null, 'Construction Manager'],
  ['MQ-20260804-0724', 'Protective caps on conduit ends', 'LV and DC electrical', '2026-08-04', '2026-08-11', null, 'Electrical lead'],
  ['MQ-20260803-0752', 'Query process with the subcontractors', 'Other', '2026-08-03', '2026-08-10', null, 'Construction Manager'],
  ['MQ-20260803-0745', 'Vehicle speed on 48th Street approaching the substation', 'Health and safety', '2026-08-03', '2026-08-10', R, 'Construction Manager'],
  ['MQ-20260803-0743', 'Compaction of the substation grading', 'Substation and inverters', '2026-08-03', '2026-08-10', R, 'Construction Manager'],
  ['MQ-20260803-0739', 'Control building pier stability', 'Substation and inverters', '2026-08-03', '2026-08-10', R, 'Engineering lead'],
  ['MQ-20260803-0736', 'Seven-day working and crew fatigue', 'Health and safety', '2026-08-03', '2026-08-10', null, 'Construction Manager'],
  ['MQ-20260801-0802', 'Module connection caps', 'Module installation', '2026-08-01', '2026-08-07', R, 'QA/QC lead'],
  ['MQ-20260801-0752', 'Tap screw holes and installation method', 'Tracker assembly', '2026-08-01', '2026-08-07', R, 'QA/QC lead'],
  ['MQ-20260801-0749', 'Tracker control unit installations', 'Tracker assembly', '2026-08-01', '2026-08-07', R, 'QA/QC lead'],
  ['MQ-20260801-0736', 'Surface water drainage and grass cutting', 'Environmental', '2026-08-01', '2026-08-07', R, 'Construction Manager']
];

function workingDays(a, b) {
  const x = new Date(a + 'T12:00:00'), y = new Date(b + 'T12:00:00');
  let n = 0, c = new Date(x.getTime());
  while (c < y) { c.setDate(c.getDate() + 1); const d = c.getDay(); if (d !== 0 && d !== 6) n++; }
  return n;
}

function render(r) {
  const [ref, subject, area, raisedISO, dueISO, responded, assignedTo] = r;
  const o = { ref: ref, subject: subject, area: area, raisedBy: 'James Burnett', raisedISO: raisedISO, dueISO: dueISO };
  if (responded) { o.respondedISO = responded; o.turnaroundDays = workingDays(raisedISO, responded); }
  o.status = 'Open';
  o.assignedTo = assignedTo;
  return '      {\n' + Object.keys(o).map(function (k) {
    return '        ' + JSON.stringify(k) + ': ' + JSON.stringify(o[k]);
  }).join(',\n') + '\n      },\n';
}

let s = fs.readFileSync(DATA, 'utf8');
const ANCHOR = 'the formal correspondence provisions of the Agreement.",\n    "items": [\n';
if (s.indexOf(ANCHOR) === -1) { console.error('Register anchor not found - nothing changed.'); process.exit(1); }

let block = '';
const added = [];
NEW.forEach(function (r) {
  if (s.indexOf('"' + r[0] + '"') !== -1) { console.log('Already logged: ' + r[0]); return; }
  block += render(r);
  added.push(r[0]);
});

if (!block) { console.log('Nothing new to log.'); process.exit(0); }

fs.writeFileSync(DATA, s.replace(ANCHOR, ANCHOR + block));

global.window = {};
require(path.resolve(DATA));
const items = global.window.MURCH_REPORT.clientQueries.items;
added.forEach(function (ref) {
  if (!items.some(function (q) { return q.ref === ref; })) { console.error('Insert failed for ' + ref); process.exit(1); }
});
console.log('Logged ' + added.length + '. Register holds ' + items.length + ' queries, ' +
  items.filter(function (q) { return q.status === 'Open' || q.status === 'In review'; }).length + ' outstanding.');
