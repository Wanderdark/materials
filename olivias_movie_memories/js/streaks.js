(() => {
window.LeagueListening = window.LeagueListening || {};

function applyListeningStreak(state, result) {
  const group = state?.groups?.[state.groupIndex];
  if (!group || !result) return { streak: 0, bonusPoints: 0, freeJoker: false };
  if (!result.correct) {
    group.streak = 0;
    return { streak: 0, bonusPoints: 0, freeJoker: false };
  }
  group.streak = (group.streak || 0) + 1;
  let bonusPoints = 0;
  let freeJoker = false;
  if (group.streak === window.LeagueListening.GAME_CONFIG.streak.bonusAt) {
    bonusPoints = window.LeagueListening.GAME_CONFIG.streak.bonusPoints;
    group.score += bonusPoints;
  }
  if (group.streak === window.LeagueListening.GAME_CONFIG.streak.jokerAt) {
    freeJoker = window.LeagueListening.grantFreeJoker(state, state.groupIndex);
  }
  return { streak: group.streak, bonusPoints, freeJoker };
}

Object.assign(window.LeagueListening, { applyListeningStreak });
})();
