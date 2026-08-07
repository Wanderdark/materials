(() => {
  const STORAGE_KEY = "oliviasMovieMemoriesProgressV1";
  const empty = () => ({
    totalMemoryPoints: 0,
    activeStreak: 0,
    bestStreak: 0,
    jokerCharges: 2,
    memories: {}
  });

  function read() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return { ...empty(), ...(saved || {}), memories: { ...(saved?.memories || {}) } };
    } catch {
      return empty();
    }
  }

  let state = read();
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function snapshot() { return structuredClone(state); }
  function set(mutator) { mutator(state); save(); return snapshot(); }
  function getStudentProfile() {
    try { return JSON.parse(localStorage.getItem("fpStudentProfile")) || {}; } catch { return {}; }
  }

  window.OliviaMemoryProgress = Object.freeze({
    get: snapshot,
    getStudentProfile,
    award(points) { return set((s) => { s.totalMemoryPoints += points; }); },
    correct({ points, subtitleMode }) {
      return set((s) => {
        s.totalMemoryPoints += points;
        s.activeStreak += 1;
        s.bestStreak = Math.max(s.bestStreak, s.activeStreak);
      });
    },
    resetStreak() { return set((s) => { s.activeStreak = 0; }); },
    addJoker() { return set((s) => { s.jokerCharges += 1; }); },
    useJoker() {
      if (state.jokerCharges < 1) return snapshot();
      return set((s) => { s.jokerCharges -= 1; });
    },
    unlock(itemId, rank) {
      return set((s) => { s.memories[itemId] = Math.max(s.memories[itemId] || 0, rank); });
    }
  });
})();
