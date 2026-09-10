'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated September 10, 2026 — field production executed through Wednesday 9 September; control cuts of 8 September by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "September 10, 2026 — field production executed through Wednesday 9 September; control cuts of 8 September",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 86.3,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, electrical 14%, civil 10%. The electrical component covers all four electrical fronts — LV and DC cable, MV collection, inverter stations and the substation — combined into one total. Civil excludes the substation so it is not counted twice.",
    "statement": "This report is issued on Thursday 10 September with field production executed through Wednesday 9 September. The day was led by the electrical front, which recorded its strongest day of the project: 297 harness assemblies across three crews, taking the harness ledger to 1,156 assemblies plus 192 installed by the EPC's own crew and recorded separately, and the first junction-box terminations on the first circuit (12). No cable footage was reported on the day; cable stands at 75,280 feet (27.9%). On the first circuit the trenches at the second and third inverter stations are now closed, following the first station on Tuesday. Tracker assembly completed 41 rows in the north-east zone; these are being reconciled with the per-area completion record and the published figure is held at 2,311 of 2,486 (93.0%) until that closes, with 35 rows in progress in the last area. No modules were installed on 9 September, the first zero day since the end of August, because the eastern installation crew was assigned to racking in the last area; the cumulative stands at 152,847 of 171,470 (89.1%) with 18,623 remaining. No piles were driven; the cumulative is 30,627 of 31,352 (97.7%). Medium-voltage terminations remain at 45 of 264, unchanged since 3 September, while trenches closed and compacted advanced from 38 to 44 of 181. The substation composite stands at 61.4% with 37 days to the energization date. Site strength was 219 on 9 September and the works completed 329 days without a lost-time accident. Overall completion stands at 86.3%.",
    "note": null
  },
  "gates": [
    {
      "key": "piles",
      "name": "Foundation piles",
      "installed": 30627,
      "total": 31352,
      "unit": "piles",
      "forecast": "Aug 7, 2026 — passed, revised date pending",
      "status": "Date passed"
    },
    {
      "key": "trackers",
      "name": "Tracker rows (incl. purlins)",
      "installed": 2311,
      "total": 2486,
      "unit": "rows",
      "earned": 2338,
      "earnedPct": 94,
      "earnedLabel": "94% earned incl. rows in progress (2,338 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Date passed"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 152847,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Date passed"
    },
    {
      "key": "electrical",
      "name": "Electrical — total",
      "pctOnly": true,
      "gatePct": 39.1,
      "earnedPct": 46.2,
      "unit": "%",
      "earnedLabel": "46.2% earned incl. work in progress",
      "mix": "LV / DC installation 45% · MV collection 22% · Inverter stations 18% · Substation (SET) 15%",
      "forecast": "Oct 16, 2026",
      "status": "Below rate"
    }
  ],
  "earnedProgress": {
    "asOf": "Sep 10, 2026 — executed through Wednesday Sep 9",
    "scopes": [
      {
        "scope": "Tracker rows",
        "unit": "rows",
        "gate": "2,311 / 2,486",
        "gatePct": 93,
        "inProgress": "Partial-row credit suspended — open rows reported by ladder step, not credited",
        "earnedPct": 94,
        "detail": "Partial-row credit resumed on 7 August after two consecutive days of step-level reporting from the assembly crews. Earned credits open rows at their verified ladder step; the completion gate continues to count finished rows only and no date moves on earned progress."
      },
      {
        "scope": "Electrical — all fronts",
        "unit": "%",
        "gate": "39.1% of scope",
        "gatePct": 39.1,
        "inProgress": "MV 78.5% · 23 of 23 inverter stations set · 258 of 419 boxes · 75,280 lf of cable",
        "earnedPct": 46.2,
        "detail": "LV and DC cable, MV collection, inverter stations and the substation combined. All 23 stations are set and welded; none is terminated, and termination is the measure that counts toward mechanical completion."
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
      "note": "Contract date not achievable. First-circuit tests open 18 September; three early plan dates (first-circuit feeder cable and supports, eastern-circuit trackers, second-circuit easement pull) have passed with work open; the first-circuit trench at the first station was backfilled 8 September.",
      "circuits": "11A Oct 2 · 11B Oct 10 · 12A Oct 17 · 12B Oct 24"
    },
    {
      "name": "Provisional Interconnection",
      "contract": "Oct 16, 2026",
      "forecast": "Nov 5, 2026 (last circuit) · Ready to Energize Oct 14",
      "status": "At risk",
      "note": "Gated by the substation (61.4%, 11.1 points behind plan; equipment installation closes 18 September) and by medium-voltage terminations (45 of 264, unchanged since 3 September).",
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
        "c": 16194
      },
      {
        "d": "Jun 19",
        "v": 79,
        "c": 16273
      },
      {
        "d": "Jun 22",
        "v": 251,
        "c": 16524
      },
      {
        "d": "Jun 23",
        "v": 101,
        "c": 16625
      },
      {
        "d": "Jun 25",
        "v": 370,
        "c": 16995
      },
      {
        "d": "Jun 26",
        "v": 340,
        "c": 17335
      },
      {
        "d": "Jun 29",
        "v": 261,
        "c": 17596
      },
      {
        "d": "Jun 30",
        "v": 234,
        "c": 17830
      },
      {
        "d": "Jul 1",
        "v": 252,
        "c": 18082
      },
      {
        "d": "Jul 2",
        "v": 274,
        "c": 18356
      },
      {
        "d": "Jul 3",
        "v": 134,
        "c": 18490
      },
      {
        "d": "Jul 6",
        "v": 307,
        "c": 18797
      },
      {
        "d": "Jul 7",
        "v": 399,
        "c": 19196
      },
      {
        "d": "Jul 8",
        "v": 646,
        "c": 19842
      },
      {
        "d": "Jul 9",
        "v": 669,
        "c": 20511
      },
      {
        "d": "Jul 10",
        "v": 680,
        "c": 21191
      },
      {
        "d": "Jul 11",
        "v": 680,
        "c": 21871
      },
      {
        "d": "Jul 13",
        "v": 608,
        "c": 22479
      },
      {
        "d": "Jul 14",
        "v": 695,
        "c": 23174
      },
      {
        "d": "Jul 15",
        "v": 481,
        "c": 23655
      },
      {
        "d": "Jul 16",
        "v": 504,
        "c": 24159
      },
      {
        "d": "Jul 17",
        "v": 472,
        "c": 24631
      },
      {
        "d": "Jul 18",
        "v": 608,
        "c": 25239
      },
      {
        "d": "Jul 20",
        "v": 622,
        "c": 25861
      },
      {
        "d": "Jul 21",
        "v": 253,
        "c": 26114
      },
      {
        "d": "Jul 22",
        "v": 202,
        "c": 26316
      },
      {
        "d": "Jul 23",
        "v": 284,
        "c": 26600
      },
      {
        "d": "Jul 24",
        "v": 364,
        "c": 26964
      },
      {
        "d": "Jul 25",
        "v": 236,
        "c": 27200
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 27200
      },
      {
        "d": "Jul 28",
        "v": 439,
        "c": 27639
      },
      {
        "d": "Jul 29",
        "v": 539,
        "c": 28178
      },
      {
        "d": "Jul 30",
        "v": 627,
        "c": 28805
      },
      {
        "d": "Jul 31",
        "v": 337,
        "c": 29142
      },
      {
        "d": "Aug 1",
        "v": 0,
        "c": 29142
      },
      {
        "d": "Aug 3",
        "v": 205,
        "c": 29347
      },
      {
        "d": "Aug 4",
        "v": 110,
        "c": 29457
      },
      {
        "d": "Aug 5",
        "v": 100,
        "c": 29557
      },
      {
        "d": "Aug 6",
        "v": 149,
        "c": 29706
      },
      {
        "d": "Aug 7",
        "v": 63,
        "c": 29769
      },
      {
        "d": "Aug 8",
        "v": 215,
        "c": 29984
      },
      {
        "d": "Aug 10",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 11",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 12",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 13",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 14",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 15",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 17",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 18",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 19",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 20",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 21",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 22",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 24",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 25",
        "v": 0,
        "c": 29984
      },
      {
        "d": "Aug 26",
        "v": 211,
        "c": 30195
      },
      {
        "d": "Aug 27",
        "v": 98,
        "c": 30293
      },
      {
        "d": "Aug 28",
        "v": 233,
        "c": 30526
      },
      {
        "d": "Aug 29",
        "v": 0,
        "c": 30526
      },
      {
        "d": "Aug 31",
        "v": 31,
        "c": 30557
      },
      {
        "d": "Sep 1",
        "v": 0,
        "c": 30557
      },
      {
        "d": "Sep 2",
        "v": 70,
        "c": 30627
      },
      {
        "d": "Sep 3",
        "v": 0,
        "c": 30627
      },
      {
        "d": "Sep 4",
        "v": 0,
        "c": 30627
      },
      {
        "d": "Sep 5",
        "v": 0,
        "c": 30627
      }
    ],
    "trackers": [
      {
        "d": "Jun 17",
        "v": 15,
        "c": 165
      },
      {
        "d": "Jun 18",
        "v": 35,
        "c": 200
      },
      {
        "d": "Jun 19",
        "v": 26,
        "c": 226
      },
      {
        "d": "Jun 20",
        "v": 31,
        "c": 257
      },
      {
        "d": "Jun 21",
        "v": 0,
        "c": 257
      },
      {
        "d": "Jun 22",
        "v": 48,
        "c": 305
      },
      {
        "d": "Jun 23",
        "v": 31,
        "c": 336
      },
      {
        "d": "Jun 24",
        "v": 0,
        "c": 336
      },
      {
        "d": "Jun 25",
        "v": 57,
        "c": 393
      },
      {
        "d": "Jun 26",
        "v": 26,
        "c": 419
      },
      {
        "d": "Jun 29",
        "v": 29,
        "c": 448
      },
      {
        "d": "Jun 30",
        "v": 30,
        "c": 478
      },
      {
        "d": "Jul 1",
        "v": 51,
        "c": 529
      },
      {
        "d": "Jul 7",
        "v": 29,
        "c": 558
      },
      {
        "d": "Jul 8",
        "v": 0,
        "c": 558
      },
      {
        "d": "Jul 9",
        "v": 0,
        "c": 558
      },
      {
        "d": "Jul 10",
        "v": 0,
        "c": 558
      },
      {
        "d": "Jul 13",
        "v": 29,
        "c": 587
      },
      {
        "d": "Jul 14",
        "v": 49,
        "c": 636
      },
      {
        "d": "Jul 15",
        "v": 35,
        "c": 671
      },
      {
        "d": "Jul 16",
        "v": 35,
        "c": 706
      },
      {
        "d": "Jul 17",
        "v": 25,
        "c": 731
      },
      {
        "d": "Jul 18",
        "v": 0,
        "c": 731
      },
      {
        "d": "Jul 20",
        "v": 21,
        "c": 752
      },
      {
        "d": "Jul 21",
        "v": 25,
        "c": 777
      },
      {
        "d": "Jul 22",
        "v": 39,
        "c": 816
      },
      {
        "d": "Jul 23",
        "v": 28,
        "c": 844
      },
      {
        "d": "Jul 24",
        "v": 30,
        "c": 874
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 874
      },
      {
        "d": "Jul 28",
        "v": 30,
        "c": 904
      },
      {
        "d": "Jul 29",
        "v": 35,
        "c": 939
      },
      {
        "d": "Jul 30",
        "v": 30,
        "c": 969
      },
      {
        "d": "Jul 31",
        "v": 40,
        "c": 1009
      },
      {
        "d": "Aug 1",
        "v": 40,
        "c": 1049
      },
      {
        "d": "Aug 3",
        "v": 86,
        "c": 1135
      },
      {
        "d": "Aug 4",
        "v": 60,
        "c": 1195
      },
      {
        "d": "Aug 5",
        "v": 33,
        "c": 1228
      },
      {
        "d": "Aug 6",
        "v": 29,
        "c": 1257
      },
      {
        "d": "Aug 7",
        "v": 42,
        "c": 1299
      },
      {
        "d": "Aug 8",
        "v": 0,
        "c": 1299
      },
      {
        "d": "Aug 10",
        "v": 78,
        "c": 1377
      },
      {
        "d": "Aug 11",
        "v": 60,
        "c": 1437
      },
      {
        "d": "Aug 12",
        "v": 89,
        "c": 1526
      },
      {
        "d": "Aug 13",
        "v": 97,
        "c": 1623
      },
      {
        "d": "Aug 14",
        "v": 65,
        "c": 1688
      },
      {
        "d": "Aug 15",
        "v": 0,
        "c": 1688
      },
      {
        "d": "Aug 17",
        "v": 54,
        "c": 1742
      },
      {
        "d": "Aug 18",
        "v": 62,
        "c": 1804
      },
      {
        "d": "Aug 19",
        "v": 55,
        "c": 1859
      },
      {
        "d": "Aug 20",
        "v": 60,
        "c": 1919
      },
      {
        "d": "Aug 21",
        "v": 46,
        "c": 1965
      },
      {
        "d": "Aug 22",
        "v": 0,
        "c": 1965
      },
      {
        "d": "Aug 24",
        "v": 60,
        "c": 2025
      },
      {
        "d": "Aug 25",
        "v": 67,
        "c": 2092
      },
      {
        "d": "Aug 26",
        "v": 0,
        "c": 2092
      },
      {
        "d": "Aug 27",
        "v": 0,
        "c": 2092
      },
      {
        "d": "Aug 28",
        "v": 65,
        "c": 2157
      },
      {
        "d": "Aug 29",
        "v": 0,
        "c": 2157
      },
      {
        "d": "Aug 31",
        "v": 65,
        "c": 2222
      },
      {
        "d": "Sep 1",
        "v": 22,
        "c": 2244
      },
      {
        "d": "Sep 2",
        "v": 22,
        "c": 2266
      },
      {
        "d": "Sep 3",
        "v": 30,
        "c": 2296
      },
      {
        "d": "Sep 4",
        "v": 15,
        "c": 2311
      },
      {
        "d": "Sep 5",
        "v": 0,
        "c": 2311
      }
    ],
    "modules": [
      {
        "d": "Jul 3",
        "v": 234,
        "c": 8322
      },
      {
        "d": "Jul 6",
        "v": 780,
        "c": 9102
      },
      {
        "d": "Jul 7",
        "v": 156,
        "c": 9258
      },
      {
        "d": "Jul 8",
        "v": 936,
        "c": 10194
      },
      {
        "d": "Jul 9",
        "v": 1308,
        "c": 11502
      },
      {
        "d": "Jul 10",
        "v": 1802,
        "c": 13304
      },
      {
        "d": "Jul 11",
        "v": 517,
        "c": 13821
      },
      {
        "d": "Jul 13",
        "v": 2922,
        "c": 16743
      },
      {
        "d": "Jul 14",
        "v": 2335,
        "c": 19078
      },
      {
        "d": "Jul 15",
        "v": 780,
        "c": 19858
      },
      {
        "d": "Jul 16",
        "v": 858,
        "c": 20716
      },
      {
        "d": "Jul 17",
        "v": 2226,
        "c": 22942
      },
      {
        "d": "Jul 18",
        "v": 0,
        "c": 22942
      },
      {
        "d": "Jul 20",
        "v": 3601,
        "c": 26543
      },
      {
        "d": "Jul 21",
        "v": 3082,
        "c": 29625
      },
      {
        "d": "Jul 22",
        "v": 2887,
        "c": 32512
      },
      {
        "d": "Jul 23",
        "v": 3456,
        "c": 35968
      },
      {
        "d": "Jul 24",
        "v": 3134,
        "c": 39102
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 39102
      },
      {
        "d": "Jul 28",
        "v": 3100,
        "c": 42202
      },
      {
        "d": "Jul 29",
        "v": 3109,
        "c": 45311
      },
      {
        "d": "Jul 30",
        "v": 3158,
        "c": 48469
      },
      {
        "d": "Jul 31",
        "v": 4136,
        "c": 52605
      },
      {
        "d": "Aug 1",
        "v": 1780,
        "c": 54385
      },
      {
        "d": "Aug 3",
        "v": 4279,
        "c": 58664
      },
      {
        "d": "Aug 4",
        "v": 3168,
        "c": 61832
      },
      {
        "d": "Aug 5",
        "v": 4134,
        "c": 65966
      },
      {
        "d": "Aug 6",
        "v": 3848,
        "c": 69814
      },
      {
        "d": "Aug 7",
        "v": 4030,
        "c": 73844
      },
      {
        "d": "Aug 8",
        "v": 1327,
        "c": 75171
      },
      {
        "d": "Aug 10",
        "v": 2254,
        "c": 77425
      },
      {
        "d": "Aug 11",
        "v": 2298,
        "c": 79723
      },
      {
        "d": "Aug 12",
        "v": 3878,
        "c": 83601
      },
      {
        "d": "Aug 13",
        "v": 3508,
        "c": 87109
      },
      {
        "d": "Aug 14",
        "v": 3188,
        "c": 90297
      },
      {
        "d": "Aug 15",
        "v": 632,
        "c": 90929
      },
      {
        "d": "Aug 17",
        "v": 5590,
        "c": 96519
      },
      {
        "d": "Aug 18",
        "v": 4904,
        "c": 101423
      },
      {
        "d": "Aug 19",
        "v": 5577,
        "c": 107000
      },
      {
        "d": "Aug 20",
        "v": 4210,
        "c": 111210
      },
      {
        "d": "Aug 21",
        "v": 5694,
        "c": 116904
      },
      {
        "d": "Aug 22",
        "v": 768,
        "c": 117672
      },
      {
        "d": "Aug 24",
        "v": 4095,
        "c": 121767
      },
      {
        "d": "Aug 25",
        "v": 5593,
        "c": 127360
      },
      {
        "d": "Aug 26",
        "v": 3406,
        "c": 130766
      },
      {
        "d": "Aug 27",
        "v": 4654,
        "c": 135420
      },
      {
        "d": "Aug 28",
        "v": 2847,
        "c": 138267
      },
      {
        "d": "Aug 29",
        "v": 0,
        "c": 138267
      },
      {
        "d": "Aug 31",
        "v": 5566,
        "c": 143833
      },
      {
        "d": "Sep 1",
        "v": 3398,
        "c": 147231
      },
      {
        "d": "Sep 2",
        "v": 4056,
        "c": 151287
      },
      {
        "d": "Sep 3",
        "v": 1560,
        "c": 152847
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
      "planStartVal": 16194,
      "unit": "piles"
    },
    "trackers": {
      "label": "Tracker rows",
      "total": 2486,
      "color": "#2769a8",
      "planStart": "Jun 17",
      "planEnd": "Aug 30",
      "planStartVal": 165,
      "unit": "rows"
    },
    "modules": {
      "label": "PV modules",
      "total": 171470,
      "color": "#b96f18",
      "planStart": "Jul 3",
      "planEnd": "Sep 6",
      "planStartVal": 8322,
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
      "done": 61.4,
      "status": "Active",
      "note": "61.4% (Sep 8 report) — civil 97.6%, structural 67.3%, electrical 39.1%. Substation scope — excluded from the civil roll-up."
    }
  ],
  "safety": {
    "headline": "On 8 September at about 13:15 a substation worker hand-excavating a trench lost consciousness and fell; co-workers placed him in the recovery position and called 911, emergency services treated him on site and transferred him by ambulance to hospital for evaluation, and work in the immediate area was stopped. The 48-hour immediate notification was issued the same day (event 20260908_ACC_001) and the investigation is open and no further incident has occurred since: heat exposure on the worker's second day on site is the working hypothesis, the cause is not yet confirmed and the OSHA classification will be set on the medical outcome. Heat-stress controls on the substation front have been reinforced pending the findings - work-rest cycles, shade and hydration, closer supervision of new starters and a re-issued pre-task briefing across all subcontractors. The response was by the book and the project's record stands behind it: 329 days without a lost-time accident across 189,206 hours worked, zero recordable cases to date, weekly safety walks with every subcontractor, bi-weekly subcontractor safety meetings, monthly general safety meetings and a maintained register of unsafe acts and conditions. The two first-aid cases notified on 4 September (events of 2 and 4 September) remain first aid only.",
    "tiles": [
      {
        "label": "Recordable accidents",
        "value": "0",
        "note": "No fatality, lost-time injury, restricted-work or OSHA-recordable case on the project to date. TRIR, DART and LTIFR all stand at 0.00 across 189,206 hours."
      },
      {
        "label": "Days without accident",
        "value": "329",
        "note": "Per the site register at 9 September, maintained daily from subcontractor returns. The classification of the 8 September event remains pending the medical outcome."
      },
      {
        "label": "Lost days",
        "value": "0",
        "note": "Frequency, incidence and severity rates remain zero. Weather-related lost hours: 697.5 on 3 September and 601.8 on 4 September; none on 8 September."
      },
      {
        "label": "First-aid cases — since August",
        "value": "5",
        "note": "4 August: ankle sprain on concealed uneven ground. 7 August: torque tube slipped onto a worker's helmet and shoulder; evaluated in hospital, cleared to return; investigation closed, tube-handling corrective actions retained in the daily briefings. 2 and 4 September: two minor first-aid cases, no treatment beyond first aid. 8 September: substation worker lost consciousness during hand excavation; treated on site by emergency services and transferred to hospital for evaluation; investigation open, classification pending the medical outcome (event 20260908_ACC_001)."
      },
      {
        "label": "Man-hours to date",
        "value": "189,206",
        "note": "Register maintained to 9 September. July alone: 52,464 hours across 224 personnel — the July monthly report is issued and July is the audited basis."
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
    "headline": "Owner acceptance stands at 296 of 2,311 completed tracker rows and converting EPC releases into Owner acceptance remains the controlling quality action. The two Owner queries on installed-work conformance fell due on 8 and 9 September; a single consolidated engineering and quality position is presented at the Owner site meeting on 10 September and the written responses follow it. The 41 rows completed on 9 September in the north-east zone are being reconciled with the per-area completion record for that zone before they are added to the published figure.",
    "tiles": [
      {
        "label": "Piles executed",
        "value": "30,627",
        "note": "Current executed basis, 94.4% of project scope."
      },
      {
        "label": "Piles approved",
        "value": "24,751",
        "note": "83.7% of executed piles. The latest approval cut is dated 27 July and predates ten production days; a refreshed cut is due."
      },
      {
        "label": "Awaiting approval",
        "value": "4,557",
        "note": "Open inspection fronts follow the active production areas. The newly opened pile area is producing with no inspection line yet established for it."
      },
      {
        "label": "Owner approved — piles",
        "value": "6,836",
        "note": "The Owner approval record advanced this week for the first time since the early-July snapshot, on both piles and tracker rows."
      },
      {
        "label": "Tracker rows released",
        "value": "296 / 2,311",
        "note": "11.9% of the 2,486 rows in scope and 12.8% of the 2,311 built. Released rows feed the module installation front."
      },
      {
        "label": "Pile refusals recorded",
        "value": "242",
        "note": "0.8% of executed piles. Reinstallation and tap-down corrections are complete or in progress."
      }
    ],
    "note": "Release is reported on the Owner-approved measure: rows are counted as released only once they have passed the Owner's quality process, not on internal approval alone. Damper replacement work is currently holding rows back from release in the second area, and a proposal to combine the racking and module inspections into a single release is with the Owner for decision. Inspection records are submitted for Owner review as areas close out. Module spacing is verified by measurement during tightening rather than assumed from the purlin."
  },
  "weatherLog": [
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
      "period": "Sep 10 - Sep 15",
      "items": [
        "First-circuit trunk pull completed to the 12 September date; junction-box terminations continued from the first 12 and inverter connections started on 11 September.",
        "First-circuit medium-voltage junction-box terminations started (0 of 30 at the date of this report) against the 11 to 17 September connection window, with the full committed termination crew productive at its established rate on the three trench-closed stations.",
        "The 41 north-east rows completed on 9 September reconciled with the per-area record and the published tracker figure updated; racking completion confirmed in the two open sub-areas so the eastern module front can resume.",
        "Second-circuit tracker completion closed to its 14 September date or a revised date issued.",
        "Pile installation resumed in the final area at the rate its 15 September date now requires (about 180 per day).",
        "Second-circuit easement medium-voltage cable pull completed (due 4 to 8 September) and the eastern-circuit pull started (due from 9 September).",
        "Responses issued on the two open Owner queries that fell due on 8 and 9 September, following the consolidated engineering and quality position presented at the site meeting on 10 September.",
        "Cable installation reported daily by circuit and inverter station and raised towards about 27,800 feet per day, with cable and harness reported separately."
      ]
    },
    {
      "period": "Sep 16 - Sep 21",
      "items": [
        "First-circuit LV and medium-voltage works closed to the 17 September date, releasing the first-circuit mechanical-completion tests from 18 September.",
        "Eastern-circuit modules closed to the 18 September date or a revised date issued with the daily rate that supports it.",
        "Substation equipment installation closed to the 18 September date and control-cable terminations progressed against the 14 September date.",
        "Second-circuit inverter feeder cable (14 September), trunk supports (15 September) and trunk pull (19 September) closed on their dates.",
        "LV and DC cable installation completed to the 18 September date, or a revised date issued with the daily rate that supports it."
      ]
    }
  ],
  "ownerActions": {
    "asOf": "Sep 10, 2026",
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
    "asOf": "Sep 10, 2026",
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
      "note": "The schedule issued on 8 September, incorporating the six Owner comments on the Week 34 report, is the reference for day-to-day tracking. Circuit mechanical completion dates are 2, 10, 17 and 24 October; the plant-level ready-to-energize milestone is 14 October; substantial completion is 30 November on the last circuit. Against its own dates: the first-circuit inverter feeder cable and trunk supports (8 September), the eastern-circuit tracker completion (8 September) and the second-circuit easement cable pull (4 to 8 September) are open past their dates, and the eastern-circuit easement pull programmed from 9 September has not started. On the positive side the first-circuit junction-box terminations started on 9 September, a day ahead of their date. Falling due in the next week: the first-circuit trunk pull (12 September), inverter connections (11 to 17 September) and medium-voltage connection (11 to 17 September), the second-circuit tracker completion (14 September), the remaining pile area (15 September) and the eastern-circuit modules (18 September)."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "152,847 of 171,470 (89.1%) with 18,623 remaining on the ledger. No modules were installed on 9 September - the first zero day since the end of August - because the eastern installation crew was assigned to racking in the last area; the previous two days had produced 4,204 and 3,666. The ledger remains conservative while the Area E modules installed by the western crew since late August are held pending an area count. On the updated schedule the eastern-circuit modules are due 18 September and the last circuit 29 September; the eastern front resumes once racking in the last area and the two remaining sub-areas of the north-east zone releases rows for panels."
    },
    {
      "title": "Tracker assembly and quality release",
      "level": "Priority",
      "note": "2,311 rows complete of 2,486 (93.0%), of which 296 carry Owner acceptance; earned progress stands at 94.0%. On 9 September the assembly crew completed 41 rows in the north-east zone (dampers and brackets); these are being reconciled with the per-area completion record for that zone and the published figure is held until the reconciliation closes. In the last area 35 rows are in progress at half completion - the first racking there. The second-circuit tracker completion is due 14 September on the updated schedule and the eastern sub-areas were due 8 September."
    },
    {
      "title": "Medium-voltage terminations",
      "level": "Priority",
      "note": "45 of 264 complete, unchanged since 3 September; against the 11-per-day control the accumulated position is 87. On the first circuit the inverter-side terminations are complete (24 of 24) and the junction-box terminations have not started (0 of 30); on the second circuit 18 of 30 inverter-side terminations are done. Trenches closed and compacted advanced from 38 to 44 of 181 and the first three inverter stations of the first circuit are now trench-closed and ready for termination. The updated schedule carries the first-circuit medium-voltage connection 11 to 17 September. Bringing the full committed termination crew to site remains the single controlling item on energization."
    },
    {
      "title": "LV and DC installation",
      "level": "Priority",
      "note": "Cumulative cable stands at 75,280 feet (27.9%) against about 27,800 feet per day now required to 18 September over seven working days; no cable footage was reported on 9 September. Harness assembly stands at 1,156 with a further 192 assemblies installed by the EPC's own crew and recorded separately, after the strongest harness day of the project on 9 September: 297 assemblies across three crews, together with 139 aerial supports, 9 cables tensioned and 86 brackets. The first junction-box terminations on the first circuit were made on 9 September (three boxes, 12 terminations). On the first circuit the first three inverter station trenches are closed; inverter terminations are programmed from 11 September. Additional EPC resources are assigned to the first circuit."
    },
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "30,627 of 31,352 (97.7%); no piles were driven on 9 September. The balance of 725 is concentrated in the last area (712 positions), programmed 1 to 15 September on the updated schedule, which now requires about 180 piles per day over the four working days left; the piling crew is currently racking in that area on the released positions, so the date depends on piling resuming this week."
    },
    {
      "title": "Substation",
      "level": "Watch",
      "note": "61.4% overall - civil 97.6%, structural 67.3%, electrical 39.1% - with 37 days to the energization date; no substation progress was reported for 9 September. Against an advanced plan that rises 1.7 points per day the composite is 12.8 points behind plan. On the updated schedule the equipment installation window closes 18 September, mechanical-completion tests run 11 to 26 September, utility integration 21 to 28 September and the energization review 3 to 14 October."
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
      "note": "DELIVERY COMPLETE — the full project quantity is on site with nothing outstanding. 113,826 modules in stock above the installed quantity, so material does not constrain the installation front through to the 6 September date."
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
      "note": "All 23 inverter stations are delivered, set, anchored and welded on their foundations. Medium-voltage terminations have started and stand at 18 of 264, with the first inverter row complete; LV terminations follow the cable pull."
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
        "value": "219",
        "note": "Latest site-board headcount (Sep 9). Field labor plus management, quality and HSE."
      },
      {
        "label": "Peak headcount",
        "value": "258",
        "note": "Highest headcount on site to date (August 11)."
      },
      {
        "label": "Average headcount",
        "value": "206",
        "note": "Mean headcount across the construction period to date."
      },
      {
        "label": "Manhours to date",
        "value": "180,500",
        "note": "Total manhours worked from the start of construction on April 1 through September 10, at 10 h/day, Monday to Saturday."
      },
      {
        "label": "Recordable incident rate",
        "value": "0.00",
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
      }
    ],
    "manhours": [
      {
        "d": "Apr 1",
        "c": 150
      },
      {
        "d": "Apr 15",
        "c": 2593
      },
      {
        "d": "May 1",
        "c": 6849
      },
      {
        "d": "May 15",
        "c": 12792
      },
      {
        "d": "Jun 1",
        "c": 23045
      },
      {
        "d": "Jun 15",
        "c": 35737
      },
      {
        "d": "Jul 1",
        "c": 55632
      },
      {
        "d": "Jul 15",
        "c": 77278
      },
      {
        "d": "Aug 1",
        "c": 108039
      },
      {
        "d": "Aug 15",
        "c": 136012
      },
      {
        "d": "Sep 1",
        "c": 165644
      },
      {
        "d": "Sep 10",
        "c": 180504
      }
    ]
  }
};
