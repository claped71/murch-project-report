const fs = require('fs');
global.window = {}; global.document = { addEventListener(){}, readyState:"loading", getElementById:()=>null, querySelector:()=>null, querySelectorAll:()=>[], createElement:()=>({style:{},appendChild(){},setAttribute(){}}) };
(new Function("window","document", fs.readFileSync("data.js","utf8")))(window, document);
const R = window.MURCH_REPORT;

R.meta.asOf = "October 25, 2026";

R.headline.statement = [
"Issued 25 October. Module installation is complete. Overall progress 98.65 per cent.",
"",
"Modules 171,470 of 171,470, finished on 24 October. Piles, tracker rows, civil works and the substation are likewise complete.",
"",
"Cable 244,760 ft of 269,748 and MV terminations 252 of 264, both executed through 20 October. Remaining construction is on the fourth circuit.",
"",
"The substation test programme is executed in full, 74 of 74. Energised testing is now running across the plant, and ready-to-energize is carried on 10 November."
].join("\n");

R.testing.note = "By circuit, polarity and continuity records stand at 110 of 110 on the second circuit, 109 of 110 on the third and 90 of 92 on the first. "
  + "The fourth circuit carries 101 of the 104 records still open, and the polarity campaign moves onto it next. "
  + "Very low frequency testing is complete and delivered on the first circuit and begins on the third on 25 October, followed by the fourth. "
  + "Inverter inspections, communication-cable tests and grounding-system tests for the second, third and fourth circuits are being compiled; "
  + "low- and medium-voltage cable testing is complete.";

R.lookahead = [
 { period: "Oct 25 - Oct 31", items: [
   "Very low frequency testing on the third circuit, then the fourth.",
   "Polarity and continuity on the fourth circuit, which carries 101 of the 104 open records.",
   "The fourth circuit, the only one open in construction: inverter-feeder and trunk cable, harness, and the low- and medium-voltage terminations.",
   "The remaining twelve inverter-side medium-voltage terminations on the fourth circuit, and its trench compaction, at 13 of 52.",
   "Evidence packages for mechanical completion on the second, third and fourth circuits: inverter inspections, string tests, communication-cable tests and grounding-system tests.",
   "Interim as-built drawings, including the drawing files, and labelling and signage records.",
   "Substation test documentation issued for acceptance."
 ]},
 { period: "Nov 1 - Nov 10", items: [
   "Completion of the fourth circuit and its mechanical completion application.",
   "Ready-to-energize on 10 November, followed by substation energization and hot commissioning.",
   "Point-to-point verification of the supervisory control system.",
   "Utility-side work at the interconnection, and the utility review and clearance window.",
   "A revised forecast for placed-in-service, commercial operation and substantial completion, issued against the 10 November ready-to-energize date."
 ]}
];

R.safety.headline = "The site safety board records 246,745 safe man-work hours without recordable accidents, photographed on 23 October and up from 239,337 at 15 October. "
  + "The record for 1 January to 5 October shows zero lost-time, zero recordable and zero days-away cases in every month of 2026.";

R.ownerActions.asOf = "Oct 25, 2026";

const head = fs.readFileSync("data.js","utf8").split("\n").slice(0,3).join("\n");
fs.writeFileSync("data.js", head.replace(/Generated October \d+, 2026/, "Generated October 25, 2026")
  + "\nwindow.MURCH_REPORT = " + JSON.stringify(R, null, 1) + ";\n", "utf8");
// keep the cache buster in step with the FINAL data.js (sync.js set it before this script ran)
const crypto = require('crypto');
const finalData = fs.readFileSync("data.js");
const tok = crypto.createHash('sha256').update(finalData).digest('hex').slice(0,10);
let idx = fs.readFileSync("index.html","utf8");
idx = idx.replace(/data\.js\?v=[0-9a-f]*/g, "data.js?v=" + tok);
fs.writeFileSync("index.html", idx, "utf8");
console.log("prose applied; cache buster -> data.js?v=" + tok);
