/**
 * 第一章：部長的末日（V3 — 選卡出牌版）
 */

const CHAPTER1 = [
  { type: 'set_chapter', chapter: 'chapter1' },
  { type: 'show_hand' },
  { type: 'show_arrogance' },

  // ═══════════════════════════════════════
  // Scene 00A：入職第一天 — 走進盛元
  // ═══════════════════════════════════════
  { label: 'ch1_start' },

  { type: 'bg', src: 'sungwon_lobby_v2.jpg' },
  { type: 'narrate', text: '2021 年 3 月 15 日，早晨八點四十五分。盛元集團總部大樓。' },
  { type: 'cg', src: 'cg_ch1_revolving_door.jpg' },
  { type: 'narrate', text: '純白色大理石大廳，旋轉門永遠閃著光。推門進去的瞬間，冷氣和咖啡香撲面而來。前台小姐的假笑、保全的面無表情、那個永遠壞掉的三號電梯——全部一模一樣。' },
  { type: 'say', speaker: '旻赫', text: '（……一樣的大廳。連那盆假的發財樹都沒換。）' },
  { type: 'say', speaker: '旻赫', text: '（上一次，我走進這扇門是來賣命的。五年青春換來一個副社長的頭銜——然後被從天台推了下去。）' },
  { type: 'say', speaker: '旻赫', text: '（這一次——我是來收債的。）' },
  { type: 'narrate', text: '他在訪客登記台簽了名。手很穩。心跳比平常快了兩拍——不是緊張。是期待。' },
  { type: 'say', speaker: '旻赫', text: '（我記得這裡的每一個人、每一張臉、每一個小圈子。誰是好人，誰是棋子，誰是地雷。五年的記憶——全部都在。）' },

  // 電梯
  { type: 'narrate', text: '電梯到了十七樓。門開的瞬間，熟悉的辦公室味道——影印機的墨粉、廉價咖啡、還有加班太久座椅散發的塑膠味。' },
  { type: 'narrate', text: '經營企劃部。他站在走廊上，看了一眼盡頭的角落辦公室——朴在成的位置。門關著。' },
  { type: 'say', speaker: '旻赫', text: '（……還沒來。前世也是這樣。九點半才到，但要求下屬八點半坐好。）' },

  // ═══════════════════════════════════════
  // Scene 00B：初遇金智媛
  // ═══════════════════════════════════════
  { label: 'ch1_jiwon' },

  { type: 'bg', src: 'office_day.png' },
  { type: 'narrate', text: '旻赫找到自己的座位——靠窗第三排，最角落。跟前世一模一樣。' },
  { type: 'cg', src: 'cg_ch1_jiwon_desk.jpg', pan: { start: 'center', to: 'right center', duration: 4000 } },
  { type: 'narrate', text: '他看了一眼隔壁座位——桌上堆滿了辣味零食。辣蝦條、辣雞麵調味包、辣味魷魚絲，紅通通一片像個小型辣椒博物館。螢幕邊貼了一張便利貼，用很醜但很用力的字寫著：「{{오늘도 살아남자!}}（今天也要活下去！）」' },
  { type: 'say', speaker: '旻赫', text: '（……這個座位。這些零食。我記得。）' },
  { type: 'narrate', text: '他剛放下背包——' },
  { type: 'cg', src: 'char_jiwon_default.jpg', portrait: true },
  { type: 'say', speaker: '金智媛', text: '{{안녕하세요!}}（你好！）新來的對吧？經營企劃部？' },
  { type: 'narrate', text: '一個短髮女生從隔壁座位探過頭來。嘴裡嚼著辣味蝦條，耳釘反射著早晨的光，牛仔外套套在正裝外面——完全不符合盛元集團的 dress code。眼睛很亮，笑得像早晨八點就喝了三杯美式的人。聲音大得旁邊兩排都轉頭看了一眼。' },
  { type: 'say', speaker: '金智媛', text: '我叫金智媛！你旁邊座！{{잘 부탁해요～}}（請多指教～）' },
  { type: 'narrate', text: '她大方地伸出手。旻赫看著她——心裡像被什麼東西輕輕撞了一下。' },
  { type: 'say', speaker: '旻赫', text: '（金智媛。釜山人，延世畢業，比我早半年進盛元。做事快、嘴巴更快、正義感強到不要命。）' },
  { type: 'say', speaker: '旻赫', text: '（前世——她是唯一一個在朴在成面前替我說話的人。被報復了一年半，最後被逼到自己辭職。）' },
  { type: 'say', speaker: '旻赫', text: '（走的那天她一個人搬紙箱，我路過，什麼都沒說。什麼都沒做。）' },
  { type: 'say', speaker: '旻赫', text: '（這一世……你還是這麼吵啊。）' },
  { type: 'say', speaker: '旻赫', text: '你好。姜旻赫。請多指教。' },
  { type: 'say', speaker: '金智媛', text: '旻赫？延世的？！我也是延世的！哪個系？' },
  { type: 'say', speaker: '旻赫', text: '經營學。' },
  { type: 'say', speaker: '金智媛', text: '天哪我也經營學！你哪屆——算了不重要！' },
  { type: 'cg', src: 'cg_ch1_shrimp_chips.jpg' },
  { type: 'narrate', text: '她塞了一包辣味蝦條過來。' },
  { type: 'say', speaker: '金智媛', text: '拿著。這牌子只有釜山才買得到，我每次回家都扛一箱。你別跟別人說我在辦公室吃零食就好，嘿嘿。' },
  { type: 'narrate', text: '旻赫接過來，拆開，吃了一片。' },
  { type: 'say', speaker: '旻赫', text: '……挺辣。' },
  { type: 'say', speaker: '金智媛', text: '（得意）那是！——哎你臉紅了欸，不行不行，你這個辣度不及格！' },
  { type: 'say', speaker: '金智媛', text: '走走走，我帶你認識環境！影印機在那邊、茶水間在右轉、那個永遠壞掉的三號電梯千萬別搭——' },
  { type: 'say', speaker: '旻赫', text: '（微笑）好。麻煩你了。' },
  { type: 'say', speaker: '金智媛', text: '（壓低聲音，突然認真）對了——部長九點半才到。但他會查監視器看誰幾點到的。所以你以後八點半一定要坐在位子上。別問我怎麼知道的。' },
  { type: 'say', speaker: '旻赫', text: '（……一樣。什麼都沒變。）' },
  { type: 'say', speaker: '旻赫', text: '謝謝提醒。' },
  { type: 'say', speaker: '金智媛', text: '嗯！有什麼不懂的問我就好！{{언니가 다 알려줄게!}}（姐姐什麼都教你！）' },
  { type: 'say', speaker: '旻赫', text: '……你比我小吧。' },
  { type: 'say', speaker: '金智媛', text: '（愣了一秒）……{{아 진짜?}}（啊真的嗎？）那——那也叫我智媛就好！不要叫前輩，太老了！' },
  { type: 'cg_hide' },

  // ═══════════════════════════════════════
  // Scene 00C：初遇朴在成
  // ═══════════════════════════════════════
  { label: 'ch1_park' },
  { type: 'bg', src: 'office_day.png' },
  { type: 'say', speaker: '金智媛', text: '（小聲）來了。朴部長。' },
  { type: 'cg', src: 'char_park_default.jpg', portrait: true },
  { type: 'narrate', text: '九點四十分。電梯門打開。一個穿著深藍色西裝的中年男人走了出來。西裝繃在肚子上，油頭一絲不亂。法人信用卡掛在胸口的工牌繩上——那張卡比工牌還亮。' },
  { type: 'narrate', text: '腳步很重。整層樓的空氣都微妙地沉了一下。' },
  { type: 'narrate', text: '朴在成。四十七歲。經營企劃部部長。在盛元待了十五年。那種眼神不是打量——是估價。像在看一塊可以搾多少汁的抹布。' },
  { type: 'narrate', text: '旻赫看著他——五年的記憶像開了閘的水一樣湧上來。' },
  { type: 'say', speaker: '旻赫', text: '（朴在成。前世我在你手下幹了兩年。搶功勞、甩鍋、逼酒、當眾羞辱——你什麼都做了。）' },
  { type: 'say', speaker: '旻赫', text: '（但你最厲害的不是這些。你最厲害的是——讓所有人覺得你是個好上司。「嚴格但有能力」。呵。）' },

  { type: 'narrate', text: '朴在成掃了一眼辦公區，目光停在旻赫身上——新面孔。他走了過來。' },
  { type: 'say', speaker: '朴在成', text: '新來的？' },
  { type: 'say', speaker: '旻赫', text: '朴部長好，我是姜旻——' },
  { type: 'cg', src: 'cg_ch1_files_slam.jpg' },
  { type: 'narrate', text: '朴在成打斷了他。直接把一疊文件甩到桌上。' },
  { type: 'say', speaker: '朴在成', text: '這些今天之內整理完。明天早上之前放我桌上。' },
  { type: 'narrate', text: '頭也不回走了兩步。又停下來。' },
  { type: 'say', speaker: '朴在成', text: '別做錯。做錯了重做，還是今天之內。' },
  { type: 'arrogance', delta: 10, reason: '甩文件立威' },
  { type: 'narrate', text: '門關上了。金智媛的臉都氣歪了。' },
  { type: 'cg_hide' },
  { type: 'bg', src: 'office_day.png' },
  { type: 'say', speaker: '金智媛', text: '（壓低聲音）……別介意。他對每個新人都這樣。尤其是——' },
  { type: 'narrate', text: '她看了看門口，確定朴在成走遠了。' },
  { type: 'say', speaker: '金智媛', text: '尤其是比他能幹的新人。他怕。' },
  { type: 'say', speaker: '旻赫', text: '{{괜찮아요.}}（沒關係。）' },
  { type: 'say', speaker: '旻赫', text: '（朴在成。前世你壓了我兩年。這一次……我只需要一個月。）' },

  // 手腕懷錶反應
  { type: 'narrate', text: '懷中的懷錶在微微發燙。錶蓋的縫隙裡透出一線金光。' },
  { type: 'say', speaker: '【懷錶】', text: '[[……感受到了嗎？]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[壓迫是一種能量。別人加在你身上的重量——我可以轉化成力量還給你。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[但給什麼、給多少，是隨機的。忍得越久，回報越大。]]' },
  { type: 'say', speaker: '旻赫', text: '（我知道。我有的是耐心。）' },

  // ═══════════════════════════════════════
  // Scene 00D：第一天下班 — 冰美式
  // ═══════════════════════════════════════
  { label: "ch1_coffee" },

  { type: 'bg', src: 'office_night.png' },
  { type: 'narrate', text: '下午。旻赫用了三小時整理完所有文件——前世他做了一整天。他把文件放在朴在成桌上。朴在成不在。' },
  { type: 'narrate', text: '他回到座位，打開電腦，開始寫一份「沒人要求他寫」的東西——Q2 市場分析報告的初稿。' },
  { type: 'say', speaker: '旻赫', text: '（前世做這份報告花了三個月。這一次——兩個通宵就夠了。因為我已經知道結論了。）' },
  { type: 'say', speaker: '旻赫', text: '（朴在成。你會搶這份報告的功勞。我知道你會。）' },
  { type: 'say', speaker: '旻赫', text: '（所以我會讓你搶。然後讓所有人看到——你搶了什麼。）' },

  { type: 'narrate', text: '辦公室的人一個接一個離開。七點。八點。九點。最後只剩旻赫一個人還在敲鍵盤。' },
  { type: 'narrate', text: '金智媛下班前經過他座位。' },
  { type: 'cg', src: 'cg_ch1_jiwon_curious.jpg', pan: { start: 'left center', to: 'right center', duration: 4000 } },
  { type: 'say', speaker: '金智媛', text: '欸，第一天就加班啊？你不用——' },
  { type: 'say', speaker: '旻赫', text: '沒在加班。在做一個有趣的東西。' },
  { type: 'say', speaker: '旻赫', text: '（抬頭，微笑）明天給你看。' },
  { type: 'cg', src: 'char_new_03_jiwon_shy.jpg', portrait: true },
  { type: 'say', speaker: '金智媛', text: '（看了看他）……怪人。' },
  { type: 'narrate', text: '她轉身走了。走到門口，停了一下。回頭看了旻赫一眼——他坐在辦公室裡，電腦螢幕的光打在臉上。很專注的樣子。' },
  { type: 'narrate', text: '她不知道為什麼，覺得這個新人不太一樣。' },
  { type: 'narrate', text: '然後她走了幾步，又折回來。把一杯冰美式咖啡放在旻赫桌角。沒說話就離開了。' },
  { type: 'cg', src: 'cg_ch1_05_coffee.jpg' },
  { type: 'narrate', text: '旻赫低頭看到咖啡。愣了一下。' },
  { type: 'say', speaker: '旻赫', text: '（……前世也是這樣。第一天加班，她放了一杯咖啡就走。我到第二天才發現，咖啡都化了。）' },
  { type: 'say', speaker: '旻赫', text: '（這一次我看到了。）' },
  { type: 'narrate', text: '他拿起那杯咖啡，喝了一口。冰美式。不加糖。苦的。' },
  { type: 'say', speaker: '旻赫', text: '（但活著的苦，比死了的苦好一萬倍。）' },

  // ═══════════════════════════════════════
  // Scene 00E：第一週觀察
  // ═══════════════════════════════════════
  { label: "ch1_week1" },

  { type: 'narrate', text: '畫面慢慢拉遠。辦公室的燈一盞一盞關了。只剩旻赫那一盞。和懷中那只懷錶，微微的、金色的光。' },
  { type: 'effect', name: 'fadeout' },
  { type: 'wait', ms: 1500 },

  { type: 'bg', src: 'office_day.png' },
  { type: 'narrate', text: '入職第一週。旻赫做了三件事。' },
  { type: 'narrate', text: '第一——確認記憶。朴在成的電腦密碼（女兒生日 0913）、午休時間的行蹤（跟供應商私下碰面）、法人信用卡的使用頻率（每週五晚上）。全部和前世一樣。時間線沒有偏移。' },
  { type: 'narrate', text: '第二——建立人設。所有人對他的印象是「安靜、禮貌、反應慢半拍」。會議上從不主動發言。分配的工作準時完成但不超出預期。完美的隱形人。' },
  { type: 'narrate', text: '第三——觀察智媛。她在辦公室的角色比前世更明確了——唯一一個會在朴在成背後翻白眼的人。也是唯一一個會主動幫新人的人。每天早上會多帶一杯美式，「不小心」放在旻赫桌上。' },
  { type: 'say', speaker: '旻赫', text: '（朴在成的弱點和前世一樣：貪、虛榮、控制慾。但有一點不同——我現在是新人，不是副社長。沒有地位當武器。）' },
  { type: 'say', speaker: '旻赫', text: '（所以我需要的不是權力——是證據。然後找一個有權力的人，替我揮刀。）' },
  { type: 'say', speaker: '旻赫', text: '（吳常務。前世他是朴在成的靠山。但有一件事他不知道——朴在成用公款報假帳，其中有兩筆是打著吳常務的名義。）' },
  { type: 'say', speaker: '旻赫', text: '（等我拿到帳本——吳常務會自己動手。）' },
  { type: 'say', speaker: '【懷錶】', text: '[[你在下棋。我在看。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[很好。但別忘了——棋盤上不只有你一個人在動。]]' },
  { type: 'say', speaker: '旻赫', text: '（你說的是誰？俊宇嗎？）' },
  { type: 'narrate', text: '懷錶沉默了。錶面上的深藍色微微波動了一下，像有什麼東西在深處游過。然後恢復平靜。' },
  { type: 'say', speaker: '旻赫', text: '（……算了。先收著這個疑問。）' },

  // ═══════════════════════════════════════
  // Scene 01：搶功勞（入職第二週）
  // ═══════════════════════════════════════
  { label: "ch1_steal" },

  { type: 'bg', src: 'sungwon_lobby_v2.jpg' },
  { type: 'narrate', text: '入職兩週。姜旻赫用前世五年的經驗，做出了一份遠超新人水準的 Q2 市場分析報告。前世花了三個月——這一次只用了兩個通宵。' },
  { type: 'narrate', text: '但他做了一件前世不會做的事：他把報告交給了朴在成。' },
  { type: 'cg', src: 'cg_ch1_report_handover.jpg' },
  { type: 'say', speaker: '旻赫', text: '（前世，我直接把報告交給吳常務。朴在成氣瘋了，找了我兩年麻煩。）' },
  { type: 'say', speaker: '旻赫', text: '（這一次——我把報告給你。讓你搶。讓你表演。）' },
  { type: 'say', speaker: '旻赫', text: '（因為搶來的東西，被揭穿的時候最痛。）' },

  // 週會
  { type: 'narrate', text: '週會。十二個人坐在橢圓形會議桌旁。朴在成站在投影幕前，遙控筆轉得飛起。' },
  { type: 'cg', src: 'cg_ch1_meeting_present.jpg' },
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
  { type: 'cg', src: 'cg_ch1_notebook_329.jpg' },
  { type: 'say', speaker: '旻赫', text: '（3/29。搶功勞。第一次。帳本開始記了。）' },

  // ═══════════════════════════════════════
  // Scene 02：當眾羞辱（第三週）
  // ═══════════════════════════════════════
  { label: "ch1_humiliate" },
  { type: 'narrate', text: '第三週。嚐到甜頭的朴在成開始加碼。他需要旻赫繼續輸出——同時確保旻赫不敢反抗。' },
  { type: 'cg', src: 'cg_ch1_public_scold.jpg' },
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
  { label: "ch1_overtime" },
  { type: 'narrate', text: '週五晚上十點半。整層辦公室只剩旻赫一個人。' },
  { type: 'narrate', text: '朴在成下午甩了一個「緊急方案」要求今晚完成——但旻赫知道，截止日期是下下週。朴在成自己呢？跟供應商去「客戶招待」了——用公款。' },
  { type: 'arrogance', delta: 15, reason: '加班陷阱' },
  { type: 'say', speaker: '旻赫', text: '（前世就是這樣。每個週五加班，朴在成每個週五喝酒。公款請客，報帳寫「客戶招待」，實際上去清潭洞吃日料。）' },
  { type: 'say', speaker: '旻赫', text: '（我知道你每一筆假帳。因為前世——清這些爛帳的人是我。）' },
  { type: 'narrate', text: '他完成了方案。然後——朴在成的電腦還開著。密碼和前世一樣，女兒的生日 0913。' },
  { type: 'cg', src: 'cg_ch1_sneak_computer.jpg' },

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
  { label: "ch1_hoesik" },
  { type: 'narrate', text: '韓國職場的會食——名義上是團隊聚餐，實際上是權力遊戲的延伸。朴在成的會食更狠——他用酒來碾人。' },
  { type: 'cg', src: 'cg_ch1_hoesik_soju.jpg' },
  { type: 'say', speaker: '朴在成', text: '（三杯燒酒下肚）姜旻赫！來，給부장倒一杯！' },
  { type: 'say', speaker: '旻赫', text: '（雙手倒酒）부장님, 한 잔 드세요.' },
  { type: 'say', speaker: '朴在成', text: '（一口乾）好！你也喝！' },
  { type: 'say', speaker: '朴在成', text: '새로 온 사람이 부장한테 한 잔도 안 마시면 되겠어?（新來的不陪部長喝一杯像話嗎？）' },
  { type: 'say', speaker: '旻赫', text: '朴部長，抱歉——我不太能喝。' },
  { type: 'say', speaker: '朴在成', text: '（臉色變了）什麼？部長給你倒的酒你不喝？' },
  { type: 'shake' },
  { type: 'say', speaker: '朴在成', text: '야, 너 몇 년차야?（喂，你幾年資？）第一個月就敢拒絕부장的酒？我在盛元十五年！從來沒見過！' },
  { type: 'narrate', text: '包廂沒人說話。有人尷尬低頭夾肉。有人假裝上廁所。只有金智媛的筷子在桌面上敲得噹噹響。' },
  { type: 'cg', src: 'cg_ch1_02_jiwon.jpg' },
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
  { label: "ch1_revenge" },
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
  { label: "ch1_parkscar" },
  { type: 'bg', src: 'breakroom.jpg' },
  { type: 'narrate', text: '午休。旻赫路過茶水間，聽到朴在成在打電話。' },
  { type: 'cg', src: 'char_new_01_park.jpg', portrait: true },
  { type: 'say', speaker: '朴在成', text: '（聲音壓得很低）수진아……응, 아빠야.（秀珍啊……嗯，是爸爸。）' },
  { type: 'say', speaker: '朴在成', text: '학원비 보냈어. 이번 달은 좀 늦어서 미안.（補習班費轉了。晚了，抱歉。）' },
  { type: 'say', speaker: '朴在成', text: '……수능 잘 볼 거야. 아빠가 믿어.（高考一定會考好的。爸爸相信你。）' },
  { type: 'narrate', text: '他掛了電話。靠著牆，閉上眼睛。十五年。每天末班地鐵。每一場會食。每一個上司的生日。他不是壞人。他是一個好累好累的人。' },
  { type: 'say', speaker: '旻赫', text: '（朴在成。你女兒秀珍，前世考上了首爾大學。你是一個好爸爸。但你是一個壞上司。）' },
  { type: 'say', speaker: '旻赫', text: '（我同情你——但你報的假帳、搶的功勞、踩的每一個人……你要還。）' },

  // ═══════════════════════════════════════
  // Scene 07：朴在成針對智媛
  // ═══════════════════════════════════════
  { label: "ch1_target_jiwon" },
  { type: 'cg_hide' },
  { type: 'bg', src: 'office_day.png' },
  { type: 'narrate', text: '但朴在成的下一刀——沒有砍向旻赫。' },
  { type: 'narrate', text: '他砍向了智媛。' },
  { type: 'cg', src: 'cg_ch1_park_throws_mail.jpg' },
  { type: 'say', speaker: '朴在成', text: '（站在智媛座位前，把一份印出的郵件甩到桌上）金智媛。你的客戶提案——被退回了。' },
  { type: 'say', speaker: '金智媛', text: '（愣）什麼？我昨天才發——' },
  { type: 'say', speaker: '朴在成', text: '客戶說格式不對、數據有誤。你看看你寫的什麼東西。' },
  { type: 'say', speaker: '金智媛', text: '……這不是我的版本。我交出去的——' },
  { type: 'say', speaker: '朴在成', text: '你的版本？呵。入職比姜旻赫還早，做事還不如他。' },
  { type: 'arrogance', delta: 15, reason: '針對智媛' },
  { type: 'narrate', text: '整層樓都聽到了。智媛的臉漲得通紅——不是害羞，是氣的。但她沒反駁。因為朴在成手裡握著她的試用期評鑑。' },
  { type: 'say', speaker: '朴在成', text: '（壓低聲音，只有智媛聽到）회식에서 그렇게 큰소리 치더니, 일은 이 모양이야?（會食上嗓門那麼大，工作就這樣？）' },
  { type: 'narrate', text: '他走了。智媛坐在座位上，握著筆的手在發抖。不是怕。是忍。' },
  { type: 'narrate', text: '旻赫看到了。全部都看到了。' },
  { type: 'say', speaker: '旻赫', text: '（……來了。跟前世一模一樣。會食之後，他開始針對智媛。）' },
  { type: 'say', speaker: '旻赫', text: '（前世——調最爛的案子、公開挑錯、逼加班到凌晨。三個月。她撐了三個月就離職了。）' },
  { type: 'say', speaker: '旻赫', text: '（走的那天她一個人搬紙箱。我路過——什麼都沒做。）' },
  { type: 'say', speaker: '旻赫', text: '（因為那時候的我有老婆。老婆說別惹事，升職最重要。她說得對——在那一世裡。）' },
  { type: 'narrate', text: '旻赫攥緊了拳頭。懷中的懷錶微微震動。' },
  { type: 'say', speaker: '【懷錶】', text: '[[你的計畫是三個月後動手。現在才第五週。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[你確定要打亂節奏？]]' },
  { type: 'narrate', text: '旻赫沒有回答懷錶。他看著智媛的背影——她在偷偷擦眼角。' },

  // ═══════════════════════════════════════
  // Scene 08：頂撞——計畫提前
  // ═══════════════════════════════════════
  { label: "ch1_confront" },
  { type: 'narrate', text: '下午三點。朴在成又把智媛叫進辦公室。門沒關。所有人都聽到裡面的聲音。' },
  { type: 'say', speaker: '朴在成', text: '（咆哮）這個月你的 KPI 是全組最低的！' },
  { type: 'say', speaker: '金智媛', text: '（聲音在抖）부장님，那個客戶是您臨時調——' },
  { type: 'say', speaker: '朴在成', text: '你在找藉口？' },
  { type: 'narrate', text: '門被推開了。' },
  { type: 'cg', src: 'cg_ch1_door_enter_v3.jpg' },
  { type: 'shake' },
  { type: 'say', speaker: '旻赫', text: '朴部長。' },
  { type: 'narrate', text: '辦公室安靜了。所有人轉頭看。' },
  { type: 'say', speaker: '朴在成', text: '（冷笑）姜旻赫？誰讓你進來的？' },
  { type: 'say', speaker: '旻赫', text: '智媛的客戶提案被退回——我看了那封郵件。' },
  { type: 'say', speaker: '旻赫', text: '發件人是張代理。但張代理上週出差，根本不在辦公室。那封退回郵件的發件時間……有問題。' },
  { type: 'narrate', text: '朴在成的臉色變了。' },
  { type: 'say', speaker: '旻赫', text: '（語氣平靜）而且智媛交出去的版本跟被退回的版本——不是同一個檔案。有人改過。' },
  { type: 'cg', src: 'cg_ch1_faceoff_v2.jpg' },
  { type: 'say', speaker: '朴在成', text: '（拍桌）你在指控誰？！你一個試用期的——' },
  { type: 'say', speaker: '旻赫', text: '沒有指控任何人。我只是覺得……可能有誤會。建議朴部長確認一下。' },
  { type: 'narrate', text: '整層樓都在看。朴在成的臉從紅變白，再從白變紅。' },
  { type: 'say', speaker: '朴在成', text: '（壓著聲音）야. 너 지금 뭐 하는 거야.（你現在在幹什麼。）' },
  { type: 'narrate', text: '旻赫直視他的眼睛。沒有回答。不需要回答。所有人都看到了。' },
  { type: 'flash', color: '#ffffff', duration: 300 },
  { type: 'shake' },
  { type: 'arrogance', delta: 25, reason: '頂撞部長' },
  { type: 'narrate', text: '空氣凝固了五秒。朴在成轉身回辦公室，「砰」地把門關上。' },
  { type: 'narrate', text: '智媛看著旻赫。嘴巴張了一下——但什麼都沒說。旻赫也沒看她，直接走回座位。' },
  { type: 'narrate', text: '她低下頭。手裡的筆攥得更緊了。' },
  { type: 'say', speaker: '旻赫', text: '（……這一世，我不會再路過了。）' },
  { type: 'say', speaker: '【懷錶】', text: '[[……計畫亂了。]]' },
  { type: 'say', speaker: '旻赫', text: '（……）' },
  { type: 'say', speaker: '【懷錶】', text: '[[你最好有備案。]]' },
  { type: 'say', speaker: '旻赫', text: '（……從第一天就有。）' },

  // ═══════════════════════════════════════
  // Scene 09：絞殺——朴在成的全面反擊
  // ═══════════════════════════════════════
  { label: "ch1_counterattack" },
  { type: 'bg', src: 'office_day.png' },
  { type: 'narrate', text: '朴在成動了。比旻赫預期的更快、更狠。' },
  { type: 'narrate', text: '第二天。旻赫的信箱裡出現了一封 HR 的約談通知。' },
  { type: 'cg', src: 'cg_ch1_hr_interview.jpg' },
  { type: 'say', speaker: 'HR金部長', text: '姜旻赫先生。朴部長提交了一份報告——指出你入職以來多次違反部門流程、未經批准擅自修改文件、對上級態度不敬。' },
  { type: 'say', speaker: 'HR金部長', text: '考慮到你目前還在試用期……公司正在評估是否延長或終止你的合約。' },
  { type: 'say', speaker: '旻赫', text: '……我明白了。' },
  { type: 'narrate', text: '回到辦公區。氣氛已經變了。' },
  { type: 'narrate', text: '朴在成在背後下了封殺令——跟旻赫說話的人，都會被「關照」。同事們開始迴避旻赫。不是討厭他。是怕。' },
  { type: 'narrate', text: '旻赫的座位周圍空了一圈。茶水間他進去，別人就出來。連電梯都沒人願意跟他同搭。' },
  { type: 'say', speaker: '旻赫', text: '（……前世你對智媛就是這樣做的。一模一樣。只是這次對象換成了我。）' },
  { type: 'say', speaker: '旻赫', text: '（但我跟智媛不一樣。）' },

  // 午休 — 冰美式
  { type: 'narrate', text: '午休。茶水間。旻赫一個人坐著吃飯糰。' },
  { type: 'narrate', text: '有人把一杯冰美式放在他面前。沒說話就坐到了對面。' },
  { type: 'narrate', text: '智媛。' },
  { type: 'narrate', text: '她什麼都沒說。拆開自己的飯糰，低頭吃。好像只是剛好來這裡吃午餐一樣。' },
  { type: 'narrate', text: '杯套上寫了字。很醜但很用力的字：\n「야 힘내.（加油。）」' },
  { type: 'cg', src: 'cg_ch1_coffee_ganbare_v2.jpg' },
  { type: 'narrate', text: '旻赫看著那行字。沒說話。拿起咖啡，喝了一口。' },
  { type: 'narrate', text: '苦的。跟第一天那杯一樣。' },
  { type: 'narrate', text: '兩個人就這樣安靜吃完了午餐。什麼都沒說。' },

  // 旻赫的佈局揭曉（內心戲）
  { type: 'say', speaker: '旻赫', text: '（……朴在成。你比前世更快動手了。因為我刺了你一刀。）' },
  { type: 'say', speaker: '旻赫', text: '（但你不知道——我早就知道你會這樣做。因為前世你做過一次了。）' },
  { type: 'say', speaker: '旻赫', text: '（而我從第一天開始，就準備了一條路——不經過吳常務。）' },
  { type: 'say', speaker: '旻赫', text: '（因為吳常務不會管。他知道朴在成有問題，但管了等於承認自己的部門有問題。前世他就是這樣——睜一隻眼閉一隻眼。）' },
  { type: 'say', speaker: '旻赫', text: '（所以這一次，我的信——寄給了集團監察室。）' },
  { type: 'say', speaker: '旻赫', text: '（搶功勞的追蹤修訂。法人信用卡十四筆假帳。還有朴在成跟韓星科技業務部長停車場密會的照片。）' },
  { type: 'say', speaker: '旻赫', text: '（寄出的時間——是我被 HR 約談的第二天。）' },
  { type: 'say', speaker: '旻赫', text: '（也就是說：是朴在成親手把我推到了絕路……而我在絕路上按下了發送鍵。）' },
  { type: 'say', speaker: '旻赫', text: '（他以為他在殺我。其實他在幫我。）' },
  { type: 'say', speaker: '旻赫', text: '（因為沒被逼到這一步——我寄出的信就只是「新人報復上司」。）' },
  { type: 'say', speaker: '旻赫', text: '（但現在——我是一個被打壓的吹哨者。集團監察室最喜歡的劇本。）' },

  // ═══════════════════════════════════════
  // Scene 10：法務部來了
  // ═══════════════════════════════════════
  { label: "ch1_legal" },
  { type: 'narrate', text: '三天後。旻赫什麼都沒做。沒有找吳常務、沒有寫信、沒有任何動作。' },
  { type: 'narrate', text: '他不需要做任何事。因為信已經寄出了。' },
  { type: 'cg', src: 'cg_ch1_legal_arrives.jpg' },
  { type: 'narrate', text: '週一早上。經營企劃部來了兩個沒見過的人。西裝筆挺，公事包。他們走進吳常務辦公室，門關了一個小時。' },
  { type: 'narrate', text: '消息很快傳開了——集團法務部的人來了。' },
  { type: 'narrate', text: '智媛轉頭看了旻赫一眼。旻赫在看手機。表情沒有任何變化。' },
  { type: 'narrate', text: '但智媛注意到——他的手，穩得不像正常人。' },

  // ═══════════════════════════════════════
  // Scene 11：終局——會議室處刑
  // ═══════════════════════════════════════
  { label: "ch1_boss" },
  { type: 'cg', src: 'cg_ch1_01_night_hunter.jpg' },
  { type: 'narrate', text: '會議室。但這次不一樣。' },
  { type: 'narrate', text: '吳常務坐在主位。旁邊不只 HR 金部長——還有集團法務部的兩個人。桌上放著一疊很厚的文件。' },
  { type: 'narrate', text: '朴在成走進來。看到這陣仗——然後看到角落裡坐著的旻赫。' },
  { type: 'narrate', text: '他的腳步停了整整三秒。' },
  { type: 'say', speaker: '朴在成', text: '（硬擠出笑容）吳常務……今天什麼風把大家吹來了？' },
  { type: 'say', speaker: '吳常務', text: '朴部長。坐。集團法務部有一些問題需要確認。' },
  { type: 'cg', src: 'cg_ch1_03_meeting.jpg' },
  { type: 'narrate', text: '朴在成坐下。他注意到旻赫的表情——不是微笑。是無表情。比微笑更可怕。' },

  // BOSS 出牌
  { type: 'card_play', id: 'boss',
    prompt: '[[法務部來了。你只需要打響第一槍——剩下的，系統會碾過去。]]',
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

  // 共通處刑演出
  { type: 'narrate', text: '法務部的人翻開文件。朴在成的臉一秒比一秒白。' },
  { type: 'say', speaker: '法務部', text: '朴在成部長。關於經營企劃部最近三個月的法人信用卡使用紀錄——其中十四筆報帳的收據來源店家，查無營業登記。合計四千七百萬韓元。' },
  { type: 'narrate', text: '朴在成的手開始抖了。' },
  { type: 'say', speaker: '朴在成', text: '……那些是正常的業務開——' },
  { type: 'say', speaker: '法務部', text: '另外，Q2 市場分析報告的文件屬性顯示，原始創建者並非朴部長。追蹤修訂紀錄也顯示有三處數據被覆蓋修改後，用於質疑原創建者的工作品質。' },
  { type: 'narrate', text: '朴在成猛地站起來。椅子往後倒。' },
  { type: 'say', speaker: '朴在成', text: '（指著旻赫，手在抖）내가 이 회사에 15 년을 바쳤어! 15 년!（我奉獻了十五年！十五年！）' },
  { type: 'say', speaker: '朴在成', text: '是你搞的——！你從第一天就在——' },
  { type: 'narrate', text: '旻赫安靜地等他吼完。然後，用全場最低的音量——' },
  { type: 'say', speaker: '旻赫', text: '**부장님.**' },
  { type: 'narrate', text: '朴在成住嘴了。不是因為聲音大——是因為太安靜了。' },
  { type: 'flash', color: '#ffffff', duration: 300 },
  { type: 'shake' },
  { type: 'say', speaker: '旻赫', text: '**부장님이 저한테 서류 던진 그 날부터요.**' },
  { type: 'say', speaker: '旻赫', text: '**（從部長把文件甩到我桌上的那天起。）**' },
  { type: 'flash', color: '#ffffff', duration: 500 },
  { type: 'shake' },
  { type: 'arrogance', delta: -100, reason: '完美打臉' },

  { type: 'narrate', text: '會議室沒有人說話。朴在成的臉像是所有血都抽走了。' },
  { type: 'say', speaker: '朴在成', text: '（聲音沙啞）……너……대체 뭐야.（你……到底是什麼。）' },
  { type: 'narrate', text: '旻赫站起來，走到門口。停了一下。沒有回頭。' },
  { type: 'say', speaker: '旻赫', text: '부장님. 수진이는 서울대 갈 겁니다. 걱정 마세요.' },
  { type: 'say', speaker: '旻赫', text: '**（部長。秀珍會考上首爾大學的。別擔心。）**' },
  { type: 'narrate', text: '朴在成像是被雷劈了一樣愣住。他從來沒有跟任何同事提過女兒的名字。' },
  { type: 'narrate', text: '旻赫走出了會議室。沒有回頭。' },

  // 收場
  { type: 'say', speaker: '吳常務', text: '（放下文件，語氣很沉）金部長。按規定走。' },
  { type: 'narrate', text: '朴在成走出會議室。透過玻璃，所有人看到他在自己座位前站了很久。桌上有女兒秀珍的照片。他把照片拿起來，放進口袋。然後開始收東西。' },
  { type: 'cg', src: 'cg_ch1_04_cardboard.jpg' },
  { type: 'narrate', text: '十五年。最後裝進一個紙箱。' },

  // 走廊
  { type: 'cg_hide' },
  { type: 'cg', src: 'cg_ch1_06_hallway.jpg' },
  { type: 'narrate', text: '旻赫站在走廊窗邊，看著朴在成的背影消失在旋轉門後面。' },
  { type: 'narrate', text: '身後傳來腳步聲。很快的腳步聲。' },
  { type: 'say', speaker: '金智媛', text: '（跑過來，喘著氣）法務部的人跟我說了——我的試用期評鑑會重新審核。朴在成寫的那些……全部不算。' },
  { type: 'say', speaker: '旻赫', text: '嗯。' },
  { type: 'narrate', text: '智媛看著他。沉默了好幾秒。她張嘴，又閉上。像是有一百句話想說，但一句都找不到對的。' },
  { type: 'narrate', text: '最後她只說了——' },
  { type: 'say', speaker: '金智媛', text: '……辣炒年糕。弘大那家。你請客。' },
  { type: 'say', speaker: '旻赫', text: '我還沒升職。' },
  { type: 'say', speaker: '金智媛', text: '（眼眶紅了，但笑了）遲早的事。走了。' },
  { type: 'narrate', text: '她走在前面。步伐很快，像怕被看到臉。' },
  { type: 'narrate', text: '旻赫走在後面。看著她的背影——跟那天一個人搬紙箱的背影重疊了一瞬間。' },
  { type: 'narrate', text: '然後消失了。因為這一世，她不用搬紙箱了。' },

  // 尾聲
  { type: 'narrate', text: '旻赫微笑了一下。然後微笑消失了。' },
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
