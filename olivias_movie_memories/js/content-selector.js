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
    let watched = new Set();
    try { watched = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]")); } catch (_) {}
    if (playable.length && playable.every((item) => watched.has(item.id))) {
      watched.clear();
      localStorage.removeItem(storageKey);
    }
    let pool = playable.filter((item) => !watched.has(item.id));
    const pick = () => {
      if (!pool.length) {
        watched.clear();
        localStorage.removeItem(storageKey);
        pool = [...playable];
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
  let pool = getPlayableItems(items);
  let index = pool.length - 1;
  const pick = () => {
    if (!pool.length) return null;
    if (index < 0) index = pool.length - 1;
    return pool[index--];
  };

  pick.remove = (id) => {
    pool = pool.filter((item) => item.id !== id);
    if (index >= pool.length) index = pool.length - 1;
  };

  return pick;
}

Object.assign(window.LeagueListening, { getPlayableItems, createRandomItemPicker });
})();
