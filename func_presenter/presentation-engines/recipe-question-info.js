function clearRecipeQuestionInfo() {
  document.getElementById("recipeQuestionInfo")?.remove();
}

function renderRecipeQuestionInfo(example) {
  const data = example.recipeQuestionInfo;
  if (!data) return;
  const root = document.createElement("section");
  root.id = "recipeQuestionInfo";
  root.className = "recipe-question-info";
  root.dataset.step = "1";
  const title = document.createElement("h2");
  title.textContent = data.title;
  const list = document.createElement("div");
  list.className = "recipe-question-info-list";
  const rows = data.items.map((item, index) => {
    const row = document.createElement("article");
    row.className = `recipe-question-info-row${index === 0 ? "" : " hidden"}`;
    const explanation = document.createElement("p");
    explanation.className = "recipe-question-info-explanation";
    explanation.textContent = item.explanation;
    const sentence = document.createElement("p");
    sentence.className = "recipe-question-info-sentence";
    sentence.innerHTML = item.sentenceHtml;
    row.append(explanation, sentence);
    list.append(row);
    return row;
  });

  const revealNext = document.createElement("button");
  revealNext.type = "button";
  revealNext.className = "recipe-question-info-next";
  revealNext.textContent = "›";
  revealNext.setAttribute("aria-label", "Show the next sentence");
  revealNext.addEventListener("click", () => {
    const step = Number(root.dataset.step || "1");
    if (step < rows.length) {
      revealNext.remove();
      rows[step].classList.remove("hidden");
      root.dataset.step = String(step + 1);
      rows[step].append(revealNext);
      return;
    }
    if (data.isFinalPage) {
      revealNext.remove();
      els.next.disabled = false;
      els.next.textContent = "FINISH";
      syncHeaderNextButton();
      return;
    }
    next();
  });
  rows[0].append(revealNext);
  root.append(title, list);
  els.presenceView.replaceChildren(root);
  els.next.textContent = "NEXT";
  els.next.disabled = true;
  syncHeaderNextButton();
}
