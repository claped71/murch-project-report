'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset.
   Generated July 29, 2026 by tools/sync.js from the construction dashboard. Do not hand-edit derived blocks. */
window.MURCH_REPORT = {
  "meta": {
    "project": "Murch Solar Project",
    "location": "Lawrence, Van Buren County, Michigan",
    "capacityNote": "Utility-scale photovoltaic generating facility",
    "phase": "Construction — Mechanical installation",
    "asOf": "July 29, 2026",
    "reportNo": "Construction Progress Report",
    "preparedBy": "GreenSol",
    "client": "Heelstone Renewable Energy"
  },
  "headline": {
    "overall": 46.1,
    "weights": {
      "piles": 0.28,
      "trackers": 0.22,
      "modules": 0.26,
      "electrical": 0.14,
      "civil": 0.1
    },
    "overallNote": "Weighted physical completion. Weighting: piles 28%, trackers 22%, modules 26%, LV/DC cable 14%, civil and substation 10%.",
    "statement": "Bulk earthworks are complete across Areas A to F and the perimeter is substantially closed. Pile installation stands at 88.4%, with 3,638 piles left to place; July 29 was the first day since the mid-week weather stop on which pile output exceeded the rate required to close the front in early August, and two of the pile areas are now within a day of completion. The second-phase pile area opens in early August with its slab demolition complete. Tracker assembly and module installation remain the controlling fronts through August and both are still below the pace required to hold their completion dates; on tracker assembly the binding constraint has shifted from build rate to quality release, with 310 completed rows now awaiting release. Completed tracker rows stand at 916 of 2,486 (36.8%); including the physical work standing in 136 rows that are built but not yet finished, earned progress is 966 row-equivalents, or 38.9%, measured on a fixed five-step weighted ladder adopted this week. Module installation held above 3,000 per day for a fifth consecutive working day and the second module area is complete, opening a new installation front. The main power transformer is set on its foundation and the inverter stations in Areas A and C are placed, pending terminations. The LV workfront has opened: low-voltage box installation in Area A is complete, although no measured cable footage has yet been recorded against the September 18 requirement."
  },
  "gates": [
    {
      "key": "piles",
      "name": "Foundation piles",
      "installed": 27714,
      "total": 31352,
      "unit": "piles",
      "forecast": "Aug 7, 2026",
      "status": "Below rate"
    },
    {
      "key": "trackers",
      "name": "Tracker rows (incl. purlins)",
      "installed": 916,
      "total": 2486,
      "unit": "rows",
      "earned": 966.1,
      "earnedPct": 38.9,
      "earnedLabel": "38.9% earned incl. rows in progress (966 row-equivalents)",
      "forecast": "Aug 30, 2026",
      "status": "Below rate"
    },
    {
      "key": "modules",
      "name": "PV modules installed",
      "installed": 36989,
      "total": 171470,
      "unit": "modules",
      "forecast": "Sep 6, 2026",
      "status": "Below rate"
    },
    {
      "key": "electrical",
      "name": "LV / DC cable installation",
      "installed": 0,
      "total": 274720,
      "unit": "lf",
      "earnedPct": 1.3,
      "earnedLabel": "1.3% earned on the weighted control line",
      "forecast": "Sep 18, 2026",
      "status": "Not started"
    }
  ],
  "earnedProgress": {
    "asOf": "Jul 29, 2026",
    "scopes": [
      { "scope": "Tracker rows", "unit": "rows", "gate": "916 / 2,486", "gatePct": 36.8, "inProgress": "136 rows part-built", "earnedPct": 38.9,
        "detail": "Areas E and EW at step 3 of 5; Area F at step 1." },
      { "scope": "Inverter stations", "unit": "stations", "gate": "5 / 23 set", "gatePct": 21.7, "inProgress": "13 staged · 3 foundations ready", "earnedPct": 26.3,
        "detail": "No station terminated yet." },
      { "scope": "LV / DC installation", "unit": "lf of cable", "gate": "0 / 274,720 lf", "gatePct": 0.0, "inProgress": "56 of 419 boxes mounted", "earnedPct": 1.3,
        "detail": "Area A supports complete, not yet in the take-off." }
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
        "c": 36989
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
      "done": 91,
      "status": "Active",
      "note": "21 of 23 station foundations complete; five stations in Areas A and C carry their inverters. Welding procedure approved July 21."
    },
    {
      "activity": "Substation (overall)",
      "done": 21.7,
      "status": "Active",
      "note": "Overall substation progress 20.0%, up from 16.7% on July 21 — civil 59.3%, structural 11.3%, electrical 5.2%. Piers complete including concrete: 6 of 17. Main power transformer set on its foundation July 24."
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
    "headline": "Pile inspection stands at 95.4% of executed piles — production has run two days ahead of the latest inspection cut.",
    "tiles": [
      {
        "label": "Piles executed",
        "value": "27,714",
        "note": "Current executed basis."
      },
      {
        "label": "Piles QA inspected",
        "value": "26,439",
        "note": "95.4% of executed piles · 84.3% of full project scope. The last inspection cut predates the two most recent production days."
      },
      {
        "label": "Awaiting inspection",
        "value": "1,275",
        "note": "Open inspection fronts follow the active production areas. A refreshed inspection cut is due."
      },
      {
        "label": "Tracker rows released",
        "value": "606 / 916",
        "note": "24.4% of the 2,486 rows in scope and 66.2% of the 916 built. No rows were released on July 29 while 35 further rows were completed, leaving 310 built rows awaiting release. Released rows feed the module installation front."
      },
      {
        "label": "Pile refusals recorded",
        "value": "242",
        "note": "Refusal piles recorded to date. Reinstallation and tap-down corrections are complete or in progress."
      }
    ],
    "note": "Inspection records are submitted for Owner review as areas close out. Module spacing is verified by measurement during tightening rather than assumed from the purlin."
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
      "period": "Jul 30 – Aug 1",
      "items": [
        "LV cable installation to produce its first measured footage — 6,243 lf/day required for September 18, with none recorded to date.",
        "Pile deliveries to resume: site stock above installed quantity is down to 629 units, about 1.4 days of production.",
        "Pile installation at 455/day to close the front around August 7; 3,638 remain, and two areas close within the week.",
        "Tracker assembly at 58 rows/day, with quality release of the 310 completed rows already waiting — release, not build rate, is the current constraint.",
        "Module installation at 4,075/day into the newly opened third installation area.",
        "Inverter station terminations following placement; remaining areas continue as foundations close.",
        "Substation piers continuing from 7 of 17; breaker and structural steel deliveries tracked.",
        "Saturday working across all fronts."
      ]
    },
    {
      "period": "Aug 3 – Aug 8",
      "items": [
        "Pile installation forecast to complete around August 7, releasing the remaining tracker workfronts.",
        "Area A LV cabling complete, extending the cable front into the adjacent areas.",
        "Tracker assembly at full multi-crew rate.",
        "Module installation at sustained full-field rate.",
        "Second-phase pile workfront (Area D) opening — slab demolition complete.",
        "Area G cut/fill following completion of the Area G basins.",
        "Substation structural steel erection start."
      ]
    }
  ],
  "ownerItems": [
    {
      "item": "Pile inspection records",
      "detail": "EPC pile inspection stands at 99.5% of executed piles. Records are submitted area by area for Owner review so the quality record closes out with production.",
      "status": "In progress",
      "since": "Jul 6, 2026"
    },
    {
      "item": "Area G sequencing",
      "detail": "Area G is released for pile driving and material distribution. Confirmation of the sediment basin completion sequence allows Area G cut/fill to be programmed.",
      "status": "Open",
      "since": "Jul 3, 2026"
    },
    {
      "item": "Substation equipment deliveries",
      "detail": "Breakers and structural steel are the remaining controlling substation items on the interconnection path. Delivery dates are requested so the substation sequence can be firmed up.",
      "status": "Open",
      "since": "Jul 17, 2026"
    },
    {
      "item": "Interconnection readiness coordination",
      "detail": "Utility witness testing and energization windows to be aligned with the October pre-commissioning program.",
      "status": "Open",
      "since": "Jul 20, 2026"
    }
  ],
  "focus": [
    {
      "title": "Pile completion",
      "level": "Priority",
      "note": "3,638 piles remain. Sustaining 455 per day closes the front in early August, which releases the remaining tracker and module workfronts. July 29 exceeded that rate — the first day to do so since the weather stop — and two areas are within a day of completion. Ground in the main remaining pile area is notably hard and caps daily output; the second-phase area opens in early August with its slab demolition complete. Site pile stock above installed quantity has fallen to 629 units, so deliveries now need to resume to protect the date."
    },
    {
      "title": "Tracker assembly and quality release",
      "level": "Priority",
      "note": "916 rows complete of 2,486 (36.8%) — the measure that governs the August 30 date. A further 136 rows are built but not finished: Area E 34 and Area EW 20 at step 3 of 5 with purlins installed, Area F 82 at step 1 with bearings and saddles set. On the fixed five-step ladder those rows carry 50.1 row-equivalents, so earned progress is 966 of 2,486, or 38.9%. 1,570 rows remain to build and 1,880 to release for module installation, and 58 completed rows per day are required to hold August 30. Three areas are now producing rows and the constraint has shifted: no rows were released on July 29 while 35 were completed, so 310 built rows are waiting on release and the released-row buffer ahead of the module crews is under two days. The 54 rows sitting at step 3 need only dampers, actuators, drive line and final torque and are the nearest available movement on the completion measure."
    },
    {
      "title": "Module installation rate",
      "level": "Priority",
      "note": "134,481 modules remain, with 4,075 per day required to hold September 6. Material is not a constraint — 120,251 modules are in stock above the installed quantity. The second module area is complete and a third front has opened, so released-row supply and installation capacity now set the rate."
    },
    {
      "title": "LV and DC cable installation",
      "level": "Priority",
      "note": "The LV workfront has opened — the last major front on the path to energization. Low-voltage box installation in Area A is complete (50 of 50) and the project total stands at 56 of 419 following a re-based control count; area support installation is complete in three sub-areas and at 90% in a fourth. No measured cable footage has been recorded yet, against 6,243 linear feet per day required to hold September 18. Area A is programmed to be fully LV-cabled next week."
    },
    {
      "title": "Substation completion",
      "level": "Watch",
      "note": "Overall substation progress is 21.7% — civil 65.6%, structural 10.8%, electrical 5.7%. Piers complete including concrete stand at 7 of 17. The main power transformer is set; breakers and structural steel now control the interconnection path."
    }
  ],
  "material": [
    {
      "item": "Foundation piles",
      "delivered": "28,343",
      "pct": 90.4,
      "note": "629 piles in stock above installed quantity — down from roughly 1,170 a day earlier at the current installation rate. Deliveries need to resume to stay ahead of installation."
    },
    {
      "item": "PV modules",
      "delivered": "157,240",
      "pct": 91.7,
      "note": "120,251 modules in stock above installed quantity."
    },
    {
      "item": "Tracker structures",
      "delivered": "Substantially complete",
      "pct": 97,
      "note": "Balance of the racking bill of material delivered; a small remainder committed for the current week."
    },
    {
      "item": "Inverters",
      "delivered": "5 stations set",
      "pct": null,
      "note": "Inverter stations set on their foundations in Areas A and C, with serial numbers logged. Deliveries continuing; LV and MV terminations follow placement."
    },
    {
      "item": "Main power transformer",
      "delivered": "On site and set",
      "pct": 100,
      "note": "Set on its foundation July 24 inside the completed containment berm."
    }
  ],
  "photos": [
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
      "done": 91,
      "note": "21 of 23 station foundations complete; five stations in Areas A and C carry their inverters. Welding procedure approved July 21.",
      "why": "internal 86% is the broader PS-foundation package; 21 of 23 is the station count the Owner tracks (Jul 28 workbook)"
    },
    "Substation (overall)": {
      "note": "Overall substation progress 20.0%, up from 16.7% on July 21 — civil 59.3%, structural 11.3%, electrical 5.2%. Piers complete including concrete: 6 of 17. Main power transformer set on its foundation July 24.",
      "why": "clarifies that the 6-of-17 ratio is the pier front, not overall substation progress"
    }
  },
  "workforce": {
    "basis": "Shift basis 10 hours per person per day, Monday to Saturday. Headcount is taken from the site board and is current to July 20, 2026. Days on which the site was fully stopped are excluded from the manhours.",
    "tiles": [
      {
        "label": "Personnel on site",
        "value": "248",
        "note": "Latest site-board headcount (Jul 29). Field labor plus management, quality and HSE."
      },
      {
        "label": "Peak headcount",
        "value": "248",
        "note": "Highest headcount on site to date (July 15)."
      },
      {
        "label": "Average headcount",
        "value": "178",
        "note": "Mean headcount across the construction period to date."
      },
      {
        "label": "Manhours to date",
        "value": "100,500",
        "note": "Total manhours worked from the start of construction on April 1 through July 29, at 10 h/day, Monday to Saturday."
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
        "d": "Jul 29",
        "c": 100524
      }
    ],
    "mix": {
      "day": "July 29, 2026",
      "total": 248,
      "rows": [
        {
          "trade": "Tracker assembly and piling",
          "people": 133,
          "color": "#0f7a52"
        },
        {
          "trade": "Module installation",
          "people": 48,
          "color": "#2769a8"
        },
        {
          "trade": "Electrical and substation",
          "people": 41,
          "color": "#b96f18"
        },
        {
          "trade": "Civil and fencing",
          "people": 4,
          "color": "#7b4fa8"
        },
        {
          "trade": "EPC management, quality and HSE",
          "people": 22,
          "color": "#66716d"
        }
      ]
    }
  }
};
