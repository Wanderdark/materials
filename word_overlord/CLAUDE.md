# Word Overlord — Geliştirici Kuralları

## Proje Konumu
`F:\oyun_sitesi\word_overlord\`

Ana dosyalar: `index.html`, `prototype.js`, `prototype.css`, `level-config.js`, `question-bank.js`, `questions.js`

---

## KRİTİK: window.WO export kuralı
prototype.js içinde HTML `onclick` ile çağrılan her fonksiyon `window.WO = {...}` objesine eklenmelidir.
Yeni fonksiyon yazıldığında **mutlaka** WO objesini güncelle. Bu en sık yapılan hatadır.

Şu an WO objesinde olması gerekenler (eksik bırakma):
`menu, newGame, confirmNewGame, grade, avatar, confirmNew, continueGame, campaigns, profile, completedCampaigns, enterCampaign, levels, selectLevel, startSelectedLevel, openResetCampaign, confirmResetCampaign, achievements, closeAchievements, claimAchievement, filterAchievements, begin, retry, openSettings, setLite, closeSettings, complete, abandon, closeBadgeReveal, earnedBadges`

```js
// prototype.js sonunda:
window.WO = { ..., yeniFonksiyon };
```

---

## KRİTİK: Cross-file global erişim
prototype.js, index.html'deki `let` değişkenlerine `window.X` olarak **erişemez** — `let` window'a bind olmaz, sadece `var` olur.
index.html'de expose etmek için getter yaz:

```js
// index.html'de:
let timeLeft = 0;
window.getWOTimeLeft = () => timeLeft;  // ← böyle

// prototype.js'de:
let tl = typeof window.getWOTimeLeft === 'function' ? window.getWOTimeLeft() : 0;
```

---

## Puan Mimarisi

| Kaynak | Havuz | Not |
|--------|-------|-----|
| Doğru cevap | `run.score` → `campaignScores[level]` | Level skoru |
| Wheel bonusu | `save.achievementScore` | groupScores delta |
| Joker bonusu | `save.achievementScore` | `run.jokers × 200`, finish()'te |
| Time bonusu | `save.achievementScore` | `run.savedTime × 1`, finish()'te |
| Lives bonusu | `save.achievementScore` | `run.lives × 300`, finish()'te |
| Achievement ödülü | `save.achievementScore` | claim'de eklenir |

`playerScore()` = tüm campaignScores toplamı + achievementScore

**wheel bonusu asla run.score'a gitmez.**

---

## Yıldız Sistemi

`TARGET` array yok. Her campaign kendi `starThresholds: [t1, t2, t3]` taşır.

```js
// calcTheoreticalMax(level, campaign) — soru seçilmeden hesaplanır
// LENGTH_CURVE × DIFFICULTY_RECIPES → pts[diff] + len×100 toplamı
```

3★ koşulu: `score >= max×t3 && wrong <= 1`

| Campaign | Thresholds |
|----------|-----------|
| newcomer | [0.50, 0.65, 0.80] |
| veteran  | [0.60, 0.75, 0.90] |
| animals  | [0.65, 0.80, 0.95] |
| tourism  | [0.65, 0.80, 0.95] |

HUD bar marker pozisyonları `hud()` içinde dinamik set edilir — CSS'e sabit yazma.

---

## Campaign Unlock Sistemi

`CAMPAIGNS[id].unlockRequires = 'campaignId'` → `campaigns()` fonksiyonu bu alanı okur.
Kilitli kart: `disabled`, `filter:grayscale`, `wo-campaign-lock-badge` görünür.
Yeni campaign eklenince `levels()` içindeki `*-theme` toggle'ını da ekle.

---

## Achievement Zinciri (Chain) Sistemi

- `chain` property: bu achievement claim edilince bir sonraki görünür hale gelir
- `isVisible(a)`: predecessor claim edilmişse true
- `chainStartStats[nextId]`: predecessor claim anında stat snapshot — sonraki halkanın progress'i buradan başlar
- `achievementStatsFor(a)`: baseline çıkartılmış stat döndürür; `unlockAchievements` ve `renderAchievementGrid` bunu kullanır
- `unlockAchievements()`: `isVisible(a)` kontrolü zorunlu — predecessor claim edilmeden sonraki halka unlock edilemez
- `renderAchievementGrid()`: non-visible achievement için `pct=0` — progress gösterilmez

**Zincir sonu achievement'ların badge'i olmalıdır** (yoksa uyar).

---

## Müzik Volume

`getConfiguredMusicVolume(base)` → `window.getWordOverlordMusicVolume()` × base kullanır.
Bu fonksiyon prototype.js'de tanımlıdır:

```js
window.getWordOverlordMusicVolume = () => (Number(save?.musicVolume ?? 100) / 100);
```

Yeni müzik track'i başlatılırken bu fonksiyon çağrılır — ayar override olmaz.

---

## Wheel Bonusları

| Segment | Flag | Etki |
|---------|------|------|
| EXTRA_LIFE | `window._wordOverlordExtraLife` | `run.lives++` (cap yok) |
| TIME_WARP (+30s) | `window._wordOverlordTimeBoost` | `openQuestion()`'da sec+30 |
| FLAWLESS STREAK GUARD | `window._wheelFlawlessGuard` | `complete()`'de ilk harf affedilir |
| BONUS_250 | — | groupScores delta → achievementScore |
| JOKER_FLOOD | — | groupScores delta → achievementScore |
| MATCH_SYN/OPP | — | groupScores delta → achievementScore |

Wheel kapanınca `_wordOverlordWheelCloseHandler` çalışır: groupScores[0] - run.score deltası achievementScore'a gider, run.score değişmez.

---

## Performans Kuralları (Smartboard ortamı)

- `animation`, `backdrop-filter`, `filter`, `will-change` başlangıç CSS'ine yazılmaz — sadece `.active` class ile devreye girer
- `filter:blur()` mümkünse kullanma
- `backdrop-filter` sadece `.active` ile
- Particle/star sistemlerinde `liteMode` toggle zorunlu
- Sürekli `requestAnimationFrame` oyun aktif değilken durdurulmalı
