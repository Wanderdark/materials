(() => {
  const TC = window.TeamChallengers;
  const SLOT_HEIGHT = 48;
  const rowElements = {};
  let hideTimer = null;
  let onClose = null;

  function hideLeaderboard(advance = false) {
    clearTimeout(hideTimer); hideTimer = null;
    const overlay = document.querySelector("#auto-lb");
    overlay?.classList.remove("show");
    overlay?.setAttribute("aria-hidden", "true");
    const callback = onClose; onClose = null;
    if (advance) callback?.();
  }

  function showLeaderboard(state, afterClose) {
    hideLeaderboard();
    const overlay = document.querySelector("#auto-lb");
    const container = document.querySelector("#auto-lb-list");
    const entries = state.groups.flatMap((group) => group.students.map((student, index) => ({ key: `${group.id}:${index}:${student.name}`, name: student.name, group: group.name, points: student.score })))
      .filter((entry) => entry.points > 0)
      .sort((a, b) => b.points - a.points || a.key.localeCompare(b.key)).slice(0, 5);
    if (!overlay || !container || !entries.length) { afterClose?.(); return; }
    const keys = new Set(entries.map((entry) => entry.key));
    Object.entries(rowElements).forEach(([key, row]) => { if (!keys.has(key)) { row.remove(); delete rowElements[key]; } });
    entries.forEach((entry, index) => {
      let row = rowElements[entry.key];
      if (!row) {
        row = document.createElement("div");
        row.dataset.key = entry.key;
        row.innerHTML = '<div class="alb-rk"></div><div class="alb-info"><div class="alb-name"></div><div class="alb-grp"></div></div><div class="alb-pts"></div>';
        container.appendChild(row);
        rowElements[entry.key] = row;
      }
      row.className = `alb-row${index < 3 ? ` r${index + 1}` : ""}`;
      row.style.top = `${index * SLOT_HEIGHT}px`;
      row.querySelector(".alb-rk").textContent = index + 1;
      row.querySelector(".alb-name").textContent = entry.name;
      row.querySelector(".alb-grp").textContent = entry.group;
      row.querySelector(".alb-pts").textContent = entry.points;
    });
    container.style.height = `${entries.length * SLOT_HEIGHT}px`;
    onClose = afterClose;
    overlay.classList.add("show"); overlay.setAttribute("aria-hidden", "false");
    hideTimer = setTimeout(() => hideLeaderboard(true), 2000);
  }

  const overlay = document.querySelector("#auto-lb");
  overlay?.addEventListener("click", () => hideLeaderboard(true));
  overlay?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Escape") { event.preventDefault(); hideLeaderboard(true); }
  });
  Object.assign(TC, { showLeaderboard, hideLeaderboard });
})();
