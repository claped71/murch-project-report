'use strict';
/* One-shot: widen the site photo gallery so it covers every scope, not just the
   substation and the tracker/module fronts. Idempotent — safe to re-run.
   Temporary: delete this file and .github/workflows/add-photos.yml once it has run.

   Images are fetched by the workflow from the internal dashboard repo and resized
   there, so no binary passes through anything but git. Captions below are written
   for the Owner: no subcontractor or supplier names, no internal vocabulary.
   Every source frame was checked for legible branding before selection — three
   candidates were rejected on that basis. */
const fs = require('fs');
const path = require('path');

const DATA = 'data.js';

/* Newest first within each date; merged into the existing gallery by date. */
const NEW_PHOTOS = [
  {
    src: 'assets/photo-45.jpg',
    date: 'July 29, 2026',
    title: 'Inverter station lowered onto its welded pile foundation',
    note: 'A prefabricated inverter station being craned onto its steel pile foundation, with completed tracker rows and the delivery vehicle behind it. Protective wrapping stays in place until the low-voltage and medium-voltage terminations are made.'
  },
  {
    src: 'assets/photo-30.jpg',
    date: 'July 9, 2026',
    title: 'Foundation piles being driven in Area E',
    note: 'A pile driver setting foundations in Area E with the site team checking line and level against the string. Piles are the largest single quantity on the project at 31,352, and closing this front is what releases the tracker and module work behind it.'
  },
  {
    src: 'assets/photo-32.jpg',
    date: 'July 9, 2026',
    title: 'Damper replacement on erected tracker rows, Area A',
    note: 'GreenSol crews replacing dampers on rows already erected. This is the work that currently governs how quickly completed rows can be presented for the Owner’s quality release, and it is carried out at GreenSol’s own cost.'
  },
  {
    src: 'assets/photo-28.jpg',
    date: 'July 7, 2026',
    title: 'Control building set at the substation',
    note: 'The control building landed on its foundation at the substation, ahead of the main power transformer and the pier structures that followed it. The set continued into the evening to complete in a single shift.'
  },
  {
    src: 'assets/photo-23.jpg',
    date: 'June 25, 2026',
    title: 'Medium-voltage cable installed at depth, Area A',
    note: 'Cable laid between the first two inverter positions and measured at six feet of cover where it crosses the DC route. Depth is checked and recorded at each crossing as the plough advances.'
  },
  {
    src: 'assets/photo-21.jpg',
    date: 'June 25, 2026',
    title: 'First completed rows — modules installed on erected trackers',
    note: 'The first fully completed rows in the earliest area released, with modules installed on erected tracker rows. The same sequence is now repeating across the later areas.'
  }
];

function parseDate(s) {
  const t = Date.parse(s);
  return isNaN(t) ? 0 : t;
}

global.window = {};
require(path.resolve(DATA));
const report = global.window.MURCH_REPORT;
const gallery = report.photos;

const added = [];
NEW_PHOTOS.forEach(function (p) {
  if (gallery.some(function (g) { return g.src === p.src; })) {
    console.log('Already in the gallery: ' + p.src);
    return;
  }
  gallery.push(p);
  added.push(p.src);
});

if (!added.length) {
  console.log('Gallery already current. Nothing to add.');
  process.exit(0);
}

/* Newest first. Same-date photos keep the order they were written in. */
const order = new Map(gallery.map(function (p, i) { return [p, i]; }));
gallery.sort(function (a, b) {
  const d = parseDate(b.date) - parseDate(a.date);
  return d !== 0 ? d : order.get(a) - order.get(b);
});

/* Every image must exist in all three variants before this is published. */
const missing = [];
gallery.forEach(function (p) {
  [p.src, p.src.replace(/\.jpg$/, '-md.jpg'), p.src.replace(/\.jpg$/, '-sm.jpg')]
    .forEach(function (f) { if (!fs.existsSync(f)) missing.push(f); });
});
if (missing.length) {
  console.error('Missing image files — nothing written:\n  ' + missing.join('\n  '));
  process.exit(1);
}

/* Rewrite only the photos array. */
function render(p) {
  return '    {\n' + ['src', 'date', 'title', 'note']
    .map(function (k) { return '      ' + JSON.stringify(k) + ': ' + JSON.stringify(p[k]); })
    .join(',\n') + '\n    }';
}

let src = fs.readFileSync(DATA, 'utf8');
const OPEN = '\n  "photos": [\n';
const start = src.indexOf(OPEN);
if (start === -1) { console.error('Could not locate photos[] in data.js — nothing written.'); process.exit(1); }
const from = start + OPEN.length;
const end = src.indexOf('\n  ]', from);
if (end === -1) { console.error('Could not find the end of photos[] — nothing written.'); process.exit(1); }

src = src.slice(0, from) + gallery.map(render).join(',\n') + src.slice(end);
fs.writeFileSync(DATA, src);

delete require.cache[path.resolve(DATA)];
global.window = {};
require(path.resolve(DATA));
const after = global.window.MURCH_REPORT.photos;
if (after.length !== gallery.length) { console.error('Rewrite changed the photo count — check data.js.'); process.exit(1); }
console.log('Added ' + added.length + ': ' + added.join(', '));
console.log('Gallery now holds ' + after.length + ' photos, ' + after[0].date + ' back to ' + after[after.length - 1].date + '.');
