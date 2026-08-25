// Reusable four-choice test question for presentation slides.
function clearTestQuestion() {
  document.getElementById("testQuestionPrompt")?.remove();
  els.exampleCard?.classList.remove("test-question-active");
}

function shuffleTestQuestionChoices(choices) {
  const shuffled = [...choices];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function playTestQuestionSound(isCorrect) {
  new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`).play().catch(() => {});
}

function getTestQuestionPortrait(speaker) {
  const name = String(speaker || "").trim().toLowerCase();
  const characterNames = new Set(["ava", "benjamin", "chloe", "daniel", "david", "ella", "emma", "ethan", "hannah", "jack", "lucas", "mia", "noah", "olivia", "victoria", "zoe"]);
  return characterNames.has(name) ? `../olivias_movie_memories/assets/portraits/${name}.webp` : "";
}

function appendTestQuestionLineText(container, lineText) {
  String(lineText || "").split(/(_{2,})/g).forEach((part) => {
    if (/^_{2,}$/.test(part)) {
      const gap = document.createElement("span");
      gap.className = "test-question-gap test-question-spinner";
      gap.setAttribute("aria-label", "Missing expression");
      container.append(gap);
      return;
    }
    container.append(document.createTextNode(part));
  });
}

function renderTestQuestion(example) {
  const data = example.classificationQuiz || example.testQuestion;
  if (!data) return;
  const isClassificationQuiz = Boolean(example.classificationQuiz);
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.presenceView.replaceChildren();

  const question = document.createElement("section");
  question.className = `test-question ${isClassificationQuiz ? "classification-quiz" : ""}`;
  const colorClasses = ["navy", "yellow", "red", "orange"];
  els.presenceView.append(question);
  els.exampleCard.classList.add("test-question-active");

  const hasQuestionSequence = !isClassificationQuiz && Array.isArray(data.questions) && data.questions.length > 0;
  const statements = isClassificationQuiz
    ? shuffleTestQuestionChoices(data.statements || [])
    : hasQuestionSequence
      ? data.questions
      : [data];
  let questionIndex = 0;
  const renderCurrentQuestion = () => {
    document.getElementById("testQuestionPrompt")?.remove();
    const current = statements[questionIndex];
    const prompt = document.createElement("section");
    prompt.id = "testQuestionPrompt";
    prompt.className = "test-question-prompt";
    const label = document.createElement("p");
    label.className = "test-question-label";
    label.textContent = current.promptLabel || data.promptLabel || "COMPLETE THE DIALOGUE";
    if (!isClassificationQuiz) prompt.append(label);
    if (isClassificationQuiz) {
      const statement = document.createElement("p");
      statement.className = "test-question-statement";
      statement.textContent = current.text;
      prompt.append(statement);
    } else {
      (current.lines || []).forEach((line) => {
        const dialogueLine = document.createElement("p");
        const portrait = line.speakerImage || getTestQuestionPortrait(line.speaker);
        dialogueLine.className = `test-question-line ${portrait ? "has-portrait" : ""}`;
        if (portrait) {
          const image = document.createElement("img");
          image.className = "test-question-portrait";
          image.src = portrait;
          image.alt = line.speaker;
          dialogueLine.append(image);
        }
        const text = document.createElement("span");
        const speaker = document.createElement("strong");
        speaker.textContent = `${line.speaker}:`;
        text.append(speaker, " ");
        appendTestQuestionLineText(text, line.text);
        dialogueLine.append(text);
        prompt.append(dialogueLine);
      });
    }
    els.exampleVisualPanel.append(prompt);

    const title = document.createElement("h2");
    title.textContent = isClassificationQuiz ? "CHOOSE THE CATEGORY" : "CHOOSE THE BEST ANSWER";
    const options = document.createElement("div");
    options.className = "test-question-options";
    let firstAttempt = true;
    const choiceList = current.choices || data.choices || [];
    const choices = current.randomizeChoices === false || data.randomizeChoices === false ? [...choiceList] : shuffleTestQuestionChoices(choiceList);
    choices.forEach((choice, index) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = `test-question-choice ${colorClasses[index]}`;
      option.textContent = choice;
      option.addEventListener("click", () => {
        if (option.disabled) return;
        const isCorrect = choice === current.answer;
        playTestQuestionSound(isCorrect);
        if (!isCorrect) {
          firstAttempt = false;
          option.disabled = true;
          option.classList.add("removed");
          return;
        }
        options.querySelectorAll("button").forEach((button) => {
          button.disabled = true;
          if (button !== option) button.classList.add("removed");
        });
        option.classList.add("correct");
        if (firstAttempt) window.StudentGame?.onCorrect();
        window.TeacherControl?.onCorrect();
        if (isClassificationQuiz || hasQuestionSequence) {
          const nextButton = document.createElement("button");
          nextButton.type = "button";
          nextButton.className = "primary-button test-question-next";
          const isLastQuestion = questionIndex === statements.length - 1;
          nextButton.textContent = isLastQuestion ? "CONTINUE" : isClassificationQuiz ? "NEXT SENTENCE" : "NEXT QUESTION";
          nextButton.addEventListener("click", () => {
            if (isLastQuestion) next();
            else {
              questionIndex += 1;
              renderCurrentQuestion();
            }
          });
          prompt.append(nextButton);
        }
      });
      options.append(option);
    });
    question.replaceChildren(title, options);
  };
  renderCurrentQuestion();
}
