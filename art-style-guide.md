# 重生抽卡復仇記 — 美術風格指南

## 確定風格：精緻動漫像素風（日系清爽）

### PixelLab 基底 Prompt
```
cute anime pixel art, clean minimal style, 
East Asian features, black hair, dark eyes,
soft natural lighting, white space, airy composition,
5-6 head proportion characters, single color black outline,
detailed shading, highly detailed
```

### 場景別追加
| 場景 | 追加關鍵詞 |
|------|-----------|
| 白天室內 | warm natural sunlight, bright clean interior, minimal modern office |
| 白天室外 | clear sky, soft sunlight, clean cityscape |
| 夜晚室外 | gentle city lights, soft blue atmosphere, clean night sky |
| 雨景 | rain drops, wet reflections, atmospheric but not dark |
| 宴會/派對 | warm ambient lighting, elegant, bokeh lights |
| 打臉場景 | dramatic but clean lighting, emotional expressions |

### ❌ 避免
- 暗黑/賽博龐克（太硬）
- 過度粉紅（太膩）
- 過度飽和（太吵）
- 西洋人面孔
- 粗糙復古像素（要精緻）
- 擁擠構圖（要留白）

### ✅ 追求
- 日系清爽透明感（新海誠調色參考）
- 乾淨留白
- 淡雅自然的色調
- 角色表情豐富但乾淨
- 東方人面孔（中式角色）
- 像素顆粒感適中（不太粗不太細）

### 參考圖
Sean 提供的 4 張參考（2026-02-24）：
1. 婚禮場景男主（暖色、精緻、動漫風）
2. 雨夜三人街頭（藍調、氣氛感、不壓抑）
3. 雪景情侶（冷色但溫馨）
4. 粉色電競房（室內暖色、可愛）

→ 取其「精緻度」和「角色設計」
→ 色調再淡雅一些、留白多一些

### UI 風格
- 不用像素風，用引擎做乾淨卡片式 UI
- 參考大陸爽劇手遊的佈局（叫我官老爺、豪門重生記等）
- 圓角卡片、漸層按鈕、大字易讀
- 配色跟像素插畫協調

### 技術參數
| 項目 | 設定 |
|------|------|
| 模型 | PixelLab pixflux |
| 角色圖尺寸 | 200×400（手機直式）|
| 場景圖尺寸 | 320×180（16:9 橫式）或 200×400（直式）|
| 卡牌圖尺寸 | 200×280 |
| 道具/物件 | 200×200 |
| outline | single color black outline |
| detail | highly detailed |
| shading | detailed shading |
| text_guidance_scale | 12 |

---

*風格指南 v1.0 — 2026-02-24*
*基於 Sean 的 4 張參考圖 + 6 輪測試調整*
