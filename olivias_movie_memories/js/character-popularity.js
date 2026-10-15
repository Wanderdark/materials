(() => {
  window.LeagueListening = window.LeagueListening || {};
  const STORAGE_KEY = "oliviasMovieMemoriesCharacterPopularityV1";
  const count = (value) => Number.isFinite(Number(value)) ? Math.max(0, Math.floor(Number(value))) : 0;
  function readPopularity() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return { completedVideos: count(data?.completedVideos), selections: data?.selections && typeof data.selections === "object" && !Array.isArray(data.selections) ? data.selections : {} };
    } catch (_) { return { completedVideos: 0, selections: {} }; }
  }
  function savePopularity(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (_) {}
  }
  function recordCharacterSelection(id) {
    if (typeof id !== "string" || !/^[a-z]+$/.test(id)) return;
    const data = readPopularity();
    data.selections[id] = count(data.selections[id]) + 1;
    savePopularity(data);
  }
  function recordCharacterVideoCompletion() {
    const data = readPopularity();
    data.completedVideos += 1;
    savePopularity(data);
  }
  function getCharacterPopularity(id) {
    const data = readPopularity();
    const selections = count(data.selections[id]);
    return { selections, visible: data.completedVideos >= 50,
      stars: data.completedVideos >= 50 ? Math.min(12, Math.floor(selections / 5)) : 0 };
  }
  function renderCharacterPopularityStars(id) {
    const { stars } = getCharacterPopularity(id);
    return Array.from({ length: stars }, (_, index) => {
      const angle = (45 - index * 30) * Math.PI / 180;
      const left = (50 + 50 * Math.cos(angle)).toFixed(2);
      const top = (50 + 50 * Math.sin(angle)).toFixed(2);
      return '<span class="character-popularity-star" aria-hidden="true" style="left:' + left + '%;top:' + top + '%">★</span>';
    }).join("");
  }
  Object.assign(window.LeagueListening, { recordCharacterSelection, recordCharacterVideoCompletion, getCharacterPopularity, renderCharacterPopularityStars });
})();
