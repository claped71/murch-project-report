'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated August 10, 2026 by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "August 10, 2026",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 61.6,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, electrical 14%, civil 10%. The electrical component covers all four electrical fronts — LV and DC cable, MV collection, inverter stations and the substation — combined into one total. Civil excludes the substation so it is not counted twice.",
    "statement": "The reporting period covers Monday 10 August; Sunday 9 August was a non-working day. The defining result is on tracker assembly: the largest remaining assembly area produced its FIRST 40 completed rows — the standing work at the final assembly stage converted in a single day — and a further 38 rows were completed elsewhere, giving 78 completed rows against the 67 per day the 30 August date requires: the first above-rate assembly day since 3 August. Tracker assembly stands at 1,354 of 2,486 rows (54.5%) and overall completion moves to 61.4% from 60.3%. On the medium-voltage network the directional bore under the wetland crossing was completed, taking MV bores to 18 of 20 and the collection composite to 65.2%; the remaining ten plow segments will be completed by excavator. Module installation added 2,254 (cumulative 69,103, 40.3%); the module contractor for the eastern areas begins installation on Wednesday 12 August. Two matters require attention. Pile installation was SUSPENDED on 10 August pending delivery of a specific pile type; 1,766 piles remain and the reconciliation quantifying the shortage is being finalised for the supplier as the priority action. And the substation structural steel consignment now departs the fabrication facility on Wednesday 12 August, which compresses the programme to the planned Saturday 15 August site delivery.",
    "note": null
  },
  "gates": [
    {
      "key": "piles",
      "name": "Foundation piles",
      "installed": 29586,
      "total": 31352,
      "unit": "piles",
      "forecast": "Aug 7, 2026 — passed, revised date pending",
      "status": "Date passed"
    },
    {
      "key": "trackers",
      "name": "Tracker rows (incl. purlins)",
      "installed": 1354,
      "total": 2486,
      "unit": "rows",
      "earned": 1364.8,
      "earnedPct": 54.9,
      "earnedLabel": "54.9% earned incl. rows in progress (1,365 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Below rate"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 69103,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Below rate"
    },
    {
      "key": "electrical",
      "name": "Electrical — total",
      "pctOnly": true,
      "gatePct": 20.4,
      "earnedPct": 29.7,
      "unit": "%",
      "earnedLabel": "29.7% earned incl. work in progress",
      "mix": "LV / DC installation 45% · MV collection 22% · Inverter stations 18% · Substation (SET) 15%",
      "forecast": "Oct 16, 2026",
      "status": "Below rate"
    }
  ],
  "earnedProgress": {
    "asOf": "Aug 10, 2026",
    "scopes": [
      {
        "scope": "Tracker rows",
        "unit": "rows",
        "gate": "1,354 / 2,486",
        "gatePct": 54.5,
        "inProgress": "62 open rows credited by ladder step (46.8 row-equivalents)",
        "earnedPct": 54.9,
        "detail": "Partial-row credit resumed on 7 August after two consecutive days of step-level reporting from the assembly crews. Earned credits open rows at their verified ladder step; the completion gate continues to count finished rows only and no date moves on earned progress."
      },
      {
        "scope": "Electrical — all fronts",
        "unit": "%",
        "gate": "20.4% of scope",
        "gatePct": 20.4,
        "inProgress": "MV 66.7% · 23 of 23 inverter stations set · 110 of 419 boxes · 12,412 lf of cable",
        "earnedPct": 29.7,
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
      "forecast": "Sep 25, 2026 — conditional",
      "status": "At risk",
      "note": "RE-RATED from On target on 9 August, held under review. Two of the three conditions set then are now moving: tracker assembly produced 78 completed rows on 10 August against the 67 per day required — the first above-rate day since 3 August, with the largest remaining area finally converting — and the cable crew grew from 15 to 20 and set a project-record 3,131 linear feet, taking cumulative LV to 12,412 of 274,720 feet. The date is not yet supported: even the record cable day is 41% of the roughly 7,600 feet per day the 18 September electrical date requires, module installation must transition to the eastern contractor without losing rate, and pile installation is suspended pending delivery of a specific pile type. The rating returns to On target when the cable crew growth continues, the module transition holds above 4,000 per day, and piling resumes with a dated completion."
    },
    {
      "name": "Provisional Interconnection",
      "contract": "Oct 16, 2026",
      "forecast": "Oct 16, 2026 — conditional",
      "pin": true,
      "status": "At risk",
      "note": "RE-RATED from On target. The date follows mechanical completion, which is itself at risk, and carries three independent constraints of its own: the substation stands at 24.7% overall with structural at 10.8% and its steel not due on site until 15 August; the switchgear breakers are still awaited with several committed dates falling after the gate; and the 138 medium-voltage terminations stand at zero against coupling lead times quoted at around 40 weeks by every supplier approached. Insulation-resistance testing on 8 August was a genuine advance — 19 passes from 21 sections including all four feeders into the substation — but testing is not termination. Pre-commissioning remains programmed to complete by 13 October."
    },
    {
      "name": "Commercial Operation Date",
      "contract": "Nov 9, 2026",
      "forecast": "Nov 9, 2026 — conditional",
      "status": "At risk",
      "note": "RE-RATED from Watch. The date inherits the exposure on mechanical completion and interconnection above; it carries no independent margin of its own beyond the four days between the forecast and the contract date. It becomes deliverable again on the same three conditions: cable crewing, tracker conversion in the two remaining areas, and the substation electrical scope."
    },
    {
      "name": "Substantial Completion",
      "contract": "Nov 30, 2026",
      "forecast": "Nov 30, 2026 — conditional",
      "status": "Watch",
      "note": "Retained at Watch. The remaining scope after commercial operation is punch and close-out, which is the one part of the programme still holding contingency. The exposure is seasonal: outdoor scopes must close before the weather stop, and every week the upstream dates move consumes that contingency directly."
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
      },
      {
        "d": "Aug 7",
        "v": 63,
        "c": 29371
      },
      {
        "d": "Aug 8",
        "v": 215,
        "c": 29586
      },
      {
        "d": "Aug 10",
        "v": 0,
        "c": 29586
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
      },
      {
        "d": "Aug 7",
        "v": 42,
        "c": 1276
      },
      {
        "d": "Aug 8",
        "v": 0,
        "c": 1276
      },
      {
        "d": "Aug 10",
        "v": 78,
        "c": 1354
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
        "c": 69103
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
      "done": 24.7,
      "status": "Active",
      "note": "24.7% — the 76.8% civil component is STALE; substation civil is finished. Structural 10.8% is the blocker."
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
    "headline": "Quality approval stands at 83.7% of executed piles, and 296 of 1,354 completed tracker rows are released by the Owner's quality process. No approval figures have been filed since 30 July — seven working days — and the assembly programme has moved 78 rows in a single day since. Opening the release line remains the controlling quality action.",
    "tiles": [
      {
        "label": "Piles executed",
        "value": "29,586",
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
        "value": "296 / 1,354",
        "note": "11.9% of the 2,486 rows in scope and 21.9% of the 1,354 built. Released rows feed the module installation front."
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
      "period": "Aug 10 – Aug 15",
      "items": [
        "The revised pile completion date issued — the demonstrated rate of 215 piles per day in the newly opened area now supports a defensible date, and it is twelve days outstanding.",
        "The freed tracker assembly crew redeployed, and a dated commitment given for the first completed row in the largest remaining assembly area — 40 rows there already stand at the damper, motor and drive stage.",
        "The damper change-out cleared on the affected module rows so the second module crew returns to production rather than rework.",
        "The quality release line opened on the 674 rows completed in the principal assembly area — no approval figures have been filed since 30 July.",
        "A second LV cable crew mobilised; the existing crew is proven and saturated at roughly 2,000 feet per day.",
        "Survey support restored to the newly opened pile area, which has 993 piles still to be set out.",
        "Substation structural steel departing the fabricator Monday 10 August for delivery to site Saturday 15 August; the alternative pole supplier's quotation evaluated so the erection sequence can be fixed.",
        "The wetland directional bore closed and the crew split so cable plowing restarts on the ten open segments.",
        "The two sections that failed insulation-resistance testing fault-located while test equipment is on site.",
        "The outstanding pile quantity reconciliation, by quantity and colour, filed with the tracker supplier — open since 29 July against a multi-week replacement lead time."
      ]
    },
    {
      "period": "Aug 17 – Aug 22",
      "items": [
        "Tracker assembly at multi-crew rate in both remaining areas, converting standing work into completed rows against the 67 per day required for 30 August.",
        "Substation steel erection under way with foundations already complete.",
        "Module installation back at two released fronts, with released rows kept ahead of installation.",
        "LV cabling at two-crew rate extending beyond the first inverter's areas, and the first inverter terminations reported.",
        "Pile installation closing out the remaining areas and releasing the last tracker workfronts.",
        "Sediment basin and perimeter fence remainders closed, subject to the outstanding drainage commissioning signature."
      ]
    }
  ],
  "ownerActions": {
    "asOf": "Aug 8, 2026",
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
    "asOf": "Aug 10, 2026",
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
        "ref": "MQ-20260731-0822",
        "subject": "Progressive red-line and as-built updating during construction, starting with the completed MV directional bores",
        "area": "Programme and milestones",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-31",
        "dueISO": "2026-08-07",
        "status": "Open",
        "assignedTo": "Engineering lead"
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
        "assignedTo": "Engineering lead",
        "respondedISO": "2026-08-07"
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
      "note": "1,354 rows complete of 2,486 (54.5%) — the measure that governs the 30 August date — of which 296 are released through the Owner's quality process; earned progress including rows in build stands at 54.9%. Monday 10 August was the strongest assembly day since 3 August: 78 completed rows against 67 required, including the first 40 rows completed in the largest remaining area. The remaining 1,132 rows decompose across three crews at 29, 27 and 11 rows per day — the first two rates were both met on 10 August. Outstanding: the quality release line, unmoved since 30 July, and the first completed row from the third crew."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "104,621 modules remain, with 4,359 per day required to hold 6 September. 7 August placed 4,030 — 95% of the required rate and the second-best two-front day of the project. 8 August placed 1,327: one crew held its area at 1,248 while the larger crew produced 79 modules from a full day, because the rows it was working require a damper change-out before modules can be mounted. That is the same defect holding Owner acceptance in a completed area, and it has now appeared in a second area. Clearing it is the fastest way to restore the second module front. One area is now the only live module workfront, at 57.4% moduled, and it carries no quality release. Material is not a constraint: the full project quantity is on site."
    },
    {
      "title": "LV and DC installation — the pull has started",
      "level": "Priority",
      "note": "10 August set a project record: 3,131 linear feet of homerun DC cable across two combiner boxes, and the installation crew grew from 15 to 20 including 10 electricians — the first material step toward the second-crew capacity the programme requires. Cumulative installation stands at 12,412 of 274,720 linear feet (4.5%). The requirement remains roughly 7,600 feet per day to 18 September, so even the record day is 41% of rate: continued crew growth is the single lever on this front."
    },
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "1,766 piles remain. The recently opened area produced its best day on 8 August at 215 piles, after 48, 149 and 63 — the strongest pile day since 30 July — and now stands at 475 of 1,468 with 993 remaining, roughly five more working days at that rate. The dip to 63 on 7 August was a crew split between piling and tracker assembly rather than ground conditions. Remaining quantities: 993 in the newly opened area, 502 in the previously active area, 224, 36 and 11 across the three areas nearing completion. A revised completion date is still outstanding twelve days after the original gate, and for the first time the demonstrated rate supports issuing a defensible one. Survey support has read zero for four days against 993 piles still to be set out."
    },
    {
      "title": "Substation",
      "level": "Watch",
      "note": "24.7% overall against the 25 September mechanical completion date — the widest variance on the project, and one of the four fronts inside the electrical total, weighted at 15%, so it is not counted twice. Every substation foundation is complete, and the structural steel — the sole outstanding item — now carries verified dates for the first time: the 34.5 kV structure is fabricated and galvanized, the balance of fabricated material ships Monday 10 August, and delivery to site is due Saturday 15 August, verified at the fabricator's works. The support poles remain on a longer quoted lead time that has not been accepted; an alternative supplier's quotation is under evaluation, and the erection sequence is being planned to start from the 15 August delivery using the internal structures. Grounding installation around the substation perimeter is in progress. The overall percentage still reflects the 31 July tracker cut; an updated cut is required so the figure can move."
    },
    {
      "title": "Electrical — all fronts",
      "level": "Watch",
      "note": "Electrical progress is reported as one total across four fronts: 18.8% on completed units and 28.4% including verified work in progress, weighted LV and DC cable 45%, MV collection 22%, inverter stations 18% and the substation 15%. The inverter setting scope is complete: all 23 stations are set, anchored and welded; terminations stand at zero and are the next measure. MV collection advanced to 61.8% — two DC duct bores were completed on 7 and 8 August, the first closed units since 30 July, taking DC bores to 5 of 14. Insulation-resistance testing on 8 August returned 19 passes from 21 sections, including all four feeders into the substation; two sections require fault location. Cable plowing holds at 36 of 46 segments and has not moved in twelve working days — those ten segments are now the principal item between the project and a fully tested MV network."
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
      "note": "Fresh rows of foundation piles behind the installation equipment on the recently opened workfront, served by the completed internal road network (roads finished August 4). Pile installation stood at 29,308 of 31,352 (93.5%) when the photograph was taken on 3 August; the current basis is 29,586 (94.4%)."
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
    "basis": "Shift basis 10 hours per person per day, Monday to Saturday. Headcount is taken from the site board and is current to August 11, 2026. Days on which the site was fully stopped are excluded from the manhours.",
    "tiles": [
      {
        "label": "Personnel on site",
        "value": "258",
        "note": "Latest site-board headcount (Aug 11) — the highest of the project to date. Field labor plus management, quality and HSE."
      },
      {
        "label": "Peak headcount",
        "value": "258",
        "note": "Highest headcount on site to date (August 11)."
      },
      {
        "label": "Average headcount",
        "value": "198",
        "note": "Mean headcount across the construction period to date."
      },
      {
        "label": "Manhours to date",
        "value": "126,500",
        "note": "Total manhours worked from the start of construction on April 1 through August 11, at 10 h/day, Monday to Saturday."
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
        "d": "Aug 10",
        "c": 123919
      },
      {
        "d": "Aug 11",
        "c": 126499
      }
    ],
    "mix": {
      "day": "August 11, 2026",
      "total": 258,
      "rows": [
        {
          "trade": "Tracker assembly and piling",
          "people": 137,
          "color": "#0f7a52"
        },
        {
          "trade": "Module installation",
          "people": 62,
          "color": "#2769a8"
        },
        {
          "trade": "Electrical and substation",
          "people": 24,
          "color": "#b96f18"
        },
        {
          "trade": "Survey and crane support",
          "people": 9,
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
