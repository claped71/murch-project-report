// Owner report (Jose, Sep 28): substation lines in the civil table - Owner-facing names, the SET civil status,
// and a note for the O&M building row that was publishing blank. Runs after tools/sync.js, then re-runs it so the
// overrides are applied by the sync itself (and stay applied on every scheduled refresh).
const fs = require('fs');
const { execSync } = require('child_process');

// 1. sync.js: map the substation rows to Owner-facing names (they were publishing with internal names)
let s = fs.readFileSync('tools/sync.js', 'utf8');
const oldMap = "  'Foundation SET': 'Substation (overall)'\n};";
const newMap = "  'Foundation SET': 'Substation (overall)',\n" +
  "  'Foundation SET (composite)': 'Substation (overall)',\n" +
  "  'Pad SET': 'Substation — pad',\n" +
  "  'Main Foundation SET': 'Substation — main equipment foundations',\n" +
  "  'Small Foundation SET': 'Substation — small equipment foundations',\n" +
  "  'O&M Building': 'Substation — O&M building'\n};";
if (s.split(oldMap).length !== 2) { console.error('CIVIL_LABELS anchor not found once'); process.exit(1); }
fs.writeFileSync('tools/sync.js', s.replace(oldMap, newMap), 'utf8');

// 2. data.js: Owner-facing notes for the substation rows + the SET civil update in the substation focus
global.window = {};
require(process.cwd() + '/data.js');
const r = window.MURCH_REPORT;
const why = 'Owner wording for the substation rows (Jose, Sep 28)';
r.civilOverrides['Substation (overall)'] = { why,
  note: 'Substation 78.6% on the 26 September register: civil 95.6%, mechanical 61.2%, electrical 79.6%, bus and connectors 74.0%, grounding 92.6%, control and communications 44.4%. ' +
        'Substation civil works are complete except three close-out items to be finished by 3 October: reinstatement of a section of the substation perimeter fence, final regrading and the final rock surfacing layer. ' +
        'The utility-interconnection poles were erected over the weekend of 26 and 27 September.' };
r.civilOverrides['Substation — pad'] = { why, note: 'Complete (5 January to 20 May 2026).' };
r.civilOverrides['Substation — main equipment foundations'] = { why, note: 'Complete on 10 July 2026.' };
r.civilOverrides['Substation — small equipment foundations'] = { why, note: 'Complete on 6 August 2026, the last substation foundation line to close.' };
r.civilOverrides['Substation — O&M building'] = { why, note: 'Complete (10 to 11 July 2026).' };

const f = r.focus.find(x => x.title === 'Substation');
if (!f) { console.error('Substation focus not found'); process.exit(1); }
const civ = ' Substation civil works are complete except three close-out items due by 3 October: reinstatement of a section of the substation perimeter fence, final regrading and the final rock surfacing layer. The utility-interconnection poles were erected over the weekend of 26 and 27 September.';
f.note = f.note.replace(/ Control and communications is the weakest front\.$/, '') + civ + ' Control and communications is the weakest front.';
f.detail = f.note;

const src = fs.readFileSync('data.js', 'utf8');
const head = src.slice(0, src.indexOf('window.MURCH_REPORT'));
fs.writeFileSync('data.js', head + 'window.MURCH_REPORT = ' + JSON.stringify(r, null, 2) + ';\n', 'utf8');

// 3. re-run the sync so it applies the new labels and overrides itself (it also sets the cache buster)
const dash = fs.existsSync('/tmp/dash_stripped.js') ? '/tmp/dash_stripped.js' : process.env.DASH;
execSync('node tools/sync.js ' + dash + ' --write', { stdio: 'ignore' });
global.window = {};
delete require.cache[require.resolve(process.cwd() + '/data.js')];
require(process.cwd() + '/data.js');
const bad = window.MURCH_REPORT.civil.filter(c => /SET|composite/.test(c.activity) || !c.note);
if (bad.length) { console.error('civil rows still unmapped or blank: ' + bad.map(b => b.activity).join(', ')); process.exit(1); }
console.log('substation civil rows mapped and noted');
