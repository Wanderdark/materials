(() => {
window.LeagueListening = window.LeagueListening || {};

function getPlayableItems(items) {
  return (Array.isArray(items) ? items : []).filter((item) =>
    item?.status === "published" && item.videoSrc && item.transcript &&
    item.answerOptions?.length === 2 && item.answerOptions.every((option) => option.text) &&
    item.answerOptions.some((option) => option.id === item.correctOptionId)
  );
}

function createRandomItemPicker(items) {
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
        watched.clear();
        localStorage.removeItem(storageKey);
        pool = shuffle(playable);
      }
      const item = pool.pop() || null;
      if (item) {
        watched.add(item.id);
        localStorage.setItem(storageKey, JSON.stringify([...watched]));
      }
      return item;
    };
    pick.remove = (id) => { pool = pool.filter((item) => item.id !== id); };
    return pick;
  }
  const storageKey = "oliviasMovieMemoriesTeacherHistoryV1";
  const playable = getPlayableItems(items);
  const priorityItems = playable
    .filter((item) => Number.isInteger(Number(item.priority)) && Number(item.priority) > 0)
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
  if (availableRegularItems().length && availableRegularItems().every((item) => shown.has(item.id))) {
    shown.clear();
    saveHistory();
  }
  let priorityPool = priorityItems.filter((item) => !excluded.has(item.id) && !priorityShown.has(item.id));
  let pool = shuffle(availableRegularItems().filter((item) => !shown.has(item.id)));
  const refillRegularPool = () => {
    if (pool.length) return;
    shown.clear();
    saveHistory();
    pool = shuffle(availableRegularItems());
  };
  const pick = () => {
    const priorityItem = priorityPool.shift();
    if (priorityItem) {
      priorityShown.add(priorityItem.id);
      saveHistory();
      return priorityItem;
    }
    refillRegularPool();
    const item = pool.pop() || null;
    if (item) {
      shown.add(item.id);
      saveHistory();
    }
    return item;
  };

  pick.remove = (id) => {
    pool = pool.filter((item) => item.id !== id);
    priorityPool = priorityPool.filter((item) => item.id !== id);
    excluded.add(id);
    saveHistory();
  };
  pick.hasPendingPriority = () => priorityPool.length > 0;
  pick.availableCharacterIds = () => {
    refillRegularPool();
    return new Set(pool.flatMap((item) => Array.isArray(item.characterIds) ? item.characterIds : []));
  };
  pick.pickForCharacter = (characterId) => {
    refillRegularPool();
    const matchingItems = pool.filter((item) => item.characterIds?.includes(characterId));
    const item = matchingItems[Math.floor(Math.random() * matchingItems.length)] || null;
    if (!item) return null;
    pool = pool.filter((candidate) => candidate.id !== item.id);
    shown.add(item.id);
    saveHistory();
    return item;
  };

  return pick;
}

Object.assign(window.LeagueListening, { getPlayableItems, createRandomItemPicker });
})();
