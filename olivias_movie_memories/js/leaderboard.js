(() => {
  window.LeagueListening = window.LeagueListening || {};
  const SLOT_HEIGHT = 48;
  const rowElements = {};
  let hideTimer = null;

  function getEntries(state) {
    return state.groups.flatMap((group) => group.students.map((student, index) => ({ key: `${group.id}:${index}:${student.name}`, name: student.name, group: group.name, points: student.score })))
      .filter((entry) => entry.points > 0)
      .sort((a, b) => b.points - a.points || a.key.localeCompare(b.key)).slice(0, 5);
  }

  function showLeaderboard(state) {
    const overlay = document.querySelector("#auto-lb");
    const container = document.querySelector("#auto-lb-list");
    if (!overlay || !container) return;
    const entries = getEntries(state);
    if (!entries.length) {
      overlay.classList.remove("show");
      clearTimeout(hideTimer);
      return;
    }
    const keys = new Set(entries.map((entry) => entry.key));
    Object.entries(rowElements).forEach(([key, row]) => { if (!keys.has(key)) { row.remove(); delete rowElements[key]; } });
    entries.forEach((entry, index) => {
      const top = index * SLOT_HEIGHT;
      const rankClass = index === 0 ? "r1" : index === 1 ? "r2" : index === 2 ? "r3" : "";
      let row = rowElements[entry.key];
      if (!row) {
        row = document.createElement("div");
        row.dataset.key = entry.key;
        row.innerHTML = '<div class="alb-rk"></div><div class="alb-info"><div class="alb-name"></div><div class="alb-grp"></div></div><div class="alb-pts"></div>';
        container.appendChild(row);
        rowElements[entry.key] = row;
      }
      row.className = `alb-row${rankClass ? ` ${rankClass}` : ""}`;
      row.style.top = `${top}px`;
      row.querySelector(".alb-rk").textContent = index + 1;
      row.querySelector(".alb-name").textContent = entry.name;
      row.querySelector(".alb-grp").textContent = entry.group;
      row.querySelector(".alb-pts").textContent = entry.points;
    });
    container.style.height = `${entries.length * SLOT_HEIGHT}px`;
    overlay.classList.add("show");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => overlay.classList.remove("show"), 3000);
  }

  window.LeagueListening.showLeaderboard = showLeaderboard;
})();
