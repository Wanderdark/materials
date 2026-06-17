// sp_campaigns.js — Word Reveal SP — Campaign & Level Yapısı
// ════════════════════════════════════════════════════════════════════════════
//
// Her campaign 50 kelime × 5 level (10 kelime/level) şeklinde tasarlandı.
// Appearance kampanyası 54 kelimeye sahip olduğundan 6 level × 9 kelime.
//
// Kelime sıralaması: SP_WORDS içinde her kategori grade 1→2→3 sırasında.
// Oyun, level N için o kategorinin (N-1)*wordsPerLevel → N*wordsPerLevel
// aralığındaki kelimeleri alır. Bu sıralama level zorluğunu otomatik artırır.
//
// Level zorluk tablosu:
//   Level 1 → revealTime:35s  jokers:2  lives:3  (kolay başlangıç)
//   Level 2 → revealTime:30s  jokers:2  lives:3
//   Level 3 → revealTime:24s  jokers:1  lives:3  (orta)
//   Level 4 → revealTime:18s  jokers:1  lives:3
//   Level 5 → revealTime:13s  jokers:0  lives:3  (uzman)
//
// Yıldız eşikleri (score / teorik max):
//   1★ → %50+    2★ → %65+    3★ → %80+ ve wrong ≤ 1
//
// ════════════════════════════════════════════════════════════════════════════

window.SP_CAMPAIGNS = [
  {
    id: 'animals',
    catId: 11,
    name: '🐾 Animals',
    label: 'Suitable for grades 6–7–8',
    thumb: null,
    wordsPerLevel: 10,
    starThresholds: [0.50, 0.65, 0.80],
    unlockRequires: null,
    levels: [
      { revealTime: 35, jokers: 2, lives: 3 },
      { revealTime: 30, jokers: 2, lives: 3 },
      { revealTime: 24, jokers: 1, lives: 3 },
      { revealTime: 18, jokers: 1, lives: 3 },
      { revealTime: 13, jokers: 0, lives: 3 },
    ],
  },
  {
    id: 'food',
    catId: 12,
    name: '🍔 Food & Drinks',
    label: 'Suitable for grades 6–7–8',
    thumb: null,
    wordsPerLevel: 10,
    starThresholds: [0.50, 0.65, 0.80],
    unlockRequires: null,
    levels: [
      { revealTime: 35, jokers: 2, lives: 3 },
      { revealTime: 30, jokers: 2, lives: 3 },
      { revealTime: 24, jokers: 1, lives: 3 },
      { revealTime: 18, jokers: 1, lives: 3 },
      { revealTime: 13, jokers: 0, lives: 3 },
    ],
  },
  {
    id: 'appearance',
    catId: 13,
    name: '👤 Appearance & Personality',
    label: 'Suitable for grades 7–8',
    thumb: null,
    wordsPerLevel: 9,     // 54 kelime ÷ 6 level = 9
    starThresholds: [0.55, 0.70, 0.85],
    unlockRequires: null,
    levels: [
      { revealTime: 35, jokers: 2, lives: 3 },
      { revealTime: 30, jokers: 2, lives: 3 },
      { revealTime: 24, jokers: 1, lives: 3 },
      { revealTime: 20, jokers: 1, lives: 3 },
      { revealTime: 15, jokers: 1, lives: 3 },
      { revealTime: 12, jokers: 0, lives: 3 },
    ],
  },
  {
    id: 'sports',
    catId: 14,
    name: '⚽ Sports & Equipment',
    label: 'Suitable for grades 6–7–8',
    thumb: null,
    wordsPerLevel: 10,
    starThresholds: [0.50, 0.65, 0.80],
    unlockRequires: null,
    levels: [
      { revealTime: 35, jokers: 2, lives: 3 },
      { revealTime: 30, jokers: 2, lives: 3 },
      { revealTime: 24, jokers: 1, lives: 3 },
      { revealTime: 18, jokers: 1, lives: 3 },
      { revealTime: 13, jokers: 0, lives: 3 },
    ],
  },
  {
    id: 'places',
    catId: 15,
    name: '🏙️ Places in Town',
    label: 'Suitable for grades 6–7–8',
    thumb: null,
    wordsPerLevel: 10,
    starThresholds: [0.50, 0.65, 0.80],
    unlockRequires: null,
    levels: [
      { revealTime: 35, jokers: 2, lives: 3 },
      { revealTime: 30, jokers: 2, lives: 3 },
      { revealTime: 24, jokers: 1, lives: 3 },
      { revealTime: 18, jokers: 1, lives: 3 },
      { revealTime: 13, jokers: 0, lives: 3 },
    ],
  },
  {
    id: 'occupations',
    catId: 16,
    name: '💼 Occupations',
    label: 'Suitable for grades 6–7–8',
    thumb: null,
    wordsPerLevel: 10,
    starThresholds: [0.55, 0.70, 0.85],
    unlockRequires: null,
    levels: [
      { revealTime: 35, jokers: 2, lives: 3 },
      { revealTime: 30, jokers: 2, lives: 3 },
      { revealTime: 24, jokers: 1, lives: 3 },
      { revealTime: 18, jokers: 1, lives: 3 },
      { revealTime: 13, jokers: 0, lives: 3 },
    ],
  },
];

// ── Yardımcı: Belirtilen campaign & level için kelimeleri döndürür ─────────
// Grade-bucket sistemi: erken level'lar grade1-ağırlıklı, geç level'lar grade3-ağırlıklı.
// Her level için hedef oran: g1: 0.70→0.05, g3: 0.05→0.75 (quadratic), g2: kalan.
// Starvation önlemi: hiçbir grade için fair-share'in 2.5×'inden fazlası alınmaz.
window.SP_getWordsForLevel = function(campaignId, levelIndex) {
  const campaign = window.SP_CAMPAIGNS.find(c => c.id === campaignId);
  if (!campaign) return [];

  const catWords = (window.SP_WORDS || []).filter(w => w[4] === campaign.catId);
  const pools = [
    catWords.filter(w => w[3] === 1),
    catWords.filter(w => w[3] === 2),
    catWords.filter(w => w[3] === 3),
  ];

  const L = campaign.levels.length;
  const W = campaign.wordsPerLevel;
  const ptrs = [0, 0, 0];

  for (let lv = 0; lv < L; lv++) {
    const t  = L > 1 ? lv / (L - 1) : 0;
    const rem = L - lv;
    const avail = pools.map((p, gi) => p.length - ptrs[gi]);

    // Hedef oranlar
    const p1 = Math.max(0, 0.70 - 0.65 * t);
    const p3 = Math.max(0, 0.05 * t + 0.70 * t * t);
    const p2 = Math.max(0, 1 - p1 - p3);

    // Starvation cap: fair-share'in 2.5×'i kadar alabiliriz
    const take = [p1, p2, p3].map((p, gi) => {
      const cap = Math.min(avail[gi], Math.ceil(avail[gi] / rem * 2.5));
      return Math.min(Math.round(W * p), cap);
    });

    // Toplam W'ye tamamla
    let sum = take.reduce((a, b) => a + b, 0);
    const fill = t < 0.5 ? [0, 1, 2] : [2, 1, 0]; // erken→g1, geç→g3
    const trim = t < 0.5 ? [2, 1, 0] : [0, 1, 2];
    while (sum < W) {
      let ok = false;
      for (const gi of fill) {
        const cap = Math.min(avail[gi], Math.ceil(avail[gi] / rem * 2.5));
        if (take[gi] < cap) { take[gi]++; sum++; ok = true; break; }
      }
      if (!ok) break;
    }
    while (sum > W) {
      for (const gi of trim) {
        if (take[gi] > 0) { take[gi]--; sum--; break; }
      }
    }

    if (lv === levelIndex) {
      return [
        ...pools[0].slice(ptrs[0], ptrs[0] + take[0]),
        ...pools[1].slice(ptrs[1], ptrs[1] + take[1]),
        ...pools[2].slice(ptrs[2], ptrs[2] + take[2]),
      ];
    }
    ptrs[0] += take[0]; ptrs[1] += take[1]; ptrs[2] += take[2];
  }
  return [];
};

// ── Teorik maksimum puan hesabı (yıldız eşiği için) ──────────────────────
// Bir kelime: başlangıçta 100 puan, TYPE modunda 2× çarpan → max 200/kelime
// Joker kullanılmadan, perfect run: wordsPerLevel × 200
// Bu fonksiyon yıldız barını render etmek için sp.html'de kullanılacak.
window.SP_calcTheoreticalMax = function(campaignId, levelIndex) {
  const campaign = window.SP_CAMPAIGNS.find(c => c.id === campaignId);
  if (!campaign) return 0;
  return campaign.wordsPerLevel * 200;
};
