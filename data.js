'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated September 24, 2026 by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "September 24, 2026",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 89.7,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, electrical 14%, civil 10%. The electrical component covers all four electrical fronts — LV and DC cable, MV collection, inverter stations and the substation — combined into one total. Civil excludes the substation so it is not counted twice.",
    "statement": "This report is issued on Thursday 24 September with production executed through Wednesday 23 September. Cumulative cable passed the halfway mark: 7,082 feet were placed on Wednesday — 2,573 feet of 750 kcmil feeder cable at an inverter on the second circuit and 4,226 feet of feeder cable plus 283 feet of trunk cable on the eastern circuit — taking the total to 139,463 feet (51.7%). Module installation restarted in the last area: 749 panels went in, 505 of them in that area and 244 in the western area, for 160,244 of 171,470 (93.5%) with 11,226 remaining. Racking also restarted there, with 110 torque tubes placed and eight rows aligned; no row reached completion, so tracker rows hold at 2,303 of 2,486 (92.6%), of which 886 carry Owner acceptance. Piles stand at 31,231 of 31,352 (99.6%). The first circuit remains complete on low-voltage terminations, with punch-list work and twenty further disconnect-box terminations closed on Wednesday. Medium-voltage junction boxes are now reported circuit by circuit: eight of the 23 are complete, three are in progress and twelve are pending; terminations stand at 87 of 264, cable ploughing at 42 of 46 segments and trench closure at 78 of 181. The substation holds at 70.1%. Overall weighted completion stands at 89.7%.",
    "note": null
  },
  "gates": [
    {
      "key": "piles",
      "name": "Foundation piles",
      "installed": 31231,
      "total": 31352,
      "unit": "piles",
      "forecast": "Aug 7, 2026 — passed, revised date pending",
      "status": "Date passed"
    },
    {
      "key": "trackers",
      "name": "Tracker rows (incl. purlins)",
      "installed": 2303,
      "total": 2486,
      "unit": "rows",
      "earned": 2340,
      "earnedPct": 94.1,
      "earnedLabel": "94.1% earned incl. rows in progress (2,340 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Date passed"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 160244,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Date passed"
    },
    {
      "key": "electrical",
      "name": "Electrical — total",
      "pctOnly": true,
      "gatePct": 52.7,
      "earnedPct": 58.5,
      "unit": "%",
      "earnedLabel": "58.5% earned incl. work in progress",
      "mix": "LV / DC installation 45% · MV collection 22% · Inverter stations 18% · Substation (SET) 15%",
      "forecast": "Oct 16, 2026",
      "status": "Below rate"
    }
  ],
  "earnedProgress": {
    "asOf": "September 24, 2026",
    "scopes": [
      {
        "scope": "Tracker rows",
        "unit": "rows",
        "gate": "2,303 / 2,486",
        "gatePct": 92.6,
        "inProgress": "Partial-row credit suspended — open rows reported by ladder step, not credited",
        "earnedPct": 94.1,
        "detail": "Partial-row credit resumed on 7 August after two consecutive days of step-level reporting from the assembly crews. Earned credits open rows at their verified ladder step; the completion gate continues to count finished rows only and no date moves on earned progress."
      },
      {
        "scope": "Electrical — all fronts",
        "unit": "%",
        "gate": "52.7% of scope",
        "gatePct": 52.7,
        "inProgress": "MV 86% · 23 of 23 inverter stations set · 418 of 419 boxes · 139,463 lf of cable",
        "earnedPct": 58.5,
        "detail": "LV and DC cable, MV collection, inverter stations and the substation combined. All 23 stations are set and welded; medium-voltage terminations are complete on the inverter side of the first two circuits, and no station yet has its full termination set closed — the measure that counts toward mechanical completion."
      }
    ],
    "ladder": "Tracker steps: saddles 15 · tube 30 · purlins 25 · damper 20 · torque 10.",
    "note": "Completed units govern the dates and certification. Earned progress credits verified partial work on fixed weights adopted 30 July 2026, from confirmed physical states, and does not advance any completion date."
  },
  "milestones": [
    {
      "name": "Mechanical Completion",
      "contract": "Sep 25, 2026",
      "forecast": "Oct 24, 2026 (last circuit)",
      "status": "At risk",
      "note": "Contract date not achievable. First-circuit LV terminations are complete as at 22 September (box connections 372 of 372, inverter connections 186 of 186); its mechanical-completion tests follow the series connection and piercing work. Circuit mechanical completion is scheduled 2, 10, 17 and 24 October.",
      "circuits": "11A Oct 2 · 11B Oct 10 · 12A Oct 17 · 12B Oct 24"
    },
    {
      "name": "Provisional Interconnection",
      "contract": "Oct 16, 2026",
      "forecast": "Nov 5, 2026 (last circuit) · Ready to Energize Oct 14",
      "status": "At risk",
      "note": "Gated by the substation (70.1%) and by medium-voltage terminations (87 of 264) and junction boxes (8 of 23 complete, 3 in progress).",
      "circuits": "11A Oct 22 · 11B Oct 27 · 12A Oct 31 · 12B Nov 5"
    },
    {
      "name": "Commercial Operation Date",
      "contract": "Nov 9, 2026",
      "forecast": "Nov 27, 2026 (last circuit)",
      "status": "At risk",
      "note": "Follows placed-in-service by circuit after the substantial-completion tests (8-day capacity and availability tests per circuit). Inherits the exposure above.",
      "circuits": "11A Nov 12 · 11B Nov 18 · 12A Nov 23 · 12B Nov 27"
    },
    {
      "name": "Substantial Completion",
      "contract": "Nov 30, 2026",
      "forecast": "Nov 30, 2026 (last circuit)",
      "status": "Watch",
      "note": "Last circuit lands on the contract date with no margin; every day lost upstream consumes it. Outdoor close-out must precede the weather stop.",
      "circuits": "11A Nov 14 · 11B Nov 20 · 12A Nov 25 · 12B Nov 30"
    }
  ],
  "series": {
    "piles": [
      {
        "d": "Jun 18",
        "v": 20,
        "c": 16184
      },
      {
        "d": "Jun 19",
        "v": 79,
        "c": 16263
      },
      {
        "d": "Jun 22",
        "v": 251,
        "c": 16514
      },
      {
        "d": "Jun 23",
        "v": 101,
        "c": 16615
      },
      {
        "d": "Jun 25",
        "v": 370,
        "c": 16985
      },
      {
        "d": "Jun 26",
        "v": 340,
        "c": 17325
      },
      {
        "d": "Jun 29",
        "v": 261,
        "c": 17586
      },
      {
        "d": "Jun 30",
        "v": 234,
        "c": 17820
      },
      {
        "d": "Jul 1",
        "v": 252,
        "c": 18072
      },
      {
        "d": "Jul 2",
        "v": 274,
        "c": 18346
      },
      {
        "d": "Jul 3",
        "v": 134,
        "c": 18480
      },
      {
        "d": "Jul 6",
        "v": 307,
        "c": 18787
      },
      {
        "d": "Jul 7",
        "v": 399,
        "c": 19186
      },
      {
        "d": "Jul 8",
        "v": 646,
        "c": 19832
      },
      {
        "d": "Jul 9",
        "v": 669,
        "c": 20501
      },
      {
        "d": "Jul 10",
        "v": 680,
        "c": 21181
      },
      {
        "d": "Jul 11",
        "v": 680,
        "c": 21861
      },
      {
        "d": "Jul 13",
        "v": 608,
        "c": 22469
      },
      {
        "d": "Jul 14",
        "v": 695,
        "c": 23164
      },
      {
        "d": "Jul 15",
        "v": 481,
        "c": 23645
      },
      {
        "d": "Jul 16",
        "v": 504,
        "c": 24149
      },
      {
        "d": "Jul 17",
        "v": 472,
        "c": 24621
      },
      {
        "d": "Jul 18",
        "v": 608,
        "c": 25229
      },
      {
        "d": "Jul 20",
        "v": 622,
        "c": 25851
      },
      {
        "d": "Jul 21",
        "v": 253,
        "c": 26104
      },
      {
        "d": "Jul 22",
        "v": 202,
        "c": 26306
      },
      {
        "d": "Jul 23",
        "v": 284,
        "c": 26590
      },
      {
        "d": "Jul 24",
        "v": 364,
        "c": 26954
      },
      {
        "d": "Jul 25",
        "v": 236,
        "c": 27190
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 27190
      },
      {
        "d": "Jul 28",
        "v": 439,
        "c": 27629
      },
      {
        "d": "Jul 29",
        "v": 539,
        "c": 28168
      },
      {
        "d": "Jul 30",
        "v": 627,
        "c": 28795
      },
      {
        "d": "Jul 31",
        "v": 337,
        "c": 29132
      },
      {
        "d": "Aug 1",
        "v": 0,
        "c": 29132
      },
      {
        "d": "Aug 3",
        "v": 205,
        "c": 29337
      },
      {
        "d": "Aug 4",
        "v": 110,
        "c": 29447
      },
      {
        "d": "Aug 5",
        "v": 100,
        "c": 29547
      },
      {
        "d": "Aug 6",
        "v": 149,
        "c": 29696
      },
      {
        "d": "Aug 7",
        "v": 63,
        "c": 29759
      },
      {
        "d": "Aug 8",
        "v": 215,
        "c": 29974
      },
      {
        "d": "Aug 10",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 11",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 12",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 13",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 14",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 15",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 17",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 18",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 19",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 20",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 21",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 22",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 24",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 25",
        "v": 0,
        "c": 29974
      },
      {
        "d": "Aug 26",
        "v": 211,
        "c": 30185
      },
      {
        "d": "Aug 27",
        "v": 98,
        "c": 30283
      },
      {
        "d": "Aug 28",
        "v": 233,
        "c": 30516
      },
      {
        "d": "Aug 29",
        "v": 0,
        "c": 30516
      },
      {
        "d": "Aug 31",
        "v": 31,
        "c": 30547
      },
      {
        "d": "Sep 1",
        "v": 0,
        "c": 30547
      },
      {
        "d": "Sep 2",
        "v": 70,
        "c": 30617
      },
      {
        "d": "Sep 3",
        "v": 0,
        "c": 30617
      },
      {
        "d": "Sep 4",
        "v": 0,
        "c": 30617
      },
      {
        "d": "Sep 5",
        "v": 0,
        "c": 30617
      },
      {
        "d": "Sep 7",
        "v": 0,
        "c": 30617
      },
      {
        "d": "Sep 8",
        "v": 10,
        "c": 30627
      },
      {
        "d": "Sep 9",
        "v": 0,
        "c": 30627
      },
      {
        "d": "Sep 10",
        "v": 0,
        "c": 30627
      },
      {
        "d": "Sep 11",
        "v": 0,
        "c": 30627
      },
      {
        "d": "Sep 12",
        "v": 0,
        "c": 30627
      },
      {
        "d": "Sep 14",
        "v": 180,
        "c": 30807
      },
      {
        "d": "Sep 15",
        "v": 205,
        "c": 31012
      },
      {
        "d": "Sep 16",
        "v": 205,
        "c": 31217
      },
      {
        "d": "Sep 17",
        "v": 14,
        "c": 31231
      },
      {
        "d": "Sep 18",
        "v": 0,
        "c": 31231
      },
      {
        "d": "Sep 19",
        "v": 0,
        "c": 31231
      }
    ],
    "trackers": [
      {
        "d": "Jun 17",
        "v": 15,
        "c": 116
      },
      {
        "d": "Jun 18",
        "v": 35,
        "c": 151
      },
      {
        "d": "Jun 19",
        "v": 26,
        "c": 177
      },
      {
        "d": "Jun 20",
        "v": 31,
        "c": 208
      },
      {
        "d": "Jun 21",
        "v": 0,
        "c": 208
      },
      {
        "d": "Jun 22",
        "v": 48,
        "c": 256
      },
      {
        "d": "Jun 23",
        "v": 31,
        "c": 287
      },
      {
        "d": "Jun 24",
        "v": 0,
        "c": 287
      },
      {
        "d": "Jun 25",
        "v": 57,
        "c": 344
      },
      {
        "d": "Jun 26",
        "v": 26,
        "c": 370
      },
      {
        "d": "Jun 29",
        "v": 29,
        "c": 399
      },
      {
        "d": "Jun 30",
        "v": 30,
        "c": 429
      },
      {
        "d": "Jul 1",
        "v": 51,
        "c": 480
      },
      {
        "d": "Jul 7",
        "v": 29,
        "c": 509
      },
      {
        "d": "Jul 8",
        "v": 0,
        "c": 509
      },
      {
        "d": "Jul 9",
        "v": 0,
        "c": 509
      },
      {
        "d": "Jul 10",
        "v": 0,
        "c": 509
      },
      {
        "d": "Jul 13",
        "v": 29,
        "c": 538
      },
      {
        "d": "Jul 14",
        "v": 49,
        "c": 587
      },
      {
        "d": "Jul 15",
        "v": 35,
        "c": 622
      },
      {
        "d": "Jul 16",
        "v": 35,
        "c": 657
      },
      {
        "d": "Jul 17",
        "v": 25,
        "c": 682
      },
      {
        "d": "Jul 18",
        "v": 0,
        "c": 682
      },
      {
        "d": "Jul 20",
        "v": 21,
        "c": 703
      },
      {
        "d": "Jul 21",
        "v": 25,
        "c": 728
      },
      {
        "d": "Jul 22",
        "v": 39,
        "c": 767
      },
      {
        "d": "Jul 23",
        "v": 28,
        "c": 795
      },
      {
        "d": "Jul 24",
        "v": 30,
        "c": 825
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 825
      },
      {
        "d": "Jul 28",
        "v": 30,
        "c": 855
      },
      {
        "d": "Jul 29",
        "v": 35,
        "c": 890
      },
      {
        "d": "Jul 30",
        "v": 30,
        "c": 920
      },
      {
        "d": "Jul 31",
        "v": 40,
        "c": 960
      },
      {
        "d": "Aug 1",
        "v": 40,
        "c": 1000
      },
      {
        "d": "Aug 3",
        "v": 86,
        "c": 1086
      },
      {
        "d": "Aug 4",
        "v": 60,
        "c": 1146
      },
      {
        "d": "Aug 5",
        "v": 33,
        "c": 1179
      },
      {
        "d": "Aug 6",
        "v": 29,
        "c": 1208
      },
      {
        "d": "Aug 7",
        "v": 42,
        "c": 1250
      },
      {
        "d": "Aug 8",
        "v": 0,
        "c": 1250
      },
      {
        "d": "Aug 10",
        "v": 78,
        "c": 1328
      },
      {
        "d": "Aug 11",
        "v": 60,
        "c": 1388
      },
      {
        "d": "Aug 12",
        "v": 89,
        "c": 1477
      },
      {
        "d": "Aug 13",
        "v": 97,
        "c": 1574
      },
      {
        "d": "Aug 14",
        "v": 65,
        "c": 1639
      },
      {
        "d": "Aug 15",
        "v": 0,
        "c": 1639
      },
      {
        "d": "Aug 17",
        "v": 54,
        "c": 1693
      },
      {
        "d": "Aug 18",
        "v": 62,
        "c": 1755
      },
      {
        "d": "Aug 19",
        "v": 55,
        "c": 1810
      },
      {
        "d": "Aug 20",
        "v": 60,
        "c": 1870
      },
      {
        "d": "Aug 21",
        "v": 46,
        "c": 1916
      },
      {
        "d": "Aug 22",
        "v": 0,
        "c": 1916
      },
      {
        "d": "Aug 24",
        "v": 60,
        "c": 1976
      },
      {
        "d": "Aug 25",
        "v": 67,
        "c": 2043
      },
      {
        "d": "Aug 26",
        "v": 0,
        "c": 2043
      },
      {
        "d": "Aug 27",
        "v": 0,
        "c": 2043
      },
      {
        "d": "Aug 28",
        "v": 65,
        "c": 2108
      },
      {
        "d": "Aug 29",
        "v": 0,
        "c": 2108
      },
      {
        "d": "Aug 31",
        "v": 65,
        "c": 2173
      },
      {
        "d": "Sep 1",
        "v": 22,
        "c": 2195
      },
      {
        "d": "Sep 2",
        "v": 22,
        "c": 2217
      },
      {
        "d": "Sep 3",
        "v": 30,
        "c": 2247
      },
      {
        "d": "Sep 4",
        "v": 15,
        "c": 2262
      },
      {
        "d": "Sep 5",
        "v": 0,
        "c": 2262
      },
      {
        "d": "Sep 7",
        "v": 0,
        "c": 2262
      },
      {
        "d": "Sep 8",
        "v": 0,
        "c": 2262
      },
      {
        "d": "Sep 9",
        "v": 41,
        "c": 2303
      },
      {
        "d": "Sep 10",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 11",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 12",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 14",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 15",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 16",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 17",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 18",
        "v": 0,
        "c": 2303
      },
      {
        "d": "Sep 19",
        "v": 0,
        "c": 2303
      }
    ],
    "modules": [
      {
        "d": "Jul 3",
        "v": 234,
        "c": 234
      },
      {
        "d": "Jul 6",
        "v": 780,
        "c": 1014
      },
      {
        "d": "Jul 7",
        "v": 156,
        "c": 1170
      },
      {
        "d": "Jul 8",
        "v": 936,
        "c": 2106
      },
      {
        "d": "Jul 9",
        "v": 1308,
        "c": 3414
      },
      {
        "d": "Jul 10",
        "v": 1802,
        "c": 5216
      },
      {
        "d": "Jul 11",
        "v": 517,
        "c": 5733
      },
      {
        "d": "Jul 13",
        "v": 2922,
        "c": 8655
      },
      {
        "d": "Jul 14",
        "v": 2335,
        "c": 10990
      },
      {
        "d": "Jul 15",
        "v": 780,
        "c": 11770
      },
      {
        "d": "Jul 16",
        "v": 858,
        "c": 12628
      },
      {
        "d": "Jul 17",
        "v": 2226,
        "c": 14854
      },
      {
        "d": "Jul 18",
        "v": 0,
        "c": 14854
      },
      {
        "d": "Jul 20",
        "v": 3601,
        "c": 18455
      },
      {
        "d": "Jul 21",
        "v": 3082,
        "c": 21537
      },
      {
        "d": "Jul 22",
        "v": 2887,
        "c": 24424
      },
      {
        "d": "Jul 23",
        "v": 3456,
        "c": 27880
      },
      {
        "d": "Jul 24",
        "v": 3134,
        "c": 31014
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 31014
      },
      {
        "d": "Jul 28",
        "v": 3100,
        "c": 34114
      },
      {
        "d": "Jul 29",
        "v": 3109,
        "c": 37223
      },
      {
        "d": "Jul 30",
        "v": 3158,
        "c": 40381
      },
      {
        "d": "Jul 31",
        "v": 4136,
        "c": 44517
      },
      {
        "d": "Aug 1",
        "v": 1780,
        "c": 46297
      },
      {
        "d": "Aug 3",
        "v": 4279,
        "c": 50576
      },
      {
        "d": "Aug 4",
        "v": 3168,
        "c": 53744
      },
      {
        "d": "Aug 5",
        "v": 4134,
        "c": 57878
      },
      {
        "d": "Aug 6",
        "v": 3848,
        "c": 61726
      },
      {
        "d": "Aug 7",
        "v": 4030,
        "c": 65756
      },
      {
        "d": "Aug 8",
        "v": 1327,
        "c": 67083
      },
      {
        "d": "Aug 10",
        "v": 2254,
        "c": 69337
      },
      {
        "d": "Aug 11",
        "v": 2298,
        "c": 71635
      },
      {
        "d": "Aug 12",
        "v": 3878,
        "c": 75513
      },
      {
        "d": "Aug 13",
        "v": 3508,
        "c": 79021
      },
      {
        "d": "Aug 14",
        "v": 3188,
        "c": 82209
      },
      {
        "d": "Aug 15",
        "v": 632,
        "c": 82841
      },
      {
        "d": "Aug 17",
        "v": 5590,
        "c": 88431
      },
      {
        "d": "Aug 18",
        "v": 4904,
        "c": 93335
      },
      {
        "d": "Aug 19",
        "v": 5577,
        "c": 98912
      },
      {
        "d": "Aug 20",
        "v": 4210,
        "c": 103122
      },
      {
        "d": "Aug 21",
        "v": 5694,
        "c": 108816
      },
      {
        "d": "Aug 22",
        "v": 768,
        "c": 109584
      },
      {
        "d": "Aug 24",
        "v": 4095,
        "c": 113679
      },
      {
        "d": "Aug 25",
        "v": 5593,
        "c": 119272
      },
      {
        "d": "Aug 26",
        "v": 3406,
        "c": 122678
      },
      {
        "d": "Aug 27",
        "v": 4654,
        "c": 127332
      },
      {
        "d": "Aug 28",
        "v": 2847,
        "c": 130179
      },
      {
        "d": "Aug 29",
        "v": 0,
        "c": 130179
      },
      {
        "d": "Aug 31",
        "v": 5566,
        "c": 135745
      },
      {
        "d": "Sep 1",
        "v": 3398,
        "c": 139143
      },
      {
        "d": "Sep 2",
        "v": 4056,
        "c": 143199
      },
      {
        "d": "Sep 3",
        "v": 1560,
        "c": 144759
      },
      {
        "d": "Sep 4",
        "v": 768,
        "c": 145527
      },
      {
        "d": "Sep 5",
        "v": 2578,
        "c": 148105
      },
      {
        "d": "Sep 7",
        "v": 4204,
        "c": 152309
      },
      {
        "d": "Sep 8",
        "v": 3666,
        "c": 155975
      },
      {
        "d": "Sep 9",
        "v": 1,
        "c": 155976
      },
      {
        "d": "Sep 10",
        "v": 1170,
        "c": 157146
      },
      {
        "d": "Sep 11",
        "v": 2426,
        "c": 159572
      },
      {
        "d": "Sep 12",
        "v": 0,
        "c": 159572
      },
      {
        "d": "Sep 14",
        "v": 1539,
        "c": 160244
      },
      {
        "d": "Sep 15",
        "v": 537,
        "c": 160244
      },
      {
        "d": "Sep 16",
        "v": 1872,
        "c": 160244
      },
      {
        "d": "Sep 17",
        "v": 1196,
        "c": 160244
      },
      {
        "d": "Sep 18",
        "v": 580,
        "c": 160244
      },
      {
        "d": "Sep 19",
        "v": 0,
        "c": 160244
      },
      {
        "d": "Sep 23",
        "v": 749,
        "c": 160244
      }
    ]
  },
  "seriesMeta": {
    "piles": {
      "label": "Foundation piles",
      "total": 31352,
      "color": "#0f7a52",
      "planStart": "Jun 18",
      "planEnd": "Aug 7",
      "planStartVal": 16184,
      "unit": "piles"
    },
    "trackers": {
      "label": "Tracker rows",
      "total": 2486,
      "color": "#2769a8",
      "planStart": "Jun 17",
      "planEnd": "Aug 30",
      "planStartVal": 116,
      "unit": "rows"
    },
    "modules": {
      "label": "PV modules",
      "total": 171470,
      "color": "#b96f18",
      "planStart": "Jul 3",
      "planEnd": "Sep 6",
      "planStartVal": 234,
      "unit": "modules"
    }
  },
  "civil": [
    {
      "activity": "Bulk earthworks — cut and fill",
      "done": 100,
      "status": "Complete",
      "note": "Complete on 17 July 2026 across the whole project. Confirmed again on the 5 August civil control sheet at 100%, with the full quantity executed."
    },
    {
      "activity": "Perimeter fence",
      "done": 95,
      "status": "On track",
      "note": "Areas A to F complete. The Area G remainder and the gates are outstanding, and completion is held by the outstanding drain-commissioning signature rather than by production."
    },
    {
      "activity": "Sediment basins / environmental controls",
      "done": 95,
      "status": "On Track",
      "note": "Construction FINISHED. Remaining 5% is seeding in Area F only."
    },
    {
      "activity": "Internal access roads",
      "done": 100,
      "status": "Complete",
      "note": "Complete on 4 August 2026, four days after the end-July target. The road network now supports material distribution to every area, including the pile workfront opened on 5 August."
    },
    {
      "activity": "Inverter station foundations",
      "done": 100,
      "status": "Complete",
      "note": "Complete on 24 July 2026. All 23 station foundations are finished and all 23 stations are set, anchored and welded on them. Welding procedure approved 21 July."
    },
    {
      "activity": "Pad SET",
      "done": 100,
      "status": "Complete",
      "note": "100% (Jan 5 – May 20). Substation scope — excluded from the civil roll-up."
    },
    {
      "activity": "Main Foundation SET",
      "done": 100,
      "status": "Complete",
      "note": "100% (to Jul 10). Substation scope — excluded from the roll-up."
    },
    {
      "activity": "Small Foundation SET",
      "done": 100,
      "status": "Complete",
      "note": "100% Aug 6 — the last foundation line to close. Substation scope."
    },
    {
      "activity": "O&M Building",
      "done": 100,
      "status": "Complete",
      "note": ""
    },
    {
      "activity": "Foundation SET (composite)",
      "done": 70.1,
      "status": "Active",
      "note": "70.1% (Sep 22 report) — structural 80.9%, electrical 49.0%. PRIOR: 67.1% (Sep 21 report) — structural 72.0%, electrical 48.2%. PRIOR: 66.3% (Sep 21 tracker) — electrical 48.0%. PRIOR: 63.3% (Sep 15 report) — electrical 42.9%. PRIOR: 63.1% (Sep 12 report) — civil 97.6%, structural 67.6%, electrical 42.3%. Substation scope — excluded from the civil roll-up."
    }
  ],
  "safety": {
    "headline": "The project stands at 337 days without a lost-time accident across 203,862.6 hours worked at 17 September, with zero recordable cases to date. The event of 8 September at the substation (20260908_ACC_001), in which a worker lost consciousness during hand excavation and was transferred to hospital for evaluation, remains under investigation; its classification will be set once the medical report is received. Heat-stress controls on the substation front — work-rest cycles, shade and hydration, closer supervision of new starters and a re-issued pre-task briefing — remain in place. Weekly safety walks with every subcontractor, bi-weekly subcontractor safety meetings, monthly general safety meetings and the register of unsafe acts and conditions continue.",
    "tiles": [
      {
        "label": "Recordable accidents",
        "value": "0",
        "note": "No fatality, lost-time injury, restricted-work or OSHA-recordable case on the project to date. TRIR, DART and LTIFR all stand at 0.00 across 203,863 hours."
      },
      {
        "label": "Days without accident",
        "value": "337",
        "note": "Per the site register at 17 September, maintained daily from subcontractor returns. The classification of the 8 September event remains pending the medical report."
      },
      {
        "label": "Lost days",
        "value": "0",
        "note": "Frequency, incidence and severity rates remain zero. No weather-related lost hours were registered on 16 September."
      },
      {
        "label": "First-aid cases — since August",
        "value": "5",
        "note": "4 August: ankle sprain on concealed uneven ground. 7 August: torque tube slipped onto a worker's helmet and shoulder; evaluated in hospital, cleared to return; investigation closed, tube-handling corrective actions retained in the daily briefings. 2 and 4 September: two minor first-aid cases, no treatment beyond first aid. 8 September: substation worker lost consciousness during hand excavation; treated on site by emergency services and transferred to hospital for evaluation; investigation open, classification pending the medical outcome (event 20260908_ACC_001)."
      },
      {
        "label": "Man-hours to date",
        "value": "203,863",
        "note": "Register maintained to 17 September. July alone: 52,464 hours across 224 personnel — the July monthly report is issued and July is the audited basis."
      },
      {
        "label": "Safety events — July",
        "value": "39",
        "note": "24 unsafe conditions and 14 unsafe acts or behaviours identified and corrected, with 1 near miss. Proactive identification is the intent of the leading programme; the monthly trend is published in the report."
      },
      {
        "label": "Toolbox talks — July",
        "value": "32",
        "note": "32 sessions in July, 64 year to date; the tube-handling and ground-condition subjects are standing items."
      },
      {
        "label": "Personnel trained",
        "value": "426",
        "note": "Year-to-date site inductions and training; 148 trained in July."
      }
    ],
    "note": "The injury record remains clean at the date of this report: zero recordable, zero lost-time and zero restricted-work cases across 186,352 hours, with all three incidence rates at 0.00 - subject to the classification of the 8 September event once the medical outcome is known. The 8 September response - immediate first aid by co-workers, emergency services on site, hospital transfer, area stopped, notification within the day and investigation opened - followed the site emergency procedure as written. The programme behind that response is documented in the EHS management pack issued on 8 September: workers and man-hours by company and month, orientations given, the full incident register, unsafe acts and conditions by type with the corrective action for each, weekly safety walks with subcontractor supervisors, bi-weekly subcontractor safety meetings and monthly general safety meetings with recorded minutes. Heat-stress controls on the substation front are reinforced pending the findings. The 7 August investigation is closed with its corrective actions retained in the daily briefings. Environmental events on the wetland drilling crossing during August were contained, cleaned and notified, and the conduit completed on 30 August closes the exposure on that section."
  },
  "quality": {
    "headline": "Owner acceptance stands at 886 of 2,303 completed tracker rows (38.5%) and 15,434 installed modules, and converting EPC releases into Owner acceptance remains the controlling quality action: 2,068 tracker rows and 53,060 modules carry EPC approval. Inspection records are submitted for Owner review as areas close out. The two Owner queries on installed-work conformance were discussed at the Owner site meeting on 10 September and the written responses follow it.",
    "tiles": [
      {
        "label": "Piles executed",
        "value": "31,231",
        "note": "Current executed basis, 99.6% of project scope."
      },
      {
        "label": "Piles approved",
        "value": "27,291",
        "note": "88.0% of the piles executed at the 15 September approval cut."
      },
      {
        "label": "Awaiting approval",
        "value": "3,721",
        "note": "Executed at the 15 September cut and not yet approved; open inspection fronts follow the active production areas."
      },
      {
        "label": "Owner approved — piles",
        "value": "6,836",
        "note": "The Owner approval record advanced this week for the first time since the early-July snapshot, on both piles and tracker rows."
      },
      {
        "label": "Tracker rows released",
        "value": "886 / 2,303",
        "note": "35.6% of the 2,486 rows in scope and 38.5% of the 2,303 built. Released rows feed the module installation front."
      },
      {
        "label": "Pile refusals recorded",
        "value": "242",
        "note": "0.8% of executed piles. Reinstallation and tap-down corrections are complete or in progress."
      }
    ],
    "note": "Release is reported on the Owner-approved measure: rows are counted as released only once they have passed the Owner's quality process, not on internal approval alone. A proposal to combine the racking and module inspections into a single release is with the Owner for decision. Inspection records are submitted for Owner review as areas close out. Module spacing is verified by measurement during tightening rather than assumed from the purlin."
  },
  "weatherLog": [
    {
      "date": "Sep 19, 2026",
      "type": "To confirm",
      "impact": "Full stop — all fronts",
      "detail": "Zero production recorded on every front. Confirm the cause and wording before publishing."
    },
    {
      "date": "Sep 12, 2026",
      "type": "To confirm",
      "impact": "Full stop — all fronts",
      "detail": "Zero production recorded on every front. Confirm the cause and wording before publishing."
    },
    {
      "date": "Aug 29, 2026",
      "type": "To confirm",
      "impact": "Full stop — all fronts",
      "detail": "Zero production recorded on every front. Confirm the cause and wording before publishing."
    },
    {
      "date": "Jul 27, 2026 (Mon)",
      "type": "Rain",
      "impact": "Full stop — all fronts",
      "detail": "No pile, tracker, module or electrical production. Site closed to production for the day."
    },
    {
      "date": "Jul 17, 2026 (Fri)",
      "type": "Air quality alert",
      "impact": "Partial — one front released mid-afternoon",
      "detail": "Statewide air-quality alert in effect. Alert lifted July 20 and not renewed."
    }
  ],
  "weatherNote": "Days on which weather or air quality reduced or stopped production. Scheduled non-working days are not listed.",
  "lookahead": [
    {
      "period": "Sep 24 - Sep 26",
      "items": [
        "Second-circuit LV works closed to the 24 September date: feeder cable from 45,096 of 53,456 feet and harness from 1,053 of 1,292.",
        "First-circuit series connection and piercing completed, so its mechanical-completion tests can start.",
        "Junction-box installation carried from 8 of 23 and the three in progress closed, so junction-box terminations (0 of 150) can begin.",
        "Eastern-circuit cable pull sustained from 12,292 feet toward the 1 October date.",
        "Module installation sustained in the last and western areas (11,226 remaining) and racking in the last area carried through to completed rows.",
        "The final pile area closed (108 positions).",
        "Remaining medium-voltage ploughing segments (4 of 46) completed.",
        "Substation structural and electrical work continued toward ready-to-energize on 14 October."
      ]
    },
    {
      "period": "Sep 28 - Oct 3",
      "items": [
        "Eastern-circuit LV works closed to the 1 October date.",
        "First-circuit mechanical completion on 2 October.",
        "Last-circuit modules closed to the 29 September date and last-circuit LV works (due 10 October) producing daily.",
        "Substation control-cable terminations, fibre-optic fusions and SCADA integration progressed toward ready-to-energize on 14 October."
      ]
    }
  ],
  "ownerActions": {
    "asOf": "Sep 24, 2026",
    "responseNote": "Days outstanding are counted to the publication date of this report. This register supports coordination and does not replace or vary any notice provision of the Agreement.",
    "items": [
      {
        "ref": "OA-09",
        "item": "Additional module quantity — order confirmation",
        "since": "Jul 2026",
        "days": null,
        "status": "Open",
        "blocks": "Closure of the final installation blocks without a material wait.",
        "detail": "Confirmation is requested of the status and expected delivery date of the additional module quantity requested in July to cover installation attrition; the request was followed up in writing on 30 August."
      },
      {
        "ref": "OA-01",
        "item": "Area G sequencing confirmation",
        "since": "Jul 3, 2026",
        "days": 34,
        "status": "Open",
        "blocks": "Programming of Area G cut and fill, which in turn releases the last pile workfront.",
        "detail": "Area G is released for pile driving and material distribution. Confirmation of the sediment basin completion sequence is required to programme the cut and fill."
      },
      {
        "ref": "OA-02",
        "item": "Refreshed defect count",
        "since": "Jul 6, 2026",
        "days": 31,
        "status": "Answered",
        "blocks": "Nothing further.",
        "detail": "RESOLVED — the July 30 quality sheet restates the defect position at 242, equal to 0.9% of executed piles, against the current executed basis. No further action is required unless the position changes."
      },
      {
        "ref": "OA-03",
        "item": "Owner approval log for inspected work",
        "since": "Jul 13, 2026",
        "days": 24,
        "status": "In progress",
        "blocks": "Certification of inspected work; the EPC record remains ahead of the approved position.",
        "detail": "MOVED THIS WEEK — the Owner approval log advanced for the first time since the early-July snapshot, from 6,682 to 6,836 piles and from 107 to 296 tracker rows. It still stands well behind the EPC record of 24,751 approved piles, so continued updating is required for the quality record to close out with production."
      },
      {
        "ref": "OA-04",
        "item": "Substation equipment delivery dates",
        "since": "Jul 17, 2026",
        "days": 20,
        "status": "Open",
        "blocks": "Firming the substation erection sequence on the interconnection path.",
        "detail": "Breakers and structural steel are the remaining controlling substation items. Delivery dates are requested so the sequence can be fixed against the pre-commissioning window."
      },
      {
        "ref": "OA-05",
        "item": "Interconnection readiness coordination",
        "since": "Jul 20, 2026",
        "days": 17,
        "status": "Open",
        "blocks": "Alignment of the October pre-commissioning programme.",
        "detail": "Utility witness testing and energization windows to be aligned with the pre-commissioning programme running September 14 to October 15."
      },
      {
        "ref": "OA-06",
        "item": "Area G change order signature",
        "since": "Jul 28, 2026",
        "days": 9,
        "status": "Open",
        "blocks": "Full release of the Area G pile workfront, the largest remaining pile quantity at 1,779.",
        "detail": "Signature is outstanding on the Area G change order. Piling is proceeding in the released portion; full release requires the signed instrument."
      },
      {
        "ref": "OA-07",
        "item": "Pile inspection records for review",
        "since": "Jul 6, 2026",
        "days": 31,
        "status": "In progress",
        "blocks": "Nothing at present; submitted progressively by area.",
        "detail": "EPC pile approval stands at 24,751 records, 87.3% of executed piles. The latest cut is dated July 27 and predates the three most recent production days. Records are submitted area by area for Owner review so the quality record closes with production."
      },
      {
        "ref": "OA-08",
        "item": "Decision on a combined racking and module quality release",
        "since": "Jul 30, 2026",
        "days": 7,
        "status": "Open",
        "blocks": "The module installation front, which is currently limited by release cadence rather than by installation capacity.",
        "detail": "A proposal has been submitted to carry out a single quality release covering both the racking and the module installation on a row, in place of two separate inspections. The EPC would retain full responsibility for the racking and would remove and reinstall modules at its own cost if a racking defect were identified afterwards. A decision is requested so that release cadence can keep pace with the build rate."
      }
    ]
  },
  "clientQueries": {
    "asOf": "Sep 12, 2026 — executed through Friday Sep 11",
    "routing": {
      "byRole": {
        "QA/QC lead": [
          {
            "name": "Daniel Morilla",
            "role": "Quality Manager",
            "email": "d.morilla@green-sol.us"
          }
        ],
        "Health and safety lead": [
          {
            "name": "Bethany Valdez",
            "role": "Health and Safety",
            "email": "valdez@green-sol.us"
          },
          {
            "name": "Helena Suarez",
            "role": "Health and Safety",
            "email": "h.suarez@greening-group.com"
          }
        ],
        "Environmental lead": [
          {
            "name": "Rosario Ruiz",
            "role": "Environmental",
            "email": "r.ruiz@green-sol.us"
          }
        ],
        "Construction Manager": [
          {
            "name": "Audelio Zuniga",
            "role": "Construction Manager",
            "email": "a.zuniga@green-sol.us"
          }
        ]
      },
      "byArea": {
        "Quality and inspection": {
          "to": [
            {
              "name": "Daniel Morilla",
              "role": "Quality Manager",
              "email": "d.morilla@green-sol.us"
            }
          ]
        },
        "Health and safety": {
          "to": [
            {
              "name": "Bethany Valdez",
              "role": "Health and Safety",
              "email": "valdez@green-sol.us"
            },
            {
              "name": "Helena Suarez",
              "role": "Health and Safety",
              "email": "h.suarez@greening-group.com"
            }
          ]
        },
        "Environmental": {
          "to": [
            {
              "name": "Rosario Ruiz",
              "role": "Environmental",
              "email": "r.ruiz@green-sol.us"
            }
          ]
        }
      },
      "to": {
        "name": "Luis Romero Montero",
        "role": "Construction Director",
        "email": "l.montero@greening-group.com"
      },
      "cc": [
        {
          "name": "Audelio Zuniga",
          "role": "Construction Manager",
          "email": "a.zuniga@green-sol.us"
        },
        {
          "name": "Jose Romero",
          "role": "VP of Construction",
          "email": "ja.romero@green-sol.us"
        }
      ],
      "note": "Queries are received by the Project Manager, copied to the Construction Manager, and directed to the responsible discipline lead for response."
    },
    "responseRecipient": {
      "name": "James Burnett",
      "role": "Site Construction Manager",
      "organisation": "Heelstone",
      "email": "jburnett@heelstoneenergy.com"
    },
    "areas": [
      "Piles and foundations",
      "Tracker assembly",
      "Module installation",
      "LV and DC electrical",
      "MV collection",
      "Substation and inverters",
      "Quality and inspection",
      "Health and safety",
      "Environmental",
      "Programme and milestones",
      "Other"
    ],
    "refPrefix": "MQ",
    "responseWorkingDays": 5,
    "workingWeek": "Monday to Friday",
    "responseCutoff": "17:00 site time (Eastern)",
    "subjectConvention": "MURCH QUERY <ref> - <subject>",
    "responseTarget": "Response due within 5 working days (Monday to Friday) of receipt, by 17:00 site time",
    "openingNote": "Twenty-five queries logged to date; none were raised in the last three working days. On the shim-remediation item due today, 21 August, a response was issued on 17 August confirming that laboratory weld inspection is scheduled this week and that the repairs and weld painting follow — the item remains open until the engineer-of-record confirmation itself is issued. The control-building utility fiber and secondary power item of 18 August is in review with the engineering and utility-coordination leads, due 25 August. Two items are past their response date — the racking-sequencing item of 12 August and the disconnect-box orientation item of 13 August — and responses are in preparation. On the cable-records item, the approved insulation-resistance test reports were transmitted on 18 August, with the balance of records following.",
    "responseNote": "There is no sign-in and no account. Sending the query is all that is required — you keep a copy in your own Sent items and the reference is your record. Each query is added to this register at the next daily publication. Responses are issued by email; the register records the date a response was issued and the working days taken, and an item shows as answered once that response has been made. If an item here says open and you have already had an answer, tell us and it will be corrected.",
    "noticeNote": "This register supports day-to-day information flow. It does not replace or vary the formal correspondence provisions of the Agreement.",
    "items": [
      {
        "ref": "MQ-20260902-0706",
        "subject": "Consolidated field conformance item list, extending the Golden Row inspection to other areas of the project — remediation requested",
        "area": "Quality and inspection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-09-02",
        "dueISO": "2026-09-09",
        "status": "In review",
        "assignedTo": "QA/QC lead"
      },
      {
        "ref": "MQ-20260901-0718",
        "subject": "Operations site inspection findings — tracker slope tolerance and conformance of installed work with the issued drawings",
        "area": "Other",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-09-01",
        "dueISO": "2026-09-08",
        "status": "In review",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260818-0955",
        "subject": "Utility fiber and secondary power services to the control building — design, utility coordination and construction responsibility",
        "area": "Substation and inverters",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-18",
        "dueISO": "2026-08-25",
        "status": "In review",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260815-0700",
        "subject": "Engineer-of-record confirmation for the inverter-pile shim remediation, weld coating preparation, and pile leveling tolerance",
        "area": "Piles and foundations",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-15",
        "dueISO": "2026-08-21",
        "respondedISO": "2026-08-17",
        "status": "Open",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260813-0922",
        "subject": "Orientation of load-break disconnect boxes relative to the inverter stations, for O&M access",
        "area": "LV and DC electrical",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-13",
        "dueISO": "2026-08-20",
        "status": "In review",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260813-0733",
        "subject": "Installation-depth and marker-tape records for the MV and DC cable installations",
        "area": "Quality and inspection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-13",
        "dueISO": "2026-08-20",
        "respondedISO": "2026-08-18",
        "status": "Open",
        "assignedTo": "QA/QC lead"
      },
      {
        "ref": "MQ-20260812-1226",
        "subject": "Sequencing of racking installation on pile rows flagged by quality control, and readiness of rows presented for Owner inspection",
        "area": "Piles and foundations",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-12",
        "dueISO": "2026-08-19",
        "respondedISO": "2026-08-12",
        "status": "Open",
        "assignedTo": "QA/QC lead"
      },
      {
        "ref": "MQ-20260804-0936",
        "subject": "Containment for the fuel cell carried on a site vehicle",
        "area": "Environmental",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-04",
        "dueISO": "2026-08-11",
        "status": "Open",
        "assignedTo": "Environmental lead"
      },
      {
        "ref": "MQ-20260804-0732",
        "subject": "Inverter station foundations",
        "area": "Substation and inverters",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-04",
        "dueISO": "2026-08-11",
        "status": "Open",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260804-0728",
        "subject": "Medium-voltage trench crossings at site roads",
        "area": "MV collection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-04",
        "dueISO": "2026-08-11",
        "status": "In review",
        "assignedTo": "Electrical lead (MV)"
      },
      {
        "ref": "MQ-20260804-0726",
        "subject": "Erosion control devices",
        "area": "Environmental",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-04",
        "dueISO": "2026-08-11",
        "status": "Answered",
        "assignedTo": "Environmental lead",
        "respondedISO": "2026-08-05",
        "turnaroundDays": 1
      },
      {
        "ref": "MQ-20260804-0724",
        "subject": "Protective caps on conduit ends",
        "area": "LV and DC electrical",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-04",
        "dueISO": "2026-08-11",
        "status": "In review",
        "assignedTo": "Electrical lead"
      },
      {
        "ref": "MQ-20260803-0752",
        "subject": "Formal RFI process between the subcontractors and the EPC, and Owner participation in engineering and land RFIs",
        "area": "Programme and milestones",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-03",
        "dueISO": "2026-08-10",
        "status": "Open",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260803-0745",
        "subject": "Vehicle speeds on 48th Street on the approach to the substation",
        "area": "Health and safety",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-03",
        "dueISO": "2026-08-10",
        "respondedISO": "2026-08-03",
        "turnaroundDays": 0,
        "status": "Open",
        "assignedTo": "Health and safety lead"
      },
      {
        "ref": "MQ-20260803-0743",
        "subject": "Compaction of the substation grading platform",
        "area": "Substation and inverters",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-03",
        "dueISO": "2026-08-10",
        "respondedISO": "2026-08-03",
        "turnaroundDays": 0,
        "status": "Answered",
        "assignedTo": "Construction Manager"
      },
      {
        "ref": "MQ-20260803-0739",
        "subject": "Standing water in the excavations around the control-building piers, and the stabilisation measures planned ahead of freeze-thaw",
        "area": "Substation and inverters",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-03",
        "dueISO": "2026-08-10",
        "respondedISO": "2026-08-03",
        "turnaroundDays": 0,
        "status": "Open",
        "assignedTo": "Construction Manager"
      },
      {
        "ref": "MQ-20260803-0736",
        "subject": "Subcontractor working hours and rest days, and the fatigue management arrangements applied on site",
        "area": "Health and safety",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-03",
        "dueISO": "2026-08-10",
        "status": "Open",
        "assignedTo": "Health and safety lead"
      },
      {
        "ref": "MQ-20260801-0802",
        "subject": "Protective caps on module connectors to keep dust and debris out of unmated connections",
        "area": "Module installation",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-01",
        "dueISO": "2026-08-07",
        "respondedISO": "2026-08-03",
        "turnaroundDays": 1,
        "status": "Answered",
        "assignedTo": "QA/QC lead"
      },
      {
        "ref": "MQ-20260801-0752",
        "subject": "Supplier recommendation for treating vacated tap-screw holes in torque tubes, and confirmation of saddle-bracket fastener counts by slope",
        "area": "Tracker assembly",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-01",
        "dueISO": "2026-08-07",
        "status": "In review",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260801-0749",
        "subject": "Securing of tracker control unit charging modules and the timing of node controller connection for battery charging",
        "area": "Module installation",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-01",
        "dueISO": "2026-08-07",
        "respondedISO": "2026-08-03",
        "status": "Open",
        "assignedTo": "Construction Manager"
      },
      {
        "ref": "MQ-20260801-0736",
        "subject": "Surface water drainage within the Area A arrays and vegetation management to support ongoing installation and operation",
        "area": "Environmental",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-01",
        "dueISO": "2026-08-07",
        "respondedISO": "2026-08-03",
        "status": "Open",
        "assignedTo": "Environmental lead"
      },
      {
        "ref": "MQ-20260731-0843",
        "subject": "Verification that the installed PV and game fence meet the authority’s requirements, with drawings redlined where the installation differs",
        "area": "Quality and inspection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-31",
        "dueISO": "2026-08-07",
        "respondedISO": "2026-07-31",
        "status": "Open",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260731-0822",
        "subject": "Progressive red-line and as-built updating during construction, starting with the completed MV directional bores",
        "area": "Programme and milestones",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-31",
        "dueISO": "2026-08-07",
        "status": "Open",
        "assignedTo": "Engineering lead",
        "respondedISO": "2026-07-31"
      },
      {
        "ref": "MQ-20260731-0759",
        "subject": "Easement staking on the MV route east of the substation, and confirmation that cable is installed within that easement",
        "area": "MV collection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-31",
        "dueISO": "2026-08-07",
        "status": "Open",
        "assignedTo": "Construction Manager",
        "respondedISO": "2026-07-31"
      },
      {
        "ref": "MQ-20260730-1325",
        "subject": "Calibration status of the torque wrenches in use on tracker assembly, with certificates",
        "area": "Tracker assembly",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-30",
        "dueISO": "2026-08-06",
        "status": "Open",
        "assignedTo": "QA/QC lead"
      },
      {
        "ref": "MQ-20260730-1251",
        "subject": "Protective watertight caps on cable ends at the inverters",
        "area": "MV collection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-30",
        "dueISO": "2026-08-06",
        "status": "Open",
        "assignedTo": "Electrical lead (MV)"
      },
      {
        "ref": "MQ-20260730-0710",
        "subject": "Site office wireless network availability",
        "area": "Other",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-30",
        "dueISO": "2026-08-06",
        "status": "Answered",
        "assignedTo": "Construction Manager"
      }
    ]
  },
  "focus": [
    {
      "title": "Updated project schedule — fulfilment tracking",
      "level": "Priority",
      "note": "The schedule issued on 8 September is the reference for day-to-day tracking: circuit mechanical completion 2, 10, 17 and 24 October; ready-to-energize 14 October; substantial completion 30 November. The first-circuit LV connections closed on 22 September and its mechanical-completion tests follow the series connection and piercing work. The second-circuit LV works are due 24 September with feeder cable at 45,096 of 53,456 feet. Still open past their day: the eastern-circuit modules (18 September); the eastern-circuit easement cable pull; and the final pile area (15 September), where 108 positions remain."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "160,244 of 171,470 (93.5%) with 11,226 remaining. Wednesday 23 September produced 749 panels — 505 in the last area, where installation has now started in earnest, and 244 in the western area. On the updated schedule the last circuit is due 29 September."
    },
    {
      "title": "Tracker assembly and quality release",
      "level": "Priority",
      "note": "2,303 rows complete of 2,486 (92.6%), of which 886 carry Owner acceptance and 2,068 EPC approval; earned progress stands at 94.1%. Racking restarted in the last area on 23 September with 110 torque tubes placed and eight rows aligned; a row counts only when it is complete with purlins, so none of that work has yet reached the ledger."
    },
    {
      "title": "Medium-voltage terminations",
      "level": "Priority",
      "note": "Medium-voltage junction boxes are now reported circuit by circuit: eight of 23 complete (first circuit 2, second 2, eastern 3, last 1), three in progress and twelve pending; junction-box terminations have not started (0 of 150). Inverter-side terminations stand at 87 of 114 — first circuit 24 of 24, second 30 of 30, eastern 21 of 30, last 12 of 30 — for 87 of the 264 terminations in total. Trenches closed and compacted stand at 78 of 181, horizontal drilling is complete at 20 of 20 bores and cable ploughing at 42 of 46 segments."
    },
    {
      "title": "LV and DC installation",
      "level": "Priority",
      "note": "Cumulative cable stands at 139,463 feet (51.7%), past the halfway point, after 7,082 feet on 23 September, 7,200 on the 22nd and 15,106 on the 21st. The first circuit is complete on feeder cable, trunk cable, disconnect boxes and LV terminations. The second circuit stands at 45,096 of 53,456 feet of feeder cable with its trunk cable complete and harness at 1,053 of 1,292; the eastern circuit stands at 10,750 feet of feeder cable and 1,542 feet of trunk cable, with 4,310 feet of messenger wire tensioned on 23 September. Harness holds at 3,143 of 5,007 assemblies (62.8%) — Wednesday was a heat-shrink and termination day. Disconnect boxes stand at 418 of 419. On the 8 September schedule the LV works are due 24 September on the second circuit, 1 October on the eastern and 10 October on the last."
    },
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "31,231 of 31,352 (99.6%); the balance of 121 is concentrated in the last area (108 positions). Two disconnect-box piles and one control-unit pile were installed on 23 September under a time-and-materials instruction; these are electrical positions and do not move the tracker-pile ledger."
    },
    {
      "title": "Substation",
      "level": "Watch",
      "note": "70.1% overall — civil 97.7%, structural 80.9% and electrical 49.0% on the 22 September report; no percentage was filed on 23 September. Control-cable terminations and fibre-optic fusions remain the live electrical items."
    }
  ],
  "material": [
    {
      "item": "Foundation piles",
      "delivered": "31,352",
      "pct": 100,
      "note": "Delivery complete and reconciled; the earlier type-specific constraint is resolved and installation has resumed. Remaining installation is concentrated in the final area."
    },
    {
      "item": "PV modules",
      "delivered": "171,470",
      "pct": 100,
      "note": "DELIVERY COMPLETE — the full project quantity is on site with nothing outstanding; 11,975 modules remain in stock for the installation still to be done."
    },
    {
      "item": "Tracker structures",
      "delivered": "Complete",
      "pct": 100,
      "note": "The tracker bill of material was confirmed complete on July 24 with one exception: 16 torque tubes scheduled for a follow-on delivery, awaiting confirmation of site receipt."
    },
    {
      "item": "Inverters",
      "delivered": "23 stations set",
      "pct": 100,
      "note": "All 23 inverter stations are delivered, set, anchored and welded on their foundations. Medium-voltage terminations stand at 87 of 264, with the inverter-side terminations complete on the first two circuits; LV terminations follow the cable pull."
    },
    {
      "item": "Main power transformer",
      "delivered": "On site and set",
      "pct": 100,
      "note": "Set on its foundation July 24 inside the completed containment berm."
    },
    {
      "item": "Substation structural steel",
      "delivered": "Delivered and erected",
      "pct": 100,
      "note": "Delivered and erected: the structural steel arrived 15 August and erection completed 25 August, with yard equipment installation following immediately behind it. This item no longer controls the substation programme; the electrical works do."
    }
  ],
  "photos": [
    {
      "src": "assets/photo-78.jpg",
      "date": "September 21, 2026",
      "title": "Substation — medium-voltage bus cable installation",
      "note": "The 34.5 kV bus structures on 21 September with insulators and disconnects mounted and the medium-voltage bus cable being brought up to them. Aerial work resumed after the rain stop of 19 September. The substation composite stands at 66.3%."
    },
    {
      "src": "assets/photo-75.jpg",
      "date": "September 19, 2026",
      "title": "Substation — medium-voltage bus assembly",
      "note": "The 34.5 kV bus structures with boom lifts staged for the bus assembly on 19 September. Aerial work paused that morning while the ground dried after rain and resumes as conditions allow. The substation composite stands at 66.3%."
    },
    {
      "src": "assets/photo-76.jpg",
      "date": "September 19, 2026",
      "title": "Reference row — harness support ring",
      "note": "A support ring fitted every four modules to carry the string harness clear of the module frame, installed on the reference row on 19 September for review before it is extended across the array."
    },
    {
      "src": "assets/photo-77.jpg",
      "date": "September 19, 2026",
      "title": "Reference row — harness ring detail",
      "note": "The same detail seen from the torque-tube side: the harness is held by the ring clear of the frame edge."
    },
    {
      "src": "assets/photo-73.jpg",
      "date": "September 15, 2026",
      "title": "Substation — insulators, bus and hardware received",
      "note": "Station-post insulators, insulator units and the aluminium bus tube with its mounting fittings, staged on the substation laydown on 15 September. This material supports the substation bus and structural installation, which stands at 67.6% on the latest substation cut."
    },
    {
      "src": "assets/photo-74.jpg",
      "date": "September 15, 2026",
      "title": "Substation laydown — bus tube bundle and cable reels",
      "note": "The same 15 September delivery: a strapped bundle of aluminium tube, cable reels on pallets and reel stands, and connector and hardware boxes on the substation laydown, received for the bus and control-cable work (substation electrical 42.4%)."
    },
    {
      "src": "assets/photo-72.jpg",
      "date": "September 10, 2026",
      "title": "Tracker row verification in Area E with a digital angle gauge",
      "note": "A digital angle gauge on the torque tube of an Area E row. Each row is checked against its specified tilt before it is signed off."
    },
    {
      "src": "assets/photo-71.jpg",
      "date": "September 10, 2026",
      "title": "Tracker row alignment work in Area E",
      "note": "A crew on an Area E row on 10 September: a string line pulled along the row for alignment while the bracket at the pile is set, ahead of the tilt check and sign-off."
    },
    {
      "src": "assets/photo-64.jpg",
      "date": "September 7, 2026",
      "title": "First inverter station closed out and ready for medium-voltage termination",
      "note": "The inverter station in the eastern area photographed on 7 September with its trench closed, backfilled and compacted, the direct-current combiner compartments open on their bus work and the cable risers dressed up into the station. This is the first station on the project to reach a fully closed, termination-ready condition. Terminations are the final electrical operation before a block can be energised, so this is the point at which the station passes from civil and cabling work to connection work; 45 of the 264 terminations in scope are complete."
    },
    {
      "src": "assets/photo-65.jpg",
      "date": "September 7, 2026",
      "title": "Closed and compacted trench run from the station to the array",
      "note": "The backfilled trench line running from beneath the inverter station out to the tracker rows, compacted over its full length, with spare conduit staged alongside. Closing a trench converts an open excavation from a safety and environmental exposure into a completed interface, and it is the step that has lagged through the period: trenches closed and compacted advanced from 26 to 36 of 181, with 84 open."
    },
    {
      "src": "assets/photo-66.jpg",
      "date": "September 7, 2026",
      "title": "Completed inverter block in the eastern area",
      "note": "The wider view of the same station on 7 September, standing on its pile foundations with the installed array running away on both sides. Carried as the reference condition for a completed inverter block ahead of terminations, and as the sequence the remaining stations follow."
    },
    {
      "src": "assets/photo-62.jpg",
      "date": "August 27, 2026",
      "title": "Pile driving resumed in the eastern zone",
      "note": "A newly driven line of tracker foundation piles standing on 27 August in the eastern zone, with the piling machine at the head of the row and the adjacent row already set. Pile installation stands at 29,895 of 31,352, and this area carries clear access, which is why the remaining production has been concentrated here."
    },
    {
      "src": "assets/photo-63.jpg",
      "date": "August 27, 2026",
      "title": "Medium-voltage terminations started at the first inverter station",
      "note": "The first medium-voltage termination being made up at the inverter station in Area A on 27 August, with the incoming cables dressed into the station and the termination compartment open. Terminations are the final electrical operation before an inverter block can be energised, so this marks the transition of the medium-voltage front from trenching and cable installation into connection work."
    },
    {
      "src": "assets/photo-55.jpg",
      "date": "August 21, 2026",
      "title": "34.5 kV equipment stands erected at the substation",
      "note": "The 34.5 kV switch stand and the adjacent equipment support standing on their completed piers on 21 August, with the main power transformer behind. Structural erection is the discipline that has held the substation composite back all summer; it moved from 18.4% to 24.1% on the 21 August cut, the first rise driven by steel rather than by equipment receipt."
    },
    {
      "src": "assets/photo-56.jpg",
      "date": "August 21, 2026",
      "title": "34.5 kV breaker bay — column line erected, first cross-frame assembled",
      "note": "Four galvanized columns standing on their anchor-bolted piers along the 34.5 kV breaker line on 21 August, with the first cross-braced frame assembled alongside. Erection began at the transformer end and is working outward; this is the bay that receives the high-voltage breaker equipment delivered on 18 August."
    },
    {
      "src": "assets/photo-57.jpg",
      "date": "August 20, 2026",
      "title": "69 kV three-phase bus support erected",
      "note": "The 69 kV three-phase bus support standing on its pier inside the substation fence on 20 August, with a second frame set behind it. The 69 kV side carries the bus to the utility interconnection point, so this is the first structure on the critical path to energization."
    },
    {
      "src": "assets/photo-59.jpg",
      "date": "August 20, 2026",
      "title": "Substation main cable trench — precast pull boxes set",
      "note": "The main cable trench open on 20 August with precast pull boxes set along its length and the drainage pipe staged for installation, running past the control building. This is the run the precast trench units received on 15 August were procured for; substation civil advanced from 86.3% to 89.6% on the 21 August cut."
    },
    {
      "src": "assets/photo-53.jpg",
      "date": "August 18, 2026",
      "title": "High-voltage breaker equipment received at the substation",
      "note": "Delivery of high-voltage breaker equipment at the substation on 18 August — three poles with bushings on their support frame and the mechanism cabinet, photographed on arrival. Breaker availability has been a controlling item for the energization path, so this receipt is a material step; the remaining substation electrical equipment is committed for delivery by 30 August."
    },
    {
      "src": "assets/photo-54.jpg",
      "date": "August 15, 2026",
      "title": "Precast cable trench delivered — substation",
      "note": "Precast cable-trench units and cover slabs staged inside the substation fence beside the control building, received 15 August. These form the feeder cable-trench runs and arrive ahead of the structural steel, allowing trench installation to proceed as erection begins."
    },
    {
      "src": "assets/photo-52.jpg",
      "date": "August 10, 2026",
      "title": "SET Structure.",
      "note": "Substation structural steel fabricated and hot-dip galvanized at the fabrication facility: box sections, cross-braced base plates and the 34.5 kV members, staged for loading. The consignment departs Monday 10 August for delivery to site on Saturday 15 August. Structural steel is the binding item on the substation, so this delivery is what allows erection to begin."
    },
    {
      "src": "assets/photo-46.jpg",
      "date": "August 3, 2026",
      "title": "Aerial view of the facility — module blocks and racking fronts",
      "note": "High-altitude drone view from the August 3 site survey: fully moduled blocks to the north, erected tracker rows advancing across the southern areas, with the stormwater basins and perimeter road in frame. Pile, racking and module fronts are each visible at their respective stages."
    },
    {
      "src": "assets/photo-49.jpg",
      "date": "August 3, 2026",
      "title": "Final inverter stations set — 23 of 23 in place",
      "note": "One of the last inverter stations being lowered onto its welded pile foundation on August 3, the day the full complement of 23 stations was completed. All stations now await low-voltage and medium-voltage terminations."
    },
    {
      "src": "assets/photo-47.jpg",
      "date": "August 3, 2026",
      "title": "Module block completed edge to edge",
      "note": "A block fully fitted with modules, photographed during the August 3 drone survey, with material staged along the access road for the adjacent rows. The module front follows quality-released tracker rows toward the September 6 module milestone."
    },
    {
      "src": "assets/photo-50.jpg",
      "date": "August 3, 2026",
      "title": "Substation — transformer on its foundation, pier work continuing",
      "note": "Close aerial of the substation pad on August 3: the main power transformer on its completed foundation (set July 24), drilling in progress on the remaining pier group, anchor-bolt assemblies staged, and the control building in place. Structural steel is scheduled to arrive August 15."
    },
    {
      "src": "assets/photo-51.jpg",
      "date": "August 3, 2026",
      "title": "Pile installation advancing on the newly opened area",
      "note": "Fresh rows of foundation piles behind the installation equipment on the recently opened workfront, served by the completed internal road network (roads finished August 4). Pile installation stood at 29,308 of 31,352 (93.5%) when the photograph was taken on 3 August; the current basis is 29,895 (95.4%)."
    },
    {
      "src": "assets/photo-45.jpg",
      "date": "July 29, 2026",
      "title": "Inverter station lowered onto its welded pile foundation",
      "note": "A prefabricated inverter station being craned onto its steel pile foundation, with completed tracker rows and the delivery vehicle behind it. Protective wrapping stays in place until the low-voltage and medium-voltage terminations are made."
    },
    {
      "src": "assets/photo-43.jpg",
      "date": "July 28, 2026",
      "title": "Inverter stations set on their foundations in Area A",
      "note": "Inverter station 02 landed on its pile foundation between completed module rows. All Area A stations were set on Tuesday morning, with a further station set in Area C the same day. Protective covers remain in place until LV and MV terminations are made."
    },
    {
      "src": "assets/photo-41.jpg",
      "date": "July 24, 2026",
      "title": "Main power transformer set on its foundation",
      "note": "The main power transformer craned onto its completed foundation inside the containment berm at the substation. This is the principal long-lead item on the energization path."
    },
    {
      "src": "assets/photo-42.jpg",
      "date": "July 24, 2026",
      "title": "Substation pier poured — 6 of 17 complete",
      "note": "Pier with concrete poured and anchor-bolt template set. The pier front advanced from 2 of 17 on July 22 to 6 of 17 on July 24."
    },
    {
      "src": "assets/photo-39.jpg",
      "date": "July 21, 2026",
      "title": "Area D released for slab demolition",
      "note": "The temporary office compound has been relocated to the new laydown area. Area D is released, opening the path to the remaining pile workfront."
    },
    {
      "src": "assets/photo-37.jpg",
      "date": "July 14, 2026",
      "title": "Underground electrical trench alongside erected trackers",
      "note": "Cable trench open beside completed tracker rows, with the access road built out for material distribution — the sequence that feeds the LV and DC cable installation."
    }
  ],
  "civilOverrides": {
    "Perimeter fence": {
      "done": 95,
      "status": "On track",
      "note": "Areas A to F complete. The Area G remainder and the gates are outstanding, and completion is held by the outstanding drain-commissioning signature rather than by production.",
      "why": "source note is fully redacted (carries the fencing subcontractor name)"
    },
    "Internal access roads": {
      "done": 100,
      "status": "Complete",
      "note": "Complete on 4 August 2026, four days after the end-July target. The road network now supports material distribution to every area, including the pile workfront opened on 5 August.",
      "why": "source note quotes an internal week-number baseline"
    },
    "Inverter station foundations": {
      "done": 100,
      "status": "Complete",
      "note": "Complete on 24 July 2026. All 23 station foundations are finished and all 23 stations are set, anchored and welded on them. Welding procedure approved 21 July.",
      "why": "source note names the installing subcontractor"
    },
    "Substation (overall)": {
      "note": "Overall substation progress 38.9% on the 24 August tracker — civil 89.6%, structural 36.6%, electrical 13.8%, with 61 of 187 scheduled activities complete. Structural advanced 12.5 points in a single cut, the largest single-cut movement recorded by any element of the works, following the introduction of an extended-hours shift on 21 August and Saturday working; the circuit breaker is set on its foundation. Piers are now complete at 17 of 17, the last poured on 5 August, so every substation foundation is finished: control building, containment berm, main power transformer foundation and all piers. Grounding excavation around the perimeter started the same day. The overall percentage still reflects the 31 July cut and understates the civil position; an updated tracker cut is required. The structural percentage is unchanged and is governed by steel fabrication and delivery.",
      "why": "the internal note carries pier-front detail and subcontractor names; the published wording states the substation position"
    },
    "Bulk earthworks — cut and fill": {
      "done": 100,
      "status": "Complete",
      "note": "Complete on 17 July 2026 across the whole project. Confirmed again on the 5 August civil control sheet at 100%, with the full quantity executed.",
      "why": "source note was fully redacted by the subcontractor-name rule"
    }
  },
  "workforce": {
    "basis": "Shift basis 10 hours per person per day, Monday to Saturday. Headcount is taken from the site board and the EHS headcount record, current to August 21, 2026. Days on which the site was fully stopped are excluded from the manhours.",
    "tiles": [
      {
        "label": "Personnel on site",
        "value": "202",
        "note": "Latest site-board headcount (Sep 17). Field labor plus management, quality and HSE."
      },
      {
        "label": "Peak headcount",
        "value": "258",
        "note": "Highest headcount on site to date (August 11)."
      },
      {
        "label": "Average headcount",
        "value": "201",
        "note": "Mean headcount across the construction period to date."
      },
      {
        "label": "Manhours to date",
        "value": "0",
        "note": "Total manhours worked from the start of construction on April 1 through September 24, at 10 h/day, Monday to Saturday."
      },
      {
        "label": "Recordable incident rate",
        "value": "NaN",
        "note": "Recordable cases per 200,000 manhours. Zero recordable incidents across all hours worked."
      }
    ],
    "headcount": [
      {
        "d": "Apr 1",
        "v": 15
      },
      {
        "d": "Apr 15",
        "v": 25
      },
      {
        "d": "May 1",
        "v": 35
      },
      {
        "d": "May 6",
        "v": 45
      },
      {
        "d": "May 15",
        "v": 60
      },
      {
        "d": "Jun 1",
        "v": 85
      },
      {
        "d": "Jun 10",
        "v": 110
      },
      {
        "d": "Jun 17",
        "v": 136
      },
      {
        "d": "Jun 25",
        "v": 149
      },
      {
        "d": "Jun 26",
        "v": 134
      },
      {
        "d": "Jun 29",
        "v": 146
      },
      {
        "d": "Jun 30",
        "v": 148
      },
      {
        "d": "Jul 7",
        "v": 170
      },
      {
        "d": "Jul 9",
        "v": 191
      },
      {
        "d": "Jul 13",
        "v": 191
      },
      {
        "d": "Jul 14",
        "v": 202
      },
      {
        "d": "Jul 15",
        "v": 209
      },
      {
        "d": "Jul 16",
        "v": 198
      },
      {
        "d": "Jul 20",
        "v": 192
      },
      {
        "d": "Jul 29",
        "v": 248
      },
      {
        "d": "Jul 30",
        "v": 253
      },
      {
        "d": "Aug 3",
        "v": 243
      },
      {
        "d": "Aug 4",
        "v": 247
      },
      {
        "d": "Aug 5",
        "v": 248
      },
      {
        "d": "Aug 6",
        "v": 238
      },
      {
        "d": "Aug 7",
        "v": 238
      },
      {
        "d": "Aug 8",
        "v": 130
      },
      {
        "d": "Aug 10",
        "v": 244
      },
      {
        "d": "Aug 11",
        "v": 258
      },
      {
        "d": "Aug 12",
        "v": 257
      },
      {
        "d": "Aug 13",
        "v": 247
      },
      {
        "d": "Aug 14",
        "v": 225
      },
      {
        "d": "Aug 17",
        "v": 217
      },
      {
        "d": "Aug 18",
        "v": 215
      },
      {
        "d": "Aug 20",
        "v": 239
      },
      {
        "d": "Aug 21",
        "v": 228
      },
      {
        "d": "Aug 24",
        "v": 218
      },
      {
        "d": "Aug 25",
        "v": 239
      },
      {
        "d": "Aug 27",
        "v": 241
      },
      {
        "d": "Aug 28",
        "v": 228
      },
      {
        "d": "Aug 31",
        "v": 230
      },
      {
        "d": "Sep 2",
        "v": 203
      },
      {
        "d": "Sep 3",
        "v": 206
      },
      {
        "d": "Sep 4",
        "v": 191
      },
      {
        "d": "Sep 5",
        "v": 146
      },
      {
        "d": "Sep 7",
        "v": 88
      },
      {
        "d": "Sep 8",
        "v": 214
      },
      {
        "d": "Sep 9",
        "v": 219
      },
      {
        "d": "Sep 10",
        "v": 198
      },
      {
        "d": "Sep 11",
        "v": 137
      },
      {
        "d": "Sep 12",
        "v": 40
      },
      {
        "d": "Sep 15",
        "v": 216
      },
      {
        "d": "Sep 17",
        "v": 202
      }
    ],
    "manhours": [
      {
        "d": "Sep 24",
        "c": 0
      }
    ]
  },
  "electricalByCircuit": {
    "asOf": "September 24, 2026",
    "basis": "Executed through September 23, 2026. Harness in assemblies; cable in feet; disconnect boxes and medium-voltage junction boxes in units; terminations in count. Production not yet placed on a circuit is carried on its own line and included in the project totals.",
    "rows": [
      {
        "circuit": "Circuit 11A",
        "harness": {
          "done": 1168,
          "scope": 1117
        },
        "homerun": {
          "done": 60675,
          "scope": 60075
        },
        "trunk": {
          "done": 9199,
          "scope": 8723
        },
        "boxes": {
          "done": 92,
          "scope": 92
        },
        "mvJb": {
          "done": 2,
          "scope": 5
        },
        "mvTerm": {
          "done": 24,
          "scope": 24
        },
        "lvInv": {
          "done": 186,
          "scope": 186
        },
        "lvBox": {
          "done": 372,
          "scope": 372
        }
      },
      {
        "circuit": "Circuit 11B",
        "harness": {
          "done": 1053,
          "scope": 1292
        },
        "homerun": {
          "done": 45096,
          "scope": 53456
        },
        "trunk": {
          "done": 11637,
          "scope": 10409
        },
        "boxes": {
          "done": 110,
          "scope": 110
        },
        "mvJb": {
          "done": 2,
          "scope": 6
        },
        "mvTerm": {
          "done": 30,
          "scope": 30
        },
        "lvInv": {
          "done": 8,
          "scope": 220
        },
        "lvBox": {
          "done": 0,
          "scope": 440
        }
      },
      {
        "circuit": "Circuit 12A",
        "harness": {
          "done": 414,
          "scope": 1258
        },
        "homerun": {
          "done": 10750,
          "scope": 65846
        },
        "trunk": {
          "done": 1542,
          "scope": 10274
        },
        "boxes": {
          "done": 110,
          "scope": 110
        },
        "mvJb": {
          "done": 3,
          "scope": 6
        },
        "mvTerm": {
          "done": 21,
          "scope": 30
        },
        "lvInv": {
          "done": 0,
          "scope": 220
        },
        "lvBox": {
          "done": 0,
          "scope": 440
        }
      },
      {
        "circuit": "Circuit 12B",
        "harness": {
          "done": 468,
          "scope": 1340
        },
        "homerun": {
          "done": 0,
          "scope": 55488
        },
        "trunk": {
          "done": 0,
          "scope": 10907
        },
        "boxes": {
          "done": 106,
          "scope": 107
        },
        "mvJb": {
          "done": 1,
          "scope": 6
        },
        "mvTerm": {
          "done": 12,
          "scope": 30
        },
        "lvInv": {
          "done": 0,
          "scope": 212
        },
        "lvBox": {
          "done": 0,
          "scope": 424
        }
      }
    ],
    "unallocated": {
      "harness": 40,
      "homerun": 0,
      "trunk": 564,
      "boxes": 0,
      "mvJb": 0,
      "mvTerm": 0
    },
    "project": {
      "harness": {
        "done": 3143,
        "scope": 5007
      },
      "homerun": {
        "done": 116521,
        "scope": 229435
      },
      "trunk": {
        "done": 22942,
        "scope": 40313
      },
      "boxes": {
        "done": 418,
        "scope": 419
      },
      "mvJb": {
        "done": 8,
        "scope": 23
      },
      "mvTerm": {
        "done": 87,
        "scope": 114
      },
      "mvTermAll": {
        "done": 87,
        "scope": 264
      },
      "lvInv": {
        "done": 194,
        "scope": 838
      },
      "lvBox": {
        "done": 372,
        "scope": 1676
      }
    }
  }
};
