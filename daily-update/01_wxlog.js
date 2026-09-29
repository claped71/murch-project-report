// Owner report (Jose, Sep 28): "Days with recorded production impact" lists only days with a stated reason.
// Removes the auto-added "To confirm" rows, records Sep 19 as rain (Jose, Sep 21), and stops sync.js from
// publishing future zero days without a cause (it now only flags them for review). Re-runs the sync afterwards.
const fs = require('fs');
const { execSync } = require('child_process');

let s = fs.readFileSync('tools/sync.js', 'utf8');
const oldBlk = "    C.weatherLog.unshift({ date: `${day}, ${yearOf()}`, type: 'To confirm', impact: 'Full stop — all fronts',\n" +
               "      detail: 'Zero production recorded on every front. Confirm the cause and wording before publishing.' });\n" +
               "    note(review, `weatherLog: new zero-production day ${day} added — set the cause and confirm the weekday`);";
const newBlk = "    // Jose, Sep 28: a day is published only with its reason - an unexplained zero day is flagged, never listed.\n" +
               "    note(review, `weatherLog: zero-production day ${day} NOT published — add it with its cause (type/detail) if it belongs in the log`);";
if (s.split(oldBlk).length !== 2) { console.error('weatherLog anchor not found once'); process.exit(1); }
fs.writeFileSync('tools/sync.js', s.replace(oldBlk, newBlk), 'utf8');

global.window = {};
require(process.cwd() + '/data.js');
const r = window.MURCH_REPORT;
const before = r.weatherLog.length;
r.weatherLog = r.weatherLog.filter(w => w.type !== 'To confirm' || /^Sep 19,/.test(w.date));
const s19 = r.weatherLog.find(w => /^Sep 19,/.test(w.date));
if (!s19) { console.error('Sep 19 row not found'); process.exit(1); }
Object.assign(s19, { date: 'Sep 19, 2026 (Sat)', type: 'Rain', impact: 'Full stop — all fronts', detail: 'Rain. No pile, tracker, module or electrical production.' });
if (r.weatherLog.some(w => w.type === 'To confirm')) { console.error('To confirm rows remain'); process.exit(1); }
const src = fs.readFileSync('data.js', 'utf8');
const head = src.slice(0, src.indexOf('window.MURCH_REPORT'));
fs.writeFileSync('data.js', head + 'window.MURCH_REPORT = ' + JSON.stringify(r, null, 2) + ';\n', 'utf8');

const dash = fs.existsSync('/tmp/dash_stripped.js') ? '/tmp/dash_stripped.js' : process.env.DASH;
execSync('node tools/sync.js ' + dash + ' --write', { stdio: 'ignore' });
global.window = {};
delete require.cache[require.resolve(process.cwd() + '/data.js')];
require(process.cwd() + '/data.js');
const after = window.MURCH_REPORT.weatherLog;
if (after.some(w => w.type === 'To confirm')) { console.error('sync re-added an unexplained day'); process.exit(1); }
console.log('weather log: ' + before + ' -> ' + after.length + ' rows');
