(function () {
  const WC_ACHIEVEMENTS = [
    // ── MILESTONES
    { id: 'first_step', icon: '⚔', name: 'FIRST STEP', desc: 'Complete your first campaign level.', reward: 500, test: s => s.completedLevels >= 1, progress: s => [s.completedLevels, 1], chain: 'next_step' },
    { id: 'next_step', icon: '⚔', name: 'NEXT STEP', desc: 'Complete 5 campaign levels.', reward: 1500, test: s => s.completedLevels >= 5, progress: s => [s.completedLevels, 5], chain: 'final_step' },
    { id: 'final_step', icon: '⚔', name: 'FINAL STEP', desc: 'Complete all 10 campaign levels.', reward: 3000, test: s => s.completedLevels >= 10, progress: s => [s.completedLevels, 10], badge: 'finalstep' },

    // ── STAR COLLECTION — total stars
    { id: 'star_student', icon: '★', name: 'STAR STUDENT', desc: 'Collect 5 stars.', reward: 1000, test: s => s.totalStars >= 5, progress: s => [s.totalStars, 5], chain: 'star_lord' },
    { id: 'star_lord', icon: '✦', name: 'STAR LORD', desc: 'Collect 15 stars.', reward: 2500, test: s => s.totalStars >= 15, progress: s => [s.totalStars, 15], chain: 'star_overlord' },
    { id: 'star_overlord', icon: '✦', name: 'STAR OVERLORD', desc: 'Collect all 30 stars — perfect campaign.', reward: 5000, test: s => s.totalStars >= 30, progress: s => [s.totalStars, 30], badge: 'star' },

    // ── STAR COLLECTION — 3-star levels
    { id: 'perfection', icon: '◆', name: '3-STAR ACHIEVER', desc: 'Earn 3 stars on a level.', reward: 1500, test: s => s.threeStarLevels >= 1, progress: s => [s.threeStarLevels, 1], chain: 'three_star_addiction' },
    { id: 'three_star_addiction', icon: '◆', name: '3-STAR ADDICTION', desc: 'Earn 3 stars on 3 different levels.', reward: 5000, test: s => s.threeStarLevels >= 3, progress: s => [s.threeStarLevels, 3], chain: 'three_star_obsession' },
    { id: 'three_star_obsession', icon: '◆', name: '3-STAR OBSESSION', desc: 'Earn 3 stars on 8 levels.', reward: 10000, test: s => s.threeStarLevels >= 8, progress: s => [s.threeStarLevels, 8], badge: 'perfection' },

    // ── COMBO MASTER
    { id: 'combo_beginner', icon: '⚡', name: 'COMBO BEGINNER', desc: 'Reach a combo chain of 3 in a single run.', reward: 1000, test: s => s.bestStreak >= 3, progress: s => [s.bestStreak, 3], chain: 'combo_apprentice' },
    { id: 'combo_apprentice', icon: '⚡', name: 'COMBO APPRENTICE', desc: 'Reach a combo chain of 5 in a single run.', reward: 2500, test: s => s.bestStreak >= 5, progress: s => [s.bestStreak, 5], chain: 'combo_overlord' },
    { id: 'combo_overlord', icon: '💎', name: 'COMBO OVERLORD', desc: 'Reach a combo chain of 10 in a single run.', reward: 5000, test: s => s.bestStreak >= 10, progress: s => [s.bestStreak, 10], badge: 'combo' },

    // ── SCORE HUNTER
    { id: 'rising_star', icon: '✶', name: 'RISING STAR', desc: 'Accumulate a total score of 10,000.', reward: 1500, test: s => s.score >= 10000, progress: s => [Math.min(s.score, 10000), 10000], chain: 'score_baron' },
    { id: 'score_baron', icon: '✶', name: 'SCORE BARON', desc: 'Accumulate a total score of 50,000.', reward: 3000, test: s => s.score >= 50000, progress: s => [Math.min(s.score, 50000), 50000], chain: 'crush_legend' },
    { id: 'crush_legend', icon: '♚', name: 'CRUSH LEGEND', desc: 'Accumulate a total score of 150,000.', reward: 8000, test: s => s.score >= 150000, progress: s => [Math.min(s.score, 150000), 150000], badge: 'overlord' },

    // ── DEDICATION — word matches
    { id: 'answer_machine', icon: '◈', name: 'WORD MATCHER', desc: 'Match 100 words.', reward: 1500, test: s => s.totalCorrect >= 100, progress: s => [s.totalCorrect, 100], chain: 'quiz_master' },
    { id: 'quiz_master', icon: '◈', name: 'QUIZ MASTER', desc: 'Match 300 words.', reward: 5000, test: s => s.totalCorrect >= 300, progress: s => [s.totalCorrect, 300], chain: 'trivia_legend' },
    { id: 'trivia_legend', icon: '◈', name: 'TRIVIA LEGEND', desc: 'Match 750 words.', reward: 10000, test: s => s.totalCorrect >= 750, progress: s => [s.totalCorrect, 750], badge: 'quizmaster' },

    // ── PERFECT CLEAR
    { id: 'clean_sweep', icon: '◉', name: 'CLEAN SWEEP', desc: 'Complete a board without any wrong matches.', reward: 1500, test: s => s.perfectRuns >= 1, progress: s => [s.perfectRuns, 1], chain: 'iron_crusher' },
    { id: 'iron_crusher', icon: '◉', name: 'IRON CRUSHER', desc: 'Complete 5 boards without any wrong matches.', reward: 5000, test: s => s.perfectRuns >= 5, progress: s => [s.perfectRuns, 5], chain: 'crystal_crusher' },
    { id: 'crystal_crusher', icon: '💠', name: 'CRYSTAL CRUSHER', desc: 'Complete 15 boards without any wrong matches.', reward: 10000, test: s => s.perfectRuns >= 15, progress: s => [s.perfectRuns, 15], badge: 'crystal' },

    // ── DAILY BOARD
    { id: 'daily_starter', icon: '📅', name: 'DAILY STARTER', desc: 'Complete your first Daily Board.', reward: 500, test: s => s.dailyBoardsCompleted >= 1, progress: s => [s.dailyBoardsCompleted, 1], chain: 'daily_devotee' },
    { id: 'daily_devotee', icon: '📅', name: 'DAILY DEVOTEE', desc: 'Complete 7 Daily Boards.', reward: 2000, test: s => s.dailyBoardsCompleted >= 7, progress: s => [s.dailyBoardsCompleted, 7], chain: 'daily_legend' },
    { id: 'daily_legend', icon: '🗓️', name: 'DAILY LEGEND', desc: 'Complete 30 Daily Boards.', reward: 5000, test: s => s.dailyBoardsCompleted >= 30, progress: s => [s.dailyBoardsCompleted, 30], badge: 'daily' },
  ];

  const WC_ACHIEVEMENT_GROUPS = [
    { id: 'milestones', icon: '⚔', label: 'MILESTONES', ids: ['first_step', 'next_step', 'final_step'] },
    { id: 'star_collection', icon: '★', label: 'STAR COLLECTION', ids: ['star_student', 'star_lord', 'star_overlord', 'perfection', 'three_star_addiction', 'three_star_obsession'] },
    { id: 'combo_master', icon: '⚡', label: 'COMBO MASTER', ids: ['combo_beginner', 'combo_apprentice', 'combo_overlord'] },
    { id: 'score_hunter', icon: '✶', label: 'SCORE HUNTER', ids: ['rising_star', 'score_baron', 'crush_legend'] },
    { id: 'dedication', icon: '◈', label: 'DEDICATION', ids: ['answer_machine', 'quiz_master', 'trivia_legend'] },
    { id: 'perfect_run', icon: '◉', label: 'PERFECT CLEAR', ids: ['clean_sweep', 'iron_crusher', 'crystal_crusher'] },
    { id: 'daily_board', icon: '📅', label: 'DAILY BOARD', ids: ['daily_starter', 'daily_devotee', 'daily_legend'] },
  ];

  let _achGroup = null;
  let _achReturn = 'hub';
  let _newlyRevealedId = null;
  let _dirty = false;

  // ── STATS ─────────────────────────────────────────────

  function achStats() {
    const save = window.WordCrushProfile.getRawSave();
    const stats = save.stats || {};
    const campaignLevels = Object.values((save.campaign || {}).levels || {});
    return {
      completedLevels: campaignLevels.filter(l => l.completed).length,
      totalStars: campaignLevels.reduce((sum, l) => sum + (Number(l.stars) || 0), 0),
      threeStarLevels: campaignLevels.filter(l => Number(l.stars) >= 3).length,
      bestStreak: Number(stats.bestStreak) || 0,
      score: window.WordCrushProfile.playerScore(),
      totalCorrect: Number(stats.totalCorrect) || 0,
      perfectRuns: Number(stats.perfectRuns) || 0,
      dailyBoardsCompleted: Number(stats.dailyBoardsCompleted) || 0,
    };
  }

  function achStatsFor(a) {
    const stats = achStats();
    const save = window.WordCrushProfile.getRawSave();
    const baseline = (save.chainStartStats || {})[a.id];
    if (!baseline) return stats;
    const adj = { ...stats };
    for (const k in baseline) {
      if (typeof adj[k] === 'number' && typeof baseline[k] === 'number') {
        adj[k] = Math.max(0, adj[k] - baseline[k]);
      }
    }
    return adj;
  }

  // ── UNLOCK LOGIC ──────────────────────────────────────

  function isVisible(a) {
    const save = window.WordCrushProfile.getRawSave();
    const pred = WC_ACHIEVEMENTS.find(x => x.chain === a.id);
    return !pred || (save.claimedAchievements || []).includes(pred.id);
  }

  function unlockAchievements() {
    const save = window.WordCrushProfile.getRawSave();
    const prev = new Set(save.unlockedAchievements || []);
    const claimed = new Set(save.claimedAchievements || []);
    const unlocked = new Set(prev);

    WC_ACHIEVEMENTS.forEach(a => {
      if (isVisible(a) && a.test(achStatsFor(a))) unlocked.add(a.id);
    });

    window.WordCrushProfile.setAchievementField('unlockedAchievements', [...unlocked]);

    [...unlocked].filter(id => !prev.has(id) && !claimed.has(id)).forEach((id, i) => {
      const a = WC_ACHIEVEMENTS.find(x => x.id === id);
      if (a) setTimeout(() => window.ToastManager && window.ToastManager.show(`🏆 ${a.name} · READY TO CLAIM`), i * 600);
    });
  }

  // ── RENDER ────────────────────────────────────────────

  function renderGrid() {
    const rid = _newlyRevealedId; _newlyRevealedId = null;
    const save = window.WordCrushProfile.getRawSave();
    const g = WC_ACHIEVEMENT_GROUPS.find(x => x.id === _achGroup);
    const ids = new Set(g ? g.ids : []);
    const unlocked = new Set(save.unlockedAchievements || []);
    const claimed = new Set(save.claimedAchievements || []);

    document.getElementById('wc-ach-tabs').innerHTML = WC_ACHIEVEMENT_GROUPS.map(x => {
      const hasNew = x.ids.some(id => unlocked.has(id) && !claimed.has(id));
      return `<button class="wo-ach-tab${_achGroup === x.id ? ' active' : ''}" onclick="WCAchievements.filterGroup('${x.id}')">${hasNew ? '<span class="wo-ach-tab-new">NEW</span>' : ''}${x.icon} ${x.label}</button>`;
    }).join('');

    document.getElementById('wc-ach-grid').innerHTML = WC_ACHIEVEMENTS.filter(a => ids.has(a.id)).map(a => {
      const ready = unlocked.has(a.id);
      const done = claimed.has(a.id);
      const visible = isVisible(a);
      const as = achStatsFor(a);
      const [value, target] = a.progress(as);
      const pct = ready ? 100 : !visible ? 0 : Math.min(100, Math.round(value / target * 100));
      const isNew = a.id === rid;
      const stateClass = done ? 'claimed' : ready ? 'unlocked' : visible ? 'in-progress' : 'prereq-locked';
      return `<article data-id="${a.id}" class="wo-achievement ${stateClass}${isNew ? ' wo-achievement-new' : ''}">
        <div class="wo-achievement-icon">${a.icon}</div>
        <div class="wo-achievement-copy">
          <h3>${a.name}</h3>
          <p>${a.desc}</p>
          <div class="wo-achievement-progress"><i style="width:${pct}%"></i></div>
          <small>${ready ? target : Math.min(value, target)}/${target}</small>
        </div>
        <div class="wo-achievement-reward">
          <strong>+${a.reward}</strong><span>SCORE</span>
          ${done
            ? '<button disabled>CLAIMED ✓</button>'
            : ready
              ? `<button onclick="WCAchievements.claim('${a.id}')">CLAIM</button>`
              : visible
                ? '<button disabled>IN PROGRESS</button>'
                : '<button disabled>LOCKED</button>'}
        </div>
      </article>`;
    }).join('');
  }

  // ── PUBLIC API ────────────────────────────────────────

  function show(from = 'hub') {
    _achReturn = from;
    if (!_achGroup) _achGroup = WC_ACHIEVEMENT_GROUPS[0].id;
    unlockAchievements();
    window.WordCrushProfile.store();
    const scoreEl = document.getElementById('wc-ach-score');
    if (scoreEl) scoreEl.textContent = window.WordCrushProfile.playerScore();
    renderGrid();
    window.WordCrushScreens.showScreen('wc-achievements');
  }

  function close() {
    _dirty = false;
    if (_achReturn === 'profile') window.WordCrushProfile.showProfile();
    else window.WordCrushProfile.showHub();
  }

  function filterGroup(id) {
    _achGroup = id;
    renderGrid();
  }

  function claim(id) {
    unlockAchievements();
    const save = window.WordCrushProfile.getRawSave();
    const a = WC_ACHIEVEMENTS.find(x => x.id === id);
    if (!a || (save.claimedAchievements || []).includes(id) || !(save.unlockedAchievements || []).includes(id)) return;

    window.WordCrushProfile.setAchievementField('claimedAchievements', [...(save.claimedAchievements || []), id]);
    window.WordCrushProfile.setAchievementField('achievementScore', (Number(save.achievementScore) || 0) + a.reward);
    _dirty = true;

    if (a.chain) {
      const chainStart = { ...(save.chainStartStats || {}) };
      chainStart[a.chain] = achStats();
      window.WordCrushProfile.setAchievementField('chainStartStats', chainStart);
      _newlyRevealedId = a.chain;
    }

    window.WordCrushProfile.store();

    try { const audio = new Audio('sounds/star.mp3'); audio.volume = 0.8; audio.play().catch(() => {}); } catch (e) {}

    if (a.badge) {
      showBadgeReveal(a);
    } else {
      if (window.ToastManager) window.ToastManager.show(`ACHIEVEMENT CLAIMED · +${a.reward} SCORE`);
      show(_achReturn);
    }
  }

  function showBadgeReveal(a) {
    const img = document.getElementById('wc-badge-reveal-img');
    if (img) img.src = 'badges/' + a.badge + '.webp';
    document.getElementById('wc-badge-reveal').classList.add('open');
    if (window.ToastManager) window.ToastManager.show(`ACHIEVEMENT CLAIMED · +${a.reward} SCORE`);
  }

  function closeBadgeReveal() {
    document.getElementById('wc-badge-reveal').classList.remove('open');
    show(_achReturn);
  }

  function earnedBadges() {
    const save = window.WordCrushProfile.getRawSave();
    const claimed = save.claimedAchievements || [];
    const earned = WC_ACHIEVEMENTS.filter(a => a.badge && claimed.includes(a.id));
    document.getElementById('wc-badges-grid').innerHTML = earned.length
      ? earned.map(a => `<div class="wo-badge-item"><img src="badges/${a.badge}.webp" alt="${a.name}"><span>${a.name}</span></div>`).join('')
      : '<div class="wo-badges-empty">NO BADGES YET</div>';
    window.WordCrushScreens.showScreen('wc-badges');
  }

  function badgeCount() {
    const save = window.WordCrushProfile.getRawSave();
    const claimed = save.claimedAchievements || [];
    const earned = WC_ACHIEVEMENTS.filter(a => a.badge && claimed.includes(a.id)).length;
    const total = WC_ACHIEVEMENTS.filter(a => a.badge).length;
    return { earned, total };
  }

  function achievementCount() {
    const save = window.WordCrushProfile.getRawSave();
    const claimed = save.claimedAchievements || [];
    return { earned: claimed.length, total: WC_ACHIEVEMENTS.length };
  }

  function checkAndNotify() {
    if (!window.WordCrushProfile.getProfile()) return;
    unlockAchievements();
    window.WordCrushProfile.store();
    updateHubGlow();
  }

  function updateHubGlow() {
    const btn = document.getElementById('achievements-btn');
    if (!btn) return;
    const save = window.WordCrushProfile.getRawSave();
    const unlocked = save.unlockedAchievements || [];
    const claimed = new Set(save.claimedAchievements || []);
    const hasClaimable = unlocked.some(id => !claimed.has(id));
    btn.classList.toggle('hub-chart-glow', hasClaimable);
  }

  window.WCAchievements = {
    show,
    close,
    filterGroup,
    claim,
    closeBadgeReveal,
    earnedBadges,
    badgeCount,
    achievementCount,
    checkAndNotify,
    updateHubGlow,
  };
})();
