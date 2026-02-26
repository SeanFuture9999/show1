# 章節管理系統規格

## 基本資訊
- **優先級**：Must（內容結構）
- **依賴系統**：無（最底層）
- **被依賴**：所有系統

---

## 1. 設計目標

1. 資料驅動，劇情全放 JSON 不寫死在程式裡
2. 方便批量生成和修改劇情內容
3. 清晰的進度管理

---

## 2. 核心機制

### 章節結構
```
遊戲
├── 序章：墜落與重生（教學關）
│   ├── Scene 01: 天台墜樓
│   ├── Scene 02: 重生覺醒
│   └── Scene 03: 懷錶教學
├── 第一章：部長的囂張
│   ├── Scene 01: 早晨辦公室
│   ├── Scene 02: 會議室衝突
│   ├── Scene 03: 走廊遭遇
│   ├── Scene 04: 加班陷阱
│   └── Scene 05: 最終對決
├── 第二章：秘書的陷阱
│   ├── Scene 01: 新秘書到任
│   ├── Scene 02: 情報洩漏
│   ├── Scene 03: 背後的人
│   ├── Scene 04: 反將一軍
│   └── Scene 05: 真相揭露
└── ...後續章節

每個 Scene 包含：
├── 多段 segments（對話/旁白/事件）
├── 0-2 個壞人事件（觸發囂張值）
├── 0-1 個抽卡觸發點
├── 0-1 張 CG 插畫
└── 0-1 個記錄點
```

### 章節狀態
| 狀態 | 說明 |
|------|------|
| locked | 未解鎖（前一章未完成）|
| available | 可遊玩 |
| in_progress | 進行中（有存檔）|
| completed | 已完成 |

### 進度存檔
- 每次用卡成功 → 自動存記錄點
- 記錄：chapter_id + scene_id + segment_index + arrogance_value
- Game Over 後可回到最近記錄點

---

## 3. 資料結構

### 章節定義
```json
Chapter {
  id: "ch1",
  title: "部長的囂張",
  subtitle: "朴在成以為你還是從前那個好欺負的新人",
  boss: "朴在成",
  boss_portrait: "zhao_ming",
  initial_arrogance: 0.20,
  scenes: Scene[],
  unlock_condition: "ch0_completed",
  rewards: { cards: 3, currency: 100 }
}
```

### 場景定義
```json
Scene {
  id: "ch1_s01",
  title: "早晨辦公室",
  background: "bg_office_morning",
  bgm: "bgm_daily_routine",
  segments: Segment[],
  checkpoint: true|false
}
```

### 存檔結構
```json
SaveData {
  current_chapter: string,
  current_scene: string,
  current_segment: int,
  arrogance_value: float,
  endure_state: EndureState,
  completed_chapters: string[],
  collected_cards: string[],
  total_playtime: int,
  ad_watches_today: int
}
```

---

## 4. MVP 內容量

| 章節 | 場景數 | 文字量 | 壞人事件 | 抽卡次數 | CG |
|------|--------|--------|----------|----------|-----|
| 序章 | 3 | ~8,000 字 | 2 | 1（教學）| 3 張 |
| Ch.1 | 5 | ~18,000 字 | 6 | 4 | 5 張 |
| Ch.2 | 5 | ~20,000 字 | 8 | 5 | 7 張 |
| **合計** | **13** | **~46,000 字** | **16** | **10** | **15 張** |

---

## 5. 迭代計畫

### MVP
- 3 章完整內容
- JSON 驅動
- 線性劇情（無分支）
- 存檔/讀檔

### V1.1
- 劇情分支（忍到底 vs 早打臉 = 不同結局）
- 章節評價（S/A/B/C）
- 重玩獎勵

### 未來
- 支線章節
- 每週更新新章節
- 玩家投票決定劇情走向
