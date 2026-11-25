// 廢域方舟：首頁附加功能（2026-11-26）
// 1. 「符合傳送資格」分享卡：選加班時數＋主管最常傳的話 → 產生圖卡（只在手機裡畫，不上傳、不記錄時數）
// 2. 加班模式入口（每日同一盤面、自己的最佳紀錄）
// 3. 設定：回報問題、隱私權政策
(function () {
  const $ = id => document.getElementById(id);
  const css = `
  .xbtn{position:absolute;left:12px;width:84px;height:70px;border-radius:14px;background:rgba(4,12,16,.88);border:1.5px solid rgba(63,240,255,.7);color:#c8fbff;font:900 13px sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;z-index:4}
  .xbtn b{font-size:24px;line-height:1}
  .xbtn .new{position:absolute;top:-7px;right:-7px;background:#ff3b3b;color:#fff;font:900 11px/18px sans-serif;border-radius:9px;padding:0 6px}
  #setBtn{position:absolute;top:142px;right:12px;width:40px;height:34px;border-radius:999px;background:rgba(4,12,16,.85);border:1.5px solid rgba(63,240,255,.5);color:#c8fbff;font:800 17px sans-serif;z-index:4}
  #xov{position:absolute;inset:0;background:rgba(0,0,0,.82);z-index:70;display:none;align-items:center;justify-content:center}
  #xov .bx{width:480px;max-height:900px;overflow:auto;background:rgba(4,12,16,.98);border:1.5px solid #3ff0ff;border-radius:16px;padding:20px;color:#e8f6f8;font:700 15px sans-serif;text-align:center}
  #xov h3{margin:0 0 6px;color:#3ff0ff;font:900 22px sans-serif}
  #xov .sub{color:#8fa0ae;font-size:13px;margin-bottom:12px}
  #xov .chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:10px 0}
  #xov .chip{padding:9px 12px;border-radius:999px;border:1.5px solid rgba(63,240,255,.45);background:rgba(63,240,255,.06);color:#d8f6fa;font:800 14px sans-serif}
  #xov .chip.on{background:#3ff0ff;color:#00262c}
  #xov input[type=range]{width:100%;accent-color:#3ff0ff}
  #xov .big{font:900 40px sans-serif;color:#fff}
  #xov button.m{display:block;width:100%;margin-top:10px;height:50px;border-radius:12px;border:1.5px solid #3ff0ff;background:rgba(63,240,255,.12);color:#e8ffff;font:800 16px sans-serif}
  #xov button.m.main{background:#3ff0ff;color:#00262c}
  #xov img.card{width:100%;border-radius:12px;margin:6px 0}
  #xov textarea{width:100%;height:120px;box-sizing:border-box;background:#0b1118;color:#cfe;border:1px solid #2c4650;border-radius:8px;font:12px monospace;padding:8px}
  `;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const home = $('scr-home'), stage = $('stage');
  const ov = document.createElement('div'); ov.id = 'xov'; ov.innerHTML = '<div class="bx" id="xbx"></div>'; stage.appendChild(ov);
  ov.addEventListener('click', e => { if (e.target === ov) close(); });
  function open(html) { $('xbx').innerHTML = html; ov.style.display = 'flex'; }
  function close() { ov.style.display = 'none'; }
  function btn(id, top, icon, label, isNew) { const b = document.createElement('button'); b.className = 'xbtn'; b.id = id; b.style.top = top + 'px'; b.innerHTML = `<b>${icon}</b>${label}` + (isNew ? '<span class="new">NEW</span>' : ''); home.appendChild(b); return b; }
  const getS = () => window.__zwS ? window.__zwS() : null;
  // 新玩家先不要一次看到太多入口：打過 1-1 才出現傳送資格，打過 1-3 才出現加班模式
  const cleared = () => { const S = getS(); return (S && S.cleared && S.cleared.zero) || 0; };
  const track = (n, p) => { try { window.tmgTrack && window.tmgTrack(n, p); } catch (e) {} };

  // ═══ 1. 分享卡 ═══
  const PHRASES = ['報告呢？', '明天早上要', '在嗎？', '辛苦了，再一下下', '這個很簡單吧', '你先弄一下'];
  const TIERS = [[5, '準時下班的傳說'], [20, '正常社畜'], [45, '資深社畜'], [80, '加班戰士'], [120, '人形伺服器'], [1e9, '人形伺服器 Pro']];
  const tierOf = h => TIERS.findIndex(t => h <= t[0]);
  let hours = 46, phrase = 0;
  const cardBtn = btn('cardBtn', 206, '📇', '傳送資格', !((getS() || {}).flags || {}).card);
  cardBtn.onclick = () => { track('zw_card_open'); cardForm(); };
  if (cleared() < 1) cardBtn.style.display = 'none';
  function cardForm() {
    open(`<h3>你符合傳送資格嗎？</h3><div class="sub">只在你的手機裡畫成圖片，不會上傳、也不會記錄你的答案</div>
      <div>這個月加班大約幾小時？</div><div class="big" id="hv">${hours} 小時</div>
      <input type="range" id="hr" min="0" max="200" step="1" value="${hours}">
      <div style="margin-top:12px">主管最常傳給你的話：</div>
      <div class="chips">${PHRASES.map((p, i) => `<button class="chip ${i === phrase ? 'on' : ''}" data-p="${i}">${p}</button>`).join('')}</div>
      <button class="m main" id="mk">產生我的卡片</button><button class="m" id="cx">先不要</button>`);
    $('hr').oninput = e => { hours = +e.target.value; $('hv').textContent = hours + ' 小時'; };
    $('xbx').querySelectorAll('.chip').forEach(c => c.onclick = () => { phrase = +c.dataset.p; $('xbx').querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x === c)); });
    $('cx').onclick = close; $('mk').onclick = makeCard;
  }
  function wrapText(x, s, maxW) { const out = []; let line = ''; for (const ch of s) { if (x.measureText(line + ch).width > maxW) { out.push(line); line = ch; } else line += ch; } if (line) out.push(line); return out; }
  function makeCard() {
    const W = 1080, H = 1350, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
    const ti = tierOf(hours), title = TIERS[ti][1], ok = hours >= 46;
    const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#071016'); g.addColorStop(1, '#10141c'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.strokeStyle = 'rgba(63,240,255,.10)'; x.lineWidth = 2; for (let i = 0; i < W; i += 54) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, H); x.stroke(); } for (let j = 0; j < H; j += 54) { x.beginPath(); x.moveTo(0, j); x.lineTo(W, j); x.stroke(); }
    x.strokeStyle = '#3ff0ff'; x.lineWidth = 6; x.strokeRect(36, 36, W - 72, H - 72);
    const F = '"Microsoft JhengHei","PingFang TC","Noto Sans TC",sans-serif';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    // 最上面：符合／尚未符合傳送資格
    x.save(); x.translate(W / 2, 150); x.rotate(-0.04);
    x.strokeStyle = ok ? '#ff3b4a' : '#5d6b75'; x.lineWidth = 8; x.strokeRect(-330, -62, 660, 124);
    x.fillStyle = ok ? '#ff3b4a' : '#7d8b95'; x.font = `900 ${ok ? 76 : 54}px ${F}`; x.fillText(ok ? '符合傳送資格' : '尚未符合傳送資格', 0, 4); x.restore();
    x.fillStyle = '#8fa0ae'; x.font = `700 34px ${F}`; x.fillText('廢域方舟　職場等級鑑定', W / 2, 270);
    x.fillStyle = '#3ff0ff'; x.font = `900 ${title.length > 6 ? 96 : 110}px ${F}`; x.shadowColor = '#3ff0ff'; x.shadowBlur = 30; x.fillText(title, W / 2, 420); x.shadowBlur = 0;
    x.fillStyle = '#fff'; x.font = `900 64px ${F}`; x.fillText(`本月加班　${hours} 小時`, W / 2, 545);
    // 等級條
    for (let i = 0; i < 6; i++) { x.fillStyle = i <= ti ? (i >= 4 ? '#ff3b4a' : '#3ff0ff') : '#26323b'; x.fillRect(150 + i * 132, 610, 118, 22); }
    // 主管訊息泡泡
    x.fillStyle = '#e9edf1'; const bx = 150, by = 700, bw = 780, bh = 190; x.beginPath(); x.roundRect ? x.roundRect(bx, by, bw, bh, 30) : x.rect(bx, by, bw, bh); x.fill();
    x.beginPath(); x.moveTo(bx + 60, by + bh); x.lineTo(bx + 40, by + bh + 46); x.lineTo(bx + 120, by + bh); x.fill();
    x.fillStyle = '#5b6670'; x.font = `700 32px ${F}`; x.textAlign = 'left'; x.fillText('主管', bx + 40, by + 50);
    x.fillStyle = '#111'; x.font = `900 66px ${F}`; x.fillText(PHRASES[phrase], bx + 40, by + 125); x.textAlign = 'center';
    // 零的評語
    const S = getS(), name = (S && S.hero) || '';
    const Z = ok ? ['檢測完畢。你的身體比你誠實。', '這不是勳章，是警告燈。', '我建議你今天準時下班。這是命令。'] : ['數據正常。請保持。', '很好。下班時間就是下班時間。', '你可能不需要被傳送。恭喜。'];
    x.fillStyle = '#c8fbff'; x.font = `800 40px ${F}`; x.fillText('零：「' + Z[(hours + phrase) % 3] + '」', W / 2, 1010);
    if (name) { x.fillStyle = '#8fa0ae'; x.font = `700 32px ${F}`; x.fillText(`鑑定對象：${name}`, W / 2, 1080); }
    x.fillStyle = '#ffd23f'; x.font = `900 38px ${F}`; x.fillText('記得下班。', W / 2, 1170);
    x.fillStyle = '#6f8592'; x.font = `700 30px ${F}`; x.fillText('廢域方舟｜talkmakesgames.github.io', W / 2, 1250);
    const url = c.toDataURL('image/png');
    let reward = '';
    if (S && !(S.flags && S.flags.card)) { S.flags = S.flags || {}; S.flags.card = 1; S.res.coin = (S.res.coin || 0) + 300; window.__zwSave && window.__zwSave(); reward = '<div style="color:#ffd23f;margin:4px 0">第一次鑑定獎勵：金幣 +300</div>'; }
    track('zw_card_make', { tier: ti });
    open(`<h3>你的鑑定結果</h3>${reward}<img class="card" src="${url}" alt="分享卡"><button class="m main" id="sh">分享圖片</button><button class="m" id="dl">存到手機</button><button class="m" id="again">重新填</button><button class="m" id="cx">關閉</button>`);
    cardBtn.querySelector('.new') && cardBtn.querySelector('.new').remove();
    $('cx').onclick = close; $('again').onclick = cardForm;
    $('dl').onclick = () => { const a = document.createElement('a'); a.href = url; a.download = '廢域方舟_傳送資格.png'; a.click(); track('zw_card_save'); };
    $('sh').onclick = async () => {
      track('zw_card_share');
      try { const blob = await (await fetch(url)).blob(); const file = new File([blob], '廢域方舟_傳送資格.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], text: '我的職場等級鑑定：' + title + '｜廢域方舟' }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
      $('dl').onclick(); window.toast && toast('你的手機不能直接分享，已經幫你存成圖片', 2400);
    };
  }

  // ═══ 2. 加班模式入口 ═══
  const otBtn = btn('otBtn', 286, '🌙', '加班模式');
  if (cleared() < 3) otBtn.style.display = 'none';
  otBtn.onclick = () => {
    let best = null; try { best = JSON.parse(localStorage.getItem('zw-ot-best')); } catch (e) {}
    const d0 = new Date(), today = `${d0.getFullYear()}-${String(d0.getMonth() + 1).padStart(2, '0')}-${String(d0.getDate()).padStart(2, '0')}`;
    const tb = best && best.date === today ? best.today : 0, ab = best ? best.all || 0 : 0;
    open(`<h3>加班模式</h3><div class="sub">每天全部玩家同一個盤面。撐越多波越厲害。<br>能力統一，只比技術；不花燃料、不影響劇情。</div>
      <div style="display:flex;gap:10px;margin:14px 0"><div style="flex:1;border:1px solid #2c4650;border-radius:10px;padding:10px">今天最佳<div class="big">${tb}</div>波</div><div style="flex:1;border:1px solid #2c4650;border-radius:10px;padding:10px">歷史最佳<div class="big">${ab}</div>波</div></div>
      <div class="sub">今天的盤面：${today}</div>
      <button class="m main" id="go">開始加班</button><button class="m" id="cx">今天不加班</button>`);
    $('cx').onclick = close; $('go').onclick = () => { track('zw_ot_start'); location.href = 'battle/?ot=1'; };
  };

  // ═══ 3. 設定：回報問題、隱私權政策 ═══
  const setBtn = document.createElement('button'); setBtn.id = 'setBtn'; setBtn.textContent = '⚙'; setBtn.setAttribute('aria-label', '設定'); home.appendChild(setBtn);
  setBtn.onclick = () => {
    open(`<h3>設定</h3><button class="m" id="rp">🐞 回報問題</button><button class="m" id="pv">🔒 隱私權政策</button><button class="m" id="cx">關閉</button>
      <div class="sub" style="margin-top:12px">廢域方舟（開發中測試版）｜動嘴做遊戲</div>`);
    $('cx').onclick = close; $('pv').onclick = () => { location.href = 'privacy.html'; };
    $('rp').onclick = report;
  };
  function report() {
    const S = getS();
    const info = [`版本：測試版 2026-11-26`, `裝置：${navigator.userAgent}`, `螢幕：${screen.width}x${screen.height} @${devicePixelRatio}`,
      `進度：第一章 ${(S && S.cleared && S.cleared.zero) || 0}/5，載具第 ${(S && S.tier) || 1} 階`, `時間：${new Date().toLocaleString()}`].join('\n');
    open(`<h3>回報問題</h3><div class="sub">遇到 bug 或卡住？把下面的資訊複製起來，<br>連同「發生什麼事」一起在頻道留言或私訊告訴我們。<br>（裡面沒有你的名字、帳號或位置）</div>
      <textarea id="ri" readonly>${info}</textarea>
      <button class="m main" id="cp">複製資訊</button><button class="m" id="ch">前往動嘴做遊戲頻道首頁</button><button class="m" id="cx">關閉</button>`);
    $('cx').onclick = close; $('ch').onclick = () => { location.href = '/'; };
    $('cp').onclick = async () => { try { await navigator.clipboard.writeText(info); window.toast && toast('已複製', 1500); } catch (e) { $('ri').select(); document.execCommand && document.execCommand('copy'); window.toast && toast('已複製', 1500); } };
  }
})();
