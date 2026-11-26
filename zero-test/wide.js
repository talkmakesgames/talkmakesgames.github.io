// ═══ 寬螢幕版面（2026-11-26）：電腦／橫拿平板自動切換 ═══
// 判斷依據＝螢幕形狀（橫的而且兩邊空間夠），不是判斷手機或電腦。
// 直式：什麼都不做（維持手機版面）。橫式：兩邊空白換成模糊背景＋左右資訊欄（內容由各頁面填）。
// 用法：ZW_WIDE.init({ bg: '圖片網址', stageW: () => 目前遊戲畫面寬度(px) })；ZW_WIDE.set('L' 或 'R', html)
(function () {
  const MIN_SIDE = 190;   // 一邊至少要有這麼寬才放資訊欄
  let opt = null, back = null, L = null, R = null, on = false;
  const css = `
#zwBack{position:fixed;inset:-40px;z-index:0;background:#05070b center/cover no-repeat;filter:blur(18px) brightness(.32) saturate(1.1);display:none;pointer-events:none}
.zwSide{position:fixed;top:50%;transform:translateY(-50%);z-index:2;display:none;max-height:92vh;overflow:hidden;box-sizing:border-box;
  padding:16px 16px 14px;border-radius:16px;background:rgba(4,12,16,.82);border:1.5px solid rgba(63,240,255,.55);box-shadow:0 0 28px rgba(63,240,255,.18);
  color:#e8f6f8;font:700 14px/1.5 "Microsoft JhengHei","PingFang TC","Noto Sans TC",sans-serif;-webkit-user-select:none;user-select:none}
.zwSide h4{margin:0 0 8px;font:900 13px sans-serif;letter-spacing:2px;color:#3ff0ff;opacity:.85}
.zwSide .big{font:900 20px/1.25 "Microsoft JhengHei",sans-serif;color:#fff}
.zwSide .dim{color:#8fa0ae;font-size:12px}
.zwSide .row{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:4px 0}
.zwSide .bar{height:8px;border-radius:4px;background:rgba(255,255,255,.12);overflow:hidden;margin:3px 0 8px}
.zwSide .bar i{display:block;height:100%;border-radius:4px;transition:width .25s}
.zwSide hr{border:none;border-top:1px solid rgba(63,240,255,.2);margin:10px 0}
.zwSide img.ic{width:20px;height:20px;vertical-align:-4px;margin-right:4px}
.zwSide .en{margin:6px 0 2px}
.zwSide .tip{margin-top:10px;padding:8px 10px;border-radius:10px;background:rgba(63,240,255,.08);color:#bdf6fb;font-size:12px}
`;
  function build() {
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    back = document.createElement('div'); back.id = 'zwBack';
    L = document.createElement('div'); L.className = 'zwSide'; L.id = 'zwL';
    R = document.createElement('div'); R.className = 'zwSide'; R.id = 'zwR';
    document.body.prepend(back); document.body.appendChild(L); document.body.appendChild(R);
    // 資訊欄只是看的，點了也不會影響遊戲
    for (const el of [L, R]) for (const ev of ['pointerdown', 'pointerup', 'click', 'touchstart']) el.addEventListener(ev, e => e.stopPropagation());
  }
  function layout() {
    if (!opt) return;
    const sw = opt.stageW(), side = (innerWidth - sw) / 2;
    on = innerWidth / innerHeight >= 1.15 && side >= MIN_SIDE;
    document.documentElement.classList.toggle('zw-wide', on);
    back.style.display = on ? 'block' : 'none';
    const w = Math.min(320, side - 36), x = (side - w) / 2;
    for (const [el, k] of [[L, 'left'], [R, 'right']]) {
      el.style.display = on && el.innerHTML ? 'block' : 'none';
      el.style.width = w + 'px'; el.style.left = el.style.right = ''; el.style[k] = x + 'px';
    }
  }
  const last = { L: null, R: null };
  window.ZW_WIDE = {
    init(o) {
      opt = o; if (!back) build();
      if (o.bg) back.style.backgroundImage = `url("${o.bg}")`;
      addEventListener('resize', layout); layout();
    },
    get on() { return on; },
    set(side, html) {   // 內容沒變就不重畫
      if (last[side] === html) return; last[side] = html;
      const el = side === 'L' ? L : R; if (!el) return;
      el.innerHTML = html; el.style.display = on && html ? 'block' : 'none';
    },
    bg(url) { if (back) back.style.backgroundImage = `url("${url}")`; },
    layout,
  };
})();
