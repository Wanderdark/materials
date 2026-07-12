const simplePastVerbCardBasicPool = [
  ["HAVE", "HAD"], ["CALL", "CALLED"], ["EAT", "ATE"], ["READ", "READ"], ["RIDE", "RODE"],
  ["LIVE", "LIVED"], ["BUY", "BOUGHT"], ["GET", "GOT"], ["SWIM", "SWAM"], ["USE", "USED"],
  ["MAKE", "MADE"], ["ASK", "ASKED"], ["LIKE", "LIKED"], ["HELP", "HELPED"], ["WRITE", "WROTE"],
  ["LISTEN", "LISTENED"], ["SELL", "SOLD"], ["DRINK", "DRANK"], ["DO", "DID"], ["LOSE", "LOST"],
  ["WATCH", "WATCHED"], ["GO", "WENT"], ["TAKE", "TOOK"], ["PLAY", "PLAYED"], ["SEE", "SAW"]
];

const simplePastVerbCardAdvancedPool = [
  ["SIT", "SAT"], ["FEED", "FED"], ["SAY", "SAID"], ["FALL", "FELL"], ["GIVE", "GAVE"],
  ["DRAW", "DREW"], ["LEAVE", "LEFT"], ["FEEL", "FELT"], ["BRING", "BROUGHT"], ["CATCH", "CAUGHT"],
  ["SPEAK", "SPOKE"], ["WIN", "WON"], ["BREAK", "BROKE"], ["COME", "CAME"], ["RUN", "RAN"],
  ["TELL", "TOLD"], ["DRIVE", "DROVE"], ["FLY", "FLEW"], ["SLEEP", "SLEPT"], ["WAKE", "WOKE"]
];

function shuffleSimplePastVerbCards(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startSimplePastVerbCards(exercise, api) {
  const $ = (id) => document.getElementById(id);
  const screen = $("verbCardScreen");
  const levelPanel = $("verbCardLevelPanel");
  const playPanel = $("verbCardPlayPanel");
  const keyboardPanel = $("verbCardKeyboardPanel");
  const keyboard = $("verbCardKeyboard");
  const front = $("verbCardFront");
  const back = $("verbCardBack");
  const flip = $("verbCardFlip");
  const input = $("verbCardInput");
  const feedback = $("verbCardFeedback");
  const progress = $("verbCardProgressText");
  const poolMessage = $("verbCardPoolMessage");
  const nextButton = $("verbCardNextButton");
  const inlineExit = $("verbCardInlineExitButton");
  const basicButton = $("verbCardBasicButton");
  const advancedButton = $("verbCardAdvancedButton");
  const exitButton = $("verbCardExitButton");

  const state = {
    exercise,
    api,
    sourcePool: [],
    pool: [],
    current: null,
    input: "",
    answered: false,
    round: 0
  };

  function setInput(value) {
    state.input = value.slice(0, 18).toUpperCase();
    input.textContent = state.input || "TYPE THE PAST FORM";
    input.classList.toggle("empty", !state.input);
    RGBKeyboard?.resetSubmit?.();
  }

  function refillPool(showMessage) {
    state.pool = shuffleSimplePastVerbCards(state.sourcePool);
    if (showMessage) {
      poolMessage.textContent = "VERB POOL EMPTY - SHUFFLING...";
      poolMessage.classList.remove("hidden");
    }
  }

  function fitCardText(face) {
    face.style.fontSize = "";
    if (!face.clientWidth) return;
    let size = parseFloat(getComputedStyle(face).fontSize);
    while (face.scrollWidth > face.clientWidth && size > 24) {
      size -= 3;
      face.style.fontSize = `${size}px`;
    }
  }

  function renderCard() {
    if (!state.pool.length) refillPool(true);
    state.current = state.pool.pop();
    state.round += 1;
    state.answered = false;
    flip.classList.remove("flipped");
    front.textContent = state.current[0];
    back.textContent = state.current[1];
    requestAnimationFrame(() => {
      fitCardText(front);
      fitCardText(back);
    });
    progress.textContent = `${state.round}`;
    feedback.textContent = "";
    feedback.className = "exercise-feedback";
    nextButton.classList.add("hidden");
    inlineExit.classList.add("hidden");
    keyboardPanel.classList.remove("hidden");
    setInput("");
  }

  function submitAnswer() {
    if (state.answered) return;
    state.answered = true;
    const isCorrect = state.input.trim() === state.current[1];
    flip.classList.add("flipped");
    keyboardPanel.classList.add("hidden");
    nextButton.classList.remove("hidden");
    inlineExit.classList.remove("hidden");
    feedback.textContent = isCorrect ? "Correct!" : `Wrong. Correct answer: ${state.current[1]}`;
    feedback.className = `exercise-feedback ${isCorrect ? "correct" : "wrong"}`;
    window.exerciseActivityModules?.showStamp?.(isCorrect);
    if (isCorrect) window.StudentGame?.onCorrect?.();
    else window.StudentGame?.onWrong?.();
  }

  function handleKey(key) {
    if (state.answered) return;
    if (key === "SUBMIT") {
      submitAnswer();
      return;
    }
    if (key === "⌫") {
      setInput(state.input.slice(0, -1));
      return;
    }
    if (/^[A-Z]$/.test(key)) setInput(state.input + key);
  }

  function chooseLevel(level) {
    state.sourcePool = level === "advanced"
      ? [...simplePastVerbCardBasicPool, ...simplePastVerbCardAdvancedPool]
      : [...simplePastVerbCardBasicPool];
    state.round = 0;
    levelPanel.classList.add("hidden");
    playPanel.classList.remove("hidden");
    poolMessage.classList.add("hidden");
    refillPool(false);
    RGBKeyboard.build(keyboard, handleKey);
    renderCard();
  }

  api.hideAllScreens();
  $("verbCardGradeLabel").textContent = `GRADE ${api.state.grade}`;
  $("verbCardTitle").textContent = exercise.title || "VERB CARDS";
  levelPanel.classList.remove("hidden");
  playPanel.classList.add("hidden");
  screen.classList.remove("hidden");

  basicButton.onclick = () => chooseLevel("basic");
  advancedButton.onclick = () => chooseLevel("advanced");
  nextButton.onclick = () => {
    poolMessage.classList.add("hidden");
    renderCard();
  };
  inlineExit.onclick = api.returnToSetup;
  exitButton.onclick = api.returnToSetup;
}

const simplePastVerbCardsExercise = {
  id: "simple-past-verb-cards",
  title: "VERB CARDS",
  activity: "simple-past-verb-cards",
  supports(functionModule) {
    return functionModule.id === "simple-past-tense-grade7";
  }
};

window.startSimplePastVerbCards = startSimplePastVerbCards;
window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(simplePastVerbCardsExercise);
