'use strict';
/*
 * sync.js — derive the client Owner Project Report from the internal Murch dashboard.
 *
 *   node tools/sync.js <path-to-murch-dashboard/data.js> [--write]
 *
 * Reads window.MURCH_DATA from the internal dashboard and the CURRENT client
 * data.js, then rewrites the DERIVED blocks (numbers, dates, series, civil,
 * quality, weather) while PRESERVING the CURATED blocks (prose that needs
 * judgment: headline statement, lookahead, ownerItems, focus, photos, safety).
 *
 * Curated blocks are never silently carried forward as fresh: when the numbers
 * behind them move, the block is listed under REVIEW so the operator rewrites it.
 *
 * Without --write the script only prints the diff and the review list.
 */

const fs = require('fs');
const path = require('path');
const { scrub, hits } = require('./redact');

const SRC = process.argv[2];
const WRITE = process.argv.includes('--write');
const CLIENT = path.join(__dirname, '..', 'data.js');

if (!SRC || !fs.existsSync(SRC)) {
  console.error('usage: node tools/sync.js <murch-dashboard/data.js> [--write]');
  process.exit(2);
}

/* ---------- load both datasets ---------- */
function loadWindow(file, key) {
  const g = global;
  g.window = {};
  g.document = { readyState: 'loading', addEventListener() {}, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null };
  delete require.cache[require.resolve(path.resolve(file))];
  try { require(path.resolve(file)); } catch (e) { if (!g.window[key]) throw e; }
  const d = g.window[key];
  if (!d) throw new Error('no ' + key + ' in ' + file);
  return d;
}

const I = loadWindow(SRC, 'MURCH_DATA');       // internal
const C = loadWindow(CLIENT, 'MURCH_REPORT');  // current client report

const review = [];
const changed = [];
function note(list, msg) { list.push(msg); }
function fmt(n) { return Number(n).toLocaleString('en-US'); }
function pctStr(x) { return (x * 100).toFixed(1) + '%'; }

/* ---------- 1. meta ---------- */
const prevAsOf = C.meta.asOf;
C.meta.asOf = longDate(I.control.asOf);
if (C.meta.asOf !== prevAsOf) changed.push(`asOf ${prevAsOf} -> ${C.meta.asOf}`);

function longDate(s) {
  // 'Jul 27, 2026' -> 'July 27, 2026'
  const M = { Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June',
              Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December' };
  return String(s).replace(/^([A-Z][a-z]{2})\b/, (m, a) => M[a] || a);
}

/* ---------- 2. gates ---------- */
// Forecast dates live in the client file (they are a reporting decision, not an
// internal gate). Only quantities are pulled through.
const GATE_KEYS = { piles: 'piles', trackers: 'trackers', modules: 'modules', electrical: 'electrical' };
for (const g of C.gates) {
  const src = I.control[GATE_KEYS[g.key]];
  if (!src) continue;
  const before = g.installed + '/' + g.total;
  g.installed = src.installed;
  g.total = src.total;
  if (before !== g.installed + '/' + g.total) changed.push(`gate ${g.key} ${before} -> ${g.installed}/${g.total}`);
  // pace status: below required rate unless the discipline is finished
  const pct = g.total ? g.installed / g.total : 0;
  g.status = pct >= 1 ? 'Complete' : (g.installed === 0 ? 'Not started' : 'Below rate');
}

/* ---------- 3. overall completion ---------- */
// Weighted by the four mechanical/electrical gates plus civil, on the same
// weights the previous report used, so the headline number stays comparable.
const W = C.headline.weights || { piles: 0.28, trackers: 0.22, modules: 0.26, electrical: 0.14, civil: 0.10 };
const civilAvg = avg((I.civilActivities || []).map(a => Number(a.done) || 0));
const overall =
  W.piles * pct('piles') + W.trackers * pct('trackers') + W.modules * pct('modules') +
  W.electrical * pct('electrical') + W.civil * (civilAvg / 100);
function pct(k) { const c = I.control[k]; return c && c.total ? c.installed / c.total : 0; }
function avg(a) { return a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0; }
const newOverall = Math.round(overall * 1000) / 10;
if (newOverall !== C.headline.overall) changed.push(`overall ${C.headline.overall}% -> ${newOverall}%`);
C.headline.overall = newOverall;

/* ---------- 4. series (cumulative, anchored to the control basis) ---------- */
const TASK = {
  piles: 'Pile installation',
  trackers: 'Tracker production control (incl. purlin completion)',
  modules: 'Module installation'
};
for (const key of Object.keys(TASK)) {
  const row = (I.dailyProductionHistory || []).find(r => r.task === TASK[key]);
  if (!row || !Array.isArray(row.daily) || !row.daily.length) { note(review, `series.${key}: no daily data in source`); continue; }
  const total = I.control[key].installed;
  const daily = row.daily.map(d => ({ d: d.day, v: Math.round(Number(d.value) || 0) }));
  const sum = daily.reduce((a, b) => a + b.v, 0);
  // Anchor so the LAST point equals the control basis exactly. This is the rule
  // that prevents a cumulative figure appearing on a zero-production day.
  let c = total - sum;
  let clamped = false;
  if (c < 0) { note(review, `series.${key}: daily entries sum to ${fmt(sum)} against a control basis of ${fmt(total)} — the source over-counts by ${fmt(sum - total)}; cumulative is clamped and the discrepancy should be reconciled`); c = 0; }
  const out = daily.map(d => {
    c += d.v;
    if (c > total) { c = total; clamped = true; }     // never publish above the control basis
    return { d: d.d, v: d.v, c };
  });
  out[out.length - 1].c = total;                      // hard anchor to the control basis
  if (clamped) note(review, `series.${key}: cumulative curve is clamped at the control basis — the daily bars remain as reported`);
  C.series[key] = out;
  C.seriesMeta[key].total = I.control[key].total;
  C.seriesMeta[key].planStart = out[0].d;
  C.seriesMeta[key].planStartVal = out[0].c;
}

/* ---------- 5. milestones (dates from the internal milestone list) ---------- */
const MSMAP = {
  'Mechanical Completion': 'Mechanical Completion',
  'Provisional Interconnection': 'Provisional Interconnection',
  'Commercial Operation Date': 'Commercial Operation Date',
  'Substantial Completion': 'Substantial Completion'
};
for (const m of C.milestones) {
  const src = (I.milestones || []).find(x => MSMAP[m.name] && x.name === MSMAP[m.name]);
  if (!src) continue;
  const before = m.forecast;
  if (m.pin) { note(review, `milestones."${m.name}".forecast is PINNED (${m.forecast}) — internal source says "${src.forecast}"; unpin if the editorial reason no longer applies`); continue; }
  if (src.forecast) m.forecast = String(src.forecast).replace(/-/g, '–').replace(/–/g, ' – ').replace(/\s+/g, ' ').trim();
  if (before !== m.forecast) {
    changed.push(`milestone ${m.name} forecast ${before} -> ${m.forecast}`);
    note(review, `milestones."${m.name}".note — forecast moved, re-read the basis line`);
  }
  const lvl = String(src.status || '').toLowerCase();
  m.status = lvl === 'high' ? 'On target' : (lvl === 'watch' ? 'Watch' : 'At risk');
}

/* ---------- 6. civil (company names dropped, labels made client-facing) ---------- */
// Internal activity names are control-sheet shorthand. Map them to the labels the
// Owner report uses; anything unmapped is flagged rather than published raw.
const CIVIL_LABELS = {
  'Earthworks cut / fill': 'Bulk earthworks — cut and fill',
  'Perimeter fence': 'Perimeter fence',
  'Sediment basins / environmental controls': 'Sediment basins / environmental controls',
  'Internal roads': 'Internal access roads',
  'PS foundations': 'Inverter station foundations',
  'Foundation SET': 'Substation (overall)'
};
// Words that mean "work remains" — a 100%/Complete row carrying one is a contradiction.
const REMAINS = /\bremain|\bremaining\b|starts after|must finish|outstanding|pending|to be |left\b/i;

if (Array.isArray(I.civilActivities)) {
  const prev = {};
  (C.civil || []).forEach(c => { prev[c.activity] = c; });
  C.civil = I.civilActivities.map(a => {
    const raw = String(a.activity).trim();
    const label = CIVIL_LABELS[raw];
    if (!label) note(review, `civil: unmapped activity "${raw}" — add it to CIVIL_LABELS in tools/sync.js or it publishes with the internal name`);
    const activity = label || scrub(raw).replace(/^(\w)/, s => s.toUpperCase());
    const done = Number(a.done) || 0;
    let noteText = scrub(a.note || '');
    const before = prev[activity];
    if (noteText.replace(/[^a-z]/gi, '').length < 20) {
      // Redaction emptied the note — keep the last approved wording rather than publish a blank.
      noteText = before ? before.note : '';
      note(review, `civil."${activity}": source note was fully redacted — previous wording retained, rewrite it`);
    }
    let status = a.status === 'Complete' ? 'Complete' : (a.status || 'Active');
    if ((done >= 100 || status === 'Complete') && REMAINS.test(noteText)) {
      status = 'Active';
      note(review, `civil."${activity}": source marks it complete but the note still describes remaining work — status forced to Active, confirm the true percentage`);
    }
    return { activity, done, status, note: noteText };
  }).filter(a => a.activity);

  // Editorial overrides. The internal sheet reports some activities against the
  // released areas only; the Owner report states them against full project scope.
  // Every override is announced on each run so it cannot quietly go stale.
  const ov = C.civilOverrides || {};
  C.civil.forEach(c => {
    const o = ov[c.activity];
    if (!o) return;
    const from = `${c.done}% ${c.status}`;
    if (o.done !== undefined) c.done = o.done;
    if (o.status !== undefined) c.status = o.status;
    if (o.note !== undefined) c.note = o.note;
    note(review, `civil."${c.activity}": OVERRIDE applied (${from} -> ${c.done}% ${c.status}) — reason: ${o.why || 'not recorded'}. Re-confirm it still holds.`);
  });
  changed.push(`civil: ${C.civil.length} activities refreshed`);
}

/* ---------- 7. quality (derived from the control basis) ---------- */
const trk = I.control.trackers;
const qTiles = C.quality.tiles;
setTile(qTiles, 'Piles executed', fmt(I.control.piles.installed));
setTile(qTiles, 'Tracker rows released', `${fmt(trk.released)} / ${fmt(trk.installed)}`,
  `${pctStr(trk.released / trk.total)} of the ${fmt(trk.total)} rows in scope and ${pctStr(trk.released / trk.installed)} of the ${fmt(trk.installed)} built. Released rows feed the module installation front.`);
function setTile(arr, label, value, noteText) {
  const t = arr.find(x => x.label === label);
  if (!t) return;
  if (t.value !== value) changed.push(`quality "${label}" ${t.value} -> ${value}`);
  t.value = value;
  if (noteText) t.note = noteText;
}
// Inspection figures are not in the internal data.js (they live in its HTML),
// so they are flagged for manual refresh rather than silently carried forward.
note(review, 'quality: inspection counts (QA inspected / awaiting / refusals) are not machine-readable from the dashboard data — confirm against the current QA report');

/* ---------- 8. weather / lost-day log ---------- */
// A zero across every discipline on the same day is a production stop.
const zeroDays = zeroProductionDays();
for (const day of zeroDays) {
  if (!C.weatherLog.some(w => w.date.indexOf(day) === 0 || w.date.indexOf(day + ',') === 0)) {
    C.weatherLog.unshift({ date: `${day}, ${yearOf()}`, type: 'To confirm', impact: 'Full stop — all fronts',
      detail: 'Zero production recorded on every front. Confirm the cause and wording before publishing.' });
    note(review, `weatherLog: new zero-production day ${day} added — set the cause and confirm the weekday`);
  }
}
function zeroProductionDays() {
  const rows = Object.keys(TASK).map(k => (I.dailyProductionHistory || []).find(r => r.task === TASK[k])).filter(Boolean);
  if (rows.length < 2) return [];
  const last = rows[0].daily.slice(-4).map(d => d.day);
  return last.filter(day => rows.every(r => {
    const hit = r.daily.find(d => d.day === day);
    return hit && Number(hit.value) === 0;
  }));
}
function yearOf() { const m = String(I.control.asOf).match(/(\d{4})/); return m ? m[1] : '2026'; }

/* ---------- 9. staleness review for curated prose ---------- */
if (changed.some(c => c.startsWith('gate') || c.startsWith('overall'))) {
  note(review, 'headline.statement — quantities moved, re-read the summary paragraph');
  note(review, 'focus[] — re-check the remaining-quantity figures quoted in each focus area');
  note(review, 'lookahead[] — re-check the required daily rates against the new basis');
}
if (Array.isArray(I.photos) && I.photos.length) {
  const newest = I.photos[0];
  const have = C.photos.some(p => (p.title || '').slice(0, 18).toLowerCase() === scrub(newest.title || '').slice(0, 18).toLowerCase());
  if (!have) note(review, `photos: newest dashboard photo ("${String(newest.title).slice(0, 50)}...") is not in the report — add it ONLY after checking the image itself for supplier branding in frame`);
}

/* ---------- 10. redaction gate on the derived output ---------- */
const violations = [];
walk(C, [], (val, p) => {
  const h = hits(val);
  if (h.length) violations.push({ path: p.join('.'), text: String(val).slice(0, 120), rules: h.map(x => `${x.type}:${x.term}`) });
});
function walk(o, p, fn) {
  if (typeof o === 'string') return fn(o, p);
  if (Array.isArray(o)) return o.forEach((v, i) => walk(v, p.concat(i), fn));
  if (o && typeof o === 'object') return Object.keys(o).forEach(k => walk(o[k], p.concat(k), fn));
}

/* ---------- 11. report ---------- */
console.log('\n=== DERIVED (' + changed.length + ' changes) ===');
changed.forEach(c => console.log('  · ' + c));
console.log('\n=== REVIEW BEFORE PUBLISHING (' + review.length + ') ===');
review.forEach(r => console.log('  ! ' + r));
if (violations.length) {
  console.log('\n=== REDACTION VIOLATIONS (' + violations.length + ') — NOT WRITTEN ===');
  violations.forEach(v => console.log(`  ✗ ${v.path}: [${v.rules.join(', ')}] "${v.text}"`));
  process.exit(1);
}
console.log('\n=== REDACTION: clean ===');

if (!WRITE) { console.log('\n(dry run — pass --write to update data.js)\n'); process.exit(0); }

/* ---------- 12. write ---------- */
const header = `'use strict';\n/* Murch Solar Project — Owner Project Report. Physical progress dataset.\n   Generated ${C.meta.asOf} by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */\n`;
fs.writeFileSync(CLIENT, header + 'window.MURCH_REPORT = ' + stringify(C) + ';\n');
console.log('\nwrote ' + CLIENT + '\n');

function stringify(o) { return JSON.stringify(o, null, 2); }
