'use strict';
/* One-shot, idempotent. The query register grew to ten columns, which only fits a
   desktop. The page already stacked tables into cards below 720px; the register now
   does the same up to 1024px so tablets get cards rather than a crushed grid, the
   reference and subject read as the card heading instead of two more labelled rows,
   and the view switcher wraps to two rows of thumb-sized buttons on a phone.
   Checked with real screenshots at 390 and 820 px before publishing.
   Delete with its workflow once run. */
const fs = require('fs');
const IDX = 'index.html';

const CSS = `
/* --- query register on tablets: ten columns do not fit, so stack them there too --- */
@media(max-width:1024px){
  .qscroll table,.qscroll tbody,.qscroll tr,.qscroll td{display:block;width:100%}
  .qscroll thead{display:none}
  .qscroll table{border-collapse:separate}
  .qscroll tr{border:1px solid var(--line);border-radius:9px;padding:13px 14px;margin-bottom:10px;background:var(--card)}
  .qscroll tr:last-child{margin-bottom:0}
  .qscroll td{border:none;padding:4px 0;display:grid;grid-template-columns:104px 1fr;gap:10px;align-items:start}
  .qscroll td::before{content:attr(data-label);font-size:9.5px;letter-spacing:.09em;text-transform:uppercase;
    color:var(--muted);font-weight:700;padding-top:2px;line-height:1.35}
  .qscroll td.n{white-space:normal;text-align:left}
  .qscroll td .pill{justify-self:start}
  /* reference and subject read as the card heading, not as two more labelled rows */
  .qscroll td[data-label="Ref"],.qscroll td[data-label="Subject"]{display:block;padding:0}
  .qscroll td[data-label="Ref"]::before,.qscroll td[data-label="Subject"]::before{display:none}
  .qscroll td[data-label="Ref"]{font-size:11px;letter-spacing:.05em;color:var(--muted);font-weight:700}
  .qscroll td[data-label="Subject"]{font-size:15px;font-weight:700;line-height:1.35;margin:1px 0 9px}
}
@media(max-width:420px){
  .qscroll td{grid-template-columns:1fr;gap:1px}
  .qscroll td::before{padding-top:0}
  .qscroll td[data-label="Subject"]{font-size:14.5px}
}
/* the view switcher wraps instead of overflowing, and stays thumb-sized */
.qtoggle{flex-wrap:wrap}
@media(max-width:620px){
  .qtoggle{gap:6px}
  .qtoggle button{flex:1 1 calc(50% - 3px);padding:10px 8px;font-size:12.5px}
}`;

let s = fs.readFileSync(IDX, 'utf8');
if (s.indexOf('query register on tablets') !== -1) { console.log('already applied'); process.exit(0); }
const A = '@media (max-width:720px){.qscroll{max-height:none;overflow:visible}}';
if (s.indexOf(A) === -1) { console.error('ANCHOR NOT FOUND'); process.exit(1); }
fs.writeFileSync(IDX, s.replace(A, A + '\n' + CSS.trim()));
console.log('patched: responsive query register');
