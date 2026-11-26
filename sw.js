// 動嘴做遊戲：最小的背景程式，只為了讓 Android 可以「安裝到主畫面」。
// 不做任何快取（開頁面時也跳過手機暫存，2026-11-26）：所有內容都直接從網路拿，更新遊戲後玩家馬上看到新版。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;   // 只處理開頁面，其他（圖片、聲音）完全不碰
  e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => new Response(
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="font:18px sans-serif;text-align:center;padding:40px;background:#1a1d2e;color:#ffd84d">沒有網路連線，請連上網路後再打開 🙏</body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
