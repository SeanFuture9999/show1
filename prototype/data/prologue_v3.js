/**
 * 序章：墜落與重生（V3 — 靜態 CG 版）
 * Pan 暫時移除，所有 CG 用 cover + center 靜態顯示
 */

const PROLOGUE = [
  { type: 'cg', src: 'cg_dragged_rooftop_v2.jpg', pan: { start: '50% 50%', to: '35% 50%', duration: 6000 }, label: 'start' },
  { type: 'narrate', text: '黑暗中，只有風聲。然後是皮鞋踩在水泥地上的聲音——拖行的聲音。' },
  { type: 'narrate', text: '姜旻赫的指甲斷了兩根。膝蓋磨破了西裝褲。他能感覺到水泥地面刮過胸口的灼痛。' },
  
  { type: 'cg', src: 'cg_lookingup_v2.jpg', pan: { start: '50% 50%', to: '62% 50%', duration: 8000 }, label: 'lookingup' },
  { type: 'say', speaker: '姜旻赫', text: '俊宇……你在做什麼……' },
  { type: 'narrate', text: '拖行停止。旻赫被翻過身來。他看見首爾的夜空——和站在他上方的兩個人。' },
  { type: 'say', speaker: '徐俊宇', text: '{{형.（哥。）}}' },
  { type: 'narrate', text: '俊宇笑了。那種大學圖書館裡一起讀到凌晨三點的笑。溫暖的、熟悉的。' },
  { type: 'say', speaker: '徐俊宇', text: '你知道嗎，我等這一天——五年了。' },
  { type: 'say', speaker: '姜旻赫', text: '……為什麼？' },
  { type: 'say', speaker: '徐俊宇', text: '因為你太亮了啊，형. 所有人都在看你。教授、客戶、董事會……' },
  { type: 'say', speaker: '徐俊宇', text: '連瑞英——她嫁給你的時候，眼裡全是你。' },
  { type: 'say', speaker: '徐俊宇', text: '**{{근데 형, 나는？나는 뭔데？}}**\n（可是哥，我呢？我算什麼？）' },

  { type: 'cg', src: 'cg_hand_crushed_v2.jpg', pan: { start: '75% 50%', to: '25% 50%', duration: 3000 }, label: 'hand' },
  { type: 'narrate', text: '沉默了兩秒。俊宇用皮鞋尖點了點旻赫的左手。' },
  { type: 'shake' },
  { type: 'flash', color: '#ff0000', duration: 150 },
  { type: 'narrate', text: '他踩了下去。手指骨節碎裂的聲音。' },
  { type: 'pan', to: '75% 50%', duration: 2000 },
  { type: 'say', speaker: '姜旻赫', text: '**啊——！**' },
  
  { type: 'say', speaker: '徐俊宇', text: '創業的點子是你的。談客戶是你去的。連副社長的位子，董事會也只給你。' },
  { type: 'say', speaker: '徐俊宇', text: '那我呢？所有人叫我什麼——「姜副社長的那個朋友」。' },
  { type: 'show_arrogance' },
  { type: 'arrogance', delta: 30, reason: '踩碎手指' },
  
  { type: 'cg', src: 'cg_seryoung_guilty_v2.jpg' },
  { type: 'say', speaker: '姜旻赫', text: '瑞英……' },
  { type: 'narrate', text: '韓瑞英站在風裡，頭髮被吹亂了。她的手在微微發抖——但她沒有動。她低下眼睛。' },
  { type: 'say', speaker: '韓瑞英', text: '……{{미안해.}}（對不起。）' },
  { type: 'narrate', text: '但她的腳，往後退了一步。' },
  { type: 'arrogance', delta: 20, reason: '妻子旁觀' },

  { type: 'cg', src: 'cg_the_push_v2.jpg', pan: { start: '50% 50%', to: '70% 50%', duration: 8000 }, label: 'push' },
  { type: 'say', speaker: '徐俊宇', text: '형, 別怪我。這個世界就是這樣——站在高處的人，總有人要把你拉下來。' },
  { type: 'arrogance', delta: 20, reason: '五年的背叛' },
  { type: 'say', speaker: '徐俊宇', text: '不巧，那個人是我。' },
  { type: 'narrate', text: '俊宇的手搭上旻赫的肩膀——像大學時代那樣。然後，推了出去。' },
  { type: 'arrogance', delta: 30, reason: '推落天台' },

  { type: 'shake' },
  { type: 'cg', src: 'cg_falling_v2.jpg', portrait: true, label: 'falling' },
  { type: 'flash', color: '#ff0000', duration: 500 },
  { type: 'narrate', text: '旻赫的身體離開了邊緣。風灌進耳朵，所有聲音都消失了。' },

  // 走馬燈
  { type: 'cg_hide' },
  { type: 'narrate', text: '下墜。大樓的窗戶一層一層往上飛。旻赫的瞳孔裡，倒映著二十八年的人生——' },
  
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_childhood_v2.jpg', pan: { start: '50% 50%', to: '100% 50%', duration: 6000 }, label: 'childhood' },
  { type: 'narrate', text: '【七歲】大田搬到首爾。八坪的考試院。媽媽在煮泡麵，爸爸坐在門口抽菸。' },
  { type: 'narrate', text: '從那天起，他學會了：沒有人會幫你。' },
  
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_university_v2.jpg', pan: { fit: 'contain', bgColor: '#1a1208' }, label: 'university' },
  { type: 'narrate', text: '【大學】延世圖書館，凌晨三點。俊宇扔了一包調味粉：' },
  { type: 'narrate', text: '「{{야, 이거 너 좋아하는 거.}}」他笑了。那是真的笑。他以為那是永遠。' },
  
  { type: 'flash', color: '#ffffff', duration: 200 },
  { type: 'cg', src: 'cg_memory_proposal_v2.jpg', label: 'proposal' },
  { type: 'narrate', text: '【求婚】漢江邊。單膝跪地。「{{결혼해 줄래？}}」' },
  { type: 'narrate', text: '瑞英點頭的時候，眼裡是有光的。他不知道那些光，後來都滅了。' },

  // 撞擊
  { type: 'cg_hide' },
  { type: 'narrate', text: '閃回結束。身體還在下墜。腦中最後的念頭——' },
  { type: 'say', speaker: '姜旻赫', text: '（不是「為什麼」。是「如果再來一次」——我不會再讓任何人站在我上面。）' },
  { type: 'flash', color: '#000000', duration: 2000 },
  { type: 'wait', ms: 2000 },
  { type: 'shake' },
  { type: 'narrate', text: '撞擊——黑屏。寂靜。', textEffect: 'impact' },
  { type: 'wait', ms: 3000 },

  // 覺醒
  { type: 'cg', src: 'cg_eyes_open_v2.jpg', label: 'eyesopen' },
  { type: 'arrogance', delta: -100, reason: '重生' },
  { type: 'narrate', text: '「嗶——嗶——嗶——」鬧鐘。便宜的、塑膠的、大學用了四年都沒換的那種鬧鐘。' },
  { type: 'narrate', text: '姜旻赫的眼睛睜開了。' },

  { type: 'bg', src: 'goshiwon_room_v2.jpg' },
  { type: 'narrate', text: '他躺在窄到翻身都會撞牆的單人床上，盯著天花板——那塊形狀像韓國地圖的水漬。他記得。記得太清楚了。' },
  { type: 'say', speaker: '姜旻赫', text: '……鷺梁津。' },
  { type: 'narrate', text: '他拿起手機。螢幕碎了一角——搬家時摔的。日期：2021 年 3 月 15 日。' },
  { type: 'narrate', text: '入職盛元集團的前一天。五年前。' },
  { type: 'say', speaker: '姜旻赫', text: '…………我回來了。' },
  { type: 'narrate', text: '他的手開始發抖。不是恐懼。不是喜悅。是壓了五年的所有情緒——在一瞬間找到了出口。' },
  
  { type: 'narrate', text: '他低頭看自己的手——年輕的手，沒有傷疤，十根指頭完好無缺。然後他看見了。懷中，多了一只懷錶。' },
  { type: 'cg', src: 'cg_watch_glow_v2.jpg', pan: { zoom: { from: 0.9, to: 1.15 }, duration: 10000 }, label: 'watch' },
  { type: 'narrate', text: '古舊的金色錶殼。紋路像是被什麼人握了很久很久。錶面不走時間。但錶殼在微微發溫。' },
  { type: 'say', speaker: '姜旻赫', text: '……這是什麼？' },
  { type: 'say', speaker: '【懷錶】', text: '[[……你醒了。]]' },
  { type: 'narrate', text: '聲音不是從耳朵傳來的。像是直接出現在腦子裡。低沉、蒼老、帶著某種……疲憊。' },
  { type: 'say', speaker: '【懷錶】', text: '[[不重要。重要的是——你回來了。時間倒轉，肉身重置。但記憶……是你的。全部都是。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[因為你還有不甘心。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[但記住一件事——**忍耐是有期限的。包括我的。**]]' },

  { type: 'bg', src: 'goshiwon_room_v2.jpg' },
  { type: 'narrate', text: '旻赫站在那面有裂痕的鏡子前。鏡子裡是二十八歲的臉——但眼睛裡，是三十三歲的靈魂。他慢慢地笑了。那個笑很溫和。但沒有到達眼睛。' },
  { type: 'say', speaker: '姜旻赫', text: '**{{서준우.}}**（徐俊宇。）' },
  { type: 'say', speaker: '姜旻赫', text: '**{{이번 생에서는——}}**（這一世——）' },
  { type: 'flash', color: '#c9a94e', duration: 200 },
  { type: 'say', speaker: '姜旻赫', text: '**{{무릎 꿇는 건 네 차례다.}}**\n**（輪到你跪了。）**' },

  // 紫菜包飯
  { type: 'bg', src: 'kimbap_shop_v2.jpg', pan: { start: '50% 50%', to: '0% 50%', duration: 6000 }, label: 'kimbap' },
  { type: 'narrate', text: '重生後的姜旻赫做的第一件事，不是去盛元集團報到。不是制定復仇計畫。是走到巷口的紫菜包飯店。' },
  { type: 'say', speaker: '旻赫', text: '一份紫菜包飯。' },
  { type: 'narrate', text: '他坐在角落。前世的最後一天，俊宇問他要不要吃宵夜。他說「吃了很多」——其實沒吃。他連死之前最後一餐都沒吃到。' },

  { type: 'cg', src: 'cg_kimbap_cry_v2.jpg', pan: { start: '0% 50%', to: '75% 50%', duration: 5000 } },
  { type: 'narrate', text: '紫菜包飯端上來了。他夾了一塊放進嘴裡。嚼了兩口。然後停了下來。用手背擋住了眼睛。' },
  { type: 'say', speaker: '老闆娘', text: '天哪怎麼了？不好吃嗎？' },
  { type: 'say', speaker: '旻赫', text: '不是。太好吃了才這樣。' },

  { type: 'bg', src: 'kimbap_shop_v2.jpg' },
  { type: 'narrate', text: '他擦了一下眼睛。然後把那份紫菜包飯，一塊不剩地吃完了。' },
  { type: 'say', speaker: '旻赫', text: '（從現在開始——每一天、每一餐、每一口氣，都是我自己選的。）' },

  // 命運之牌（懷錶靜態，不做 zoom）
  { type: 'cg', src: 'cg_watch_glow_v2.jpg', label: 'cards' },
  { type: 'narrate', text: '走出紫菜包飯店。三月的首爾，冷風從漢江的方向吹來。懷中的懷錶忽然燙了起來。' },
  { type: 'say', speaker: '旻赫', text: '又怎麼了？' },
  { type: 'say', speaker: '【懷錶】', text: '[[你活過來了。吃飽了。哭也哭了。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[那——準備好收禮物了嗎？]]' },
  { type: 'narrate', text: '金光從錶面裂縫裡溢出來。不是炸開的光——是緩慢的、像水一樣流出來的光。三道光從懷錶飄出，在旻赫面前凝結成三張卡片。' },

  { type: 'card_reveal', cards: ['fool', 'gluttony', 'judgement'] },

  { type: 'say', speaker: '旻赫', text: '……這些要怎麼用？' },
  { type: 'say', speaker: '【懷錶】', text: '[[該用的時候你會知道。]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[但記住——**同一個瞬間，你只能出一張牌。選錯了，機會就過了。**]]' },
  { type: 'say', speaker: '【懷錶】', text: '[[選對了……呵。你會喜歡的。]]' },
  { type: 'say', speaker: '旻赫', text: '三張牌。對付五年份的仇人。' },
  { type: 'say', speaker: '【懷錶】', text: '[[誰說只有三張？走下去，你會拿到更多。——如果你夠聰明的話。]]' },

  { type: 'cg_hide' },
  { type: 'narrate', text: '旻赫站在路口。左邊是去盛元集團的地鐵站。他沒有猶豫。轉身走向左邊。' },
  { type: 'say', speaker: '旻赫', text: '（盛元集團。入職第一天。上一次，我走進那扇門是來賣命的。這一次——我是來收債的。）' },
  { type: 'narrate', text: '他低頭看了一眼懷中。懷錶的光已經暗了，但金色的紋路在陽光下像一條細細的蛇。' },
  { type: 'say', speaker: '旻赫', text: '（三張牌。夠了。先夠了。）' },
  { type: 'effect', name: 'fadeout' },
  { type: 'wait', ms: 1000 },

  { type: 'big_title', text: '第一章', sub: '部長的末日', label: 'chapter1' },
  { type: 'narrate', text: '「야, 너 몇 년차야？（喂，你幾年資？）」' },
  { type: 'narrate', text: '「十五年。朴在成用十五年爬到部長。」' },
  { type: 'narrate', text: '「而我手裡有三張牌。只需要一張，就夠讓他站不起來。」' },
  { type: 'narrate', text: '「問題是——用哪一張？」' },
  { type: 'chapter_end', next: '第一章：部長的末日', showAd: true },
];

const PROLOGUE_BRANCHES = {};
