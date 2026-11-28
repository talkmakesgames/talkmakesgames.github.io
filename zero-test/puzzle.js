// 合成拼圖（滑動拼圖）：每次合成、升級都要玩。2026-11-26
// 用法：Puzzle.open({ img: 'img/v1.webp', size: 3, title: '合成：三輪車', onDone: () => {...}, onCancel: () => {...} })
// 圖片＝正在合成的那台機器。size：3～6。
// 提示：記住「打亂的步驟」，玩家每走一步就更新，提示永遠是「回到原圖」的下一步。
(function () {
  const css = `
  #pz { position:absolute; inset:0; z-index:80; background:rgba(2,10,14,.96); display:flex; flex-direction:column; align-items:center; font-family:sans-serif; color:#dffcff; }
  #pz .pzt { margin-top:56px; font:900 30px sans-serif; text-shadow:0 0 10px rgba(63,240,255,.7); }
  #pz .pzs { margin-top:6px; font:700 16px sans-serif; color:#9ff8ff; opacity:.85; }
  #pz .pzb { position:relative; margin-top:26px; width:480px; height:480px; border:3px solid #3ff0ff; border-radius:10px; background:#04141a; box-shadow:0 0 26px rgba(63,240,255,.45); overflow:hidden; touch-action:none; }
  #pz .pzc { position:absolute; box-sizing:border-box; border:1.5px solid rgba(2,10,14,.9); border-radius:6px; background-repeat:no-repeat; transition:transform .14s ease-out; cursor:pointer; }
  #pz .pzc.ok { box-shadow:inset 0 0 0 2px rgba(63,240,255,.35); }
  #pz .pzc.hint { box-shadow:inset 0 0 0 4px #ffd23f, 0 0 18px #ffd23f; z-index:2; animation:pzh .5s ease-in-out infinite alternate; }
  @keyframes pzh { from { filter:brightness(1) } to { filter:brightness(1.5) } }
  #pz .pzo { position:absolute; inset:0; background-size:100% 100%; opacity:0; pointer-events:none; transition:opacity .2s; z-index:3; }
  #pz .pzo.on { opacity:.92; }
  #pz .pzbar { display:flex; gap:12px; margin-top:22px; }
  #pz .pzbar button { background:rgba(4,30,36,.95); color:#dffcff; border:2px solid #3ff0ff; border-radius:12px; padding:12px 20px; font:900 19px sans-serif; }
  #pz .pzbar button.y { border-color:#ffd23f; color:#ffd23f; }
  #pz .pzm { margin-top:14px; font:700 16px sans-serif; color:#8fa0ae; }
  #pz .pzwin { position:absolute; left:0; right:0; top:420px; text-align:center; font:900 46px sans-serif; color:#fff; text-shadow:0 0 20px #3ff0ff,0 0 40px #3ff0ff; opacity:0; transform:scale(.6); transition:.35s; pointer-events:none; z-index:5; }
  #pz .pzwin.on { opacity:1; transform:scale(1); }
  #pz .pzflash { position:absolute; inset:0; background:#3ff0ff; opacity:0; pointer-events:none; z-index:4; transition:opacity .5s; }
  `;
  let el = null;
  const TEST = /zero-test/.test(location.pathname) || /^(localhost|127\.0\.0\.1)$/.test(location.hostname);   // 2026-11-27 跳過按鈕：只有測試版有，正式版沒有
  // 2026-11-28 跳過模式：'free'＝免費跳過（測試版）、'ad'＝看廣告才能跳過（正式版預留，廣告之後再接 window.ZW_AD.show(cb)）
  const SKIP_MODE = window.ZW_SKIP_MODE || (TEST ? 'free' : 'ad');
  const FAST = { 3: 45, 4: 120, 5: 240, 6: 420 };   // 快速完成：幾秒內拼完有額外獎勵
  function beep(f, d, v) { try { const a = beep.c = beep.c || new (window.AudioContext || window.webkitAudioContext)(); const o = a.createOscillator(), g = a.createGain(); o.frequency.value = f; g.gain.value = v || .06; g.gain.exponentialRampToValueAtTime(.0001, a.currentTime + d); o.connect(g); g.connect(a.destination); o.start(); o.stop(a.currentTime + d); } catch (e) {} }
  function open(o) {
    if (!o._sq) {   // 2026-11-28 長方形的圖（載具）先補成正方形，拼圖才不會被拉扁
      const im = new Image(); im.onload = () => { o._sq = 1; if (im.width !== im.height) { const n = Math.max(im.width, im.height), cv = document.createElement('canvas'); cv.width = cv.height = n;
        const g = cv.getContext('2d'), gr = g.createLinearGradient(0, 0, n, n); gr.addColorStop(0, '#0e4652'); gr.addColorStop(0.5, '#0a1c2a'); gr.addColorStop(1, '#3a1220'); g.fillStyle = gr; g.fillRect(0, 0, n, n);   // 藍圖底：每一塊顏色不同，空白的格子也分得出來
        g.strokeStyle = 'rgba(63,240,255,.18)'; g.lineWidth = Math.max(1, n / 400); for (let i = 1; i < 16; i++) { const q = i * n / 16; g.beginPath(); g.moveTo(q, 0); g.lineTo(q, n); g.moveTo(0, q); g.lineTo(n, q); g.stroke(); }
        g.strokeStyle = 'rgba(63,240,255,.35)'; g.lineWidth = n / 160; g.beginPath(); g.arc(n / 2, n / 2, n * 0.46, 0, Math.PI * 2); g.stroke();
        g.drawImage(im, (n - im.width) / 2, (n - im.height) / 2); o.img = cv.toDataURL('image/png'); } open(o); };
      im.onerror = () => { o._sq = 1; open(o); }; im.src = o.img; return; }
    close();
    if (!document.getElementById('pzcss')) { const st = document.createElement('style'); st.id = 'pzcss'; st.textContent = css; document.head.appendChild(st); }
    const N = Math.max(3, Math.min(6, o.size || 3)), B = 480, W = B / N;
    const host = document.getElementById('stage') || document.body;
    el = document.createElement('div'); el.id = 'pz';
    el.innerHTML = `<div class="pzt">${o.title || '合成'}</div><div class="pzs">把零件放對位置，合成才會成功（${N}×${N}）</div>
      <div class="pzb"><div class="pzo"></div><div class="pzflash"></div></div><div class="pzwin">合成成功！</div>
      <div class="pzbar"><button class="y" data-a="hint">💡 提示</button><button data-a="peek">👁 看原圖</button>${o.noCancel ? '' : '<button data-a="quit">離開</button>'}${SKIP_MODE === 'free' ? '<button data-a="skip" style="border-color:#ff9a9a;color:#ffb3bb">⏭ 跳過</button>' : window.ZW_AD ? '<button data-a="skip" style="border-color:#ff9a9a;color:#ffb3bb">📺 看廣告跳過</button>' : ''}</div>
      <div class="pzm">步數：<b>0</b></div>`;
    host.appendChild(el);
    const board = el.querySelector('.pzb'), over = el.querySelector('.pzo'), mv = el.querySelector('.pzm b');
    over.style.backgroundImage = `url(${o.img})`;
    // pos[格子] = 哪一塊（N*N-1 = 空格）；空格在右下角
    const E = N * N - 1; let pos = [...Array(N * N).keys()], empty = E, moves = 0, done = false, skipped = false; const t0 = performance.now();
    const stack = [];   // 打亂＋玩家走過的「空格移動方向」，提示＝把最後一步反過來
    const DIR = [[-1, 0], [1, 0], [0, -1], [0, 1]], INV = [1, 0, 3, 2];
    const cells = [];
    for (let t = 0; t < E; t++) {
      const c = document.createElement('div'); c.className = 'pzc';
      c.style.width = c.style.height = W + 'px';
      c.style.backgroundImage = `url(${o.img})`; c.style.backgroundSize = `${B}px ${B}px`;
      c.style.backgroundPosition = `${-(t % N) * W}px ${-Math.floor(t / N) * W}px`;
      c.onpointerdown = e => { e.preventDefault(); tap(t); };
      board.appendChild(c); cells[t] = c;
    }
    function place() {
      pos.forEach((t, i) => { if (t === E) return; const c = cells[t]; c.style.transform = `translate(${(i % N) * W}px,${Math.floor(i / N) * W}px)`; c.classList.toggle('ok', t === i); c.classList.remove('hint'); });
    }
    function stepEmpty(d) {   // 空格往 d 方向移一格（跟那格的零件交換）
      const r = Math.floor(empty / N) + DIR[d][0], col = empty % N + DIR[d][1];
      if (r < 0 || r >= N || col < 0 || col >= N) return false;
      const j = r * N + col; pos[empty] = pos[j]; pos[j] = E; empty = j;
      if (stack.length && stack[stack.length - 1] === INV[d]) stack.pop(); else stack.push(d);
      return true;
    }
    // 打亂：從原圖亂走（不走回頭路），保證一定拼得回來
    const SH = { 3: 40, 4: 90, 5: 150, 6: 230 }[N]; let last = -1;
    while (stack.length < SH * 0.6 || pos.every((t, i) => t === i)) {
      const opts = [0, 1, 2, 3].filter(d => d !== INV[last]); const d = opts[Math.floor(Math.random() * opts.length)];
      if (stepEmpty(d)) last = d;
    }
    if (empty !== E) {   // 把空格移回右下角，畫面比較好懂
      while (Math.floor(empty / N) < N - 1) stepEmpty(1);
      while (empty % N < N - 1) stepEmpty(3);
    }
    place();
    function tap(t) {
      if (done) return;
      const i = pos.indexOf(t), r = Math.floor(i / N), c = i % N, er = Math.floor(empty / N), ec = empty % N;
      let d = -1, n = 0;
      if (r === er && c !== ec) { d = c < ec ? 2 : 3; n = Math.abs(c - ec); }        // 同一排：一次推好幾塊
      else if (c === ec && r !== er) { d = r < er ? 0 : 1; n = Math.abs(r - er); }
      if (d < 0) { beep(160, .08); return; }
      for (let k = 0; k < n; k++) stepEmpty(d);
      moves++; mv.textContent = moves; beep(520 + Math.random() * 120, .06, .05); place();
      if (pos.every((x, k) => x === k)) win();
    }
    function win() {
      done = true; stack.length = 0;
      const lastc = document.createElement('div'); lastc.className = 'pzc ok'; lastc.style.cssText = `width:${W}px;height:${W}px;background-image:url(${o.img});background-size:${B}px ${B}px;background-position:${-(N - 1) * W}px ${-(N - 1) * W}px;transform:translate(${(N - 1) * W}px,${(N - 1) * W}px);opacity:0;transition:opacity .3s`;
      board.appendChild(lastc); requestAnimationFrame(() => lastc.style.opacity = 1);
      [660, 880, 1100].forEach((f, k) => setTimeout(() => beep(f, .25, .08), k * 110));
      const secs = Math.round((performance.now() - t0) / 1000), fast = !skipped && secs <= (FAST[N] || 60);
      const wt = el.querySelector('.pzwin'); wt.innerHTML = '合成成功！' + (skipped ? '' : `<div style="font:800 20px sans-serif;margin-top:8px;color:${fast ? '#ffd23f' : '#9ff8ff'}">完成時間 ${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}${fast ? '｜快速完成！返還 30% 材料' : ''}</div>`);
      const fl = el.querySelector('.pzflash'); setTimeout(() => { fl.style.opacity = .7; setTimeout(() => fl.style.opacity = 0, 180); el.querySelector('.pzwin').classList.add('on'); }, 350);
      setTimeout(() => { const cb = o.onDone; close(); if (cb) cb({ moves, secs, fast, skipped }); }, fast ? 2600 : 1900);
    }
    el.querySelector('.pzbar').onclick = e => {
      const a = e.target.closest('button'); if (!a || done) return;
      if (a.dataset.a === 'hint') {
        if (!stack.length) return;
        const d = INV[stack[stack.length - 1]];   // 空格要往 d 走 → 亮出那個方向的零件
        const r = Math.floor(empty / N) + DIR[d][0], c = empty % N + DIR[d][1];
        place(); cells[pos[r * N + c]].classList.add('hint');
      } else if (a.dataset.a === 'peek') { over.classList.add('on'); setTimeout(() => over.classList.remove('on'), 1500); }
      else if (a.dataset.a === 'skip') { const doSkip = () => { skipped = true; pos = [...Array(N * N).keys()]; empty = E; place(); win(); };
        if (SKIP_MODE === 'free') doSkip(); else if (window.ZW_AD && ZW_AD.show) ZW_AD.show(doSkip); }
      else if (a.dataset.a === 'quit') { const cb = o.onCancel; close(); if (cb) cb(); }
    };
  }
  function close() { if (el) { el.remove(); el = null; } }
  window.Puzzle = { open, close };
})();
