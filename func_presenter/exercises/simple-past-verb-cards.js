const simplePastVerbCardBasicPool = [
  ["HAVE", "HAD"], ["EAT", "ATE"], ["READ", "READ"], ["RIDE", "RODE"],
  ["BUY", "BOUGHT"], ["GET", "GOT"], ["SWIM", "SWAM"], ["USE", "USED"],
  ["MAKE", "MADE"], ["WRITE", "WROTE"],
  ["LISTEN", "LISTENED"], ["SELL", "SOLD"], ["DRINK", "DRANK"], ["DO", "DID"], ["LOSE", "LOST"],
  ["WATCH", "WATCHED"], ["GO", "WENT"], ["TAKE", "TOOK"], ["PLAY", "PLAYED"], ["SEE", "SAW"],
  ["STUDY", "STUDIED"], ["COOK", "COOKED"], ["TRAVEL", "TRAVELLED", ["TRAVELLED", "TRAVELED"]]
];

const simplePastVerbCardAdvancedPool = [
  ["SIT", "SAT"], ["FEED", "FED"], ["SAY", "SAID"], ["FALL", "FELL"], ["GIVE", "GAVE"],
  ["DRAW", "DREW"], ["LEAVE", "LEFT"], ["FEEL", "FELT"], ["BRING", "BROUGHT"], ["CATCH", "CAUGHT"],
  ["SPEAK", "SPOKE"], ["WIN", "WON"], ["BREAK", "BROKE"], ["COME", "CAME"], ["RUN", "RAN"],
  ["TELL", "TOLD"], ["DRIVE", "DROVE"], ["FLY", "FLEW"], ["SLEEP", "SLEPT"], ["WAKE", "WOKE"],
  ["SING", "SANG"], ["THROW", "THREW"]
];

function simplePastOneLetterOff(a, b) {
  if (a === b) return false;
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i += 1; j += 1; continue; }
    edits += 1;
    if (edits > 1) return false;
    if (a.length === b.length) { i += 1; j += 1; }
    else if (a.length > b.length) { i += 1; }
    else { j += 1; }
  }
  edits += (a.length - i) + (b.length - j);
  return edits === 1;
}

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
  const frontImage = $("verbCardImage");
  const frontLabel = $("verbCardFrontLabel");
  const back = $("verbCardBack");
  const backImage = $("verbCardBackImage");
  const backLabel = $("verbCardBackLabel");
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

  function verbImagePath(base) {
    return `../images/snapwords/${base.toLowerCase()}.webp`;
  }

  function verbBackImagePath(word) {
    return `../images/snapwords/v2/${word.toLowerCase()}.webp`;
  }

  function loadCardImage(face, imgEl, labelEl, candidates, displayText) {
    let index = 0;
    const tryNext = () => {
      if (index >= candidates.length) {
        imgEl.classList.add("hidden");
        labelEl.textContent = displayText;
        labelEl.classList.remove("hidden");
        requestAnimationFrame(() => fitCardText(face));
        return;
      }
      imgEl.src = candidates[index];
      index += 1;
    };
    labelEl.classList.add("hidden");
    imgEl.classList.remove("hidden");
    imgEl.onerror = tryNext;
    tryNext();
  }

  function renderCardFront(base) {
    frontImage.alt = base;
    loadCardImage(front, frontImage, frontLabel, [verbImagePath(base)], base);
  }

  function renderCardBack(past, variants) {
    backImage.alt = past;
    const candidates = [past, ...(variants || [])].map(verbBackImagePath);
    loadCardImage(back, backImage, backLabel, candidates, past);
  }

  function setInput(value) {
    state.input = value.slice(0, 18).toUpperCase();
    const base = state.current ? state.current[0] : "";
    input.textContent = `${base} - ${state.input || "TYPE THE PAST FORM"}`;
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
    renderCardFront(state.current[0]);
    renderCardBack(state.current[1], state.current[2]);
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
    const acceptedAnswers = state.current[2] || [state.current[1]];
    const guess = state.input.trim();
    const isCorrect = acceptedAnswers.includes(guess);
    const isPartial = !isCorrect && acceptedAnswers.some((answer) => simplePastOneLetterOff(guess, answer));
    flip.classList.add("flipped");
    keyboardPanel.classList.add("hidden");
    nextButton.classList.remove("hidden");
    inlineExit.classList.remove("hidden");
    feedback.textContent = isCorrect ? "Correct!" : `Wrong. Correct answer: ${state.current[1]}`;
    feedback.className = `exercise-feedback ${isCorrect ? "correct" : "wrong"}`;
    window.exerciseActivityModules?.showStamp?.(isCorrect);
    playFeedbackSound(isCorrect);
    if (window.PenaltyShootout) {
      const state = isCorrect ? "correct" : isPartial ? "partial" : "wrong";
      const stateLabel = isCorrect
        ? "✅ CORRECT ANSWER — FULL POWER!"
        : isPartial
          ? "🟡 SO CLOSE! (1 letter off)"
          : "❌ WRONG ANSWER";
      setTimeout(() => {
        window.PenaltyShootout.open({ state, stateLabel });
      }, 1200);
    }
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
