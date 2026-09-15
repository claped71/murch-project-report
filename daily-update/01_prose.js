// Curated-prose update for the Murch Owner Project Report - Sep 15, 2026 basis.
// Run from the report repo root AFTER tools/sync.js has re-derived the numeric blocks.
const fs = require('fs');
const path = 'data.js';

global.window = {};
require(process.cwd() + '/' + path);
const r = window.MURCH_REPORT;

r.meta.asOf = 'September 15, 2026';

r.headline.statement =
  'This report is issued on Tuesday 15 September with field production executed through Monday 14 September, ' +
  'on top of the site count by circuit taken on 11 September, which is the basis for harness, disconnect boxes ' +
  'and first-circuit feeder cable. Monday was a mechanical day. Module installation produced 1,539 panels, ' +
  'taking the ledger to 155,310 of 171,470 (90.6%) with 16,160 remaining. Pile driving resumed in the final area ' +
  'for the first time since 3 September, adding 180 positions: 30,807 of 31,352 (98.3%) with 545 open, 532 of them ' +
  'in that area. No tracker rows reached completion and no cable was pulled, so the tracker ledger holds at ' +
  '2,293 of 2,486 (92.2%) and cumulative cable at 88,477 feet (32.8%), with harness at 2,611 of 5,007 (52.1%). ' +
  'Medium-voltage terminations advanced to 81 of the 114 inverter-side terminations (first circuit 24 of 24, ' +
  'second 30 of 30, eastern 21 of 30, last 6 of 30); none of the 150 junction-box terminations has started because ' +
  'no medium-voltage junction box has yet been installed. SCADA boxes stand at 13 of 23 mounted, trench closure at ' +
  '49 of 181 and cable pull-in at 18 of 46. Medium-voltage horizontal drilling is complete at 20 of 20 bores. ' +
  'The substation composite stands at 63.1%. Overall completion stands at 87.1%.';

const F = {};
r.focus.forEach(f => { F[f.title] = f; });

F['Updated project schedule — fulfilment tracking'].note =
  'The schedule issued on 8 September is the reference for day-to-day tracking: circuit mechanical completion 2, 10, ' +
  '17 and 24 October; ready-to-energize 14 October; substantial completion 30 November. Open past their day: ' +
  'first-circuit trunk supports (8 September), first-circuit trunk pull (12 September), eastern-circuit tracker ' +
  'completion (8 September), the second-circuit tracker correction and inverter feeder cable (both 14 September), ' +
  'the second-circuit easement pull (4 to 8 September) and the eastern-circuit easement pull start (9 September). ' +
  'Falling due today, 15 September: the remaining pile area, where 180 of the 725 open positions were driven on ' +
  'Monday and 545 remain. In the coming week: first-circuit box connections (52 of 372, to 16 September), ' +
  'first-circuit inverter and medium-voltage connections (to 17 September, with no medium-voltage junction box ' +
  'installed yet) and the eastern-circuit modules (18 September).';

F['Module installation rate'].note =
  '155,310 of 171,470 (90.6%) with 16,160 remaining on the ledger. Monday 14 September produced 1,539 panels ' +
  'across two fronts, the first module production since 11 September. On the updated schedule the eastern-circuit ' +
  'modules are due 18 September and the last circuit 29 September; closing the eastern circuit to its date requires ' +
  'about 2,900 panels a day over the three working days remaining.';

F['Tracker assembly and quality release'].note =
  '2,293 rows complete of 2,486 (92.2%), of which 296 carry Owner acceptance; earned progress stands at 93.8% with ' +
  '35 rows in the last area at 75% completion. No rows reached completion on 12 or 14 September. The correction of ' +
  'rows outside tolerance in Area E stands at 8 rows corrected (10 September) against a 14 September date on the ' +
  'updated schedule; a revised date is owed. The second-circuit tracker completion is likewise past its 14 September date.';

F['Medium-voltage terminations'].note =
  '81 of 114 inverter-side terminations complete, reported by circuit: first circuit 24 of 24, second 30 of 30, ' +
  'eastern 21 of 30, last 6 of 30 (264 terminations in total with the 150 at junction boxes). Nine terminations were ' +
  'added on the latest control cut, all on the eastern and last circuits. None of the 150 junction-box terminations ' +
  'has started because no medium-voltage junction box has been installed to date; junction-box excavation is the ' +
  'controlling item on this front. Trenches closed and compacted stand at 49 of 181 and cable pull-in at 18 of 46. ' +
  'Medium-voltage horizontal drilling is complete at 20 of 20 bores; cable ploughing holds at 38 of 46 segments.';

F['LV and DC installation'].note =
  'Cumulative cable holds at 88,477 feet (32.8%): no cable was pulled on 12 or 14 September, after 3,300 feet on the ' +
  '11th. The first-circuit feeder cable is complete (60,075 feet); the second circuit stands at 10,408 of 53,456 feet. ' +
  'Harness holds at 2,611 of 5,007 assemblies (52.1%) — first circuit complete at 1,117, second 855 of 1,292, ' +
  'eastern 377 of 1,258, last 211 of 1,340. Box connections on the first circuit hold at 52 of 372 and inverter ' +
  'connections at 8 of 838. Against the 8 September schedule the LV works are due 17 September on the first circuit, ' +
  '24 September on the second, 1 October on the eastern and 10 October on the last.';

F['Pile completion'].note =
  '30,807 of 31,352 (98.3%); 180 positions were driven on 14 September, the first pile production since 3 September. ' +
  'The balance of 545 is concentrated in the last area (532 positions), programmed 1 to 15 September on the updated ' +
  'schedule. At the rate demonstrated on Monday the area closes within three working days, which would place it just ' +
  'past its date; the area feeds the remaining tracker and module work behind it.';

F['Substation'].note =
  '63.1% overall — civil 97.6%, structural 67.6%, electrical 42.4% — with electrical the moving discipline. Against ' +
  'an advanced plan that reaches completion at the 25 September date, the front is 19.7 points behind. The ' +
  'equipment-installation window closes on 18 September; control-cable terminations and fibre-optic fusions are the ' +
  'live items, and the fusions still require a dedicated crew.';

r.lookahead[0].period = 'Sep 15 - Sep 19';
r.lookahead[0].items = [
  'First-circuit LV works closed to the 17 September date: box connections from 52 of 372 (due 16 September), inverter connections from 8 of 838, and the first-circuit trunk pull (due 12 September) completed.',
  'Medium-voltage junction-box installation started (none of the 23 installed to date) so that junction-box terminations (0 of 150) can begin inside the first-circuit connection window, with the full committed termination crew productive.',
  'Second-circuit tracker correction taken from 8 rows to completion or a revised date issued; second-circuit inverter feeder cable (10,408 of 53,456 feet, past its 14 September date) progressed or re-dated.',
  'Pile installation in the final area continued at the rate demonstrated on 14 September (545 positions open) and the area closed.',
  'Second-circuit easement medium-voltage cable pull completed (due 4 to 8 September) and the eastern-circuit pull started (due from 9 September).',
  'Module installation sustained on both fronts and the eastern circuit closed to its 18 September date.',
  'SCADA boxes taken from 13 of 23 mounted to complete, and fibre-optic fusions started with a dedicated crew.',
  'Responses issued on the two open Owner queries that fell due on 8 and 9 September, following the position presented at the 10 September site meeting.',
  'Harness and cable production reported daily by circuit.'
];
r.lookahead[1].items[1] =
  'Second-circuit LV works closed to the 24 September date: inverter feeder cable, trunk supports, trunk pull (19 September) and harness from 855 of 1,292.';

r.ownerActions.asOf = 'Sep 15, 2026';

// ---- write back, preserving the file's shape
let src = fs.readFileSync(path, 'utf8');
const head = src.slice(0, src.indexOf('window.MURCH_REPORT'));
const sanitizedHead = head
  .replace(/Sep(tember)? 14,? 2026/g, 'September 15, 2026')
  .replace(/Saturday 12 September/g, 'Monday 14 September');
fs.writeFileSync(path, sanitizedHead + 'window.MURCH_REPORT = ' + JSON.stringify(r, null, 2) + ';\n', 'utf8');
console.log('curated prose applied; statement words =', r.headline.statement.split(/\s+/).length);

// ---- cache buster must follow the final data.js bytes
const crypto = require('crypto');
const sha10 = crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex').slice(0, 10);
let idx = fs.readFileSync('index.html', 'utf8');
const before = idx;
idx = idx.replace(/data\.js\?v=[0-9a-f]+/g, 'data.js?v=' + sha10);
if (idx === before) { console.error('cache buster anchor not found'); process.exit(1); }
fs.writeFileSync('index.html', idx, 'utf8');
console.log('cache buster -> data.js?v=' + sha10);
