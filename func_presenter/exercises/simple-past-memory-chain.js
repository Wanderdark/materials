const simplePastMemoryChainPool = [
  ["HAVE", "HAD"], ["EAT", "ATE"], ["READ", "READ"], ["RIDE", "RODE"],
  ["BUY", "BOUGHT"], ["GET", "GOT"], ["SWIM", "SWAM"], ["USE", "USED"],
  ["MAKE", "MADE"], ["WRITE", "WROTE"], ["LISTEN", "LISTENED"], ["SELL", "SOLD"],
  ["DRINK", "DRANK"], ["DO", "DID"], ["LOSE", "LOST"], ["WATCH", "WATCHED"],
  ["GO", "WENT"], ["TAKE", "TOOK"], ["PLAY", "PLAYED"], ["SEE", "SAW"],
  ["STUDY", "STUDIED"], ["COOK", "COOKED"], ["TRAVEL", "TRAVELLED", ["TRAVELLED", "TRAVELED"]],
  ["SIT", "SAT"], ["FEED", "FED"], ["SAY", "SAID"], ["FALL", "FELL"], ["GIVE", "GAVE"],
  ["DRAW", "DREW"], ["LEAVE", "LEFT"], ["FEEL", "FELT"], ["BRING", "BROUGHT"],
  ["CATCH", "CAUGHT"], ["SPEAK", "SPOKE"], ["WIN", "WON"], ["BREAK", "BROKE"],
  ["COME", "CAME"], ["RUN", "RAN"], ["TELL", "TOLD"], ["DRIVE", "DROVE"],
  ["FLY", "FLEW"], ["SLEEP", "SLEPT"], ["WAKE", "WOKE"], ["SING", "SANG"], ["THROW", "THREW"]
];

function shuffleSimplePastMemoryChain(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startSimplePastMemoryChain(exercise, api) {
  const root = ensureSimplePastMemoryChainScreen();
  const $ = (selector) => root.querySelector(selector);
  const els = {
    exit: $(".memory-chain-exit"),
    title: $(".memory-chain-title"),
    progress: $(".memory-chain-progress"),
    stage: $(".memory-chain-stage"),
    card: $(".memory-chain-card"),
    cardImg: $(".memory-chain-card img"),
    cardLabel: $(".memory-chain-card-label"),
    cardWord: $(".memory-chain-card-word"),
    input: $(".memory-chain-input"),
    keyboardPanel: $(".memory-chain-keyboard-panel"),
    keyboard: $(".memory-chain-keyboard"),
    feedback: $(".memory-chain-feedback"),
    restart: $(".memory-chain-restart"),
    next: $(".memory-chain-next")
  };

  const state = {
    api,
    chain: shuffleSimplePastMemoryChain(simplePastMemoryChainPool).slice(0, 5),
    level: 1,
    answerIndex: 0,
    input: "",
    acceptingInput: false,
    timers: []
  };

  function clearTimers() {
    state.timers.forEach((timer) => clearTimeout(timer));
    state.timers = [];
  }

  function wait(ms, fn) {
    const timer = setTimeout(fn, ms);
    state.timers.push(timer);
  }

  function frontImagePath(base) {
    return `../images/snapwords/${base.toLowerCase()}.webp`;
  }

  function backImageCandidates(past, accepted) {
    const words = [past, ...(accepted || [])];
    if (past === "TRAVELLED") words.push("TRAVELED");
    return [...new Set(words)].map((word) => `../images/snapwords/v2/${word.toLowerCase()}.webp`);
  }

  function showCardImage(candidates, label) {
    let index = 0;
    els.cardWord.textContent = label;
    const tryNext = () => {
      if (index >= candidates.length) {
        els.cardImg.classList.add("hidden");
        els.cardLabel.textContent = label;
        els.cardLabel.classList.remove("hidden");
        return;
      }
      els.cardImg.src = candidates[index];
      index += 1;
    };
    els.cardLabel.classList.add("hidden");
    els.cardImg.classList.remove("hidden");
    els.cardImg.onerror = tryNext;
    tryNext();
  }

  function showWordCard(entry, side) {
    const [base, past, accepted] = entry;
    els.card.classList.remove("memory-chain-card-back");
    if (side === "back") els.card.classList.add("memory-chain-card-back");
    const label = side === "back" ? past : base;
    const candidates = side === "back" ? backImageCandidates(past, accepted) : [frontImagePath(base)];
    showCardImage(candidates, label);
    speakMemoryChainWord(label, { base, side });
  }

  function setInput(value) {
    state.input = value.slice(0, 18).toUpperCase();
    const current = state.chain[state.answerIndex];
    els.input.textContent = `${current[0]} - ${state.input || "TYPE PAST FORM"}`;
    els.input.classList.toggle("empty", !state.input);
    RGBKeyboard?.resetSubmit?.();
  }

  function updateProgress(mode) {
    const answerTotal = Math.min(state.level, state.chain.length);
    const answerText = mode === "answer" ? ` | ANSWER ${state.answerIndex + 1} / ${answerTotal}` : "";
    els.progress.textContent = `LEVEL ${state.level} / 5${answerText}`;
  }

  function beginAnswerPhase() {
    state.acceptingInput = true;
    state.answerIndex = 0;
    els.stage.textContent = "WRITE THE PAST FORMS";
    els.card.classList.add("hidden");
    els.keyboardPanel.classList.remove("hidden");
    els.input.classList.remove("hidden");
    els.feedback.textContent = "";
    updateProgress("answer");
    setInput("");
  }

  function runDisplaySequence() {
    clearTimers();
    state.acceptingInput = false;
    els.card.classList.remove("hidden");
    els.keyboardPanel.classList.add("hidden");
    els.input.classList.add("hidden");
    els.restart.classList.add("hidden");
    els.next.classList.add("hidden");
    els.feedback.textContent = "";
    updateProgress("show");

    const sequence = [];
    for (let i = 0; i < state.level; i += 1) {
      const isNewVerb = i === state.level - 1;
      sequence.push({ entry: state.chain[i], side: "front", duration: 3000, stage: isNewVerb ? "NEW VERB" : "REMEMBER" });
      sequence.push({ entry: state.chain[i], side: "back", duration: isNewVerb ? 4000 : 1000, stage: isNewVerb ? "NEW PAST FORM" : "QUICK REMINDER" });
    }

    let index = 0;
    const showNext = () => {
      if (index >= sequence.length) {
        beginAnswerPhase();
        return;
      }
      const item = sequence[index];
      els.stage.textContent = item.stage;
      showWordCard(item.entry, item.side);
      index += 1;
      wait(item.duration, showNext);
    };
    showNext();
  }

  function finishGame(isVictory) {
    clearTimers();
    state.acceptingInput = false;
    els.keyboardPanel.classList.add("hidden");
    els.input.classList.add("hidden");
    els.stage.textContent = isVictory ? "VICTORY!" : "GAME OVER";
    els.feedback.textContent = isVictory ? "You completed the memory chain." : "The chain broke. Try again.";
    els.feedback.className = `exercise-feedback memory-chain-feedback ${isVictory ? "correct" : "wrong"}`;
    els.restart.classList.remove("hidden");
    els.next.classList.add("hidden");
  }

  function submitAnswer() {
    if (!state.acceptingInput) return;
    const current = state.chain[state.answerIndex];
    const accepted = current[2] || [current[1]];
    const isCorrect = accepted.includes(state.input.trim());
    window.exerciseActivityModules?.showStamp?.(isCorrect);
    window.playFeedbackSound?.(isCorrect);
    if (!isCorrect) {
      finishGame(false);
      return;
    }
    state.answerIndex += 1;
    if (state.answerIndex < state.level) {
      updateProgress("answer");
      setInput("");
      els.feedback.textContent = "Correct. Next verb.";
      els.feedback.className = "exercise-feedback memory-chain-feedback correct";
      return;
    }
    if (state.level >= 5) {
      finishGame(true);
      return;
    }
    state.acceptingInput = false;
    els.keyboardPanel.classList.add("hidden");
    els.input.classList.add("hidden");
    els.feedback.textContent = "Level complete.";
    els.feedback.className = "exercise-feedback memory-chain-feedback correct";
    els.next.classList.remove("hidden");
  }

  function handleKey(key) {
    if (!state.acceptingInput) return;
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

  function restart() {
    clearTimers();
    state.chain = shuffleSimplePastMemoryChain(simplePastMemoryChainPool).slice(0, 5);
    state.level = 1;
    state.answerIndex = 0;
    state.input = "";
    state.acceptingInput = false;
    runDisplaySequence();
  }

  api.hideAllScreens();
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  root.classList.remove("hidden");
  els.title.textContent = exercise.title || "SNAPWORD MEMORY";
  RGBKeyboard.build(els.keyboard, handleKey);
  els.exit.onclick = () => {
    clearTimers();
    root.classList.add("hidden");
    api.returnToSetup();
  };
  els.restart.onclick = restart;
  els.next.onclick = () => {
    state.level += 1;
    runDisplaySequence();
  };
  restart();
}

function ensureSimplePastMemoryChainScreen() {
  let screen = document.getElementById("simplePastMemoryChainScreen");
  if (screen) return screen;
  screen = document.createElement("section");
  screen.id = "simplePastMemoryChainScreen";
  screen.className = "memory-chain-screen hidden";
  screen.innerHTML = `
    <header class="presentation-header">
      <button class="icon-button memory-chain-exit" type="button">EXIT</button>
      <div class="session-info"><span>GRADE 7</span><strong class="memory-chain-title">SNAPWORD MEMORY</strong></div>
      <div class="progress"><strong class="memory-chain-progress">LEVEL 1 / 5</strong><span>CHAIN</span></div>
    </header>
    <article class="memory-chain-board">
      <p class="reference-type memory-chain-stage">WATCH</p>
      <div class="memory-chain-card">
        <img class="hidden" alt="">
        <span class="memory-chain-card-word"></span>
        <span class="memory-chain-card-label hidden"></span>
      </div>
      <div class="memory-chain-input empty hidden">TYPE PAST FORM</div>
      <div class="memory-chain-keyboard-panel hidden">
        <div class="memory-chain-keyboard"></div>
      </div>
      <p class="exercise-feedback memory-chain-feedback" aria-live="polite"></p>
      <div class="memory-chain-actions">
        <button class="primary-button memory-chain-next hidden" type="button">NEXT LEVEL</button>
        <button class="secondary-button memory-chain-restart hidden" type="button">RESTART</button>
      </div>
    </article>
  `;
  document.body.appendChild(screen);
  return screen;
}

function speakMemoryChainWord(word, options = {}) {
  if (!("speechSynthesis" in window) || !word) return;
  window.speechSynthesis.cancel();
  const spokenWord = options.side === "back" && options.base === "READ" ? "red" : word.toLowerCase();
  const utterance = new SpeechSynthesisUtterance(spokenWord);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1.03;
  window.speechSynthesis.speak(utterance);
}

const simplePastMemoryChainExercise = {
  id: "simple-past-memory-chain",
  title: "SNAPWORD MEMORY",
  activity: "simple-past-memory-chain",
  supports(functionModule) {
    return functionModule.id === "simple-past-tense-grade7";
  }
};

window.startSimplePastMemoryChain = startSimplePastMemoryChain;
window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(simplePastMemoryChainExercise);
