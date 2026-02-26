/**
 * 序章：墜落與重生（V4 — 全屏 CG 版）
 * 無角色立繪，全部場景用 CG 全屏呈現
 */

const PROLOGUE = [
  // ═══════════════════════════════════════
  // 第一幕「血」— 天台
  // ═══════════════════════════════════════
  
  // CG-01: 拖行
  { type: 'cg', src: 'cg_dragged_rooftop_v2.jpg' },
  { type: 'narrate', text: '黑暗中，只有風聲。然後是皮鞋踩在水泥地上的聲音——拖行的聲音。' },
  { type: 'narrate', text: '姜旻赫的指甲斷了兩根。膝蓋磨破了西裝褲。他能感覺到水泥地面刮過胸口的灼痛。' },
  
  // CG-02: 仰角——旻赫看到俊宇和瑞英
  { type: 'cg', src: 'cg_lookingup_v2.jpg' },
  { type: 'say', speaker: '姜旻赫', text: '俊宇……你在做什麼……' },
  { type: 'narrate', text: '拖行停止。旻赫被翻過身來。他看見首爾的夜空——和站在他上方的兩個人。' },
  { type: 'say', speaker: '徐俊宇', text: '{{형.（哥。）}}' },
  { type: 'narrate', text: '俊宇笑了。那種大學圖書館裡一起讀到凌晨三點的笑。溫暖的、熟悉的。' },
  { type: 'say', speaker: '徐俊宇', text: '你知道嗎，我等這一天——五年了。' },
  { type: 'say', speaker: '姜旻赫', text: '……為什麼？' },
  { type: 'say', speaker: '徐俊宇', text: '因為你太亮了啊，형. 所有人都在看你。教授、客戶、董事會……' },
  { type: 'say', speaker: '徐俊宇', text: '連瑞英——她嫁給你的時候，眼裡全是你。' },
  { type: 'say', speaker: '徐俊宇', text: '**{{근데 형, 나는？나는 뭔데？}}**\n（可是哥，我呢？我算什麼？）' },

  // CG-03: 踩手指
  { type: 'cg', src: 'cg_hand_crushed_v2.jpg' },
  { type: 'narrate', text: '沉默了兩秒。俊宇用皮鞋尖點了點旻赫的左手。' },
  { type: 'shake' },
  { type: 'flash', color: '#ff0000', duration: 150 },
  { type: 'narrate', text: '他踩了下去。手指骨節碎裂的聲音。' },
  { type: 'say', speaker: '姜旻赫', text: '**啊——！**' },
  
  // 繼續對話（維持 CG-03）
  { type: 'say', speaker: '徐俊宇', text: '創業的點子是你的。談客戶是你去的。連副社長的位子，董事會也只給你。' },
  { type: 'say', speaker: '徐俊宇', text: '那我呢？所有人叫我什麼——「姜副社長的那個朋友」。' },
  { type: 'show_arrogance' },
  { type: 'arrogance', delta: 30, reason: '踩碎手指' },
  
  // CG-04: 瑞英
  { type: 'cg', src: 'cg_seryoung_guilty_v2.jpg' },
  { type: 'say', speaker: '姜旻赫', text: '瑞英……' },
  { type: 'narrate', text: '韓瑞英站在風裡，頭髮被吹亂了。她的手在微微發抖——但她沒有動。她低下眼睛。' },
  { type: 'say', speaker: '韓瑞英', text: '……{{미안해.}}（對不起。）' },
  { type: 'narrate', text: '但她的腳，往後退了一步。' },
  { type: 'arrogance', delta: 20, reason: '妻子旁觀' },

  // CG-05: 推落
  { type: 'cg', src: 'cg_the_push_v2.jpg' },
  { type: 'say', speaker: '徐俊宇', text: '형, 別怪我。這個世界就是這樣——站在高處的人，總有人要把你拉下來。' },
  { type: 'arrogance', delta: 20, reason: '五年的背叛' },
  { type: 'say', speaker: '徐俊宇', text: '不巧，那個人是我。' },
  { type: 'narrate', text: '俊宇的手搭上旻赫的肩膀——像大學時代那樣。然後，推了出去。' },
  { type: 'arrogance', delta: 30, reason: '推落天台' },

  // CG-06: 墜落（直式全屏）— 囂張值爆滿
  { type: 'cg', src: 'cg_falling_v2.jpg', portrait: true },
  { type: 'flash', color: '#ff0000', duration: 500 },
  { type: 'shake' },
  { type: 'narrate', text: '旻赫的身體離開了邊緣。風灌進耳朵，所有聲音都消失了。' },

  // ═══════════════════════════════════════
  // 第二幕「閃」— 走馬燈
  // ═══════════════════════════════════════
  { type: 'cg_hide' },
  { type: 'narrate', text: '下墜。大樓的窗戶一層一層往上飛。旻赫的瞳孔裡，倒映著二十八年的人生——' },
  
  // CG-07: 童年
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_childhood_v2.jpg' },
  { type: 'narrate', text: '【七歲】大田搬到首爾。八坪的考試院。媽媽在煮泡麵，爸爸坐在門口抽菸。' },
  { type: 'narrate', text: '從那天起，他學會了：沒有人會幫你。' },
  
  // CG-08: 便利商店
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_parttime_v2.jpg' },
  { type: 'narrate', text: '【深夜】便利商店制服，靠在收銀台打瞌睡。同學開 BMW 經過窗外。' },
  { type: 'narrate', text: '他從來不覺得丟臉——丟臉的是「放棄」。' },

  // CG-09: 大學
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_university_v2.jpg' },
  { type: 'narrate', text: '【大學】延世圖書館，凌晨三點。俊宇扔了一包調味粉：' },
  { type: 'narrate', text: '「{{야, 이거 너 좋아하는 거.}}」他笑了。那是真的笑。他以為那是永遠。' },
  
  // CG-10: 入職
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_firstday_v2.jpg' },
  { type: 'narrate', text: '【入職】盛元集團大廳。唯一一套西裝。' },
  { type: 'narrate', text: '他以為走進這扇門，人生就會不一樣。他說對了——但不是他想的那種不一樣。' },

  // CG-11: 求婚
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_proposal_v2.jpg' },
  { type: 'narrate', text: '【求婚】漢江邊。單膝跪地。「{{결혼해 줄래？}}」' },
  { type: 'narrate', text: '瑞英點頭的時候，眼裡是有光的。他不知道那些光，後來都滅了。' },

  // 最後的念頭
  { type: 'cg_hide' },
  { type: 'narrate', text: '閃回結束。身體還在下墜。他看著越來越近的地面。腦中最後的念頭——' },
  { type: 'say', speaker: '姜旻赫', text: '（不是「為什麼」。是「如果再來一次」——我不會再讓任何人站在我上面。）' },
  { type: 'flash', color: '#000000', duration: 2000 },
  { type: 'wait', ms: 2000 },
  { type: 'narrate', text: '撞擊——黑屏。寂靜。' },
  { type: 'wait', ms: 3000 },

  // ═══════════════════════════════════════
  // 第三幕「生」— 覺醒
  // ═══════════════════════════════════════
  
  // CG-12: 睜眼 — 囂張值歸零（重生）
  { type: 'cg', src: 'cg_eyes_open_v2.jpg' },
  { type: 'arrogance', delta: -100, reason: '重生' },
  { type: 'narrate', text: '「嗶——嗶——嗶——」鬧鐘。便宜的、塑膠的、大學用了四年都沒換的那種鬧鐘。' },
  { type: 'narrate', text: '姜旻赫的眼睛睜開了。' },

  // BG-01: 考試院
  { type: 'bg', src: 'goshiwon_room_v2.jpg' },
  { type: 'narrate', text: '他躺在窄到翻身都會撞牆的單人床上，盯著天花板——那塊形狀像韓國地圖的水漬。他記得。記得太清楚了。' },
  { type: 'say', speaker: '姜旻赫', text: '……鷺梁津。' },
  { type: 'narrate', text: '他拿起手機。螢幕碎了一角——搬家時摔的。日期：2021 年 3 月 15 日。' },
  { type: 'narrate', text: '入職盛元集團的前一天。五年前。' },
  { type: 'say', speaker: '姜旻赫', text: '…………我回來了。' },
  { type: 'narrate', text: '他的手開始發抖。不是恐懼。不是喜悅。是壓了五年的所有情緒——在一瞬間找到了出口。' },
  
  // CG-13: 懷錶
  { type: 'narrate', text: '他低頭看自己的手——年輕的手，沒有傷疤，十根指頭完好無缺。然後他看見了。左手腕上，多了一只懷錶。' },
  { type: 'cg', src: 'cg_watch_glow_v2.jpg' },
  { type: 'narrate', text: '古舊的金色錶殼。紋路像是被什麼人握了很久很久。錶面不走時間。但錶殼在微微發溫。' },
  { type: 'say', speaker: '姜旻赫', text: '……這是什麼？' },
  { type: 'say', speaker: '【懷錶】', text: '[[……你醒了。]]' },
  { type: 'narrate', text: '聲音不是從耳朵傳來的。像是直接出現在腦子裡。低沉、蒼老、帶著某種……疲憊。' },
  { type: 'say', speaker: '【懷錶】', text: '[[不重要。重要的是——你回來了。時間倒轉，肉身重置。但記憶……是你的。全部都是。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[因為你還有不甘心。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[我能給你力量。但力量是隨機的。用不用，你自己決定。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[但記住一件事——**忍耐是有期限的。包括我的。**]]' },

  // 態度宣言
  { type: 'bg', src: 'goshiwon_room_v2.jpg' },
  { type: 'narrate', text: '旻赫站在那面有裂痕的鏡子前。鏡子裡是二十八歲的臉——但眼睛裡，是三十三歲的靈魂。他慢慢地笑了。那個笑很溫和。但沒有到達眼睛。' },
  { type: 'say', speaker: '姜旻赫', text: '**{{서준우.}}**（徐俊宇。）' },
  { type: 'say', speaker: '姜旻赫', text: '**{{이번 생에서는——}}**（這一世——）' },
  { type: 'flash', color: '#c9a94e', duration: 200 },
  { type: 'say', speaker: '姜旻赫', text: '**{{무릎 꿇는 건 네 차례다.}}**\n**（輪到你跪了。）**' },

  // ═══════════════════════════════════════
  // 第四幕「食」— 紫菜包飯
  // ═══════════════════════════════════════
  
  // BG-02: 包飯店
  { type: 'bg', src: 'kimbap_shop_v2.jpg' },
  { type: 'narrate', text: '重生後的姜旻赫做的第一件事，不是去盛元集團報到。不是制定復仇計畫。是走到巷口的紫菜包飯店。' },
  { type: 'say', speaker: '旻赫', text: '{{김밥 하나요.}}（一份紫菜包飯。）' },
  { type: 'narrate', text: '他坐在角落。前世的最後一天，俊宇問他要不要吃宵夜。他說「吃了很多」——其實沒吃。他連死之前最後一餐都沒吃到。' },

  // CG-14: 阿姨
  { type: 'cg', src: 'cg_kimbap_cry_v2.jpg' },
  { type: 'narrate', text: '紫菜包飯端上來了。他夾了一塊放進嘴裡。嚼了兩口。然後停了下來。用手背擋住了眼睛。' },
  { type: 'say', speaker: '老闆娘', text: '{{아이고, 왜 그래? 맛없어?}}（天哪怎麼了？不好吃嗎？）' },
  { type: 'say', speaker: '旻赫', text: '{{아니요. 맛있어서 그래요.}}\n（不是。太好吃了才這樣。）' },

  { type: 'bg', src: 'kimbap_shop_v2.jpg' },
  { type: 'narrate', text: '他擦了一下眼睛。然後把那份紫菜包飯，一塊不剩地吃完了。' },
  { type: 'say', speaker: '旻赫', text: '（從現在開始——每一天、每一餐、每一口氣，都是我自己選的。）' },

  // 選擇
  { type: 'cg_hide' },
  { type: 'narrate', text: '走出紫菜包飯店。左邊是去盛元集團的地鐵站。右邊是往漢江。手腕上的懷錶微微發溫。' },
  { type: 'choice', options: [
    { text: '去盛元。準時報到。', value: 'company', key: 'scene4_choice' },
    { text: '去漢江。遲到一次又怎樣。', value: 'hanriver', key: 'scene4_choice', style: 'strike' }
  ]},

  // 漢江
  { type: 'narrate', text: '三月的首爾還冷。旻赫坐在漢江邊的長椅上。前世從來沒有在上班日來過這裡。五年裡沒有一天遲到。結果呢。' },
  { type: 'say', speaker: '【懷錶】', text: '[[……你在發呆。]]' },
  { type: 'say', speaker: '旻赫', text: '你不是睡了嗎。' },
  { type: 'say', speaker: '【懷錶】', text: '[[我沒有睡。我在看你。你做的第一件事，是去吃飯。]]' },
  { type: 'say', speaker: '旻赫', text: '怎麼了？' },
  { type: 'say', speaker: '【懷錶】', text: '[[**上次不是這樣的。**]]' },
  { type: 'say', speaker: '旻赫', text: '……上次？' },
  { type: 'wait', ms: 2000 },
  { type: 'say', speaker: '【懷錶】', text: '[[……不重要。去做你要做的事吧。]]' },
  { type: 'narrate', text: '「上次不是這樣的。」——什麼意思？旻赫把這個疑問收了起來。現在有更重要的事。' },

  // ═══════════════════════════════════════
  // 第五幕「戰」— 入職盛元
  // ═══════════════════════════════════════

  // CG-15: 抽卡（直式全屏）
  { type: 'cg', src: 'cg_gacha_v2.jpg', portrait: true },
  { type: 'narrate', text: '手腕上的懷錶忽然燙了起來。金光從錶面射出——' },
  { type: 'narrate', text: '旻赫感覺到有什麼東西在體內覺醒了。' },

  // CG-16: 看手
  { type: 'cg', src: 'cg_reborn_v2.jpg' },
  { type: 'narrate', text: '他低頭看著自己的雙手。手指間有金色光芒殘留，像螢火蟲一樣微微飄散。' },
  { type: 'narrate', text: '手是年輕的——28 歲的手，沒有被踩碎的傷痕。十根指頭完好無缺。' },
  { type: 'say', speaker: '旻赫', text: '（真的回來了。這一次——我要把握每一秒。）' },

  // CG-17: 宣戰——盛元大樓前
  { type: 'cg', src: 'cg_declaration_v2.jpg' },
  { type: 'narrate', text: '盛元集團。江南大路上最高的大樓之一。姜旻赫前世待了五年的地方——也是他被推下去的地方。' },
  { type: 'say', speaker: '旻赫', text: '（上一次，我走進這扇門是來賣命的。這一次——我是來收債的。）' },

  // BG-03: 盛元大樓
  { type: 'bg', src: 'sungwon_lobby_v2.jpg' },
  { type: 'narrate', text: '入職第一天。他穿著那套從門背後取下的便宜深色西裝，走進了盛元集團的大門。' },
  { type: 'say', speaker: '旻赫', text: '（朴在成、徐俊宇、所有欠我的人——）' },
  { type: 'say', speaker: '旻赫', text: '（這一局，**我先手。**）' },

  // 教學抽卡
  { type: 'cg_hide' },
  { type: 'say', speaker: '【懷錶】', text: '[[感受到了嗎？壓迫是一種能量。我可以轉化成力量還給你。要試試嗎？]]' },
  { type: 'gacha', pool: {
    r: { name: '法人信用卡使用規範', rarity: 'R', icon: '📄', cardImage: 'assets/ui/card_r_creditcard.jpg', desc: '第七條：法人卡不得用於個人消費。違者記大過、追回款項。朴在成胸口那張卡……你懂的。' }
  }, forced: { name: '法人信用卡使用規範', rarity: 'R', icon: '📄', cardImage: 'assets/ui/card_r_creditcard.jpg', desc: '第七條：法人卡不得用於個人消費。違者記大過、追回款項。朴在成胸口那張卡……你懂的。' }},
  
  // 抽到卡——先收著
  { type: 'say', speaker: '【系統】', text: '[[命運卡已收入懷錶。在需要的時候，它會成為你的武器。]]' },
  { type: 'say', speaker: '旻赫', text: '（先收著。現在還不是用的時候——但這張牌，我記住了。）' },
  { type: 'say', speaker: '【懷錶】', text: '[[不錯。忍耐會帶來回報——下一次，命運之輪轉出的東西會更有分量。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[但別忍過了頭。有些機會，過了就沒了。]]' },

  // 結尾
  { type: 'cg_hide' },
  { type: 'narrate', text: '手腕上那只懷錶，微微的、金色的光，在深夜的辦公室裡像一顆不願熄滅的星。' },
  { type: 'say', speaker: '【懷錶】', text: '[[……你的選擇，和上次不一樣了。]]' },
  { type: 'effect', name: 'fadeout' },
  { type: 'wait', ms: 2000 },
  
  // 預告 — 大字標題
  { type: 'big_title', text: '下 集 預 告', sub: '第一章：部長的末日' },
  { type: 'narrate', text: '「{{야, 너 몇 년차야？}}（喂，你幾年資？）」' },
  { type: 'narrate', text: '「十五年。朴在成用十五年爬到部長。」' },
  { type: 'narrate', text: '「而我只需要一個月，讓他滾下去。」' },
  { type: 'chapter_end', next: '第一章：部長的末日' },
];
