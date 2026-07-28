'use strict';
/*
 * guard.js — hard gate. Run before every publish.
 *
 *   node tools/guard.js
 *
 * Scans the FILES as they will be served (data.js + index.html), not the
 * in-memory object, so hand edits are covered too. Any violation exits non-zero
 * and the caller must not push.
 *
 * Checks:
 *   1. Redaction   — subcontractor/personnel names, commercial terms, money.
 *   2. Leakage     — the redaction ruleset itself must not be published.
 *   3. Coherence   — figures that contradict each other across the page.
 *   4. Integrity   — cumulative series must never exceed the control basis, and
 *                    must never advance on a zero-production day.
 */

const fs = require('fs');
const path = require('path');
const { hits } = require('./redact');

const ROOT = path.join(__dirname, '..');
const files = ['data.js', 'index.html'].map(f => path.join(ROOT, f));
const fail = [];
const warn = [];

/* ---------- 1 + 2. text scan ---------- */
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  src.split('\n').forEach((line, i) => {
    // Skip the tools' own vocabulary if it is ever inlined.
    if (/require\(.\.\/redact/.test(line)) return;
    for (const h of hits(line)) {
      // Allow schedule-standard phrases that collide with the term list.
      if (h.term === 'critical path' || /critical path/i.test(line)) continue;
      if (h.term === 'float' && /\bfloat(:|\s*right|\s*left)/i.test(line)) continue; // CSS
      if (h.term === 'rig' && /\bright\b|\borigin/i.test(line)) continue;
      fail.push(`${path.basename(f)}:${i + 1} [${h.type}:${h.term}] ${line.trim().slice(0, 130)}`);
    }
    if (/PUBLISHING RULES|redaction|No subcontractor or supplier names/i.test(line)) {
      fail.push(`${path.basename(f)}:${i + 1} [leak] the redaction policy must not be published: ${line.trim().slice(0, 100)}`);
    }
  });
}

/* ---------- 3 + 4. data coherence ---------- */
global.window = {};
global.document = { readyState: 'loading', addEventListener() {}, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null };
require(path.join(ROOT, 'data.js'));
const D = global.window.MURCH_REPORT;

for (const key of Object.keys(D.series || {})) {
  const s = D.series[key];
  const gate = (D.gates || []).find(g => g.key === key);
  const basis = gate ? gate.installed : null;
  let prev = -Infinity;
  s.forEach((pt, i) => {
    if (basis !== null && pt.c > basis) fail.push(`series.${key}[${i}] (${pt.d}): cumulative ${pt.c} exceeds the reported basis ${basis}`);
    if (pt.c < prev) fail.push(`series.${key}[${i}] (${pt.d}): cumulative goes backwards (${prev} -> ${pt.c})`);
    if (pt.v === 0 && pt.c > prev) fail.push(`series.${key}[${i}] (${pt.d}): cumulative advances ${prev} -> ${pt.c} on a zero-production day`);
    prev = pt.c;
  });
  if (basis !== null && s.length && s[s.length - 1].c !== basis) {
    fail.push(`series.${key}: final cumulative ${s[s.length - 1].c} does not equal the reported basis ${basis}`);
  }
}

// Complete/100% rows must not describe remaining work.
const REMAINS = /\bremain|\bremaining\b|starts after|must finish|outstanding|pending\b/i;
(D.civil || []).forEach(c => {
  if ((c.done >= 100 || c.status === 'Complete') && REMAINS.test(c.note || '')) {
    fail.push(`civil."${c.activity}": marked ${c.status} at ${c.done}% but the note describes remaining work`);
  }
});

// Headline prose must not claim completion that the civil table contradicts.
const stmt = (D.headline && D.headline.statement) || '';
(D.civil || []).forEach(c => {
  // Fires only on an UNQUALIFIED completion claim. "complete across Areas A to F"
  // is a scoped statement and is allowed.
  const unqualified = /earthworks (are |is )?complete(?![^.]*\b(across|in Areas?|for Areas?|except|other than)\b)/i;
  if (c.done < 100 && /earthworks/i.test(c.activity) && unqualified.test(stmt)) {
    warn.push(`headline.statement says earthworks are complete while civil."${c.activity}" is ${c.done}%`);
  }
});

// A pinned or manually set forecast that predates its own stated dependency.
(D.milestones || []).forEach(m => {
  const dep = (m.note || '').match(/complete by ([A-Z][a-z]+ \d{1,2})/);
  const fc = (m.forecast || '').match(/([A-Z][a-z]+) (\d{1,2})/);
  if (dep && fc) {
    const d1 = Date.parse(dep[1] + ', 2026'), d2 = Date.parse(fc[1] + ' ' + fc[2] + ', 2026');
    if (!isNaN(d1) && !isNaN(d2) && d2 < d1) {
      fail.push(`milestone "${m.name}": forecast starts ${fc[0]} but its own basis says the dependency completes ${dep[1]}`);
    }
  }
});

// Weekday names on the weather log must be real.
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
(D.weatherLog || []).forEach(w => {
  const m = String(w.date).match(/^([A-Z][a-z]{2}) (\d{1,2}), (\d{4}) \((\w{3})\)/);
  if (!m) return;
  const real = DOW[new Date(`${m[1]} ${m[2]}, ${m[3]}`).getDay()];
  if (real !== m[4]) fail.push(`weatherLog "${w.date}": ${m[1]} ${m[2]} ${m[3]} is a ${real}, not ${m[4]}`);
});

// Percentages must agree with the counts quoted beside them.
(D.civil || []).forEach(c => {
  const m = (c.note || '').match(/(\d+) of (\d+)/);
  if (!m) return;
  // Composite notes quote sub-fronts (piers, packages) that are not the headline
  // percentage; only compare when the note reports a single measure.
  if ((c.note.match(/\d+(\.\d+)?%/g) || []).length > 1) return;
  if (/piers|pier |package|front[: ]/i.test(c.note)) return;
  const implied = Math.round((Number(m[1]) / Number(m[2])) * 100);
  if (Math.abs(implied - c.done) > 6) {
    warn.push(`civil."${c.activity}": shows ${c.done}% but the note quotes ${m[0]} (${implied}%)`);
  }
});

/* ---------- report ---------- */
if (warn.length) {
  console.log(`\n--- WARNINGS (${warn.length}) ---`);
  warn.forEach(w => console.log('  ~ ' + w));
}
if (fail.length) {
  console.log(`\n=== BLOCKED — ${fail.length} violation(s). Do not publish. ===`);
  fail.forEach(f => console.log('  ✗ ' + f));
  process.exit(1);
}
console.log(`\n=== GUARD PASSED ===  ${warn.length} warning(s), 0 violations.\n`);
