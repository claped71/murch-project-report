'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated August 1, 2026 by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "August 1, 2026",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 52.8,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, electrical 14%, civil 10%. The electrical component covers all four electrical fronts — LV and DC cable, MV collection, inverter stations and the substation — combined into one total. Civil excludes the substation so it is not counted twice.",
    "statement": "Bulk earthworks are complete across Areas A to F and the perimeter is substantially closed. The week closed with one clear step forward and one weak Saturday. The step forward is on the low-voltage front: on August 1 the first measured cable footage of the project was placed — 478 linear feet of DC cable in Area A on four combiner boxes of the first inverter — alongside 1,083 linear feet of messenger wire and seven further box installations, taking box mounting to 110 of 419. That scope had reported zero installed cable since it opened, so the number is small against the 6,689 feet per day now required for September 18, but the method is proven in the field and the front is live. Pile installation stands at 91.5% with 2,674 left to place; no pile quantity was filed on August 1, so the rate required to close the front around August 7 has risen to 535 per day over the five working days remaining. Module installation reached 46,063 of 171,470 (26.9%). July 31 was the first day the module front met its required rate — 4,136 placed against 4,104 needed, with output per installer at 84 modules — but August 1 returned 1,780 with both crews on site at 37 modules per installer, so the required rate stands at 4,180 per day. Sixth-day productivity, rather than crew availability, is the variable to address. Tracker assembly remains the controlling front: completed rows stand at 1,026 of 2,486 (41.3%), of which 296 are released by the Owner's quality process, and 61 completed rows per day are required to hold August 30. One assembly crew closed 40 rows on August 1 — its second consecutive 40-row day — while the other two crews closed none. Including the physical work standing in 99 rows that are built but not finished, earned progress is 1,097 row-equivalents, or 44.1%. Those open rows sit across three areas and three steps of the five-step ladder: twenty are in final torque and quality presentation and are the nearest completions available, and a new assembly front opened in a further area. On the electrical fronts the main power transformer is set, 18 of 23 inverter stations are placed and welded pending terminations, and substation piers stand at 14 of 17 with the remainder scheduled for completion on August 4, at which point every substation foundation is finished."
  },
  "gates": [
    {
      "key": "piles",
      "name": "Foundation piles",
      "installed": 28678,
      "total": 31352,
      "unit": "piles",
      "forecast": "Aug 7, 2026",
      "status": "Below rate"
    },
    {
      "key": "trackers",
      "name": "Tracker rows (incl. purlins)",
      "installed": 1026,
      "total": 2486,
      "unit": "rows",
      "earned": 1096.6,
      "earnedPct": 44.1,
      "earnedLabel": "44.1% earned incl. rows in progress (1,097 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Below rate"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 46063,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Below rate"
    },
    {
      "key": "electrical",
      "name": "Electrical — total",
      "pctOnly": true,
      "gatePct": 16.9,
      "earnedPct": 25.4,
      "unit": "%",
      "earnedLabel": "25.4% earned incl. work in progress",
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
        "c": 46063
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
    "headline": "Zero recordable accidents. 204 days without a lost-time injury.",
    "tiles": [
      {
        "label": "Recordable accidents",
        "value": "0",
        "note": "No fatalities, lost-time, restricted-work or medical-treatment cases to date."
      },
      {
        "label": "Days without LTI",
        "value": "204",
        "note": "No lost-time injury reported on the project."
      },
      {
        "label": "Lost days",
        "value": "0",
        "note": "Frequency, incidence and severity rates remain zero."
      },
      {
        "label": "First-aid cases",
        "value": "1",
        "note": "One first-aid case, recorded in May."
      },
      {
        "label": "Safety observations YTD",
        "value": "76",
        "note": "48 unsafe conditions, 26 unsafe behaviors, 1 near miss, 1 first-aid case — leading-indicator reporting."
      },
      {
        "label": "Safety orientations",
        "value": "155",
        "note": "Site inductions completed."
      },
      {
        "label": "Toolbox talks",
        "value": "26",
        "note": "Including coordination meetings and Owner safety visits."
      }
    ],
    "note": "Reporting of unsafe conditions and behaviors increased in May, which is the intended direction for a leading-indicator program. All open observations are tracked to closure."
  },
  "quality": {
    "headline": "Quality approval stands at 86.3% of executed piles, and 296 of 1,026 completed tracker rows are released by the Owner's quality process. No approval cut has been issued since July 30.",
    "tiles": [
      {
        "label": "Piles executed",
        "value": "28,678",
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
        "value": "296 / 1,026",
        "note": "11.9% of the 2,486 rows in scope and 28.8% of the 1,026 built. Released rows feed the module installation front."
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
      "period": "Aug 3 – Aug 5",
      "items": [
        "Pile installation at 535/day to close the front around August 7; 2,674 remain and two areas close within one shift each.",
        "Tracker assembly at 61 rows/day. Twenty rows are in final torque and quality presentation and should convert first; sixty-eight more sit one step behind them.",
        "Quality release of completed rows — no approval cut has been issued since July 30 and one is now due, together with a decision on combining the racking and module inspections into a single release.",
        "Module installation back to 4,214/day with both installation crews at full strength on every working day.",
        "LV cable installation to build on the first 478 feet — 6,689 lf/day required for September 18. Crew strength on the cable pull is the constraint.",
        "Final three substation piers drilled and poured, completing every substation foundation on August 4.",
        "Final five inverter stations placed and welded, completing the set of 23.",
        "Wetland directional bore to close; MV cable plowing to restart on the ten open segments."
      ]
    },
    {
      "period": "Aug 5 – Aug 10",
      "items": [
        "Pile installation forecast to complete around August 7, releasing the remaining tracker workfronts.",
        "Substation structural steel erection start, subject to the revised delivery programme — with all foundations complete, steel is the sole outstanding item.",
        "Inverter station terminations to begin on the placed stations; none of the 23 is yet terminated.",
        "Area A LV cabling extending from the first pulled section into the adjacent areas.",
        "Tracker assembly at full multi-crew rate across four areas, with the open-row backlog cleared.",
        "Module installation at sustained full-field rate, with released rows kept ahead of the installation front.",
        "Second-phase pile workfront (Area D) opening — slab demolition complete.",
        "Area G cut/fill following completion of the Area G basins."
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
    "asOf": "Jul 30, 2026",
    "routing": {
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
    "openingNote": "No queries raised yet.",
    "responseNote": "There is no sign-in and no account. Sending the query is all that is required — you keep a copy in your own Sent items and the reference is your record. Each query is added to this register at the next daily publication. Responses are issued by email; the register records the date a response was issued and the working days taken, and an item shows as answered once that response has been made. If an item here says open and you have already had an answer, tell us and it will be corrected.",
    "noticeNote": "This register supports day-to-day information flow. It does not replace or vary the formal correspondence provisions of the Agreement.",
    "items": [
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
        "status": "Open",
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
        "assignedTo": "Construction Manager"
      },
      {
        "ref": "MQ-20260804-0724",
        "subject": "Protective caps on conduit ends",
        "area": "LV and DC electrical",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-04",
        "dueISO": "2026-08-11",
        "status": "Open",
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
        "status": "Open",
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
        "respondedISO": "2026-08-03",
        "status": "Open",
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
        "area": "Quality and inspection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-08-01",
        "dueISO": "2026-08-07",
        "respondedISO": "2026-08-03",
        "status": "Open",
        "assignedTo": "Construction Manager"
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
        "ref": "MQ-20260731-0759",
        "subject": "Easement staking on the MV route east of the substation, and confirmation that cable is installed within that easement",
        "area": "MV collection",
        "raisedBy": "James Burnett",
        "raisedISO": "2026-07-31",
        "dueISO": "2026-08-07",
        "status": "Open",
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
        "status": "Open",
        "assignedTo": "Construction Manager"
      }
    ]
  },
  "focus": [
    {
      "title": "Tracker assembly and quality release",
      "level": "Priority",
      "note": "1,026 rows complete of 2,486 (41.3%) — the measure that governs the August 30 date — of which 296 are released through the Owner's quality process. 1,460 rows remain and 61 completed rows per day are required. One assembly crew closed 40 rows on August 1, its second consecutive 40-row day and the only completions filed on the project that day; the other two crews closed none. A further 99 rows are built but not finished, across three areas and three steps of the five-step ladder: 68 at step 3 with purlins installed, 20 at step 4 in final torque and quality presentation, and 11 at step 2 on a newly opened assembly front. On the fixed ladder those rows carry 70.6 row-equivalents, so earned progress is 1,097 of 2,486, or 44.1%. Eighty-eight of the 99 open rows sit with the two crews that filed no completions. Release cadence remains the second constraint and no approval cut has been issued since July 30."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "125,407 modules remain, with 4,180 per day required to hold September 6. July 31 placed 4,136 — the first day at or above the required rate — with both installation crews exceeding 2,000 and output per installer at 84 modules. August 1 returned 1,780, with both crews present and 48 installers producing 37 each. The variable is sixth-day productivity rather than crew availability, and it is worth understanding before further resource is added. The Monday headcount board carries 43 installers, five fewer than Saturday. Material is not a constraint: deliveries are complete and 125,407 modules stand in stock. Released rows remain the second constraint — recent output has gone into an area that carries no quality release."
    },
    {
      "title": "LV and DC installation — the pull has started",
      "level": "Priority",
      "note": "The first measured cable footage on the project was placed on August 1: 478 linear feet of DC cable in Area A, on four combiner boxes of the first inverter. The same crew installed 1,083 linear feet of messenger wire in an adjacent sub-area, set hangers in two others, and mounted seven further boxes, taking box installation to 110 of 419 (26.3%). Against 6,689 feet per day required for September 18 the footage placed is small — roughly 7% of a single day — but this scope had reported zero installed cable since it opened and the method is now demonstrated in the field. The binding constraint is crew size: the cable pull is currently carried by six labourers, and additional resource has been requested. Trunk cable and harness deliveries by air remain outstanding with arrival dates still owed."
    },
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "2,674 piles remain and 535 per day now closes the front around August 7, up from 446, because no pile quantity was filed on August 1 and a working day passed without a record. The main remaining area holds 935 and has moved from 47% to 72% over the preceding three days. Two areas are within a single shift of completion and the second-phase area opens in early August. Remaining piles are covered from quantities already received on site; a delivery reconciliation is open and the confirmed count is expected early next week."
    },
    {
      "title": "Substation",
      "level": "Watch",
      "note": "24.7% overall against the September 25 mechanical completion date — the widest variance on the project, and one of the four fronts inside the electrical total, weighted at 15%, so it is not counted twice. Piers stand at 14 of 17 with the final three scheduled to be drilled and poured by August 4, at which point every substation foundation is complete and structural steel is the sole outstanding item. No substation crew worked on August 1. The structural percentage has not moved and remains governed by steel fabrication and delivery; a revised delivery programme has been requested from the fabricator and is outstanding."
    },
    {
      "title": "Electrical — all fronts",
      "level": "Watch",
      "note": "Electrical progress is reported as one total across four fronts: 16.9% on completed units and 25.4% including verified work in progress, weighted LV and DC cable 45%, MV collection 22%, inverter stations 18% and the substation 15%. The completed-unit figure moved for the first time on the LV line with the 478 feet placed. Inverter stations stand at 18 of 23 placed and welded with the final five due at the start of next week; none is yet terminated, and termination is the measure that counts toward mechanical completion. MV collection holds at 59.7%: cable plowing at 36 of 46 segments and directional bores at 17 of 20 have not moved for five days, with the full boring crew committed to a single wetland crossing advanced deliberately slowly to avoid a drilling-fluid surface release. That crossing is expected to close over the weekend, after which the plough should return to the ten open segments."
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
        "value": "243",
        "note": "Latest site-board headcount (Aug 3). Field labor plus management, quality and HSE."
      },
      {
        "label": "Peak headcount",
        "value": "253",
        "note": "Highest headcount on site to date (July 15)."
      },
      {
        "label": "Average headcount",
        "value": "187",
        "note": "Mean headcount across the construction period to date."
      },
      {
        "label": "Manhours to date",
        "value": "108,000",
        "note": "Total manhours worked from the start of construction on April 1 through August 1, at 10 h/day, Monday to Saturday."
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
      }
    ],
    "mix": {
      "day": "August 3, 2026",
      "total": 243,
      "rows": [
        {
          "trade": "Tracker assembly and piling",
          "people": 128,
          "color": "#0f7a52"
        },
        {
          "trade": "Module installation",
          "people": 43,
          "color": "#2769a8"
        },
        {
          "trade": "Electrical and substation",
          "people": 42,
          "color": "#b96f18"
        },
        {
          "trade": "Civil and fencing",
          "people": 5,
          "color": "#7b4fa8"
        },
        {
          "trade": "EPC management, quality and HSE",
          "people": 25,
          "color": "#66716d"
        }
      ]
    }
  }
};
