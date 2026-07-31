'use strict';
/* One-shot: log Owner query MQ-20260731-0759 in the register. Idempotent.
   Temporary — delete once it has run. */
const fs = require('fs');
const P = 'data.js';
const REF = 'MQ-20260731-0759';
let s = fs.readFileSync(P, 'utf8');

if (s.includes(REF)) { console.log('Already logged: ' + REF); process.exit(0); }

const ANCHOR = '    "items": [\n      {\n        "ref": "MQ-20260730-1325",';
if (!s.includes(ANCHOR)) { console.error('Anchor not found in ' + P + ' - aborting, nothing changed.'); process.exit(1); }

const ITEM =
'    "items": [\n' +
'      {\n' +
'        "ref": "MQ-20260731-0759",\n' +
'        "subject": "Easement staking on the MV route east of the substation, and confirmation that cable is installed within that easement",\n' +
'        "area": "MV collection",\n' +
'        "raisedBy": "James Burnett",\n' +
'        "raisedISO": "2026-07-31",\n' +
'        "dueISO": "2026-08-07",\n' +
'        "status": "Open",\n' +
'        "assignedTo": "Construction Manager"\n' +
'      },\n' +
'      {\n' +
'        "ref": "MQ-20260730-1325",';

s = s.replace(ANCHOR, ITEM);
fs.writeFileSync(P, s);

global.window = {};
require('./' + P);
const items = global.window.MURCH_REPORT.clientQueries.items;
if (!items.some(function (q) { return q.ref === REF; })) { console.error('Insert did not take.'); process.exit(1); }
console.log('Logged ' + REF + '. Register now holds ' + items.length + ' queries.');
