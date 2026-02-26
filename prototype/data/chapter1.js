/**
 * 第一章：部長的末日（V3 — 選卡出牌版）
 */

const CHAPTER1 = [
  // ═══════════════════════════════════════
  // Scene 01：搶功勞（入職第二週）
  // ═══════════════════════════════════════
  { type: 'set_chapter', chapter: 'chapter1' },
  { type: 'show_hand' },
  { type: 'show_arrogance' },

  { type: 'bg', src: 'sungwon_lobby_v2.jpg' },
  { type: 'narrate', text: '入職兩週。姜旻赫用前世五年的經驗，做出了一份遠超新人水準的 Q2 市場分析報告。前世花了三個月——這一次只用了兩個通宵。' },
  { type: 'narrate', text: '但他做了一件前世不會做的事：他把報告交給了朴在成。' },
  { type: 'say', speaker: '旻赫', text: '（前世，我直接把報告交給吳常務。朴在成氣瘋了，找了我兩年麻煩。）' },
  { type: 'say', speaker: '旻赫', text: '（這一次——我把報告給你。讓你搶。讓你表演。）' },
  { type: 'say', speaker: '旻赫', text: '（因為搶來的東西，被揭穿的時候最痛。）' },

  // 週會
  { type: 'narrate', text: '週會。十二個人坐在橢圓形會議桌旁。朴在成站在投影幕前，遙控筆轉得飛起。' },
  { type: 'say', speaker: '朴在成', text: '吳常務，各位——這是我帶領團隊做的 Q2 市場分析。我個人花了大量時間梳理數據——' },
  { type: 'narrate', text: '投影亮起。每一頁 PPT 都是旻赫的。' },
  { type: 'say', speaker: '金智媛', text: '（小聲）……這不是你的報告嗎？' },
  { type: 'say', speaker: '旻赫', text: '（微笑，輕聲）嗯。' },
  { type: 'say', speaker: '金智媛', text: '你不——' },
  { type: 'say', speaker: '旻赫', text: '不急。看戲呢。' },
  { type: 'arrogance', delta: 15, reason: '搶功勞' },
  { type: 'say', speaker: '吳常務', text: '不錯，朴部長。比你以前的水準進步不少啊。' },
  { type: 'say', speaker: '朴在成', text: '謝謝吳常務。十五年了，基本功嘛。哈哈。' },

  // 出牌點 #1
  { type: 'card_play', id: 'play1',
    prompt: '[[他搶了你的東西。怎麼辦？]]',
    cards: ['fool', 'gluttony', 'judgement'],
    hints: {
      fool:     '有時候最大的力量，是讓對手以為你沒有力量。',
      gluttony: '他確實貪。但——你現在有證據嗎？',
      judgement: '真相是一把刀。但刀亮得太早，獵物會跑。'
    },
    results: {
      fool:     { rating: 'best', arrogance: 0, branch: 'p1_fool' },
      gluttony: { rating: 'wrong', arrogance: 5, branch: 'p1_gluttony' },
      judgement:{ rating: 'ok', arrogance: -5, branch: 'p1_judgement' }
    }
  },

  // Scene 01 收尾（共通）
  { type: 'narrate', text: '週會結束。旻赫在筆記本上記了一行字——不是會議紀錄。' },
  { type: 'say', speaker: '旻赫', text: '（3/29。搶功勞。第一次。帳本開始記了。）' },

  // ═══════════════════════════════════════
  // Scene 02：當眾羞辱（第三週）
  // ═══════════════════════════════════════
  { type: 'narrate', text: '第三週。嚐到甜頭的朴在成開始加碼。他需要旻赫繼續輸出——同時確保旻赫不敢反抗。' },
  { type: 'say', speaker: '朴在成', text: '（扯著嗓子，整層樓都聽到）姜旻赫！你的客戶跟進表呢？都第三天了！' },
  { type: 'say', speaker: '旻赫', text: '朴部長，昨天下午已經發到您信箱——' },
  { type: 'say', speaker: '朴在成', text: '（拍桌）我！沒！收！到！連發郵件都不會嗎？' },
  { type: 'shake' },
  { type: 'say', speaker: '朴在成', text: '大學念了四年連這都做不好？哪個大學的？' },
  { type: 'say', speaker: '旻赫', text: '延世大學。' },
  { type: 'say', speaker: '朴在成', text: '延世的？就這水準？' },
  { type: 'arrogance', delta: 15, reason: '當眾羞辱' },
  { type: 'narrate', text: '辦公室安靜了。十幾雙眼睛假裝看電腦，耳朵全豎著。' },
  { type: 'say', speaker: '旻赫', text: '好的。我再發一次。' },
  { type: 'narrate', text: '他坐回座位，打開信箱。郵件送達回執——朴在成的信箱，昨天下午 4:17 接收。已讀。截圖。存進加密相簿。' },
  { type: 'say', speaker: '金智媛', text: '（壓低聲音）他明明收到了！我昨天看到他點開了！——你怎麼不說！' },
  { type: 'say', speaker: '旻赫', text: '說了又怎樣。他是部長，我是新人。所以我需要的不是嘴巴——是證據。' },
  { type: 'say', speaker: '金智媛', text: '……你比你看起來可怕多了。' },
  { type: 'say', speaker: '旻赫', text: '謝謝。' },

  // 獲得新卡
  { type: 'card_acquire', card: 'seen', watchLines: [
    '你的忍耐，換來了新的牌。',
    '最殘忍的不是拒絕，是看了卻假裝沒看到。',
    '你手裡多了一把小刀。不致命——但割起來很痛。'
  ]},

  // ═══════════════════════════════════════
  // Scene 03：加班陷阱 + 帳本（第三週週五）
  // ═══════════════════════════════════════
  { type: 'narrate', text: '週五晚上十點半。整層辦公室只剩旻赫一個人。' },
  { type: 'narrate', text: '朴在成下午甩了一個「緊急方案」要求今晚完成——但旻赫知道，截止日期是下下週。朴在成自己呢？跟供應商去「客戶招待」了——用公款。' },
  { type: 'arrogance', delta: 15, reason: '加班陷阱' },
  { type: 'say', speaker: '旻赫', text: '（前世就是這樣。每個週五加班，朴在成每個週五喝酒。公款請客，報帳寫「客戶招待」，實際上去清潭洞吃日料。）' },
  { type: 'say', speaker: '旻赫', text: '（我知道你每一筆假帳。因為前世——清這些爛帳的人是我。）' },
  { type: 'narrate', text: '他完成了方案。然後——朴在成的電腦還開著。密碼和前世一樣，女兒的生日 0913。' },

  // 出牌點 #2
  { type: 'card_play', id: 'play2',
    prompt: '[[深夜。沒有人。他的電腦就在那裡。你打算怎麼做？]]',
    cards: ['fool', 'gluttony', 'judgement', 'seen'],
    hints: {
      fool:     '裝傻……在一個空無一人的房間裡？你要演給誰看？',
      gluttony: '貪吃的人都有一個保險箱。他的就在眼前。',
      judgement: '紀錄不會說謊。但你要找的……可能不只是紀錄。',
      seen:     '一封郵件的回執……跟眼前這台電腦比起來，你覺得呢？'
    },
    results: {
      fool:     { rating: 'wrong', arrogance: 5, branch: 'p2_fool' },
      gluttony: { rating: 'best', arrogance: 0, branch: 'p2_gluttony' },
      judgement:{ rating: 'ok', arrogance: 0, branch: 'p2_judgement' },
      seen:     { rating: 'wrong', arrogance: 5, branch: 'p2_seen' }
    }
  },

  // 冰美式（共通）
  { type: 'narrate', text: '旻赫回到自己座位。桌角——放著一杯冰美式。杯壁還掛著水珠。剛放不久。' },
  { type: 'narrate', text: '杯套上寫了一行字——智媛的筆跡，很醜但很用力：\n「야 빨리 퇴근해. — 智媛（喂快點下班啦。）」' },
  { type: 'say', speaker: '旻赫', text: '（……嘴角動了一下。是真的笑了。）' },

  // ═══════════════════════════════════════
  // Scene 04：會食地獄（第四週）
  // ═══════════════════════════════════════
  { type: 'narrate', text: '韓國職場的會食——名義上是團隊聚餐，實際上是權力遊戲的延伸。朴在成的會食更狠——他用酒來碾人。' },
  { type: 'say', speaker: '朴在成', text: '（三杯燒酒下肚）姜旻赫！來，給부장倒一杯！' },
  { type: 'say', speaker: '旻赫', text: '（雙手倒酒）부장님, 한 잔 드세요.' },
  { type: 'say', speaker: '朴在成', text: '（一口乾）好！你也喝！' },
  { type: 'say', speaker: '朴在成', text: '새로 온 사람이 부장한테 한 잔도 안 마시면 되겠어?（新來的不陪部長喝一杯像話嗎？）' },
  { type: 'say', speaker: '旻赫', text: '朴部長，抱歉——我不太能喝。' },
  { type: 'say', speaker: '朴在成', text: '（臉色變了）什麼？部長給你倒的酒你不喝？' },
  { type: 'shake' },
  { type: 'say', speaker: '朴在成', text: '야, 너 몇 년차야?（喂，你幾年資？）第一個月就敢拒絕부장的酒？我在盛元十五年！從來沒見過！' },
  { type: 'narrate', text: '包廂沒人說話。有人尷尬低頭夾肉。有人假裝上廁所。只有金智媛的筷子在桌面上敲得噹噹響。' },
  { type: 'arrogance', delta: 20, reason: '會食逼酒' },

  // 出牌點 #3
  { type: 'card_play', id: 'play3',
    prompt: '[[他在用酒精碾你。所有人都在看。你出什麼牌？]]',
    cards: ['fool', 'gluttony', 'judgement', 'seen'],
    hints: {
      fool:     '喝下去很苦。但醉了的人……口袋也會鬆。',
      gluttony: '酒桌上翻帳本……你確定這是聚餐不是審計？',
      judgement: '烤肉店裡舉證？你是檢察官還是來吃飯的？',
      seen:     '已讀不回的證據……配燒酒？場合不對吧。'
    },
    results: {
      fool:     { rating: 'best', arrogance: 0, branch: 'p3_fool' },
      gluttony: { rating: 'ok', arrogance: 0, branch: 'p3_gluttony' },
      judgement:{ rating: 'wrong', arrogance: 5, branch: 'p3_wrong' },
      seen:     { rating: 'wrong', arrogance: 5, branch: 'p3_wrong' }
    }
  },

  // ═══════════════════════════════════════
  // Scene 05：報復（會食隔天）
  // ═══════════════════════════════════════
  { type: 'narrate', text: '朴在成記仇了。會食丟了面子，他要找回來。' },
  { type: 'say', speaker: '朴在成', text: '（直奔旻赫座位）姜旻赫。你昨天報的數據有問題。' },
  { type: 'narrate', text: '他把一份報告扔到桌上。紅筆圈了三處——全是朴在成自己改錯的地方。甩鍋。' },
  { type: 'arrogance', delta: 15, reason: '甩鍋' },
  { type: 'say', speaker: '朴在成', text: '我看你這個試用期啊，懸了。' },
  { type: 'narrate', text: '朴在成走了。金智媛衝過來。' },
  { type: 'say', speaker: '金智媛', text: '又來！那三處是他自己改的——' },
  { type: 'say', speaker: '旻赫', text: '我也知道。' },
  { type: 'say', speaker: '旻赫', text: '（把報告翻到一頁）他改的時候用了追蹤修訂——但忘了關。' },
  { type: 'say', speaker: '金智媛', text: '（看到「朴在成，修改於 3/28 16:42」）…………天。' },
  { type: 'say', speaker: '旻赫', text: '這也存一份。' },

  // 獲得新卡
  { type: 'card_acquire', card: 'cain', watchLines: [
    '該隱殺了兄弟。上帝在他額頭做了標記。',
    '他以為沒人看到——但標記會替他告訴所有人。',
    '你的敵人也是。他自己在罪證上簽了名。'
  ]},

  // ═══════════════════════════════════════
  // Scene 06：朴在成的傷疤（過場）
  // ═══════════════════════════════════════
  { type: 'narrate', text: '午休。旻赫路過茶水間，聽到朴在成在打電話。' },
  { type: 'say', speaker: '朴在成', text: '（聲音壓得很低）수진아……응, 아빠야.（秀珍啊……嗯，是爸爸。）' },
  { type: 'say', speaker: '朴在成', text: '학원비 보냈어. 이번 달은 좀 늦어서 미안.（補習班費轉了。晚了，抱歉。）' },
  { type: 'say', speaker: '朴在成', text: '……수능 잘 볼 거야. 아빠가 믿어.（高考一定會考好的。爸爸相信你。）' },
  { type: 'narrate', text: '他掛了電話。靠著牆，閉上眼睛。十五年。每天末班地鐵。每一場會食。每一個上司的生日。他不是壞人。他是一個好累好累的人。' },
  { type: 'say', speaker: '旻赫', text: '（朴在成。你女兒秀珍，前世考上了首爾大學。你是一個好爸爸。但你是一個壞上司。）' },
  { type: 'say', speaker: '旻赫', text: '（我同情你——但你報的假帳、搶的功勞、踩的每一個人……你要還。）' },

  // ═══════════════════════════════════════
  // Scene 07：茶水間——最後的警告
  // ═══════════════════════════════════════
  { type: 'narrate', text: '午休結束。朴在成堵住旻赫。' },
  { type: 'say', speaker: '朴在成', text: '聽說你上週跟吳常務單獨談了？' },
  { type: 'say', speaker: '旻赫', text: '吳常務問我一些數據——' },
  { type: 'shake' },
  { type: 'say', speaker: '朴在成', text: '（一掌拍牆）야. 이 부서에서는 내가 왕이야.（在這個部門，我是王。）' },
  { type: 'say', speaker: '朴在成', text: '所有事情，先過我。시용기간 통과 못 할 수도 있어, 알지?（試用期可能過不了，知道吧？）' },
  { type: 'arrogance', delta: 20, reason: '人身威脅' },

  // 出牌點 #4
  { type: 'card_play', id: 'play4',
    prompt: '[[他把你逼到牆角了。五張牌——選一張。]]',
    cards: ['fool', 'gluttony', 'judgement', 'seen', 'cain'],
    hints: {
      fool:     '他覺得你已經跪了。跪著的人……可以去很多站著去不了的地方。',
      gluttony: '走廊裡，面對面，一對一……觀眾呢？',
      judgement: '鐵證要在法庭上亮。這裡是走廊——不是法庭。',
      seen:     '一把小刀。不致命，但會讓他知道你不好惹。想刺嗎？',
      cain:     '讓他知道你看見了他的記號……他會怕。但怕的人——會咬人。'
    },
    results: {
      fool:     { rating: 'best', arrogance: 0, branch: 'p4_fool' },
      gluttony: { rating: 'wrong', arrogance: 5, branch: 'p4_wrong' },
      judgement:{ rating: 'wrong', arrogance: 5, branch: 'p4_wrong' },
      seen:     { rating: 'ok', arrogance: -5, branch: 'p4_seen' },
      cain:     { rating: 'ok', arrogance: 0, branch: 'p4_cain' }
    }
  },

  // ═══════════════════════════════════════
  // Scene 08：終局——會議室處刑
  // ═══════════════════════════════════════
  { type: 'cg_hide' },
  { type: 'narrate', text: '週一。旻赫給吳常務的秘書發了一封信：「有關經營企劃部的內部管理問題，建議安排一次會議。證據已整理完畢。」吳常務沒有猶豫。' },
  { type: 'narrate', text: '會議室。吳常務坐在主位。HR 金部長在旁邊。朴在成走進來，看到這陣仗，腳步頓了一下。' },
  { type: 'say', speaker: '朴在成', text: '（笑得不自然）吳常務？今天什麼風把大家吹來了？' },
  { type: 'say', speaker: '吳常務', text: '朴部長，坐。有些事情需要確認。姜旻赫也在。' },
  { type: 'narrate', text: '朴在成轉頭，看到旻赫坐在角落。旻赫微笑著。那個溫和的、不到眼睛的微笑。' },
  { type: 'say', speaker: '朴在成', text: '（強撐）好啊。吳常務，我這十五年的忠誠度——您是清楚的。' },

  // BOSS 出牌
  { type: 'card_play', id: 'boss',
    prompt: '[[時候到了。選一張牌，打響第一槍。剩下的，我會幫你排好。]]',
    cards: ['fool', 'gluttony', 'judgement', 'seen', 'cain'],
    hints: {
      fool:     '讓他自己說。謊話說得越多，摔得越重。',
      gluttony: '直搗黃龍——四千七百萬。他的胃，今天該清空了。',
      judgement: '讓證據先說話。冷靜是最鋒利的刀。',
      seen:     '用小刀開場？……你有更大的武器，為什麼不用？',
      cain:     '先揭甩鍋再揭貪污——順序對嗎？想想什麼最致命。'
    },
    results: {
      fool:     { rating: 'best', arrogance: 0, branch: 'boss_fool' },
      gluttony: { rating: 'best', arrogance: 0, branch: 'boss_gluttony' },
      judgement:{ rating: 'best', arrogance: 0, branch: 'boss_judgement' },
      seen:     { rating: 'ok', arrogance: 0, branch: 'boss_seen' },
      cain:     { rating: 'ok', arrogance: 0, branch: 'boss_cain' }
    }
  },

  // 共通打臉演出
  { type: 'narrate', text: '會議室。連呼吸都聽得到。HR 金部長的手已經在翻文件夾了。' },
  { type: 'say', speaker: '朴在成', text: '（指著旻赫，手在抖）내가 이 회사에 15 년을 바쳤어! 15 년!（我奉獻了十五年！）你以為你——' },
  { type: 'narrate', text: '旻赫安靜地等他吼完。然後，用全場最低的音量——' },
  { type: 'say', speaker: '旻赫', text: '**부장님.**' },
  { type: 'narrate', text: '朴在成住嘴了。不是因為聲音大——是因為太安靜了。' },
  { type: 'flash', color: '#ffffff', duration: 300 },
  { type: 'shake' },
  { type: 'say', speaker: '旻赫', text: '**부장님이 가르쳐주신 대로 했을 뿐입니다.**\n**（我只是照著部長教我的做而已。）**' },
  { type: 'flash', color: '#ffffff', duration: 500 },
  { type: 'shake' },
  { type: 'arrogance', delta: -100, reason: '完美打臉' },

  // 收場
  { type: 'say', speaker: '吳常務', text: '（放下文件）金部長。按規定走。' },
  { type: 'narrate', text: '朴在成站在原地。臉色灰白。他看了旻赫一眼——那個微笑他從第一天就開始看。他一直以為是軟弱。不是。是倒計時。' },
  { type: 'narrate', text: '朴在成走出了會議室。透過玻璃，所有人看到他在自己座位前站了很久。桌上有女兒秀珍的照片。他把照片拿起來，放進口袋。然後開始收東西。' },

  // 走廊
  { type: 'cg_hide' },
  { type: 'say', speaker: '金智媛', text: '（眼睛亮得像吃了十包辣蝦條）姜旻赫——你！你太！\n니 진짜 대단하다!（你是真的厲害！）' },
  { type: 'say', speaker: '旻赫', text: '他自己做的事，自己承擔。我只是把事實說出來。' },
  { type: 'say', speaker: '金智媛', text: '你怎麼準備了這麼多？你第一天就——' },
  { type: 'say', speaker: '旻赫', text: '智媛씨。' },
  { type: 'say', speaker: '金智媛', text: '嗯？' },
  { type: 'say', speaker: '旻赫', text: '謝謝你。會食那天。' },
  { type: 'say', speaker: '金智媛', text: '（耳朵紅了）那——那不是因為你！誰逼酒我都會站出來的！' },
  { type: 'say', speaker: '旻赫', text: '嗯。' },
  { type: 'say', speaker: '金智媛', text: '今天下班去弘大吃辣炒年糕！你請客！' },
  { type: 'say', speaker: '旻赫', text: '我還沒升職——' },
  { type: 'say', speaker: '金智媛', text: '遲早的事！走了！' },

  // 尾聲
  { type: 'narrate', text: '她走了。旻赫站在走廊，微笑了一下。然後微笑消失了。' },
  { type: 'say', speaker: '旻赫', text: '（朴在成——結束了。但這只是開始。）' },
  { type: 'say', speaker: '旻赫', text: '（俊宇。你的第一枚棋子要到了。前世，她差點毀了我。這一世——讓我看看能不能把她變成人。）' },
  { type: 'say', speaker: '【懷錶】', text: '[[你的選擇……和上次不一樣了。]]' },
  { type: 'say', speaker: '旻赫', text: '你總是說這句話。' },
  { type: 'say', speaker: '【懷錶】', text: '[[因為你總是讓我驚訝。]]' },
  { type: 'effect', name: 'fadeout' },
  { type: 'wait', ms: 2000 },

  // 下集預告
  { type: 'big_title', text: '第二章', sub: '秘書的眼淚' },
  { type: 'narrate', text: '「大家好！我是新來的行政秘書崔恩智！」' },
  { type: 'narrate', text: '笑容甜美。手在發抖。手機裡有兩個她最怕收到消息的人——一個是徐俊宇。一個是爸爸。' },
  { type: 'chapter_end', next: '第二章：秘書的眼淚', showAd: true },
];

// ═══════════════════════════════════════
// BRANCHES（出牌結果分支）
// ═══════════════════════════════════════

const CH1_BRANCHES = {

  // ===== 出牌點 #1：搶功勞 =====
  
  'p1_fool': [
    { type: 'say', speaker: '旻赫', text: '（對朴在成微微鞠躬）朴部長的報告很精彩。我學到了很多。' },
    { type: 'narrate', text: '朴在成愣了一秒——然後笑得更開了。他完全沒有察覺到任何異狀。' },
    { type: 'say', speaker: '朴在成', text: '好好學！跟著我做事，你會進步很快的。' },
    { type: 'say', speaker: '【懷錶】', text: '[[……愚者。看起來最蠢的選擇，卻是最聰明的。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[他現在相信你是可以控制的棋子。很好。讓他繼續相信。]]' },
  ],

  'p1_judgement': [
    { type: 'say', speaker: '旻赫', text: '（站起來）朴部長，我補充一點——這份報告的原始文件我有備份。創建時間是 3/22 凌晨 2:14，帳號是我的。' },
    { type: 'narrate', text: '會議室安靜了兩秒。朴在成的笑容僵住了——但很快恢復。' },
    { type: 'say', speaker: '朴在成', text: '（乾笑）旻赫確實幫了不少忙。我說帶領團隊嘛，當然包括你。' },
    { type: 'say', speaker: '【懷錶】', text: '[[審判……打到了，但沒打痛。他會記住你說的話。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[從現在起，他會提防你。你的路會難走一些。]]' },
  ],

  'p1_gluttony': [
    { type: 'say', speaker: '【懷錶】', text: '[[暴食？……你想用一張空白的帳單告他貪污？]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[你連他這輩子報了什麼帳都還不知道。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[好牌。但不是現在。——記住，牌打早了比不打更糟。]]' },
    { type: 'narrate', text: '卡片暗了下去。沒有生效。旻赫握了握拳——第一次出牌，失敗了。' },
  ],

  // ===== 出牌點 #2：深夜加班 =====

  'p2_gluttony': [
    { type: 'narrate', text: '旻赫坐到朴在成的電腦前。密碼：0913。螢幕亮起。' },
    { type: 'narrate', text: '三個月的報帳紀錄。十四筆。合計四千七百萬韓元。收據方查無此店。' },
    { type: 'say', speaker: '旻赫', text: '（朴在成，你的胃口……比我記憶中還大。）' },
    { type: 'narrate', text: '一一截圖。拍照。存檔。退出。清除瀏覽記錄。' },
    { type: 'say', speaker: '【懷錶】', text: '[[暴食。你找到了他的胃。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[四千七百萬……他吞了這麼多，居然還不覺得撐。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[貪得無厭的人最好對付——因為他們永遠停不下來。]]' },
  ],

  'p2_judgement': [
    { type: 'narrate', text: '旻赫打開朴在成的電腦，找到了一些文件修改紀錄和報帳明細。' },
    { type: 'say', speaker: '【懷錶】', text: '[[審判……你找到了痕跡，但沒有挖到根。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[紀錄可以證明他改了東西。但改了什麼、偷了多少——你只拿到冰山一角。]]' },
  ],

  'p2_fool': [
    { type: 'narrate', text: '旻赫看著朴在成的電腦——然後轉身回到自己座位。' },
    { type: 'say', speaker: '【懷錶】', text: '[[……愚者？你要在一個空無一人的辦公室裡「裝傻」？]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[裝給誰看？椅子？]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[有些時候該演戲。有些時候——該動手。分清楚。]]' },
  ],

  'p2_seen': [
    { type: 'say', speaker: '【懷錶】', text: '[[已讀？……你要把郵件回執貼在他電腦上嗎？]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[他又不在。眼前有一台打開的電腦——你不看？]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[別浪費牌。想想你面前有什麼。]]' },
  ],

  // ===== 出牌點 #3：會食 =====

  'p3_fool': [
    { type: 'narrate', text: '旻赫端起酒杯——猶豫了一秒——然後一飲而盡。' },
    { type: 'say', speaker: '旻赫', text: '（咳了一下）부장님，再教我一杯。' },
    { type: 'narrate', text: '朴在成大笑。得意到極點。他完全不知道——旻赫在喝酒的空檔，看到了他從口袋掏出法人信用卡結帳的畫面。手機放在桌下。快門無聲。' },
    { type: 'say', speaker: '【懷錶】', text: '[[愚者。你喝了他的酒，但拍到了他的卡。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[今晚他得意了一場。但這張照片——值一百場。]]' },
    // 智媛名場面
    { type: 'narrate', text: '朴在成得寸進尺——又倒了第二杯。' },
    { type: 'say', speaker: '朴在成', text: '再來一杯！年輕人要能喝——' },
    { type: 'say', speaker: '金智媛', text: '（「啪」放下筷子，站起來）부장님！사람이 술 못 마신다는데 왜 자꾸 강요하십니까!（人家說不能喝你為啥一直逼！）' },
    { type: 'shake' },
    { type: 'narrate', text: '包廂徹底安靜。' },
    { type: 'say', speaker: '金智媛', text: '每次會食都這樣！上次李代理喝到去醫院您忘了？公司的反霸凌規範是掛著好看的嗎！' },
    { type: 'say', speaker: '朴在成', text: '（冷笑）行。不喝拉倒。（灌了一杯，站起來）我去抽根菸。' },
    { type: 'narrate', text: '門摔得很響。' },
    { type: 'say', speaker: '金智媛', text: '（坐回去，手在抖）……我沒說錯。' },
    { type: 'narrate', text: '旻赫沒說話。把自己面前的烤肉夾了一塊到她碗裡。' },
    { type: 'say', speaker: '金智媛', text: '…………（紅了耳朵，低頭猛吃）' },
    { type: 'say', speaker: '旻赫', text: '（金智媛。前世你替我說話，被朴在成逼到離職。這一世——雖然又是你先替我了。）' },
  ],

  'p3_gluttony': [
    { type: 'say', speaker: '旻赫', text: '부장님，這頓是公司請客吧？用法人卡？' },
    { type: 'narrate', text: '朴在成的笑容僵了 0.5 秒。' },
    { type: 'say', speaker: '朴在成', text: '當然！部門聚餐本來就公司出。怎麼了？' },
    { type: 'say', speaker: '旻赫', text: '沒什麼。想學學報帳流程。新人嘛。' },
    { type: 'say', speaker: '【懷錶】', text: '[[暴食……你戳到了他的痛處，但太明顯了。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[他會開始注意你。小心。]]' },
  ],

  'p3_wrong': [
    { type: 'say', speaker: '【懷錶】', text: '[[……你要在烤肉店裡翻證據？]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[讀讀空氣。這裡是酒桌——不是法庭。]]' },
    { type: 'narrate', text: '卡片暗了下去。不是每個場合都適合出牌。' },
  ],

  // ===== 出牌點 #4：茶水間 =====

  'p4_fool': [
    { type: 'say', speaker: '旻赫', text: '（一動不動，看著朴在成的眼睛）……부장님.' },
    { type: 'say', speaker: '朴在成', text: '嗯？' },
    { type: 'say', speaker: '旻赫', text: '（每個字都像敲釘子——但語氣溫順到極點）…………알겠습니다.（知道了。）' },
    { type: 'narrate', text: '他退後一步，轉身走了。朴在成看著他的背影，冷笑。' },
    { type: 'say', speaker: '朴在成', text: '（自言自語）果然。你們延世的也不過如此。' },
    { type: 'narrate', text: '他不知道——旻赫離開茶水間後，走進電梯，到一樓，出大門，繞到停車場。拍了一張照片：朴在成的私家車旁邊停著韓星科技業務部長金昌浩的車。兩台車的入場時間——都是 12:01。朴在成說「跟吳常務開會」的那個午休。' },
    { type: 'say', speaker: '【懷錶】', text: '[[愚者。你在他面前跪了。然後在他看不見的地方——拿到了最後一塊拼圖。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[所有的忍耐都有利息。明天——連本帶利。]]' },
  ],

  'p4_seen': [
    { type: 'say', speaker: '旻赫', text: '（掏出手機）朴部長，順便說——上次那封郵件，系統顯示您 4:17 已讀。' },
    { type: 'narrate', text: '朴在成的表情微微扭曲。' },
    { type: 'say', speaker: '旻赫', text: '沒什麼。想確認流程。怕以後又出問題。' },
    { type: 'say', speaker: '【懷錶】', text: '[[已讀。你刺了他一刀。很小——但他知道你不好惹了。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[代價：他從現在起會更小心。你的終局，會更難打。]]' },
  ],

  'p4_cain': [
    { type: 'say', speaker: '旻赫', text: '朴部長，上次那份報告——您修改的三處，追蹤修訂還開著。我幫您關了。不然被別人看到就不好了。' },
    { type: 'narrate', text: '朴在成的臉色從紅變白。' },
    { type: 'say', speaker: '【懷錶】', text: '[[該隱的印記……你讓他知道了「你知道」。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[他現在很害怕。害怕的人有兩種反應——退縮，或瘋狂。看看他選哪一種。]]' },
  ],

  'p4_wrong': [
    { type: 'say', speaker: '【懷錶】', text: '[[在走廊裡，面對面，一對一……你要翻帳本？]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[打臉最重要的不只是打——是讓所有人都看到。]]' },
    { type: 'say', speaker: '【懷錶】', text: '[[忍住。等一個有觀眾的舞台。]]' },
  ],

  // ===== BOSS：會議室處刑 =====

  'boss_judgement': [
    { type: 'say', speaker: '旻赫', text: '（站起來。不急不慢。整理袖口。）吳常務，謝謝。我準備了一些資料。很簡單——三頁。' },
    { type: 'say', speaker: '旻赫', text: '第一頁。Q2 市場分析報告的原始文件屬性。' },
    { type: 'say', speaker: '旻赫', text: '創建者——姜旻赫。時間——3/22 凌晨 2:14。朴部長說「帶領團隊完成」——但這份文件的登入帳號只有一個。我的。' },
    { type: 'say', speaker: '朴在成', text: '那是你的初稿，我後來改了——' },
    { type: 'say', speaker: '旻赫', text: '（不給他說完）第二頁。追蹤修訂紀錄。朴部長確實改了三處——是把正確的數據改錯了。然後拿這三處「錯誤」質問我。甩鍋。' },
    { type: 'say', speaker: '旻赫', text: '第三頁。最近三個月的法人信用卡報帳紀錄。十四筆，合計四千七百萬韓元——收據上的餐廳，查無此店。' },
    { type: 'narrate', text: '朴在成猛地站起來，椅子往後倒。' },
  ],

  'boss_gluttony': [
    { type: 'say', speaker: '旻赫', text: '（站起來，直接切入）吳常務。朴部長提到十五年忠誠——我想先聊聊這十五年裡，四千七百萬韓元去了哪裡。' },
    { type: 'narrate', text: '朴在成的笑容瞬間消失。' },
    { type: 'say', speaker: '旻赫', text: '法人信用卡報帳紀錄。十四筆。收據上的餐廳——查無此店。' },
    { type: 'say', speaker: '旻赫', text: '順帶一提，那份 Q2 報告的原始文件，創建者是我。追蹤修訂也顯示是朴部長自己改錯後甩鍋。' },
    { type: 'narrate', text: '朴在成猛地站起來，椅子往後倒。' },
  ],

  'boss_fool': [
    { type: 'say', speaker: '旻赫', text: '（微笑，語氣像在請教）朴部長，我有個問題。您說帶領團隊做了 Q2 報告——能解釋一下第三章競品分析的數據來源嗎？' },
    { type: 'say', speaker: '朴在成', text: '（沒讀過細節——但不能承認）呃……那個數據是……' },
    { type: 'narrate', text: '旻赫讓他自己挖坑。朴在成越解釋越離譜——完全兜不攏。' },
    { type: 'say', speaker: '旻赫', text: '（翻出原始文件）有意思。因為這份文件的創建者帳號只有一個——我的。朴部長剛才說的那些數據來源……一個都對不上。' },
    { type: 'say', speaker: '旻赫', text: '另外——法人信用卡報帳紀錄裡有十四筆，合計四千七百萬……收據上的餐廳，查無此店。' },
    { type: 'narrate', text: '朴在成猛地站起來，椅子往後倒。' },
  ],

  'boss_seen': [
    { type: 'say', speaker: '旻赫', text: '吳常務，先從一個小事開始。上週朴部長說沒收到我的客戶跟進表——但郵件系統顯示，4:17 已讀。' },
    { type: 'narrate', text: '朴在成的表情微微變了。' },
    { type: 'say', speaker: '旻赫', text: '這不是個案。接下來——Q2 報告的原始文件創建者是我。還有……法人信用卡十四筆假帳。' },
    { type: 'narrate', text: '朴在成猛地站起來，椅子往後倒。' },
  ],

  'boss_cain': [
    { type: 'say', speaker: '旻赫', text: '吳常務，上週朴部長質問我報告數據有誤——但追蹤修訂紀錄顯示，那三處是朴部長自己改錯的。' },
    { type: 'say', speaker: '旻赫', text: '改了之後甩鍋給新人——這是第一件事。第二件——Q2 報告的原作者是我。第三——法人信用卡四千七百萬假帳。' },
    { type: 'narrate', text: '朴在成猛地站起來，椅子往後倒。' },
  ],
};
