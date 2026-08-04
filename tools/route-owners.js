'use strict';
/* One-shot, idempotent. Three changes:
   1. Discipline routing — quality, health & safety and environmental queries go
      straight to the responsible lead, always copying the Director, the
      Construction Manager and the VP of Construction. Everything else unchanged.
   2. The register shows the owner who must respond, resolved from that routing.
   3. The register shows outstanding items only by default, with a toggle for the
      full list, so the table does not grow without bound on the page.
   Verified against a real DOM before publishing. Delete with its workflow once run. */
const fs = require('fs');

let n = 0;
function patch(file, from, to, label) {
  const s = fs.readFileSync(file, 'utf8');
  if (s.indexOf(to) !== -1) { console.log('already applied: ' + label); return; }
  if (s.indexOf(from) === -1) { console.error('ANCHOR NOT FOUND: ' + label); process.exit(1); }
  fs.writeFileSync(file, s.replace(from, to));
  console.log('patched: ' + label);
  n++;
}

/* ---- 1. redact.js: the new discipline owners are designated contacts ---- */
patch('tools/redact.js',
  "const CONTACT_ALLOW = ['Luis Romero', 'Audelio Zuniga', 'Audelio', 'Jose Romero', 'José Antonio Romero'];",
  "const CONTACT_ALLOW = ['Luis Romero', 'Audelio Zuniga', 'Audelio', 'Jose Romero', 'José Antonio Romero',\n  'Daniel Morilla', 'Morilla', 'Rosario Ruiz', 'Rosario', 'Bethany Valdez', 'Helena Suarez'];",
  'redact.js CONTACT_ALLOW');

/* ---- 2. data.js: discipline routing, nested inside routing so the guard
          already treats it as a structured contact block ---- */
patch('data.js',
  '  "clientQueries": {\n    "asOf": "Jul 30, 2026",\n    "routing": {\n',
  '  "clientQueries": {\n    "asOf": "Jul 30, 2026",\n    "routing": {\n' +
  '      "byArea": {\n' +
  '        "Quality and inspection": {\n' +
  '          "to": [\n' +
  '            { "name": "Daniel Morilla", "role": "Quality Manager", "email": "d.morilla@green-sol.us" }\n' +
  '          ]\n' +
  '        },\n' +
  '        "Health and safety": {\n' +
  '          "to": [\n' +
  '            { "name": "Bethany Valdez", "role": "Health and Safety", "email": "valdez@green-sol.us" },\n' +
  '            { "name": "Helena Suarez", "role": "Health and Safety", "email": "h.suarez@greening-group.com" }\n' +
  '          ]\n' +
  '        },\n' +
  '        "Environmental": {\n' +
  '          "to": [\n' +
  '            { "name": "Rosario Ruiz", "role": "Environmental", "email": "r.ruiz@green-sol.us" }\n' +
  '          ]\n' +
  '        }\n' +
  '      },\n',
  'data.js routing.byArea');

/* ---- 3. index.html ---- */
const IDX = 'index.html';

patch(IDX,
  "    var ccList = (R.cc||[]).filter(function(c){ return c.email && /@/.test(c.email) && !/SET-EMAIL/.test(c.email); });",
  "    var ccList = (R.cc||[]).filter(function(c){ return c.email && /@/.test(c.email) && !/SET-EMAIL/.test(c.email); });\n" +
  "    // Discipline routing: quality, health & safety and environmental queries go straight\n" +
  "    // to the responsible lead, with the Director copied so release control still holds.\n" +
  "    var BY_AREA = R.byArea || {};\n" +
  "    function addrOk(e){ return !!e && /@/.test(e) && !/SET-EMAIL/.test(e); }\n" +
  "    function routeFor(area){\n" +
  "      var a = BY_AREA[area];\n" +
  "      if (a && a.to && a.to.length) {\n" +
  "        return { to: a.to.filter(function(p){ return addrOk(p.email); }),\n" +
  "                 cc: (R.to ? [R.to] : []).concat(R.cc || []).filter(function(c){ return addrOk(c.email); }) };\n" +
  "      }\n" +
  "      return { to: (R.to && addrOk(R.to.email)) ? [R.to] : [], cc: ccList };\n" +
  "    }\n" +
  "    function ownerOf(q){ var t = routeFor(q.area).to; return t.length ? t : null; }",
  'index.html routeFor');

patch(IDX,
  "        '<div class=\"hint\">Goes to <b>'+esc(R.to?R.to.name:'')+'</b> ('+esc(R.to?R.to.role:'')+\n" +
  "          (toOk? ', '+esc(R.to.email):'')+')'+\n" +
  "          (ccList.length? ', copied to '+ccList.map(function(c){ return '<b>'+esc(c.name)+'</b>'; }).join(' and ')+'.':'.')+\n" +
  "          ' '+esc(Q.responseTarget)+'.</div>'+",
  "        '<div class=\"hint\" id=\"qfRoute\"></div>'+",
  'index.html routing hint placeholder');

patch(IDX,
  "    refreshClock();\n    setInterval(refreshClock, 30000);",
  "    refreshClock();\n    setInterval(refreshClock, 30000);\n\n" +
  "    // The recipient depends on the discipline chosen, so it is redrawn on change.\n" +
  "    function renderRoute(){\n" +
  "      var el = document.getElementById('qfRoute'); if(!el) return;\n" +
  "      var sel = document.getElementById('qfArea');\n" +
  "      var r = routeFor(sel ? sel.value : '');\n" +
  "      el.innerHTML = 'Goes to ' + (r.to.length\n" +
  "          ? r.to.map(function(p){ return '<b>'+esc(p.name)+'</b> ('+esc(p.role)+', '+esc(p.email)+')'; }).join(' and ')\n" +
  "          : '<b class=\"err\">no recipient configured</b>') +\n" +
  "        (r.cc.length ? ', copied to ' + r.cc.map(function(c){ return '<b>'+esc(c.name)+'</b>'; }).join(', ') + '.' : '.') +\n" +
  "        ' ' + esc(Q.responseTarget) + '.';\n" +
  "    }\n" +
  "    renderRoute();\n" +
  "    (function(){ var s = document.getElementById('qfArea'); if(s) s.addEventListener('change', renderRoute); })();",
  'index.html renderRoute');

patch(IDX,
  "      var cc=ccList.map(function(c){return c.email;});\n      var url='mailto:'+R.to.email+",
  "      var rt=routeFor((document.getElementById('qfArea')||{}).value);\n" +
  "      var cc=rt.cc.map(function(c){return c.email;});\n" +
  "      var url='mailto:'+rt.to.map(function(p){return p.email;}).join(',')+",
  'index.html send routing');

/* Owner column */
patch(IDX,
  '<th class="n">Clock</th><th>With</th><th>Status</th>',
  '<th class="n">Clock</th><th>With</th><th>Owner</th><th>Status</th>',
  'index.html table header');

patch(IDX,
  "        '<td data-label=\"With\">'+esc(q.assignedTo||'\\u2014')+'</td>'+",
  "        '<td data-label=\"With\">'+esc(q.assignedTo||'\\u2014')+'</td>'+\n" +
  "        '<td data-label=\"Owner\">'+(function(){ var o=ownerOf(q); return o? o.map(function(p){ return esc(p.name); }).join('<br>') : '\\u2014'; })()+'</td>'+",
  'index.html owner cell');

/* Outstanding-only by default, with a toggle */
patch(IDX,
  "    document.getElementById('cqBody').innerHTML = items.length ? items.map(function(q){",
  "    function renderRows(showAll){\n" +
  "    var rows = showAll ? items : items.filter(function(q){ return q._outstanding; });\n" +
  "    document.getElementById('cqBody').innerHTML = rows.length ? rows.map(function(q){",
  'index.html renderRows open');

patch(IDX,
  "    }).join('')\n      : '<tr><td colspan=\"9\" class=\"note\" style=\"text-align:center;padding:14px\">'+esc(Q.openingNote)+'</td></tr>';",
  "    }).join('')\n" +
  "      : '<tr><td colspan=\"10\" class=\"note\" style=\"text-align:center;padding:14px\">'+(showAll? esc(Q.openingNote) : 'Nothing outstanding.')+'</td></tr>';\n" +
  "    }\n" +
  "    renderRows(false);\n" +
  "    (function(){\n" +
  "      var box = document.getElementById('cqToggle'); if(!box) return;\n" +
  "      box.innerHTML = '<button type=\"button\" id=\"cqOut\" class=\"on\">Outstanding (' + nOpen + ')</button>' +\n" +
  "                      '<button type=\"button\" id=\"cqAll\">All (' + items.length + ')</button>';\n" +
  "      function pick(all){\n" +
  "        renderRows(all);\n" +
  "        document.getElementById('cqOut').className = all ? '' : 'on';\n" +
  "        document.getElementById('cqAll').className = all ? 'on' : '';\n" +
  "      }\n" +
  "      document.getElementById('cqOut').addEventListener('click', function(){ pick(false); });\n" +
  "      document.getElementById('cqAll').addEventListener('click', function(){ pick(true); });\n" +
  "    })();",
  'index.html renderRows close + toggle');

patch(IDX,
  '    <div class="card" style="padding:18px 6px">\n      <table><thead><tr><th>Ref</th><th>Subject</th>',
  '    <div id="cqToggle" class="qtoggle"></div>\n' +
  '    <div class="card" style="padding:18px 6px"><div class="qscroll">\n      <table><thead><tr><th>Ref</th><th>Subject</th>',
  'index.html toggle + scroll open');

patch(IDX,
  '      <tbody id="cqBody"></tbody></table>\n    </div>',
  '      <tbody id="cqBody"></tbody></table>\n    </div></div>',
  'index.html scroll close');

/* Styles for the toggle and the scroll area. */
patch(IDX,
  '</style>',
  '.qtoggle{display:flex;gap:8px;margin:0 0 10px}\n' +
  '.qtoggle button{font:inherit;font-size:12.5px;font-weight:700;padding:6px 14px;border-radius:6px;cursor:pointer;\n' +
  '  border:1px solid var(--line);background:#fff;color:#4a5b53}\n' +
  '.qtoggle button.on{background:#0f7a52;border-color:#0f7a52;color:#fff}\n' +
  '.qscroll{max-height:520px;overflow:auto}\n' +
  '@media (max-width:720px){.qscroll{max-height:none;overflow:visible}}\n' +
  '</style>',
  'index.html styles');

console.log(n ? n + ' change(s) applied.' : 'Nothing to do.');
