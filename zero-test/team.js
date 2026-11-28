// 隊伍頁（2026-11-27 改版）：上面切換角色 → 左邊全身大圖、右邊個人面板（等級、數值、能力、裝備）
// 資料在 gear.js；零、寵物沒有特殊能力，之後的新角色才有
(function () {
  const Z = window.ZW_GEAR; if (!Z) return;
  let pickSlot = null, sel = 'car', showCalc = false, lastPow = null;   // 2026-11-28 第一個分頁＝車子（戰力屬於車子）
  const cleared = () => (S.cleared && S.cleared.zero) || 0;
  const nameOf = c => c.id === 'hero' ? (S.hero || '主角') : c.id === 'zero' ? (S.ai || '零') : c.name;
  const open = c => cleared() >= c.need;
  function dot() { const d = $('teamDot'); if (d) d.style.display = S.gear.fresh.length ? 'block' : 'none'; }
  const css = `
  #tmTabs { display:flex; gap:8px; }
  #tmTabs button { flex:1; height:44px; border-radius:12px; border:1.5px solid rgba(63,240,255,.5); background:rgba(4,12,16,.9); color:#c8fbff; font:900 18px sans-serif; position:relative; }
  #tmTabs button.on { background:#3ff0ff; color:#00262c; border-color:#3ff0ff; }
  #tmTabs button.lock { opacity:.4; }
  #tmTabs button i { position:absolute; top:4px; right:6px; width:9px; height:9px; border-radius:50%; background:#ff4a5a; }
  #tmBody { display:flex; gap:10px; margin-top:10px; align-items:stretch; }
  #tmArt { width:42%; flex:none; min-height:430px; border-radius:14px; background:radial-gradient(ellipse at 50% 70%, rgba(63,240,255,.18), rgba(4,12,16,.9) 70%); border:1.5px solid rgba(63,240,255,.35); display:flex; align-items:flex-end; justify-content:center; overflow:hidden; position:relative; }
  #tmArt img { width:100%; height:100%; object-fit:contain; object-position:bottom; position:absolute; inset:0; }
  #tmArt b { position:absolute; left:8px; top:8px; font:900 16px sans-serif; color:#9ff8ff; background:rgba(0,0,0,.5); padding:2px 8px; border-radius:8px; }
  #tmPanel { flex:1; min-width:0; background:rgba(4,12,16,.92); border:1.5px solid rgba(63,240,255,.35); border-radius:14px; padding:10px; color:#e8f6f8; font:700 16px sans-serif; }
  #tmPanel h3 { margin:0; font:900 19px sans-serif; } #tmPanel h3 span { color:#9ff8ff; font-size:17px; margin-left:4px; }
  #tmPanel .role { color:#ffd23f; font:800 15px sans-serif; margin:2px 0 8px; }
  #tmPanel .st { display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed rgba(63,240,255,.18); }
  #tmPanel .st em { font-style:normal; color:#9ff8ff; } #tmPanel .st small { color:#7fe39a; margin-left:4px; }
  #tmPanel .lab { color:#8fa0ae; font:800 14px sans-serif; margin:10px 0 4px; letter-spacing:1px; }
  #tmPanel .ab { line-height:1.55; color:#d8eef2; }
  #tmPanel .upb { width:100%; margin-top:10px; min-height:42px; border:0; border-radius:10px; background:#ffd23f; color:#2a1c00; font:900 17px sans-serif; padding:4px; }
  #tmPanel .upb.dim { opacity:.4; }
  #tmPanel .slots { display:flex; flex-direction:column; gap:6px; }
  #tmPanel .slots button { text-align:left; background:rgba(4,30,36,.9); border:1.5px solid rgba(63,240,255,.4); border-radius:10px; padding:6px 8px; color:#e8f6f8; font:800 15px sans-serif; position:relative; }
  #tmPanel .slots button.on { border-color:#ffd23f; background:rgba(255,210,63,.15); }
  #tmPanel .slots small { color:#8fa0ae; } #tmPanel .slots i { color:#9ff8ff; font-style:normal; display:block; font-size:14px; }
  #tmPanel .slots u { position:absolute; top:4px; right:6px; background:#ff4a5a; color:#fff; font-size:13px; border-radius:6px; padding:0 4px; text-decoration:none; }
  #tmPick { margin-top:10px; background:rgba(4,12,16,.94); border:1.5px solid #ffd23f; border-radius:14px; padding:10px; }
  #tmPick div[data-eq] { display:flex; justify-content:space-between; gap:8px; align-items:center; padding:8px 10px; margin-top:6px; border-radius:8px; background:rgba(255,255,255,.04); cursor:pointer; color:#e8f6f8; }
  #tmPick div[data-eq].on { background:rgba(63,240,255,.15); }
  #tmPow { display:flex; align-items:baseline; gap:8px; } #tmPow b { font:900 34px "Arial Black",sans-serif; color:#ffd23f; text-shadow:0 0 12px rgba(255,210,63,.5); }
  #tmPow i { font-style:normal; color:#7fe39a; font:900 18px sans-serif; animation:tmUp 1.6s ease-out forwards; } @keyframes tmUp { 0% { opacity:0; transform:translateY(8px) } 15% { opacity:1; transform:none } 80% { opacity:1 } 100% { opacity:0; transform:translateY(-10px) } }
  .tmCalcBtn { margin-top:4px; background:none; border:1px solid rgba(63,240,255,.5); color:#9ff8ff; border-radius:8px; padding:3px 10px; font:800 15px sans-serif; }
  .tmCalc { margin-top:6px; padding:8px; border-radius:10px; background:rgba(0,0,0,.35); font:700 15px sans-serif; color:#d8eef2; }
  .tmCalc div { display:flex; justify-content:space-between; gap:6px; padding:2px 0; } .tmCalc .h { color:#ffd23f; font-weight:900; margin-top:4px; } .tmCalc .eq { border-top:1px solid rgba(63,240,255,.3); margin-top:3px; padding-top:4px; color:#9ff8ff; font-weight:900; }
  .tmGoal { margin-top:8px; font:800 14px sans-serif; color:#8fa0ae; } .tmGoal .bar { height:8px; border-radius:4px; background:rgba(255,255,255,.1); overflow:hidden; margin-top:3px; } .tmGoal .bar i { display:block; height:100%; background:linear-gradient(90deg,#3ff0ff,#ffd23f); }
  .tmRec { margin-top:8px; padding:8px; border-radius:10px; border:1.5px solid #7fe39a; background:rgba(127,227,154,.08); font:800 15px sans-serif; color:#d8f6e0; }
  .tmRec button { margin-top:6px; width:100%; border:0; border-radius:8px; background:#7fe39a; color:#06210f; font:900 16px sans-serif; padding:6px; }
  .tmCombo { width:100%; border-collapse:collapse; margin-top:4px; font:800 15px sans-serif; } .tmCombo td { border:1px solid rgba(63,240,255,.2); padding:3px; text-align:center; } .tmCombo tr:first-child td { color:#8fa0ae; }
  `;
  // 每個角色面板要顯示的數值：[名稱, 目前值, 下一級值]
  function stats(c, lv) {   // 2026-11-28 角色只升專長
    const pct = v => `+${Math.round(v * 1000) / 10}%`;
    if (c.id === 'hero') return [['每連擊加成', pct(Z.SYNTH(lv)), pct(Z.SYNTH(lv + 1))]];
    if (c.id === 'zero') return [['大招傷害', `+${15 * (lv - 1)}%`, `+${15 * lv}%`], ['充能速度', `+${5 * (lv - 1)}%`, `+${5 * lv}%`]];
    if (c.id === 'dog') return [['車子耐久', `+${5 * lv}%`, `+${5 * (lv + 1)}%`], ['每關多撿廢鐵', `+${20 + 10 * (lv - 1)}`, `+${20 + 10 * lv}`], ['替車子擋攻擊', '每關 1 次', '每關 1 次']];
    if (c.id === 'he') return [['改裝充能速度', `+${12 * (lv - 1)}%`, `+${12 * lv}%`]];
    return [];
  }
  function bestUp() {   // 推薦升級：花同樣的資源，戰力加最多的一項
    const p0 = Z.power(S).total, w = c => (c.scrap || 0) + 1.5 * (c.coin || 0) + 3 * (c.chip || 0), out = [];
    const hl = S.team.hero; if (hl < Z.MAXLV) { const c = Z.CHARS[0].cost(hl); out.push({ n: `升級主角 → Lv.${hl + 1}`, d: Z.power(S, { hero: hl + 1 }).total - p0, c, go: () => { sel = 'hero'; renderTeam(); } }); }
    if (typeof subCost === 'function' && (S.sub || 0) < 5) { const c = subCost(); out.push({ n: `改裝車子 → +${(S.sub || 0) + 1}`, d: Z.power(S, { sub: (S.sub || 0) + 1 }).total - p0, c, go: () => openScreen('garage') }); }
    const ok = out.filter(x => x.d > 0).sort((a, b) => (afford(b.c) - afford(a.c)) || (b.d / w(b.c) - a.d / w(a.c)));
    return ok[0] || null;
  }
  function carPanel() {
    const P = Z.power(S), up = lastPow != null && P.total > lastPow ? P.total - lastPow : 0; lastPow = P.total;
    const row = ([a, b]) => `<div><span>${a}</span><span>${b}</span></div>`;
    const calc = showCalc ? `<div class="tmCalc"><div class="h">⚔ 輸出（平均一次 5 連擊）</div>${P.lines.map(row).join('')}<div class="eq"><span>＝ 一次約</span><span>${P.out}</span></div>
      <div class="h">🛡 耐久</div>${P.dlines.map(row).join('')}<div class="eq"><span>＝ 裝甲</span><span>${P.dur}</span></div>
      <div class="eq"><span>戰力 ＝ 輸出 × 耐久 ÷ 50</span><span>${P.total}</span></div><div class="h">⚡ 大招（另計）</div>${row([`零・電磁脈衝 Lv.${P.empLv}`, '每次約 ' + P.emp])}</div>` : '';
    const goal = 19284, b = bestUp();
    return `<div id="tmPow"><span style="font:900 17px sans-serif;color:#9ff8ff">戰力</span><b>${P.total.toLocaleString()}</b>${up ? `<i>+${up}</i>` : ''}</div>
      <button class="tmCalcBtn" data-calc="1">${showCalc ? '收起計算 ▲' : '查看計算 ▼'}</button>${calc}
      <div class="tmGoal">緊急模式　${goal.toLocaleString()}　｜　目前 ${P.total.toLocaleString()}<div class="bar"><i style="width:${Math.max(1, Math.min(100, P.total / goal * 100))}%"></i></div></div>
      ${b ? `<div class="tmRec">推薦：${b.n}　戰力 +${b.d}<br><span style="color:#9fb">${costText(b.c)}${afford(b.c) ? '' : '（材料還不夠）'}</span><button data-rec="1">去升級</button></div>` : ''}`;
  }
  const ABILITY = {
    car: ['戰力屬於車子', '攻擊從車上的砲塔打出去。主角、零、鐵鏽和裝備，都是在幫車子加成。點「查看計算」可以看到每一項怎麼算。'],
    hero: ['合成加成', '主角沒有戰鬥力。他的手能把東西接在一起：每多連擊 1 次，攻擊力就多一截。升級讓每次連擊加得更多，滿級時 5 連擊傷害翻倍。'],
    zero: ['大招：電磁脈衝', '能量集滿後點零，對所有敵人放出電磁脈衝。零沒有特殊能力，但嘴巴很毒。'],
    dog: ['護車＋撿零件', '機械獵犬 H-01。原本被紅眼控制追殺你們，第 7 關打倒後被主角淨化，紅眼轉青，成了夥伴。點牠的頭像，這一回合的小攻擊牠會全部擋下（每關一次）；每關還會多叼回一份廢鐵。'],
    he: ['特殊能力：改裝', '合成灰色零件幫她充能，充滿後點她，把一排灰色零件全部變成你選的顏色。'],
  };
  const ART = { car: ['img/v1.webp'], hero: ['img/full_hero.webp', 'img/face0.webp'], zero: ['img/zero_full.webp'], dog: ['img/full_dog.webp', 'img/story/i_dog.webp'], he: ['img/story/p_he_smile.webp'] };
  window.renderTeam = function () {
    if (!document.getElementById('tmcss')) { const st = document.createElement('style'); st.id = 'tmcss'; st.textContent = css; document.head.appendChild(st); }
    if (sel === 'car') return renderCar();
    const c = Z.CHARS.find(x => x.id === sel) || Z.CHARS[0], lv = S.team[c.id], mx = Z.maxLv(S, c.id), cost = c.cost(lv), top = lv >= mx;
    const tabs = `<button data-tab="car">車子</button>` + Z.CHARS.map(x => `<button data-tab="${x.id}" class="${x.id === sel ? 'on' : ''}${open(x) ? '' : ' lock'}">${open(x) ? nameOf(x) : '？？？'}${x.id === 'hero' && S.gear.fresh.length ? '<i></i>' : ''}</button>`).join('');
    const art = ART[c.id] || [c.img];
    const ab = ABILITY[c.id];
    const st = stats(c, lv).map(([n, v, nx]) => `<div class="st"><span>${n}</span><span><em>${v}</em>${!top && nx !== v ? `<small>→${nx}</small>` : ''}</span></div>`).join('');
    let gear = '', pick = '';
    if (c.id === 'hero') {   // 主角頁：連擊倍率小表
      const tb = l => [1, 5, 10].map(n => '×' + (Math.round((1 + Z.SYNTH(l) * n) * 100) / 100)).join('</td><td>');
      gear = `<div class="lab">連擊倍率</div><table class="tmCombo"><tr><td></td><td>1 連擊</td><td>5 連擊</td><td>10 連擊</td></tr><tr><td>Lv.${lv}</td><td>${tb(lv)}</td></tr>${lv < Z.MAXLV ? `<tr><td style="color:#7fe39a">Lv.${lv + 1}</td><td>${tb(lv + 1)}</td></tr>` : ''}</table>`;
    }
    if (false) {
      gear = `<div class="lab">裝備（點一格換）</div><div class="slots">${Object.entries(Z.SLOTS).map(([k, n]) => { const it = Z.ITEMS[S.gear.eq[k]], fresh = S.gear.own.some(id => Z.ITEMS[id].slot === k && S.gear.fresh.includes(id));
        return `<button data-slot="${k}" class="${pickSlot === k ? 'on' : ''}"><small>${n}</small>　${it ? it.n : '（空）'}<i>${it ? it.txt : ''}</i>${fresh ? '<u>NEW</u>' : ''}</button>`; }).join('')}</div>`;
      if (pickSlot) { const mine = S.gear.own.filter(id => Z.ITEMS[id].slot === pickSlot);
        pick = `<div id="tmPick"><div style="font:900 17px sans-serif;color:#ffd23f">換${Z.SLOTS[pickSlot]}</div>${mine.length ? mine.map(id => { const it = Z.ITEMS[id], on = S.gear.eq[pickSlot] === id;
          return `<div data-eq="${id}" class="${on ? 'on' : ''}"><div><div style="font:900 17px sans-serif">${it.n}${S.gear.fresh.includes(id) ? ' <span style="color:#ff6a78;font-size:14px">NEW</span>' : ''}</div><div style="font:700 15px sans-serif;color:#8fa0ae">${it.d}</div></div>
            <div style="font:800 15px sans-serif;color:${on ? '#ffd23f' : '#9ff8ff'};white-space:nowrap">${on ? '穿著（點一下脫下）' : it.txt}</div></div>`; }).join('') : '<div style="color:#8fa0ae;margin-top:6px">這一格還沒有裝備。第一次打過每一關都會掉一件。</div>'}</div>`; }
    }
    let body;
    if (!open(c)) body = `<div id="tmBody"><div id="tmArt"><img src="${art[0]}" alt="" style="filter:brightness(0);opacity:.5"></div><div id="tmPanel"><h3>？？？</h3><div class="role">${c.id === 'he' ? '第二章會遇到' : `打過第 ${c.need} 關會遇到`}</div></div></div>`;
    else {
      const note = top ? (c.id === 'zero' && lv < Z.MAXLV ? '已到上限：升級「零的充電座」可以再升' : '已經最高等級') : '';
      body = `<div id="tmBody"><div id="tmArt"><img src="${art[0]}" alt="" data-fb="${art[1] || ''}">${c.id === 'dog' ? '<b>寵物</b>' : ''}</div>
        <div id="tmPanel"><div style="font:800 15px sans-serif;color:#ffd23f;margin-bottom:4px">🚗 車子戰力 ${Z.power(S).total.toLocaleString()}</div><h3>${nameOf(c)}<span>Lv.${lv}</span></h3><div class="role">${c.role}</div>${st}
          <div class="lab">${ab[0]}</div><div class="ab">${ab[1]}</div>${gear}
          ${top ? `<div class="lab" style="color:#ffd23f">${note}</div>` : c.id === 'zero' && !(S.seenRes && S.seenRes.core) ? `<button class="upb dim" data-lock="1">🔒 需要青晶核心<br><span style="font-size:14px">打倒大頭目才會拿到</span></button>` : `<button class="upb${afford(cost) ? '' : ' dim'}" data-up="${c.id}">升級 → Lv.${lv + 1}<br>${costText(cost)}</button>`}</div></div>${pick}`;
    }
    $('teamGrid').innerHTML = `<div id="tmTabs">${tabs}</div>${body}`;
    $('teamGrid').querySelectorAll('img[data-fb]').forEach(im => { if (im.dataset.fb) im.onerror = () => { im.onerror = null; im.src = im.dataset.fb; }; });
    $('teamGrid').querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { sel = b.dataset.tab; pickSlot = null; renderTeam(); });
    $('teamGrid').querySelectorAll('[data-lock]').forEach(b => b.onclick = () => toast('零只能用青晶核心升級。打倒大頭目才會掉。', 2600));
    $('teamGrid').querySelectorAll('[data-up]').forEach(b => b.onclick = () => {
      const cc = Z.CHARS.find(x => x.id === b.dataset.up), cs = cc.cost(S.team[cc.id]);
      if (!afford(cs)) { toast('資源不夠：' + costText(cs)); return; }
      const p0 = Z.power(S).total; pay(cs); S.team[cc.id]++; save(); try { renderTop(); } catch (e) {}
      const d = Z.power(S).total - p0; toast(`${nameOf(cc)} 升到 Lv.${S.team[cc.id]}！${d > 0 ? '　戰力 +' + d : ''}`, 2400); renderTeam();
    });
    $('teamGrid').querySelectorAll('[data-slot]').forEach(b => b.onclick = () => {
      const k = b.dataset.slot; pickSlot = pickSlot === k ? null : k;
      if (pickSlot) { S.gear.fresh = S.gear.fresh.filter(id => Z.ITEMS[id].slot !== k); save(); dot(); }
      renderTeam();
    });
    $('teamGrid').querySelectorAll('[data-eq]').forEach(b => b.onclick = () => {
      const id = b.dataset.eq, k = Z.ITEMS[id].slot; S.gear.eq[k] = S.gear.eq[k] === id ? null : id; save(); renderTeam();
    });
  };
  function renderCar() {
    const tabs = `<button data-tab="car" class="on">車子</button>` + Z.CHARS.map(x => `<button data-tab="${x.id}" class="${open(x) ? '' : 'lock'}">${open(x) ? nameOf(x) : '？？？'}</button>`).join('');
    const veh = `img/v${S.flags && S.flags.trike ? S.tier : 0}.webp`;
    const slots = `<div class="lab">車上裝備（點一格換）</div><div class="slots">${Object.entries(Z.SLOTS).map(([k, n]) => { const it = Z.ITEMS[S.gear.eq[k]], fresh = S.gear.own.some(id => Z.ITEMS[id].slot === k && S.gear.fresh.includes(id));
      return `<button data-slot="${k}" class="${pickSlot === k ? 'on' : ''}"><small>${n}</small>　${it ? it.n : '（空）'}<i>${it ? it.txt : ''}</i>${fresh ? '<u>NEW</u>' : ''}</button>`; }).join('')}</div>`;
    let pick = '';
    if (pickSlot) { const mine = S.gear.own.filter(id => Z.ITEMS[id].slot === pickSlot);
      pick = `<div id="tmPick"><div style="font:900 17px sans-serif;color:#ffd23f">換${Z.SLOTS[pickSlot]}</div>${mine.length ? mine.map(id => { const it = Z.ITEMS[id], on = S.gear.eq[pickSlot] === id;
        return `<div data-eq="${id}" class="${on ? 'on' : ''}"><div><div style="font:900 17px sans-serif">${it.n}</div><div style="font:700 15px sans-serif;color:#8fa0ae">${it.d}</div></div><div style="font:800 15px sans-serif;color:${on ? '#ffd23f' : '#9ff8ff'};white-space:nowrap">${on ? '穿著（點一下脫下）' : it.txt}</div></div>`; }).join('') : '<div style="color:#8fa0ae;margin-top:6px">這一格還沒有裝備。</div>'}</div>`; }
    const vn = S.flags && S.flags.trike ? ((typeof VEH !== 'undefined' ? VEH[S.tier - 1] : '') + ' +' + (S.sub || 0)) : '破腳踏車';
    $('teamGrid').innerHTML = `<div id="tmTabs">${tabs}</div><div id="tmBody"><div id="tmArt" style="align-items:center"><img src="${veh}" alt="" style="object-fit:contain;object-position:center"><b>${vn}</b></div>
      <div id="tmPanel">${carPanel()}<div class="lab">${ABILITY.car[0]}</div><div class="ab">${ABILITY.car[1]}</div>${slots}</div></div>${pick}`;
    $('teamGrid').querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { sel = b.dataset.tab; pickSlot = null; renderTeam(); });
    const cb = $('teamGrid').querySelector('[data-calc]'); if (cb) cb.onclick = () => { showCalc = !showCalc; renderTeam(); };
    const rb = $('teamGrid').querySelector('[data-rec]'); if (rb) rb.onclick = () => { const b = bestUp(); if (b) b.go(); };
    $('teamGrid').querySelectorAll('[data-slot]').forEach(b => b.onclick = () => { const k = b.dataset.slot; pickSlot = pickSlot === k ? null : k; if (pickSlot) { S.gear.fresh = S.gear.fresh.filter(id => Z.ITEMS[id].slot !== k); save(); dot(); } renderTeam(); });
    $('teamGrid').querySelectorAll('[data-eq]').forEach(b => b.onclick = () => { const id = b.dataset.eq, k = Z.ITEMS[id].slot; S.gear.eq[k] = S.gear.eq[k] === id ? null : id; save(); renderTeam(); });
  }
  // 回到基地時：剛打到的裝備提示一次
  { const nw = S.gear.fresh.filter(id => !(S.gear.told || []).includes(id));   // 2026-11-28 每件裝備只提示一次
    if (nw.length && S.intro === 'done') { S.gear.told = (S.gear.told || []).concat(nw); save(); setTimeout(() => toast(`拿到新裝備：${nw.map(id => Z.ITEMS[id].n).join('、')}（在「隊伍」）`, 3000), 1200); } }
  dot();
})();
