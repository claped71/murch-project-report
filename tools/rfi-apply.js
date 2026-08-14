#!/usr/bin/env node
'use strict';
/* Applies an audited Owner-query register to data.js, and corrects the register
   renderer and the cache buster in index.html.

   The register is a curated block: tools/sync.js never rewrites clientQueries, so
   this is the only thing that moves it. Run from the repo root:

     node tools/rfi-apply.js tools/rfi-payload.json

   Every edit is idempotent — re-running is a no-op, so a repeated CI run cannot
   corrupt the file. Any edit that does not find exactly what it expects aborts
   the whole run without writing. */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const payloadPath = process.argv[2] || path.join(ROOT, 'tools/rfi-payload.json');
const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));

if (!Array.isArray(payload.items) || !payload.items.length) {
  console.error('ABORT: payload carries no items.');
  process.exit(1);
}

/* ---------- 1. data.js — replace clientQueries.items and asOf ---------- */

const dataPath = path.join(ROOT, 'data.js');
let data = fs.readFileSync(dataPath, 'utf8');

// Scope every edit inside the clientQueries block. `ownerActions` sits earlier in
// the file and shares key names with it (responseNote), so a naive first-match
// replace clobbers the Owner register instead.
const cqStart = data.indexOf('"clientQueries": {');
if (cqStart < 0) { console.error('ABORT: clientQueries block not found in data.js.'); process.exit(1); }

const itemsKey = data.indexOf('"items": [', cqStart);
if (itemsKey < 0) { console.error('ABORT: clientQueries.items not found.'); process.exit(1); }

let open = data.indexOf('[', itemsKey), i = open, depth = 0;
for (;; i++) {
  const c = data[i];
  if (c === '[') depth++;
  else if (c === ']') { depth--; if (depth === 0) break; }
  if (i > data.length) { console.error('ABORT: unterminated items array.'); process.exit(1); }
}

// Newest raised first, so the Owner reads the current position at the top.
const items = payload.items.slice().sort(function (a, b) {
  if (a.raisedISO !== b.raisedISO) return a.raisedISO < b.raisedISO ? 1 : -1;
  return a.ref < b.ref ? 1 : -1;
});

const rendered = JSON.stringify(items, null, 6)
  .split('\n').map(function (l, n) { return n === 0 || !l.trim() ? l : '    ' + l; }).join('\n');

data = data.slice(0, open) + rendered + data.slice(i + 1);

// asOf, scoped to the clientQueries block only.
const head = data.slice(cqStart, cqStart + 400);
const headFixed = head.replace(/("asOf":\s*")[^"]*(")/, '$1' + payload.asOf + '$2');
if (headFixed === head && !head.includes('"asOf": "' + payload.asOf + '"')) {
  console.error('ABORT: could not set clientQueries.asOf.'); process.exit(1);
}
data = data.slice(0, cqStart) + headFixed + data.slice(cqStart + 400);

/* ---------- 2. index.html — renderer defects ---------- */

const htmlPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const EDITS = [
  {
    what: 'partial replies must not count as answered',
    from: 'var answered = items.filter(function(q){ return q.respondedISO; });',
    to: '// A partial reply carries a respondedISO but the item is still Open — it must not\n' +
        '    // count as answered. Only an issued, closed-out response counts toward the target.\n' +
        '    var answered = items.filter(function(q){ return q.respondedISO && !q._outstanding; });'
  },
  {
    what: 'an Answered item with no response date must still appear under Responded',
    from: "responded: function(q){ return !!q.respondedISO && q.status !== 'Closed'; },",
    to: "responded: function(q){ return (!!q.respondedISO || q.status === 'Answered') && q.status !== 'Closed'; },"
  }
];

EDITS.forEach(function (e) {
  const n = html.split(e.from).length - 1;
  if (n === 0 && html.includes(e.to)) { console.log('  already applied: ' + e.what); return; }
  if (n !== 1) { console.error('ABORT: expected 1 match for "' + e.what + '", found ' + n + '.'); process.exit(1); }
  html = html.replace(e.from, e.to);
  console.log('  applied: ' + e.what);
});

/* ---------- 3. cache buster ---------- */

// index.html loads data.js with a ?v= tag derived from the file's own hash. If the
// data moves and the tag does not, every returning browser — the Owner's included —
// keeps serving the previous register from cache and the publish looks like a no-op.
const stamp = crypto.createHash('sha1').update(data).digest('hex').slice(0, 10);
const tag = /data\.js\?v=[a-f0-9]+/;
if (!tag.test(html)) { console.error('ABORT: data.js cache-buster tag not found in index.html.'); process.exit(1); }
html = html.replace(tag, 'data.js?v=' + stamp);
console.log('  cache buster: ' + stamp);

/* ---------- 4. write ---------- */

fs.writeFileSync(dataPath, data);
fs.writeFileSync(htmlPath, html);

const outstanding = items.filter(function (q) { return q.status === 'Open' || q.status === 'In review'; }).length;
console.log('Register applied: ' + items.length + ' queries, ' + outstanding + ' outstanding, basis ' + payload.asOf + '.');
