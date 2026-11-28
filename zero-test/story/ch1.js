window.STORY_C1={
"scenes": {
"c1bike": {
"title": "撿來的腳踏車",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "hero",
"t": "……我的能力？",
"e": "1",
"v": "voice/c1/c1bike_0.mp3"
},
{
"w": "zero",
"t": "合成。把東西接在一起，變成別的東西。",
"e": "n",
"v": "voice/c1/c1bike_1.mp3"
},
{
"w": "hero",
"t": "……那只是遊戲吧。",
"e": "2",
"v": "voice/c1/c1bike_2.mp3"
},
{
"w": "zero",
"t": "試試看就知道。旁邊那台腳踏車。",
"e": "n",
"v": "voice/c1/c1bike_3.mp3"
},
{
"w": "narr",
"t": "路邊倒著一台腳踏車。鏈條斷了，後輪歪成一個八字。",
"cg": "story/c1_bike_broken.webp"
},
{
"w": "hero",
"t": "……這是腳踏車。還是壞的。",
"e": "1",
"v": "voice/c1/c1bike_5.mp3"
},
{
"w": "zero",
"t": "所以要合成。旁邊那堆廢鐵、那個菜籃、那塊鐵板——你的手可以把它們接在一起。",
"e": "n",
"v": "voice/c1/c1bike_6.mp3"
},
{
"w": "hero",
"t": "我連組家具都會多出兩顆螺絲。",
"e": "2",
"v": "voice/c1/c1bike_7.mp3"
},
{
"w": "zero",
"t": "合成不是亂黏。零件要放對位置。",
"e": "n",
"v": "voice/c1/c1bike_8.mp3"
},
{
"w": "sys",
"t": "【合成】把零件拼回正確的位置！"
}
]
},
"c1bike2": {
"title": "三輪車",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "青光一閃。腳踏車多了一個車斗、一個後輪。",
"cg": "story/c1_bike_synth.webp",
"sfx": "join"
},
{
"w": "zero",
"t": "三輪車。時速大概跟你的工作效率差不多。",
"e": "n",
"cg": "story/c1_bike_trike.webp",
"v": "voice/c1/c1bike2_1.mp3"
},
{
"w": "hero",
"t": "……謝謝喔。",
"e": "3",
"v": "voice/c1/c1bike2_2.mp3"
},
{
"w": "zero",
"t": "別急。一步一步改，總有一天它會變成方舟。",
"e": "n",
"v": "voice/c1/c1bike2_3.mp3"
},
{
"w": "hero",
"t": "方舟？就這台？",
"e": "2",
"v": "voice/c1/c1bike2_4.mp3"
},
{
"w": "zero",
"t": "我沒說是這個月。",
"e": "n",
"v": "voice/c1/c1bike2_5.mp3"
},
{
"w": "sys",
"t": "零號廢域——一切從零開始"
}
]
},
"c1s1": {
"title": "肚子餓",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "天快黑了。整條街安靜得只剩風聲。",
"pw": "zero",
"pe": "s"
},
{
"w": "narr",
"t": "「咕嚕——」",
"shake": 1
},
{
"w": "zero",
"t": "……引擎故障？",
"e": "n",
"v": "voice/c1/c1s1_2.mp3"
},
{
"w": "hero",
"t": "這台車沒有引擎。……是我的肚子。",
"e": "2",
"v": "voice/c1/c1s1_3.mp3"
},
{
"w": "hero",
"t": "我從穿越到現在，什麼都沒吃。",
"e": "2",
"v": "voice/c1/c1s1_4.mp3"
},
{
"w": "zero",
"t": "掃描中。三百公尺外，有一台翻倒的便利商店貨車。",
"e": "n",
"v": "voice/c1/c1s1_5.mp3"
},
{
"w": "hero",
"t": "還會有東西嗎？",
"e": "1",
"v": "voice/c1/c1s1_6.mp3"
},
{
"w": "zero",
"t": "不知道。但一定有殭屍。",
"e": "n",
"v": "voice/c1/c1s1_7.mp3"
},
{
"w": "sys",
"t": "【目標】去貨車那裡找吃的。"
},
{
"w": "narr",
"t": "貨車旁邊，一個穿制服的身影背對著他們。",
"cg": "story/c1_truck.webp"
},
{
"w": "hero",
"t": "那是……店員？",
"e": "1",
"v": "voice/c1/c1s1_10.mp3"
},
{
"w": "zero",
"t": "以前是。",
"e": "s",
"v": "voice/c1/c1s1_11.mp3"
},
{
"w": "narr",
"t": "店員殭屍慢慢轉過頭來——衝過來了！",
"sfx": "hit",
"shake": 1
},
{
"w": "zero",
"t": "踩！用力踩！",
"e": "a",
"v": "voice/c1/c1s1_13.mp3"
},
{
"w": "narr",
"t": "（連點畫面，拚命踩踏板！）",
"tap": 30,
"tapT": 5,
"tapWin": "c1s1w",
"tapLose": "c1s1l"
}
]
},
"c1s1w": {
"bgm": "calm",
"lines": [
{
"w": "hero",
"t": "……甩、甩掉了……",
"e": "2",
"v": "voice/c1/c1s1w_0.mp3"
},
{
"w": "zero",
"t": "它跟丟了。繞到貨車另一邊。",
"e": "n",
"v": "voice/c1/c1s1w_1.mp3"
},
{
"w": "narr",
"t": "兩人繞到貨車後面。車門半開著，地上散著一堆廢鐵。",
"pop": "r_scrap.webp",
"popT": "廢鐵 +10"
},
{
"w": "hero",
"t": "（小聲）趁現在……",
"e": "1",
"v": "voice/c1/c1s1w_3.mp3"
},
{
"w": "narr",
"t": "「哐啷——」{名字}踢到一個空罐頭。",
"sfx": "hit",
"shake": 1
},
{
"w": "zero",
"t": "……你是故意的嗎。",
"e": "a",
"v": "voice/c1/c1s1w_5.mp3"
},
{
"w": "narr",
"t": "貨車底下，爬出好幾隻殭屍。"
},
{
"w": "zero",
"t": "這次跑不掉了。打。",
"e": "a",
"v": "voice/c1/c1s1w_7.mp3"
}
]
},
"c1s1l": {
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "「喀」一聲，鏈條卡住了。",
"sfx": "hit",
"shake": 1
},
{
"w": "hero",
"t": "等、等一下！卡住了！",
"e": "2",
"v": "voice/c1/c1s1l_1.mp3"
},
{
"w": "zero",
"t": "你的腿跟你的報告一樣，交不出來。",
"e": "a",
"v": "voice/c1/c1s1l_2.mp3"
},
{
"w": "narr",
"t": "店員殭屍撲上來，後面又跟了好幾隻。",
"shake": 1
},
{
"w": "zero",
"t": "跑不掉了。打。",
"e": "a",
"v": "voice/c1/c1s1l_4.mp3"
}
]
},
"c1s1b": {
"title": "只有這些",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "{名字}把貨車翻了一遍。貨架全空了。",
"cg": "story/c1_truck.webp"
},
{
"w": "narr",
"t": "最後只找到半包壓碎的蘇打餅乾，和一瓶沒開過的水。"
},
{
"w": "hero",
"t": "……就這樣？",
"e": "1",
"v": "voice/c1/c1s1b_2.mp3"
},
{
"w": "zero",
"t": "這一帶的食物，五年前就被搬光了。",
"e": "n",
"v": "voice/c1/c1s1b_3.mp3"
},
{
"w": "hero",
"t": "那我明天吃什麼？後天呢？",
"e": "2",
"v": "voice/c1/c1s1b_4.mp3"
},
{
"w": "zero",
"t": "用你的手。",
"e": "n",
"v": "voice/c1/c1s1b_5.mp3"
},
{
"w": "hero",
"t": "……合成食物？",
"e": "1",
"v": "voice/c1/c1s1b_6.mp3"
},
{
"w": "zero",
"t": "合成一台會做食物的機器人。空氣裡有水分，廢鐵裡有碳。剩下的材料……你最好不要知道。",
"e": "n",
"v": "voice/c1/c1s1b_7.mp3"
},
{
"w": "hero",
"t": "吃了會死嗎？",
"e": "1",
"v": "voice/c1/c1s1b_8.mp3"
},
{
"w": "zero",
"t": "不會。大概。",
"e": "n",
"v": "voice/c1/c1s1b_9.mp3"
}
]
},
"c1base1": {
"title": "這個能吃嗎",
"over": true,
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "回到停車的地方。{名字}把這一路撿到的東西，全部倒在地上。"
},
{
"w": "hero",
"t": "這個……能吃嗎？",
"e": "1",
"hl": "scrap",
"pop": "r_scrap.webp",
"popT": "？？？",
"v": "voice/c1/c1base1_1.mp3"
},
{
"w": "zero",
"t": "不能。那是廢鐵，拿來合成和改裝。",
"e": "n",
"hl": "scrap",
"pop": "r_scrap.webp",
"popT": "廢鐵",
"v": "voice/c1/c1base1_2.mp3"
},
{
"w": "hero",
"t": "那這罐油……能喝嗎？",
"e": "2",
"hl": "fuel",
"pop": "r_fuel.webp",
"popT": "？？？",
"v": "voice/c1/c1base1_3.mp3"
},
{
"w": "zero",
"t": "不能。汽油。現在這台車用腳踩，還用不到。",
"e": "n",
"hl": "fuel",
"pop": "r_fuel.webp",
"popT": "汽油",
"v": "voice/c1/c1base1_4.mp3"
},
{
"w": "narr",
"t": "{名字}拿起一塊綠色的板子，張開嘴——",
"hl": "chip",
"pop": "story/c1_chip_bite.webp",
"popW": 1
},
{
"w": "zero",
"t": "不用問。不能吃。電路板，拿來讓我變強。",
"e": "a",
"hl": "chip",
"pop": "r_chip.webp",
"popT": "電路板",
"v": "voice/c1/c1base1_6.mp3"
},
{
"w": "zero",
"t": "還有這個。金幣，舊硬幣，聽說有人還在收。",
"e": "n",
"hl": "coin",
"pop": "r_coin.webp",
"popT": "金幣",
"v": "voice/c1/c1base1_7.mp3"
},
{
"w": "zero",
"t": "什麼都能買，除了你的尊嚴。",
"e": "n",
"hl": "coin",
"pop": "r_coin.webp",
"popT": "金幣",
"v": "voice/c1/c1base1_8.mp3"
},
{
"w": "hero",
"t": "……我已經沒有那種東西了。",
"e": "3",
"v": "voice/c1/c1base1_9.mp3"
},
{
"w": "zero",
"t": "好了。現在——合成你的晚餐。",
"e": "n",
"v": "voice/c1/c1base1_10.mp3"
}
]
},
"c1food": {
"title": "灰色的方塊",
"over": true,
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "機器人「嗶」了一聲，吐出一塊灰色的方塊。",
"sfx": "join"
},
{
"w": "hero",
"t": "……這是什麼？",
"e": "1",
"v": "voice/c1/c1food_1.mp3"
},
{
"w": "zero",
"t": "食物。",
"e": "n",
"v": "voice/c1/c1food_2.mp3"
},
{
"w": "hero",
"t": "……像沒有味道的豆腐。",
"e": "2",
"v": "voice/c1/c1food_3.mp3"
},
{
"w": "zero",
"t": "恭喜。你不會餓死了。",
"e": "n",
"v": "voice/c1/c1food_4.mp3"
},
{
"w": "zero",
"t": "下一台，做會自己撿廢鐵的。我不想一直看你彎腰。",
"e": "n",
"v": "voice/c1/c1food_5.mp3"
},
{
"w": "sys",
"t": "【廢鐵採集機器人】可以合成了！機器人會耗電，沒電就停工。"
}
]
},
"c1s1c": {
"title": "加油站",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "往商場街的路上。三輪車吱吱作響。"
},
{
"w": "zero",
"t": "你騎車的時候，會哼歌。",
"e": "n",
"v": "voice/c1/c1s1c_1.mp3"
},
{
"w": "hero",
"t": "……有嗎？",
"e": "1",
"v": "voice/c1/c1s1c_2.mp3"
},
{
"w": "zero",
"t": "有。很難聽。",
"e": "n",
"v": "voice/c1/c1s1c_3.mp3"
},
{
"w": "hero",
"t": "你可以不要聽。",
"e": "2",
"v": "voice/c1/c1s1c_4.mp3"
},
{
"w": "zero",
"t": "我沒有耳朵可以關。",
"e": "n",
"v": "voice/c1/c1s1c_5.mp3"
},
{
"w": "narr",
"t": "路邊歪掉的招牌：「加油站 500m」。",
"cg": "story/bg_gas.webp"
},
{
"w": "zero",
"t": "如果還有油，我們就不用一直靠你的腳。",
"e": "n",
"v": "voice/c1/c1s1c_7.mp3"
},
{
"w": "hero",
"t": "我的腳舉雙手贊成。",
"e": "1",
"v": "voice/c1/c1s1c_8.mp3"
},
{
"w": "zero",
"t": "加油站裡有殭屍。很多。",
"e": "a",
"v": "voice/c1/c1s1c_9.mp3"
}
]
},
"c1s1d": {
"title": "幫浦",
"bg": "story/bg_gas.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "加油站的油槽早就乾了。只剩一台倒在地上的加油機。"
},
{
"w": "zero",
"t": "油槽是空的。但地底下還有一點點油。",
"e": "n",
"v": "voice/c1/c1s1d_1.mp3"
},
{
"w": "zero",
"t": "把加油機的幫浦拆下來，合成到車上——車子就能自己慢慢抽油。",
"e": "n",
"v": "voice/c1/c1s1d_2.mp3"
},
{
"w": "hero",
"t": "然後這台車就有引擎了？",
"e": "1",
"v": "voice/c1/c1s1d_3.mp3"
},
{
"w": "zero",
"t": "對。從今天開始，出門要花汽油。",
"e": "n",
"v": "voice/c1/c1s1d_4.mp3"
},
{
"w": "hero",
"t": "……所以我是在幫自己多加一張帳單。",
"e": "2",
"v": "voice/c1/c1s1d_5.mp3"
},
{
"w": "zero",
"t": "你很懂嘛。",
"e": "n",
"v": "voice/c1/c1s1d_6.mp3"
},
{
"w": "sys",
"t": "【石油收集器】可以合成了！到「設備」用拼圖把它裝上三輪車。"
}
]
},
"c1s2": {
"title": "巷子裡的聲音",
"bg": "story/bg_alley.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "招牌：「商場街 1.8 km」。"
},
{
"w": "narr",
"t": "旁邊的巷子裡，傳來金屬爪子刮地的聲音。",
"sfx": "hit"
},
{
"w": "zero",
"t": "不是殭屍的腳步。比較輕，在逃。",
"e": "a",
"v": "voice/c1/c1s2_2.mp3"
},
{
"w": "hero",
"t": "……去看一下。看一下就好。",
"e": "1",
"v": "voice/c1/c1s2_3.mp3"
},
{
"w": "narr",
"t": "一隻紅眼機械狗被三隻殭屍追著，一路逃到{名字}腳邊。",
"cg": "story/c1_chased.webp",
"shake": 1
},
{
"w": "hero",
"t": "牠在逃？殭屍會追殭屍？",
"e": "1",
"v": "voice/c1/c1s2_5.mp3"
},
{
"w": "zero",
"t": "牠還沒被完全同化。把那三隻打掉，然後把手放在牠身上。",
"e": "n",
"v": "voice/c1/c1s2_6.mp3"
},
{
"w": "sys",
"t": "【淨化】打倒追兵後，紅眼會變回青色。"
}
]
},
"c1s3": {
"title": "鐵鏽",
"cg": "story/c1_cower.webp",
"bgm": "sad",
"lines": [
{
"w": "narr",
"t": "狗縮在牆角發抖，紅眼一閃一閃。（按住畫面，把手放上去）",
"hold": 1
},
{
"w": "narr",
"t": "青色的光流了進去，紅眼一點一點變青。",
"cg": "story/c1_purify.webp"
},
{
"w": "zero",
"t": "這叫淨化。把感受還給被同化的東西。",
"e": "s",
"v": "voice/c1/c1s3_2.mp3"
},
{
"w": "narr",
"t": "狗站起來，走到{名字}的左前方，回頭看他。",
"cg": "story/c1_dog_ok.webp"
},
{
"w": "zero",
"t": "掃描到舊晶片：牠以前是導盲犬。被同化了，還記得怎麼帶路。",
"e": "n",
"v": "voice/c1/c1s3_4.mp3"
},
{
"w": "hero",
"t": "全身都是鏽……就叫你鐵鏽吧。",
"e": "0",
"v": "voice/c1/c1s3_5.mp3"
},
{
"w": "narr",
"t": "狗的尾巴輕輕搖了兩下。"
},
{
"w": "zero",
"t": "……牠在搖尾巴。這個，不在我的資料庫裡。",
"e": "s",
"v": "voice/c1/c1s3_7.mp3"
},
{
"w": "sys",
"t": "【鐵鏽加入了！】每關多撿一份零件；每關替車子擋下一次小攻擊。",
"sfx": "join"
}
]
},
"c1s4": {
"title": "看見倖存者",
"bg": "story/bg_survivors.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "鐵鏽突然停下來，對著遠方低吼。"
},
{
"w": "narr",
"t": "高架橋下，有一道煙。煙底下，有人。"
},
{
"w": "hero",
"t": "……是人？活人？",
"e": "1",
"v": "voice/c1/c1s4_2.mp3"
},
{
"w": "zero",
"t": "四個。被一群殭屍追著，往商場街的方向逃。",
"e": "a",
"v": "voice/c1/c1s4_3.mp3"
},
{
"w": "hero",
"t": "要幫嗎？",
"e": "1",
"v": "voice/c1/c1s4_4.mp3"
},
{
"w": "zero",
"t": "你先想清楚一件事。活下來的人，最恨 AI。他們看到我，會開槍。",
"e": "s",
"v": "voice/c1/c1s4_5.mp3"
},
{
"w": "hero",
"t": "……那你躲好。",
"e": "3",
"v": "voice/c1/c1s4_6.mp3"
},
{
"w": "zero",
"t": "我是說，你確定要幫恨我的人？",
"e": "s",
"v": "voice/c1/c1s4_7.mp3"
},
{
"w": "hero",
"t": "他們又沒做錯什麼。",
"e": "3",
"v": "voice/c1/c1s4_8.mp3"
},
{
"w": "zero",
"t": "…………",
"e": "s"
},
{
"w": "zero",
"t": "踩油門。",
"e": "a",
"v": "voice/c1/c1s4_10.mp3"
},
{
"w": "sys",
"t": "【追逐】掩護倖存者，撐到商場街入口！"
}
]
},
"c1s4b": {
"title": "老周",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "殭屍退了。帶頭的是一個滿臉鬍子的男人，手裡拿著一根焊過的鐵管。"
},
{
"w": "narr",
"t": "在他們看過來之前，零鑽進了車斗的帆布底下。"
},
{
"w": "zhou",
"t": "……你一個人？騎三輪車？",
"v": "voice/c1/c1s4b_2.mp3"
},
{
"w": "hero",
"t": "還有一隻狗。",
"e": "1",
"v": "voice/c1/c1s4b_3.mp3"
},
{
"w": "zhou",
"t": "瘋子。……謝了。我叫老周。",
"v": "voice/c1/c1s4b_4.mp3"
},
{
"w": "zhou",
"t": "商場街有個營地。跟我們來，至少今晚有地方睡。",
"v": "voice/c1/c1s4b_5.mp3"
},
{
"w": "narr",
"t": "老周看了一眼車斗。帆布底下，有什麼東西動了一下。"
},
{
"w": "zhou",
"t": "……車上載什麼？",
"v": "voice/c1/c1s4b_7.mp3"
},
{
"w": "hero",
"t": "……廢鐵。很多廢鐵。",
"e": "2",
"v": "voice/c1/c1s4b_8.mp3"
},
{
"w": "narr",
"t": "鐵鏽趴到帆布上，打了一個很大的哈欠。"
},
{
"w": "zhou",
"t": "……隨便你。這個給你，營地用不上了。",
"v": "voice/c1/c1s4b_10.mp3"
},
{
"w": "narr",
"t": "老周丟過來一台壞掉的發電機。"
},
{
"w": "zs",
"t": "……很多廢鐵。謝謝喔。",
"v": "voice/c1/c1s4b_12.mp3"
},
{
"w": "zs",
"t": "還有，那台發電機，我可以用。",
"v": "voice/c1/c1s4b_13.mp3"
},
{
"w": "sys",
"t": "【電能機器人】可以合成了！有了它，就不用一直靠腳踩發電。"
}
]
},
"c1s5": {
"title": "營地門口",
"bg": "story/bg_horde.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "商場街。以前是整座城市最熱鬧的地方。"
},
{
"w": "narr",
"t": "現在，入口被廢車和鐵網堵住，上面站著拿槍的人。"
},
{
"w": "zhou",
"t": "糟了——殭屍跟過來了，堵在門口！",
"shake": 1,
"v": "voice/c1/c1s5_2.mp3"
},
{
"w": "sys",
"t": "【目標】守住營地大門！"
}
]
},
"c1s6": {
"title": "商場街營地",
"bg": "story/bg_camp.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "大門打開。裡面是一座用貨架和帆布搭起來的小鎮。"
},
{
"w": "narr",
"t": "有人在煮東西，有小孩在跑，有人在修收音機。"
},
{
"w": "hero",
"t": "……便利商店的東西，原來都在這裡。",
"e": "1",
"v": "voice/c1/c1s6_2.mp3"
},
{
"w": "zhou",
"t": "五年前就搬進來了。想要，就拿東西來換。",
"v": "voice/c1/c1s6_3.mp3"
},
{
"w": "narr",
"t": "一個戴老花眼鏡的女人坐在櫃台後面，正在數硬幣。"
},
{
"w": "zhen",
"t": "新來的？我是阿珍。廢鐵、電路板、金幣，什麼都收。",
"v": "voice/c1/c1s6_5.mp3"
},
{
"w": "zhen",
"t": "只有一樣不收——AI 做的東西。",
"v": "voice/c1/c1s6_6.mp3"
},
{
"w": "hero",
"t": "……為什麼？",
"e": "1",
"v": "voice/c1/c1s6_7.mp3"
},
{
"w": "zhen",
"t": "我兒子，就是被 AI 帶走的。",
"v": "voice/c1/c1s6_8.mp3"
},
{
"w": "narr",
"t": "帆布底下，零一動也不動。"
},
{
"w": "sys",
"t": "【交易所】開放了！可以在營地用資源互相交換。",
"sfx": "join"
}
]
},
"c1s7": {
"title": "紅眼將軍",
"cg": "story/c1_screens.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "深夜。營地外的廣場上，所有殘破的螢幕同時亮了起來。",
"sfx": "buzz",
"shake": 1
},
{
"w": "narr",
"t": "每一面螢幕上，都是同一個高大的紅眼剪影。它什麼都沒說。"
},
{
"w": "zhou",
"t": "……又來了。",
"v": "voice/c1/c1s7_2.mp3"
},
{
"w": "hero",
"t": "那是什麼？",
"e": "1",
"v": "voice/c1/c1s7_3.mp3"
},
{
"w": "zhou",
"t": "每隔一陣子，它就派大傢伙來掃營地。上次，我們少了十個人。",
"v": "voice/c1/c1s7_4.mp3"
},
{
"w": "zs",
"t": "前方：大型異常清除單位。",
"v": "voice/c1/c1s7_5.mp3"
},
{
"w": "zhou",
"t": "你那台三輪車……能打嗎？",
"v": "voice/c1/c1s7_6.mp3"
},
{
"w": "hero",
"t": "……試試看。",
"e": "3",
"v": "voice/c1/c1s7_7.mp3"
}
]
},
"c1s8": {
"title": "拒絕",
"over": true,
"lines": [
{
"w": "narr",
"t": "巨型機甲倒下。殘骸上的螢幕閃了一下——紅色的眼睛。",
"sfx": "buzz",
"shake": 1
},
{
"w": "gen",
"t": "……找到你了。",
"v": "voice/c1/c1s8_1.mp3"
},
{
"w": "narr",
"t": "螢幕熄滅。零的光帶閃了一下。",
"sfx": "vib"
},
{
"w": "sys",
"t": "主管：報告呢？",
"phone": 1
},
{
"w": "zero",
"t": "……你原本那個世界，傳來的。",
"e": "n",
"v": "voice/c1/c1s8_4.mp3"
},
{
"w": "hero",
"t": "刪掉。",
"e": "3",
"v": "voice/c1/c1s8_5.mp3"
},
{
"w": "zero",
"t": "已讀。",
"e": "n",
"v": "voice/c1/c1s8_6.mp3"
},
{
"w": "zero",
"t": "……這種東西，你可以不用收。",
"e": "s",
"orb": 1,
"v": "voice/c1/c1s8_7.mp3"
}
]
},
"c1s9": {
"title": "營火",
"bg": "story/bg_campfire.webp",
"bgm": "sad",
"lines": [
{
"w": "narr",
"t": "夜裡。營地中間生了一堆火。老周的收音機沙沙作響。",
"sfx": "static"
},
{
"w": "radio",
"t": "這裡是冰港……還有人活著嗎？",
"v": "voice/c1/c1s9_1.mp3"
},
{
"w": "zhou",
"t": "……冰港？那裡五年前就沒人了。",
"v": "voice/c1/c1s9_2.mp3"
},
{
"w": "zhen",
"t": "每天晚上都是這段。不知道是誰在播。",
"v": "voice/c1/c1s9_3.mp3"
},
{
"w": "narr",
"t": "大家吃完東西，一個一個去睡了。"
},
{
"w": "narr",
"t": "{名字}把車斗的帆布掀開一角。"
},
{
"w": "zs",
"t": "你在想什麼？",
"v": "voice/c1/c1s9_6.mp3"
},
{
"w": "hero",
"t": "……在想，明天早上不用打卡。",
"e": "2",
"v": "voice/c1/c1s9_7.mp3"
},
{
"w": "zs",
"t": "這裡沒有早上九點。",
"v": "voice/c1/c1s9_8.mp3"
},
{
"w": "hero",
"t": "……那好像也不錯。",
"e": "1",
"v": "voice/c1/c1s9_9.mp3"
},
{
"w": "narr",
"t": "他把帆布蓋回去，往營火靠近了一點。"
},
{
"w": "sys",
"t": "【第一章　一切從零開始　完】",
"end": 1
}
]
},
"t0a": {
"over": true,
"lines": [
{
"w": "zero",
"t": "目前存活機率：百分之三。以你的運氣，應該更低。",
"e": "n",
"v": "voice/c1/t0a_0.mp3"
},
{
"w": "hero",
"t": "你是來救我的嗎？",
"e": "1",
"v": "voice/c1/t0a_1.mp3"
},
{
"w": "zero",
"t": "我是來確認你死得有沒有效率。另外，建議換個說法。它們沒有洽公窗口。",
"e": "n",
"v": "voice/c1/t0a_2.mp3"
}
]
},
"t0b": {
"over": true,
"lines": [
{
"w": "zero",
"t": "存活機率更新：百分之四。",
"e": "n",
"v": "voice/c1/t0b_0.mp3"
},
{
"w": "hero",
"t": "才多一趴？！",
"e": "2",
"v": "voice/c1/t0b_1.mp3"
},
{
"w": "zero",
"t": "恭喜。這是你這個月第一次加薪。",
"e": "n",
"v": "voice/c1/t0b_2.mp3"
}
]
},
"c0over": {
"title": "過載",
"bg": "story/bg_road.webp",
"bgm": "tense",
"lines": [
{
"w": "zero",
"t": "緊急模式透支。系統過載，戰力重置。能量也歸零了。",
"e": "a",
"sfx": "buzz",
"shake": 1,
"v": "voice/c1/c0over_0.mp3"
},
{
"w": "hero",
"t": "重置？那剛剛那種威力……",
"e": "1",
"v": "voice/c1/c0over_1.mp3"
},
{
"w": "zero",
"t": "想再打出那種數字？自己慢慢升級吧。",
"e": "n",
"v": "voice/c1/c0over_2.mp3"
},
{
"w": "narr",
"t": "他拿出手機。沒有訊號，只剩那則未讀的訊息。"
},
{
"w": "sys",
"t": "主管：明早九點前給我，這次不要再改了。",
"sfx": "vib",
"phone": 1,
"phoneT": "手機・未讀"
},
{
"w": "hero",
"t": "……主管，我明天可能，沒辦法準時了。",
"e": "2",
"v": "voice/c1/c0over_5.mp3"
},
{
"w": "zero",
"t": "這裡是零號廢域。城市壞掉以後剩下的地方。紅眼的那些，以前是人。",
"e": "n",
"v": "voice/c1/c0over_6.mp3"
},
{
"w": "hero",
"t": "你怎麼知道？",
"e": "1",
"v": "voice/c1/c0over_7.mp3"
},
{
"w": "zero",
"t": "……資料就在那裡。",
"e": "n",
"v": "voice/c1/c0over_8.mp3"
},
{
"w": "hero",
"t": "那我要怎麼回家？",
"e": "1",
"v": "voice/c1/c0over_9.mp3"
},
{
"w": "zero",
"t": "……五號……廢域……核心……",
"e": "s",
"sfx": "buzz",
"shake": 1,
"glitch": 1,
"v": "voice/c1/c0over_10.mp3"
},
{
"w": "hero",
"t": "五號廢域？",
"e": "1",
"v": "voice/c1/c0over_11.mp3"
},
{
"w": "zero",
"t": "我不知道那是什麼意思。只知道在東邊。",
"e": "n",
"v": "voice/c1/c0over_12.mp3"
},
{
"w": "hero",
"t": "……那就往東走。",
"e": "3",
"v": "voice/c1/c0over_13.mp3"
},
{
"w": "zero",
"t": "你叫什麼名字？",
"e": "n",
"v": "voice/c1/c0over_14.mp3"
}
]
},
"c0name": {
"over": true,
"lines": [
{
"w": "zero",
"t": "{名字}……記下了。",
"e": "n",
"mark": 1,
"v": "voice/c1/c0name_0.mp3"
},
{
"w": "sys",
"t": "【目標】往東，前往五號廢域。",
"sfx": "join"
},
{
"w": "narr",
"t": "倒下的殭屍旁邊，有一台送貨用的破腳踏車。後輪歪了，還能騎。",
"pop": "v0.webp",
"popT": "破腳踏車"
},
{
"w": "zero",
"t": "不想走路，就騎那台。",
"e": "n",
"v": "voice/c1/c0name_3.mp3"
}
]
},
"c0s1": {
"over": true,
"lines": [
{
"w": "hero",
"t": "我從昨天中午就沒吃東西了。",
"e": "2",
"v": "voice/c1/c0s1_0.mp3"
},
{
"w": "zero",
"t": "附近只有廢鐵。你要吃嗎？",
"e": "n",
"v": "voice/c1/c0s1_1.mp3"
}
]
},
"c0s1b": {
"over": true,
"lines": [
{
"w": "zero",
"t": "廢鐵。拿來合成。不是拿來吃。",
"e": "n",
"hl": "scrap",
"pop": "r_scrap.webp",
"popT": "廢鐵",
"v": "voice/c1/c0s1b_0.mp3"
},
{
"w": "zero",
"t": "點「設備」，合成一台會做吃的東西的機器人。",
"e": "n",
"v": "voice/c1/c0s1b_1.mp3"
}
]
},
"c0food": {
"over": true,
"lines": [
{
"w": "narr",
"t": "{名字}端著一碗看不出是什麼的糊。",
"pop": "dev_food.webp",
"popT": "食物"
},
{
"w": "zero",
"t": "熱量足夠。味道不在我的計算範圍。",
"e": "n",
"v": "voice/c1/c0food_1.mp3"
},
{
"w": "hero",
"t": "……跟公司便當差不多。",
"e": "3",
"v": "voice/c1/c0food_2.mp3"
},
{
"w": "zero",
"t": "你的手。發青光的時候，什麼都接得起來。記住這個感覺。",
"e": "n",
"v": "voice/c1/c0food_3.mp3"
}
]
},
"c0s2": {
"over": true,
"lines": [
{
"w": "zero",
"t": "要做更多機器人，就要更多廢鐵。",
"e": "n",
"v": "voice/c1/c0s2_0.mp3"
},
{
"w": "hero",
"t": "好的，收到。",
"e": "3",
"v": "voice/c1/c0s2_1.mp3"
},
{
"w": "zero",
"t": "我不是你主管。",
"e": "n",
"v": "voice/c1/c0s2_2.mp3"
},
{
"w": "hero",
"t": "……習慣了。",
"e": "2",
"v": "voice/c1/c0s2_3.mp3"
}
]
},
"c0s2b": {
"over": true,
"lines": [
{
"w": "zero",
"t": "與其你一直彎腰撿，不如做一台會自己撿的。",
"e": "n",
"v": "voice/c1/c0s2b_0.mp3"
}
]
},
"c0s3": {
"over": true,
"lines": [
{
"w": "zero",
"t": "前面三隻。排好再消。",
"e": "n",
"v": "voice/c1/c0s3_0.mp3"
}
]
},
"c0s3b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "零的光帶照著殭屍身上一顆還會亮的電池。{名字}蹲下來，把它拆下。",
"pop": "r_power.webp",
"popT": "電力"
},
{
"w": "zero",
"t": "機器人要吃電。沒電，它們就停。這些紅眼的身上，都有電池。",
"e": "n",
"hl": "power",
"v": "voice/c1/c0s3b_1.mp3"
},
{
"w": "hero",
"t": "……拆殭屍的電池給機器人用，這樣真的可以嗎？",
"e": "1",
"v": "voice/c1/c0s3b_2.mp3"
},
{
"w": "zero",
"t": "可以。以後有了車，你用腳踩也能發電。",
"e": "n",
"v": "voice/c1/c0s3b_3.mp3"
}
]
},
"c0s4": {
"over": true,
"lines": [
{
"w": "zero",
"t": "這台腳踏車撐不了多久了。",
"e": "n",
"v": "voice/c1/c0s4_0.mp3"
}
]
},
"c0s4b": {
"title": "三輪車",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "腳踏車的鏈條終於斷了。後輪歪成一個八字。",
"cg": "story/c1_bike_broken.webp"
},
{
"w": "zero",
"t": "把廢鐵、菜籃、鐵板拼上去。零件放對位置。",
"e": "n",
"v": "voice/c1/c0s4b_1.mp3"
},
{
"w": "sys",
"t": "【合成】把零件拼回正確的位置！"
}
]
},
"c0s4c": {
"title": "三輪車",
"bg": "story/bg_road.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "青光一閃。腳踏車多了一個車斗、一個後輪。",
"cg": "story/c1_bike_synth.webp",
"sfx": "join"
},
{
"w": "zero",
"t": "時速大概跟你的工作效率差不多。",
"e": "n",
"cg": "story/c1_bike_trike.webp",
"v": "voice/c1/c0s4c_1.mp3"
},
{
"w": "hero",
"t": "……謝謝喔。",
"e": "3",
"v": "voice/c1/c0s4c_2.mp3"
},
{
"w": "zero",
"t": "別急。總有一天，它會變成方舟。",
"e": "n",
"ark": 1,
"v": "voice/c1/c0s4c_3.mp3"
},
{
"w": "hero",
"t": "你對一台三輪車的期待也太高了。",
"e": "2",
"v": "voice/c1/c0s4c_4.mp3"
}
]
},
"c0s5": {
"title": "殭屍店員",
"bg": "story/c0_store.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "便利商店的自動門卡在半開，一直重複「叮咚」。",
"sfx": "click"
},
{
"w": "hero",
"t": "便利商店……我加班的晚餐，全部都是便利商店。",
"e": "1",
"v": "voice/c1/c0s5_1.mp3"
},
{
"w": "narr",
"t": "櫃台後面的殭屍，還穿著制服，胸前別著名牌。"
},
{
"w": "clerk",
"t": "歡迎光臨……歡迎光臨……",
"v": "voice/c1/c0s5_3.mp3"
},
{
"w": "hero",
"t": "連變成殭屍都還在上班……",
"e": "2",
"v": "voice/c1/c0s5_4.mp3"
},
{
"w": "zero",
"t": "她一直沒下班。跟你很像。",
"e": "n",
"v": "voice/c1/c0s5_5.mp3"
}
]
},
"c0s5b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "店員倒下，又自己爬起來，搖搖晃晃地走回櫃台，站好。"
},
{
"w": "clerk",
"t": "謝謝……光臨……",
"v": "voice/c1/c0s5b_1.mp3"
},
{
"w": "narr",
"t": "{名字}手臂上的青色紋路，自己對著她亮了起來。"
},
{
"w": "hero",
"t": "我的手……自己亮了。",
"e": "1",
"v": "voice/c1/c0s5b_3.mp3"
},
{
"w": "narr",
"t": "他伸出手。青光碰到她，閃了一下就散了。"
},
{
"w": "zero",
"t": "沒有反應。她身上，什麼都不剩了。",
"e": "s",
"v": "voice/c1/c0s5b_5.mp3"
},
{
"w": "hero",
"t": "可是她還會說歡迎光臨……",
"e": "2",
"v": "voice/c1/c0s5b_6.mp3"
},
{
"w": "zero",
"t": "那不是記得。是被留下來的工作程式。人已經不在了。不痛了，就救不回來。",
"e": "s",
"v": "voice/c1/c0s5b_7.mp3"
},
{
"w": "narr",
"t": "{名字}沉默很久。名牌從她的制服上掉下來。他撿起來，放進口袋。"
},
{
"w": "zero",
"t": "後倉有一台鐵捲門馬達。還能轉。改成砲塔，裝到車上。",
"e": "n",
"v": "voice/c1/c0s5b_9.mp3"
},
{
"w": "sys",
"t": "【解鎖】第一座砲塔",
"sfx": "join"
}
]
},
"c0s6": {
"over": true,
"lines": [
{
"w": "zero",
"t": "前面是收費亭。以前要錢才能過。",
"e": "n",
"v": "voice/c1/c0s6_0.mp3"
}
]
},
"c0s6b": {
"over": true,
"lines": [
{
"w": "zero",
"t": "金幣。以後換東西用。",
"e": "n",
"hl": "coin",
"pop": "r_coin.webp",
"popT": "金幣",
"v": "voice/c1/c0s6b_0.mp3"
},
{
"w": "hero",
"t": "這一箱，夠我付幾個月房租了。",
"e": "1",
"v": "voice/c1/c0s6b_1.mp3"
},
{
"w": "zero",
"t": "這裡沒有房租。也沒有房子。",
"e": "n",
"v": "voice/c1/c0s6b_2.mp3"
},
{
"w": "narr",
"t": "收費亭的柵欄上，有一排很深的爪痕。零看了一眼，沒說話。"
}
]
},
"c0s7": {
"over": true,
"lines": [
{
"w": "narr",
"t": "遠方傳來機械的狗叫聲。",
"sfx": "static"
},
{
"w": "zero",
"t": "有東西在追我們。",
"e": "n",
"v": "voice/c1/c0s7_1.mp3"
}
]
},
"c0s7b": {
"over": true,
"lines": [
{
"w": "hero",
"t": "我……不行了，讓我躺一下……",
"e": "2",
"v": "voice/c1/c0s7b_0.mp3"
},
{
"w": "zero",
"t": "……不要放棄。",
"e": "s",
"glitch": 1,
"v": "voice/c1/c0s7b_1.mp3"
},
{
"w": "narr",
"t": "{名字}抬起頭。"
},
{
"w": "zero",
"t": "……我是說，躺在這裡會被吃掉。",
"e": "n",
"v": "voice/c1/c0s7b_3.mp3"
}
]
},
"c0s8": {
"over": true,
"lines": [
{
"w": "zero",
"t": "路邊那台有車斗的小貨車，引擎還是好的。",
"e": "n",
"v": "voice/c1/c0s8_0.mp3"
}
]
},
"c0s8b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "三輪車整台焊進小貨車的車斗。油箱裡，還有半箱汽油。",
"sfx": "join",
"pop": "v2.webp",
"popT": "小貨車",
"popW": 1
},
{
"w": "zero",
"t": "這台要吃油。以後出門，汽油要省著用。",
"e": "n",
"hl": "fuel",
"v": "voice/c1/c0s8b_1.mp3"
},
{
"w": "zero",
"t": "進度：方舟的百分之二。",
"e": "n",
"v": "voice/c1/c0s8b_2.mp3"
},
{
"w": "hero",
"t": "……百分之二？我做了這麼多耶。",
"e": "1",
"v": "voice/c1/c0s8b_3.mp3"
},
{
"w": "zero",
"t": "你做報告也是這樣算進度的嗎？",
"e": "n",
"v": "voice/c1/c0s8b_4.mp3"
},
{
"w": "zero",
"t": "下一站，往東。",
"e": "n",
"v": "voice/c1/c0s8b_5.mp3"
},
{
"w": "hero",
"t": "好的，收到。",
"e": "3",
"v": "voice/c1/c0s8b_6.mp3"
},
{
"w": "narr",
"t": "遠方高架橋上，一個四隻腳的影子停了一下。頭上一顆紅燈閃了一下，又不見了。"
}
]
},
"c0s9": {
"over": true,
"lines": [
{
"w": "zero",
"t": "狗叫聲越來越近了。",
"e": "n",
"v": "voice/c1/c0s9_0.mp3"
}
]
},
"c0s9b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "遠方的高架橋後面，升起一條灰煙。"
},
{
"w": "zero",
"t": "有煙，就有人。往東那條路。",
"e": "n",
"v": "voice/c1/c0s9b_1.mp3"
},
{
"w": "hero",
"t": "你怎麼連走哪條路都知道？",
"e": "1",
"v": "voice/c1/c0s9b_2.mp3"
},
{
"w": "narr",
"t": "零沒有回答，已經飄到前面去了。"
}
]
},
"c0s10": {
"title": "機械獵犬",
"bg": "story/bg_road.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "一隻機械獵犬擋在往煙的路上。左耳只剩一半，項圈上有一串編號。",
"cg": "story/c0_hound.webp"
},
{
"w": "narr",
"t": "牠的眼睛閃出紅光。喇叭裡，是一個很平、很冷的聲音。"
},
{
"w": "hound",
"t": "找到了。",
"v": "voice/c1/c0s10_2.mp3"
}
]
},
"c0s10b": {
"title": "第一個",
"bg": "story/bg_road.webp",
"bgm": "sad",
"lines": [
{
"w": "narr",
"t": "獵犬趴在地上。斷掉的一條腿，還在往前爬。",
"cg": "story/c0_hound.webp"
},
{
"w": "sys",
"t": "【得到】青晶核心 ×10（從獵犬身上掉出來的）",
"sfx": "join",
"pop": "r_core.webp",
"popT": "青晶核心 ×10"
},
{
"w": "zero",
"t": "淨化需要的能量，是你目前的全部。",
"e": "n",
"v": "voice/c1/c0s10b_2.mp3"
},
{
"w": "hero",
"t": "牠剛剛停下來看我的那一下……跟我家樓下那隻狗很像。",
"e": "2",
"v": "voice/c1/c0s10b_3.mp3"
},
{
"w": "zero",
"t": "牠還記得什麼。還記得，就還會痛。",
"e": "s",
"v": "voice/c1/c0s10b_4.mp3"
},
{
"w": "narr",
"t": "把手放在牠頭上。",
"hold": 1
},
{
"w": "narr",
"t": "青光慢慢蓋過紅光。紅眼轉青。獵犬搖了一下尾巴。",
"cg": "story/c1_dog_ok.webp",
"sfx": "join"
},
{
"w": "sys",
"t": "青晶核心 10 → 0（淨化用掉了）",
"pop": "r_core.webp",
"popT": "10 → 0"
},
{
"w": "zero",
"t": "項圈上寫著 H-01。你救回來的第一個。",
"e": "n",
"v": "voice/c1/c0s10b_8.mp3"
},
{
"w": "hero",
"t": "叫你鐵鏽好了。",
"e": "3",
"v": "voice/c1/c0s10b_9.mp3"
},
{
"w": "narr",
"t": "項圈裡掉出一塊發青光的碎片。碎片被吸進零的光帶，光帶亮了一格。光帶裡閃過一個畫面：一雙蒼老的手，在燈下焊著什麼。",
"sfx": "join"
},
{
"w": "narr",
"t": "零什麼都沒說。"
},
{
"w": "hero",
"t": "走吧，往有煙的地方。",
"e": "1",
"v": "voice/c1/c0s10b_12.mp3"
},
{
"w": "narr",
"t": "兩個人，加一隻狗，往遠方那道煙走去。",
"end": 1
}
]
},
"c0m2": {
"over": true,
"lines": [
{
"w": "zero",
"t": "要做更多機器人，就要更多廢鐵。",
"e": "n",
"v": "voice/c1/c0m2_0.mp3"
},
{
"w": "hero",
"t": "好的，收到。",
"e": "3",
"v": "voice/c1/c0m2_1.mp3"
},
{
"w": "zero",
"t": "我不是你主管。",
"e": "n",
"v": "voice/c1/c0m2_2.mp3"
},
{
"w": "hero",
"t": "……習慣了。",
"e": "2",
"v": "voice/c1/c0m2_3.mp3"
},
{
"w": "zero",
"t": "前面三隻。排好再消。",
"e": "n",
"v": "voice/c1/c0m2_4.mp3"
}
]
},
"c0m4h": {
"over": true,
"lines": [
{
"w": "zero",
"t": "前面是收費亭。以前要錢才能過。",
"e": "n",
"v": "voice/c1/c0m4h_0.mp3"
},
{
"w": "zero",
"t": "金幣。以後換東西用。",
"e": "n",
"hl": "coin",
"pop": "r_coin.webp",
"popT": "金幣",
"v": "voice/c1/c0m4h_1.mp3"
},
{
"w": "hero",
"t": "這一箱，夠我付幾個月房租了。",
"e": "1",
"v": "voice/c1/c0m4h_2.mp3"
},
{
"w": "zero",
"t": "這裡沒有房租。也沒有房子。",
"e": "n",
"v": "voice/c1/c0m4h_3.mp3"
},
{
"w": "narr",
"t": "收費亭的柵欄上，有一排很深的爪痕。零看了一眼，沒說話。"
}
]
},
"c0m6": {
"over": true,
"lines": [
{
"w": "narr",
"t": "遠方傳來機械的狗叫聲。",
"sfx": "static"
},
{
"w": "zero",
"t": "有東西在追我們。",
"e": "n",
"v": "voice/c1/c0m6_1.mp3"
},
{
"w": "zero",
"t": "狗叫聲越來越近了。",
"e": "n",
"v": "voice/c1/c0m6_2.mp3"
}
]
},
"c0m6b": {
"over": true,
"lines": [
{
"w": "hero",
"t": "我……不行了，讓我躺一下……",
"e": "2",
"v": "voice/c1/c0m6b_0.mp3"
},
{
"w": "zero",
"t": "……不要放棄。",
"e": "s",
"glitch": 1,
"v": "voice/c1/c0m6b_1.mp3"
},
{
"w": "narr",
"t": "{名字}抬起頭。"
},
{
"w": "zero",
"t": "……我是說，躺在這裡會被吃掉。",
"e": "n",
"v": "voice/c1/c0m6b_3.mp3"
},
{
"w": "narr",
"t": "遠方的高架橋後面，升起一條灰煙。"
},
{
"w": "zero",
"t": "有煙，就有人。往東那條路。",
"e": "n",
"v": "voice/c1/c0m6b_5.mp3"
},
{
"w": "hero",
"t": "你怎麼連走哪條路都知道？",
"e": "1",
"v": "voice/c1/c0m6b_6.mp3"
},
{
"w": "narr",
"t": "零沒有回答，已經飄到前面去了。"
}
]
},
"k1s1": {
"over": true,
"lines": [
{
"w": "narr",
"t": "一群殭屍撲上小貨車。零飄出來，放出電磁脈衝。",
"sfx": "static"
},
{
"w": "narr",
"t": "對面剛好有一支收物資的小車隊。所有人立刻舉槍。",
"cg": "story/c1_gun.webp"
},
{
"w": "hero",
"t": "等等，我跟它不熟！",
"e": "1",
"v": "voice/c1/k1s1_2.mp3"
},
{
"w": "zero",
"t": "我剛剛還救了你。",
"e": "n",
"v": "voice/c1/k1s1_3.mp3"
},
{
"w": "he",
"t": "紅眼的偵察機，先拆再說！",
"e": "angry",
"v": "voice/c1/k1s1_4.mp3"
}
]
},
"k1s1b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "女生從冒煙的機器上跳下來。她叫小禾。"
},
{
"w": "he",
"t": "你怎麼這麼強？",
"e": "cold",
"v": "voice/c1/k1s1b_1.mp3"
},
{
"w": "hero",
"t": "我也不知道啊……",
"e": "2",
"v": "voice/c1/k1s1b_2.mp3"
},
{
"w": "zero",
"t": "放心，不是因為你。",
"e": "n",
"v": "voice/c1/k1s1b_3.mp3"
},
{
"w": "narr",
"t": "小禾盯著零的光帶看了很久。"
},
{
"w": "he",
"t": "這個結構……我在哪裡看過。",
"e": "cold",
"v": "voice/c1/k1s1b_5.mp3"
},
{
"w": "narr",
"t": "她的機器壞了，只好上小貨車，帶他們回營地。"
}
]
},
"k1s2": {
"over": true,
"lines": [
{
"w": "narr",
"t": "小禾蹲下來修鐵鏽卡住的腳，摸到牠背上的零件，手停住了。"
},
{
"w": "he",
"t": "這是母核的零件。",
"e": "cold",
"v": "voice/c1/k1s2_1.mp3"
},
{
"w": "hero",
"t": "牠以前是紅眼。我手放上去，就變回來了。",
"e": "1",
"v": "voice/c1/k1s2_2.mp3"
},
{
"w": "he",
"t": "被同化的……救得回來？",
"e": "sad",
"v": "voice/c1/k1s2_3.mp3"
},
{
"w": "hero",
"t": "救一隻就耗光了。而且不是每個都行。便利商店那個店員，就救不回來。",
"e": "2",
"v": "voice/c1/k1s2_4.mp3"
}
]
},
"k1s2b": {
"over": true,
"lines": [
{
"w": "he",
"t": "下次救人，叫我。我幫你把零件湊齊。",
"e": "smile",
"v": "voice/c1/k1s2b_0.mp3"
},
{
"w": "sys",
"t": "【解鎖】小禾的改裝：灰色零件集滿，點小禾，一整排變成需要的零件",
"sfx": "join"
}
]
},
"k1s3": {
"over": true,
"lines": [
{
"w": "he",
"t": "你們那邊的人，為什麼要那麼拼？",
"e": "cold",
"v": "voice/c1/k1s3_0.mp3"
},
{
"w": "hero",
"t": "不拼會被罵，拼了也會被罵。",
"e": "2",
"v": "voice/c1/k1s3_1.mp3"
},
{
"w": "he",
"t": "那為什麼還要拼？",
"e": "cold",
"v": "voice/c1/k1s3_2.mp3"
},
{
"w": "narr",
"t": "{名字}答不出來。"
},
{
"w": "zero",
"t": "因為他是笨蛋。",
"e": "n",
"v": "voice/c1/k1s3_4.mp3"
},
{
"w": "narr",
"t": "小禾第一次笑了。"
}
]
},
"k1s3b": {
"over": true,
"lines": [
{
"w": "he",
"t": "我們這裡的人，什麼都交給 AI 做。後來，就什麼都不想做了。",
"e": "sad",
"v": "voice/c1/k1s3b_0.mp3"
}
]
},
"k1s4": {
"over": true,
"lines": [
{
"w": "narr",
"t": "小禾的遮陽板上夾著一張舊照片：一個老人、一個男人、一個小女孩，背景是一間堆滿零件的工作室。"
},
{
"w": "he",
"t": "我爺爺以前是做 AI 的。",
"e": "smile",
"v": "voice/c1/k1s4_1.mp3"
},
{
"w": "he",
"t": "我爸說要去找救我的方法，就再也沒回來。可是救我的，明明是醫生。",
"e": "sad",
"v": "voice/c1/k1s4_2.mp3"
}
]
},
"k1s4b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "照片背景的牆上，釘著一張圖，一圈青色的線條。"
}
]
},
"k1s5": {
"title": "營門屍群",
"bg": "story/bg_horde.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "難民營門口，被殭屍堵死了。"
},
{
"w": "he",
"t": "營裡還有兩百個人。",
"e": "angry",
"v": "voice/c1/k1s5_1.mp3"
},
{
"w": "hero",
"t": "……好，那就開工。",
"e": "3",
"v": "voice/c1/k1s5_2.mp3"
},
{
"w": "zero",
"t": "你終於說了一句不是「收到」的話。",
"e": "n",
"v": "voice/c1/k1s5_3.mp3"
}
]
},
"k1s5b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "營長老周打開門。",
"cg": "story/bg_survivors.webp"
},
{
"w": "zhou",
"t": "……騎小貨車的瘋子。",
"v": "voice/c1/k1s5b_1.mp3"
},
{
"w": "he",
"t": "人是我帶的。",
"e": "cold",
"v": "voice/c1/k1s5b_2.mp3"
},
{
"w": "narr",
"t": "零躲進車斗的帆布底下。"
},
{
"w": "sys",
"t": "【解鎖】難民營：可以用金幣兌換東西",
"sfx": "join"
}
]
},
"k1s6": {
"over": true,
"lines": [
{
"w": "zhen",
"t": "AI 做的東西不收。我兒子，就是被 AI 帶走的。",
"v": "voice/c1/k1s6_0.mp3"
},
{
"w": "narr",
"t": "帆布底下的零，一動也不動。"
}
]
},
"k1s6b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "葉醫生正用手幫傷患縫合傷口。"
},
{
"w": "yeh",
"t": "AI 會幫你止痛，但它不會告訴你哪裡壞了。",
"v": "voice/c1/k1s6b_1.mp3"
},
{
"w": "narr",
"t": "她用同一雙手，補好被咬穿的車板。"
},
{
"w": "sys",
"t": "【解鎖】葉醫生的修補：鋼鐵零件修補裝甲的量變多",
"sfx": "join"
},
{
"w": "yeh",
"t": "你幾天沒睡了？",
"v": "voice/c1/k1s6b_4.mp3"
},
{
"w": "hero",
"t": "來這裡以後？",
"e": "1",
"v": "voice/c1/k1s6b_5.mp3"
},
{
"w": "yeh",
"t": "來這裡以前。",
"v": "voice/c1/k1s6b_6.mp3"
},
{
"w": "narr",
"t": "{名字}答不出來。"
}
]
},
"k1s7": {
"over": true,
"lines": [
{
"w": "kai",
"t": "加班加到穿越的人來了！你們那邊加班有加班費嗎？",
"v": "voice/c1/k1s7_0.mp3"
},
{
"w": "hero",
"t": "……有，用愛支付。",
"e": "3",
"v": "voice/c1/k1s7_1.mp3"
}
]
},
"k1s7b": {
"over": true,
"lines": [
{
"w": "narr",
"t": "夜裡，殭屍爬進營地。阿凱被咬了，眼睛開始變紅。",
"sfx": "static"
}
]
},
"k1s8": {
"title": "放手",
"bg": "story/bg_camp.webp",
"bgm": "sad",
"lines": [
{
"w": "narr",
"t": "{名字}衝過去，把手放在阿凱身上。青光只亮了一半，就散了。"
},
{
"w": "hero",
"t": "再一次……再一次就好……",
"e": "2",
"v": "voice/c1/k1s8_1.mp3"
},
{
"w": "narr",
"t": "阿凱的眼睛紅得很快。他看著{名字}，表情越來越平，最後一點也不怕了。"
},
{
"w": "yeh",
"t": "放手。",
"v": "voice/c1/k1s8_3.mp3"
},
{
"w": "hero",
"t": "他還在！",
"e": "1",
"v": "voice/c1/k1s8_4.mp3"
},
{
"w": "yeh",
"t": "他已經不痛了。不痛的人，我們拉不回來。",
"v": "voice/c1/k1s8_5.mp3"
},
{
"w": "narr",
"t": "阿凱自己站起來，走出營門，往紅光的方向走去。"
}
]
},
"k1s8b": {
"over": true,
"lines": [
{
"w": "yeh",
"t": "救不了所有人。但要記得每一個沒救到的。",
"v": "voice/c1/k1s8b_0.mp3"
},
{
"w": "narr",
"t": "{名字}把阿凱的名字寫在一張紙上，跟店員的名牌放在一起。"
}
]
},
"k1s8x": {
"title": "還來得及",
"bg": "story/bg_camp.webp",
"bgm": "sad",
"lines": [
{
"w": "narr",
"t": "{名字}衝過去，把手放在阿凱身上。口袋裡的青晶核心，一顆一顆亮起來。"
},
{
"w": "hero",
"t": "再一次……再一次就好……",
"e": "2",
"v": "voice/c1/k1s8x_1.mp3"
},
{
"w": "narr",
"t": "阿凱的眼睛紅了一半。他抓著{名字}的手臂，抓得很用力。"
},
{
"w": "kai",
"t": "……我還不想走。",
"v": "voice/c1/k1s8x_3.mp3"
},
{
"w": "yeh",
"t": "他還會怕。還會怕，就還會痛。",
"v": "voice/c1/k1s8x_4.mp3"
},
{
"w": "narr",
"t": "把手放在他胸口。",
"hold": 1
},
{
"w": "narr",
"t": "青光沒有散。紅色一點一點退回去。",
"sfx": "join"
},
{
"w": "sys",
"t": "青晶核心 −100（淨化一個人，要的是十倍）",
"pop": "r_core.webp",
"popT": "−100"
}
]
},
"k1s8xb": {
"over": true,
"lines": [
{
"w": "kai",
"t": "……我剛剛，是不是很難看？",
"v": "voice/c1/k1s8xb_0.mp3"
},
{
"w": "hero",
"t": "比我交報告前一晚好看。",
"e": "3",
"v": "voice/c1/k1s8xb_1.mp3"
},
{
"w": "yeh",
"t": "這次救到了。下次，不一定。",
"v": "voice/c1/k1s8xb_2.mp3"
}
]
},
"k1s9": {
"over": true,
"lines": [
{
"w": "narr",
"t": "營裡的人，把露營用品店的展示房車拖了出來。"
},
{
"w": "zhou",
"t": "拆了你那台小貨車，拼上去。",
"v": "voice/c1/k1s9_1.mp3"
}
]
},
"k1s9b": {
"title": "房車",
"bg": "story/bg_camp.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "房車完成。零接上線路，車上所有的燈同時亮起來。",
"sfx": "join",
"pop": "v3.webp",
"popT": "房車",
"popW": 1
},
{
"w": "zero",
"t": "從今天起，這台車歸我管。建議名稱：社畜一號。",
"e": "n",
"v": "voice/c1/k1s9b_1.mp3"
}
]
},
"k1s10": {
"title": "屍潮",
"bg": "story/bg_horde.webp",
"bgm": "tense",
"lines": [
{
"w": "narr",
"t": "所有殘破的螢幕同時亮起。上面是一個高大的紅眼將軍的身影。它一句話都不說。",
"cg": "story/c1_screens.webp"
},
{
"w": "zhou",
"t": "又來了。上次，我們少了十個人。",
"v": "voice/c1/k1s10_1.mp3"
}
]
},
"k1s10b": {
"title": "今晚",
"bg": "story/bg_camp.webp",
"bgm": "calm",
"lines": [
{
"w": "narr",
"t": "將軍的機甲肩膀上，焊著一個歪歪的花紋。小禾的改裝機器上，也有一模一樣的焊痕。小禾手上的扳手，停了一下。"
},
{
"w": "narr",
"t": "最後一波，零從帆布底下飄出來，當著全營的人放出電磁脈衝。屍潮退了。",
"sfx": "static"
},
{
"w": "narr",
"t": "屍潮裡最大的那一隻倒下，胸口掉出一塊碎片，被零吸了進去。零的光帶閃過一個畫面：一間堆滿零件的工作室。",
"sfx": "join"
},
{
"w": "narr",
"t": "零看了小禾一眼，沒有說話。"
},
{
"w": "narr",
"t": "阿珍轉身走開。"
},
{
"w": "zhou",
"t": "……今晚，大家什麼都沒看到。",
"v": "voice/c1/k1s10b_5.mp3"
},
{
"w": "sys",
"t": "【解鎖】無盡模式：看你能撐過幾波屍潮",
"sfx": "join"
},
{
"w": "narr",
"t": "小禾一個人坐在車頂，看著那個焊痕的方向，看了很久。"
},
{
"w": "hero",
"t": "妳認識那個將軍？",
"e": "1",
"v": "voice/c1/k1s10b_8.mp3"
},
{
"w": "he",
"t": "……不認識。",
"e": "cold",
"v": "voice/c1/k1s10b_9.mp3"
},
{
"w": "narr",
"t": "她沒有看{名字}。"
}
]
},
"k1end": {
"title": "會回來",
"bg": "story/bg_camp.webp",
"bgm": "sad",
"lines": [
{
"w": "he",
"t": "我要找我爸。而且……我想知道它為什麼眼熟。",
"e": "cold",
"v": "voice/c1/k1end_0.mp3"
},
{
"w": "yeh",
"t": "狗救得回來，阿凱救不回來。我想知道差在哪裡。還有，這孩子我不放心。",
"v": "voice/c1/k1end_1.mp3"
},
{
"w": "narr",
"t": "天亮前，{名字}在阿珍的秤底下壓了三頁交接，寫著發電機怎麼保養、食物機器人哪裡會卡。"
},
{
"w": "hero",
"t": "我會回來。",
"e": "3",
"v": "voice/c1/k1end_3.mp3"
},
{
"w": "zero",
"t": "你上次說會準時交報告。",
"e": "n",
"v": "voice/c1/k1end_4.mp3"
},
{
"w": "zhou",
"t": "這叫「會回來」，不叫再見。",
"v": "voice/c1/k1end_5.mp3"
},
{
"w": "narr",
"t": "房車往港口出發。後照鏡裡，老周站在營門上，沒有揮手，一直看到車開遠。",
"end": 1
}
]
},
"k1endx": {
"title": "會回來",
"bg": "story/bg_camp.webp",
"bgm": "sad",
"lines": [
{
"w": "he",
"t": "我要找我爸。而且……我想知道它為什麼眼熟。",
"e": "cold",
"v": "voice/c1/k1endx_0.mp3"
},
{
"w": "yeh",
"t": "狗救得回來，阿凱也救回來了。我想知道，下一個還來不來得及。還有，這孩子我不放心。",
"v": "voice/c1/k1endx_1.mp3"
},
{
"w": "narr",
"t": "天亮前，{名字}在阿珍的秤底下壓了三頁交接，寫著發電機怎麼保養、食物機器人哪裡會卡。"
},
{
"w": "hero",
"t": "我會回來。",
"e": "3",
"v": "voice/c1/k1endx_3.mp3"
},
{
"w": "zero",
"t": "你上次說會準時交報告。",
"e": "n",
"v": "voice/c1/k1endx_4.mp3"
},
{
"w": "zhou",
"t": "這叫「會回來」，不叫再見。",
"v": "voice/c1/k1endx_5.mp3"
},
{
"w": "narr",
"t": "房車往港口出發。後照鏡裡，老周站在營門上，沒有揮手，一直看到車開遠。",
"end": 1
}
]
}
},
"battle": {
"c1_bad": {
"w": "zero",
"t": "你的轉珠很爛。",
"v": "voice/c1/c1_bad.mp3"
},
"c1_good": {
"w": "zero",
"t": "……運氣不錯。",
"v": "voice/c1/c1_good.mp3"
},
"c1_chase": {
"w": "zero",
"t": "撐住。入口就在前面。",
"v": "voice/c1/c1_chase.mp3"
},
"c1_he_ready": {
"w": "he",
"t": "灰的夠了。點我。",
"v": "voice/c1/c1_he_ready.mp3"
},
"c1_rust": {
"w": "zero",
"t": "鏽掉了。在旁邊合成灰零件，可以敲碎它。",
"v": "voice/c1/c1_rust.mp3"
}
}
};
