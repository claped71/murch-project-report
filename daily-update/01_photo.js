// Owner report photo (Jose, Sep 28): SET utility-interconnection poles erected over the weekend. Cropped (no branding).
const fs = require('fs');
const B = [1, 2, 3, 4].map(n => fs.readFileSync('daily-update/photo-79.part' + n + '.txt', 'utf8')).join('');
const img = Buffer.from(B.replace(/\s+/g, ''), 'base64');
fs.writeFileSync('assets/photo-79.webp', img);
global.window = {};
require(process.cwd() + '/data.js');
const r = window.MURCH_REPORT;
if (r.photos.some(p => /photo-79/.test(p.src))) { console.error('photo-79 already present'); process.exit(1); }
r.photos.unshift({
  src: 'assets/photo-79.webp',
  date: 'September 28, 2026',
  title: 'Substation — utility interconnection structures erected',
  note: 'The utility-interconnection poles at the substation, erected over the weekend of 26 and 27 September, with the crew working on the structure from an aerial lift. The substation stands at 78.6% on its earned-value register.'
});
const src = fs.readFileSync('data.js', 'utf8');
const head = src.slice(0, src.indexOf('window.MURCH_REPORT'));
fs.writeFileSync('data.js', head + 'window.MURCH_REPORT = ' + JSON.stringify(r, null, 2) + ';\n', 'utf8');
const sha10 = require('crypto').createHash('sha256').update(fs.readFileSync('data.js')).digest('hex').slice(0, 10);
let idx = fs.readFileSync('index.html', 'utf8');
const idx2 = idx.replace(/data\.js\?v=[0-9a-f]+/g, 'data.js?v=' + sha10);
if (idx2 === idx) { console.error('cache buster anchor not found'); process.exit(1); }
fs.writeFileSync('index.html', idx2, 'utf8');
console.log('photo-79 added (' + img.length + ' bytes); cache buster -> data.js?v=' + sha10);
