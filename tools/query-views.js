'use strict';
/* One-shot, idempotent: split the register view into Outstanding / Responded /
   Closed / All so a closed query is visible as closed, and mute closed rows.
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

const IDX = 'index.html';

/* A closed query reads as resolved, not as "not started". */
patch(IDX,
  "if(s.indexOf('complete')>=0||s.indexOf('answered')>=0||s.indexOf('on target')>=0||s.indexOf('on track')>=0) return 'p-good';",
  "if(s.indexOf('complete')>=0||s.indexOf('answered')>=0||s.indexOf('closed')>=0||s.indexOf('on target')>=0||s.indexOf('on track')>=0) return 'p-good';",
  'pillCls closed');

/* Four views instead of two. */
patch(IDX,
  "    function renderRows(showAll){\n" +
  "    var rows = showAll ? items : items.filter(function(q){ return q._outstanding; });",
  "    // out       still awaiting a response, or answered but not accepted\n" +
  "    // responded a reply demonstrably went to the Owner (may still be open)\n" +
  "    // closed    the Owner accepted it, or the physical condition was met\n" +
  "    var VIEWS = {\n" +
  "      out:       function(q){ return q._outstanding; },\n" +
  "      responded: function(q){ return !!q.respondedISO && q.status !== 'Closed'; },\n" +
  "      closed:    function(q){ return q.status === 'Closed'; },\n" +
  "      all:       function(){ return true; }\n" +
  "    };\n" +
  "    var EMPTY = {\n" +
  "      out: 'Nothing outstanding.',\n" +
  "      responded: 'No responses issued yet.',\n" +
  "      closed: 'Nothing closed yet. A query closes when the Owner accepts the response, or when the physical work it refers to is complete.',\n" +
  "      all: null\n" +
  "    };\n" +
  "    function renderRows(mode){\n" +
  "    var rows = items.filter(VIEWS[mode] || VIEWS.all);",
  'renderRows views');

patch(IDX,
  "      return '<tr>'+\n        '<td data-label=\"Ref\"><b>'+esc(q.ref)+'</b></td>'+",
  "      return '<tr'+(q.status === 'Closed' ? ' style=\"opacity:.62\"' : '')+'>'+\n        '<td data-label=\"Ref\"><b>'+esc(q.ref)+'</b></td>'+",
  'mute closed rows');

patch(IDX,
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
  "      : '<tr><td colspan=\"10\" class=\"note\" style=\"text-align:center;padding:14px\">'+esc(EMPTY[mode] || Q.openingNote)+'</td></tr>';\n" +
  "    }\n" +
  "    (function(){\n" +
  "      var box = document.getElementById('cqToggle'); if(!box) { renderRows('out'); return; }\n" +
  "      var TABS = [\n" +
  "        ['out', 'Outstanding'], ['responded', 'Responded'], ['closed', 'Closed'], ['all', 'All']\n" +
  "      ];\n" +
  "      box.innerHTML = TABS.map(function(t){\n" +
  "        return '<button type=\"button\" data-view=\"'+t[0]+'\"'+(t[0]==='out'?' class=\"on\"':'')+'>'+\n" +
  "               t[1]+' ('+items.filter(VIEWS[t[0]]).length+')</button>';\n" +
  "      }).join('');\n" +
  "      box.querySelectorAll('button').forEach(function(b){\n" +
  "        b.addEventListener('click', function(){\n" +
  "          renderRows(b.dataset.view);\n" +
  "          box.querySelectorAll('button').forEach(function(x){ x.className = (x === b) ? 'on' : ''; });\n" +
  "        });\n" +
  "      });\n" +
  "      renderRows('out');\n" +
  "    })();",
  'four-way toggle');

console.log(n ? n + ' change(s) applied.' : 'Nothing to do.');
