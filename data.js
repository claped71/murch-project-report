'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated August 18, 2026 by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "August 18, 2026",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 69.6,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, electrical 14%, civil 10%. The electrical component covers all four electrical fronts — LV and DC cable, MV collection, inverter stations and the substation — combined into one total. Civil excludes the substation so it is not counted twice.",
    "statement": "The reporting period covers Tuesday 18 August, and two controlling fronts moved decisively. At the substation, structural erection is underway: the discipline advanced from 11.1% to 18.4% as the received steel is assembled, the high-voltage breaker equipment was received and unloaded, and the substation composite moved from 26.3% to 30.7% — the widest variance on the project is closing for the first time. Module installation placed 4,904 against 4,899 required — the second consecutive day above the required rate, with the eastern contractor at 2,847, over its daily threshold both days; the western crew's remaining scope is down to roughly 1,100 modules and its transition east is being scheduled. Tracker assembly added 62 rows with all three crews closing — 1,781 of 2,486 (71.6%) against 71 per day now required — and one crew has completed its entire share of the largest area, so the remaining assembly balance increasingly depends on completion of the outstanding pile positions; confirmation of the pile-type delivery is being pursued as the priority action, with installation suspended an eighth day. The approved MV insulation-resistance test reports were formally transmitted to the Owner (GS-US-MURCH-TMT-Q-0019), and the first MV cable pull into an inverter station began. LV cable reporting for 16-18 August is being restored; the cumulative stands at 24,375 linear feet. Overall completion moves to 69.6% from 68.2%.",
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
      "installed": 1781,
      "total": 2486,
      "unit": "rows",
      "earned": 1785.5,
      "earnedPct": 71.8,
      "earnedLabel": "71.8% earned incl. rows in progress (1,786 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Below rate"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 93101,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Below rate"
    },
    {
      "key": "electrical",
      "name": "Electrical — total",
      "pctOnly": true,
      "gatePct": 25,
      "earnedPct": 34.2,
      "unit": "%",
      "earnedLabel": "34.2% earned incl. work in progress",
      "mix": "LV / DC installation 45% · MV collection 22% · Inverter stations 18% · Substation (SET) 15%",
      "forecast": "Oct 16, 2026",
      "status": "Below rate"
    }
  ],
  "earnedProgress": {
    "asOf": "Aug 18, 2026",
    "scopes": [
      {
        "scope": "Tracker rows",
        "unit": "rows",
        "gate": "1,781 / 2,486",
        "gatePct": 71.6,
        "inProgress": "Partial-row credit suspended — open rows reported by ladder step, not credited",
        "earnedPct": 71.8,
        "detail": "Partial-row credit resumed on 7 August after two consecutive days of step-level reporting from the assembly crews. Earned credits open rows at their verified ladder step; the completion gate continues to count finished rows only and no date moves on earned progress."
      },
      {
        "scope": "Electrical — all fronts",
        "unit": "%",
        "gate": "25% of scope",
        "gatePct": 25,
        "inProgress": "MV 74.7% · 23 of 23 inverter stations set · 120 of 419 boxes · 24,375 lf of cable",
        "earnedPct": 34.2,
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
      "note": "RE-RATED from On target. The date follows mechanical completion, which is itself at risk, and carries three independent constraints of its own: the substation stands at 25.9% overall with structural at 10.8% and its steel not due on site until 15 August; the switchgear breakers are still awaited with several committed dates falling after the gate; and the 138 medium-voltage terminations stand at zero against coupling lead times quoted at around 40 weeks by every supplier approached. Insulation-resistance testing on 8 August was a genuine advance — 19 passes from 21 sections including all four feeders into the substation — but testing is not termination. Pre-commissioning remains programmed to complete by 13 October."
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
      },
      {
        "d": "Aug 11",
        "v": 0,
        "c": 29586
      },
      {
        "d": "Aug 12",
        "v": 0,
        "c": 29586
      },
      {
        "d": "Aug 13",
        "v": 0,
        "c": 29586
      },
      {
        "d": "Aug 14",
        "v": 0,
        "c": 29586
      },
      {
        "d": "Aug 15",
        "v": 0,
        "c": 29586
      },
      {
        "d": "Aug 17",
        "v": 0,
        "c": 29586
      },
      {
        "d": "Aug 18",
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
      },
      {
        "d": "Aug 11",
        "v": 60,
        "c": 1414
      },
      {
        "d": "Aug 12",
        "v": 89,
        "c": 1503
      },
      {
        "d": "Aug 13",
        "v": 97,
        "c": 1600
      },
      {
        "d": "Aug 14",
        "v": 65,
        "c": 1665
      },
      {
        "d": "Aug 15",
        "v": 0,
        "c": 1665
      },
      {
        "d": "Aug 17",
        "v": 54,
        "c": 1719
      },
      {
        "d": "Aug 18",
        "v": 62,
        "c": 1781
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
        "c": 93101
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
      "done": 25.9,
      "status": "Active",
      "note": "25.9% (Aug 11 cut) — civil 81.6%, structural 10.8%. Field civil is complete; structural is the blocker."
    }
  ],
  "safety": {
    "headline": "Zero recordable injuries in 328 days. Two first-aid cases in August, neither recordable. The 7 August case — a worker struck by a slipping torque tube during racking installation — is internally rated Serious for its potential, and its corrective actions are open.",
    "tiles": [
      {
        "label": "Recordable accidents",
        "value": "0",
        "note": "No fatality, lost-time injury, restricted-work or OSHA-recordable case on the project to date."
      },
      {
        "label": "Days without recordable",
        "value": "328",
        "note": "286 at the June close, plus 42 days to 11 August with no recordable reported."
      },
      {
        "label": "Lost days",
        "value": "0",
        "note": "Frequency, incidence and severity rates remain zero."
      },
      {
        "label": "First-aid cases",
        "value": "2",
        "note": "4 August: an ankle sprain where tall grass concealed uneven ground; treated on site. 7 August (rated Serious): during racking installation a torque tube slipped while being placed onto its pile support and struck the worker on the helmet and shoulder. First aid on site, then hospital evaluation including a CT scan: minor injuries, cleared to return to work, and sent home for the remainder of the day as a precaution. Notification 20260807_ACC_001 was issued within 48 hours."
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
    "note": "The injury record is clean: 328 days with no recordable, no lost time and no restricted work. The 7 August first-aid case is nonetheless treated as significant: a torque tube slipping out of control onto a worker's helmet during racking installation is a work-method event with serious potential, and it is rated accordingly — the investigation and tube-handling corrective actions are open with the racking crews, whose manning is currently increasing. The background hazard remains ground and vegetation: most of June's property damage involved plant or loads moving over uneven or obstructed ground, a mower struck a fence concealed in vegetation, and the 4 August first-aid case occurred where tall grass hid uneven terrain — the same subject raised by the Owner on 1 August under reference MQ-20260801-0736, with the corrective action handled as one item with that response. The July monthly report is being compiled; June remains the audited basis."
  },
  "quality": {
    "headline": "The quality release process moved substantially on 17 August: 2,540 foundation piles, 67 tracker rows (closing one assembly area complete) and 4,446 modules were released through the EPC quality process — the first release cut in twelve working days. EPC pile approval now stands at 92.2% of executed. Owner acceptance stands at 296 of 1,719 completed tracker rows; converting EPC releases into Owner acceptance is the controlling quality action.",
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
        "value": "296 / 1,781",
        "note": "11.9% of the 2,486 rows in scope and 16.6% of the 1,781 built. Released rows feed the module installation front."
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
      "period": "Aug 17 – Aug 22",
      "items": [
        "Module installation held at or above the required ~4,900 per day, with the eastern contractor sustaining its daily threshold — first achieved Monday with 2,730 — and the western crew completing its western scope and transitioning east to reinforce.",
        "Tracker assembly accelerated to the 70 rows per day the 30 August completion now requires, with both crews converting daily in the largest remaining area.",
        "Receipt of the required pile-type delivery confirmed, survey support remobilised, and pile installation restarted — the remaining rows in the northern areas depend on it.",
        "Substation deliveries converted into erection: the structural steel received and the ground-assembly erection sequence begun, following the high-voltage breaker equipment received 18 August and the precast cable trench received 15 August.",
        "Additional LV installation capacity mobilised and producing, with daily per-line reporting of feet hung, harnesses and boxes; the first medium-voltage line requires approximately 3,250 feet per day to be complete and connected by the end of August.",
        "The two remaining trunk bores advanced to closure and cable plowing held at a minimum of one segment per day across the eight remaining segments.",
        "Monday’s quality releases converted into Owner acceptance, and the release cadence held weekly.",
        "Responses issued to the queries falling due this week (18–21 August), including the engineer-of-record confirmation for the inverter-pile shim remediation."
      ]
    },
    {
      "period": "Aug 24 – Aug 29",
      "items": [
        "Tracker assembly closing on the 30 August completion — the remaining balance concentrated in the largest area and in the northern areas released by the pile restart.",
        "Pile installation completed, or carrying a dated finish inside the month — 1,766 piles represent roughly nine working days at the demonstrated installation rate.",
        "Module installation sustained at or above the required rate with both installation crews concentrated in the eastern areas.",
        "Substation steel erection in full sequence, precast trench installation progressing, and the remaining substation electrical equipment — station-service transformer, grounding reactor and metering transformers — received against the 30 August commitment.",
        "LV installation at multi-crew rate: the first medium-voltage line cable complete and connected, harness installation scaling as material deliveries land, and the second line’s cable opened.",
        "The trunk-bore scope closed and the plowing tail reduced toward completion, with the termination investigation on the tested cable section concluded.",
        "Quality releases and Owner acceptance progressing week on week across piles, tracker rows and modules ahead of the September completion dates."
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
    "asOf": "Aug 14, 2026",
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
    "openingNote": "Twenty-five queries logged to date. A new item of 18 August — utility fiber and secondary power services to the control building — is in review with the engineering and utility-coordination leads, due 25 August. On the cable-records item due 20 August, the approved MV insulation-resistance test reports were formally transmitted on 18 August (GS-US-MURCH-TMT-Q-0019) with the balance of records following. The shim-remediation item remains open pending the engineer-of-record confirmation, due 21 August.",
    "responseNote": "There is no sign-in and no account. Sending the query is all that is required — you keep a copy in your own Sent items and the reference is your record. Each query is added to this register at the next daily publication. Responses are issued by email; the register records the date a response was issued and the working days taken, and an item shows as answered once that response has been made. If an item here says open and you have already had an answer, tell us and it will be corrected.",
    "noticeNote": "This register supports day-to-day information flow. It does not replace or vary the formal correspondence provisions of the Agreement.",
    "items": [
      {
        "ref": "MQ-20260818-0955",
        "subject": "Utility fiber and secondary power services to the control building \u2014 design, utility coordination and construction responsibility",
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
      "title": "Tracker assembly and quality release",
      "level": "Priority",
      "note": "1,781 rows complete of 2,486 (71.6%) — the measure that governs the 30 August date — of which 296 carry Owner acceptance; earned progress stands at 71.8%. Tuesday added 62 rows with all three crews closing, against 71 per day required over the 10 working days remaining. The largest remaining area has passed its halfway point, and one crew has completed its entire share there — the remaining balance is therefore increasingly concentrated in the northern areas, which depend on completion of the outstanding pile positions. Confirmation of the pile-type delivery is the controlling action; Owner acceptance remains at the 30 July cut and converting the EPC releases is the parallel priority."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "78,369 modules remain, with 4,899 per day required to hold 6 September. Tuesday placed 4,904 — the second consecutive day above the required rate — with the eastern contractor at 2,847, over its daily threshold both days, and the western crew adding 2,028 with its remaining scope down to roughly 1,100 modules. The immediate management action is the western crew's transition east, being scheduled so no installation capacity idles as the western scope completes. The first panels were also placed in the northern areas (29, on newly completed rows)."
    },
    {
      "title": "LV and DC installation — the pull has started",
      "level": "Priority",
      "note": "Cumulative installation stands at 24,375 of 274,720 linear feet (8.9%), last reported Saturday 15 August — when the line produced 2,805 feet together with the first harness installations (13 trackers), 207 support brackets and 471 hangers. <strong>Restoring the daily reporting for 16-18 August is the immediate action</strong>, alongside the mobilisation of the additional contracted installation capacity: the requirement now stands at approximately 9,300 feet per day to 18 September, well above single-crew capacity. The programme continues to target the first medium-voltage line complete and connected by the end of August."
    },
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "1,766 piles remain and installation is suspended an eighth working day pending delivery of a specific pile type; obtaining written confirmation of that delivery is the priority action, with survey support remobilising on material arrival. The dependency has widened: one assembly crew has completed its share of the largest area and its remaining rows sit in the northern areas, which require these piles — so the pile restart now directly protects the 30 August assembly completion. A first quality release of 2,540 piles was issued in the northern area on 17 August."
    },
    {
      "title": "Substation",
      "level": "Watch",
      "note": "30.7% overall on the 19 August cut — and the variance is closing for the first time: <strong>structural erection is underway, advancing from 11.1% to 18.4%</strong> as the received steel is assembled, with electrical at 9.1% following receipt of the high-voltage breaker equipment on 18 August. Civil stands at 86.3%. The remaining substation equipment — station-service transformer, grounding reactor and metering transformers — holds its 30 August delivery commitment, and an alternative source for the support poles remains under evaluation with a supplier meeting Friday. The focus is now sustaining a daily erection rhythm through month-end."
    },
    {
      "title": "Electrical — all fronts",
      "level": "Watch",
      "note": "Electrical progress is reported as one total across four fronts: 25.0% on completed units and 34.2% including verified work in progress. The approved MV insulation-resistance test reports were formally transmitted to the Owner on 18 August (GS-US-MURCH-TMT-Q-0019, with the updated master list), and the first MV cable pull into an inverter station began. Cable plowing holds 38 of 46 segments and the two trunk bores remain the drilling scope; the verification excavation on the earlier failed test section found no physical damage, moving that investigation to the terminations. The inverter setting scope is complete; the manufacturer's formal technical letter on the support condition is being obtained."
    }
  ],
  "material": [
    {
      "item": "Foundation piles",
      "delivered": "31,352",
      "pct": 100,
      "note": "The delivered stock does not currently cover the remaining rows by pile type: installation is suspended pending a specific type, whose delivery is scheduled for Monday 17 August. Stock of other pile types stands on site."
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
    "basis": "Shift basis 10 hours per person per day, Monday to Saturday. Headcount is taken from the site board and the EHS headcount record, current to August 17, 2026. Days on which the site was fully stopped are excluded from the manhours.",
    "tiles": [
      {
        "label": "Personnel on site",
        "value": "215",
        "note": "Latest site-board headcount (Aug 18). Field labor plus management, quality and HSE."
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
        "value": "140,300",
        "note": "Total manhours worked from the start of construction on April 1 through August 18, at 10 h/day, Monday to Saturday."
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
        "d": "Aug 18",
        "c": 140332
      }
    ],
    "mix": {
      "day": "August 18, 2026",
      "total": 215,
      "rows": [
        {
          "trade": "Tracker assembly and piling",
          "people": 131,
          "color": "#0f7a52"
        },
        {
          "trade": "Module installation",
          "people": 38,
          "color": "#2769a8"
        },
        {
          "trade": "Electrical and substation",
          "people": 21,
          "color": "#b96f18"
        },
        {
          "trade": "Survey & Crane",
          "people": 0,
          "color": "#7b4fa8"
        },
        {
          "trade": "EPC management, quality and HSE",
          "people": 24,
          "color": "#66716d"
        },
        {
          "trade": "Support / environmental",
          "people": 1,
          "color": "#0f7a52"
        }
      ]
    }
  }
};
