// ═══ 多國語言的最輕架構（2026-11-26）═══
// 現在只有中文：tr('開始') 直接回傳「開始」，玩起來完全一樣。
// 規則：
//   1. 新寫的、玩家看得到的文字一律用 tr('中文')；中文本身就是代號，不用另外取名字。
//   2. 句子中間有數字或名字 → 用 {名字} 佔位：tr('打倒 {n} 隻', { n: 3 })，翻譯時才能換語序。
//   3. 圖片裡不要放文字（標誌、按鈕、插圖），文字一律用程式疊上去。
//   4. 配音維持中文，外文版只做字幕。
//   5. 舊文字先不動，第一章定案、要上 Steam 前再一次轉換。
// 以後加語言：跑 tools/i18n_extract.py → 產生 zero-wasteland/app/lang/en.js（ZW_TR.en = { '開始': 'Start', … }）→ 填翻譯 → 頁面多載入那個檔。
// 切換語言：網址加 ?lang=en（會記住），?lang=zh 換回中文。
(function () {
  let lang = 'zh';
  try {
    const m = location.search.match(/[?&]lang=([a-z]{2}(?:-[A-Za-z]{2})?)/);
    if (m) localStorage.setItem('zw-lang', m[1]);
    lang = localStorage.getItem('zw-lang') || 'zh';
  } catch (e) {}
  window.ZW_TR = window.ZW_TR || {};   // 翻譯表：ZW_TR.en = { '中文': 'English' }
  window.tr = function (s, vars) {
    const tb = lang !== 'zh' && window.ZW_TR[lang];
    let r = (tb && tb[s]) || s;   // 沒翻到的句子就顯示中文，不會壞掉
    if (vars) r = r.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return r;
  };
  window.ZW_LANG = { get lang() { return lang; } };
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;
})();
