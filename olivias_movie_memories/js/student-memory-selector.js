(() => {
  function rank(item, memories) {
    const value = memories[item.id] || 0;
    if (!value) return 0;
    if (value === 1) return 1;
    if (value === 2) return 2;
    return 3;
  }

  window.OliviaMemorySelector = Object.freeze({
    next(items, progress, excluded = new Set()) {
      const candidates = items.filter((item) => item.status === "published" && !excluded.has(item.id));
      const ordered = [...candidates].sort((a, b) => rank(a, progress.memories) - rank(b, progress.memories));
      return ordered[0] || null;
    },
    byTheme(items, theme) {
      return items.filter((item) => item.theme === theme);
    }
  });
})();
