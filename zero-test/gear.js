// 2026-11-26 角色能力表＋升級＋裝備（基地和戰鬥共用）
// 存檔：S.team = { hero: 等級, zero: 等級, dog: 等級, he: 等級 }；S.gear = { own: [裝備id], eq: { tool, gear, charm }, fresh: [剛拿到的] }
(function () {
  const SLOTS = { tool: '工具', gear: '護具', charm: '小物' };
  const ITEMS = {
    badge:   { n: '公司識別證', slot: 'charm', eff: { start: 25 }, txt: '大招開場就有 25% 能量', d: '刷了也進不了公司。零說裡面的晶片還能用。' },
    wrench:  { n: '生鏽扳手', slot: 'tool', eff: { atk: 0.06 }, txt: '傷害 +6%', d: '在公路邊撿到的。很重，敲殭屍剛好。', from: 2 },
    box:     { n: '紙箱護甲', slot: 'gear', eff: { hp: 0.08 }, txt: '車子耐久 +8%', d: '路邊的紙箱，綁在身上。聊勝於無。', from: 3 },
    tag:     { n: '舊狗牌', slot: 'charm', eff: { hp: 0.05, start: 10 }, txt: '耐久 +5%、開場能量 10%', d: '從鐵鏽脖子上掉下來的。上面的名字磨掉了。', from: 10 },
    keyring: { n: '員工旅遊鑰匙圈', slot: 'charm', eff: { crit: 0.05 }, txt: '暴擊率 +5%', d: '去年員工旅遊沒去成。鑰匙圈倒是發了。', from: 6 },
    helmet:  { n: '工地安全帽', slot: 'gear', eff: { hp: 0.15 }, txt: '車子耐久 +15%', d: '老周丟給你的：「戴著。騎三輪車救人的瘋子，頭比較脆。」', from: 99 },
    nailgun: { n: '改裝釘槍', slot: 'tool', eff: { atk: 0.14 }, txt: '傷害 +14%', d: '從便利商店的鐵捲門馬達拆下來的零件做的。', from: 5 },
  };
  const DROP = {}; for (const k in ITEMS) if (ITEMS[k].from) DROP[ITEMS[k].from] = k;   // 第一次打過這一關掉的裝備
  const CHARS = [
    { id: 'hero', img: 'img/face0.webp', role: '合成的手', eff: l => `武器傷害 +${6 * (l - 1)}%｜車子耐久 +${5 * (l - 1)}%`, cost: l => ({ coin: 80 * l, scrap: 50 * l }), need: 0 },
    { id: 'zero', img: 'img/story/p_zero_n.webp', role: '大招：電磁脈衝', eff: l => `大招傷害 +${15 * (l - 1)}%｜充能速度 +${5 * (l - 1)}%`, cost: l => ({ coin: 120 * l, chip: 15 * l }), need: 0 },
    { id: 'dog', name: '鐵鏽', img: 'img/story/i_dog.webp', role: '護車＋撿零件', eff: l => `每關多撿廢鐵 +${20 + 10 * (l - 1)}`, cost: l => ({ coin: 100 * l, scrap: 40 * l }), need: 10 },
    { id: 'he', name: '小禾', img: 'img/story/p_he_smile.webp', role: '改裝：灰零件變色', eff: l => `充能速度 +${12 * (l - 1)}%`, cost: l => ({ coin: 100 * l, scrap: 40 * l }), need: 99 },   // 2026-11-26 小禾搬到第二章
  ];
  const MAXLV = 10;
  function ensure(S) {   // 舊存檔補上隊伍和裝備；已經打過的關補發裝備
    if (!S) return S;
    S.team = S.team || { hero: 1, zero: 1, dog: 1, he: 1 };
    if (!S.gear) S.gear = { own: ['badge'], eq: { tool: null, gear: null, charm: 'badge' }, fresh: [] };
    const c = (S.cleared && S.cleared.zero) || 0;
    for (let i = 1; i <= c; i++) if (DROP[i] && !S.gear.own.includes(DROP[i])) { S.gear.own.push(DROP[i]); const sl = ITEMS[DROP[i]].slot; if (!S.gear.eq[sl]) S.gear.eq[sl] = DROP[i]; }   // 補發時，空的那一格直接穿上
    return S;
  }
  function maxLv(S, id) { return id === 'zero' ? Math.min(MAXLV, 2 * ((S.fac && S.fac.dock) || 1)) : MAXLV; }   // 零的上限看「零的充電座」
  function eff(S) {   // 戰鬥用的加成
    S = ensure(S); const t = S.team, e = { atk: 1, hp: 1, emp: 1, energy: 1, start: 0, crit: 0, critDmg: 1, dogScrap: 20, he: 1 };   // critDmg：暴擊多出的傷害（1＝+100%，也就是兩倍）
    e.atk += 0.06 * (t.hero - 1); e.hp += 0.05 * (t.hero - 1); e.crit += 0.01 * (t.hero - 1); e.critDmg += 0.05 * (t.hero - 1) + 0.03 * (t.zero - 1);   // 2026-11-27 暴擊率、暴擊傷害
    e.emp += 0.15 * (t.zero - 1); e.energy += 0.05 * (t.zero - 1);
    e.dogScrap += 10 * (t.dog - 1); e.he += 0.12 * (t.he - 1);
    for (const s in S.gear.eq) { const it = ITEMS[S.gear.eq[s]]; if (!it) continue; const f = it.eff;
      if (f.atk) e.atk += f.atk; if (f.hp) e.hp += f.hp; if (f.start) e.start += f.start; if (f.crit) e.crit += f.crit; }
    return e;
  }
  function drop(S, stage) {   // 第一次打過某一關 → 拿到裝備（回傳裝備 id）
    if (!S.gear || !S.team) ensure(S); const k = DROP[stage];   // 呼叫前要先 ensure（不然會把這次的裝備當成舊的補發）
    if (!k || S.gear.own.includes(k)) return null;
    S.gear.own.push(k); S.gear.fresh.push(k);
    if (!S.gear.eq[ITEMS[k].slot]) S.gear.eq[ITEMS[k].slot] = k;   // 那一格是空的就直接穿上
    return k;
  }
  window.ZW_GEAR = { SLOTS, ITEMS, CHARS, MAXLV, ensure, maxLv, eff, drop };
})();
