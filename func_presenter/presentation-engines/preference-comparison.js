function clearPreferenceComparison() {
  document.getElementById("preferenceComparison")?.remove();
  els.exampleVisualPanel?.querySelector(".preference-comparison-scene")?.remove();
}

function renderPreferenceComparison(example) {
  const data = example.preferenceComparison;
  if (!data) return;

  const visual = data.scenePath ? document.createElement("img") : null;
  if (visual) {
    visual.className = "preference-comparison-scene";
    visual.src = data.scenePath;
    visual.alt = "Amusement park";
  }

  const root = document.createElement("section");
  root.id = "preferenceComparison";
  root.className = `preference-comparison ${data.layout ? `preference-comparison-${data.layout}-layout` : ""}`;
  const choices = document.createElement("div");
  choices.className = data.layout === "question" ? "preference-question-options" : "preference-comparison-choices";
  const studentChoices = [];
  (data.options || []).forEach((option) => {
    const choice = document.createElement(data.layout === "student-question" ? "button" : "article");
    if (data.layout === "student-question") choice.type = "button";
    choice.className = "preference-comparison-choice";
    const image = document.createElement("img");
    image.src = option.imagePath;
    image.alt = option.label;
    choice.append(image);
    if (data.layout !== "sentence") {
      const label = document.createElement("p");
      label.className = `preference-comparison-label ${option.tone || "blue"}`;
      label.textContent = option.label;
      choice.append(label);
    }
    choices.append(choice);
    if (data.layout === "student-question") studentChoices.push({ choice, option });
    if (data.layout === "question" && choices.children.length === 1) {
      const orBadge = document.createElement("span");
      orBadge.className = "preference-question-or";
      orBadge.textContent = "OR";
      choices.append(orBadge);
    }
  });
  const createSentence = (tiles) => {
    const sentence = document.createElement("div");
    sentence.className = "preference-comparison-sentence";
    tiles.forEach((tile) => {
      const tileWrap = document.createElement("div");
      tileWrap.className = "preference-comparison-sentence-tile-wrap";
      const tileElement = document.createElement("p");
      tileElement.className = `preference-comparison-sentence-tile ${tile.tone}`;
      tileElement.textContent = tile.text;
      tileWrap.append(tileElement);
      if (tile.result) {
        const result = document.createElement("span");
        result.className = `preference-comparison-result ${tile.result}`;
        result.textContent = tile.result === "correct" ? "✓" : "✕";
        tileWrap.append(result);
      }
      sentence.append(tileWrap);
    });
    return sentence;
  };
  if (data.layout === "student-question") {
    const prompt = document.createElement("p");
    prompt.className = "preference-student-question-prompt";
    prompt.textContent = data.question;
    const answers = document.createElement("div");
    answers.className = "preference-student-question-answers hidden";
    const continueButton = document.createElement("button");
    continueButton.type = "button";
    continueButton.className = "primary-button preference-student-question-continue";
    continueButton.textContent = "CONTINUE";
    continueButton.disabled = true;
    let selectedOption = null;
    studentChoices.forEach(({ choice, option }) => {
      choice.addEventListener("click", () => {
        selectedOption = option;
        studentChoices.forEach(({ choice: otherChoice }) => otherChoice.classList.toggle("selected", otherChoice === choice));
        continueButton.disabled = false;
      });
    });
    continueButton.addEventListener("click", () => {
      if (!selectedOption) return;
      const otherOption = data.options.find((option) => option !== selectedOption);
      answers.replaceChildren(...data.answers.map((template) => {
        const answerElement = document.createElement("p");
        const answer = template
          .replace("{preferredGerund}", selectedOption.preferForm)
          .replace("{otherGerund}", otherOption.preferForm)
          .replace("{preferredBase}", selectedOption.ratherForm)
          .replace("{otherBase}", otherOption.ratherForm);
        answerElement.innerHTML = answer.replace(/\b(would rather|prefer|than|to)\b/gi, "<strong>$1</strong>");
        return answerElement;
      }));
      answers.classList.remove("hidden");
      continueButton.remove();
    });
    root.append(prompt, choices, continueButton, answers);
  } else if (data.layout === "question") {
    const question = document.createElement("p");
    question.className = "preference-question-bubble";
    const [before, after = ""] = data.question.split(/prefer/i);
    const highlighted = document.createElement("strong");
    highlighted.textContent = "prefer";
    question.append(before, highlighted, after);
    root.append(question, choices);
  } else if (data.layout === "dialogue") {
    const dialogueList = document.createElement("div");
    dialogueList.className = "preference-dialogue-list";
    data.dialogues.forEach((dialogue) => {
      const row = document.createElement("article");
      row.className = "preference-dialogue-row";
      const portrait = document.createElement("img");
      portrait.className = "preference-dialogue-portrait";
      portrait.src = dialogue.portraitPath;
      portrait.alt = dialogue.name;
      const bubble = document.createElement("p");
      bubble.className = "preference-dialogue-bubble";
      bubble.textContent = dialogue.text;
      row.append(portrait, bubble);
      dialogueList.append(row);
    });
    root.append(dialogueList);
  } else if (data.layout === "sentence") {
    const sentence = createSentence(data.sentenceTiles);
    root.append(choices, sentence);
  } else if (data.layout === "double-sentence") {
    root.append(...data.sentenceRows.map(createSentence));
  } else {
    const expressions = document.createElement("div");
    expressions.className = "preference-comparison-expressions";
    data.expressions.forEach((expression) => {
      const item = document.createElement("p");
      item.textContent = expression;
      expressions.append(item);
    });
    root.append(choices, expressions);
  }
  els.exampleVisualPanel.replaceChildren(...(visual ? [visual] : []));
  els.presenceView.replaceChildren(root);
}
