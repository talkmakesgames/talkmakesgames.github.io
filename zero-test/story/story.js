// 劇情播放器：背景／插圖＋頭像＋字幕＋配音。戰鬥頁和首頁都能用。
// 用法：Story.play('c1s1', { name: '主角名字', base: '../', onDone() {} })
//       Story.video('../video/c1_drama.mp4', onDone)
(function () {
  const NAMES = { hero: null, zero: '零', he: '小禾', doc: '博士', radio: '收音機' };
  const PORTRAIT = { zero: e => `img/story/p_zero_${e || 'n'}.webp`, he: e => `img/story/p_he_${e || 'cold'}.webp`, hero: e => `img/face${e || 0}.webp`, doc: () => 'img/story/p_doc.webp' };
  const SIDE = { hero: 'L', zero: 'R', he: 'R', doc: 'R', radio: 'R' };
  const css = `
  #sty{position:fixed;inset:0;z-index:50;background:#000;display:flex;align-items:center;justify-content:center;font-family:system-ui,-apple-system,"PingFang TC","Microsoft JhengHei",sans-serif;-webkit-user-select:none;user-select:none;touch-action:manipulation}
  #sty.over{background:rgba(0,0,0,.35)}
  #sty .full{position:absolute;inset:-30px;background:#05070b center/cover no-repeat;filter:blur(16px) brightness(.45);transition:background-image .6s}
  #sty.over .full{display:none}
  #sty .box{position:relative;flex:0 0 auto;width:540px;height:960px;overflow:hidden;transform-origin:50% 50%}
  #sty .sbg{position:absolute;inset:0;background:#05070b center/cover no-repeat;transition:opacity .6s;transform:scale(1.04);animation:stykb 14s ease-out forwards}
  @keyframes stykb{to{transform:scale(1.12)}}
  #sty.over .sbg{display:none}
  #sty .shade{position:absolute;left:0;right:0;bottom:0;height:52%;background:linear-gradient(transparent,rgba(0,0,0,.85) 55%,#000)}
  #sty .pt{position:absolute;bottom:236px;height:210px;width:210px;object-fit:cover;object-position:top;border-radius:16px;border:2px solid rgba(63,240,255,.55);background:linear-gradient(#26313c,#0c1117);box-shadow:0 8px 22px rgba(0,0,0,.7);transition:opacity .25s,transform .25s;opacity:0;transform:translateY(14px)}
  #sty .pt.L{left:22px}#sty .pt.R{right:22px}
  #sty .pt.on{opacity:1;transform:none}
  #sty .pt.he{border-color:#ffb35c}#sty .pt.hero{border-color:#e8edf2}
  #sty .tb{position:absolute;left:18px;right:18px;bottom:60px;min-height:150px;box-sizing:border-box;padding:30px 24px 22px;border-radius:14px;background:rgba(8,12,18,.88);border:1.5px solid rgba(63,240,255,.35);color:#eef6fa;font-size:25px;line-height:1.55;letter-spacing:.5px}
  #sty .nm{position:absolute;top:-19px;left:18px;padding:5px 16px;border-radius:8px;background:#3ff0ff;color:#031016;font-weight:800;font-size:20px}
  #sty .nm.he{background:#ffb35c}#sty .nm.hero{background:#e8edf2}#sty .nm.doc{background:#c9b48a}#sty .nm.radio{background:#8a949e}
  #sty .tb.narr{border-color:rgba(255,255,255,.12);color:#c8d2da;font-style:italic;font-size:23px}
  #sty .tb.sys{border-color:#3ff0ff;background:rgba(3,30,38,.92);color:#bff8ff;font-weight:700;font-size:23px;box-shadow:0 0 24px rgba(63,240,255,.35)}
  #sty .nx{position:absolute;right:20px;bottom:12px;color:#3ff0ff;font-size:18px;animation:styb 1s infinite}
  @keyframes styb{50%{opacity:.2}}
  #sty .top{position:absolute;top:18px;right:16px;display:flex;gap:10px;z-index:3}
  #sty .top button{background:rgba(0,0,0,.55);color:#dfe8ee;border:1px solid rgba(255,255,255,.25);border-radius:18px;font-size:16px;padding:7px 14px}
  #sty .top button.on{background:#3ff0ff;color:#031016}
  #sty .ttl{position:absolute;top:70px;left:0;right:0;text-align:center;color:#fff;font-size:20px;letter-spacing:6px;opacity:.75;text-shadow:0 2px 8px #000}
  #sty .ph{position:absolute;top:120px;left:50%;transform:translateX(-50%) translateY(-30px);width:420px;box-sizing:border-box;padding:16px 20px;border-radius:18px;background:rgba(40,44,52,.95);color:#fff;font-size:22px;box-shadow:0 10px 30px rgba(0,0,0,.6);opacity:0;transition:.35s}
  #sty .ph.on{opacity:1;transform:translateX(-50%)}
  #sty .ph small{display:block;color:#9aa6b2;font-size:15px;margin-bottom:4px}
  #sty .end{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;background:rgba(0,0,0,.0);color:#fff;opacity:0;transition:opacity 1.2s,background 1.2s;pointer-events:none}
  #sty .end.on{opacity:1;background:rgba(0,0,0,.82)}
  #sty .end b{font-size:40px;letter-spacing:8px}#sty .end i{margin-top:14px;color:#3ff0ff;font-style:normal;letter-spacing:4px}
  #sty .shk{animation:styshk .45s}
  @keyframes styshk{20%{transform:translate(-8px,4px)}40%{transform:translate(7px,-5px)}60%{transform:translate(-5px,3px)}80%{transform:translate(4px,-2px)}}
  #sty.orbm .pt,#sty.orbm .top,#sty.orbm .ttl,#sty.orbm .shade{display:none}#sty.orbm .tb{bottom:auto;top:96px}
  #sty .hold{position:absolute;left:50%;top:42%;width:170px;height:170px;margin:-85px 0 0 -85px;border-radius:50%;display:none;align-items:center;justify-content:center;flex-direction:column;color:#bff8ff;font:900 22px sans-serif;text-shadow:0 2px 8px #000;z-index:4}
  #sty .hold.on{display:flex}
  #sty .hold svg{position:absolute;inset:0;transform:rotate(-90deg)}
  #sty .hold small{font-size:14px;opacity:.8;margin-top:4px}
  #sty .hold::before{content:'';position:absolute;inset:18px;border-radius:50%;background:radial-gradient(rgba(63,240,255,.35),rgba(63,240,255,0) 70%);animation:stypu 1.2s infinite}
  @keyframes stypu{50%{transform:scale(1.15);opacity:.6}}
  #sty .glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 45%,rgba(63,240,255,.85),rgba(63,240,255,0) 60%);opacity:0;pointer-events:none;transition:opacity .5s;z-index:3}
  #sty .chs{position:absolute;left:30px;right:30px;bottom:240px;display:none;flex-direction:column;gap:12px;z-index:4}
  #sty .chs.on{display:flex}
  #sty .chs button{height:60px;border-radius:14px;border:2px solid #3ff0ff;background:rgba(4,14,20,.92);color:#e8ffff;font:800 21px sans-serif}
  #sty video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}
  `;
  let root, box, actx;
  function el(tag, cls, parent) { const e = document.createElement(tag); if (cls) e.className = cls; (parent || box).appendChild(e); return e; }
  function fit() { if (!box) return; const s = Math.min(innerWidth / 540, innerHeight / 960); box.style.transform = `scale(${s})`; }
  function mount(over) {
    if (!document.getElementById('sty-css')) { const st = document.createElement('style'); st.id = 'sty-css'; st.textContent = css; document.head.appendChild(st); }
    root = document.createElement('div'); root.id = 'sty'; if (over) root.className = 'over';
    const full = document.createElement('div'); full.className = 'full'; root.appendChild(full);
    box = document.createElement('div'); box.className = 'box'; root.appendChild(box); document.body.appendChild(root);
    fit(); addEventListener('resize', fit);
  }
  function unmount() { removeEventListener('resize', fit); if (root) root.remove(); root = box = null; }
  // 簡單音效（不用檔案）：震動、雜訊
  function tone(kind) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime, g = actx.createGain(); g.connect(actx.destination);
      if (kind === 'vib') { for (let i = 0; i < 2; i++) { const o = actx.createOscillator(); o.type = 'square'; o.frequency.value = 95; o.connect(g); o.start(t + i * 0.22); o.stop(t + i * 0.22 + 0.14); } g.gain.value = 0.08; }
      else if (kind === 'static' || kind === 'buzz') {
        const len = kind === 'static' ? 1.4 : 0.8, b = actx.createBuffer(1, actx.sampleRate * len, actx.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (kind === 'buzz' ? (Math.sin(i / 40) > 0 ? 1 : 0.3) : 1);
        const s = actx.createBufferSource(); s.buffer = b; const f = actx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = kind === 'buzz' ? 220 : 1800;
        s.connect(f); f.connect(g); g.gain.setValueAtTime(0.12, t); g.gain.linearRampToValueAtTime(0, t + len); s.start(t);
      } else if (kind === 'join') { [523, 659, 784, 1046].forEach((fq, i) => { const o = actx.createOscillator(); o.type = 'triangle'; o.frequency.value = fq; o.connect(g); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.25); }); g.gain.value = 0.09; }
      else if (kind === 'click' || kind === 'hit') { const o = actx.createOscillator(); o.type = 'square'; o.frequency.setValueAtTime(kind === 'hit' ? 160 : 900, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.08); o.connect(g); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12); o.start(t); o.stop(t + 0.13); }
    } catch (e) {}
  }
  const Story = {
    auto: (() => { try { return localStorage.getItem('zw-story-auto') === '1'; } catch (e) { return false; } })(),
    play(key, o) {
      o = o || {};
      const data = o.data || window.STORY_C1, sc = data && data.scenes[key];
      if (!sc) { o.onDone && o.onDone(); return; }
      const base = o.base != null ? o.base : '../', name = o.name || '我';
      mount(sc.over);
      const bg = el('div', 'sbg'); el('div', 'shade');
      const ptL = el('img', 'pt L'), ptR = el('img', 'pt R');
      ptL.onerror = ptR.onerror = function () { this.style.visibility = 'hidden'; };
      const ttl = el('div', 'ttl'); ttl.textContent = sc.title ? '— ' + sc.title + ' —' : '';
      const ph = el('div', 'ph');
      const tb = el('div', 'tb'), nm = el('div', 'nm', tb), tx = el('div', '', tb), nx = el('div', 'nx', tb); nx.textContent = '▼';
      const top = el('div', 'top'), bAuto = el('button', Story.auto ? 'on' : '', top), bSkip = el('button', '', top);
      bAuto.textContent = '自動'; bSkip.textContent = '跳過 ▶▶';
      const endEl = el('div', 'end');
      const glow = el('div', 'glow'), hold = el('div', 'hold'), chs = el('div', 'chs');
      hold.innerHTML = '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="6"/><circle class="pg" cx="50" cy="50" r="44" fill="none" stroke="#3ff0ff" stroke-width="7" stroke-linecap="round" stroke-dasharray="276.5" stroke-dashoffset="276.5"/></svg><span>按住</span><small>把手放上去</small>';
      const lines = sc.lines.slice(); let waitAct = false, holdT = null, holdStart = 0;
      let i = -1, typing = null, full = '', audio = null, autoT = null, done = false, waitOrb = false;
      const setBg = src => { if (!src) return; bg.style.backgroundImage = `url("${base}img/${src}")`; const fu = root.querySelector('.full'); if (fu) fu.style.backgroundImage = bg.style.backgroundImage; bg.style.animation = 'none'; void bg.offsetWidth; bg.style.animation = ''; };
      // 先把這一段會用到的圖都載入，換圖時才不會黑一下
      [sc.cg, sc.bg, ...sc.lines.map(L => L.cg || L.bg)].filter(Boolean).forEach(src => { const im = new Image(); im.src = base + 'img/' + src; });
      setBg(sc.cg || sc.bg);
      function stopAudio() { if (audio) { audio.pause(); audio = null; } clearTimeout(autoT); }
      // 背景音樂（每段劇情自己的氣氛）
      let music = null;
      if (sc.bgm) { try { music = new Audio(base + 'story/bgm_' + sc.bgm + '.mp3'); music.loop = true; music.volume = 0; const pm = music.play(); if (pm && pm.catch) pm.catch(() => {}); let vv = 0; const fi = setInterval(() => { vv = Math.min(0.24, vv + 0.02); if (music) music.volume = vv; if (vv >= 0.24) clearInterval(fi); }, 80); } catch (e) {} }
      function stopMusic() { if (!music) return; const m = music; music = null; let vv = m.volume; const fo = setInterval(() => { vv -= 0.03; if (vv <= 0) { clearInterval(fo); m.pause(); } else m.volume = vv; }, 60); }
      function finish() { if (done) return; done = true; stopAudio(); stopMusic(); clearInterval(typing); unmount(); o.onDone && o.onDone(); }
      function scheduleAuto(ms) { clearTimeout(autoT); if (Story.auto && !waitOrb && !waitAct) autoT = setTimeout(next, ms); }
      function show(L) {
        if (L.cg || L.bg) setBg(L.cg || L.bg);
        if (L.sfx) tone(L.sfx);
        if (L.shake) { box.classList.remove('shk'); void box.offsetWidth; box.classList.add('shk'); }
        full = L.t.replace(/\{名字\}/g, name);
        tb.className = 'tb' + (L.w === 'narr' ? ' narr' : L.w === 'sys' ? ' sys' : '');
        const who = L.w;
        if (NAMES.hasOwnProperty(who)) { nm.style.display = ''; nm.className = 'nm ' + who; nm.textContent = who === 'hero' ? name : NAMES[who]; } else nm.style.display = 'none';
        // 頭像：說話的人亮、另一邊收起
        const side = SIDE[who], src = PORTRAIT[who] && PORTRAIT[who](L.e);
        [ptL, ptR].forEach(p => p.classList.remove('on'));
        if (side && src) { const p = side === 'L' ? ptL : ptR; p.style.visibility = ''; if (p.dataset.src !== src) { p.src = base + src; p.dataset.src = src; } p.className = 'pt ' + side + ' ' + who + ' on'; }
        // 手機通知
        if (L.phone) { ph.innerHTML = `<small>${who === 'sys' ? '通知' : ''}</small>`; ph.appendChild(document.createTextNode(full)); ph.classList.add('on'); tb.style.visibility = 'hidden'; } else { ph.classList.remove('on'); tb.style.visibility = ''; }
        if (L.end) { endEl.innerHTML = '<b>第一章</b><i>一切從零開始　完</i>'; endEl.classList.add('on'); tb.style.visibility = 'hidden'; ptL.classList.remove('on'); ptR.classList.remove('on'); }
        // 打字效果
        clearInterval(typing); let k = 0; tx.textContent = ''; nx.style.visibility = 'hidden';
        typing = setInterval(() => { k += 2; tx.textContent = full.slice(0, k); if (k >= full.length) { clearInterval(typing); typing = null; nx.style.visibility = ''; } }, 28);
        // 配音
        stopAudio();
        const wait = Math.max(1600, full.length * 140);
        if (L.v) {
          audio = new Audio(base + L.v); audio.volume = 1;
          audio.onended = () => scheduleAuto(650);
          const pr = audio.play(); if (pr && pr.catch) pr.catch(() => scheduleAuto(wait));
        } else scheduleAuto(L.end ? 2600 : L.phone ? 2200 : wait);
        waitOrb = !!L.orb;
        if (L.hold) {   // 按住畫面（淨化）：要親手按住才會往下
          waitAct = true; hold.classList.add('on'); const pg = hold.querySelector('.pg');
          const tick = () => { const k = Math.min(1, (performance.now() - holdStart) / 1400); pg.style.strokeDashoffset = 276.5 * (1 - k); glow.style.opacity = k * 0.7;
            if (k >= 1) { clearInterval(holdT); holdT = null; hold.classList.remove('on'); tone('join'); glow.style.opacity = 1; setTimeout(() => { glow.style.opacity = 0; }, 700); waitAct = false; setTimeout(next, 500); } };
          root.onpointerdown = () => { if (!waitAct || holdT) return; holdStart = performance.now(); holdT = setInterval(tick, 30); };
          root.onpointerup = root.onpointercancel = () => { if (holdT) { clearInterval(holdT); holdT = null; pg.style.strokeDashoffset = 276.5; glow.style.opacity = 0; } };
        }
        if (L.choice) {   // 選擇：選完插入對應的台詞
          waitAct = true; chs.innerHTML = ''; chs.classList.add('on');
          L.choice.forEach((c, ci) => { const b = document.createElement('button'); b.textContent = c.label; b.onclick = ev => { ev.stopPropagation(); chs.classList.remove('on'); lines.splice(i + 1, 0, ...c.lines); waitAct = false; try { o.onChoice && o.onChoice(ci); } catch (e) {} next(); }; chs.appendChild(b); });
        }
        if (L.orb && o.onOrb) { // 戰鬥中的報告珠：玩家要親手點掉，劇情先停住
          nx.textContent = ''; setTimeout(() => { root.style.pointerEvents = 'none'; root.style.background = 'transparent'; root.classList.add('orbm'); o.onOrb(() => { root.style.pointerEvents = ''; root.classList.remove('orbm'); waitOrb = false; next(); }); }, 900);
        }
      }
      function next() {
        if (done) return;
        if (typing) { clearInterval(typing); typing = null; tx.textContent = full; nx.style.visibility = ''; return; }
        if (waitOrb || waitAct) return;
        i++;
        if (i >= lines.length) { finish(); return; }
        show(lines[i]);
      }
      root.addEventListener('click', e => { if (music && music.paused) { const pm = music.play(); if (pm && pm.catch) pm.catch(() => {}); }   // 手機要先點一下才能放聲音
        if (e.target === bAuto || e.target === bSkip) return; next(); });
      bAuto.onclick = () => { Story.auto = !Story.auto; bAuto.className = Story.auto ? 'on' : ''; try { localStorage.setItem('zw-story-auto', Story.auto ? '1' : '0'); } catch (e) {} if (Story.auto && !typing && !(audio && !audio.paused)) scheduleAuto(400); };
      bSkip.onclick = () => { if (waitOrb) return; // 報告珠那一步不能跳
        if (holdT) { clearInterval(holdT); holdT = null; }
        const rest = lines.slice(i + 1); const oi = rest.findIndex(L => L.orb);
        if (oi >= 0 && o.onOrb) { i = i + oi; typing = null; next(); } else finish(); };
      setTimeout(next, sc.over ? 200 : 500);
    },
    video(src, onDone) {
      mount(false);
      const v = el('video'); v.src = src; v.playsInline = true; v.setAttribute('playsinline', ''); v.preload = 'auto';
      const top = el('div', 'top'), bSkip = el('button', '', top); bSkip.textContent = '跳過 ▶▶';
      let done = false; const end = () => { if (done) return; done = true; v.pause(); unmount(); onDone && onDone(); };
      v.onended = end; v.onerror = end; bSkip.onclick = end;
      const pr = v.play(); if (pr && pr.catch) pr.catch(() => { v.muted = true; v.play().catch(end); });
    },
  };
  window.Story = Story;
})();
