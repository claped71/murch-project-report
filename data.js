'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated August 4, 2026 by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "August 4, 2026",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 55.5,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, electrical 14%, civil 10%. The electrical component covers all four electrical fronts — LV and DC cable, MV collection, inverter stations and the substation — combined into one total. Civil excludes the substation so it is not counted twice.",
    "statement": "Bulk earthworks are complete across Areas A to F and the perimeter is substantially closed. Tracker assembly held its required rate for a second consecutive day on Tuesday 4 August, completing 60 rows against the 60 per day needed to hold 30 August: 40 rows in the principal assembly area, a fourth consecutive day at or above forty, and 20 rows taking a smaller area to 65 of its 67 rows. Completed rows now stand at 1,172 of 2,486 (47.1%), of which 296 are released by the Owner's quality process; 1,314 remain. The day's most significant result was electrical: 1,956 linear feet of low-voltage and DC cable were installed in a single day — more than the two previous pull days combined — taking the cumulative pull to 2,837 linear feet, and the corrective works on all 23 inverter stations were completed. Module installation placed 3,168 against 4,213 per day required for 6 September, taking cumulative installation to 53,510 of 171,470 (31.2%). One crew held its output at 2,128 modules and set a new per-person best; the other placed 1,040 while opening a module workfront in a new area for the first time, so the shortfall reflects the number of released workfronts rather than crew productivity. Pile installation stands at 28,993 of 31,352 (92.5%) with 2,359 remaining; 110 tracker piles were driven on 4 August against the 786 per day now required to close the front around 7 August. That required rate has risen from 446 to 786 per day over the past week on a single active workfront, and the completion date requires re-forecasting. On the remaining electrical fronts, all 23 inverter stations are set, welded and now repaired, and none is yet terminated — termination is the measure that counts toward mechanical completion. Substation piers stand at 14 of 17, with the final three scheduled to pour on 5 August, after which every substation foundation is complete and structural steel is the sole outstanding item.",
    "note": null
  },
  "gates": [
    {
      "key": "piles",
      "name": "Foundation piles",
      "installed": 28993,
      "total": 31352,
      "unit": "piles",
      "forecast": "Aug 7, 2026",
      "status": "Below rate"
    },
    {
      "key": "trackers",
      "name": "Tracker rows (incl. purlins)",
      "installed": 1172,
      "total": 2486,
      "unit": "rows",
      "earned": 1172,
      "earnedPct": 47.1,
      "earnedLabel": "47.1% earned incl. rows in progress (1,172 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Below rate"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 53510,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Below rate"
    },
    {
      "key": "electrical",
      "name": "Electrical — total",
      "pctOnly": true,
      "gatePct": 17.3,
      "earnedPct": 27.3,
      "unit": "%",
      "earnedLabel": "27.3% earned incl. work in progress",
      "mix": "LV / DC installation 45% · MV collection 22% · Inverter stations 18% · Substation (SET) 15%",
      "forecast": "Oct 16, 2026",
      "status": "Below rate"
    }
  ],
  "earnedProgress": {
    "asOf": "Jul 30, 2026",
    "scopes": [
      {
        "scope": "Tracker rows",
        "unit": "rows",
        "gate": "946 / 2,486",
        "gatePct": 38.1,
        "inProgress": "85 rows part-built, all at step 3 of 5",
        "earnedPct": 40.4,
        "detail": "Areas E, EW and F all standing at step 3 of 5 — purlins installed, with damper, actuator, drive line and final torque outstanding."
      },
      {
        "scope": "Electrical — all fronts",
        "unit": "%",
        "gate": "16.7% of scope",
        "gatePct": 16.7,
        "inProgress": "MV 59.7% · 13 of 23 inverter stations set · 78 of 419 boxes",
        "earnedPct": 23.3,
        "detail": "LV and DC cable, MV collection, inverter stations and the substation combined."
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
      "note": "Supported by the current construction sequence: trackers complete Aug 30, modules Sep 6, LV/DC cable Sep 18. Holding the date requires the pile front to close in early August and the module installation front to reach full field rate."
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
        "c": 15730
      },
      {
        "d": "Jun 19",
        "v": 79,
        "c": 15809
      },
      {
        "d": "Jun 22",
        "v": 251,
        "c": 16060
      },
      {
        "d": "Jun 23",
        "v": 101,
        "c": 16161
      },
      {
        "d": "Jun 25",
        "v": 370,
        "c": 16531
      },
      {
        "d": "Jun 26",
        "v": 340,
        "c": 16871
      },
      {
        "d": "Jun 29",
        "v": 261,
        "c": 17132
      },
      {
        "d": "Jun 30",
        "v": 234,
        "c": 17366
      },
      {
        "d": "Jul 1",
        "v": 252,
        "c": 17618
      },
      {
        "d": "Jul 2",
        "v": 274,
        "c": 17892
      },
      {
        "d": "Jul 3",
        "v": 134,
        "c": 18026
      },
      {
        "d": "Jul 6",
        "v": 307,
        "c": 18333
      },
      {
        "d": "Jul 7",
        "v": 399,
        "c": 18732
      },
      {
        "d": "Jul 8",
        "v": 646,
        "c": 19378
      },
      {
        "d": "Jul 9",
        "v": 669,
        "c": 20047
      },
      {
        "d": "Jul 10",
        "v": 680,
        "c": 20727
      },
      {
        "d": "Jul 11",
        "v": 680,
        "c": 21407
      },
      {
        "d": "Jul 13",
        "v": 608,
        "c": 22015
      },
      {
        "d": "Jul 14",
        "v": 695,
        "c": 22710
      },
      {
        "d": "Jul 15",
        "v": 481,
        "c": 23191
      },
      {
        "d": "Jul 16",
        "v": 504,
        "c": 23695
      },
      {
        "d": "Jul 17",
        "v": 472,
        "c": 24167
      },
      {
        "d": "Jul 18",
        "v": 608,
        "c": 24775
      },
      {
        "d": "Jul 20",
        "v": 622,
        "c": 25397
      },
      {
        "d": "Jul 21",
        "v": 253,
        "c": 25650
      },
      {
        "d": "Jul 22",
        "v": 202,
        "c": 25852
      },
      {
        "d": "Jul 23",
        "v": 284,
        "c": 26136
      },
      {
        "d": "Jul 24",
        "v": 364,
        "c": 26500
      },
      {
        "d": "Jul 25",
        "v": 236,
        "c": 26736
      },
      {
        "d": "Jul 27",
        "v": 0,
        "c": 26736
      },
      {
        "d": "Jul 28",
        "v": 439,
        "c": 27175
      },
      {
        "d": "Jul 29",
        "v": 539,
        "c": 27714
      },
      {
        "d": "Jul 30",
        "v": 627,
        "c": 28341
      },
      {
        "d": "Jul 31",
        "v": 337,
        "c": 28678
      },
      {
        "d": "Aug 1",
        "v": 0,
        "c": 28678
      },
      {
        "d": "Aug 3",
        "v": 205,
        "c": 28883
      },
      {
        "d": "Aug 4",
        "v": 110,
        "c": 28993
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
        "c": 53510
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
      "planStartVal": 15730,
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
      "done": 94,
      "status": "Active",
      "note": "Areas A to F complete July 17. Area G cut/fill remains and follows completion of the Area G sediment basins."
    },
    {
      "activity": "Perimeter fence",
      "done": 95,
      "status": "On track",
      "note": "Areas A to F complete. Area G remainder and gates outstanding."
    },
    {
      "activity": "Sediment basins / environmental controls",
      "done": 83,
      "status": "On Track",
      "note": "Area G basins must finish before Area G cut/fill starts."
    },
    {
      "activity": "Internal access roads",
      "done": 72,
      "status": "Active",
      "note": "Target completion end of July. The road network now supports the material distribution plan."
    },
    {
      "activity": "Inverter station foundations",
      "done": 96,
      "status": "Active",
      "note": "22 of 23 station foundations complete; 13 stations carry their inverters, set and welded, pending terminations. The remaining foundation follows the opening of the second-phase area. Welding procedure approved July 21."
    },
    {
      "activity": "Substation (overall)",
      "done": 24.7,
      "status": "Active",
      "note": "Overall substation progress 23.7%, up from 21.7% on July 28 — civil 73.1%, structural 10.8%, electrical 6.0%. Piers complete including concrete: 11 of 17, with all 17 planned complete in the first week of August. Main power transformer set on its foundation July 24. Civil advanced 7.5 points on the pier run; the structural percentage is unchanged and is governed by steel fabrication and delivery."
    }
  ],
  "safety": {
    "headline": "Zero recordable injuries in 321 days. One first-aid case on 4 August, treated on site with no lost time.",
    "tiles": [
      {
        "label": "Recordable accidents",
        "value": "0",
        "note": "No fatality, lost-time injury, restricted-work or OSHA-recordable case on the project to date."
      },
      {
        "label": "Days without recordable",
        "value": "321",
        "note": "286 at the June close, plus 35 days to 4 August with no recordable reported."
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
    "note": "The injury record is clean: 321 days with no recordable, no lost time and no restricted work. The recurring hazard on this site is ground and vegetation rather than the work itself — most of June's property damage involved plant or loads moving over uneven or obstructed ground, a mower struck a fence concealed in vegetation, and the 4 August first-aid case occurred where tall grass hid uneven terrain. This is the same subject raised by the Owner on 1 August under reference MQ-20260801-0736, and the corrective action is being handled as one item with that response. The July monthly report is being compiled; June remains the audited basis."
  },
  "quality": {
    "headline": "Quality approval stands at 85.7% of executed piles, and 296 of 1,112 completed tracker rows are released by the Owner's quality process. The module release process begins this week.",
    "tiles": [
      {
        "label": "Piles executed",
        "value": "28,993",
        "note": "Current executed basis, 91.5% of project scope."
      },
      {
        "label": "Piles approved",
        "value": "24,751",
        "note": "86.3% of executed piles. The latest approval cut is dated July 27 and predates the five most recent production days; a refreshed cut is due."
      },
      {
        "label": "Awaiting approval",
        "value": "3,927",
        "note": "Open inspection fronts follow the active production areas. The main remaining pile area carries the bulk of the outstanding inspections."
      },
      {
        "label": "Owner approved — piles",
        "value": "6,836",
        "note": "The Owner approval record advanced this week for the first time since the early-July snapshot, on both piles and tracker rows."
      },
      {
        "label": "Tracker rows released",
        "value": "296 / 1,172",
        "note": "11.9% of the 2,486 rows in scope and 25.3% of the 1,172 built. Released rows feed the module installation front."
      },
      {
        "label": "Pile refusals recorded",
        "value": "242",
        "note": "0.9% of executed piles. Reinstallation and tap-down corrections are complete or in progress."
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
      "period": "Aug 5 – Aug 8",
      "items": [
        "Tracker assembly to hold 60 completed rows per day; the principal assembly area is 84.6% complete and the smaller area is two rows from completion, both targeted for closure this week.",
        "The third assembly area, still without a completed row after six working days, to begin closing out — it becomes the controlling front once the other two close.",
        "A third module workfront to open; two workfronts cannot carry 4,213 per day.",
        "Quality to begin the module release process and file a current release cut — none has been issued since 30 July.",
        "Final three substation piers poured, completing every substation foundation.",
        "Cable installation to hold the rate demonstrated on 4 August and grow the crew further; inverter terminations to begin.",
        "A re-forecast of the pile completion date, or additional plant committed to the active workfront and the final workfront opened."
      ]
    },
    {
      "period": "Aug 8 – Aug 15",
      "items": [
        "Pile installation to complete on the re-forecast basis, releasing the remaining tracker workfronts.",
        "Substation structural steel erection start, subject to the revised delivery programme — with all foundations complete, steel is the sole outstanding item.",
        "Tracker assembly at full multi-crew rate across four areas.",
        "Module installation at sustained full-field rate across three workfronts, with released rows kept ahead of the installation front.",
        "LV cabling extending from the first pulled sections into the adjacent areas, and the first inverter terminations reported.",
        "Wetland directional bore confirmed closed and MV plowing restarted on the ten open segments.",
        "Area G cut/fill following completion of the Area G basins, and the outstanding drain-commissioning signature to release the remaining perimeter fence."
      ]
    }
  ],
  "ownerActions": {
    "asOf": "Jul 30, 2026",
    "responseNote": "Days outstanding are counted to the publication date of this report. This register supports coordination and does not replace or vary any notice provision of the Agreement.",
    "items": [
      {
        "ref": "OA-01",
        "item": "Area G sequencing confirmation",
        "since": "Jul 3, 2026",
        "days": 27,
        "status": "Open",
        "blocks": "Programming of Area G cut and fill, which in turn releases the last pile workfront.",
        "detail": "Area G is released for pile driving and material distribution. Confirmation of the sediment basin completion sequence is required to programme the cut and fill."
      },
      {
        "ref": "OA-02",
        "item": "Refreshed defect count",
        "since": "Jul 6, 2026",
        "days": 24,
        "status": "Answered",
        "blocks": "Nothing further.",
        "detail": "RESOLVED — the July 30 quality sheet restates the defect position at 242, equal to 0.9% of executed piles, against the current executed basis. No further action is required unless the position changes."
      },
      {
        "ref": "OA-03",
        "item": "Owner approval log for inspected work",
        "since": "Jul 13, 2026",
        "days": 17,
        "status": "In progress",
        "blocks": "Certification of inspected work; the EPC record remains ahead of the approved position.",
        "detail": "MOVED THIS WEEK — the Owner approval log advanced for the first time since the early-July snapshot, from 6,682 to 6,836 piles and from 107 to 296 tracker rows. It still stands well behind the EPC record of 24,751 approved piles, so continued updating is required for the quality record to close out with production."
      },
      {
        "ref": "OA-04",
        "item": "Substation equipment delivery dates",
        "since": "Jul 17, 2026",
        "days": 13,
        "status": "Open",
        "blocks": "Firming the substation erection sequence on the interconnection path.",
        "detail": "Breakers and structural steel are the remaining controlling substation items. Delivery dates are requested so the sequence can be fixed against the pre-commissioning window."
      },
      {
        "ref": "OA-05",
        "item": "Interconnection readiness coordination",
        "since": "Jul 20, 2026",
        "days": 10,
        "status": "Open",
        "blocks": "Alignment of the October pre-commissioning programme.",
        "detail": "Utility witness testing and energization windows to be aligned with the pre-commissioning programme running September 14 to October 15."
      },
      {
        "ref": "OA-06",
        "item": "Area G change order signature",
        "since": "Jul 28, 2026",
        "days": 2,
        "status": "Open",
        "blocks": "Full release of the Area G pile workfront, the largest remaining pile quantity at 1,779.",
        "detail": "Signature is outstanding on the Area G change order. Piling is proceeding in the released portion; full release requires the signed instrument."
      },
      {
        "ref": "OA-07",
        "item": "Pile inspection records for review",
        "since": "Jul 6, 2026",
        "days": 24,
        "status": "In progress",
        "blocks": "Nothing at present; submitted progressively by area.",
        "detail": "EPC pile approval stands at 24,751 records, 87.3% of executed piles. The latest cut is dated July 27 and predates the three most recent production days. Records are submitted area by area for Owner review so the quality record closes with production."
      },
      {
        "ref": "OA-08",
        "item": "Decision on a combined racking and module quality release",
        "since": "Jul 30, 2026",
        "days": 0,
        "status": "Open",
        "blocks": "The module installation front, which is currently limited by release cadence rather than by installation capacity.",
        "detail": "A proposal has been submitted to carry out a single quality release covering both the racking and the module installation on a row, in place of two separate inspections. The EPC would retain full responsibility for the racking and would remove and reinstall modules at its own cost if a racking defect were identified afterwards. A decision is requested so that release cadence can keep pace with the build rate."
      }
    ]
  },
  "clientQueries": {
    "asOf": "Aug 5, 2026",
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
    "openingNote": "Nineteen queries logged to date. Five were raised on 4 August and are inside their response window.",
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
        "respondedISO": "2026-08-04"
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
      "note": "1,172 rows complete of 2,486 (47.1%) — the measure that governs the 30 August date — of which 296 are released through the Owner's quality process. 1,314 remain and 60 completed rows per day are required. 4 August completed 60 rows, exactly on rate for a second consecutive day: 40 in the principal assembly area, now 84.6% complete, and 20 taking a smaller area to 65 of its 67 rows. Partial rows are being reported but are NOT credited to progress while the assembly crews are trained to report against the fixed five-step ladder; the earned figure therefore equals the completed-row figure. Both of the currently producing areas are close to completion, which makes the third area — still without a completed row after six working days — the front that will govern the rate from next week. Release cadence remains the second constraint: no quality cut has been filed since 30 July."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "117,960 modules remain, with 4,213 per day required to hold 6 September. 4 August placed 3,168, below rate. Per-person productivity is not the constraint — one crew placed 2,128 modules at 133 each, a project best — but the other crew spent the day opening a module workfront in a new area for the first time, placing 1,040. The recent record reads 4,136, 1,780, 4,279 and 3,168 against a rising requirement, which is the signature of two workfronts being asked to carry a three-workfront rate. Material is not a constraint: deliveries are complete and 117,960 modules stand in stock. Released rows remain the second constraint — neither producing area carries any quality release, and the release process for modules begins this week."
    },
    {
      "title": "LV and DC installation — the pull has started",
      "level": "Priority",
      "note": "4 August was by a wide margin the strongest cable day of the project: 1,956 linear feet installed in a single day — 861 feet of homerun cable to the first inverter and 1,095 feet of DC trunk cable averaging 91 feet across twelve combiner boxes on three inverters — against 881 feet over the two previous pull days combined. Cumulative installation now stands at 2,837 linear feet. The crew grew from twelve to fifteen personnel and the additional resource converted directly into footage, which identifies the lever on this front. Box installation holds at 110 of 419 (26.3%) and quality inspections were closed in five blocks. Against 6,971 feet per day required for 18 September the day reached 28% of the rate, so the crew has to continue growing. Trunk cable and harness deliveries by air remain outstanding with arrival dates still to be confirmed."
    },
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "2,359 piles remain and 786 per day now closes the front around 7 August, over the three working days left. 4 August drove 110 tracker piles from a single active workfront, now 81.5% complete with 620 remaining, together with 41 tension piles and 14 combiner-box piles that sit outside the 31,352 scope. The required rate has risen from 446 to 535 to 617 to 786 per day within a week, which indicates a date that can no longer be defended by rate alone. A second pile crew has reduced to two personnel for a fourth consecutive day, leaving one area 36 piles from completion — under a single shift of work — and the final workfront of 1,468 piles has not yet opened. Either additional plant is committed or the completion date is re-forecast. Remaining piles are covered from quantities already received on site; a delivery reconciliation remains open."
    },
    {
      "title": "Substation",
      "level": "Watch",
      "note": "24.7% overall against the 25 September mechanical completion date — the widest variance on the project, and one of the four fronts inside the electrical total, weighted at 15%, so it is not counted twice. Piers stand at 14 of 17 with the final three scheduled to pour on 5 August, at which point every substation foundation is finished and structural steel becomes the sole outstanding item. The foundation subcontractor showed no personnel on the 5 August site record, so the pour requires confirmation. The structural percentage has not moved and remains governed by steel fabrication and delivery; a revised delivery programme has been requested from the fabricator and is outstanding."
    },
    {
      "title": "Electrical — all fronts",
      "level": "Watch",
      "note": "Electrical progress is reported as one total across four fronts: 17.3% on completed units and 27.3% including verified work in progress, weighted LV and DC cable 45%, MV collection 22%, inverter stations 18% and the substation 15%. The inverter setting scope is complete: all 23 stations are set, anchored, welded and, as of 4 August, repaired. None is terminated, and termination is the measure that counts toward mechanical completion; it is gated by the cable pull. Low-voltage cable reached 2,837 linear feet after a single-day best of 1,956 feet, against 6,971 per day required, with 110 of 419 boxes mounted and approximately 3,900 linear feet of aerial messenger wire installed that carries no take-off quantity and therefore earns nothing. MV collection holds at 59.7% for a seventh working day: plowing at 36 of 46 segments and directional boring at 17 of 20, with the wetland crossing now estimated to close on 5 August."
    }
  ],
  "material": [
    {
      "item": "Foundation piles",
      "delivered": "31,352",
      "pct": 100,
      "note": "DELIVERY COMPLETE — the full project quantity is on site with nothing outstanding. 3,011 piles stand in stock against the 3,011 still to place, so material does not constrain the pile front at any point to the early-August finish."
    },
    {
      "item": "PV modules",
      "delivered": "171,470",
      "pct": 100,
      "note": "DELIVERY COMPLETE — the full project quantity is on site with nothing outstanding. 131,323 modules in stock above the installed quantity, so material does not constrain the installation front through to the September 6 date."
    },
    {
      "item": "Tracker structures",
      "delivered": "Complete",
      "pct": 100,
      "note": "The tracker bill of material was confirmed complete on July 24 with one exception: 16 torque tubes identified as a short shipment, scheduled for delivery and awaiting confirmation of site receipt."
    },
    {
      "item": "Inverters",
      "delivered": "13 stations set",
      "pct": null,
      "note": "13 of 23 inverter stations set and welded on their foundations, with serial numbers logged. Deliveries continuing; LV and MV terminations follow placement and none has yet started."
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
      "src": "assets/photo-30.jpg",
      "date": "July 9, 2026",
      "title": "Foundation piles being driven in Area E",
      "note": "A pile driver setting foundations in Area E with the site team checking line and level against the string. Piles are the largest single quantity on the project at 31,352, and closing this front is what releases the tracker and module work behind it."
    },
    {
      "src": "assets/photo-32.jpg",
      "date": "July 9, 2026",
      "title": "Damper replacement on erected tracker rows, Area A",
      "note": "GreenSol crews replacing dampers on rows already erected. This is the work that currently governs how quickly completed rows can be presented for the Owner’s quality release, and it is carried out at GreenSol’s own cost."
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
    "Bulk earthworks — cut and fill": {
      "done": 94,
      "status": "Active",
      "note": "Areas A to F complete July 17. Area G cut/fill remains and follows completion of the Area G sediment basins.",
      "why": "internal sheet reports 100% against released areas only; Area G is still outstanding"
    },
    "Perimeter fence": {
      "done": 95,
      "status": "On track",
      "note": "Areas A to F complete. Area G remainder and gates outstanding.",
      "why": "source note is fully redacted (carries the fencing subcontractor name)"
    },
    "Internal access roads": {
      "note": "Target completion end of July. The road network now supports the material distribution plan.",
      "why": "source note quotes an internal week-number baseline"
    },
    "Inverter station foundations": {
      "done": 96,
      "note": "22 of 23 station foundations complete; 13 stations carry their inverters, set and welded, pending terminations. The remaining foundation follows the opening of the second-phase area. Welding procedure approved July 21.",
      "why": "internal 86% is the broader PS-foundation package; the station count is the measure the Owner tracks (station matrix, Jul 30)"
    },
    "Substation (overall)": {
      "note": "Overall substation progress 23.7%, up from 21.7% on July 28 — civil 73.1%, structural 10.8%, electrical 6.0%. Piers complete including concrete: 11 of 17, with all 17 planned complete in the first week of August. Main power transformer set on its foundation July 24. Civil advanced 7.5 points on the pier run; the structural percentage is unchanged and is governed by steel fabrication and delivery.",
      "why": "clarifies that the 11-of-17 ratio is the pier front, not overall substation progress"
    }
  },
  "workforce": {
    "basis": "Shift basis 10 hours per person per day, Monday to Saturday. Headcount is taken from the site board and is current to July 20, 2026. Days on which the site was fully stopped are excluded from the manhours.",
    "tiles": [
      {
        "label": "Personnel on site",
        "value": "248",
        "note": "Latest site-board headcount (Aug 5). Field labor plus management, quality and HSE."
      },
      {
        "label": "Peak headcount",
        "value": "253",
        "note": "Highest headcount on site to date (July 15)."
      },
      {
        "label": "Average headcount",
        "value": "194",
        "note": "Mean headcount across the construction period to date."
      },
      {
        "label": "Manhours to date",
        "value": "112,900",
        "note": "Total manhours worked from the start of construction on April 1 through August 4, at 10 h/day, Monday to Saturday."
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
        "d": "Aug 4",
        "c": 112939
      }
    ],
    "mix": {
      "day": "August 5, 2026",
      "total": 248,
      "rows": [
        {
          "trade": "Tracker assembly and piling",
          "people": 129,
          "color": "#0f7a52"
        },
        {
          "trade": "Module installation",
          "people": 49,
          "color": "#2769a8"
        },
        {
          "trade": "Electrical and substation",
          "people": 36,
          "color": "#b96f18"
        },
        {
          "trade": "Civil and fencing",
          "people": 3,
          "color": "#7b4fa8"
        },
        {
          "trade": "EPC management, quality and HSE",
          "people": 28,
          "color": "#66716d"
        },
        {
          "trade": "Unallocated on board",
          "people": 3,
          "color": "#0f7a52"
        }
      ]
    }
  }
};
