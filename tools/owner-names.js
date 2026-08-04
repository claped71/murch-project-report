'use strict';
/* One-shot, idempotent: the Owner column must always carry a person, never a bare
   role. Roles with no named owner configured fall back to the Construction
   Director, who is the default recipient for anything not routed by discipline.
   Verified against a real DOM before publishing. Delete with its workflow once run. */
const fs = require('fs');
const IDX = 'index.html';
const from = "    function ownerOf(q){\n" +
  "      var people = BY_ROLE[q.assignedTo];\n" +
  "      return (people && people.length) ? people : null;\n" +
  "    }";
const to = "    function ownerOf(q){\n" +
  "      var people = BY_ROLE[q.assignedTo];\n" +
  "      if (people && people.length) return people;\n" +
  "      return R.to ? [R.to] : null;   // no named lead for this role: the Director owns it\n" +
  "    }";
const from2 = "        '<td data-label=\"Owner\">'+(function(){\n" +
  "          var o=ownerOf(q);\n" +
  "          if(o) return o.map(function(p){ return esc(p.name); }).join('<br>');\n" +
  "          return q.assignedTo ? '<span style=\"color:#8a968f\">'+esc(q.assignedTo)+'</span>' : '\\u2014';\n" +
  "        })()+'</td>'+";
const to2 = "        '<td data-label=\"Owner\">'+(function(){\n" +
  "          var o=ownerOf(q);\n" +
  "          return o ? o.map(function(p){ return esc(p.name); }).join('<br>') : '\\u2014';\n" +
  "        })()+'</td>'+";
let s = fs.readFileSync(IDX, 'utf8'), n = 0;
[[from, to, 'ownerOf fallback'], [from2, to2, 'owner cell']].forEach(function (p) {
  if (s.indexOf(p[1]) !== -1) { console.log('already applied: ' + p[2]); return; }
  if (s.indexOf(p[0]) === -1) { console.error('ANCHOR NOT FOUND: ' + p[2]); process.exit(1); }
  s = s.replace(p[0], p[1]); n++; console.log('patched: ' + p[2]);
});
fs.writeFileSync(IDX, s);
console.log(n + ' change(s).');
