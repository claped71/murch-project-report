'use strict';
/* One-shot, idempotent. The register's Owner column was derived from the discipline
   the Owner tags on the query, which is not the same thing as who has to answer it:
   a query filed under "Quality and inspection" can belong to Engineering. Owner is
   now derived from the responsible role (assignedTo) instead.

   Email routing stays by discipline — that is about where the Owner's message lands.
   Ownership is about who must respond. They are different questions.
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

/* Role -> owner. Nested inside routing so the guard already treats it as a
   structured contact block. Roles with no named owner yet fall back to the role. */
patch('data.js',
  '    "routing": {\n      "byArea": {',
  '    "routing": {\n' +
  '      "byRole": {\n' +
  '        "QA/QC lead": [\n' +
  '          { "name": "Daniel Morilla", "role": "Quality Manager", "email": "d.morilla@green-sol.us" }\n' +
  '        ],\n' +
  '        "Health and safety lead": [\n' +
  '          { "name": "Bethany Valdez", "role": "Health and Safety", "email": "valdez@green-sol.us" },\n' +
  '          { "name": "Helena Suarez", "role": "Health and Safety", "email": "h.suarez@greening-group.com" }\n' +
  '        ],\n' +
  '        "Environmental lead": [\n' +
  '          { "name": "Rosario Ruiz", "role": "Environmental", "email": "r.ruiz@green-sol.us" }\n' +
  '        ],\n' +
  '        "Construction Manager": [\n' +
  '          { "name": "Audelio Zuniga", "role": "Construction Manager", "email": "a.zuniga@green-sol.us" }\n' +
  '        ]\n' +
  '      },\n' +
  '      "byArea": {',
  'data.js routing.byRole');

const IDX = 'index.html';

patch(IDX,
  "    function ownerOf(q){ var t = routeFor(q.area).to; return t.length ? t : null; }",
  "    // Owner is the role that must answer, not the discipline the query was filed under.\n" +
  "    var BY_ROLE = R.byRole || {};\n" +
  "    function ownerOf(q){\n" +
  "      var people = BY_ROLE[q.assignedTo];\n" +
  "      return (people && people.length) ? people : null;\n" +
  "    }",
  'index.html ownerOf by role');

patch(IDX,
  "        '<td data-label=\"Owner\">'+(function(){ var o=ownerOf(q); return o? o.map(function(p){ return esc(p.name); }).join('<br>') : '\\u2014'; })()+'</td>'+",
  "        '<td data-label=\"Owner\">'+(function(){\n" +
  "          var o=ownerOf(q);\n" +
  "          if(o) return o.map(function(p){ return esc(p.name); }).join('<br>');\n" +
  "          return q.assignedTo ? '<span style=\"color:#8a968f\">'+esc(q.assignedTo)+'</span>' : '\\u2014';\n" +
  "        })()+'</td>'+",
  'index.html owner cell falls back to the role');

console.log(n ? n + ' change(s) applied.' : 'Nothing to do.');
