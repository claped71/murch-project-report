'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated August 6, 2026 by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "August 6, 2026",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 58.8,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, electrical 14%, civil 10%. The electrical component covers all four electrical fronts — LV and DC cable, MV collection, inverter stations and the substation — combined into one total. Civil excludes the substation so it is not counted twice.",
    "statement": "The strongest result of 6 August was electrical. Low-voltage and DC cable installation set its best day for the third consecutive day — 2,560 linear feet across seven combiner boxes in two areas, including the first 750 kcmil runs — taking the cumulative pull to 7,312 linear feet; the last three days produced 6,431 feet against 881 feet for the whole preceding period. The substation structural steel now carries verified dates for the first time: the 34.5 kV structure is fabricated and galvanized, and the balance of the fabricated material ships on Monday 10 August for delivery to site on Saturday 15 August. The support poles remain on a longer quoted lead and an alternative supplier's quotation is being evaluated; erection sequencing is being planned so work starts from the 15 August delivery. Pile installation stands at 29,308 of 31,352 (93.5%) with 2,044 remaining. The newly opened area tripled its output on its second day — 149 piles — and now carries 1,271 of the remaining quantity; a revised completion date is being issued on the demonstrated two-area rate. Module installation placed 3,848 (91% of the 4,230 per day required for 6 September), taking cumulative installation to 61,492 of 171,470 (35.9%); one installation area reached its full scope and that crew now transitions to the next released area. Tracker assembly completed 29 rows against the 63 per day now required for 30 August — completed rows stand at 1,234 of 2,486 (49.6%), of which 296 are released by the Owner's quality process — and the principal assembly area is 42 rows from completion. Civil works remain effectively closed at 98.0% excluding the substation, and every substation foundation is complete.",
    "note": null
  },
  "gates": [
    {
      "key": "piles",
      "name": "Foundation piles",
      "installed": 29308,
      "total": 31352,
      "unit": "piles",
      "forecast": "Aug 7, 2026",
      "status": "Below rate"
    },
    {
      "key": "trackers",
      "name": "Tracker rows (incl. purlins)",
      "installed": 1234,
      "total": 2486,
      "unit": "rows",
      "earned": 1287.8,
      "earnedPct": 51.8,
      "earnedLabel": "51.8% earned incl. rows in progress (1,288 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Below rate"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 61492,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Below rate"
    },
    {
      "key": "electrical",
      "name": "Electrical — total",
      "pctOnly": true,
      "gatePct": 18.1,
      "earnedPct": 27.7,
      "unit": "%",
      "earnedLabel": "27.7% earned incl. work in progress",
      "mix": "LV / DC installation 45% · MV collection 22% · Inverter stations 18% · Substation (SET) 15%",
      "forecast": "Oct 16, 2026",
      "status": "Below rate"
    }
  ],
  "earnedProgress": {
    "asOf": "Aug 6, 2026",
    "scopes": [
      {
        "scope": "Tracker rows",
        "unit": "rows",
        "gate": "1,234 / 2,486",
        "gatePct": 49.6,
        "inProgress": "107 open rows credited by ladder step (53.8 row-equivalents)",
        "earnedPct": 51.8,
        "detail": "Partial-row credit resumed on 7 August after two consecutive days of step-level reporting from the assembly crews. Earned credits open rows at their verified ladder step; the completion gate continues to count finished rows only and no date moves on earned progress."
      },
      {
        "scope": "Electrical — all fronts",
        "unit": "%",
        "gate": "18.1% of scope",
        "gatePct": 18.1,
        "inProgress": "MV 59.7% · 23 of 23 inverter stations set · 110 of 419 boxes · 7,312 lf of cable",
        "earnedPct": 27.7,
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
      "forecast": "Sep 20 – 25, 2026",
      "status": "On target",
      "note": "Supported by the current construction sequence: trackers complete 30 August, modules 6 September, LV/DC cable 18 September. Holding the date requires the pile completion date to be re-forecast and met on the two-workfront basis now demonstrated, and the module installation front to reach full field rate."
    },
    {
      "name": "Provisional Interconnection",
      "contract": "Oct 16, 2026",
      "forecast": "Oct 14 – 16, 2026",
      "pin": true,
      "status": "On target",
      "note": "Main power transformer set on its foundation July 24. Remaining controlling substation equipment: breakers and structural steel. Pre-commissioning is programmed to complete by October 13."
    },
    {
      "name": "Commercial Operation Date",
      "contract": "Nov 9, 2026",
      "forecast": "Nov 5 – 9, 2026",
      "status": "Watch",
      "note": "Supported by the current mechanical completion forecast. Sensitive to the module installation ramp through August."
    },
    {
      "name": "Substantial Completion",
      "contract": "Nov 30, 2026",
      "forecast": "Nov 30, 2026",
      "status": "Watch",
      "note": "Achievable provided outdoor scopes close before the seasonal weather stop."
    }
  ],
  "series": {
    "piles": [
      {
        "d": "Jun 18",
        "v": 20,
        "c": 15796
      },
      {
        "d": "Jun 19",
        "v": 79,
        "c": 15875
      },
      {
        "d": "Jun 22",
        "v": 251,
        "c": 16126
      },
      {
        "d": "Jun 23",
        "v": 101,
        "c": 16227
      },
      {
        "d": "Jun 25",
        "v": 370,
        "c": 16597
      },
      {
        "d": "Jun 26",
        "v": 340,
        "c": 16937
      },
      {
        "d": "Jun 29",
        "v": 261,
        "c": 17198
      },
      {
        "d": "Jun 30",
        "v": 234,
        "c": 17432
      },
      {
        "d": "Jul 1",
        "v": 252,
        "c": 17684
      },
      {
        "d": "Jul 2",
        "v": 274,
        "c": 17958
      },
      {
        "d": "Jul 3",
        "v": 134,
        "c": 18092
      },
      {
        "d": "Jul 6",
        "v": 307,
        "c": 18399
      },
      {
        "d": "Jul 7",
        "v": 399,
        "c": 18798
      },
      {
        "d": "Jul 8",
        "v": 646,
        "c": 19444
      },
      {
        "d": "Jul 9",
        "v": 669,
        "c": 20113
      },
      {
        "d": "Jul 10",
        "v": 680,
        "c": 20793
      },
      {
        "d": "Jul 11",
        "v": 680,
        "c": 21473
      },
      {
        "d": "Jul 13",
        "v": 608,
        "c": 22081
      },
      {
        "d": "Jul 14",
        "v": 695,
        "c": 22776
      },
      {
        "d": "Jul 15",
        "v": 481,
        "c": 23257
      },
      {
        "d": "Jul 16",
        "v": 504,
        "c": 23761
      },
      {
        "d": "Jul 17",
        "v": 472,
        "c": 24233
      },
      {
        "d": "Jul 18",
        "v": 608,
        "c": 24841
      },
      {
        "d": "Jul 20",
        "v": 622,
        "c": 25463
      },
      {
        "d": "Jul 21",
        "v": 253,
        "c": 25716
      },
      {
        "d": "Jul 22",
        "v": 202,
        "c": 25918
      },
      {
        "d": "Jul 23",
        "v": 284,
        "c": 26202
      },
      {
        "d": "Jul 24",
        "v": 364,
        "c": 26566
      },
      {
        "d": "Jul 25",
        "v": 236,
        "c": 26802
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 26802
      },
      {
        "d": "Jul 28",
        "v": 439,
        "c": 27241
      },
      {
        "d": "Jul 29",
        "v": 539,
        "c": 27780
      },
      {
        "d": "Jul 30",
        "v": 627,
        "c": 28407
      },
      {
        "d": "Jul 31",
        "v": 337,
        "c": 28744
      },
      {
        "d": "Aug 1",
        "v": 0,
        "c": 28744
      },
      {
        "d": "Aug 3",
        "v": 205,
        "c": 28949
      },
      {
        "d": "Aug 4",
        "v": 110,
        "c": 29059
      },
      {
        "d": "Aug 5",
        "v": 100,
        "c": 29159
      },
      {
        "d": "Aug 6",
        "v": 149,
        "c": 29308
      }
    ],
    "trackers": [
      {
        "d": "Jun 17",
        "v": 15,
        "c": 142
      },
      {
        "d": "Jun 18",
        "v": 35,
        "c": 177
      },
      {
        "d": "Jun 19",
        "v": 26,
        "c": 203
      },
      {
        "d": "Jun 20",
        "v": 31,
        "c": 234
      },
      {
        "d": "Jun 21",
        "v": 0,
        "c": 234
      },
      {
        "d": "Jun 22",
        "v": 48,
        "c": 282
      },
      {
        "d": "Jun 23",
        "v": 31,
        "c": 313
      },
      {
        "d": "Jun 24",
        "v": 0,
        "c": 313
      },
      {
        "d": "Jun 25",
        "v": 57,
        "c": 370
      },
      {
        "d": "Jun 26",
        "v": 26,
        "c": 396
      },
      {
        "d": "Jun 29",
        "v": 29,
        "c": 425
      },
      {
        "d": "Jun 30",
        "v": 30,
        "c": 455
      },
      {
        "d": "Jul 1",
        "v": 51,
        "c": 506
      },
      {
        "d": "Jul 7",
        "v": 29,
        "c": 535
      },
      {
        "d": "Jul 8",
        "v": 0,
        "c": 535
      },
      {
        "d": "Jul 9",
        "v": 0,
        "c": 535
      },
      {
        "d": "Jul 10",
        "v": 0,
        "c": 535
      },
      {
        "d": "Jul 13",
        "v": 29,
        "c": 564
      },
      {
        "d": "Jul 14",
        "v": 49,
        "c": 613
      },
      {
        "d": "Jul 15",
        "v": 35,
        "c": 648
      },
      {
        "d": "Jul 16",
        "v": 35,
        "c": 683
      },
      {
        "d": "Jul 17",
        "v": 25,
        "c": 708
      },
      {
        "d": "Jul 18",
        "v": 0,
        "c": 708
      },
      {
        "d": "Jul 20",
        "v": 21,
        "c": 729
      },
      {
        "d": "Jul 21",
        "v": 25,
        "c": 754
      },
      {
        "d": "Jul 22",
        "v": 39,
        "c": 793
      },
      {
        "d": "Jul 23",
        "v": 28,
        "c": 821
      },
      {
        "d": "Jul 24",
        "v": 30,
        "c": 851
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 851
      },
      {
        "d": "Jul 28",
        "v": 30,
        "c": 881
      },
      {
        "d": "Jul 29",
        "v": 35,
        "c": 916
      },
      {
        "d": "Jul 30",
        "v": 30,
        "c": 946
      },
      {
        "d": "Jul 31",
        "v": 40,
        "c": 986
      },
      {
        "d": "Aug 1",
        "v": 40,
        "c": 1026
      },
      {
        "d": "Aug 3",
        "v": 86,
        "c": 1112
      },
      {
        "d": "Aug 4",
        "v": 60,
        "c": 1172
      },
      {
        "d": "Aug 5",
        "v": 33,
        "c": 1205
      },
      {
        "d": "Aug 6",
        "v": 29,
        "c": 1234
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
        "c": 61492
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
      "planStartVal": 15796,
      "unit": "piles"
    },
    "trackers": {
      "label": "Tracker rows",
      "total": 2486,
      "color": "#2769a8",
      "planStart": "Jun 17",
      "planEnd": "Aug 30",
      "planStartVal": 142,
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
      "note": "The remaining 5% is the Area G and Area F basin tail; the planned end date has passed. This is now the only open civil line other than the fence."
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
      "activity": "Substation (overall)",
      "done": 24.7,
      "status": "Active",
      "note": "Overall substation progress 24.7% on the 31 July tracker — civil 76.8%, structural 10.8%, electrical 6.0%. Piers are now complete at 17 of 17, the last poured on 5 August, so every substation foundation is finished: control building, containment berm, main power transformer foundation and all piers. Grounding excavation around the perimeter started the same day. The overall percentage still reflects the 31 July cut and understates the civil position; an updated tracker cut is required. The structural percentage is unchanged and is governed by steel fabrication and delivery."
    }
  ],
  "safety": {
    "headline": "Zero recordable injuries in 323 days. One first-aid case on 4 August, treated on site with no lost time.",
    "tiles": [
      {
        "label": "Recordable accidents",
        "value": "0",
        "note": "No fatality, lost-time injury, restricted-work or OSHA-recordable case on the project to date."
      },
      {
        "label": "Days without recordable",
        "value": "323",
        "note": "286 at the June close, plus 37 days to 6 August with no recordable reported."
      },
      {
        "label": "Lost days",
        "value": "0",
        "note": "Frequency, incidence and severity rates remain zero."
      },
      {
        "label": "First-aid cases",
        "value": "1",
        "note": "4 August: an operative sprained an ankle while carrying modules; tall grass concealed uneven ground. Treated on site, no lost time."
      },
      {
        "label": "Man-hours to date",
        "value": "76,131",
        "note": "Audited to the June close. June alone: 28,904 hours across 127 personnel."
      },
      {
        "label": "Property damage — June",
        "value": "5",
        "note": "Plant and loads moving over uneven or obstructed ground, and two module pallets struck during unloading. No injuries."
      },
      {
        "label": "Leading indicators — June",
        "value": "41",
        "note": "25 unsafe conditions, 6 unsafe acts or behaviours, 10 toolbox talks."
      },
      {
        "label": "Personnel trained",
        "value": "123",
        "note": "Cumulative site inductions and training to the June close."
      }
    ],
    "note": "The injury record is clean: 323 days with no recordable, no lost time and no restricted work. The recurring hazard on this site is ground and vegetation rather than the work itself — most of June's property damage involved plant or loads moving over uneven or obstructed ground, a mower struck a fence concealed in vegetation, and the 4 August first-aid case occurred where tall grass hid uneven terrain. This is the same subject raised by the Owner on 1 August under reference MQ-20260801-0736, and the corrective action is being handled as one item with that response. The July monthly report is being compiled; June remains the audited basis."
  },
  "quality": {
    "headline": "Quality approval stands at 84.4% of executed piles, and 296 of 1,234 completed tracker rows are released by the Owner's quality process. An updated cut was prepared on 3 August but no figures have yet been filed; the module release process begins this week.",
    "tiles": [
      {
        "label": "Piles executed",
        "value": "29,308",
        "note": "Current executed basis, 93.5% of project scope."
      },
      {
        "label": "Piles approved",
        "value": "24,751",
        "note": "84.4% of executed piles. The latest approval cut is dated 27 July and predates the most recent production days; a refreshed cut is due."
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
        "value": "296 / 1,234",
        "note": "11.9% of the 2,486 rows in scope and 24.0% of the 1,234 built. Released rows feed the module installation front."
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
      "period": "Aug 7 – Aug 8",
      "items": [
        "The revised pile completion date issued on the demonstrated two-area rate, with the pile contractor's resourcing plan.",
        "The principal assembly area closed out — 42 rows remain — and the third area's 68 aligned rows converted into its first completed rows.",
        "The module crew that completed its area transitioned onto the next released workfront; the module release process to open it.",
        "A second LV cable crew mobilised — the existing crew is proven and saturated at ~2,000 feet per day.",
        "The wetland directional bore completed and the abnormal insulation-resistance result on the affected feeder fault-located while equipment is in the area.",
        "Answers issued on the torque-wrench calibration query (past due) and the easement-staking query (due today).",
        "The alternative pole supplier's quotation evaluated so the steel erection sequence can be fixed from the 15 August delivery."
      ]
    },
    {
      "period": "Aug 10 – Aug 15",
      "items": [
        "Substation structural steel delivered to site Saturday 15 August; erection start planned from the internal structures.",
        "Pile installation completing on the revised date's early milestones, releasing the remaining tracker workfronts.",
        "Tracker assembly at multi-crew rate with the third area converting standing work into completed rows.",
        "Module installation back at two released fronts, with released rows kept ahead of installation.",
        "LV cabling at two-crew rate extending beyond the first inverter's areas, and the first inverter terminations reported.",
        "MV plowing restarted on the ten open segments once the wetland bore closes.",
        "Sediment basins closed out, completing the civil scope other than the fence signature."
      ]
    }
  ],
  "ownerActions": {
    "asOf": "Aug 6, 2026",
    "responseNote": "Days outstanding are counted to the publication date of this report. This register supports coordination and does not replace or vary any notice provision of the Agreement.",
    "items": [
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
    "asOf": "Aug 7, 2026",
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
    "openingNote": "Nineteen queries logged to date; none new since 4 August. One item — the torque-wrench calibration query of 30 July — has passed its response date and its answer is being issued as a priority. The easement-staking query falls due today; the five items of 4 August remain inside their window.",
    "responseNote": "There is no sign-in and no account. Sending the query is all that is required — you keep a copy in your own Sent items and the reference is your record. Each query is added to this register at the next daily publication. Responses are issued by email; the register records the date a response was issued and the working days taken, and an item shows as answered once that response has been made. If an item here says open and you have already had an answer, tell us and it will be corrected.",
    "noticeNote": "This register supports day-to-day information flow. It does not replace or vary the formal correspondence provisions of the Agreement.",
    "items": [
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
        "assignedTo": "Engineering lead",
        "respondedISO": "2026-08-04"
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
        "status": "Open",
        "assignedTo": "Environmental lead",
        "respondedISO": "2026-08-05"
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
        "status": "Answered",
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
        "respondedISO": "2026-08-03",
        "turnaroundDays": 1,
        "status": "Answered",
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
        "turnaroundDays": 1,
        "status": "Answered",
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
        "turnaroundDays": 1,
        "status": "Answered",
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
        "turnaroundDays": 0,
        "status": "Answered",
        "assignedTo": "Engineering lead"
      },
      {
        "ref": "MQ-20260731-0759",
        "subject": "Easement staking on the MV route east of the substation, and confirmation that cable is installed within that easement",
        "area": "MV collection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-31",
        "dueISO": "2026-08-07",
        "status": "In review",
        "assignedTo": "Construction Manager"
      },
      {
        "ref": "MQ-20260730-1325",
        "subject": "Calibration status of the torque wrenches in use on tracker assembly, with certificates",
        "area": "Tracker assembly",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-30",
        "dueISO": "2026-08-06",
        "status": "In review",
        "assignedTo": "QA/QC lead"
      },
      {
        "ref": "MQ-20260730-1251",
        "subject": "Protective watertight caps on cable ends at the inverters",
        "area": "MV collection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-30",
        "dueISO": "2026-08-06",
        "status": "Answered",
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
      "title": "Tracker assembly and quality release",
      "level": "Priority",
      "note": "1,234 rows complete of 2,486 (49.6%) — the measure that governs the 30 August date — of which 296 are released through the Owner's quality process; earned progress including rows in build stands at 51.8%. 1,252 remain and 63 completed rows per day are required. 6 August completed 29 rows, again all from the single crew in the principal assembly area, now 632 of 674 rows (93.8%) and 42 rows from completion. When it closes, the third area becomes the entire assembly programme: it carries 881 torque-tube sections set and 68 rows aligned — now visible in the earned measure as work in build — but has not completed a row in eight working days, and converting that standing work into completed rows determines the 30 August date. Partial-row credit resumed on 7 August after two consecutive days of clean step-level reporting; the completion gate is unchanged. Release cadence remains the second constraint: the controlling quality cut is still 30 July."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "109,978 modules remain, with 4,230 per day required to hold 6 September. 6 August placed 3,848 — 91% of the required rate — and the smaller of the two active areas reached its full scope of 4,422 modules. That is a milestone and a problem at once: the crew that finished it must now transition to the next released area, and until it does the programme runs on one front. Per-person productivity remains strong — the principal crew set another per-person record at 140 modules per installer. Material is not a constraint: deliveries are complete and 109,978 modules stand in stock. The binding constraint is released workfronts — the remaining principal area is 46.4% moduled and carries no quality release, and the module release process that began this week is what opens the next front."
    },
    {
      "title": "LV and DC installation — the pull has started",
      "level": "Priority",
      "note": "6 August was the strongest cable day of the project for the third consecutive day: 2,560 linear feet — 2,330 feet of homerun and 230 feet of trunk — across seven combiner boxes of the first inverter in two areas, including the first 750 kcmil conductor runs. Cumulative installation stands at 7,312 linear feet; the last three days produced 6,431 feet against 881 feet for the whole preceding period. The same fifteen-person crew has now delivered three consecutive ~2,000-foot days: the method and the crew are proven and saturated, so the next increment comes from a second cable crew rather than from the existing one. Against 7,227 feet per day required for 18 September the day reached 35% of the rate. Box installation holds at 110 of 419 (26.3%), and the aerial messenger-wire quantity remains measured in the field but absent from the take-off."
    },
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "2,044 piles remain. The newly opened area is ramping as intended — 48 piles on its first day, 149 on its second, with two crews driving — and now holds 1,271 of the remaining quantity; the previously active area stands at 85.1% with 502 remaining after the weekly quantity reconciliation. A revised completion date is being issued on the demonstrated two-area rate, under which the remaining quantity completes in the second half of August. The resourcing of the single remaining pile contractor is confirmed alongside it. Remaining piles are covered from quantities already received on site; a delivery reconciliation remains open."
    },
    {
      "title": "Substation",
      "level": "Watch",
      "note": "24.7% overall against the 25 September mechanical completion date — the widest variance on the project, and one of the four fronts inside the electrical total, weighted at 15%, so it is not counted twice. Every substation foundation is complete, and the structural steel — the sole outstanding item — now carries verified dates for the first time: the 34.5 kV structure is fabricated and galvanized, the balance of fabricated material ships Monday 10 August, and delivery to site is due Saturday 15 August, verified at the fabricator's works. The support poles remain on a longer quoted lead time that has not been accepted; an alternative supplier's quotation is under evaluation, and the erection sequence is being planned to start from the 15 August delivery using the internal structures. Grounding installation around the substation perimeter is in progress. The overall percentage still reflects the 31 July tracker cut; an updated cut is required so the figure can move."
    },
    {
      "title": "Electrical — all fronts",
      "level": "Watch",
      "note": "Electrical progress is reported as one total across four fronts: 18.1% on completed units and 27.7% including verified work in progress, weighted LV and DC cable 45%, MV collection 22%, inverter stations 18% and the substation 15%. The inverter setting scope is complete: all 23 stations are set, anchored, welded and repaired. None is terminated, and termination is the measure that counts toward mechanical completion; it is gated by the cable pull, which is now accelerating. Low-voltage cable reached 7,312 linear feet after three consecutive record days, against 7,227 per day required. MV collection holds at 59.7% for a ninth working day: the wetland crossing remains in progress, and insulation-resistance testing has recorded an abnormal result on one phase of one feeder, which is being investigated and fault-located before the drilling equipment leaves the area."
    }
  ],
  "material": [
    {
      "item": "Foundation piles",
      "delivered": "31,352",
      "pct": 100,
      "note": "DELIVERY COMPLETE — the full project quantity is on site with nothing outstanding. 2,259 piles stand in stock against the 2,259 still to place, so material does not constrain the pile front."
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
      "note": "The tracker bill of material was confirmed complete on July 24 with one exception: 16 torque tubes identified as a short shipment, scheduled for delivery and awaiting confirmation of site receipt."
    },
    {
      "item": "Inverters",
      "delivered": "23 stations set",
      "pct": 100,
      "note": "All 23 inverter stations are delivered, set, anchored and welded on their foundations, and the corrective works on every one were completed on 4 August. LV and MV terminations follow, and none has yet started."
    },
    {
      "item": "Main power transformer",
      "delivered": "On site and set",
      "pct": 100,
      "note": "Set on its foundation July 24 inside the completed containment berm."
    },
    {
      "item": "Substation structural steel",
      "delivered": "In fabrication",
      "pct": null,
      "note": "The controlling substation item. The proposed fabrication, galvanizing and delivery programme does not support energization in the third week of September, and a revised programme has been requested."
    }
  ],
  "photos": [
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
      "note": "Fresh rows of foundation piles behind the installation equipment on the recently opened workfront, served by the completed internal road network (roads finished August 4). Pile installation stood at 29,308 of 31,352 (93.5%) at the August 6 reporting basis."
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
    },
    {
      "src": "assets/photo-35.jpg",
      "date": "July 14, 2026",
      "title": "Tracker assembly crews working the rows in Area C",
      "note": "Assembly crews spread across the Area C workfront with completed torque tubes in the foreground. The scale of the tracker front sets the pace for module installation behind it."
    },
    {
      "src": "assets/photo-34.jpg",
      "date": "July 14, 2026",
      "title": "Module installation front advancing across completed tracker rows",
      "note": "Installed modules in the foreground with bare trackers awaiting release beyond — the block-by-block sequence from Area A into Area C."
    },
    {
      "src": "assets/photo-28.jpg",
      "date": "July 7, 2026",
      "title": "Control building set at the substation",
      "note": "The control building landed on its foundation at the substation, ahead of the main power transformer and the pier structures that followed it. The set continued into the evening to complete in a single shift."
    },
    {
      "src": "assets/photo-23.jpg",
      "date": "June 25, 2026",
      "title": "Medium-voltage cable installed at depth, Area A",
      "note": "Cable laid between the first two inverter positions and measured at six feet of cover where it crosses the DC route. Depth is checked and recorded at each crossing as the plough advances."
    },
    {
      "src": "assets/photo-21.jpg",
      "date": "June 25, 2026",
      "title": "First completed rows — modules installed on erected trackers",
      "note": "The first fully completed rows in the earliest area released, with modules installed on erected tracker rows. The same sequence is now repeating across the later areas."
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
      "note": "Overall substation progress 24.7% on the 31 July tracker — civil 76.8%, structural 10.8%, electrical 6.0%. Piers are now complete at 17 of 17, the last poured on 5 August, so every substation foundation is finished: control building, containment berm, main power transformer foundation and all piers. Grounding excavation around the perimeter started the same day. The overall percentage still reflects the 31 July cut and understates the civil position; an updated tracker cut is required. The structural percentage is unchanged and is governed by steel fabrication and delivery.",
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
    "basis": "Shift basis 10 hours per person per day, Monday to Saturday. Headcount is taken from the site board and is current to August 6, 2026. Days on which the site was fully stopped are excluded from the manhours.",
    "tiles": [
      {
        "label": "Personnel on site",
        "value": "238",
        "note": "Latest site-board headcount (Aug 6). Field labor plus management, quality and HSE."
      },
      {
        "label": "Peak headcount",
        "value": "253",
        "note": "Highest headcount on site to date (July 15)."
      },
      {
        "label": "Average headcount",
        "value": "197",
        "note": "Mean headcount across the construction period to date."
      },
      {
        "label": "Manhours to date",
        "value": "117,800",
        "note": "Total manhours worked from the start of construction on April 1 through August 6, at 10 h/day, Monday to Saturday."
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
        "d": "Aug 6",
        "c": 117799
      }
    ],
    "mix": {
      "day": "August 6, 2026",
      "total": 238,
      "rows": [
        {
          "trade": "Tracker assembly and piling",
          "people": 125,
          "color": "#0f7a52"
        },
        {
          "trade": "Module installation",
          "people": 46,
          "color": "#2769a8"
        },
        {
          "trade": "Electrical and substation",
          "people": 39,
          "color": "#b96f18"
        },
        {
          "trade": "Civil and fencing",
          "people": 2,
          "color": "#7b4fa8"
        },
        {
          "trade": "EPC management, quality and HSE",
          "people": 25,
          "color": "#66716d"
        },
        {
          "trade": "Support / security",
          "people": 1,
          "color": "#0f7a52"
        }
      ]
    }
  }
};
