// APP-ANCHOR: Character matching, memory, and snap exercise flows.
function startStudentMatch(exercise) {
  state.exercise = exercise;
  state.smBatchIndex = 0;
  state.smScore = 0;
  state.smSelectedDescId = null;
  state.smMatched = 0;
  const glassStudents = shuffle(exercise.students.filter((s) => s.hasGlasses));
  const normalStudents = shuffle(exercise.students.filter((s) => !s.hasGlasses));
  const batches = [];
  for (let i = 0; i < glassStudents.length; i += 2) {
    batches.push(shuffle([glassStudents[i], glassStudents[i + 1], normalStudents.pop(), normalStudents.pop()].filter(Boolean)));
  }
  while (normalStudents.length >= 4) {
    batches.push(shuffle(normalStudents.splice(0, 4)));
  }
  if (normalStudents.length) {
    batches.push(shuffle(normalStudents.splice(0)));
  }
  state.smBatches = shuffle(batches);
  hideAllScreens();
  els.smGrade.textContent = `GRADE ${state.module.grade}`;
  els.smTitle.textContent = exercise.title;
  els.smResult.classList.add("hidden");
  els.smScreen.classList.remove("hidden");
  renderSmBatch();
}

function startCharacterHubPopup(exercise) {
  state.exercise = exercise;
  state.exerciseQuestions = exercise.pages || [];
  state.exerciseIndex = 0;
  state.exerciseScore = 0;
  state.characterHubCompleted = new Set();
  hideAllScreens();
  els.exerciseScore.closest(".exercise-score")?.classList.add("hidden");
  els.exercise.classList.remove("hidden");
  renderCharacterHubPopupPage();
}

function renderCharacterHubPopupPage() {
  const pages = state.exercise.pages || [];
  const page = pages[state.exerciseIndex] || [];
  const total = Math.max(pages.length, 1);
  clearExerciseRepeatVisual();
  clearExerciseVisualCaption();
  clearExerciseImageFocus();
  els.exerciseGrade.textContent = `GRADE ${state.grade}`;
  els.exerciseTitle.textContent = state.exercise.title;
  els.exerciseProgress.textContent = `${state.exerciseIndex + 1} / ${total}`;
  els.exerciseProgressBar.style.width = `${((state.exerciseIndex + 1) / total) * 100}%`;
  els.exerciseScore.textContent = `${page.length}`;
  els.exerciseCard.className = "exercise-card character-hub-exercise";
  els.exerciseVisualPanel.classList.remove("hidden");
  const pageVisual = state.exercise.pageVisuals?.[state.exerciseIndex];
  els.exerciseImage.classList.toggle("hidden", !pageVisual);
  els.exerciseFallback.classList.toggle("hidden", Boolean(pageVisual));
  if (pageVisual) {
    els.exerciseImage.src = pageVisual;
    els.exerciseImage.alt = state.exercise.visualBrief || "Character collage";
    els.exerciseImage.style.aspectRatio = state.exercise.pageVisualAspect || "";
    els.exerciseImage.style.objectFit = state.exercise.pageVisualFit || "";
  } else {
    els.exerciseImage.removeAttribute("src");
    els.exerciseImage.style.aspectRatio = "";
    els.exerciseImage.style.objectFit = "";
    els.exerciseBrief.textContent = state.exercise.visualBrief || "Choose a student.";
  }
  els.exerciseReferenceType.textContent = state.exercise.referenceType || "CHARACTER HUB";
  els.exerciseReferenceType.classList.remove("hidden");
  els.exerciseWord.classList.add("hidden");
  els.exercisePrompt.textContent = "CLICK A STUDENT.";
  els.exercisePrompt.classList.remove("hidden");
  els.exercisePrompt.classList.add("compact-prompt");
  els.exerciseSentence.textContent = `GROUP ${state.exerciseIndex + 1}`;
  els.exerciseSentence.classList.remove("hidden");
  els.exerciseFeedback.textContent = "Complete the sentence in the popup.";
  els.exerciseFeedback.className = "exercise-feedback";
  els.exerciseNext.disabled = false;
  els.exerciseNext.textContent = state.exerciseIndex >= total - 1 ? "SEE RESULT" : "NEXT GROUP";

  const hub = document.createElement("div");
  hub.className = "exercise-character-hub-grid";
  page.forEach((student, index) => {
    if (index === 4) hub.append(createCharacterHubCenter());
    const button = document.createElement("button");
    button.type = "button";
    button.className = "exercise-character-hub-button";
    button.textContent = student.name;
    const completionKey = `${state.exerciseIndex}:${student.name}`;
    if (state.characterHubCompleted?.has(completionKey)) {
      markCharacterHubButtonComplete(button);
    }
    button.addEventListener("click", () => {
      if (button.disabled) return;
      openPresenceOverlay({
        question: student.name,
        imagePath: student.imagePath,
        imageAspect: "1 / 1",
        imageFit: "cover",
        overlaySize: true,
        interactiveSentences: [{ segments: parseInlineChoiceSentence(student.sentence) }]
      });
      bindCharacterHubOverlayCompletion(button, completionKey);
    });
    hub.append(button);
  });
  els.articleOptions.className = "article-options exercise-character-hub-options";
  els.articleOptions.replaceChildren(hub);
}

function bindCharacterHubOverlayCompletion(button, completionKey) {
  if (state.characterHubOverlayCleanup) {
    state.characterHubOverlayCleanup();
    state.characterHubOverlayCleanup = null;
  }
  const sentenceArea = els.presenceOverlaySentence;
  const checkComplete = () => {
    const groups = [...sentenceArea.querySelectorAll(".inline-choice-group")];
    if (!groups.length) return;
    const allAnswered = groups.every((group) => group.dataset.answered === "true");
    const allCorrect = groups.every((group) => group.querySelector(".inline-choice-trigger")?.classList.contains("correct"));
    if (allAnswered && allCorrect) {
      state.characterHubCompleted?.add(completionKey);
      markCharacterHubButtonComplete(button);
      sentenceArea.removeEventListener("click", onChoiceClick, true);
    }
  };
  const onChoiceClick = () => setTimeout(checkComplete, 40);
  sentenceArea.addEventListener("click", onChoiceClick, true);
  state.characterHubOverlayCleanup = () => sentenceArea.removeEventListener("click", onChoiceClick, true);
}

function markCharacterHubButtonComplete(button) {
  button.classList.add("completed");
  button.disabled = true;
  button.setAttribute("aria-label", `${button.textContent} completed`);
}

function createCharacterHubCenter() {
  const center = document.createElement("div");
  center.className = "exercise-character-hub-center";
  center.textContent = "CHOOSE\nONE";
  return center;
}

function renderSmBatch() {
  const batches = state.smBatches;
  const batch = batches[state.smBatchIndex];
  state.smMatched = 0;
  state.smSelectedDescId = null;
  els.smProgress.textContent = `${state.smBatchIndex + 1} / ${batches.length}`;
  els.smResult.classList.add("hidden");

  els.smStudentGrid.replaceChildren(...batch.map((student) => {
    const card = document.createElement("div");
    card.className = "sm-student-card";
    card.dataset.studentId = student.id;
    const imageFrame = document.createElement("div");
    imageFrame.className = "sm-student-img-frame";
    const img = document.createElement("img");
    img.className = "sm-student-img";
    img.src = student.imagePath;
    img.alt = student.name;
    const imageZoom = Number(state.exercise?.studentImageZoom || 1);
    if (imageZoom !== 1) {
      img.style.transform = `scale(${imageZoom})`;
    }
    imageFrame.append(img);
    const nameEl = document.createElement("span");
    nameEl.className = "sm-student-name";
    nameEl.textContent = student.name;
    card.append(imageFrame, nameEl);
    card.addEventListener("click", () => handleSmStudentClick(student.id));
    return card;
  }));

  const batchHasGlasses = batch.some((s) => s.hasGlasses);
  const shuffled = shuffle([...batch]);
  els.smDescList.replaceChildren(...shuffled.map((student) => {
    const card = document.createElement("div");
    card.className = "sm-desc-card";
    card.dataset.descId = student.id;
    let desc = student.description;
    if (batchHasGlasses) {
      desc += student.hasGlasses
        ? ` S/he has got ${student.glassesType} glasses.`
        : " S/he hasn't got glasses.";
    }
    card.textContent = desc;
    card.addEventListener("click", () => handleSmDescClick(student.id));
    return card;
  }));
}

function handleSmDescClick(descId) {
  if (els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${descId}"]`)?.classList.contains("sm-matched")) return;
  els.smDescList.querySelectorAll(".sm-desc-card").forEach((c) => c.classList.remove("sm-selected"));
  const card = els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${descId}"]`);
  if (card) card.classList.add("sm-selected");
  state.smSelectedDescId = descId;
}

function handleSmStudentClick(studentId) {
  if (state.smSelectedDescId === null) return;
  const studentCard = els.smStudentGrid.querySelector(`.sm-student-card[data-student-id="${studentId}"]`);
  if (!studentCard || studentCard.classList.contains("sm-matched")) return;
  const isCorrect = Number(state.smSelectedDescId) === studentId;
  const img = studentCard.querySelector(".sm-student-img");
  Stamp.show(img, isCorrect ? "correct" : "wrong", { duration: isCorrect ? 1100 : 900 });
  playWavFeedback(isCorrect);
  if (isCorrect) {
    studentCard.classList.add("sm-matched");
    const descCard = els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${state.smSelectedDescId}"]`);
    if (descCard) descCard.classList.add("sm-matched");
    state.smSelectedDescId = null;
    state.smMatched++;
    state.smScore++;
    if (state.smMatched === Number(studentCard.closest(".sm-student-grid")?.children.length || 4)) {
      const isLast = state.smBatchIndex >= state.smBatches.length - 1;
      setTimeout(() => {
        if (isLast) {
          hideAllScreens();
          els.exerciseResultScore.textContent = `${state.smScore} / ${state.exercise.students.length}`;
          els.exerciseResultMessage.textContent = `${state.smScore} students matched correctly.`;
          els.exerciseResult.classList.remove("hidden");
        } else {
          els.smResultText.textContent = "Well done! Ready for the next group?";
          els.smResult.classList.remove("hidden");
        }
      }, 700);
    }
  } else {
    setTimeout(() => {
      const descCard = els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${state.smSelectedDescId}"]`);
      if (descCard) descCard.classList.remove("sm-selected");
      state.smSelectedDescId = null;
    }, 900);
  }
}

