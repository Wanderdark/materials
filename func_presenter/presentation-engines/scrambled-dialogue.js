// Reusable ordered dialogue activity for static dialogue slides.
function clearScrambledDialogue() {
  els.exampleCard?.classList.remove("scrambled-dialogue-active", "scrambled-dialogue-shake");
}

function shuffleScrambledDialogueRows(rows) {
  const shuffled = [...rows];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function playScrambledDialogueSound(isCorrect) {
  new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`).play().catch(() => {});
}

function shakeScrambledDialogue() {
  els.exampleCard.classList.remove("scrambled-dialogue-shake");
  void els.exampleCard.offsetWidth;
  els.exampleCard.classList.add("scrambled-dialogue-shake");
}

function activateScrambledDialogue() {
  const list = els.presenceView.querySelector(".presence-list");
  if (!list || list.classList.contains("scrambled-dialogue-list")) return;
  const title = els.presenceView.querySelector(".presence-title");
  if (title) {
    title.textContent = "Put the sentences into correct order.";
    title.classList.add("scrambled-dialogue-title");
  }

  const rows = [...list.querySelectorAll(".presence-row")];
  if (rows.length < 2) return;

  let nextIndex = 0;
  const solvedRows = [];
  let previousRemainingRows = [];
  const renderRows = (forceNewOrder = false) => {
    const remainingRows = rows.filter((row) => !solvedRows.includes(row));
    let shuffledRows = shuffleScrambledDialogueRows(remainingRows);
    if (forceNewOrder && shuffledRows.length > 1 && shuffledRows.every((row, index) => row === previousRemainingRows[index])) {
      shuffledRows = [...shuffledRows.slice(1), shuffledRows[0]];
    }
    previousRemainingRows = shuffledRows;
    list.replaceChildren(...solvedRows, ...shuffledRows);
  };
  const selectRow = (row) => {
    if (solvedRows.includes(row)) return;
    const isCorrect = Number(row.dataset.presenceIndex) === nextIndex;
    playScrambledDialogueSound(isCorrect);
    if (!isCorrect) {
      shakeScrambledDialogue();
      solvedRows.forEach((solvedRow) => {
        solvedRow.classList.remove("scrambled-dialogue-solved");
        solvedRow.tabIndex = 0;
        solvedRow.setAttribute("aria-disabled", "false");
      });
      solvedRows.splice(0);
      nextIndex = 0;
      renderRows(true);
      return;
    }
    row.classList.add("scrambled-dialogue-solved");
    row.tabIndex = -1;
    row.setAttribute("aria-disabled", "true");
    solvedRows.push(row);
    nextIndex += 1;
    renderRows();
    if (nextIndex === rows.length) list.classList.add("scrambled-dialogue-complete");
  };

  list.classList.add("scrambled-dialogue-list");
  els.exampleCard.classList.add("scrambled-dialogue-active");
  rows.forEach((row) => {
    row.classList.remove("hidden");
    row.querySelector(".presence-next")?.remove();
    row.classList.add("scrambled-dialogue-row");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", "Select this dialogue line");
    row.addEventListener("click", () => selectRow(row));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRow(row);
      }
    });
  });
  renderRows();
}
