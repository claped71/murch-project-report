'use strict';
/* One-shot, idempotent. The register's first owner is the person the Owner's own
   discipline tag designates — the same routing the query email follows. Internal
   reassignment to another lead stays visible in the With column, but it does not
   change who the query was addressed to.
   Verified against a real DOM before publishing. Delete with its workflow once run. */
const fs = require('fs');
const IDX = 'index.html';

const from = "    function ownerOf(q){\n" +
  "      var people = BY_ROLE[q.assignedTo];\n" +
  "      if (people && people.length) return people;\n" +
  "      return R.to ? [R.to] : null;   // no named lead for this role: the Director owns it\n" +
  "    }";
const to = "    // First owner is set by the discipline the Owner designates on the query — the\n" +
  "    // same routing the email follows. Internal reassignment shows in the With column.\n" +
  "    function ownerOf(q){ var t = routeFor(q.area).to; return t.length ? t : null; }";

let s = fs.readFileSync(IDX, 'utf8');
if (s.indexOf(to) !== -1) { console.log('already applied'); process.exit(0); }
if (s.indexOf(from) === -1) { console.error('ANCHOR NOT FOUND'); process.exit(1); }
fs.writeFileSync(IDX, s.replace(from, to));
console.log('patched: owner derives from the designated discipline');
