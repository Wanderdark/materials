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
  visualRoot.className = "sequential-boxes-inquiry-left";
  const rowList = document.createElement("div");
  rowList.className = "sequential-boxes-inquiry-rows";
  visualRoot.append(rowList);
  els.exampleVisualPanel.append(visualRoot);

  const root = document.createElement("section");
  root.className = "sequential-boxes sequential-boxes-inquiry-right";
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
      const questionWord = document.createElement("span");
      questionWord.className = "sequential-boxes-inquiry-question-word";
      questionWord.textContent = item.word;
      const rest = document.createElement("span");
      rest.textContent = item.example.slice(item.word.length);
      bubble.append(questionWord, rest);
      makeRevealTrigger(bubble);
      bubbleList.append(bubble);
    }
    step += 1;
  };

  revealNext();
}
