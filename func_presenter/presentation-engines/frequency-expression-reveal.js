function clearFrequencyExpressionReveal() {
  document.getElementById("frequencyExpressionReveal")?.remove();
  els.presenceView.replaceChildren();
}

function renderFrequencyExpressionReveal(example) {
  const data = example.frequencyExpressionReveal;
  if (!data) return;

  const root = document.createElement("section");
  root.id = "frequencyExpressionReveal";
  root.className = "frequency-expression-reveal";
  example._frequencyExpressionRevealComplete = false;
  els.next.disabled = false;
  syncHeaderNextButton();
  const grid = document.createElement("div");
  grid.className = "frequency-expression-reveal-grid";
  const boxes = data.rows.flatMap((row, rowIndex) => row.map((text, columnIndex) => ({
    text,
    rowIndex,
    columnIndex
  })));

  boxes.forEach((boxData, index) => {
    const box = document.createElement("button");
    box.type = "button";
    box.className = "frequency-expression-reveal-box hidden";
    box.style.gridColumn = String(boxData.columnIndex + 1);
    box.style.gridRow = String(boxData.rowIndex + 1);
    box.textContent = boxData.text;
    box.setAttribute("aria-label", `Show ${boxData.text}`);
    box.addEventListener("click", () => {
      if (!box.classList.contains("is-active")) return;
      box.classList.remove("is-active");
      box.disabled = true;
      const nextBox = grid.children[index + 1];
      if (nextBox) {
        nextBox.classList.remove("hidden");
        nextBox.classList.add("is-active");
      } else {
        example._frequencyExpressionRevealComplete = true;
      }
    });
    grid.append(box);
  });

  const firstBox = grid.firstElementChild;
  firstBox?.classList.remove("hidden");
  firstBox?.classList.add("is-active");
  root.append(grid);
  els.presenceView.replaceChildren(root);
}
