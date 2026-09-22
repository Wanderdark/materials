function clearPersonalityWordReveal() {
  document.getElementById("personalityWordReveal")?.remove();
}

function renderPersonalityWordReveal(example) {
  const data = example.personalityWordReveal;
  if (!data) return;

  clearPersonalityWordReveal();
  els.presenceView.replaceChildren();
  els.image.src = data.words?.[0]?.imagePath || "";
  els.image.alt = data.words?.[0]?.word || "";
  els.image.className = "personality-word-reveal-image";
  els.image.classList.remove("hidden");
  els.fallback.classList.add("hidden");

  const root = document.createElement("div");
  root.id = "personalityWordReveal";
  root.className = "personality-word-reveal";
  const list = document.createElement("div");
  list.className = "personality-word-reveal-list";
  const rows = [];

  (data.words || []).forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "personality-word-reveal-row";
    row.classList.toggle("hidden", index > 0);
    const word = document.createElement("button");
    word.type = "button";
    word.className = "personality-word-reveal-word";
    word.classList.toggle("is-long", item.word.length >= 10);
    word.textContent = item.word;
    const definitionWrap = document.createElement("div");
    definitionWrap.className = "personality-word-reveal-definition-wrap hidden";
    const definition = document.createElement("p");
    definition.className = "personality-word-reveal-definition";
    definition.textContent = item.definition;
    const nextItem = data.words?.[index + 1];
    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "personality-word-reveal-next";
    nextButton.textContent = ">";
    nextButton.setAttribute("aria-label", "Show next word");
    nextButton.classList.toggle("hidden", !nextItem);
    nextButton.addEventListener("click", () => {
      if (!nextItem) return;
      rows[index + 1]?.classList.remove("hidden");
      els.image.src = nextItem.imagePath;
      els.image.alt = nextItem.word;
      nextButton.disabled = true;
    });
    definitionWrap.append(definition, nextButton);
    word.addEventListener("click", () => {
      if (row.classList.contains("revealed")) return;
      row.classList.add("revealed");
      word.disabled = true;
      new Audio("sounds/correct.mp3").play().catch(() => {});
      definitionWrap.classList.remove("hidden");
    });
    row.append(word, definitionWrap);
    rows.push(row);
    list.append(row);
  });

  root.append(list);
  els.presenceView.append(root);
}
