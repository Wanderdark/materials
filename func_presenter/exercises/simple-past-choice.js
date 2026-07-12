(function () {
  const EXERCISE_ID = "simple-past-choice";
  const FUNCTION_ID = "simple-past-tense-grade7";
  const SOURCE_SLIDE_ID = "simplepast-final-mixed-practice";
  const GROUP_SIZE = 10;
  const MAX_GROUPS = 4;
  const MAX_QUESTIONS = GROUP_SIZE * MAX_GROUPS;

  let runState = null;

  function shuffleItems(items) {
    if (typeof window.shuffleActivityItems === "function") {
      return window.shuffleActivityItems(items);
    }
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function cloneSegments(segments) {
    return (segments || []).map((segment) => ({
      ...segment,
      options: segment.options ? [...segment.options] : undefined
    }));
  }

  function getSimplePastModule() {
    return (window.functionModules || []).find((module) => module.id === FUNCTION_ID);
  }

  function collectFinalPracticePool() {
    const functionModule = getSimplePastModule();
    const sourceSlide = functionModule?.sentences?.find((slide) => slide.id === SOURCE_SLIDE_ID);
    return (sourceSlide?.items || [])
      .filter((item) => item.kind === "inline-choice" && Array.isArray(item.segments))
      .map((item, index) => ({
        id: `simple-past-final-${index + 1}`,
        imagePath: item.imagePathOnShow || item.imagePath || "",
        segments: cloneSegments(item.segments)
      }));
  }

  function ensureScreen() {
    let screen = document.getElementById("simplePastChoiceScreen");
    if (screen) return screen;

    screen = document.createElement("section");
    screen.id = "simplePastChoiceScreen";
    screen.className = "simple-past-choice-screen hidden";
    screen.innerHTML = `
      <header class="presentation-header">
        <button id="spChoiceExitTop" class="icon-button" type="button">EXIT</button>
        <div class="session-info"><span id="spChoiceGrade">GRADE 7</span><strong id="spChoiceTitle">CHOOSE THE CORRECT OPTION</strong></div>
        <div class="progress"><strong id="spChoiceProgress">1 / 40</strong><span>QUESTIONS</span></div>
      </header>
      <article class="sp-choice-card">
        <section class="sp-choice-visual-panel">
          <img id="spChoiceImage" alt="">
        </section>
        <section class="sp-choice-text-panel">
          <p class="reference-type">SIMPLE PAST TENSE</p>
          <div id="spChoiceSentence" class="sp-choice-sentence"></div>
          <p id="spChoiceFeedback" class="exercise-feedback" aria-live="polite">Choose the correct option.</p>
          <div id="spChoiceQuestionActions" class="sp-choice-actions hidden">
            <button id="spChoiceNext" class="primary-button" type="button">NEXT</button>
          </div>
          <div id="spChoiceGroupActions" class="sp-choice-actions hidden">
            <button id="spChoiceContinue" class="primary-button" type="button">CONTINUE</button>
            <button id="spChoiceExit" class="secondary-button" type="button">EXIT</button>
          </div>
        </section>
      </article>
    `;
    document.body.append(screen);
    return screen;
  }

  function ensureStyles() {
    if (document.getElementById("simplePastChoiceStyles")) return;
    const style = document.createElement("style");
    style.id = "simplePastChoiceStyles";
    style.textContent = `
      .simple-past-choice-screen {
        position: fixed;
        inset: 0;
        z-index: 1200;
        display: grid;
        min-height: 100vh;
        grid-template-rows: auto minmax(0, 1fr);
        gap: 18px;
        padding: 24px;
        overflow: auto;
        background: var(--bg);
      }
      .simple-past-choice-screen.hidden { display: none; }
      .sp-choice-card {
        display: grid;
        grid-template-columns: minmax(360px, .95fr) minmax(460px, 1.05fr);
        overflow: hidden;
        border: 1px solid rgba(255,255,255,.10);
        border-radius: 28px;
        background: var(--panel);
        box-shadow: var(--shadow);
      }
      .sp-choice-visual-panel,
      .sp-choice-text-panel {
        display: grid;
        align-content: center;
        justify-items: center;
        padding: clamp(24px, 4vw, 54px);
      }
      .sp-choice-visual-panel {
        background: rgba(3, 11, 29, .34);
      }
      .sp-choice-visual-panel img {
        width: min(560px, 94%);
        aspect-ratio: 1 / 1;
        object-fit: contain;
        border-radius: 28px;
        background: white;
        box-shadow: 0 20px 50px rgba(0,0,0,.22);
      }
      .sp-choice-text-panel {
        align-content: center;
        gap: 22px;
      }
      .sp-choice-sentence {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: min(860px, 100%);
        padding: clamp(22px, 3vw, 42px);
        border: 1px solid rgba(102,136,255,.36);
        border-radius: 26px;
        color: #f4f7ff;
        background: rgba(20, 43, 92, .70);
        font-size: clamp(27px, 3vw, 54px);
        font-weight: 950;
        line-height: 1.28;
        text-align: center;
      }
      .sp-choice-text {
        display: inline;
      }
      .sp-choice-inline {
        position: relative;
        display: inline-flex;
      }
      .sp-choice-trigger {
        min-width: 92px;
        min-height: 58px;
        padding: 7px 20px;
        border: 3px solid #6688ff;
        border-radius: 16px;
        color: var(--yellow);
        background: #173267;
        font: inherit;
        font-size: clamp(22px, 2.4vw, 40px);
        font-weight: 950;
        cursor: pointer;
      }
      .sp-choice-trigger.correct {
        border-color: var(--mint);
        color: #dffdf2;
        background: #135342;
        box-shadow: 0 0 18px rgba(101,230,184,.30);
      }
      .sp-choice-trigger.wrong {
        border-color: #ff8066;
        color: #ffe9e4;
        background: #6e2c25;
        animation: sortShake .35s ease-in-out;
      }
      .sp-choice-popup {
        position: absolute;
        z-index: 20;
        left: 50%;
        bottom: calc(100% + 10px);
        display: grid;
        gap: 8px;
        min-width: 180px;
        padding: 10px;
        border: 2px solid rgba(255,216,77,.70);
        border-radius: 16px;
        background: rgba(8, 18, 42, .98);
        box-shadow: 0 18px 40px rgba(0,0,0,.38);
        transform: translateX(-50%);
      }
      .sp-choice-popup button {
        min-height: 44px;
        padding: 7px 16px;
        border: 2px solid #506ab5;
        border-radius: 12px;
        color: #f4f7ff;
        background: #173267;
        font-size: clamp(17px, 1.7vw, 28px);
        font-weight: 950;
        cursor: pointer;
      }
      .sp-choice-popup button:hover {
        border-color: var(--yellow);
      }
      .sp-choice-actions {
        display: flex;
        justify-content: center;
        gap: 16px;
      }
      .sp-choice-actions.hidden { display: none; }
      @media (max-width: 900px) {
        .sp-choice-card { grid-template-columns: 1fr; }
        .sp-choice-visual-panel img { width: min(420px, 92%); }
      }
    `;
    document.head.append(style);
  }

  function closePopups() {
    document.querySelectorAll(".sp-choice-popup").forEach((popup) => popup.remove());
  }

  function playResult(isCorrect) {
    window.exerciseActivityModules?.showStamp?.(isCorrect);
    if (typeof window.playFeedbackSound === "function") {
      window.playFeedbackSound(isCorrect);
      return;
    }

    if (isCorrect) window.StudentGame?.onCorrect?.();
    else window.StudentGame?.onWrong?.();
    const audio = new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`);
    audio.play().catch(() => {});
  }

  function updateProgress() {
    const progress = document.getElementById("spChoiceProgress");
    if (progress && runState) {
      progress.textContent = `${Math.min(runState.index + 1, runState.total)} / ${runState.total}`;
    }
  }

  function answeredChoices() {
    return [...document.querySelectorAll("#spChoiceSentence .sp-choice-trigger")]
      .filter((button) => button.dataset.answered === "true").length;
  }

  function totalChoices() {
    return document.querySelectorAll("#spChoiceSentence .sp-choice-trigger").length;
  }

  function handleQuestionComplete() {
    if (!runState || answeredChoices() !== totalChoices()) return;
    const isCorrect = !document.querySelector("#spChoiceSentence .sp-choice-trigger.wrong");
    runState.correct += isCorrect ? 1 : 0;
    const feedback = document.getElementById("spChoiceFeedback");
    feedback.textContent = isCorrect ? "Correct!" : "Check the correct answer and continue.";
    feedback.className = `exercise-feedback ${isCorrect ? "correct" : "wrong"}`;
    document.getElementById("spChoiceQuestionActions").classList.remove("hidden");
  }

  function chooseOption(button, segment, choice) {
    if (button.dataset.answered === "true") return;
    closePopups();
    button.dataset.answered = "true";
    button.disabled = true;
    const isCorrect = choice === segment.answer;
    button.textContent = isCorrect ? choice : segment.answer;
    button.classList.add(isCorrect ? "correct" : "wrong");
    playResult(isCorrect);
    handleQuestionComplete();
  }

  function openPopup(button, segment) {
    if (button.dataset.answered === "true") return;
    closePopups();
    const popup = document.createElement("div");
    popup.className = "sp-choice-popup";
    (segment.options || []).forEach((choice) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.textContent = choice;
      optionButton.addEventListener("click", () => chooseOption(button, segment, choice));
      popup.append(optionButton);
    });
    button.closest(".sp-choice-inline").append(popup);
  }

  function buildSentence(segments) {
    const wrap = document.createDocumentFragment();
    (segments || []).forEach((segment) => {
      if (segment.options) {
        const group = document.createElement("span");
        group.className = "sp-choice-inline";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "sp-choice-trigger";
        button.textContent = "?";
        button.addEventListener("click", () => openPopup(button, segment));
        group.append(button);
        wrap.append(group);
        return;
      }
      const span = document.createElement("span");
      span.className = "sp-choice-text";
      span.textContent = segment.text || "";
      wrap.append(span);
    });
    return wrap;
  }

  function renderQuestion() {
    const question = runState.questions[runState.index];
    if (!question) {
      showGroupActions(true);
      return;
    }
    closePopups();
    updateProgress();
    document.getElementById("spChoiceImage").src = question.imagePath;
    document.getElementById("spChoiceImage").alt = "Simple past visual";
    document.getElementById("spChoiceSentence").replaceChildren(buildSentence(question.segments));
    const feedback = document.getElementById("spChoiceFeedback");
    feedback.textContent = "Choose the correct option.";
    feedback.className = "exercise-feedback";
    document.getElementById("spChoiceQuestionActions").classList.add("hidden");
    document.getElementById("spChoiceGroupActions").classList.add("hidden");
  }

  function showGroupActions(isFinished) {
    const questionActions = document.getElementById("spChoiceQuestionActions");
    const groupActions = document.getElementById("spChoiceGroupActions");
    const continueButton = document.getElementById("spChoiceContinue");
    const feedback = document.getElementById("spChoiceFeedback");
    questionActions.classList.add("hidden");
    groupActions.classList.remove("hidden");
    continueButton.classList.toggle("hidden", isFinished);
    feedback.textContent = isFinished
      ? `${runState.correct} / ${runState.total} correct. Exercise complete.`
      : `Group ${runState.group + 1} complete. Continue or exit.`;
    feedback.className = "exercise-feedback correct";
  }

  function nextQuestion() {
    runState.index += 1;
    const answeredInGroup = runState.index - (runState.group * GROUP_SIZE);
    const isGroupEnd = answeredInGroup >= GROUP_SIZE;
    const isFinished = runState.index >= runState.total || runState.group >= MAX_GROUPS - 1;
    if (isGroupEnd || isFinished) {
      showGroupActions(isFinished);
      return;
    }
    renderQuestion();
  }

  function continueGroup() {
    runState.group += 1;
    renderQuestion();
  }

  function exitExercise(api) {
    closePopups();
    document.getElementById("simplePastChoiceScreen")?.classList.add("hidden");
    api.returnToSetup();
  }

  function startSimplePastChoice(exercise, api) {
    ensureStyles();
    const screen = ensureScreen();
    const pool = shuffleItems(collectFinalPracticePool()).slice(0, MAX_QUESTIONS);
    runState = {
      questions: pool,
      index: 0,
      group: 0,
      total: pool.length,
      correct: 0
    };

    api.hideAllScreens();
    document.getElementById("spChoiceGrade").textContent = `GRADE ${api.state.grade}`;
    document.getElementById("spChoiceTitle").textContent = exercise.title || "CHOOSE THE CORRECT OPTION";
    document.getElementById("spChoiceExitTop").onclick = () => exitExercise(api);
    document.getElementById("spChoiceExit").onclick = () => exitExercise(api);
    document.getElementById("spChoiceNext").onclick = nextQuestion;
    document.getElementById("spChoiceContinue").onclick = continueGroup;
    screen.classList.remove("hidden");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    renderQuestion();
  }

  const simplePastChoiceExercise = {
    id: EXERCISE_ID,
    activity: "simple-past-choice",
    title: "CHOOSE THE CORRECT OPTION",
    supports(functionModule) {
      return functionModule.id === FUNCTION_ID;
    }
  };

  window.startSimplePastChoice = startSimplePastChoice;
  window.exerciseModules = window.exerciseModules || [];
  window.exerciseModules.push(simplePastChoiceExercise);
})();
