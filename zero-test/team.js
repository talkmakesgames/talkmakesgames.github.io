// 隊伍頁（2026-11-27 改版）：上面切換角色 → 左邊全身大圖、右邊個人面板（等級、數值、能力、裝備）
// 資料在 gear.js；零、寵物沒有特殊能力，之後的新角色才有
(function () {
  const Z = window.ZW_GEAR; if (!Z) return;
  let pickSlot = null, sel = 'hero';
  const cleared = () => (S.cleared && S.cleared.zero) || 0;
  const nameOf = c => c.id === 'hero' ? (S.hero || '主角') : c.id === 'zero' ? (S.ai || '零') : c.name;
  const open = c => cleared() >= c.need;
  function dot() { const d = $('teamDot'); if (d) d.style.display = S.gear.fresh.length ? 'block' : 'none'; }
  const css = `
  #tmTabs { display:flex; gap:8px; }
  #tmTabs button { flex:1; height:44px; border-radius:12px; border:1.5px solid rgba(63,240,255,.5); background:rgba(4,12,16,.9); color:#c8fbff; font:900 16px sans-serif; position:relative; }
  #tmTabs button.on { background:#3ff0ff; color:#00262c; border-color:#3ff0ff; }
  #tmTabs button.lock { opacity:.4; }
  #tmTabs button i { position:absolute; top:4px; right:6px; width:9px; height:9px; border-radius:50%; background:#ff4a5a; }
  #tmBody { display:flex; gap:10px; margin-top:10px; align-items:stretch; }
  #tmArt { width:42%; flex:none; min-height:430px; border-radius:14px; background:radial-gradient(ellipse at 50% 70%, rgba(63,240,255,.18), rgba(4,12,16,.9) 70%); border:1.5px solid rgba(63,240,255,.35); display:flex; align-items:flex-end; justify-content:center; overflow:hidden; position:relative; }
  #tmArt img { width:100%; height:100%; object-fit:contain; object-position:bottom; position:absolute; inset:0; }
  #tmArt b { position:absolute; left:8px; top:8px; font:900 13px sans-serif; color:#9ff8ff; background:rgba(0,0,0,.5); padding:2px 8px; border-radius:8px; }
  #tmPanel { flex:1; min-width:0; background:rgba(4,12,16,.92); border:1.5px solid rgba(63,240,255,.35); border-radius:14px; padding:10px; color:#e8f6f8; font:700 13px sans-serif; }
  #tmPanel h3 { margin:0; font:900 19px sans-serif; } #tmPanel h3 span { color:#9ff8ff; font-size:15px; margin-left:4px; }
  #tmPanel .role { color:#ffd23f; font:800 12px sans-serif; margin:2px 0 8px; }
  #tmPanel .st { display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed rgba(63,240,255,.18); }
  #tmPanel .st em { font-style:normal; color:#9ff8ff; } #tmPanel .st small { color:#7fe39a; margin-left:4px; }
  #tmPanel .lab { color:#8fa0ae; font:800 11px sans-serif; margin:10px 0 4px; letter-spacing:1px; }
  #tmPanel .ab { line-height:1.55; color:#d8eef2; }
  #tmPanel .upb { width:100%; margin-top:10px; min-height:42px; border:0; border-radius:10px; background:#ffd23f; color:#2a1c00; font:900 14px sans-serif; padding:4px; }
  #tmPanel .upb.dim { opacity:.4; }
  #tmPanel .slots { display:flex; flex-direction:column; gap:6px; }
  #tmPanel .slots button { text-align:left; background:rgba(4,30,36,.9); border:1.5px solid rgba(63,240,255,.4); border-radius:10px; padding:6px 8px; color:#e8f6f8; font:800 12px sans-serif; position:relative; }
  #tmPanel .slots button.on { border-color:#ffd23f; background:rgba(255,210,63,.15); }
  #tmPanel .slots small { color:#8fa0ae; } #tmPanel .slots i { color:#9ff8ff; font-style:normal; display:block; font-size:11px; }
  #tmPanel .slots u { position:absolute; top:4px; right:6px; background:#ff4a5a; color:#fff; font-size:10px; border-radius:6px; padding:0 4px; text-decoration:none; }
  #tmPick { margin-top:10px; background:rgba(4,12,16,.94); border:1.5px solid #ffd23f; border-radius:14px; padding:10px; }
  #tmPick div[data-eq] { display:flex; justify-content:space-between; gap:8px; align-items:center; padding:8px 10px; margin-top:6px; border-radius:8px; background:rgba(255,255,255,.04); cursor:pointer; color:#e8f6f8; }
  #tmPick div[data-eq].on { background:rgba(63,240,255,.15); }
  `;
  // 每個角色面板要顯示的數值：[名稱, 目前值, 下一級值]
  function stats(c, lv) {
    const e = Z.eff(S), pct = v => `+${Math.round(v * 100)}%`;
    if (c.id === 'hero') {
      const g = k => { let v = 0; for (const s in S.gear.eq) { const it = Z.ITEMS[S.gear.eq[s]]; if (it && it.eff[k]) v += it.eff[k]; } return v; };
      return [['攻擊力加成', pct(0.06 * (lv - 1) + g('atk')), pct(0.06 * lv + g('atk'))],
        ['暴擊率', `${Math.round((0.10 + 0.01 * (lv - 1) + g('crit')) * 100)}%`, `${Math.round((0.10 + 0.01 * lv + g('crit')) * 100)}%`],
        ['暴擊傷害', pct(1 + 0.05 * (lv - 1)), pct(1 + 0.05 * lv)],
        ['車子耐久', pct(0.05 * (lv - 1) + g('hp')), pct(0.05 * lv + g('hp'))]];
    }
    if (c.id === 'zero') return [['大招傷害', pct(0.15 * (lv - 1)), pct(0.15 * lv)], ['充能速度', pct(0.05 * (lv - 1)), pct(0.05 * lv)], ['暴擊傷害', pct(0.03 * (lv - 1)), pct(0.03 * lv)]];
    if (c.id === 'dog') return [['每關多撿廢鐵', `+${20 + 10 * (lv - 1)}`, `+${20 + 10 * lv}`], ['替車子擋攻擊', '每關 1 次', '每關 1 次']];
    if (c.id === 'he') return [['改裝充能速度', pct(0.12 * (lv - 1)), pct(0.12 * lv)]];
    return [];
  }
  const ABILITY = {
    hero: ['能力：合成', '用雙手把東西接在一起。戰鬥裡把三個一樣的零件連起來，就會合成武器開火；平常可以把廢鐵合成成機器人和載具。'],
    zero: ['大招：電磁脈衝', '能量集滿後點零，對所有敵人放出電磁脈衝。零沒有特殊能力，但嘴巴很毒。'],
    dog: ['護車＋撿零件', '寵物。點牠的頭像，這一回合的小攻擊牠會全部擋下（每關一次）；每關還會多叼回一份廢鐵。'],
    he: ['特殊能力：改裝', '合成灰色零件幫她充能，充滿後點她，把一排灰色零件全部變成你選的顏色。'],
  };
  const ART = { hero: ['img/full_hero.webp', 'img/face0.webp'], zero: ['img/zero_full.webp'], dog: ['img/full_dog.webp', 'img/story/i_dog.webp'], he: ['img/story/p_he_smile.webp'] };
  window.renderTeam = function () {
    if (!document.getElementById('tmcss')) { const st = document.createElement('style'); st.id = 'tmcss'; st.textContent = css; document.head.appendChild(st); }
    const c = Z.CHARS.find(x => x.id === sel) || Z.CHARS[0], lv = S.team[c.id], mx = Z.maxLv(S, c.id), cost = c.cost(lv), top = lv >= mx;
    const tabs = Z.CHARS.map(x => `<button data-tab="${x.id}" class="${x.id === sel ? 'on' : ''}${open(x) ? '' : ' lock'}">${open(x) ? nameOf(x) : '？？？'}${x.id === 'hero' && S.gear.fresh.length ? '<i></i>' : ''}</button>`).join('');
    const art = ART[c.id] || [c.img];
    const ab = ABILITY[c.id];
    const st = stats(c, lv).map(([n, v, nx]) => `<div class="st"><span>${n}</span><span><em>${v}</em>${!top && nx !== v ? `<small>→${nx}</small>` : ''}</span></div>`).join('');
    let gear = '', pick = '';
    if (c.id === 'hero') {
      gear = `<div class="lab">裝備（點一格換）</div><div class="slots">${Object.entries(Z.SLOTS).map(([k, n]) => { const it = Z.ITEMS[S.gear.eq[k]], fresh = S.gear.own.some(id => Z.ITEMS[id].slot === k && S.gear.fresh.includes(id));
        return `<button data-slot="${k}" class="${pickSlot === k ? 'on' : ''}"><small>${n}</small>　${it ? it.n : '（空）'}<i>${it ? it.txt : ''}</i>${fresh ? '<u>NEW</u>' : ''}</button>`; }).join('')}</div>`;
      if (pickSlot) { const mine = S.gear.own.filter(id => Z.ITEMS[id].slot === pickSlot);
        pick = `<div id="tmPick"><div style="font:900 15px sans-serif;color:#ffd23f">換${Z.SLOTS[pickSlot]}</div>${mine.length ? mine.map(id => { const it = Z.ITEMS[id], on = S.gear.eq[pickSlot] === id;
          return `<div data-eq="${id}" class="${on ? 'on' : ''}"><div><div style="font:900 14px sans-serif">${it.n}${S.gear.fresh.includes(id) ? ' <span style="color:#ff6a78;font-size:11px">NEW</span>' : ''}</div><div style="font:700 12px sans-serif;color:#8fa0ae">${it.d}</div></div>
            <div style="font:800 12px sans-serif;color:${on ? '#ffd23f' : '#9ff8ff'};white-space:nowrap">${on ? '穿著（點一下脫下）' : it.txt}</div></div>`; }).join('') : '<div style="color:#8fa0ae;margin-top:6px">這一格還沒有裝備。第一次打過每一關都會掉一件。</div>'}</div>`; }
    }
    let body;
    if (!open(c)) body = `<div id="tmBody"><div id="tmArt"><img src="${art[0]}" alt="" style="filter:brightness(0);opacity:.5"></div><div id="tmPanel"><h3>？？？</h3><div class="role">${c.id === 'he' ? '第二章會遇到' : `打過 1-${c.need} 會遇到`}</div></div></div>`;
    else {
      const note = top ? (c.id === 'zero' && lv < Z.MAXLV ? '已到上限：升級「零的充電座」可以再升' : '已經最高等級') : '';
      body = `<div id="tmBody"><div id="tmArt"><img src="${art[0]}" alt="" data-fb="${art[1] || ''}">${c.id === 'dog' ? '<b>寵物</b>' : ''}</div>
        <div id="tmPanel"><h3>${nameOf(c)}<span>Lv.${lv}</span></h3><div class="role">${c.role}</div>${st}
          <div class="lab">${ab[0]}</div><div class="ab">${ab[1]}</div>${gear}
          ${top ? `<div class="lab" style="color:#ffd23f">${note}</div>` : `<button class="upb${afford(cost) ? '' : ' dim'}" data-up="${c.id}">升級 → Lv.${lv + 1}<br>${costText(cost)}</button>`}</div></div>${pick}`;
    }
    $('teamGrid').innerHTML = `<div id="tmTabs">${tabs}</div>${body}`;
    $('teamGrid').querySelectorAll('img[data-fb]').forEach(im => { if (im.dataset.fb) im.onerror = () => { im.onerror = null; im.src = im.dataset.fb; }; });
    $('teamGrid').querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { sel = b.dataset.tab; pickSlot = null; renderTeam(); });
    $('teamGrid').querySelectorAll('[data-up]').forEach(b => b.onclick = () => {
      const cc = Z.CHARS.find(x => x.id === b.dataset.up), cs = cc.cost(S.team[cc.id]);
      if (!afford(cs)) { toast('資源不夠：' + costText(cs)); return; }
      pay(cs); S.team[cc.id]++; save(); try { renderTop(); } catch (e) {}
      toast(`${nameOf(cc)} 升到 Lv.${S.team[cc.id]}！`); renderTeam();
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
  // 回到基地時：剛打到的裝備提示一次
  if (S.gear.fresh.length && S.intro === 'done') setTimeout(() => toast(`拿到新裝備：${S.gear.fresh.map(id => Z.ITEMS[id].n).join('、')}（在「隊伍」）`, 3000), 1200);
  dot();
})();
