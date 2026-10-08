(() => {
  "use strict";
  const key = "adilhocaTeacherGameProgressV1";
  const screen = document.getElementById("teacher-practice-flow");
  if (!screen) return;
  function read() {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "{}");
      return { selectedUnit: Number.isInteger(saved.selectedUnit) && saved.selectedUnit >= 1 && saved.selectedUnit <= 10 ? saved.selectedUnit : 1, completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {} };
    } catch (_) { return { selectedUnit: 1, completed: {} }; }
  }
  let state = read();
  const style = document.createElement("style");
  style.textContent = `.practice-units{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 24px}.practice-unit{padding:9px 15px;border:1px solid #dae0e6;border-radius:12px;background:#fffdf9;color:#10233f;font:600 .9rem Barlow,sans-serif;cursor:pointer}.practice-unit[aria-pressed="true"]{background:#10233f;color:#fff;border-color:#10233f}.flow-game.is-unit-complete{opacity:.48}.flow-game.is-unit-complete img{filter:grayscale(1)}.flow-game.is-unit-complete:hover,.flow-game.is-unit-complete:focus-visible{opacity:.75}`;
  document.head.append(style);
  const units = document.createElement("div");
  units.className = "practice-units";
  units.setAttribute("role", "group");
  units.setAttribute("aria-label", "Select classroom unit");
  const cards = [...screen.querySelectorAll(".flow-game")];
  const links = cards.map(card => ({ card, url: new URL(card.getAttribute("href"), location.href) }));
  function render() {
    units.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(Number(button.dataset.unit) === state.selectedUnit)));
    links.forEach(({ card, url }) => {
      const game = url.pathname.split("/").slice(-2).join("/");
      const complete = game !== "olivias_movie_memories/index.html" && !!state.completed[state.selectedUnit]?.[game];
      card.classList.toggle("is-unit-complete", complete);
      card.title = complete ? `Completed for Unit ${state.selectedUnit} — play again` : "";
      const target = new URL(url);
      target.searchParams.set("practiceUnit", state.selectedUnit);
      card.href = target.href;
    });
  }
  for (let unit = 1; unit <= 10; unit++) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "practice-unit";
    button.dataset.unit = unit;
    button.textContent = `Unit ${unit}`;
    button.addEventListener("click", () => {
      state = read();
      state.selectedUnit = unit;
      try { localStorage.setItem(key, JSON.stringify(state)); } catch (_) {}
      render();
    });
    units.append(button);
  }
  screen.prepend(units);
  function refresh() { state = read(); render(); }
  window.addEventListener("pageshow", refresh);
  window.addEventListener("focus", refresh);
  window.addEventListener("storage", event => { if (event.key === key) refresh(); });
  render();
})();
