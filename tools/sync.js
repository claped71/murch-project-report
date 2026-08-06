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

/* ---------- 0. previous basis, captured before anything is overwritten ---------- */
const prevBasis = {};
for (const g of (C.gates || [])) { if (g.key && typeof g.installed === 'number') prevBasis[g.key] = g.installed; }

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
  // A percentage-only card (the combined Electrical total) carries no
  // installed/total pair. Pulling control.electrical through here would
  // silently replace the four-front total with the LV cable gate (0 lf) and
  // make the report disagree with the dashboard. Sync its percentages instead.
  if (g.pctOnly) {
    const et = I.electricalTotal;
    if (et) {
      const beforePct = g.gatePct + '/' + g.earnedPct;
      g.gatePct = et.gatePct;
      g.earnedPct = et.earnedPct;
      g.earnedLabel = et.earnedPct + '% earned incl. work in progress';
      if (beforePct !== g.gatePct + '/' + g.earnedPct) changed.push(`gate ${g.key} (pct) ${beforePct} -> ${g.gatePct}/${g.earnedPct}`);
      if (Array.isArray(et.components)) {
        const mix = et.components.map(c => `${c.name} ${c.weight}%`).join(' \u00b7 ');
        if (mix && mix !== g.mix) { g.mix = mix; changed.push(`gate ${g.key} mix refreshed`); }
      }
    }
    g.status = g.gatePct >= 100 ? 'Complete' : (g.gatePct > 0 ? 'Below rate' : 'Not started');
    continue;
  }
  const before = g.installed + '/' + g.total;
  g.installed = src.installed;
  g.total = src.total;
  if (before !== g.installed + '/' + g.total) changed.push(`gate ${g.key} ${before} -> ${g.installed}/${g.total}`);
  // A quantity gate may also carry an earned measure (tracker rows). It is NOT
  // derived from installed/total, so without this it silently keeps last
  // week's row-equivalents while the quantities move underneath it.
  if (typeof g.earnedPct === 'number' && typeof src.earnedPct === 'number') {
    const beforeEarned = g.earned + '/' + g.earnedPct;
    if (typeof src.earnedEquivalent === 'number') g.earned = src.earnedEquivalent;
    g.earnedPct = src.earnedPct;
    g.earnedLabel = `${g.earnedPct}% earned incl. rows in progress (${Math.round(g.earned).toLocaleString('en-US')} row-equivalents)`;
    if (beforeEarned !== g.earned + '/' + g.earnedPct) changed.push(`gate ${g.key} earned ${beforeEarned} -> ${g.earned}/${g.earnedPct}`);
  }
  // pace status: below required rate unless the discipline is finished
  const pct = g.total ? g.installed / g.total : 0;
  g.status = pct >= 1 ? 'Complete' : (g.installed === 0 ? 'Not started' : 'Below rate');
}

/* ---------- 3. overall completion ---------- */
// Weighted by the four mechanical/electrical gates plus civil, on the same
// weights the previous report used, so the headline number stays comparable.
const W = C.headline.weights || { piles: 0.28, trackers: 0.22, modules: 0.26, electrical: 0.14, civil: 0.10 };
const civilAvg = avg((I.civilActivities || []).map(a => Number(a.done) || 0));
// SINGLE SOURCE OF TRUTH: the dashboard publishes the weighted roll-up in
// projectTotal on exactly these weights. Deriving it again here diverged --
// pct('electrical') reads the LV cable gate (0 lf) rather than the four-front
// electrical total, and civilAvg includes the substation, which projectTotal
// deliberately excludes to avoid double counting it inside electrical.
const overall = (I.projectTotal && typeof I.projectTotal.gatePct === 'number')
  ? I.projectTotal.gatePct / 100
  : (W.piles * pct('piles') + W.trackers * pct('trackers') + W.modules * pct('modules') +
     W.electrical * pct('electrical') + W.civil * (civilAvg / 100));
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
  if (t.value !== value) changed.push(`tile "${label}" ${t.value} -> ${value}`);
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

/* ---------- 8b. workforce ---------- */
// Headcount comes from the dashboard's manpower history; manhours are recomputed
// from it on the stated shift basis, so the two can never drift apart.
if (C.workforce && Array.isArray(I.manpowerHistory) && I.manpowerHistory.length) {
  const WF = C.workforce;
  const HRS = 10;                     // hours per person per day
  const WORKDAY = dt => dt.getDay() >= 1 && dt.getDay() <= 6;   // Mon-Sat
  const YEAR = Number(yearOf());
  const toDate = label => {
    const d = new Date(`${label}, ${YEAR}`);
    return isNaN(d) ? null : d;
  };

  // The dashboard's manpower history starts partway into construction. Earlier
  // points already held in this file are the mobilization period and are kept;
  // everything from the first dashboard entry onward is replaced wholesale.
  const rec = I.manpowerHistory
    .map(h => ({ d: h.day, v: Number(h.total) || 0 }))
    .filter(h => h.v > 0 && toDate(h.d));
  const firstSrc = toDate(rec[0].d);
  const earlier = WF.headcount.filter(h => { const t = toDate(h.d); return t && t < firstSrc; })
                              .map(h => ({ d: h.d, v: h.v }));
  const prevLast = WF.headcount[WF.headcount.length - 1];
  WF.headcount = earlier.concat(rec);
  const last = rec[rec.length - 1];
  if (!prevLast || prevLast.d !== last.d || prevLast.v !== last.v) {
    changed.push(`workforce headcount -> ${last.v} people (${last.d})`);
  }

  // Integrate headcount over working days. Values between recorded points are
  // interpolated; the tail is held flat at the last recorded headcount.
  const pts = WF.headcount.map(h => ({ t: toDate(h.d), v: h.v })).filter(p => p.t);
  pts.sort((a, b) => a.t - b.t);
  const interp = t => {
    if (t <= pts[0].t) return pts[0].v;
    if (t >= pts[pts.length - 1].t) return pts[pts.length - 1].v;
    for (let i = 0; i < pts.length - 1; i++) {
      if (pts[i].t <= t && t <= pts[i + 1].t) {
        const span = (pts[i + 1].t - pts[i].t) / 86400000 || 1;
        return pts[i].v + (pts[i + 1].v - pts[i].v) * ((t - pts[i].t) / 86400000 / span);
      }
    }
    return pts[pts.length - 1].v;
  };
  const endDate = toDate(String(I.control.asOf).replace(/,.*$/, '')) || pts[pts.length - 1].t;
  // Days the site was fully stopped earned no hours — take them from the weather log.
  const stopped = new Set();
  (C.weatherLog || []).forEach(w => {
    if (!/full stop/i.test(w.impact || '')) return;
    const dt = new Date(String(w.date).replace(/\s*\(\w+\)\s*$/, ''));
    if (!isNaN(dt)) stopped.add(dt.toDateString());
  });
  if (stopped.size) note(review, `workforce: ${stopped.size} full-stop day(s) excluded from manhours (${[...stopped].join('; ')})`);

  let cum = 0;
  const curve = [];
  for (let t = new Date(pts[0].t); t <= endDate; t.setDate(t.getDate() + 1)) {
    if (!WORKDAY(t)) continue;
    if (stopped.has(t.toDateString())) continue;
    cum += interp(t) * HRS;
    if (t.getDate() === 1 || t.getDate() === 15) {
      curve.push({ d: t.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), c: Math.round(cum) });
    }
  }
  const endLabel = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  if (!curve.length || curve[curve.length - 1].d !== endLabel) curve.push({ d: endLabel, c: Math.round(cum) });
  WF.manhours = curve;

  const round100 = n => Math.round(n / 100) * 100;
  const peak = Math.max.apply(null, rec.map(r => r.v));
  const mean = Math.round(rec.reduce((a, b) => a + b.v, 0) / rec.length);
  setTile(WF.tiles, 'Personnel on site', String(last.v));
  setTile(WF.tiles, 'Peak headcount', String(peak));
  setTile(WF.tiles, 'Average headcount', String(mean));
  const startLong = pts[0].t.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const endLong = endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  setTile(WF.tiles, 'Manhours to date', fmt(round100(cum)),
    `Total manhours worked from the start of construction on ${startLong} through ${endLong}, at ${HRS} h/day, Monday to Saturday.`);
  setTile(WF.tiles, 'Personnel on site', String(last.v), `Latest site-board headcount (${last.d}). Field labor plus management, quality and HSE.`);

  // Recordable incident rate: recordables x 200,000 / manhours.
  const recordables = Number((WF.recordables !== undefined) ? WF.recordables : 0);
  setTile(WF.tiles, 'Recordable incident rate', ((recordables * 200000) / cum).toFixed(2));
  changed.push(`workforce manhours -> ${fmt(round100(cum))} to date`);
  note(review, `workforce: manhours recomputed on the ${HRS} h/day Mon-Sat basis — confirm the shift basis still matches site practice, and re-read the tile notes if the headcount record start date moved`);

  // Discipline mix, with trade labels made client-facing.
  const TRADE = {
    'Trackers & Piling': 'Tracker assembly and piling',
    'Module Installation': 'Module installation',
    'Electrical & SET': 'Electrical and substation',
    'Civil & Fencing': 'Civil and fencing',
    'GreenSol EPC': 'EPC management, quality and HSE'
  };
  const mixSrc = I.manpowerMixToday;
  if (mixSrc && Array.isArray(mixSrc.mix)) {
    const palette = ['#0f7a52', '#2769a8', '#b96f18', '#7b4fa8', '#66716d'];
    C.workforce.mix = {
      day: longDate(String(mixSrc.day).replace(/,\s*\d{4}$/, '')) + ', ' + YEAR,
      total: Number(mixSrc.total) || 0,
      rows: mixSrc.mix.map((m, i) => {
        const label = TRADE[m.trade];
        if (!label) note(review, `workforce: unmapped trade "${m.trade}" — add it to TRADE in tools/sync.js`);
        return { trade: label || scrub(m.trade), people: Number(m.people) || 0, color: palette[i % palette.length] };
      })
    };
    changed.push(`workforce mix -> ${C.workforce.mix.total} people across ${C.workforce.mix.rows.length} disciplines`);
  }
}

/* ---------- 8c. earnedProgress — DERIVED, so it can never drift from the dashboard ---------- */
// This block used to be curated. It silently froze at the Jul 30 basis while the gates
// moved on, and the Owner saw two different tracker percentages on the same page.
// The numbers are now derived every run; only `detail` and `note` stay editorial.
if (C.earnedProgress && Array.isArray(C.earnedProgress.scopes)) {
  const trk = I.control.trackers;
  const et  = I.electricalTotal || {};
  const inv = I.inverterProgress || {};
  const lv  = I.control.electrical || {};
  const boxes = (() => {
    const c = ((I.lvComposite || {}).components || []).find(x => /box mounting/i.test(x.component || ''));
    const m = c && String(c.note || '').match(/(\d+)\s+boxes mounted/i);
    return m ? Number(m[1]) : null;
  })();
  const pct1 = n => Math.round(Number(n) * 10) / 10;
  const trkGatePct = pct1(trk.installed / trk.total * 100);

  C.earnedProgress.asOf = I.control.asOf;
  for (const sc of C.earnedProgress.scopes) {
    const before = `${sc.gatePct}/${sc.earnedPct}`;
    if (/tracker/i.test(sc.scope)) {
      sc.gate = `${fmt(trk.installed)} / ${fmt(trk.total)}`;
      sc.gatePct = trkGatePct;
      sc.earnedPct = pct1(trk.earnedPct != null ? trk.earnedPct : trkGatePct);
      sc.inProgress = (trk.earnedPct != null && pct1(trk.earnedPct) === trkGatePct)
        ? 'Partial-row credit suspended — open rows reported by ladder step, not credited'
        : sc.inProgress;
    } else if (/electrical/i.test(sc.scope)) {
      sc.gate = `${pct1(et.gatePct)}% of scope`;
      sc.gatePct = pct1(et.gatePct);
      sc.earnedPct = pct1(et.earnedPct);
      sc.inProgress = `MV ${pct1((I.mvProgress || {}).compositePct)}% · ${inv.stationsSet} of ${inv.totalStations} inverter stations set`
        + (boxes ? ` · ${boxes} of 419 boxes` : '')
        + (lv.installed ? ` · ${fmt(lv.installed)} lf of cable` : '');
    }
    if (before !== `${sc.gatePct}/${sc.earnedPct}`) {
      changed.push(`earnedProgress "${sc.scope}" ${before} -> ${sc.gatePct}/${sc.earnedPct}`);
      note(review, `earnedProgress."${sc.scope}": numbers re-derived — re-read its "detail" sentence, which is still editorial`);
    }
  }
}

/* ---------- 8d. cross-check: the report must agree with the dashboard ---------- */
// Hard consistency check. Curated prose quotes headline quantities in words
// ("296 of 1,172 rows built") and those sentences do not move when the derived
// blocks do — that is how the Owner ended up reading two different tracker
// percentages on one page. Any RECENT-BUT-SUPERSEDED cumulative value still
// present anywhere in the report is flagged.
{
  // Curated prose only — the derived blocks legitimately carry historical values
  // (series points, gate quantities), and scanning them produces pure noise.
  const CURATED = ['headline', 'focus', 'lookahead', 'ownerActions', 'material', 'quality',
                   'safety', 'milestones', 'earnedProgress', 'clientQueries', 'photos', 'civilOverrides'];
  const hay = JSON.stringify(CURATED.reduce((o, k) => (o[k] = C[k], o), {}));
  const LABEL = { piles: 'piles installed', trackers: 'tracker rows built', modules: 'modules installed' };
  for (const key of Object.keys(LABEL)) {
    const cur = I.control[key] && I.control[key].installed;
    if (cur == null) continue;
    const pts = (C.series && C.series[key]) || [];
    // Only thousands-formatted values: a bare 3-digit number collides with unrelated
    // quantities in the prose (881 lf of cable vs 881 tracker rows) and is pure noise.
    const recent = pts.slice(-8).map(p => p.c).filter(v => typeof v === 'number' && v !== cur && v >= 1000);
    const seen = new Set();
    for (const v of recent) {
      const str = fmt(v);
      if (seen.has(str) || !hay.includes(str)) continue;
      seen.add(str);
      note(review, `CONSISTENCY: the report quotes ${str} (a superseded ${LABEL[key]} figure) in curated text — the dashboard now reads ${fmt(cur)}. Find it and fix it before publishing.`);
    }
  }
}

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
  // clientQueries.routing is a structured contact entry: the designated
  // project representatives are named there by design (CONTACT_ALLOW).
  const isContact = p.join('.').startsWith('clientQueries.routing');
  const h = hits(val, { contactContext: isContact });
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
const payload = header + 'window.MURCH_REPORT = ' + stringify(C) + ';\n';
fs.writeFileSync(CLIENT, payload);
console.log('\nwrote ' + CLIENT);

// ---------- cache buster ----------
// index.html used to load data.js with no version string. GitHub Pages serves it
// with a long max-age, so a returning reader kept seeing the PREVIOUS dataset
// while the server already held the new one — the report looked like it
// disagreed with the dashboard when in fact only the browser copy was stale.
// The stamp is a content hash, so it changes exactly when the data changes.
{
  const idxPath = path.join(__dirname, '..', 'index.html');
  if (fs.existsSync(idxPath)) {
    const stamp = require('crypto').createHash('sha1').update(payload).digest('hex').slice(0, 10);
    const idx = fs.readFileSync(idxPath, 'utf8');
    const next = idx.replace(/<script src="data\.js(?:\?v=[^"]*)?"><\/script>/,
                             `<script src="data.js?v=${stamp}"><\/script>`);
    if (next !== idx) {
      fs.writeFileSync(idxPath, next);
      console.log('cache buster -> data.js?v=' + stamp);
    } else if (!idx.includes('data.js?v=')) {
      console.log('WARNING: could not stamp the data.js script tag in index.html — readers may cache a stale dataset');
    }
  }
}
console.log('');

function stringify(o) { return JSON.stringify(o, null, 2); }
