function clearSequentialBoxes() {
  document.getElementById("sequentialBoxesVisual")?.remove();
  els.presenceView.replaceChildren();
}

function renderSequentialBoxes(example) {
  const data = example.sequentialBoxes;
  if (!data) return;
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");

  if (data.interaction === "answer-reveal") {
    renderAnswerRevealSequentialBoxes(data);
    return;
  }

  if (data.interaction === "inquiry-reveal") {
    renderInquiryRevealSequentialBoxes(data);
    return;
  }

  if (data.interaction === "process-expression-reveal") {
    renderProcessExpressionReveal(data);
    return;
  }

  if (data.interaction === "recipe-language-reveal") {
    renderRecipeLanguageReveal(data);
    return;
  }

  const root = document.createElement("section");
  const isSplit = Number.isInteger(data.splitAt) && data.splitAt > 0;
  root.className = `sequential-boxes ${isSplit ? "split" : ""}`;
  const list = document.createElement("div");
  list.className = "sequential-boxes-list";
  let visualList = null;
  if (isSplit) {
    const visualRoot = document.createElement("section");
    visualRoot.id = "sequentialBoxesVisual";
    visualRoot.className = "sequential-boxes split";
    visualList = document.createElement("div");
    visualList.className = "sequential-boxes-list";
    visualRoot.append(visualList);
    els.exampleVisualPanel.append(visualRoot);
  } else {
    const heading = document.createElement("h2");
    heading.className = "sequential-boxes-heading";
    heading.textContent = data.heading;
    root.append(heading);
  }
  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "sequential-boxes-next";
  nextButton.textContent = ">";
  nextButton.setAttribute("aria-label", "Show the next quality");

  let visibleCount = 0;
  const showNextBox = () => {
    const boxData = data.boxes[visibleCount];
    if (!boxData) return;
    const box = document.createElement("p");
    box.className = `sequential-boxes-item ${data.numbered ? "numbered" : ""}`;
    if (data.numbered) {
      const number = document.createElement("span");
      number.className = "sequential-boxes-number";
      number.textContent = visibleCount + 1;
      box.append(number);
    }
    if (boxData.parts) {
      const parts = boxData.parts.map(({ text, className = "" }) => {
        const part = document.createElement("span");
        part.className = className;
        part.textContent = text;
        return part;
      });
      box.append(...parts);
    } else {
      const text = document.createElement("span");
      text.textContent = boxData;
      box.append(text);
    }
    (isSplit && visibleCount < data.splitAt ? visualList : list).append(box);
    visibleCount += 1;
    if (visibleCount === data.boxes.length) nextButton.classList.add("hidden");
  };

  nextButton.addEventListener("click", showNextBox);
  showNextBox();
  root.append(list, nextButton);
  els.presenceView.replaceChildren(root);
}

function renderRecipeLanguageReveal(data) {
  els.next.disabled = false;
  syncHeaderNextButton();
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");

  const root = document.createElement("section");
  root.className = "sequential-boxes recipe-language-reveal";
  const title = document.createElement("h2");
  title.className = "recipe-language-reveal-title";
  title.textContent = data.title || "HOW TO ASK ABOUT A RECIPE";
  const groups = document.createElement("div");
  groups.className = "recipe-language-reveal-groups";
  root.append(title, groups);

  let groupIndex = 0;
  let itemIndex = 0;
  let currentItems = null;
  const revealNext = () => {
    const groupData = data.groups[groupIndex];
    if (!groupData) return;
    if (!currentItems) {
      const group = document.createElement("section");
      group.className = "recipe-language-reveal-group";
      currentItems = document.createElement("div");
      currentItems.className = "recipe-language-reveal-items";
      if (groupData.heading) {
        const heading = document.createElement("h3");
        heading.textContent = groupData.heading;
        group.append(heading);
      }
      group.append(currentItems);
      groups.append(group);
    }
    const item = groupData.items[itemIndex];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "recipe-language-reveal-card is-active";
    (item.parts || [{ text: item.text }]).forEach((part) => {
      const span = document.createElement("span");
      span.className = part.highlight ? "recipe-language-reveal-highlight" : "";
      span.textContent = part.text;
      card.append(span);
    });
    card.addEventListener("click", () => {
      if (!card.classList.contains("is-active")) return;
      card.classList.remove("is-active");
      card.classList.add("revealed");
      itemIndex += 1;
      if (itemIndex >= groupData.items.length) {
        groupIndex += 1;
        itemIndex = 0;
        currentItems = null;
      }
      revealNext();
    });
    currentItems.append(card);
  };

  revealNext();
  els.presenceView.replaceChildren(root);
}

function renderProcessExpressionReveal(data) {
  els.next.disabled = false;
  syncHeaderNextButton();

  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");

  const visualRoot = document.createElement("section");
  visualRoot.id = "sequentialBoxesVisual";
  visualRoot.className = "sequential-boxes process-expression-reveal process-expression-reveal-left";
  const visualHeading = document.createElement("h2");
  visualHeading.className = "process-expression-reveal-heading";
  visualHeading.textContent = data.heading || "WE USE THESE EXPRESSIONS";
  const visualList = document.createElement("div");
  visualList.className = "process-expression-reveal-list";
  visualRoot.append(visualHeading, visualList);
  els.exampleVisualPanel.append(visualRoot);

  const root = document.createElement("section");
  root.className = "sequential-boxes process-expression-reveal process-expression-reveal-right";
  const list = document.createElement("div");
  list.className = "process-expression-reveal-list";
  const footer = document.createElement("p");
  footer.className = "process-expression-reveal-footer";
  const hasFooter = Boolean(data.footer);
  footer.textContent = data.footer || "";
  footer.hidden = true;
  let visibleIndex = 0;
  const splitAt = Number.isInteger(data.splitAt) ? data.splitAt : 3;

  const revealNext = () => {
    const item = data.items[visibleIndex];
    if (!item) {
      if (hasFooter) footer.hidden = false;
      return;
    }
    const row = document.createElement("button");
    row.type = "button";
    row.className = "process-expression-reveal-item is-active";
    if (item.questionParts) {
      row.classList.add("process-expression-reveal-question");
      item.questionParts.forEach((part) => {
        const text = document.createElement("span");
        text.className = part.highlight ? "process-expression-reveal-highlight" : "";
        text.textContent = part.text;
        row.append(text);
      });
    } else {
      const expression = document.createElement("span");
      expression.textContent = item.expression;
      const meaning = document.createElement("span");
      meaning.textContent = item.meaning;
      row.append(expression, meaning);
    }
    row.addEventListener("click", () => {
      if (!row.classList.contains("is-active")) return;
      row.classList.remove("is-active");
      row.classList.add("revealed");
      row.setAttribute("aria-disabled", "true");
      revealNext();
    });
    (visibleIndex < splitAt ? visualList : list).append(row);
    visibleIndex += 1;
  };

  revealNext();
  root.append(list);
  if (hasFooter) root.append(footer);
  els.presenceView.replaceChildren(root);
}

function renderAnswerRevealSequentialBoxes(data) {
  els.next.disabled = false;
  const visualRoot = document.createElement("section");
  visualRoot.id = "sequentialBoxesVisual";
  visualRoot.className = "sequential-boxes-answer-reveal";
  const answerRoot = document.createElement("div");
  answerRoot.className = "sequential-boxes-answer-content";
  visualRoot.append(answerRoot);
  els.exampleVisualPanel.append(visualRoot);

  const root = document.createElement("section");
  root.className = "sequential-boxes sequential-boxes-answer-questions";
  const list = document.createElement("div");
  list.className = "sequential-boxes-list";
  let activeIndex = 0;

  const showAnswer = (question) => {
    const portraits = document.createElement("div");
    portraits.className = "sequential-boxes-answer-portraits";
    question.people.forEach((person) => {
      const portrait = document.createElement("img");
      portrait.src = `images/avatars/${person.toLowerCase()}.webp`;
      portrait.alt = person;
      portraits.append(portrait);
    });
    const answer = document.createElement("p");
    answer.className = "sequential-boxes-answer-text";
    answer.textContent = question.answer;
    answerRoot.replaceChildren(portraits, answer);
  };

  data.questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "sequential-boxes-item sequential-boxes-answer-question";
    button.textContent = question.question;
    if (index === activeIndex) button.classList.add("is-active");
    button.addEventListener("click", () => {
      if (index !== activeIndex) return;
      showAnswer(question);
      button.classList.remove("is-active");
      activeIndex += 1;
      list.children[activeIndex]?.classList.add("is-active");
    });
    list.append(button);
  });

  root.append(list);
  els.presenceView.replaceChildren(root);
}

function renderInquiryRevealSequentialBoxes(data) {
  els.next.disabled = false;
  const visualRoot = document.createElement("section");
  visualRoot.id = "sequentialBoxesVisual";
  visualRoot.className = `sequential-boxes-inquiry-left ${data.layoutClass || ""}`;
  const rowList = document.createElement("div");
  rowList.className = "sequential-boxes-inquiry-rows";
  visualRoot.append(rowList);
  els.exampleVisualPanel.append(visualRoot);

  const root = document.createElement("section");
  root.className = `sequential-boxes sequential-boxes-inquiry-right ${data.layoutClass || ""}`;
  const bubbleList = document.createElement("div");
  bubbleList.className = "sequential-boxes-inquiry-bubbles";
  root.append(bubbleList);
  els.presenceView.replaceChildren(root);

  const rows = [];
  let step = 0;
  const makeRevealTrigger = (element) => {
    element.classList.add("is-active");
    element.addEventListener("click", () => {
      if (!element.classList.contains("is-active")) return;
      element.classList.remove("is-active");
      revealNext();
    });
  };
  const revealNext = () => {
    const pairStepCount = data.items.length * 2;
    if (step < pairStepCount) {
      const itemIndex = Math.floor(step / 2);
      const item = data.items[itemIndex];
      if (step % 2 === 0) {
        const row = document.createElement("div");
        row.className = "sequential-boxes-inquiry-row";
        row.style.setProperty("--inquiry-tone", item.tone);
        row.style.setProperty("--inquiry-text", item.textColor || "#fff95a");
        rows[itemIndex] = row;
        const question = document.createElement("button");
        question.type = "button";
        question.className = "sequential-boxes-inquiry-cell inquiry-word";
        question.textContent = item.word;
        makeRevealTrigger(question);
        row.append(question);
        rowList.append(row);
      } else {
        const meaning = document.createElement("button");
        meaning.type = "button";
        meaning.className = "sequential-boxes-inquiry-cell inquiry-meaning";
        meaning.textContent = item.meaning;
        makeRevealTrigger(meaning);
        rows[itemIndex].append(meaning);
      }
    } else {
      const item = data.items[step - pairStepCount];
      if (!item) return;
      const bubble = document.createElement("button");
      bubble.type = "button";
      bubble.className = "sequential-boxes-inquiry-bubble";
      if (data.answerOnly) {
        bubble.classList.add("sequential-boxes-inquiry-answer-only");
        bubble.textContent = item.example;
      } else {
        const questionWord = document.createElement("span");
        questionWord.className = "sequential-boxes-inquiry-question-word";
        questionWord.textContent = item.word;
        const rest = document.createElement("span");
        rest.textContent = item.example.slice(item.word.length);
        bubble.append(questionWord, rest);
      }
      makeRevealTrigger(bubble);
      bubbleList.append(bubble);
    }
    step += 1;
  };

  revealNext();
}
