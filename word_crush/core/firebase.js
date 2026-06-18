(function () {
  const FB_URL = 'https://word-overlord-default-rtdb.europe-west1.firebasedatabase.app';
  const GAME_KEY = 'word_gemoria';

  function genUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function ensureUUID() {
    const save = window.WordCrushProfile.getRawSave();
    if (!save.uuid) {
      window.WordCrushProfile.setAchievementField('uuid', genUUID());
      window.WordCrushProfile.store();
    }
    return save.uuid;
  }

  function submitScore() {
    const save = window.WordCrushProfile.getRawSave();
    const profile = window.WordCrushProfile.getProfile();
    if (!profile || !save.uuid) return;
    fetch(FB_URL + '/scores/' + GAME_KEY + '/' + save.uuid + '.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: profile.name,
        score: window.WordCrushProfile.playerScore(),
        updatedAt: Date.now()
      })
    }).catch(() => {});
  }

  let _lbReturn = 'hub';

  async function showLeaderboard(from) {
    _lbReturn = from || 'hub';
    ensureUUID();
    const save = window.WordCrushProfile.getRawSave();
    window.WordCrushScreens.showScreen('wc-leaderboard');
    const list = document.getElementById('wc-lb-list');
    const myRankEl = document.getElementById('wc-lb-myrank');
    list.innerHTML = '<div class="wo-lb-loading">LOADING...</div>';
    if (myRankEl) myRankEl.textContent = '';
    try {
      const res = await fetch(FB_URL + '/scores/' + GAME_KEY + '.json');
      const data = await res.json();
      if (!data) {
        list.innerHTML = '<div class="wo-lb-empty">NO SCORES YET — BE THE FIRST!</div>';
        return;
      }
      const entries = Object.entries(data)
        .map(([uid, v]) => ({ uid, name: v.name, score: v.score }))
        .filter(e => e.name && typeof e.score === 'number')
        .sort((a, b) => b.score - a.score);
      const myUid = save.uuid;
      const myIdx = entries.findIndex(e => e.uid === myUid);
      if (myRankEl) myRankEl.textContent = myIdx >= 0 ? `YOUR RANK: #${myIdx + 1} OF ${entries.length}` : 'NOT ON BOARD YET';
      list.innerHTML = entries.slice(0, 50).map((e, i) => {
        const isMe = e.uid === myUid;
        return `<div class="wo-lb-row${isMe ? ' wo-lb-me' : ''}">` +
          `<span class="wo-lb-num">#${i + 1}</span>` +
          `<span class="wo-lb-name">${e.name}</span>` +
          `<span class="wo-lb-score">${e.score.toLocaleString()}</span>` +
          `</div>`;
      }).join('');
    } catch (_) {
      list.innerHTML = '<div class="wo-lb-error">⚠ CONNECTION ERROR</div>';
    }
  }

  function leaderboardBack() {
    if (_lbReturn === 'profile') window.WordCrushProfile.showProfile();
    else window.WordCrushProfile.showHub();
  }

  window.WordCrushFirebase = { ensureUUID, submitScore, showLeaderboard, leaderboardBack };
})();
