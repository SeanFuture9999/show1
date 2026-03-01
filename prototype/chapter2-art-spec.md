# 第二章：秘書的眼淚 — 美術開表（導演版）

> **風格基調：** 韓漫墨線風（Korean manhwa ink line style），無文字
> **模型：** Gemini Nano Banana Pro (gemini-3-pro-image-preview)
> **流程：** 一張一張開表 → Sean 確認 → 生圖 → 審核 → 下一張

---

## 🔗 角色連貫性綁定

> **原則：** 第二章的每張 CG/立繪，必須跟第一章+序章已生成的圖「同一個人」。
> 以下沿用第一章的角色 DNA + 新增恩智的 DNA。

### 旻赫（沿用第一章 DNA）

**統一 prompt 前綴（不變）：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
young Korean man age 28, messy black hair with bangs falling over forehead,
slim build, small dark mole on left cheek near eye,
sharp dark eyes with calm calculating gaze
```

**第二章特殊服裝：** 
- 日常：深色商務休閒（黑色針織衫+深灰長褲，代理組長的微升級）
- 會議室：便宜深色西裝+白襯衫（和第一章一樣——他沒換衣服的預算）
- 弘大居酒屋：深色帽T+牛仔褲（下班版）

**序章/第一章參考圖（必須保持一致）：**
| 參考圖 | 用途 |
|--------|------|
| `minheok_neutral.png` | 主臉型+髮型基準 |
| `minheok_resolve.png` | 決意表情基準 |
| `minheok_cold.png` | 冷靜表情基準 |

---

### 智媛（沿用第一章 DNA）

**統一 prompt 前綴（不變）：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
young Korean woman age 27, short black bob cut chin-length hair,
silver circular stud earrings, dark denim jacket over white office blouse,
bright confident eyes, cheerful bold personality
```

**序章/第一章參考圖：**
| 參考圖 | 用途 |
|--------|------|
| `jiwon.png` | 主臉型+造型基準 |
| `jiwon_angry.png` | 憤怒表情基準 |
| `jiwon_cheerful.png` | 開朗表情基準 |

---

### 吳常務（沿用第一章 DNA）

**統一 prompt 前綴（不變）：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
older Korean man early 50s, lean stern build,
silver-grey short hair combed back neatly,
square metal-frame glasses, deep charcoal grey well-tailored suit,
stern composed authoritative expression, quiet commanding presence
```

---

### 🆕 崔恩智（新角色 — 第二章核心）

**視覺 DNA（新建）：**
- 26歲韓國女性，輪廓柔和但有骨架感（成均館大學系花等級但不誇張）
- 黑色長直髮，平時盤起來露出脖子，只留兩縷碎髮柔化臉部。重要場景（偷拍/哭泣）時頭髮放下來
- 眉毛細長微彎，眼睛偏大但不是圓眼——是韓系杏仁眼，帶一點哀愁感
- 鼻子小巧，嘴唇薄，笑起來有淺淺的酒窩（左邊）
- 體型纖細，肩膀窄，穿衣服顯得乾練但不強勢
- **標誌性習慣**：緊張時把頭髮撥到耳後
- **兩種表情**：
  - 「完美後輩」模式：笑容甜美、眼睛亮、活力感（但如果仔細看，眼底有陰影）
  - 「真實自己」模式：眼神哀愁、嘴唇緊抿、整個人小了一號

**第二章服裝：**
- 辦公室：深藍色套裝（A字裙+西裝外套），白色絲質內搭，低跟黑色皮鞋
- 偷拍場景：同套裝但外套脫了，只穿白色內搭+裙子（更顯脆弱）
- 套房場景：寬鬆淺灰色衛衣+棉質長褲（和辦公室完全不同——真實的她）

**統一 prompt 前綴：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
young Korean woman age 26, long straight black hair usually tied up in low bun with two loose strands framing face,
almond-shaped eyes with subtle sadness beneath warm smile,
small nose thin lips with faint dimple on left cheek when smiling,
slim delicate build, dark navy blue office suit with white silk blouse,
nervous habit of tucking hair behind ear
```

**偷拍/哭泣版本 prompt 調整：**
```
(same character) hair let down falling over shoulders,
white silk blouse without suit jacket,
red-rimmed eyes tear-streaked face,
vulnerable fragile posture shoulders hunched inward
```

---

### 俊宇（不出場但有手機畫面 — 保留 DNA）

**統一 prompt 前綴（不變）：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
Korean man age 30, styled brown hair swept back with gel showing forehead,
taller broader build than protagonist, expensive dark grey suit,
warm charming smile that never reaches his eyes, hidden menace
```

> **第二章用途**：只出現在手機螢幕的聊天對話框中。不需要立繪或 CG，但 DNA 保留備用。

---

## ⚠️ 生圖流程（角色連貫性保障）

1. **每張圖的 prompt 必須帶對應角色的「統一前綴」**
2. **恩智是新角色——第一張立繪確定後成為所有後續圖的基準**
3. **恩智的「兩種表情」差異要大但臉型不變**：同一個人，不同狀態
4. **旻赫的左臉痣依然是 ID**：每張旻赫的圖都確認痣位置
5. **恩智的左臉酒窩是她的 ID**：笑的時候必須有

---

## 🎨 已有素材清單（第一章沿用）

### 背景（可直接用）
| 檔名 | 用途 | 第二章使用場景 |
|------|------|---------------|
| `office_day.png` | 辦公區白天 | Scene 01-02（恩智入職蒙太奇）、Scene 06（被叫去談話前）|
| `office_night.png` | 辦公區深夜 | Scene 03（偷拍）|
| `meeting_room.png` | 會議室 | Scene 09-10（審判+選擇）|

### 角色立繪（可直接用）
| 檔名 | 角色 | 第二章使用 |
|------|------|-----------|
| `minheok_neutral.png` | 旻赫·冷靜微笑 | 全章主要立繪 |
| `minheok_cold.png` | 旻赫·寒冰眼神 | Scene 06（「今晚好好睡」）|
| `minheok_resolve.png` | 旻赫·決意 | Scene 08-09 |
| `jiwon.png` | 智媛·標準 | Scene 01-02、11 |
| `jiwon_cheerful.png` | 智媛·開朗 | Scene 01（嚼魷魚絲）|

---

## 📋 需新製作素材

### ═══ 背景（BG）：3 張 ═══

---

#### BG-CH2-01：恩智的出租套房
**使用場景：** Scene 05（俊宇三板斧）、Scene 07（恩智的一夜）
**敘事功能：** 恩智「真實自我」的空間。這裡不是辦公室的那個「完美後輩」——是八坪、一個人、對著牆壁哭的二十六歲女孩。空間的逼仄和孤獨感是關鍵。

**構圖：**
- 八坪小套房，單人床靠牆，床頭有一盞小檯燈
- 牆上貼著一張全家福照片（大邱，三個人在家門口）
- 小桌子上放著筆電和一杯已經涼了的水
- 窗戶很小，窗外是對面大樓的牆壁——幾乎看不到天空
- 地板上有一雙黑色低跟皮鞋，歪歪地脫在門口
- 整體感覺：乾淨但空蕩。沒有生活的溫度。

**色調：** 暖黃檯燈光（唯一光源）vs 窗外微弱的城市光。暗調但不壓抑——是孤獨的暖。
**尺寸：** 1024×768（4:3 橫式）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic interior shot, intimate lighting, no text, 4:3 landscape orientation 1024x768,
tiny 8-pyeong studio apartment in Seoul,
single bed against wall with small bedside lamp casting warm golden circle of light,
a family photo pinned on the wall showing three people smiling in front of a house,
small desk with laptop and a glass of water,
narrow window showing opposite building wall barely any sky visible,
black low-heeled shoes carelessly kicked off near the door,
clean but empty and lonely atmosphere,
warm lamp light as only light source contrasted with faint cool city glow from window,
the loneliness of a young woman living alone in a big city
```

---

#### BG-CH2-02：弘大居酒屋
**使用場景：** Scene 11（CP暗線高潮）
**敘事功能：** 旻赫和智媛的「安全地帶」。和辦公室的冷色調完全不同——霓虹燈、暖光、煙火氣。這是兩個人可以「做自己」的地方。

**構圖：**
- 弘大巷子裡的小居酒屋，木製卡座
- 桌上有辣炒年糕（紅色醬汁）、燒酒瓶、小菜、水杯
- 窗外是弘大的霓虹招牌——紅、綠、藍交錯
- 牆上貼著舊海報和手寫菜單
- 暖黃色燈泡從天花板垂下來
- 整體氛圍：喧鬧但親密。像回到大學時代的感覺。

**色調：** 暖黃+霓虹彩色，飽和度高。這是全章最「暖」的場景。
**尺寸：** 1024×768（4:3 橫式）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic interior shot, warm vibrant lighting, no text, 4:3 landscape orientation 1024x768,
small cozy izakaya bar in Hongdae Seoul district,
wooden booth seats with warm incandescent bulbs hanging from ceiling,
table with spicy tteokbokki in red sauce soju bottles small side dishes and a glass of water,
window showing colorful neon signs of Hongdae nightlife in red green and blue,
old posters and handwritten menus on wooden walls,
warm intimate atmosphere contrasting with the cold corporate world,
the feeling of being young and alive in a noisy friendly place,
warm golden amber dominant tone with colorful neon accents from outside
```

---

#### BG-CH2-03：旻赫的考試院（沿用/升級）
**使用場景：** Scene 04（毒餌確認）、Scene 12（懷錶告白）
**敘事功能：** 旻赫的「基地」。比恩智的套房更小——但多了一台筆電和滿滿的筆記本。這裡是棋手的指揮部。Scene 12 是最重要的使用——懷錶告白的場景需要極致的孤獨感+微弱的溫暖（懷錶的光）。

**構圖：**
- 極小的考試院房間（比恩智的更小，約六坪）
- 單人床+折疊桌+筆電
- 桌上堆著筆記本和資料（旻赫的「帳本」）
- 一盞桌燈，白色冷光
- 窗外是鷺梁津的路燈——暗黃色
- 牆壁白色但有點舊
- **關鍵細節**：桌角放著一支藍色原子筆（大學時期和俊宇一起用的那款）

**色調：** 冷白桌燈 + 暗黃窗外路燈。比恩智的房間更冷。
**尺寸：** 1024×768（4:3 橫式）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic interior shot, minimal harsh lighting, no text, 4:3 landscape orientation 1024x768,
extremely small gosiwon study room in Noryangjin Seoul about 6 pyeong,
single bed narrow folding desk with laptop and stacked notebooks,
cold white desk lamp as primary light source,
window showing dim yellow-orange streetlamp of Noryangjin at night,
slightly worn white walls sparse and functional,
a single blue ballpoint pen on the desk corner,
atmosphere of intense focused solitude — a strategists war room disguised as a students room,
cold analytical lighting with warm ambient streetlight from outside creating contrast
```

---

### ═══ 角色立繪（CHAR）：5 張 ═══

---

#### CHAR-CH2-01：崔恩智·完美後輩（⭐ 最重要——恩智基準立繪）
**使用場景：** Scene 01-02（入職、蒙太奇期）、Scene 06（「協助調查」）
**敘事功能：** 恩智「偽裝版」的標準立繪。這是她花了三個月練出來的「人設」：溫暖、能幹、讓人喜歡。但如果仔細看——眼底有一層薄薄的陰影。玩家第一次看覺得她是好人，二刷才發現那層陰影。

**角色描述：**
- 長黑直髮盤成低丸子頭，兩縷碎髮自然垂在臉側
- 深藍色套裝（A字裙+西裝外套），白色絲質內搭
- 笑容甜美——有左臉酒窩
- 雙手交疊在身前，持物姿態（拿著咖啡杯或文件夾）
- 眼睛亮、有神——但如果放大看，瞳孔底部有微微的暗色
- 姿態微微前傾——「想要被喜歡」的身體語言

**色調：** 辦公室白天冷色系，但恩智本人的色溫偏暖（讓她在冷色辦公室裡「發光」）
**尺寸：** 512×1024（1:2 直式，半身像）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, soft office lighting, no text, 1:2 portrait orientation 512x1024,
young Korean woman age 26, long straight black hair tied in low bun with two loose strands framing face,
almond-shaped eyes with warm sparkle but subtle shadow beneath if looked closely,
small nose thin lips with faint dimple on left cheek showing a sweet professional smile,
slim delicate build wearing dark navy blue A-line skirt suit with white silk blouse underneath,
hands clasped in front holding a coffee cup,
slightly leaning forward eager-to-please body language,
the perfect junior colleague facade — warm and competent but with an invisible weight,
cool office lighting but character herself has slightly warmer color temperature making her glow
```

---

#### CHAR-CH2-02：崔恩智·偷拍/哭泣（崩潰版）
**使用場景：** Scene 03（偷拍）、Scene 07（恩智的一夜）、Scene 09-10（會議室審判後）
**敘事功能：** 恩智「真實版」的立繪。頭髮放下來，沒有套裝外套，眼睛紅腫——和「完美後輩」版是同一個人，但完全不同的氣場。這個立繪的存在本身就是打臉——打的是「完美人設」這件盔甲。

**角色描述：**
- **同一個恩智**，但頭髮放下來了——黑色長直髮披散在肩上
- 沒穿西裝外套——只有白色絲質內搭（顯得更瘦更脆弱）
- 眼睛紅腫，睫毛濕漉漉的
- 嘴唇微抿，在忍住不哭
- 肩膀內縮——「想要消失」的身體語言
- 手裡攥著一條粉紅色手帕（媽媽繡的，邊角有小花）

**⚠️ 必須參考：** CHAR-CH2-01 的同一張臉、同一個酒窩位置，只是表情和姿態完全不同
**色調：** 冷白+暗調，像是被抽走了血色
**尺寸：** 512×1024（1:2 直式，半身像）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, cold dim lighting, no text, 1:2 portrait orientation 512x1024,
same young Korean woman age 26 but completely different state,
long straight black hair now let down falling over shoulders instead of tied up,
wearing only white silk blouse without navy suit jacket looking thinner and more vulnerable,
red-rimmed swollen eyes with wet eyelashes tears on cheeks,
lips pressed together trying not to cry,
shoulders hunched inward shrinking body language wanting to disappear,
clutching a pink handkerchief with small embroidered flower in her hands,
faint dimple on left cheek visible even through the crying,
the same person as the perfect junior colleague but all armor stripped away,
cold desaturated color palette as if all warmth has been drained
```

---

#### CHAR-CH2-03：旻赫·溫柔微笑（「笑到眼睛」版）
**使用場景：** Scene 10（「毀我的是別人」）、Scene 11（弘大·小拇指）
**敘事功能：** **全遊戲到目前為止旻赫最重要的表情。** 之前的旻赫永遠是「微笑不到眼睛」——冷靜、計算、不露真心。這是他第一次笑到眼睛。這張立繪只在第二章出現兩次，但它代表了旻赫的「人性回歸」——也是懷錶一直在等的東西。

**角色描述：**
- **同一個旻赫**：黑髮瀏海、左臉痣、瘦削
- 但表情完全不同：
  - 眼睛微彎——笑意真的到了眼角（有魚尾紋！28歲不該有的——但他有33歲的靈魂）
  - 嘴角上揚但不大——是克制的、溫柔的笑，不是大笑
  - 整個人的氣場從「冰冷獵人」變成了「溫暖的人」
  - 視線微微向下（蹲著看恩智 / 看著智媛的小拇指）

**⚠️ 必須參考：** `minheok_neutral.png` 的同一張臉，但笑意要穿透眼睛
**色調：** 暖色系（配合會議室陽光或弘大霓虹）
**尺寸：** 512×1024（1:2 直式，半身像）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, warm gentle lighting, no text, 1:2 portrait orientation 512x1024,
young Korean man age 28 messy black hair with bangs falling over forehead,
slim build small dark mole on left cheek near eye,
but expression completely different from his usual cold calculating look,
eyes gently curved in a genuine warm smile that reaches the eyes — slight crow feet at corners,
mouth turned up in restrained gentle smile not a grin but sincere warmth,
looking slightly downward with soft compassionate gaze,
the first time this character has shown true warmth — like ice finally melting,
warm ambient lighting emphasizing the gentleness of the expression,
same character as reference but transformed by a moment of genuine human connection
```

---

#### CHAR-CH2-04：智媛·害羞/耳朵紅（沿用第一章設計·第二章重要度提升）
**使用場景：** Scene 01（「我每天放的你怎麼不說好喝」）、Scene 11（弘大·小拇指·已讀反轉）
**敘事功能：** 和第一章設計相同——智媛大姐頭性格面對旻赫時的害羞反差。第二章因為有弘大居酒屋和小拇指場景，這張立繪的使用頻率和重要度都提升了。

**角色描述：**
- **同一個智媛**：短黑髮、牛仔外套、銀色耳釘
- 耳朵尖紅（最重要！）
- 眼睛往旁邊看，不敢直視
- 嘴巴微微嘟著/抿著，像在掩飾
- 一隻手可能在摸耳朵或撥頭髮

**⚠️ 如果第一章已生成此立繪，可直接沿用。如果未生成，此為 P1 優先。**
**色調：** 辦公室冷色或弘大暖色皆可（通用）
**尺寸：** 512×1024（1:2 直式，半身像）

---

#### CHAR-CH2-05：旻赫·下班版（弘大居酒屋用）
**使用場景：** Scene 11（弘大）
**敘事功能：** 脫下西裝的旻赫。帽T+牛仔褲。這個造型讓他看起來像「真正的二十八歲」——和辦公室裡那個冷靜的代理組長完全不同。配合「笑到眼睛」的表情使用。

**角色描述：**
- 深色（黑色或深灰）帽T，帽子沒有戴上
- 牛仔褲
- 頭髮依然是亂的瀏海（但比辦公室更隨意）
- 左臉痣
- 手腕上的懷錶被帽T袖子遮了一半——若隱若現

**色調：** 暖色系（弘大霓虹光）
**尺寸：** 512×1024（1:2 直式，半身像）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, warm neon-tinged lighting, no text, 1:2 portrait orientation 512x1024,
young Korean man age 28 messy black hair with bangs,
slim build small dark mole on left cheek near eye,
wearing dark black hoodie with hood down and blue jeans casual off-work look,
antique pocket watch on left wrist partially hidden under hoodie sleeve,
more relaxed posture than office version — looking like an actual 28-year-old,
warm colorful neon lighting from a Hongdae bar setting,
contrast between his usual cold corporate persona and this casual vulnerable version
```

---

### ═══ CG（全屏插圖）：8 張 ═══

---

#### CG-CH2-01：完美後輩的咖啡（⭐⭐ 重要）
**使用場景：** Scene 01（恩智入職，遞冰美式）
**敘事功能：** 第二章的「第一印象」定格。恩智笑著遞咖啡，辦公室晨光——完美無害。但一個細節（指尖發白）暗示真相。玩家第一次看覺得溫暖，重玩時才發現不對勁。

**構圖：**
- **鏡頭：** 中景，旻赫的主觀視角（看恩智遞過來的咖啡）
- 恩智站在辦公室走道中間，微笑著伸出雙手遞一杯冰美式
- 晨光從她身後的大窗戶打進來，形成逆光——她的輪廓被金色光暈包裹
- 笑容甜美，酒窩清晰——「完美後輩」全開
- **關鍵細節**：握住咖啡杯的指尖是白的（用力過度）
- 背景是辦公區的辦公桌和同事們，模糊處理
- 畫面前方模糊處有一隻手（旻赫的）正要接過咖啡

**角色：** 恩智（完美後輩版）
**色調：** 暖色晨光+辦公室冷白——恩智被暖光包裹，像天使。但「天使」的手指在發白。
**情緒：** 表面溫暖、暗藏不安
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** CHAR-CH2-01 的臉型和服裝

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting, no text, 4:3 landscape orientation 1024x768,
POV shot from seated characters perspective looking up at standing woman,
young Korean woman age 26 long straight black hair in low bun two loose strands framing face,
sweet warm smile with dimple on left cheek wearing dark navy blue suit with white silk blouse,
extending both hands offering a cup of iced americano coffee toward the viewer,
morning golden backlight streaming through large office windows behind her creating angelic glow around her silhouette,
key detail: her fingertips gripping the cup are white from pressing too hard betraying hidden tension,
blurred modern office background with coworkers at desks,
foreground blur of a hand reaching to accept the coffee,
warm golden morning light vs cool office white creating contrast,
appears perfectly warm and trustworthy but one small detail reveals the truth
```

---

#### CG-CH2-02：深夜偷拍（⭐⭐⭐ 最高優先）
**使用場景：** Scene 03（恩智在旻赫桌前偷拍文件）
**敘事功能：** **全章最有張力的畫面。** 不是「冷酷間諜」——是「邊哭邊偷拍的女孩」。這張CG要同時傳達兩件事：① 她在做壞事 ② 她在承受巨大的痛苦。這種矛盾感是第二章的核心。

**構圖：**
- **鏡頭：** 中景偏特寫，微側面（45度角）
- 深夜辦公室，所有燈關了，只有走廊應急燈的微光
- 恩智站在旻赫的辦公桌前，一手拿手機對準桌上文件，另一手撐在桌邊
- 頭髮放下來了（和白天盤髮不同——更脆弱的視覺）
- **表情**：眉頭緊皺、嘴唇抖、眼眶紅——快哭出來但忍住了
- 手機螢幕的光照在她臉上——冷白色
- 桌角有一杯已經化了冰的冰美式（智媛留的，杯套字條還在）
- 應急燈的綠色微光從走廊灑進來

**角色：** 恩智（崩潰版——頭髮放下、沒有外套）
**色調：** 深暗底色 + 手機冷白光照臉 + 走廊綠色應急燈。三色對比。
**情緒：** 痛苦、被迫、矛盾
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** CHAR-CH2-02 的崩潰版恩智

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting, no text, 4:3 landscape orientation 1024x768,
medium close-up shot at 45-degree angle,
dark office at night all lights off only faint green emergency light from hallway,
young Korean woman age 26 long straight black hair let down over shoulders wearing white silk blouse without suit jacket,
standing at someones desk holding smartphone pointed at documents on desk other hand bracing on desk edge,
expression of anguish — furrowed brows trembling lips red-rimmed eyes about to cry but holding it in,
cold white light from phone screen illuminating her face creating harsh shadows,
on desk corner a cup of melted iced coffee with a handwritten note on the cup sleeve,
faint green emergency exit light spilling from hallway creating eerie atmosphere,
three-color contrast: deep darkness vs cold white phone light vs green emergency glow,
not a cool spy — a girl forced to do something terrible while barely holding herself together
```

---

#### CG-CH2-03：俊宇的照片（⭐⭐⭐ 最高優先）
**使用場景：** Scene 05（俊宇偷拍恩智爸爸的照片）
**敘事功能：** **全章最讓人想砸螢幕的一張。** 不是直接畫俊宇——而是畫恩智的手機螢幕。螢幕上是爸爸被偷拍的照片+俊宇的冰冷訊息。恩智的手指掐進了手機殼裡。這張CG要讓玩家對俊宇產生強烈的恨意。

**構圖：**
- **鏡頭：** 特寫（手機+手的構圖）
- 恩智的手拿著手機。手指發白，指甲掐進了手機殼裡。
- 手機螢幕佔畫面1/2以上：
  - 上方是聊天對話框（模糊的文字，但「😊」emoji清晰可見）
  - 下方是一張照片：一個穿新外套的中年男人在街邊買魚糕，笑容毫無防備
  - 照片的拍攝角度明顯是跟蹤偷拍（街道對面、有車輛遮擋）
- 手機螢幕的光照在恩智的下巴和嘴唇上——嘴唇在發抖
- 背景是恩智套房的暗色牆壁

**色調：** 手機螢幕冷藍白光 vs 暗色套房。螢幕上爸爸的照片是溫暖的（日光街道），形成殘酷對比。
**情緒：** 恐懼、憤怒、無力
**尺寸：** 1024×768（4:3 橫式）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting, no text, 4:3 landscape orientation 1024x768,
extreme close-up of hands holding a smartphone,
female hands with white-knuckled grip fingernails digging into phone case,
smartphone screen takes up more than half the frame showing:
top portion has blurred chat messages with a clearly visible smiley emoji,
bottom portion shows a candid surveillance-style photo of a middle-aged Korean man in a new jacket buying fish cakes at a street stall smiling unsuspectingly,
the photo is obviously taken from across the street partially obscured by vehicles — stalker perspective,
phone screen cold blue-white light illuminating the lower face of the woman — trembling lips visible,
dark apartment wall in background,
the warmth of the fathers innocent smile in the photo contrasts cruelly with the cold threatening context,
overwhelming sense of fear helplessness and rage at the unseen puppeteer
```

---

#### CG-CH2-04：審判室（⭐⭐ 重要）
**使用場景：** Scene 06（吳常務辦公室·恩智偽裝擔心）、Scene 09（正式審判）
**敘事功能：** 權力空間的壓迫感。三個人的位置關係：吳常務在主位（權力）、旻赫在對面（被審判者→反轉為審判者）、恩智在側面（偽裝的旁觀者→實際的被告）。

**構圖：**
- **鏡頭：** 廣角中景，俯拍10度（上帝視角——暗示玩家知道真相）
- 吳常務坐在辦公桌後面，表情嚴肅，方形眼鏡反光
- 旻赫坐在對面椅子上，姿態放鬆得不合理（被誣陷的人不該這麼鎮定）
- 恩智站在側面，雙手背在身後——表面「關心」的表情，但手在身後攥成拳
- 日光燈冷白光，沒有陰影可以躲
- 桌上放著那封列印出來的郵件

**角色：** 吳常務（嚴肅）+ 旻赫（過度冷靜）+ 恩智（偽裝擔心）
**色調：** 全白日光燈——審判的殘酷清晰感
**情緒：** 緊張、算計、偽裝
**尺寸：** 1024×768（4:3 橫式）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, harsh fluorescent lighting, no text, 4:3 landscape orientation 1024x768,
slightly elevated angle looking down at an office scene like gods perspective,
older Korean man early 50s silver-grey hair square metal glasses deep charcoal suit sitting behind desk with stern authoritative expression glasses reflecting light,
young Korean man age 28 messy black hair mole on left cheek sitting across the desk unnervingly calm for someone accused — subtle knowing expression,
young Korean woman age 26 long hair in bun navy suit standing to the side with concerned worried expression on face but hands behind her back clenched into fists,
a printed email document on the desk between them,
harsh white fluorescent office lighting with nowhere to hide no shadows,
the spatial arrangement suggests a trial — judge at center accused facing them and a witness whose testimony might be lies,
tense atmosphere of hidden agendas and calculated moves
```

---

#### CG-CH2-05：很辛苦吧（⭐⭐⭐ 最高優先——全章高潮）
**使用場景：** Scene 09（旻赫蹲下來對恩智說「很辛苦吧？」）
**敘事功能：** **全遊戲到目前為止最重要的情感 CG。** 不是打臉——是卸甲。旻赫蹲下來，和哭泣的恩智平視。他的手放在桌沿——不伸過去，但也不收回。窗外陽光。這是第二章的核心畫面，也是「憐憫」主題的視覺化。

**構圖：**
- **鏡頭：** 中景，水平拍攝（和兩人的視線同高——觀眾也「蹲下來」了）
- 旻赫蹲在會議桌旁，單膝觸地，臉和恩智的臉在同一高度
- 恩智坐在椅子上，整個人縮成一團，頭低著，眼淚落在桌面的文件上暈開墨跡
- 旻赫的表情：不是同情——是理解。嘴角有一絲笑意（那個「笑到眼睛」的笑的前兆）
- 他的右手放在桌沿——手指微微張開，像是在說「你可以握」但不強迫
- 窗外午後陽光從側面打進來，在兩人之間的地板上形成一道光帶
- 吳常務和HR金部長在遠景模糊——這一刻只屬於這兩個人

**角色：** 旻赫（蹲姿·溫柔）+ 恩智（崩潰·哭泣）
**色調：** 暖色陽光 + 會議室白色。不是冷的——是帶溫度的審判。
**情緒：** 心疼、溫暖、安靜的力量
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 這是全章最重要的 CG。構圖和情緒都要拉到最滿。**

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, warm emotional lighting, no text, 4:3 landscape orientation 1024x768,
eye-level horizontal shot — camera is at the same height as someone kneeling,
young Korean man age 28 messy black hair mole on left cheek kneeling on one knee beside a meeting table,
his face at the same height as the crying woman sitting in a chair,
expression of deep understanding — not pity but genuine empathy, hint of gentle smile reaching his eyes,
his right hand resting on table edge fingers slightly open in an offering gesture — you can hold it if you want but no pressure,
young Korean woman age 26 long black hair down crying hunched over in chair,
tears falling onto documents on table surface smudging the ink,
afternoon sunlight streaming from side window creating a band of warm golden light on the floor between them,
two blurred figures in far background watching silently,
this moment belongs only to these two people,
warm golden afternoon light contrasting with cold white meeting room creating an island of warmth,
the most emotionally powerful moment — not an attack but a surrender of armor
```

---

#### CG-CH2-06：握手（⭐⭐ 重要——憐憫路線專屬）
**使用場景：** Scene 10（恩智握住旻赫的手）
**敘事功能：** 「憐憫」牌的視覺化。從「很辛苦吧」到恩智握住旻赫伸出的手——這是「從敵人到盟友」的決定性一瞬。不是握手——是被拉起來。

**構圖：**
- **鏡頭：** 特寫（兩隻手的構圖）
- 旻赫的手掌朝上——等待的姿態
- 恩智的手從上方握下來——指尖還在抖，但握住了
- 旻赫的手腕上，懷錶微微發光（金色）
- 恩智的手腕上，有一條粉紅色手帕的邊角露出來（她把手帕纏在手腕上了）
- 兩人的手在畫面中央，背景全部模糊
- 陽光落在交握的手上

**色調：** 暖金色為主。懷錶的金光+陽光+手帕的粉紅。
**情緒：** 信任、救贖、希望
**尺寸：** 1024×768（4:3 橫式）

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, warm golden lighting, no text, 4:3 landscape orientation 1024x768,
extreme close-up of two hands — one reaching up and one reaching down meeting in the middle,
lower hand palm up in waiting offering gesture — male hand slim with an antique golden pocket watch on wrist emitting faint warm glow,
upper hand reaching down trembling slightly to grasp it — female hand delicate with edge of pink embroidered handkerchief wrapped around wrist,
hands clasped together in the center of frame,
everything else completely blurred soft bokeh,
warm afternoon sunlight falling directly on the joined hands,
golden watch glow and pink handkerchief as color accents against warm amber light,
a moment of trust redemption and the beginning of hope,
the visual representation of choosing mercy over judgment
```

---

#### CG-CH2-07：弘大小拇指（⭐⭐⭐ 最高優先——CP高潮）
**使用場景：** Scene 11（弘大居酒屋·小拇指約定）
**敘事功能：** CP 暗線的高潮定格。霓虹燈、辣炒年糕、燒酒和水、小拇指勾在一起。旻赫在笑（真的笑），智媛的耳朵紅了。這是全遊戲到目前為止最「暖」的畫面。

**構圖：**
- **鏡頭：** 中景偏特寫，雙人構圖
- 弘大居酒屋木桌上：辣炒年糕（紅醬）、一杯燒酒（智媛的）、一杯水（旻赫的）
- 旻赫和智媛面對面坐著，小拇指在桌面上方勾在一起
- **旻赫**：帽T，頭髮更亂，笑著——那個「笑到眼睛」的笑
- **智媛**：牛仔外套，耳朵紅（最重要！），假裝若無其事但嘴角壓不住
- 窗外弘大霓虹燈——紅、綠、藍，映在他們臉上
- 頭上暖黃燈泡垂下來

**角色：** 旻赫（下班版·笑到眼睛）+ 智媛（害羞·耳朵紅）
**色調：** 暖黃+霓虹彩色。全章最高飽和度、最暖的畫面。
**情緒：** 快樂、甜蜜、真實的人間煙火
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** CHAR-CH2-05 旻赫下班版 + CHAR-CH2-04 智媛害羞版

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, warm vibrant lighting, no text, 4:3 landscape orientation 1024x768,
medium shot of two people sitting across from each other in a cozy Hongdae izakaya,
wooden table between them with spicy red tteokbokki plate a glass of soju and a glass of water,
their pinky fingers hooked together above the table in a promise gesture,
young Korean man age 28 messy black hair mole on left cheek wearing dark hoodie,
genuinely smiling — the smile reaches his eyes with slight crow feet — first real smile in the entire game,
young Korean woman age 27 short black bob cut silver stud earrings denim jacket,
ears visibly red especially at the tips trying to look casual but corner of mouth betraying a suppressed smile,
colorful neon signs from Hongdae street visible through window casting red green blue light on their faces,
warm incandescent bulb hanging above them,
the warmest most human scene in the entire story — no revenge no strategy just two people being real,
high color saturation warm amber dominant with neon color accents
```

---

#### CG-CH2-08：懷錶告白（⭐⭐⭐ 最高優先——章末定格）
**使用場景：** Scene 12（旻赫在考試院·懷錶揭露多次重生）
**敘事功能：** 全章的最後一張CG。旻赫獨坐在考試院窄床上，手腕上的懷錶發著微弱的光——像一顆快要熄滅的星星。他的表情不是冷酷——是終於理解了什麼的安靜。這是「多次重生」敘事炸彈的視覺化。

**構圖：**
- **鏡頭：** 中景，從房間角落往旻赫方向拍
- 旻赫坐在窄床邊，背靠牆壁，雙腿自然垂下
- 左手放在膝蓋上——手腕上的懷錶微微發光，光很微弱，像最後一口氣
- 右手覆蓋在懷錶上面——護著它
- 表情：不是悲傷，是一種「頓悟後的平靜」——嘴唇微抿，眼神注視著懷錶
- 窗外鷺梁津的路燈光從小窗打進來，在牆壁上形成一道暗黃色的光帶
- 房間很暗——只有懷錶的微弱金光和窗外路燈光兩個光源
- 桌上的藍色原子筆微微反光

**角色：** 旻赫（沉思·頓悟）
**色調：** 深暗底色 + 微弱金色懷錶光 + 暗黃路燈光。整體很暗，但不是絕望——是黎明前最深的夜。
**情緒：** 安靜、理解、決意
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** `minheok_neutral.png` 的臉型 + BG-CH2-03 的考試院

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, minimal intimate lighting, no text, 4:3 landscape orientation 1024x768,
medium shot from corner of a tiny gosiwon room looking toward the bed,
young Korean man age 28 messy black hair mole on left cheek sitting on narrow bed against wall,
legs hanging naturally off bed edge,
left hand resting on knee with antique pocket watch on wrist emitting very faint dying golden glow like a star about to go out,
right hand gently covering the watch protectively,
expression of quiet epiphany — not sadness but the calm of someone who finally understands,
lips slightly pressed together eyes gazing down at the watch with newfound tenderness,
dim yellow-orange streetlight from narrow window casting a strip of warm light on the wall,
very dark room with only two light sources: the faint golden watch glow and the distant streetlight,
a blue ballpoint pen on the desk catching a tiny reflection,
the deepest darkest hour before dawn but not despair — resolve,
this might be the last time and he knows it now
```

---

## 🃏 卡牌素材

| # | 卡名 | 狀態 | 說明 | 視覺描述 |
|---|------|------|------|---------|
| CARD-01～05 | 愚者/暴食/審判/已讀/該隱 | ✅ 序章+Ch.1 已有 | 帶入卡 | — |
| CARD-06 | 鏡子 The Mirror | ❌ 需製作 | 碎裂古鏡，鏡中映蛇影，碎片邊緣金色光紋 | 512×716 |
| CARD-07 | 空椅 The Empty Chair | ❌ 需製作 | 高背椅垂細線（操偶線），線末端斷裂，散落手機碎片 | 512×716 |
| CARD-08 | 憐憫 Mercy | ❌ 需製作 | 伸出手掌，掌心碎裂匕首，流出金光不是血，星空背景 | 512×716 |

### 卡面完整 Prompt

**CARD-06 鏡子 The Mirror：**
```
Dark Korean manhwa style card illustration, ornate tarot card border, no text, 5:7 portrait 512x716,
cracked ancient mirror in center, mirror surface reflecting not the holders face but a coiled serpent,
golden glowing fracture lines along the crack edges,
each shard of the mirror reflects a different angle of light,
dark purple and gold color scheme with mysterious otherworldly glow,
theme of deception turned back on the deceiver — the spys nightmare
```

**CARD-07 空椅 The Empty Chair：**
```
Dark Korean manhwa style card illustration, ornate tarot card border, no text, 5:7 portrait 512x716,
tall ornate empty chair in center with dozens of thin puppet strings hanging from the chair back extending downward,
strings end in clean cut severed ends — no puppets attached,
scattered broken smartphone screens on the ground around the chair,
dark blue and silver color scheme with cold ethereal light from above,
theme of the absent puppeteer whose empty seat controls everything
```

**CARD-08 憐憫 Mercy：**
```
Dark Korean manhwa style card illustration, ornate tarot card border, no text, 5:7 portrait 512x716,
open hand reaching upward palm facing up,
a shattered dagger lying in fragments in the palm — weapon broken by choice,
golden light flowing from palm not blood — liquid mercy,
starry night sky in background with one bright star directly above the hand,
warm gold and deep cosmic blue color scheme,
theme of choosing not to strike when you have every right to — the most powerful card
```

---

## 🔊 音效 / BGM

| # | 類型 | 說明 | 使用場景 | 狀態 |
|---|------|------|---------|------|
| SFX-CH2-01 | 音效 | 手機訊息通知音 | Scene 03, 05, 07 | ❌ |
| SFX-CH2-02 | 音效 | 門禁卡嗶聲 | Scene 03 | ❌ |
| SFX-CH2-03 | 音效 | 手機拍照快門（靜音版·微弱） | Scene 03 | ❌ |
| SFX-CH2-04 | 音效 | 眼淚落在紙上（微小水滴聲） | Scene 09, 10 | ❌ |
| SFX-CH2-05 | 音效 | 懷錶錶蓋彈開（機械聲） | Scene 12 | ❌ |
| SFX-CH2-06 | 音效 | 懷錶光芒變暗（低頻衰減音） | Scene 12 | ❌ |
| BGM-CH2-01 | BGM | 日常辦公（輕鬆但有暗流） | Scene 01-02 | ❌ |
| BGM-CH2-02 | BGM | 深夜潛入（緊張+哀傷交織） | Scene 03, 06 | ❌ |
| BGM-CH2-03 | BGM | 俊宇的影子（低頻弦樂·壓迫感） | Scene 05 | ❌ |
| BGM-CH2-04 | BGM | 恩智的眼淚（鋼琴·孤獨·心碎） | Scene 07 | ❌ |
| BGM-CH2-05 | BGM | 審判（緊張弦樂→突然安靜） | Scene 09 前半 | ❌ |
| BGM-CH2-06 | BGM | 很辛苦吧（鋼琴+弦樂·溫暖·催淚） | Scene 09 後半, 10 | ❌ |
| BGM-CH2-07 | BGM | 弘大（吉他+輕快節奏·人間煙火） | Scene 11 | ❌ |
| BGM-CH2-08 | BGM | 懷錶的告白（空靈合成器+鋼琴·宿命感） | Scene 12 | ❌ |

---

## 📊 製作排程建議

### Phase 1（可玩核心）— 先做這 6 張
| # | 素材 | 類型 | 原因 |
|---|------|------|------|
| 1 | CHAR-CH2-01 恩智·完美後輩 | 立繪 | 新角色基準——所有恩智圖的起點 |
| 2 | CHAR-CH2-02 恩智·崩潰版 | 立繪 | 審判場景必須有 |
| 3 | CG-CH2-05 很辛苦吧 | CG | **全章高潮，不能沒有** |
| 4 | CG-CH2-02 深夜偷拍 | CG | 全章最有張力的畫面 |
| 5 | CG-CH2-07 弘大小拇指 | CG | CP 高潮+全章最暖場景 |
| 6 | BG-CH2-01 恩智套房 | BG | 恩智主場景，多次使用 |

### Phase 2（完整體驗）— 再做這 6 張
| # | 素材 | 類型 |
|---|------|------|
| 7 | CG-CH2-08 懷錶告白 | CG |
| 8 | CG-CH2-03 俊宇的照片 | CG |
| 9 | CG-CH2-04 審判室 | CG |
| 10 | CHAR-CH2-03 旻赫·笑到眼睛 | 立繪 |
| 11 | BG-CH2-02 弘大居酒屋 | BG |
| 12 | BG-CH2-03 考試院 | BG |

### Phase 3（錦上添花）
| # | 素材 | 類型 |
|---|------|------|
| 13 | CG-CH2-01 完美後輩咖啡 | CG |
| 14 | CG-CH2-06 握手 | CG |
| 15 | CHAR-CH2-04 智媛害羞 | 立繪 |
| 16 | CHAR-CH2-05 旻赫下班版 | 立繪 |
| 17 | CARD-06/07/08 三張新卡面 | 卡面 |

---

## 📋 第二章製作總表

### 總覽
| 項目 | 數量 |
|------|------|
| 場景數 | 12 場（Scene 01～12） |
| 台詞數 | ~250 條（含旁白、內心戲、分支） |
| 出牌點 | 5 次（#1~#4 + CP特殊） |
| 分支數 | 25+ 條（含所有出牌結果 + BOSS雙路線） |
| 新獲卡 | 3 張（鏡子 / 空椅 / 憐憫） |
| 囂張值事件 | 7 次（+8/+10/+12/+15/+18/+18/+10 = 總增 91） |
| 預估遊玩時間 | 40～55 分鐘 |

### 背景圖（BG）
| # | 用途 | 場景 | 狀態 | 優先度 |
|---|------|------|------|--------|
| BG-01 | 辦公區白天 | 01, 02, 06 | ✅ 沿用 | — |
| BG-02 | 辦公區深夜 | 03 | ✅ 沿用 | — |
| BG-03 | 會議室 | 09, 10 | ✅ 沿用 | — |
| BG-04 | 恩智套房 | 05, 07 | ❌ 需製作 | ⭐⭐⭐ |
| BG-05 | 弘大居酒屋 | 11 | ❌ 需製作 | ⭐⭐ |
| BG-06 | 旻赫考試院 | 04, 12 | ❌ 需製作 | ⭐⭐ |

**需新製作背景：3 張**

### 角色立繪（CHAR）
| # | 角色 | 表情/姿態 | 狀態 | 使用場景 | 優先度 |
|---|------|----------|------|---------|--------|
| CH-01 | 旻赫·冷靜微笑 | 沿用 | ✅ 已有 | 全章 | — |
| CH-02 | 旻赫·寒冰眼神 | 沿用 | ✅ 已有 | 06 | — |
| CH-03 | 旻赫·決意 | 沿用 | ✅ 已有 | 08-09 | — |
| CH-04 | 智媛·開朗 | 沿用 | ✅ 已有 | 01 | — |
| CH-05 | 智媛·標準 | 沿用 | ✅ 已有 | 01-02, 11 | — |
| CH-06 | 吳常務 | 沿用 | ✅/❌ | 06, 09-10 | — |
| CH-07 | **恩智·完美後輩** | 新 | ❌ 需製作 | 01-02, 06 | ⭐⭐⭐ |
| CH-08 | **恩智·崩潰版** | 新 | ❌ 需製作 | 03, 07, 09-10 | ⭐⭐⭐ |
| CH-09 | **旻赫·笑到眼睛** | 新 | ❌ 需製作 | 10, 11 | ⭐⭐ |
| CH-10 | **智媛·害羞** | 新/沿用 | ❌ 需製作 | 01, 11 | ⭐⭐ |
| CH-11 | **旻赫·下班版** | 新 | ❌ 需製作 | 11 | ⭐ |

**需新製作立繪：5 張**（如果第一章已做智媛害羞版則為 4 張）

### CG（全屏插圖）
| # | 說明 | 場景 | 狀態 | 優先度 |
|---|------|------|------|--------|
| CG-01 | 完美後輩遞咖啡（逆光·指尖發白） | 01 | ❌ 需製作 | ⭐ |
| CG-02 | 深夜偷拍（邊哭邊拍·應急燈） | 03 | ❌ 需製作 | ⭐⭐⭐ |
| CG-03 | 俊宇照片（手機特寫·爸爸被偷拍） | 05 | ❌ 需製作 | ⭐⭐⭐ |
| CG-04 | 審判室（三人空間·權力結構） | 06/09 | ❌ 需製作 | ⭐⭐ |
| CG-05 | 很辛苦吧（蹲下·平視·陽光） | 09 | ❌ 需製作 | ⭐⭐⭐ |
| CG-06 | 握手（手部特寫·懷錶+手帕） | 10 | ❌ 需製作 | ⭐⭐ |
| CG-07 | 弘大小拇指（霓虹·辣炒年糕·耳朵紅） | 11 | ❌ 需製作 | ⭐⭐⭐ |
| CG-08 | 懷錶告白（考試院·微光·安靜） | 12 | ❌ 需製作 | ⭐⭐⭐ |

**需新製作 CG：8 張**

### 卡面
| # | 卡名 | 狀態 | 說明 |
|---|------|------|------|
| CARD-06 | 鏡子 The Mirror | ❌ 需製作 | 碎鏡·蛇影·金紋 |
| CARD-07 | 空椅 The Empty Chair | ❌ 需製作 | 高背椅·操偶線·手機碎片 |
| CARD-08 | 憐憫 Mercy | ❌ 需製作 | 手掌·碎匕首·金光·星空 |

**需新製作卡面：3 張**

---

## ✅ 製作優先順序

### P0 — 必須（可玩）
- [x] 劇本文字（v3-03-chapter2.md）✅ 完成
- [ ] 引擎接上第二章（Ch.1→Ch.2 過渡）
- [ ] 立繪：恩智（完美後輩）← **新角色基準圖**
- [ ] 立繪：恩智（崩潰版）
- [ ] 卡面：鏡子 The Mirror
- [ ] 卡面：空椅 The Empty Chair
- [ ] 卡面：憐憫 Mercy

### P1 — 重要（完整體驗）
- [ ] CG-05：很辛苦吧（全章高潮）
- [ ] CG-02：深夜偷拍
- [ ] CG-07：弘大小拇指
- [ ] CG-08：懷錶告白
- [ ] BG：恩智套房
- [ ] 立繪：旻赫·笑到眼睛

### P2 — 加分（情感深度）
- [ ] CG-03：俊宇照片
- [ ] CG-04：審判室
- [ ] CG-01：完美後輩咖啡
- [ ] CG-06：握手
- [ ] BG：弘大居酒屋
- [ ] BG：旻赫考試院
- [ ] 立繪：智媛·害羞
- [ ] 立繪：旻赫·下班版

### P3 — 錦上添花
- [ ] 全部音效 SFX-CH2-01～06
- [ ] 全部 BGM-CH2-01～08

---

## 🎬 導演筆記

### 第二章的美術核心挑戰

**1. 恩智的「兩面」**
恩智有兩個視覺狀態，但必須是同一個人。完美後輩版和崩潰版的差異要大到讓玩家震驚，但仔細看又確實是同一張臉。關鍵差異點：頭髮（盤起 vs 放下）、服裝（套裝 vs 內搭）、表情（笑 vs 哭）。臉型和酒窩不能變。

**2. 「很辛苦吧」的構圖**
這張 CG 是全遊戲的情感轉折點。構圖必須做到「蹲下來」的感覺——鏡頭要和兩人的視線同高。不能是俯拍（會有「施捨」感），也不能是仰拍（會有「仰望」感）。必須是平視——「我和你站在同一個高度」。

**3. 俊宇的「影子」**
俊宇不出場，但他必須無處不在。通過三種方式表現：① 手機螢幕上的訊息 ② 爸爸被偷拍的照片 ③ 恩智的恐懼表情。不需要畫俊宇本人——他的「不在場」比在場更可怕。

**4. 色溫的情緒作用**
- 辦公室場景：冷白色（權力、審判）
- 恩智套房：暖黃但孤獨（一個人的微弱燈光）
- 弘大居酒屋：暖黃+霓虹（溫暖、真實、人間煙火）
- 考試院：冷白+暗黃（孤獨、策略、夜深人靜）
- 「很辛苦吧」場景：會議室冷白中的一道午後陽光（冰裡的暖）

**5. 懷錶的光的衰減**
第一章的懷錶光是穩定的金色。第二章的懷錶光要明顯比第一章暗、弱。Scene 12 的懷錶光要是「快要熄滅」的感覺——閃爍、不穩定。這是視覺敘事：力量在衰竭。

---

*美術開表 v1.0 — 第二章：秘書的眼淚*
*對應劇本版本：V3 (v3-03-chapter2.md)*