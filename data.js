'use strict';
/* MURCH SOLAR — OWNER PROJECT REPORT
   Client-facing dataset. Derived from the EPC construction controls.
   PUBLISHING RULES (do not break):
     - No contract values, unit rates, billing, SOV or any economic figure.
     - No subcontractor or supplier names; disciplines and crews only.
     - No supplier claims, disputes or commercial positions.
     - Neutral, factual language. Quantities and dates only.
*/
window.MURCH_REPORT = {

  meta: {
    project: 'Murch Solar Project',
    location: 'Lawrence, Van Buren County, Michigan',
    capacityNote: 'Utility-scale photovoltaic generating facility',
    phase: 'Construction — Mechanical installation',
    asOf: 'July 27, 2026',
    reportNo: 'Daily Owner Report',
    preparedBy: 'EPC Construction Management'
  },

  /* ---------- 1. HEADLINE PROGRESS ---------- */
  headline: {
    overall: 47.4,
    overallNote: 'Weighted physical completion across civil, mechanical, electrical and substation scopes.',
    statement: 'Civil earthworks are complete and the perimeter is closed. Pile installation stands at 84.7% with the last three zones active. Tracker assembly and module installation are the controlling fronts through August. The main power transformer was set on its foundation on July 24, placing the principal long-lead energization item on site. Monday July 27 was a full weather stop with no production on any front; recovery rates have been issued for the balance of the week.'
  },

  gates: [
    { key:'piles',    name:'Foundation piles',      installed:26559, total:31352, unit:'piles',   forecast:'Aug 7, 2026',  status:'Behind' },
    { key:'trackers', name:'Tracker rows (incl. purlins)', installed:851, total:2486, unit:'rows', forecast:'Aug 30, 2026', status:'Behind' },
    { key:'modules',  name:'PV modules installed',  installed:30780, total:171470, unit:'modules', forecast:'Sep 6, 2026',  status:'Behind' },
    { key:'electrical', name:'LV / DC cable installation', installed:0, total:274720, unit:'lf',   forecast:'Sep 18, 2026', status:'Not started' }
  ],

  /* ---------- 2. MILESTONES: CONTRACT vs FORECAST ---------- */
  milestones: [
    { name:'Mechanical Completion',       contract:'Sep 25, 2026', forecast:'Sep 20 – 25, 2026', status:'On target',
      note:'Achievable on the re-cascaded internal sequence (trackers Aug 30, modules Sep 6, LV/DC Sep 18). Requires the pile front to close in early August and the module crew to reach full field rate.' },
    { name:'Provisional Interconnection', contract:'Oct 16, 2026', forecast:'Oct 12 – 16, 2026', status:'On target',
      note:'Main power transformer set on its foundation July 24. Remaining controlling substation equipment: breakers and structural steel. Pre-commissioning planned to complete by October 15.' },
    { name:'Commercial Operation Date',   contract:'Nov 9, 2026',  forecast:'Nov 5 – 9, 2026',  status:'Watch',
      note:'Limited float restored by the re-cascaded mechanical dates. Sensitive to the module installation ramp.' },
    { name:'Substantial Completion',      contract:'Nov 30, 2026', forecast:'Nov 30, 2026',     status:'Watch',
      note:'Achievable provided outdoor scopes close before the seasonal weather stop.' }
  ],

  /* ---------- 3. CUMULATIVE PROGRESS (planned vs actual) ---------- */
  series: {
    piles:    [ {d:'Jun 18',v:20,c:15553}, {d:'Jun 19',v:79,c:15632}, {d:'Jun 22',v:251,c:15883}, {d:'Jun 23',v:101,c:15984}, {d:'Jun 25',v:370,c:16354}, {d:'Jun 26',v:340,c:16694}, {d:'Jun 29',v:261,c:16955}, {d:'Jun 30',v:234,c:17189}, {d:'Jul 1',v:252,c:17441}, {d:'Jul 2',v:274,c:17715}, {d:'Jul 3',v:134,c:17849}, {d:'Jul 6',v:307,c:18156}, {d:'Jul 7',v:399,c:18555}, {d:'Jul 8',v:646,c:19201}, {d:'Jul 9',v:499,c:19700}, {d:'Jul 10',v:442,c:20142}, {d:'Jul 13',v:702,c:20844}, {d:'Jul 14',v:678,c:21522}, {d:'Jul 15',v:641,c:22163}, {d:'Jul 16',v:590,c:22753}, {d:'Jul 17',v:602,c:23355}, {d:'Jul 20',v:718,c:24073}, {d:'Jul 21',v:521,c:24594}, {d:'Jul 22',v:492,c:25086}, {d:'Jul 23',v:451,c:25537}, {d:'Jul 24',v:364,c:25901}, {d:'Jul 25',v:236,c:26137}, {d:'Jul 26',v:0,c:26137}, {d:'Jul 27',v:0,c:26559} ],
    trackers: [ {d:'Jun 17',v:15,c:142}, {d:'Jun 18',v:12,c:154}, {d:'Jun 19',v:18,c:172}, {d:'Jun 22',v:21,c:193}, {d:'Jun 23',v:19,c:212}, {d:'Jun 24',v:16,c:228}, {d:'Jun 25',v:22,c:250}, {d:'Jun 26',v:20,c:270}, {d:'Jun 29',v:24,c:294}, {d:'Jun 30',v:23,c:317}, {d:'Jul 1',v:26,c:343}, {d:'Jul 2',v:25,c:368}, {d:'Jul 3',v:18,c:386}, {d:'Jul 6',v:27,c:413}, {d:'Jul 7',v:29,c:442}, {d:'Jul 8',v:31,c:473}, {d:'Jul 9',v:28,c:501}, {d:'Jul 10',v:30,c:531}, {d:'Jul 13',v:33,c:564}, {d:'Jul 14',v:31,c:595}, {d:'Jul 15',v:34,c:629}, {d:'Jul 16',v:30,c:659}, {d:'Jul 17',v:29,c:688}, {d:'Jul 20',v:32,c:720}, {d:'Jul 21',v:30,c:750}, {d:'Jul 22',v:28,c:778}, {d:'Jul 23',v:29,c:807}, {d:'Jul 24',v:26,c:833}, {d:'Jul 25',v:18,c:851}, {d:'Jul 27',v:0,c:851} ],
    modules:  [ {d:'Jul 3',v:234,c:234}, {d:'Jul 6',v:612,c:846}, {d:'Jul 7',v:988,c:1834}, {d:'Jul 8',v:1204,c:3038}, {d:'Jul 9',v:1416,c:4454}, {d:'Jul 10',v:1560,c:6014}, {d:'Jul 13',v:1980,c:7994}, {d:'Jul 14',v:2204,c:10198}, {d:'Jul 15',v:2456,c:12654}, {d:'Jul 16',v:2688,c:15342}, {d:'Jul 17',v:2520,c:17862}, {d:'Jul 20',v:3601,c:21463}, {d:'Jul 21',v:3120,c:24583}, {d:'Jul 22',v:2960,c:27543}, {d:'Jul 23',v:1420,c:28963}, {d:'Jul 24',v:1180,c:30143}, {d:'Jul 25',v:637,c:30780}, {d:'Jul 27',v:0,c:30780} ]
  },
  seriesMeta: {
    piles:    { label:'Foundation piles',  total:31352,  color:'#0f7a52', planStart:'Jun 18', planEnd:'Aug 7',  planStartVal:15553, unit:'piles' },
    trackers: { label:'Tracker rows',      total:2486,   color:'#2769a8', planStart:'Jun 17', planEnd:'Aug 30', planStartVal:142,   unit:'rows' },
    modules:  { label:'PV modules',        total:171470, color:'#b96f18', planStart:'Jul 3',  planEnd:'Sep 6',  planStartVal:0,     unit:'modules' }
  },

  /* ---------- 4. CIVIL & SUBSTATION ---------- */
  civil: [
    { activity:'Earthworks — cut and fill',            done:100,  status:'Complete',  note:'Completed July 17. Area G cut/fill follows completion of the Area G sediment basins.' },
    { activity:'Perimeter fence',                       done:95,   status:'On track',  note:'Areas A–F complete. Zone G remainder and gates outstanding.' },
    { activity:'Sediment basins / environmental controls', done:83, status:'On track', note:'Area G basins are the remaining item; they precede Area G earthworks.' },
    { activity:'Internal access roads',                 done:72,   status:'Active',    note:'Target completion end of July. Roads are no longer the site logistics constraint.' },
    { activity:'Inverter station foundations',          done:86,   status:'Active',    note:'22 of 23 inverter foundations complete. Welding procedure approved July 21.' },
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
      { label:'Safety observations YTD',value:'76',  note:'48 unsafe conditions, 26 unsafe behaviours, 1 near miss, 1 first-aid case — leading-indicator reporting.' },
      { label:'Safety orientations',    value:'155', note:'Site inductions completed.' },
      { label:'Toolbox talks',          value:'26',  note:'Including coordination meetings and Owner safety visits.' }
    ],
    note: 'Reporting of unsafe conditions and behaviours increased in May, which is the intended direction for a leading-indicator programme. All open observations are tracked to closure.'
  },

  /* ---------- 6. QUALITY ---------- */
  quality: {
    headline: 'Pile inspection is current with production — 99.5% of executed piles inspected.',
    tiles: [
      { label:'Piles executed',            value:'26,559', note:'Current executed basis.' },
      { label:'Piles QA inspected',        value:'26,439', note:'99.5% of executed piles · 84.3% of full project scope.' },
      { label:'Awaiting inspection',       value:'~120',   note:'Open inspection fronts follow the active production zones.' },
      { label:'Tracker rows QA released',  value:'606',    note:'71.2% of the 851 rows built. Released rows feed the module installation front.' },
      { label:'Refusals / principal defects', value:'242', note:'Recorded to date; reinstallation and tap-down corrections in progress.' }
    ],
    note: 'Owner-side approval of the pile inspection log is the principal open quality administration item. Module spacing is being verified by measurement during tightening rather than assumed from the purlin.'
  },

  /* ---------- 7. WEATHER & LOST-DAY LOG ---------- */
  weatherLog: [
    { date:'Jul 27, 2026 (Mon)', type:'Rain', impact:'Full stop — all fronts', detail:'No pile, tracker, module or electrical production. Site closed to production for the day. Recorded in the daily report.' },
    { date:'Jul 17, 2026 (Thu)', type:'Air quality', impact:'Partial — tracker crew released ~15:00', detail:'Statewide air-quality alert. Documented; alert lifted July 20 and not renewed.' },
    { date:'Jul 26, 2026 (Sun)', type:'Non-working day', impact:'No production scheduled', detail:'Scheduled non-working day.' }
  ],
  weatherNote: 'Weather-impacted days are logged as they occur and reconciled against the daily reports. Days shown are those with a recorded production impact.',

  /* ---------- 8. TWO-WEEK LOOKAHEAD ---------- */
  lookahead: [
    { period:'Jul 28 – Aug 1', items:[
      'Recover the weather day: pile production at 523/day across the balance of the week.',
      'Close the two remaining pile zones (B and F) and hold the Zone G rate above 300/day.',
      'Tracker assembly at 66 rows/day; maintain same-week QA release of completed rows.',
      'Module installation at 4,680/day; second module crew re-manned.',
      'Substation piers continuing at 3–4 per day; breaker and structural steel deliveries tracked.',
      'LV / DC cable installation kick-off preparation.'
    ]},
    { period:'Aug 3 – Aug 8', items:[
      'Pile installation forecast to complete (~Aug 7), releasing all remaining tracker workfronts.',
      'Zone D slab demolition and pile workfront opening.',
      'Tracker assembly at full multi-crew rate.',
      'Module installation at sustained full-field rate.',
      'Area G earthworks following basin completion.',
      'Substation structural steel erection start.'
    ]}
  ],

  /* ---------- 9. ITEMS AWAITING OWNER ---------- */
  ownerItems: [
    { item:'Pile inspection log approval', detail:'Owner-side approval of the pile quality log is trailing EPC inspection, which is now at 99.5% of executed piles. Approval keeps the quality record aligned with the production basis.', status:'Open', since:'Jul 6, 2026' },
    { item:'Area G release confirmation', detail:'Area G is released for pile driving and material distribution. Confirmation of the basin completion sequence is requested so Area G earthworks can be programmed.', status:'Open', since:'Jul 3, 2026' },
    { item:'Substation equipment delivery visibility', detail:'Breakers and structural steel are the remaining controlling substation items for the interconnection date. Delivery confirmation is requested.', status:'Open', since:'Jul 17, 2026' },
    { item:'Weather day record — July 27', detail:'A full weather stop was recorded on July 27, 2026. The day is documented in the daily report for the project weather record.', status:'Notified', since:'Jul 27, 2026' }
  ],

  /* ---------- 10. FOCUS AREAS (neutral framing) ---------- */
  focus: [
    { title:'Pile completion', level:'Priority', note:'4,793 piles remain across three active zones. Completion in early August releases the tracker and module fronts and is the single largest driver of the mechanical completion date.' },
    { title:'Tracker assembly and quality release', level:'Priority', note:'1,635 rows remain to build and 1,880 to release. Assembly crews are ramping; the release cadence is being matched to the build rate so that module crews are never waiting on released rows.' },
    { title:'Module installation rate', level:'Priority', note:'140,690 modules remain. Material on site is not a constraint — 126,460 modules are in stock above the installed quantity. Crew size and released-row supply set the rate.' },
    { title:'LV and DC cable installation', level:'Watch', note:'The cable pull is the next critical path to energization. Kick-off is being programmed with the material delivery sequence.' },
    { title:'Substation completion', level:'Watch', note:'Overall substation progress is 20%. The main power transformer is set; breakers and structural steel now control the interconnection path.' }
  ],

  /* ---------- 11. MATERIAL ON SITE ---------- */
  material: [
    { item:'Foundation piles',   delivered:'28,343', pct:90.4, note:'1,784 piles in stock above installed quantity. Deliveries exceed the installation rate.' },
    { item:'PV modules',         delivered:'157,240', pct:91.7, note:'126,460 modules in stock above installed quantity.' },
    { item:'Tracker structures', delivered:'Substantially complete', pct:97, note:'Balance of the racking bill of material delivered; a small remainder committed for the current week.' },
    { item:'Inverter stations',  delivered:'18 of 18 on site', pct:100, note:'Base plates welded. First unit offloaded onto its foundation July 27.' },
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
