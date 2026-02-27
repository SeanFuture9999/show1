# 第一章：部長的末日 — 美術開表（導演版）

> **風格基調：** 韓漫墨線風（Korean manhwa ink line style），無文字
> **模型：** Gemini Nano Banana Pro (gemini-3-pro-image-preview)
> **流程：** 一張一張開表 → Sean 確認 → 生圖 → 審核 → 下一張

---

## 🔗 角色連貫性綁定（最重要！）

> **原則：** 第一章的每張 CG/立繪，必須跟序章已生成的圖「同一個人」。
> 以下是每個角色的「DNA」—— 生圖時強制帶入。

### 旻赫（第一章 = 28歲入職版）

**序章已建立的視覺 DNA：**
- 黑色亂髮，瀏海蓋額頭偏右（觀者視角偏左），長度到眉毛
- 瘦削身材，臉型偏窄有稜角
- **左臉痣**（靠近眼睛下方）← 最關鍵辨識特徵
- 深色眼睛，眼神冷靜帶計算感（33歲靈魂）
- 微笑不到眼睛 = 標誌性表情

**第一章服裝：** 便宜深色西裝+白襯衫（入職），或深色帽T（加班/日常）

**序章參考圖（生圖時必須看這些保持一致）：**
| 參考圖 | 用途 | 備註 |
|--------|------|------|
| `minheok_neutral.png` | 主臉型+髮型基準 | 1728KB 高精度，最重要的參考 |
| `minheok_resolve.png` | 決意表情基準 | 處刑場景參考 |
| `cg_memory_firstday_v2.jpg` | 入職西裝造型 | 第一章同款服裝 |
| `cg_late_coffee.png` | 深夜辦公室氛圍 | CG-CH1-01/05 氛圍參考 |

**統一 prompt 前綴：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
young Korean man age 28, messy black hair with bangs falling over forehead,
slim build, small dark mole on left cheek near eye,
sharp dark eyes with calm calculating gaze
```

---

### 智媛

**序章已建立的視覺 DNA：**
- 黑色齊耳短髮（bob cut），左側稍微塞耳後，右側自然前垂
- 銀色圓環耳釘
- 牛仔外套套在白色辦公襯衫外面 ← 標誌穿搭
- 自信大方的笑容，嘴巴大，牙齒露出
- 釜山女孩的爽朗氣質，肢體語言大

**序章參考圖：**
| 參考圖 | 用途 |
|--------|------|
| `jiwon.png` | 主臉型+造型基準（768KB 高精度） |
| `jiwon_angry.png` | 憤怒表情基準 |
| `jiwon_cheerful.png` | 開朗表情基準 |

**統一 prompt 前綴：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
young Korean woman age 27, short black bob cut chin-length hair,
silver circular stud earrings, dark denim jacket over white office blouse,
bright confident eyes, cheerful bold personality
```

---

### 朴在成

**序章已建立的視覺 DNA：**
- 中年微胖體型，肩寬肚子撐西裝
- 深色短髮往後梳（油頭），一絲不亂
- 粗眉毛，厚重臉型，鼻子略寬
- 深藍色西裝（永遠同一套），胸口工牌繩掛法人信用卡
- 囂張時：下巴抬起、目光往下看人
- 崩潰時：臉色灰白、額頭出汗

**序章參考圖：**
| 參考圖 | 用途 |
|--------|------|
| `park_arrogant.png` | 囂張版基準 |
| `park_sweating.png` | 崩潰版基準 |

**統一 prompt 前綴：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
middle-aged Korean man age 47, stocky heavyset build,
dark short hair slicked back with gel, thick eyebrows,
dark navy blue suit stretched tight over belly,
corporate ID card lanyard with gold credit card on chest
```

---

### 俊宇（第一章不出場，但保留 DNA 以備）

**序章已建立的視覺 DNA：**
- 棕色頭髮往後梳（用髮膠），露出額頭
- 比旻赫高且壯，寬肩
- 高級深灰色西裝+黑色高領（天台版）
- 「溫暖的笑」= 標誌表情，但笑容不到眼睛

**序章參考圖：**
| 參考圖 | 用途 |
|--------|------|
| `junwoo_rooftop.png` | 成年版基準 |
| `junwoo_university.png` | 大學版基準 |

---

### 吳常務（新角色 — 無序章參考）

**視覺 DNA（新建）：**
- 50多歲，比朴在成瘦但氣場更強
- 銀灰色短髮，梳理得一絲不苟
- 方形金屬框眼鏡
- 深炭灰色西裝（比朴在成更高級、更合身）
- 表情永遠嚴肅沉穩，嘴巴緊閉成一條線
- 「安靜的威壓」—— 不吼不叫，但說一句話全場靜

**統一 prompt 前綴：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting,
older Korean man early 50s, lean stern build,
silver-grey short hair combed back neatly,
square metal-frame glasses, deep charcoal grey well-tailored suit,
stern composed authoritative expression, quiet commanding presence
```

---

## ⚠️ 生圖流程（角色連貫性保障）

1. **每張圖的 prompt 必須帶對應角色的「統一前綴」**
2. **複雜 CG（多角色/新角度）先生測試版 → 對比序章參考圖 → 確認臉型一致再定稿**
3. **如果臉飄了：** 調整 prompt 中的特徵描述權重，或在 prompt 中直接描述「same character as reference」
4. **左臉痣是旻赫的 ID：** 每張旻赫的圖都必須確認痣的位置。如果痣跑到右臉 → 水平翻轉圖片（前提：圖中無文字/招牌）

---

## 🎨 已有素材清單（序章沿用）

### 背景（可直接用）
| 檔名 | 用途 | 第一章使用場景 |
|------|------|---------------|
| `sungwon_lobby_v2.jpg` | 盛元大廳 | 00A 入職、01 搶功勞 |
| `office_day.png` | 辦公區白天 | 00B 初遇智媛、00C 初遇朴在成、00E 第一週、02 羞辱、05 甩鍋 |
| `office_night.png` | 辦公區深夜 | 00D 冰美式、03 深夜加班 |
| `meeting_room.png` | 會議室 | 01 週會、08 處刑 |
| `cheongdam_restaurant.png` | 餐廳 | 04 會食（可用但風格偏小） |

### 角色立繪（可直接用）
| 檔名 | 角色 | 第一章使用 |
|------|------|-----------|
| `minheok_firstday.png` | 旻赫·入職新人 | 00A～00E |
| `minheok_neutral.png` | 旻赫·冷靜微笑 | 01～08 主要立繪 |
| `minheok_cold.png` | 旻赫·寒冰眼神 | 08 處刑金句 |
| `minheok_resolve.png` | 旻赫·決意 | 07 茶水間後、08 |
| `jiwon.png` | 智媛·標準（短黑髮、牛仔外套、自信笑） | 全章主要立繪 |
| `jiwon_cheerful.png` | 智媛·開朗 | 00B 初遇、08 走廊 |
| `jiwon_angry.png` | 智媛·憤怒 | 04 會食爆發 |
| `park_arrogant.png` | 朴在成·囂張 | 00C～07 主要立繪 |
| `park_sweating.png` | 朴在成·冒汗崩潰 | 08 處刑 |

---

## 📋 需新製作素材

### ═══ 背景（BG）：2 張 ═══

---

#### BG-NEW-01：茶水間/走廊角落
**使用場景：** Scene 06（朴在成打電話）、Scene 07（堵人威脅）
**敘事功能：** 私密空間的壓迫與脆弱。這裡朴在成展現兩面——先是打電話給女兒的柔軟（06），然後堵人拍牆的暴力（07）。同一個場景，兩種溫度。

**構圖：**
- 企業大樓走廊盡頭的茶水間入口
- 左側是飲水機和微波爐，右側是走廊轉角
- 日光燈照明，冷白色，無窗
- 牆面是辦公室標準米白色，地板灰色磁磚
- 沒有人——空蕩蕩的，壓迫感來自狹窄和燈光

**色調：** 冷白+灰，日光燈的慘白感
**尺寸：** 1024×768（4:3 橫式）
**參考：** 序章 `office_day.png` 的像素密度和建築風格，但更狹窄、更冷

---

#### BG-NEW-02：盛元地下停車場
**使用場景：** Scene 07 愚者分支（旻赫去拍停車場證據）
**敘事功能：** 最後一塊拼圖的取得地點。旻赫假裝低頭離開茶水間，實際繞到停車場取證。這個場景只在「最佳選擇」路線出現，是獎勵場景。

**構圖：**
- 企業大樓地下停車場，混凝土柱子、車位線
- 兩台車並排：一台深色轎車（朴在成的）、一台黑色 SUV（金昌浩的）
- 天花板日光燈投下慘白的光，車身反射微弱光線
- 遠處可見電梯口的綠色EXIT燈

**色調：** 灰調+慘白日光燈+微弱綠色exit光
**尺寸：** 1024×768（4:3 橫式）

---

### ═══ 角色立繪（CHAR）：3 張 ═══

---

#### CHAR-NEW-01：朴在成·疲憊/傷感
**使用場景：** Scene 06（茶水間打電話給女兒）
**敘事功能：** **全章最重要的角色深度翻轉。** 朴在成從純粹的壞人變成「被體制碾碎又碾碎別人的人」。這張立繪只出現一次，但決定了玩家最後打臉時是純爽還是帶苦澀。

**角色描述：**
- **同一個朴在成**，但完全不同的表情
- 眼睛閉著或半閉，靠著牆，頭微微後仰
- 西裝領帶鬆了，第一顆扣子解開
- 表情疲憊、蒼老，法令紋更明顯
- 手裡握著剛掛斷的手機，垂在身側
- 沒有了囂張，只剩一個47歲加班15年的中年男人

**⚠️ 必須參考：** `park_arrogant.png` 的同一張臉、同一套西裝，只是表情和姿態完全不同
**色調：** 冷白色走廊光，把他照得更老更疲憊
**尺寸：** 512×1024（1:2 直式，半身像）

---

#### CHAR-NEW-02：吳常務
**使用場景：** Scene 01（週會提問）、Scene 08（處刑主持）
**敘事功能：** 權力結構中的「刀」。旻赫不是直接打臉朴在成——他找到了吳常務這把刀。吳常務代表「制度內的正義」，嚴肅但公正。

**角色描述：**
- 50多歲韓國男性，銀灰色短髮，向後梳理得一絲不苟
- 方形金屬框眼鏡
- 深炭灰色西裝，比朴在成的更合身、更高級
- 表情嚴肅沉穩，嘴巴緊閉成一條線
- 坐姿（主要在會議室），雙手交叉放在桌上
- 氣場是「安靜的威壓」——不像朴在成那種吵鬧的控制，而是沉默的裁決

**⚠️ 風格參考：** 與 `park_arrogant.png` 同世界觀，但階級更高、更克制
**色調：** 同辦公室冷色系
**尺寸：** 512×1024（1:2 直式，半身像）

---

#### CHAR-NEW-03：智媛·害羞
**使用場景：** Scene 03（冰美式字條後）、Scene 04 愚者分支（旻赫夾肉給她）、Scene 08 走廊（「那不是因為你！」）
**敘事功能：** CP 暗線的關鍵表情。智媛平時是大姐頭性格，但面對旻赫的溫柔回應時，會短暫露出害羞的一面。這個反差是玩家嗑 CP 的核心驅動力。

**角色描述：**
- **同一個智媛**：短黑髮、牛仔外套、銀色耳釘
- 但表情完全不同：
  - 耳朵尖紅（最重要的細節！）
  - 眼睛往下看，不敢直視前方
  - 嘴巴微微嘟著，像在掩飾不好意思
  - 一隻手不自覺摸耳朵或撥頭髮

**⚠️ 必須參考：** `jiwon.png` 的同一張臉、同一套服裝，只是表情從「自信大笑」變成「偷偷害羞」
**色調：** 同辦公室色系，但耳朵的紅要明顯
**尺寸：** 512×1024（1:2 直式，半身像）

---

### ═══ CG（全屏插圖）：6 張 ═══

**CG 的導演邏輯：** 每張 CG 都是劇情的「定格瞬間」——玩家看到 CG 的那一刻，應該感受到強烈的情緒衝擊。不是所有場景都需要 CG，只在情緒最高峰的地方放。

---

#### CG-CH1-01：深夜獵人（⭐⭐⭐ 最高優先）
**使用場景：** Scene 03 暴食最佳解（旻赫查朴在成的電腦）
**敘事功能：** 第一章的「轉折定格」。從被壓迫的新人 → 深夜裡的獵人。這是全章最能體現「重生者優勢」的畫面。

**構圖：**
- **鏡頭：** 中景偏特寫，斜側面
- 深夜辦公室，所有燈都關了，只有一台電腦螢幕的冷光
- 旻赫坐在朴在成的辦公桌前，螢幕光照亮他半張臉
- 左半臉被螢幕冷藍光照亮（能看到左臉痣），右半臉在黑暗中
- 表情：嘴角微微上揚，眼神冰冷銳利——獵人的笑
- 左手腕的懷錶在暗處發出微弱的金光
- 螢幕上隱約可見數字和表格（報帳紀錄，但不要有可讀文字）

**角色：** 旻赫（28歲外表，黑髮瀏海，左臉痣，深色襯衫袖子捲起）
**色調：** 冷藍電腦光 vs 暗黑辦公室 vs 金色懷錶微光（三色對比）
**情緒：** 危險、掌控、暗爽
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** `minheok_neutral.png` 的臉型髮型、`office_night.png` 的辦公室氛圍

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting, no text, 4:3 landscape orientation 1024x768,
medium close-up shot slightly angled from the side,
dark office at night all lights off except one computer monitor,
young Korean man age 28 messy black hair with bangs falling over forehead slim build small dark mole on left cheek near eye,
sitting at someone elses desk in front of a glowing computer monitor,
cold blue monitor light illuminating the left half of his face revealing the mole on left cheek,
right half of face in complete darkness,
expression shows a subtle dangerous smirk with cold sharp calculating eyes — a hunter not a victim,
left wrist resting on desk with antique golden pocket watch emitting faint warm golden glow,
monitor screen shows blurred spreadsheet numbers and financial records no readable text,
empty dark office cubicles in background,
three-color contrast: cold blue monitor light vs pitch black office vs warm golden watch glow
```

---

#### CG-CH1-02：會食·智媛站起來（⭐⭐⭐ 最高優先）
**使用場景：** Scene 04 愚者分支（智媛爆發名場面）
**敘事功能：** **全章最高情緒爆發點之一。** 智媛在所有人都沉默時站起來替旻赫說話。這個場景建立了她的核心性格——「絕對不讓任何人在我面前被欺負」。也是 CP 暗線最關鍵的一擊。

**構圖：**
- **鏡頭：** 低角度仰拍（從旻赫的視角看智媛站起來）
- 烤肉店包廂，桌上有烤肉盤、燒酒瓶、小菜
- 智媛「啪」放下筷子站起來的瞬間——筷子可能還在桌面彈跳
- 她的表情：眉毛豎起、眼睛瞪圓、嘴巴張開正在怒吼
- 釜山女孩的剽悍氣勢全開
- 背景：其他同事都低頭不敢看，朴在成臉色鐵青
- 旻赫在畫面邊緣，表情平靜但眼中有光（他在看她）

**角色：** 智媛（短黑髮、牛仔外套、銀色耳釘、站立姿態、手拍桌）
**色調：** 暖黃烤肉店燈光（這是第一章少數暖色場景）
**情緒：** 憤怒、正義、熱血
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** `jiwon_angry.png` 的臉+表情、`jiwon.png` 的服裝造型、`cheongdam_restaurant.png` 的餐廳

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting, no text, 4:3 landscape orientation 1024x768,
low angle looking up at a young Korean woman standing up from her seat in anger,
young Korean woman age 27 short black bob cut chin-length hair silver circular stud earrings dark denim jacket over white office blouse,
she has just slammed her chopsticks down on the table and is standing up confronting someone off-screen,
fierce angry expression with eyebrows furrowed and mouth open yelling in righteous fury,
bold fearless Busan girl energy defending someone being bullied,
Korean BBQ restaurant private room setting with grilled meat on table soju bottles and side dishes,
warm golden amber restaurant lighting,
background shows other coworkers looking down uncomfortably avoiding eye contact,
at the edge of frame a young man with messy black hair watches her calmly with subtle light in his eyes,
warm-toned scene contrasting with the cold corporate world outside
```

---

#### CG-CH1-03：會議室處刑（⭐⭐⭐ 最高優先）
**使用場景：** Scene 08 共通打臉演出
**敘事功能：** **全章高潮。** 旻赫一個月的佈局在這一刻全部兌現。這張 CG 配合閃白+震動+囂張值爆裂，是整章最爽的瞬間。

**構圖：**
- **鏡頭：** 廣角中景，強透視（會議桌向深處延伸）
- 會議室，長橢圓形桌
- 旻赫站在投影幕前，手裡拿著文件，表情冷靜——那個「不到眼睛的微笑」
- 投影幕上有模糊的數據圖表（隱約可見「4,700萬」之類的數字暗示）
- 朴在成坐在對面，椅子已經往後推了一半，表情從震驚轉為恐懼
- 吳常務在主位，表情嚴肅，雙手交叉
- HR 金部長在翻文件夾

**角色：** 旻赫（站立、冷靜）vs 朴在成（坐姿崩潰）vs 吳常務（旁觀裁決）
**色調：** 會議室白色日光燈——殘酷的清晰感，沒有陰影可以躲
**情緒：** 掌控、正義、爽快
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** `minheok_cold.png` 的表情、`park_sweating.png` 的崩潰、`meeting_room.png` 的會議室

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, dramatic lighting, no text, 4:3 landscape orientation 1024x768,
wide-angle shot with strong perspective of a corporate meeting room with long oval table,
young Korean man age 28 messy black hair with bangs slim build small dark mole on left cheek near eye wearing cheap dark suit,
standing calmly at the front near a projection screen holding documents with a cold composed smile that doesnt reach his eyes,
projection screen behind him shows blurred financial data charts,
sitting across the table a middle-aged Korean man age 47 stocky heavyset dark slicked-back hair dark navy suit,
his chair pushed back in shock face turning ashen grey with sweat on forehead eyes wide with fear,
at the head of the table an older Korean man early 50s silver-grey hair square metal glasses dark charcoal suit,
arms crossed stern composed expression watching silently like a judge,
a woman in business attire flipping through a document folder beside him,
harsh white fluorescent meeting room lighting with nowhere to hide,
the power dynamic has completely reversed
```

---

#### CG-CH1-04：收紙箱離場（⭐⭐ 重要）
**使用場景：** Scene 08 收場
**敘事功能：** 打臉之後的沉澱。不是純爽——是帶著苦澀的收場。朴在成把女兒的照片放進口袋那一刻，玩家應該想起 Scene 06 他打電話給女兒的場景。**壞人也是人。**

**構圖：**
- **鏡頭：** 中遠景，從辦公區玻璃牆外面拍進去
- 朴在成一個人站在自己的辦公桌前，手裡抱著紙箱
- 桌上有一個空的相框位置（女兒照片已經拿走了）
- 辦公區其他人假裝不看，但用餘光偷瞄
- 玻璃牆造成微妙的隔離感——我們像旁觀者

**角色：** 朴在成（背影或側面，低頭，抱紙箱）
**色調：** 辦公室日光燈白，但整體偏灰暗——失去一切的顏色
**情緒：** 蒼涼、複雜的同情
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** `park_arrogant.png` 同一人但完全不同氣場

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, melancholic lighting, no text, 4:3 landscape orientation 1024x768,
medium-long shot viewed through office glass partition wall,
middle-aged Korean man age 47 stocky heavyset build dark short hair slicked back wearing dark navy blue suit,
standing alone at his desk holding a cardboard box with personal items,
head bowed low shoulders slumped all arrogance completely gone,
an empty photo frame spot on the desk where his daughters photo used to be,
other office workers at their desks pretending not to look but glancing sideways,
the glass partition creates a sense of isolation like watching someone through an aquarium,
office fluorescent lighting but overall muted grey desaturated color palette — the color of losing everything,
bittersweet complex emotion — he was a bully but also a tired father who worked 15 years
```

---

#### CG-CH1-05：深夜冰美式（⭐⭐ 重要）
**使用場景：** Scene 00D（第一天下班）
**敘事功能：** CP 暗線的起點定格。智媛放了咖啡沒說話就走，旻赫記得前世也是這樣。**「這一次我看到了」**——簡單的一杯咖啡，承載了跨越兩世的羈絆。

**構圖：**
- **鏡頭：** 景深構圖（前景 → 中景 → 背景三層）
- **前景（清晰）：** 桌角的一杯冰美式咖啡，杯壁掛著水珠，透明杯身
- **中景：** 旻赫坐在電腦前，螢幕光照臉，低頭看向咖啡的方向，表情微妙（驚訝+溫暖）
- **背景（模糊）：** 智媛的背影走向門口離開，牛仔外套的輪廓
- 整個辦公室只有旻赫那一盞檯燈亮著

**角色：** 旻赫（坐姿、回頭看咖啡）+ 智媛（背影離開）
**色調：** 深夜辦公室暗色 + 檯燈暖黃光只照局部 + 螢幕冷藍（暖冷交錯=複雜情感）
**情緒：** 溫暖、安靜的心動、孤獨中的微光
**尺寸：** 1024×768（4:3 橫式）
**⚠️ 連貫性參考：** `cg_late_coffee.png`（序章同類場景！）、`jiwon.png` 背影輪廓、`office_night.png`

**完整 Prompt：**
```
Dark Korean manhwa style, cinematic composition, intimate lighting, no text, 4:3 landscape orientation 1024x768,
depth-of-field composition with three layers,
foreground in sharp focus: a cup of iced americano coffee on desk corner with water droplets condensing on clear plastic cup,
middle ground: young Korean man age 28 messy black hair with bangs slim build small dark mole on left cheek near eye wearing cheap dark suit,
sitting at computer desk with monitor glow on his face looking down toward the coffee with subtle surprised and warm expression,
background slightly blurred: a young woman with short black bob cut hair wearing dark denim jacket walking away toward the office door her back to us,
the entire office is dark and empty except for one desk lamp casting warm golden circle of light on the mans workspace,
warm desk lamp light vs cold monitor blue light creating emotional complexity,
quiet intimate moment — a cup of coffee left without words carrying the weight of two lifetimes
```

---

#### CG-CH1-06：茶水間的背影（⭐ 加分）
**使用場景：** Scene 06（朴在成打電話給女兒）
**敘事功能：** 配合 CHAR-NEW-01（疲憊立繪），進一步建立朴在成的人性深度。如果只有立繪沒有 CG 也可以，但有 CG 會讓這個場景的衝擊力翻倍。

**構圖：**
- **鏡頭：** 旻赫的視角（偷看），走廊轉角偷拍式構圖
- 朴在成靠著茶水間的牆，側面，一手拿手機貼耳朵，一手垂在身側
- 西裝鬆了，領帶歪了
- 頭微微仰起，閉著眼睛
- 走廊的日光燈在他頭頂，影子拉得很長

**角色：** 朴在成（疲憊側面/背面）
**色調：** 慘白走廊燈，冷調
**情緒：** 脆弱、疲憊、被碾碎的人
**尺寸：** 1024×768（4:3 橫式）

---

## 📊 製作排程建議

### Phase 1（可玩核心）— 先做這 5 張
| # | 素材 | 類型 | 原因 |
|---|------|------|------|
| 1 | CG-CH1-01 深夜獵人 | CG | 第一章轉折點，最能代表遊戲調性 |
| 2 | CG-CH1-03 會議室處刑 | CG | 全章高潮，不能沒有 |
| 3 | CHAR-NEW-02 吳常務 | 立繪 | 處刑場景必須有他 |
| 4 | CG-CH1-02 智媛站起來 | CG | 最佳路線獨佔，情緒爆發點 |
| 5 | BG-NEW-01 茶水間 | BG | Scene 06+07 都需要 |

### Phase 2（完整體驗）— 再做這 4 張
| # | 素材 | 類型 |
|---|------|------|
| 6 | CHAR-NEW-01 朴在成疲憊 | 立繪 |
| 7 | CHAR-NEW-03 智媛害羞 | 立繪 |
| 8 | CG-CH1-05 深夜冰美式 | CG |
| 9 | CG-CH1-04 收紙箱離場 | CG |

### Phase 3（錦上添花）
| # | 素材 | 類型 |
|---|------|------|
| 10 | BG-NEW-02 停車場 | BG |
| 11 | CG-CH1-06 茶水間背影 | CG |

---

## 📝 生圖時的角色一致性提醒

每張圖 prompt 前面加上對應角色的固定描述：

**旻赫：**
```
Young Korean man, 24 years old appearance, messy black hair with bangs covering forehead, small mole on LEFT cheek, lean build, sharp dark eyes with a calm calculating gaze
```

**智媛：**
```
Young Korean woman, 27 years old, short black bob cut chin-length, silver stud earrings, dark denim jacket over white office blouse, confident cheerful expression, bright eyes
```

**朴在成：**
```
Middle-aged Korean man, 47 years old, stocky heavyset build, dark slicked-back hair, dark navy blue suit stretched over belly, corporate ID card lanyard with gold credit card, arrogant stern expression, thick eyebrows
```

**吳常務（新）：**
```
Older Korean man, early 50s, silver-grey short hair combed back neatly, square metal-frame glasses, dark charcoal grey suit well-tailored, stern composed expression, quiet authority
```
