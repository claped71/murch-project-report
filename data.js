'use strict';
/* Murch Solar Project — Owner Project Report. Physical progress dataset. */
window.MURCH_REPORT = {

  meta: {
    project: 'Murch Solar Project',
    location: 'Lawrence, Van Buren County, Michigan',
    capacityNote: 'Utility-scale photovoltaic generating facility',
    phase: 'Construction — Mechanical installation',
    asOf: 'July 27, 2026',
    reportNo: 'Construction Progress Report',
    preparedBy: 'EPC Construction Management'
  },

  /* ---------- 1. HEADLINE PROGRESS ---------- */
  headline: {
    overall: 47.4,
    overallNote: 'Weighted physical completion across civil, mechanical, electrical and substation scopes.',
    statement: 'Bulk earthworks are complete and the perimeter is substantially closed. Pile installation stands at 84.7% across three active areas. Tracker assembly and module installation are the controlling fronts through August, and both are currently running below the pace required to hold their completion dates. The main power transformer was set on its foundation on July 24, placing the principal long-lead energization item on site. Monday July 27 was a full weather stop with no production on any front; the balance of the week is being worked to recovery rates.'
  },

  gates: [
    { key:'piles',    name:'Foundation piles',      installed:26559, total:31352, unit:'piles',   forecast:'Aug 7, 2026',  status:'Below rate' },
    { key:'trackers', name:'Tracker rows (incl. purlins)', installed:851, total:2486, unit:'rows', forecast:'Aug 30, 2026', status:'Below rate' },
    { key:'modules',  name:'PV modules installed',  installed:30780, total:171470, unit:'modules', forecast:'Sep 6, 2026',  status:'Below rate' },
    { key:'electrical', name:'LV / DC cable installation', installed:0, total:274720, unit:'lf',   forecast:'Sep 18, 2026', status:'Not started' }
  ],

  /* ---------- 2. MILESTONES: CONTRACT vs FORECAST ---------- */
  milestones: [
    { name:'Mechanical Completion',       contract:'Sep 25, 2026', forecast:'Sep 20 – 25, 2026', status:'On target',
      note:'Supported by the current construction sequence: trackers complete Aug 30, modules Sep 6, LV/DC cable Sep 18. Holding the date requires the pile front to close in early August and the module installation front to reach full field rate.' },
    { name:'Provisional Interconnection', contract:'Oct 16, 2026', forecast:'Oct 14 – 16, 2026', status:'On target',
      note:'Main power transformer set on its foundation July 24. Remaining controlling substation equipment: breakers and structural steel. Pre-commissioning is programmed to complete by October 13.' },
    { name:'Commercial Operation Date',   contract:'Nov 9, 2026',  forecast:'Nov 5 – 9, 2026',  status:'Watch',
      note:'Supported by the current mechanical completion forecast. Sensitive to the module installation ramp through August.' },
    { name:'Substantial Completion',      contract:'Nov 30, 2026', forecast:'Nov 30, 2026',     status:'Watch',
      note:'Achievable provided outdoor scopes close before the seasonal weather stop.' }
  ],

  /* ---------- 3. CUMULATIVE PROGRESS (planned vs actual) ---------- */
  series: {
    piles:    [ {d:'Jun 18',v:20,c:15553}, {d:'Jun 19',v:79,c:15632}, {d:'Jun 22',v:251,c:15883}, {d:'Jun 23',v:101,c:15984}, {d:'Jun 25',v:370,c:16354}, {d:'Jun 26',v:340,c:16694}, {d:'Jun 29',v:261,c:16955}, {d:'Jun 30',v:234,c:17189}, {d:'Jul 1',v:252,c:17441}, {d:'Jul 2',v:274,c:17715}, {d:'Jul 3',v:134,c:17849}, {d:'Jul 6',v:307,c:18156}, {d:'Jul 7',v:399,c:18555}, {d:'Jul 8',v:646,c:19201}, {d:'Jul 9',v:669,c:19870}, {d:'Jul 10',v:680,c:20550}, {d:'Jul 11',v:680,c:21230}, {d:'Jul 13',v:608,c:21838}, {d:'Jul 14',v:695,c:22533}, {d:'Jul 15',v:481,c:23014}, {d:'Jul 16',v:504,c:23518}, {d:'Jul 17',v:472,c:23990}, {d:'Jul 18',v:608,c:24598}, {d:'Jul 20',v:622,c:25220}, {d:'Jul 21',v:253,c:25473}, {d:'Jul 22',v:202,c:25675}, {d:'Jul 23',v:284,c:25959}, {d:'Jul 24',v:364,c:26323}, {d:'Jul 25',v:236,c:26559}, {d:'Jul 27',v:0,c:26559} ],
    trackers: [ {d:'Jun 17',v:15,c:142}, {d:'Jun 18',v:35,c:177}, {d:'Jun 19',v:26,c:203}, {d:'Jun 20',v:31,c:234}, {d:'Jun 21',v:0,c:234}, {d:'Jun 22',v:48,c:282}, {d:'Jun 23',v:31,c:313}, {d:'Jun 24',v:0,c:313}, {d:'Jun 25',v:57,c:370}, {d:'Jun 26',v:26,c:396}, {d:'Jun 29',v:29,c:425}, {d:'Jun 30',v:30,c:455}, {d:'Jul 1',v:51,c:506}, {d:'Jul 7',v:29,c:535}, {d:'Jul 8',v:0,c:535}, {d:'Jul 9',v:0,c:535}, {d:'Jul 10',v:0,c:535}, {d:'Jul 13',v:29,c:564}, {d:'Jul 14',v:49,c:613}, {d:'Jul 15',v:35,c:648}, {d:'Jul 16',v:35,c:683}, {d:'Jul 17',v:25,c:708}, {d:'Jul 18',v:0,c:708}, {d:'Jul 20',v:21,c:729}, {d:'Jul 21',v:25,c:754}, {d:'Jul 22',v:39,c:793}, {d:'Jul 23',v:28,c:821}, {d:'Jul 24',v:30,c:851}, {d:'Jul 27',v:0,c:851} ],
    modules:  [ {d:'Jul 3',v:234,c:234}, {d:'Jul 6',v:780,c:1014}, {d:'Jul 7',v:156,c:1170}, {d:'Jul 8',v:936,c:2106}, {d:'Jul 9',v:1308,c:3414}, {d:'Jul 10',v:1802,c:5216}, {d:'Jul 11',v:517,c:5733}, {d:'Jul 13',v:2922,c:8655}, {d:'Jul 14',v:2335,c:10990}, {d:'Jul 15',v:780,c:11770}, {d:'Jul 16',v:858,c:12628}, {d:'Jul 17',v:2226,c:14854}, {d:'Jul 18',v:0,c:14854}, {d:'Jul 20',v:3601,c:18455}, {d:'Jul 21',v:3082,c:21537}, {d:'Jul 22',v:2887,c:24424}, {d:'Jul 23',v:3456,c:27880}, {d:'Jul 24',v:3134,c:31014}, {d:'Jul 27',v:0,c:30780} ]
  },
  seriesMeta: {
    piles:    { label:'Foundation piles',  total:31352,  color:'#0f7a52', planStart:'Jun 18', planEnd:'Aug 7',  planStartVal:15553, unit:'piles' },
    trackers: { label:'Tracker rows',      total:2486,   color:'#2769a8', planStart:'Jun 17', planEnd:'Aug 30', planStartVal:142,   unit:'rows' },
    modules:  { label:'PV modules',        total:171470, color:'#b96f18', planStart:'Jul 3',  planEnd:'Sep 6',  planStartVal:234,     unit:'modules' }
  },

  /* ---------- 4. CIVIL & SUBSTATION ---------- */
  civil: [
    { activity:'Bulk earthworks — cut and fill',        done:94,   status:'Active',    note:'Areas A to F complete July 17. Area G cut/fill remains and follows completion of the Area G sediment basins.' },
    { activity:'Perimeter fence',                       done:95,   status:'On track',  note:'Areas A to F complete. Area G remainder and gates outstanding.' },
    { activity:'Sediment basins / environmental controls', done:83, status:'On track', note:'Area G basins are the remaining item; they precede Area G earthworks.' },
    { activity:'Internal access roads',                 done:72,   status:'Active',    note:'Target completion end of July. The road network now supports the material distribution plan.' },
    { activity:'Inverter station foundations',          done:96,   status:'Active',    note:'22 of 23 station foundations complete. Welding procedure approved July 21.' },
    { activity:'Substation (overall)',                  done:20,   status:'Active',    note:'Civil 59.3%, structural 11.3%, electrical 5.2%. 6 of 17 piers complete including concrete. Main power transformer set on foundation July 24.' }
  ],

  /* ---------- 5. SAFETY ---------- */
  safety: {
    headline: 'Zero recordable accidents. 204 days without a lost-time injury.',
    tiles: [
      { label:'Recordable accidents',   value:'0',   note:'No fatalities, lost-time, restricted-work or medical-treatment cases to date.' },
      { label:'Days without LTI',       value:'204', note:'No lost-time injury reported on the project.' },
      { label:'Lost days',              value:'0',   note:'Frequency, incidence and severity rates remain zero.' },
      { label:'First-aid cases',        value:'1',   note:'One first-aid case, recorded in May.' },
      { label:'Safety observations YTD',value:'76',  note:'48 unsafe conditions, 26 unsafe behaviors, 1 near miss, 1 first-aid case — leading-indicator reporting.' },
      { label:'Safety orientations',    value:'155', note:'Site inductions completed.' },
      { label:'Toolbox talks',          value:'26',  note:'Including coordination meetings and Owner safety visits.' }
    ],
    note: 'Reporting of unsafe conditions and behaviors increased in May, which is the intended direction for a leading-indicator program. All open observations are tracked to closure.'
  },

  /* ---------- 6. QUALITY ---------- */
  quality: {
    headline: 'Pile inspection is current with production — 99.5% of executed piles inspected.',
    tiles: [
      { label:'Piles executed',            value:'26,559', note:'Current executed basis.' },
      { label:'Piles QA inspected',        value:'26,439', note:'99.5% of executed piles · 84.3% of full project scope.' },
      { label:'Awaiting inspection',       value:'120',    note:'Open inspection fronts follow the active production areas.' },
      { label:'Tracker rows QA released',  value:'606',    note:'71.2% of the 851 rows built. Released rows feed the module installation front.' },
      { label:'Pile refusals recorded',    value:'242', note:'Refusal piles recorded to date. Reinstallation and tap-down corrections are complete or in progress.' }
    ],
    note: 'Inspection records are submitted for Owner review as areas close out. Module spacing is verified by measurement during tightening rather than assumed from the purlin.'
  },

  /* ---------- 7. WEATHER & LOST-DAY LOG ---------- */
  weatherLog: [
    { date:'Jul 27, 2026 (Mon)', type:'Rain', impact:'Full stop — all fronts', detail:'No pile, tracker, module or electrical production. Site closed to production for the day.' },
    { date:'Jul 17, 2026 (Fri)', type:'Air quality alert', impact:'Partial — one front released mid-afternoon', detail:'Statewide air-quality alert in effect. Alert lifted July 20 and not renewed.' }
  ],
  weatherNote: 'Days on which weather or air quality reduced or stopped production. Scheduled non-working days are not listed.',

  /* ---------- 8. TWO-WEEK LOOKAHEAD ---------- */
  lookahead: [
    { period:'Jul 28 – Aug 1', items:[
      'Recover the weather day: pile installation at the 523/day rate required across the balance of the week.',
      'Close out Areas B and F and hold the Area G rate above 300/day.',
      'Tracker assembly at the 66 rows/day recovery rate, against a recent average near 30. Maintain same-week quality release of completed rows.',
      'Module installation at the 4,680/day recovery rate, against a best day of 3,601. Second installation front brought to full strength.',
      'Substation piers continuing at 2–4 per day. Breaker and structural steel deliveries tracked.',
      'LV / DC cable installation kick-off preparation.'
    ]},
    { period:'Aug 3 – Aug 8', items:[
      'First-phase pile installation forecast to complete around Aug 7, releasing the remaining tracker workfronts.',
      'Area D slab demolition and second-phase pile workfront opening.',
      'Tracker assembly at full multi-crew rate.',
      'Module installation at sustained full-field rate.',
      'Area G cut/fill following completion of the Area G basins.',
      'Substation structural steel erection start.'
    ]}
  ],

  /* ---------- 9. ITEMS AWAITING OWNER ---------- */
  ownerItems: [
    { item:'Pile inspection records', detail:'EPC pile inspection stands at 99.5% of executed piles. Records are submitted area by area for Owner review so the quality record closes out with production.', status:'In progress', since:'Jul 6, 2026' },
    { item:'Area G sequencing', detail:'Area G is released for pile driving and material distribution. Confirmation of the sediment basin completion sequence allows Area G cut/fill to be programmed.', status:'Open', since:'Jul 3, 2026' },
    { item:'Substation equipment deliveries', detail:'Breakers and structural steel are the remaining controlling substation items on the interconnection path. Delivery dates are requested so the substation sequence can be firmed up.', status:'Open', since:'Jul 17, 2026' },
    { item:'Interconnection readiness coordination', detail:'Utility witness testing and energization windows to be aligned with the October pre-commissioning program.', status:'Open', since:'Jul 20, 2026' }
  ],

  /* ---------- 10. FOCUS AREAS (neutral framing) ---------- */
  focus: [
    { title:'Pile completion', level:'Priority', note:'4,793 piles remain across three active areas. Completion in early August releases the tracker and module fronts and is the single largest driver of the mechanical completion date.' },
    { title:'Tracker assembly and quality release', level:'Priority', note:'1,635 rows remain to build and 1,880 to release for module installation. Assembly capacity is ramping and the quality release cadence is matched to the build rate so the module front is not held on released rows.' },
    { title:'Module installation rate', level:'Priority', note:'140,690 modules remain. Material on site is not a constraint, with 126,460 modules in stock above the installed quantity. Installation capacity and released-row supply set the rate.' },
    { title:'LV and DC cable installation', level:'Watch', note:'The cable pull is the next critical path to energization. Kick-off is being programmed with the material delivery sequence.' },
    { title:'Substation completion', level:'Watch', note:'Overall substation progress is 20%. The main power transformer is set; breakers and structural steel now control the interconnection path.' }
  ],

  /* ---------- 11. MATERIAL ON SITE ---------- */
  material: [
    { item:'Foundation piles',   delivered:'28,343', pct:90.4, note:'1,784 piles in stock above installed quantity. Deliveries exceed the installation rate.' },
    { item:'PV modules',         delivered:'157,240', pct:91.7, note:'126,460 modules in stock above installed quantity.' },
    { item:'Tracker structures', delivered:'Substantially complete', pct:97, note:'Balance of the racking bill of material delivered; a small remainder committed for the current week.' },
    { item:'Inverter stations',  delivered:'18 received on site', pct:78, note:'All received units have base plates welded. Station setting on foundations is under way.' },
    { item:'Main power transformer', delivered:'On site and set', pct:100, note:'Set on its foundation July 24 inside the completed containment berm.' }
  ],

  /* ---------- 12. PHOTOS ---------- */
  photos: [
    { src:'assets/photo-41.jpg', date:'July 24, 2026',
      title:'Main power transformer set on its foundation',
      note:'The main power transformer craned onto its completed foundation inside the containment berm at the substation. This is the principal long-lead item on the energization path.' },
    { src:'assets/photo-42.jpg', date:'July 24, 2026',
      title:'Substation pier poured — 6 of 17 complete',
      note:'Pier with concrete poured and anchor-bolt template set. The pier front advanced from 2 of 17 on July 22 to 6 of 17 on July 24.' },
    { src:'assets/photo-39.jpg', date:'July 21, 2026',
      title:'Zone D released for slab demolition',
      note:'The temporary office compound has been relocated to the new laydown area. Zone D is released, opening the path to the remaining pile workfront.' },
    { src:'assets/photo-34.jpg', date:'July 14, 2026',
      title:'Module installation front advancing across completed tracker rows',
      note:'Installed modules in the foreground with bare trackers awaiting release beyond — the block-by-block sequence from Area A into Area C.' },
    { src:'assets/photo-36.jpg', date:'July 14, 2026',
      title:'Inverter station set on its foundation',
      note:'One of the inverter/PCS stations landed on its completed foundation. All units for the project are on site with base plates welded.' },
    { src:'assets/photo-33.jpg', date:'July 12, 2026',
      title:'Transformer foundation and containment berm complete',
      note:'The containment berm and transformer foundation at the substation, completed ahead of the transformer set on July 24.' }
  ]
};
