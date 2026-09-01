'use strict';
/*
 * clean-narrative.js — one-shot narrative cleanup for the Owner report.
 *
 *   node tools/clean-narrative.js
 *
 * Two problems, both visible on the published page:
 *
 *   1. The dataset carried inline HTML (<strong>…</strong>) inside prose
 *      fields. index.html renders every one of those fields as PLAIN TEXT
 *      (textContent, or esc() before innerHTML), so the tags surfaced as
 *      literal characters in the middle of sentences.
 *   2. The period statement had grown to ~470 words in one block.
 *
 * This script strips the markup from data.js, replaces the statement with the
 * shortened version, and installs a defensive strip in index.html so any
 * markup that appears in a future dataset is removed at render time instead of
 * being printed. It is idempotent — running it twice changes nothing.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'data.js');
const PAGE = path.join(ROOT, 'index.html');

const STATEMENT =
  'The reporting period covers Friday 28 to Monday 31 August, with limited weekend working. ' +
  'Tracker assembly recorded its two strongest days since 13 August \u2014 65 rows on the 28th and 65 on ' +
  'the 31st \u2014 taking cumulative assembly to 2,199 of 2,486 rows (88.5%). The 30 August completion ' +
  'date for this element was not achieved and a revised, dated schedule is being issued; one ' +
  'installing contractor has finished its contracted racking scope, so the remaining 287 rows now sit ' +
  'with a single crew. Module installation reached its second-highest day of the works on 31 August ' +
  '(5,566), with cumulative installation at 135,511 of 171,470 (79.0%) against 7,192 per day required ' +
  'to 6 September. Piling stands at 30,261 of 31,352 (96.5%), the balance concentrated in one area ' +
  'where the machines enter on 1 September. On the medium-voltage network the wetland-crossing ' +
  'conduit was completed on 30 August, closing that environmental exposure; terminations remain at ' +
  '18 of 264 and additional crews are being mobilised. The substation composite advanced to 50.0% ' +
  '\u2014 civil 95.0%, structural 65.2%, electrical 17.3% \u2014 with the electrical element governing ' +
  'energization. LV cable stands at 47,934 feet (17.8%) against 13,863 feet per day required to ' +
  '18 September; harness assembly set a project record of 45 assemblies in a day (333 of 4,972) and ' +
  'box mounting reached 217 of 419. Additional electrician mobilisation has been formally requested. ' +
  'The works completed 320 days without accident and 173,278 hours worked. Overall completion moves ' +
  'to 81.4% from 78.5%.';

const TAG = /<\/?(strong|b|em|i|u|span)\s*>/gi;

const GUARD = [
  '  /* Dataset text is rendered as plain text. Strip any inline markup',
  '     (e.g. <strong>) so tags can never surface as literal characters. */',
  '  (function stripTags(o){',
  '    if(!o || typeof o!==\'object\') return;',
  '    Object.keys(o).forEach(function(k){',
  '      var v=o[k];',
  '      if(typeof v===\'string\'){ o[k]=v.replace(/<\\/?(strong|b|em|i|u|span)\\s*>/gi,\'\').replace(/[ \\t]{2,}/g,\' \'); }',
  '      else if(v && typeof v===\'object\'){ stripTags(v); }',
  '    });',
  '  })(D);'
].join('\n');

let changed = 0;

// ---- data.js -------------------------------------------------------------
let data = fs.readFileSync(DATA, 'utf8');
const dataBefore = data;

const tags = (data.match(TAG) || []).length;
data = data.replace(TAG, '').replace(/  +(?=[A-Za-z0-9])/g, ' ');

const stmtRe = /"statement":\s*"(?:[^"\\]|\\.)*"/;
if (!stmtRe.test(data)) {
  console.error('clean-narrative: headline statement not found in data.js');
  process.exit(1);
}
data = data.replace(stmtRe, () => '"statement": ' + JSON.stringify(STATEMENT));

if (data !== dataBefore) { fs.writeFileSync(DATA, data); changed++; }
console.log('data.js  : ' + tags + ' inline tag(s) removed; statement set to ' +
            STATEMENT.split(/\s+/).length + ' words');

// ---- index.html ----------------------------------------------------------
let page = fs.readFileSync(PAGE, 'utf8');
if (page.indexOf('function stripTags') === -1) {
  const anchor = '  var D = window.MURCH_REPORT;';
  if (page.indexOf(anchor) === -1) {
    console.error('clean-narrative: dataset anchor not found in index.html');
    process.exit(1);
  }
  page = page.replace(anchor, anchor + '\n' + GUARD);
  fs.writeFileSync(PAGE, page);
  changed++;
  console.log('index.html: render-time markup strip installed');
} else {
  console.log('index.html: render-time markup strip already present');
}

console.log(changed ? 'Cleanup applied.' : 'Nothing to change — already clean.');
