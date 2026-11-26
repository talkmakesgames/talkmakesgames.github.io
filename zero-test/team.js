// 2026-11-26 隊伍頁：角色能力表＋升級＋主角裝備（資料在 gear.js）
(function () {
  const Z = window.ZW_GEAR; if (!Z) return;
  let pickSlot = null;   // 正在換哪一格裝備
  const cleared = () => (S.cleared && S.cleared.zero) || 0;
  const nameOf = c => c.id === 'hero' ? (S.hero || '主角') : c.id === 'zero' ? (S.ai || '零') : c.name;
  function dot() { const d = $('teamDot'); if (d) d.style.display = S.gear.fresh.length ? 'block' : 'none'; }
  window.renderTeam = function () {
    const e = Z.eff(S), t = S.team;
    const stat = `<div class="card" style="text-align:left;padding:10px 12px;border-color:#ffd23f">
      <div style="font:900 16px sans-serif;color:#ffd23f">目前的戰力加成</div>
      <div class="sub" style="font-size:13px">武器傷害 ×${e.atk.toFixed(2)}｜車子耐久 ×${e.hp.toFixed(2)}｜大招傷害 ×${e.emp.toFixed(2)}${e.start ? `｜開場能量 ${e.start}%` : ''}${e.crit ? `｜暴擊 +${Math.round(e.crit * 100)}%` : ''}</div></div>`;
    const chars = Z.CHARS.map(c => {
      const lv = t[c.id], open = cleared() >= c.need, mx = Z.maxLv(S, c.id), cost = c.cost(lv), top = lv >= mx;
      if (!open) return `<div class="card locked" style="display:flex;gap:10px;align-items:center;text-align:left;padding:10px;opacity:.55"><img src="${c.img}" alt="" style="width:64px;height:64px;border-radius:12px;object-fit:cover;filter:brightness(.2)"><div><div>？？？</div><div class="sub">打過 1-${c.need} 會遇到</div></div></div>`;
      const note = top ? (c.id === 'zero' && lv < Z.MAXLV ? `已到上限：升級設施「零的充電座」可以再升` : '已經最高') : `下一級：${c.eff(lv + 1)}`;
      return `<div class="card" style="display:flex;gap:10px;align-items:center;text-align:left;padding:10px">
        <img src="${c.img}" alt="" style="width:72px;height:72px;border-radius:12px;object-fit:cover;flex:none;background:#0b1820">
        <div style="flex:1;min-width:0">
          <div style="font:900 17px sans-serif">${nameOf(c)} <span style="color:#9ff8ff">Lv.${lv}</span><span class="sub" style="margin-left:6px">${c.role}</span></div>
          <div class="sub" style="font-size:13px;color:#e8f6f8">${lv > 1 ? c.eff(lv) : '還沒升級'}</div>
          <div class="sub" style="font-size:12px;color:#ffd23f">${note}</div>
          ${top ? '' : `<button class="btn" data-up="${c.id}" style="position:relative;margin-top:6px;height:36px;width:100%;font-size:14px;${afford(cost) ? '' : 'opacity:.4'}">升級（${costText(cost)}）</button>`}
        </div></div>`;
    }).join('');
    const slots = Object.entries(Z.SLOTS).map(([k, n]) => {
      const it = Z.ITEMS[S.gear.eq[k]], fresh = S.gear.own.some(id => Z.ITEMS[id].slot === k && S.gear.fresh.includes(id));
      return `<button data-slot="${k}" style="flex:1;min-width:0;background:${pickSlot === k ? 'rgba(255,210,63,.18)' : 'rgba(4,12,16,.9)'};border:1.5px solid ${pickSlot === k ? '#ffd23f' : 'rgba(63,240,255,.5)'};border-radius:10px;padding:8px 4px;color:#e8f6f8;font:800 13px sans-serif;position:relative">
        <div style="color:#8fa0ae;font-size:12px">${n}</div><div style="margin-top:2px">${it ? it.n : '（空）'}</div><div style="color:#9ff8ff;font-size:11px;margin-top:2px">${it ? it.txt : ''}</div>
        ${fresh ? '<span style="position:absolute;top:4px;right:6px;background:#ff4a5a;color:#fff;font-size:10px;border-radius:6px;padding:0 4px">NEW</span>' : ''}</button>`;
    }).join('');
    let list = '';
    if (pickSlot) {
      const mine = S.gear.own.filter(id => Z.ITEMS[id].slot === pickSlot);
      list = `<div style="margin-top:8px">${mine.length ? mine.map(id => { const it = Z.ITEMS[id], on = S.gear.eq[pickSlot] === id;
        return `<div data-eq="${id}" style="display:flex;justify-content:space-between;gap:8px;align-items:center;padding:8px 10px;margin-top:6px;border-radius:8px;background:${on ? 'rgba(63,240,255,.15)' : 'rgba(255,255,255,.04)'};cursor:pointer">
          <div><div style="font:900 14px sans-serif">${it.n}${S.gear.fresh.includes(id) ? ' <span style="color:#ff6a78;font-size:11px">NEW</span>' : ''}</div><div class="sub" style="font-size:12px">${it.d}</div></div>
          <div style="font:800 12px sans-serif;color:${on ? '#ffd23f' : '#9ff8ff'};white-space:nowrap">${on ? '穿著（點一下脫下）' : it.txt}</div></div>`; }).join('')
        : '<div class="sub" style="margin-top:6px">這一格還沒有裝備。打過新的關卡會掉。</div>'}</div>`;
    }
    const gear = `<div class="card" style="text-align:left;padding:10px 12px">
      <div style="font:900 16px sans-serif;color:#9ff8ff">${S.hero || '主角'}的裝備</div>
      <div class="sub" style="font-size:12px">點一格來換裝備。第一次打過每一關都會掉一件。</div>
      <div style="display:flex;gap:8px;margin-top:8px">${slots}</div>${list}</div>`;
    $('teamGrid').innerHTML = stat + chars + gear;
    $('teamGrid').querySelectorAll('[data-up]').forEach(b => b.onclick = () => {
      const c = Z.CHARS.find(x => x.id === b.dataset.up), cost = c.cost(S.team[c.id]);
      if (!afford(cost)) { toast('資源不夠：' + costText(cost)); return; }
      pay(cost); S.team[c.id]++; save(); try { renderTop(); } catch (e) {}
      toast(`${nameOf(c)} 升到 Lv.${S.team[c.id]}！`); renderTeam();
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
