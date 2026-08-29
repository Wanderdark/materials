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
  const shuffle = (list) => {
    const shuffled = [...list];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  };
  let shown = new Set();
  let excluded = new Set();
  try {
    const history = JSON.parse(localStorage.getItem(storageKey) || "{}");
    shown = new Set(history.shown || []);
    excluded = new Set(history.excluded || []);
  } catch (_) {}
  const saveHistory = () => localStorage.setItem(storageKey, JSON.stringify({
    shown: [...shown],
    excluded: [...excluded]
  }));
  const available = () => playable.filter((item) => !excluded.has(item.id));
  if (available().length && available().every((item) => shown.has(item.id))) {
    shown.clear();
    saveHistory();
  }
  let pool = shuffle(available().filter((item) => !shown.has(item.id)));
  const pick = () => {
    if (!pool.length) {
      shown.clear();
      saveHistory();
      pool = shuffle(available());
    }
    const item = pool.pop() || null;
    if (item) {
      shown.add(item.id);
      saveHistory();
    }
    return item;
  };

  pick.remove = (id) => {
    pool = pool.filter((item) => item.id !== id);
    excluded.add(id);
    saveHistory();
  };

  return pick;
}

Object.assign(window.LeagueListening, { getPlayableItems, createRandomItemPicker });
})();
