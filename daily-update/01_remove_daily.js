// Owner report layout change (Jose, Sep 28, 2026): remove the "Daily installation output" column chart.
// Mechanical production is complete or closing; the daily piles / trackers / modules bars are not needed at this phase.
// Run from the report repo root after tools/sync.js. Edits index.html only.
const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');
const rep = (a, b) => {
  const n = h.split(a).length - 1;
  if (n !== 1) { console.error('anchor x' + n + ': ' + a.slice(0, 80)); process.exit(1); }
  h = h.replace(a, b);
};
rep('    <div class="grid g3" id="curveGrid"></div>\n' +
    '    <div style="height:14px"></div>\n' +
    '    <div class="chartcard">\n' +
    '      <h3>Daily installation output</h3>\n' +
    '      <p class="csub" id="dailySub">Reported daily production. Non-working days and weather stops appear as zero.</p>\n' +
    '      <div class="legend" id="dailyLegend"></div>\n' +
    '      <div id="dailyChart"></div>\n' +
    '    </div>\n' +
    '  </section>',
    '    <div class="grid g3" id="curveGrid"></div>\n' +
    '  </section>');
// The renderer stays in place but returns when its container is absent, so nothing else on the page breaks.
rep('  function renderDaily(){\n    var keys=[\'piles\',\'trackers\',\'modules\'];',
    '  function renderDaily(){\n    if(!document.getElementById(\'dailyChart\')) return;\n    var keys=[\'piles\',\'trackers\',\'modules\'];');
fs.writeFileSync('index.html', h, 'utf8');
console.log('daily installation output chart removed');

// ---- tracker earned line: sync.js printed "Partial-row credit suspended" whenever earned == gate, which is
// wrong once every row is complete. Fix the rule for all future syncs, and correct this run's output.
let s = fs.readFileSync('tools/sync.js', 'utf8');
const sOld = "      sc.inProgress = (trk.earnedPct != null && pct1(trk.earnedPct) === trkGatePct)\n" +
             "        ? 'Partial-row credit suspended — open rows reported by ladder step, not credited'\n" +
             "        : sc.inProgress;";
const sNew = "      sc.inProgress = trk.installed >= trk.total\n" +
             "        ? 'All rows complete — no rows in progress'\n" +
             "        : (trk.earnedPct != null && pct1(trk.earnedPct) === trkGatePct)\n" +
             "        ? 'Partial-row credit suspended — open rows reported by ladder step, not credited'\n" +
             "        : sc.inProgress;";
if (s.split(sOld).length !== 2) { console.error('sync.js anchor not found once'); process.exit(1); }
fs.writeFileSync('tools/sync.js', s.replace(sOld, sNew), 'utf8');

let d = fs.readFileSync('data.js', 'utf8');
const dOld = '"inProgress": "Partial-row credit suspended — open rows reported by ladder step, not credited"';
if (d.split(dOld).length !== 2) { console.error('data.js inProgress anchor not found once'); process.exit(1); }
d = d.replace(dOld, '"inProgress": "All rows complete — no rows in progress"');
fs.writeFileSync('data.js', d, 'utf8');
const sha10 = require('crypto').createHash('sha256').update(fs.readFileSync('data.js')).digest('hex').slice(0, 10);
let idx = fs.readFileSync('index.html', 'utf8');
const idx2 = idx.replace(/data\.js\?v=[0-9a-f]+/g, 'data.js?v=' + sha10);
if (idx2 === idx) { console.error('cache buster anchor not found'); process.exit(1); }
fs.writeFileSync('index.html', idx2, 'utf8');
console.log('tracker inProgress fixed; cache buster -> data.js?v=' + sha10);
