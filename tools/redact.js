'use strict';
/* Redaction rules for the Murch Owner Project Report.
   Shared by sync.js (rewrite pass) and guard.js (hard gate before publish). */

// Entities that may appear ONLY as brand/authorship, never in body prose.
const BRAND_ALLOW = ['GreenSol', 'Greensol', 'Heelstone', 'Heelstone Renewable Energy'];

// Companies and people that must never reach the client report.
const NAMES = [
  'Latnovva', 'ECCS', 'Brumont', 'GameChange', 'Game Change', 'Chemik',
  'Topland', 'Lounsbury', 'Hurricane', 'AB Power', 'ABPower', 'ABPOWER', 'Dig It', 'DIG IT',
  'Michael Power', 'SWCA', 'Westwood', 'Kalamazoo', 'Hi-Tech', 'HI-TECH', 'NTG', 'Landstar',
  'Pennsylvania Transformer', 'GreenSol Construction', 'Greensol Construction',
  'Maurin Moure', 'Maurin', 'Audelio Zuniga', 'Audelio', 'Manuel Ramirez', 'Manuel',
  'Rosario Ruiz', 'Rosario', 'Daniel Morilla', 'Morilla', 'Axel Cano', 'Axel',
  'Shreeya Devkota', 'Shreeya', 'Joshua Spalding', 'Joshua', 'Luis Romero', 'Jose Romero'
];
// DESIGNATED PROJECT REPRESENTATIVES — the only people who may be named, and ONLY
// inside a structured contact entry (a line that also carries a role and an email).
// These are the Owner's routine points of contact, so withholding them would defeat
// the query register. Anywhere else — production prose, notes, photo captions — they
// stay blocked by NAMES exactly as before. Do not widen this list to field personnel.
const CONTACT_ALLOW = ['Luis Romero', 'Audelio Zuniga', 'Audelio', 'Jose Romero', 'José Antonio Romero',
  'Daniel Morilla', 'Morilla', 'Rosario Ruiz', 'Rosario', 'Bethany Valdez', 'Helena Suarez'];
const CONTACT_CONTEXT = /"role"\s*:/;

// 'ITS' and 'United' need word-boundary care (common English words).
const NAMES_WORD = ['ITS', 'United'];

// Case-SENSITIVE, all-caps only. The module-installation subcontractor is written
// WORKFORCE in the internal records, while "workforce" is ordinary English the
// report needs (the workforce section). Only the shouted form is a company name.
const NAMES_CAPS = ['WORKFORCE'];

// Commercially sensitive / internal-control vocabulary.
const TERMS = [
  'claim', 'claimed', 'dispute', 'disputed', 'force majeure', 'backcharge', 'back-charge',
  'liquidated', 'penalty', 'penalties', 'SOV', 'invoice', 'invoiced', 'billing', 'billed',
  'POD', 'PODs', 'BOL', 'unit rate',
  're-cascaded', 'recascaded', 'float', 'silent since', 'logs owed', 'not yet mapped',
  'block-map', 'self-report', 'rig', 'rigs', 'breakdown', 'damaged', 'refusal pile',
  'Section 5.5', 'internal sequence', 'internal basis', 'scorecard', 'criterion'
];

// Words to soften on the way through (applied by sync.js to derived prose).
const SOFTEN = [
  [/\bZone\b/g, 'Area'],
  [/\bzones\b/g, 'areas'],
  [/\bzone\b/g, 'area'],
  [/\bcrews? (?:are )?ramping\b/gi, 'installation capacity is ramping'],
  [/\bre-manned\b/gi, 'brought to full strength'],
  [/\bbehaviours\b/g, 'behaviors'],
  [/\bprogramme\b/g, 'program'],
  [/\bQA\b/g, 'quality'],
  [/\s*—?\s*\d+(?:,\d{3})*\s+official[^.]*\./g, '.'],
  [/\s*\([^)]*field logs?[^)]*\)/gi, ''],
  [/\s*\([^)]*workbook[^)]*\)/gi, '']
];

const MONEY = /\$\s?[\d,]+(?:\.\d+)?|\bUSD\b|\b\d+(?:,\d{3})*\s?(?:dollars|USD)\b/i;

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/** Strip any sentence that carries a forbidden name or term. Returns cleaned prose. */
function scrub(text) {
  if (typeof text !== 'string') return text;
  let out = text.replace(/<[^>]+>/g, ' ');
  // Drop whole sentences containing a forbidden entity or term.
  const sentences = out.split(/(?<=[.!?])\s+/);
  const kept = sentences.filter(sn => !hits(sn).length);
  out = kept.join(' ');
  for (const [re, to] of SOFTEN) out = out.replace(re, to);
  return out.replace(/\s{2,}/g, ' ').replace(/\s+([.,;])/g, '$1').trim();
}

/** All rule violations in a string. Brand-allowed names are ignored. */
function hits(text, opts) {
  if (typeof text !== 'string') return [];
  let probe = text;
  for (const b of BRAND_ALLOW) probe = probe.replace(new RegExp(esc(b), 'gi'), '');
  // A structured contact entry may name the designated project representatives.
  const contactCtx = (opts && opts.contactContext) || CONTACT_CONTEXT.test(text);
  if (contactCtx) {
    for (const c of CONTACT_ALLOW) probe = probe.replace(new RegExp(esc(c), 'gi'), '');
  }
  const found = [];
  for (const n of NAMES) {
    if (new RegExp(esc(n), 'i').test(probe)) found.push({ type: 'name', term: n });
  }
  for (const n of NAMES_WORD) {
    if (new RegExp('\\b' + esc(n) + '\\b').test(probe)) found.push({ type: 'name', term: n });
  }
  for (const n of NAMES_CAPS) {
    if (new RegExp('\\b' + esc(n) + '\\b').test(probe)) found.push({ type: 'name', term: n });
  }
  for (const t of TERMS) {
    if (new RegExp('\\b' + esc(t) + '\\b', 'i').test(probe)) found.push({ type: 'term', term: t });
  }
  if (MONEY.test(probe)) found.push({ type: 'money', term: probe.match(MONEY)[0] });
  return found;
}

module.exports = { scrub, hits, NAMES, CONTACT_ALLOW, NAMES_WORD, NAMES_CAPS, TERMS, BRAND_ALLOW, MONEY };
