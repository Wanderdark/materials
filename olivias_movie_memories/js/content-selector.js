(() => {
window.LeagueListening = window.LeagueListening || {};

function getPlayableItems(items) {
  return (Array.isArray(items) ? items : []).filter((item) =>
    item?.status === "published" && item.videoSrc && item.transcript &&
    item.answerOptions?.length === 2 && item.answerOptions.every((option) => option.text) &&
    item.answerOptions.some((option) => option.id === item.correctOptionId)
  );
}

function getVideoRating(item) {
  const rating = Number(item?.rating);
  return Number.isInteger(rating) && rating >= 1 && rating <= 10 ? rating : 1;
}
function createRandomItemPicker(items, options = {}) {
  if (window.__oliviasMovieMemoriesStudentMode) {
    const storageKey = "oliviasMovieMemoriesWatchedV1";
    const playable = getPlayableItems(items);
    const shuffle = (list) => {
      const shuffled = [...list];
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
      }
      return shuffled;
    };
    let watched = new Set();
    try { watched = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]")); } catch (_) {}
    if (playable.length && playable.every((item) => watched.has(item.id))) {
      watched.clear();
      localStorage.removeItem(storageKey);
    }
    let pool = shuffle(playable.filter((item) => !watched.has(item.id)));
    const pick = () => {
      if (!pool.length) {
        if (playable.length && playable.every((item) => watched.has(item.id))) {
          watched.clear();
          localStorage.removeItem(storageKey);
        }
        pool = shuffle(playable.filter((item) => !watched.has(item.id)));
      }
      const item = pool.pop() || null;
      return item;
    };
    pick.complete = (id) => {
      if (!playable.some((item) => item.id === id)) return;
      watched.add(id);
      pool = pool.filter((item) => item.id !== id);
      localStorage.setItem(storageKey, JSON.stringify([...watched]));
    };
    pick.remove = (id) => { pool = pool.filter((item) => item.id !== id); };
    return pick;
  }
  const storageKey = window.__oliviasMovieMemoriesFriendMode ? "oliviasMovieMemoriesFriendHistoryV1" : "oliviasMovieMemoriesTeacherHistoryV1";
  const friendMode = Boolean(window.__oliviasMovieMemoriesFriendMode);
  const selectedGrades = Array.isArray(options.grades) ? new Set(options.grades.map(Number)) : null;
  const playable = getPlayableItems(items).filter((item) => !selectedGrades || (Array.isArray(item.grades) && item.grades.some((grade) => selectedGrades.has(Number(grade)))));
  const priorityItems = playable
    .filter((item) => item.priority != null && String(item.priority).trim() !== "" && Number.isInteger(Number(item.priority)) && Number(item.priority) >= 0)
    .sort((left, right) => Number(left.priority) - Number(right.priority));
  const regularItems = playable.filter((item) => !priorityItems.includes(item));
  const shuffle = (list) => {
    const shuffled = [...list];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  };
  let shown = new Set();
  let priorityShown = new Set();
  let excluded = new Set();
  try {
    const history = JSON.parse(localStorage.getItem(storageKey) || "{}");
    shown = new Set(history.shown || []);
    priorityShown = new Set(history.priorityShown || []);
    excluded = new Set(history.excluded || []);
  } catch (_) {}
  const saveHistory = () => localStorage.setItem(storageKey, JSON.stringify({
    shown: [...shown],
    priorityShown: [...priorityShown],
    excluded: [...excluded]
  }));
  const availableRegularItems = () => regularItems.filter((item) => !excluded.has(item.id));
  const correctOptionMode = options.correctOption === true;
  const ratingSelectionEnabled = window.LeagueListening.GAME_CONFIG.characterRatingSelectionEnabled;
  const ratingScriptOrderEnabled = window.LeagueListening.GAME_CONFIG.teacherRatingScriptOrderEnabled === true;
  const orderRegularItems = (list) => ratingScriptOrderEnabled ? [...list].sort((left, right) => getVideoRating(right) - getVideoRating(left)) : selectedGrades ? shuffle(list).sort((left, right) => getVideoRating(right) - getVideoRating(left)) : shuffle(list);
  let selectedCharacterVideoId = null;
  const correctOptionScriptOrder = !selectedGrades && !ratingSelectionEnabled && !ratingScriptOrderEnabled;
  const trialItems = playable.filter((item) => window.LeagueListening.getCorrectOptionQuestions(item).length);
  const watched = (item) => shown.has(item.id) || priorityShown.has(item.id);
  const trialAvailable = () => trialItems.filter((item) => !excluded.has(item.id));
  const correctOptionPool = () => {
    const unused = trialAvailable().filter((item) => !watched(item));
    const regular = unused.filter((item) => !priorityItems.includes(item));
    return [...priorityItems.filter((item) => unused.includes(item)), ...(correctOptionScriptOrder ? regular : orderRegularItems(regular))];
  };
  if (correctOptionMode && trialAvailable().length && trialAvailable().every(watched)) {
    trialItems.forEach((item) => { shown.delete(item.id); priorityShown.delete(item.id); });
    saveHistory();
  }
  let priorityPool = priorityItems.filter((item) => !excluded.has(item.id) && !watched(item));
  let pool = correctOptionMode ? correctOptionPool() : orderRegularItems(availableRegularItems().filter((item) => !watched(item)));
  const refillRegularPool = () => {
    if (pool.length || priorityPool.length || correctOptionMode) return;
    const available = playable.filter((item) => !excluded.has(item.id));
    if (available.length && available.every(watched)) {
      playable.forEach((item) => { shown.delete(item.id); priorityShown.delete(item.id); });
      saveHistory();
    }
    priorityPool = priorityItems.filter((item) => !excluded.has(item.id) && !watched(item));
    pool = orderRegularItems(availableRegularItems().filter((item) => !watched(item)));
  };
  const refillCorrectOptionPool = () => {
      if (!pool.length) {
        if (trialAvailable().length && trialAvailable().every(watched)) {
          trialItems.forEach((item) => { shown.delete(item.id); priorityShown.delete(item.id); });
          saveHistory();
        }
        pool = correctOptionPool();
      }
  };
  const pick = () => {
    selectedCharacterVideoId = null;
    if (correctOptionMode) {
      refillCorrectOptionPool();
      const item = pool.shift() || null;
      return item;
    }
    refillRegularPool();
    const priorityItem = priorityPool.shift();
    if (priorityItem) {
      return priorityItem;
    }
    refillRegularPool();
    const item = (ratingScriptOrderEnabled || selectedGrades ? pool.shift() : pool.pop()) || null;
    return item;
  };

  pick.complete = (id) => {
    const item = playable.find((candidate) => candidate.id === id);
    if (!item || excluded.has(id)) return;
    if (selectedCharacterVideoId === id) {
      selectedCharacterVideoId = null;
      window.LeagueListening.recordCharacterVideoCompletion();
    }
    shown.add(id);
    if (priorityItems.includes(item)) priorityShown.add(id);
    pool = pool.filter((candidate) => candidate.id !== id);
    priorityPool = priorityPool.filter((candidate) => candidate.id !== id);
    saveHistory();
  };
  pick.remove = (id) => {
    if (selectedCharacterVideoId === id) selectedCharacterVideoId = null;
    pool = pool.filter((item) => item.id !== id);
    priorityPool = priorityPool.filter((item) => item.id !== id);
    excluded.add(id);
    saveHistory();
  };
  pick.hasPendingPriority = () => { if (correctOptionMode) { if (!ratingSelectionEnabled) return false; refillCorrectOptionPool(); return pool.some((item) => priorityItems.includes(item)); } refillRegularPool(); return priorityPool.length > 0; };
  pick.availableCharacterIds = () => {
    if (correctOptionMode) refillCorrectOptionPool(); else refillRegularPool();
    return new Set((friendMode ? [...priorityPool, ...pool] : pool).flatMap((item) => Array.isArray(item.characterIds) ? item.characterIds : []));
  };
  pick.pickForCharacter = (characterId) => {
    if (!friendMode && ratingSelectionEnabled && pick.hasPendingPriority()) return pick();
    if (correctOptionMode) refillCorrectOptionPool(); else refillRegularPool();
    const matchingItems = (friendMode ? [...new Set([...priorityPool, ...pool])] : pool).filter((item) => item.characterIds?.includes(characterId));
    const characterPriority = friendMode ? priorityItems.find((item) => matchingItems.includes(item)) : null;
    const highestRating = Math.max(...matchingItems.map(getVideoRating));
    const candidates = characterPriority ? [characterPriority] : ratingSelectionEnabled ? matchingItems.filter((item) => getVideoRating(item) === highestRating) : matchingItems;
    const item = candidates[Math.floor(Math.random() * candidates.length)] || null;
    if (!item) return null;
    selectedCharacterVideoId = item.id;
    window.LeagueListening.recordCharacterSelection(characterId);
    pool = pool.filter((candidate) => candidate.id !== item.id);
    if (friendMode) priorityPool = priorityPool.filter((candidate) => candidate.id !== item.id);
    return item;
  };

  if (options.omni) {
    const omniCandidates = (type) => {
      refillRegularPool();
      return [...priorityPool, ...pool].filter((item) => window.LeagueListening.canUseOmniType(item, type)).sort((left, right) => {
        const leftPriority = priorityItems.includes(left), rightPriority = priorityItems.includes(right);
        if (leftPriority || rightPriority) return leftPriority && rightPriority ? Number(left.priority) - Number(right.priority) : leftPriority ? -1 : 1;
        return getVideoRating(right) - getVideoRating(left) || playable.indexOf(left) - playable.indexOf(right);
      });
    };
    pick.availableQuestionTypes = () => ["translation", "word", "true-false"].filter((type) => omniCandidates(type).length);
    const takeOmniItem = (item) => {
      if (item) { pool = pool.filter((candidate) => candidate.id !== item.id); priorityPool = priorityPool.filter((candidate) => candidate.id !== item.id); }
      return item;
    };
    pick.hasPendingPriority = (type) => omniCandidates(type).some((item) => priorityItems.includes(item));
    pick.availableCharacterIds = (type) => new Set(omniCandidates(type).flatMap((item) => Array.isArray(item.characterIds) ? item.characterIds : []));
    pick.pickForQuestionType = (type) => {
      selectedCharacterVideoId = null;
      return takeOmniItem(omniCandidates(type)[0] || null);
    };
    pick.pickForCharacter = (characterId, type) => {
      if (!friendMode && pick.hasPendingPriority(type)) return pick.pickForQuestionType(type);
      const matching = omniCandidates(type).filter((item) => item.characterIds?.includes(characterId));
      if (!matching.length) return null;
      const characterPriority = friendMode ? priorityItems.find((item) => matching.includes(item)) : null;
      const highestRating = getVideoRating(matching[0]);
      const candidates = characterPriority ? [characterPriority] : ratingSelectionEnabled ? matching.filter((item) => getVideoRating(item) === highestRating) : matching;
      const item = candidates[Math.floor(Math.random() * candidates.length)];
      selectedCharacterVideoId = item.id;
      window.LeagueListening.recordCharacterSelection(characterId);
      return takeOmniItem(item);
    };
  }
  return pick;
}

Object.assign(window.LeagueListening, { getPlayableItems, createRandomItemPicker, getVideoRating });
})();
