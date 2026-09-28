// Curated-prose update for the Murch Owner Project Report - Sep 28, 2026 basis (executed through Sat Sep 26).
// Run from the report repo root AFTER tools/sync.js has re-derived the numeric blocks.
// Owner rules: numbers and neutral positions only - no remediation, punch-list, purchasing or pole status.
const fs = require('fs');
const path = 'data.js';

global.window = {};
require(process.cwd() + '/' + path);
const r = window.MURCH_REPORT;
const need = (c, m) => { if (!c) { console.error('missing: ' + m); process.exit(1); } };

r.meta.asOf = 'September 28, 2026';
r.meta.phase = 'Construction — Electrical installation and mechanical close-out';

r.headline.statement =
  'This report is issued on Monday 28 September with production executed through Saturday 26 September. ' +
  'Tracker installation is complete: all 2,486 rows are built with torque tubes and purlins and are ready to receive modules, ' +
  'and pile installation is complete at 31,352 of 31,352. Medium-voltage cable is fully installed and tested: cable ploughing ' +
  'closed at 46 of 46 segments on Saturday and all cable tests passed, taking the medium-voltage collection composite to 90.5%. ' +
  'On Saturday 3,004 feet of feeder cable were pulled on the second circuit, which completes its feeder scope, taking cumulative ' +
  'cable to 160,207 feet of 269,748 (59.4%); 135 of the 145 rows on that circuit are connected. Medium-voltage terminations ' +
  'stand at 96 of 264, with the inverter side at 96 of 114 and the junction-box side still to start. Module installation stands ' +
  'at 161,742 of 171,470 (94.3%); no module production was reported for Saturday. The substation stands at 78.6% on its ' +
  'earned-value register. Overall weighted physical completion stands at 92.5% against the gate measure and 93.1% on earned progress.';

const F = {};
r.focus.forEach(f => { F[f.title] = f; });
const setF = (t, level, text) => { need(F[t], 'focus ' + t); if (level) F[t].level = level; F[t].note = text; F[t].detail = text; };

setF('Updated project schedule — fulfilment tracking', null,
  'The schedule issued on 8 September is the reference for day-to-day tracking: circuit mechanical completion 2, 10, 17 and ' +
  '24 October; ready-to-energize 14 October; substantial completion 30 November. Piles and tracker rows are complete, ' +
  'medium-voltage cable is installed and tested, and the second-circuit feeder cable is fully pulled. The first-circuit LV ' +
  'connections closed on 22 September. Still open past its day: modules on the eastern circuit (18 September).');

setF('Module installation rate', null,
  '161,742 of 171,470 (94.3%) with 9,728 remaining. With every tracker row now ready to receive modules, the remaining ' +
  'installation is concentrated in the final area, which stands at 2,070 installed after 640 panels on 24 September and ' +
  '858 on 25 September. No module production was reported on 26 September.');

setF('Tracker assembly and quality release', 'Watch',
  'Tracker installation is complete: 2,486 of 2,486 rows with torque tubes and purlins, and earned progress equals the ' +
  'completion gate at 100%. Owner acceptance stands at 886 rows and EPC approval at 2,068; converting completed rows to ' +
  'Owner acceptance is now the tracker action.');

setF('Medium-voltage terminations', null,
  'Medium-voltage cable is fully installed and tested: ploughing closed at 46 of 46 segments on 26 September and all cable ' +
  'tests passed; horizontal drilling is complete at 20 of 20 bores. Terminations stand at 96 of 264 — the inverter side at ' +
  '96 of 114, with only the last circuit open at 12 of 30, and the junction-box side at zero of 150, now the largest open ' +
  'medium-voltage scope. Junction boxes stand at eight of 23 complete, trenches closed and compacted at 81 of 181 and cable ' +
  'pull-in at 23 of 46; the first four of 46 units are fully closed.');

setF('LV and DC installation', null,
  'Cumulative cable stands at 160,207 feet (59.4%) after 3,004 feet on 26 September; feeder cable is at 134,760 of 229,435 ' +
  'feet and trunk cable at 25,447 of 40,313. The first circuit is complete on cable, disconnect boxes and LV terminations. ' +
  'The second circuit has its feeder cable fully pulled at 53,565 feet and 135 of its 145 rows connected. The eastern ' +
  'circuit stands at 20,520 feet of feeder cable and 3,132 feet of trunk cable. Harness stands at 3,143 of 5,007 assemblies ' +
  '(62.8%), box connections at 381 of 1,676 and inverter connections at 194 of 838. On the 8 September schedule the LV ' +
  'works are due 1 October on the eastern circuit and 10 October on the last.');

setF('Pile completion', 'Complete',
  'Pile installation is complete: 31,352 of 31,352 (100%) across all areas.');

setF('Substation', null,
  '78.6% overall on the 26 September register, measured on a six-discipline earned-value model: civil 95.6%, mechanical ' +
  '61.2%, electrical 79.6%, bus and connectors 74.0%, grounding 92.6% and control and communications 44.4%, with 165 of ' +
  '257 items closed. This basis replaces the three-discipline figure of 70.1% reported through 24 September; the two are ' +
  'not directly comparable. Control and communications is the weakest front.');

need(r.lookahead.length >= 2, 'lookahead');
r.lookahead[0].period = 'Sep 28 - Oct 3';
r.lookahead[0].items = [
  'Eastern-circuit LV works to its 1 October date: 52,468 feet of cable remain over four working days, about 13,100 feet a day.',
  'Second-circuit row connections: 10 of 145 rows remain.',
  'First-circuit mechanical completion on 2 October.',
  'Module installation in the final area: 9,728 panels remain on the project.',
  'Substation mechanical assembly to its 30 September gate.',
  'Medium-voltage junction-box terminations started: the full 150 remain.'
];
r.lookahead[1].period = 'Oct 5 - Oct 10';
r.lookahead[1].items = [
  'Last-circuit LV works to its 10 October date: the full 66,395 feet of cable on that circuit remain, about 5,500 feet a day over twelve working days.',
  'Second-circuit mechanical completion on 10 October.',
  'Trench closure and compaction on the two eastern circuits.'
];

const M = {};
r.milestones.forEach(m => { M[m.name] = m; });
need(M['Mechanical Completion'] && M['Provisional Interconnection'], 'milestones');
M['Mechanical Completion'].note =
  'Contract date not achievable. Piles and tracker rows are complete and medium-voltage cable is installed and tested. ' +
  'First-circuit LV terminations are complete; the remaining scope on that circuit is module series connection and piercing ' +
  'connectors. Circuit mechanical completion dates on the 8 September schedule are 2, 10, 17 and 24 October.';
M['Provisional Interconnection'].note =
  'Gated by the substation, at 78.6% on the six-discipline earned-value basis, and by medium-voltage terminations at 96 of 264 ' +
  'with the junction-box side at zero of 150. Medium-voltage cable is fully installed and tested, and the first four of 46 ' +
  'units are fully closed.';

const G = {};
r.gates.forEach(g => { G[g.key] = g; });
need(G.piles && G.trackers, 'gates');
G.piles.forecast = 'Complete — confirmed Sep 28, 2026';
G.trackers.forecast = 'Complete — confirmed Sep 28, 2026';

const E = {};
r.earnedProgress.scopes.forEach(s => { E[s.scope] = s; });
need(E['Tracker rows'] && E['Electrical — all fronts'], 'earnedProgress');
E['Tracker rows'].inProgress = 'All rows complete — no rows in progress';
E['Tracker rows'].detail = 'All 2,486 rows are complete with torque tubes and purlins; earned progress equals the completion gate.';
E['Electrical — all fronts'].detail =
  'LV and DC cable, MV collection, inverter stations and the substation combined. All 23 stations are set and welded and ' +
  'medium-voltage cable is fully installed and tested; inverter-side terminations are complete on the first three circuits, ' +
  'and the first four of 46 units have their full termination set closed — the measure that counts toward mechanical completion.';

const MT = {};
r.material.forEach(m => { MT[m.item] = m; });
need(MT['Foundation piles'] && MT['PV modules'] && MT['Tracker structures'] && MT['Inverters'], 'material');
MT['Foundation piles'].note = 'Delivery complete and reconciled; installation is complete at 31,352 of 31,352.';
MT['PV modules'].note = 'DELIVERY COMPLETE — the full project quantity is on site; 9,728 modules remain to install.';
MT['Tracker structures'].note = 'Delivered; tracker installation is complete on all 2,486 rows.';
MT['Inverters'].note =
  'All 23 inverter stations are delivered, set, anchored and welded on their foundations. Medium-voltage terminations stand ' +
  'at 96 of 264, with the inverter-side terminations complete on the first three circuits; LV terminations follow the cable pull.';

const q0 = r.quality.headline;
r.quality.headline = q0.replace('886 of 2,303 completed tracker rows (38.5%)', '886 of 2,486 completed tracker rows (35.6%)');
need(r.quality.headline !== q0, 'quality headline anchor');
const tile = r.quality.tiles.find(t => t.label === 'Piles executed');
need(tile, 'piles tile');
tile.note = 'Current executed basis, 100% of project scope.';

r.ownerActions.asOf = 'Sep 28, 2026';

// ---- write back, preserving the file's shape
let src = fs.readFileSync(path, 'utf8');
const head = src.slice(0, src.indexOf('window.MURCH_REPORT'));
fs.writeFileSync(path, head + 'window.MURCH_REPORT = ' + JSON.stringify(r, null, 2) + ';\n', 'utf8');
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
