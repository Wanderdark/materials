(() => {
window.LeagueListening = window.LeagueListening || {};
const JOKER_TYPES = Object.freeze(["echo", "timeFreeze", "doubleOrNothing", "slowTime"]);

function createJokerState() {
  return { remaining: window.__oliviasMovieMemoriesFriendMode ? 1 : window.LeagueListening.GAME_CONFIG.jokersPerRound, used: [] };
}

function activeJokerState(state) { return state?.groups?.[state.groupIndex]?.jokers || null; }

function canUseJoker(state, type) {
  const jokers = activeJokerState(state);
  return Boolean(jokers && JOKER_TYPES.includes(type) && jokers.remaining > 0);
}

function consumeJoker(state, type) {
  if (!canUseJoker(state, type)) return false;
  const jokers = activeJokerState(state);
  jokers.remaining -= 1;
  jokers.used.push(type);
  return true;
}

function grantFreeJoker(state, groupIndex = state?.groupIndex) {
  if (window.__oliviasMovieMemoriesFriendMode) return false;
  const jokers = state?.groups?.[groupIndex]?.jokers;
  if (!jokers) return false;
  jokers.remaining += 1;
  return true;
}

function resetRoundJokers(state) {
  if (window.__oliviasMovieMemoriesFriendMode && (state.round - 1) % 5 !== 0) return;
  state?.groups?.forEach((group) => { group.jokers = createJokerState(); });
}

Object.assign(window.LeagueListening, { JOKER_TYPES, activeJokerState, canUseJoker, consumeJoker, createJokerState, grantFreeJoker, resetRoundJokers });
})();
