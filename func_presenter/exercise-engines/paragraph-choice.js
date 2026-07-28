// APP-ANCHOR: Paragraph-choice and personality matching exercises.
function startParagraphChoice(exercise) {
  state.exercise = exercise;
  state.pcPages = exercise.pages || [{ imagePath: exercise.imagePath, sentences: exercise.sentences }];
  state.pcPageIndex = 0;
  state.pcOverallCorrect = 0;
  state.pcCurrentPageCorrect = 0;
  state.pcTotalChoices = state.pcPages.reduce((sum, p) =>
    sum + (p.sentences || []).reduce((s2, sen) =>
      s2 + (sen.segments || []).filter((seg) => seg.options).length, 0), 0);
  hideAllScreens();
  els.pcGradeLabel.textContent = `GRADE ${state.module.grade}`;
  els.pcTitle.textContent = exercise.title;
  els.pcScore.textContent = `0 / ${state.pcTotalChoices}`;
  els.pcCard.classList.toggle("pc-text-only", Boolean(exercise.textOnly));
  els.pcResult.classList.add("hidden");
  els.pcSkip.dataset.pcAction = "";
  els.pcSkip.textContent = "SKIP EXERCISE";
  els.pcSkip.classList.toggle("hidden", state.postExerciseIndex === undefined);
  els.pcScreen.classList.remove("hidden");
  renderPcPage();
}

function renderPcPage() {
  const page = state.pcPages[state.pcPageIndex];
  page._personalityMatchComplete = false;
  page._personalityMatchRendered = false;
  const imagePath = page.imagePath || state.exercise.imagePath;
  els.pcImage.closest(".visual-panel").classList.toggle("hidden", Boolean(state.exercise.textOnly) || !imagePath);
  if (imagePath) {
    els.pcImage.src = imagePath;
    els.pcImage.alt = state.exercise.title;
  } else {
    els.pcImage.removeAttribute("src");
    els.pcImage.alt = "";
  }
  els.pcResult.classList.add("hidden");
  els.pcSkip.dataset.pcAction = "";
  els.pcSkip.textContent = "SKIP EXERCISE";
  els.pcSkip.classList.toggle("hidden", state.postExerciseIndex === undefined);
  els.pcDone.dataset.pcAction = "done";
  els.pcDone.textContent = "BACK TO MENU";
  els.pcParagraph.replaceChildren(...(page.sentences || []).map((sentence) => {
    const p = document.createElement("p");
    p.className = "inline-choice-prompt";
    p.append(...createInlineChoiceParts(sentence.segments || []));
    return p;
  }));
}

function advancePcPage() {
  state.pcOverallCorrect += state.pcCurrentPageCorrect;
  state.pcCurrentPageCorrect = 0;
  state.pcPageIndex++;
  renderPcPage();
}

function configurePcPageResult(overallCorrect) {
  const isLastPage = state.pcPageIndex >= state.pcPages.length - 1;
  const groupSize = Number(state.exercise?.groupSize);
  const isGroupBoundary = !isLastPage && Number.isInteger(groupSize) && groupSize > 0
    && (state.pcPageIndex + 1) % groupSize === 0;

  if (isLastPage) {
    els.pcResultText.textContent = overallCorrect === state.pcTotalChoices ? `Perfect! All ${state.pcTotalChoices} correct!`
      : `${overallCorrect} out of ${state.pcTotalChoices} correct.`;
    els.pcDone.textContent = state.postExerciseIndex !== undefined ? "CONTINUE →" : "BACK TO MENU";
    els.pcDone.dataset.pcAction = "done";
  } else if (isGroupBoundary) {
    els.pcResultText.textContent = `${overallCorrect} / ${state.pcTotalChoices} correct. Ready for the next group?`;
    els.pcDone.textContent = "CONTINUE →";
    els.pcDone.dataset.pcAction = "next";
    els.pcSkip.textContent = "EXIT";
    els.pcSkip.dataset.pcAction = "exit";
    els.pcSkip.classList.remove("hidden");
  } else {
    els.pcResultText.textContent = `${overallCorrect} / ${state.pcTotalChoices} correct. Keep going!`;
    els.pcDone.textContent = "NEXT PAGE →";
    els.pcDone.dataset.pcAction = "next";
  }
  els.pcResult.classList.remove("hidden");
}

function showPcPageResult(overallCorrect) {
  setTimeout(() => {
    configurePcPageResult(overallCorrect);
  }, 500);
}

function renderPcPersonalityMatch(page, overallCorrect) {
  if (!page.personalityMatch || page._personalityMatchRendered) return;
  page._personalityMatchRendered = true;
  const match = page.personalityMatch;
  const wrap = document.createElement("section");
  wrap.className = "pc-personality-match";
  const title = document.createElement("h2");
  title.textContent = `Who is ${match.trait}?`;
  const grid = document.createElement("div");
  grid.className = "pc-personality-match-grid";
  (match.options || []).forEach((character) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pc-personality-character-option";
    const img = document.createElement("img");
    img.src = character.imagePath;
    img.alt = character.name;
    const name = document.createElement("strong");
    name.textContent = character.name;
    button.append(img, name);
    button.addEventListener("click", () => {
      if (page._personalityMatchComplete) return;
      const isCorrect = character.name === match.answer;
      playFeedbackSound(isCorrect);
      button.classList.add(isCorrect ? "correct" : "wrong");
      if (!isCorrect) return;
      page._personalityMatchComplete = true;
      grid.querySelectorAll("button").forEach((item) => { item.disabled = true; });
      state.pcCurrentPageCorrect = overallCorrect - state.pcOverallCorrect;
      showPcPageResult(overallCorrect);
    });
    grid.append(button);
  });
  wrap.append(title, grid);
  els.pcParagraph.append(wrap);
}

function checkPcProgress() {
  const groups = [...els.pcParagraph.querySelectorAll(".inline-choice-group")];
  const total = groups.length;
  const answered = groups.filter((g) => g.dataset.answered).length;
  const correct = groups.filter((g) => g.querySelector(".inline-choice-trigger.correct")).length;
  const overallCorrect = state.pcOverallCorrect + correct;
  els.pcScore.textContent = `${overallCorrect} / ${state.pcTotalChoices}`;
  if (answered === total && total > 0) {
    state.pcCurrentPageCorrect = correct;
    const page = state.pcPages[state.pcPageIndex];
    if (page?.personalityMatch && correct === total && !page._personalityMatchComplete) {
      renderPcPersonalityMatch(page, overallCorrect);
      return;
    }
    setTimeout(() => {
      configurePcPageResult(overallCorrect);
    }, 500);
  }
}

