/* SIMON SAYS — body-parts listening/clicking game, ported from func_presenter's
   possessive-adjectives-simon.js. Character art is shared cross-app (referenced
   directly from ../func_presenter/images/...), so nothing is duplicated here.

   Usage: window.startPossSimon({ grade, playFeedbackSound, onExit })
     grade            — number, shown in the header ("GRADE 5")
     playFeedbackSound(isCorrect) — host's existing correct/wrong sound hook
     onExit()         — called when the player exits back to setup

   Flip to true to outline every hotspot in red while calibrating coordinates. */
const POSS_SIMON_DEBUG_HITAREAS = false;

const possSimonMaxStage = 6;
/* ADVANCED: left/right are distinct targets. */
const possSimonBodyPartsAdvanced = [
  "hair", "head", "face", "left eye", "right eye", "mouth", "nose", "neck",
  "left hand", "right hand", "left finger", "right finger", "left arm", "right arm",
  "left leg", "right leg", "left foot", "right foot"
];
/* BASIC: no left/right distinction — plural generic parts instead. */
const possSimonBodyPartsBasic = [
  "hair", "head", "face", "eyes", "mouth", "nose", "neck", "hands", "fingers", "arms", "legs", "feet"
];
/* Grade-6-only extras (new curriculum body parts, not part of grade 5's set). */
const possSimonGrade6PartsAdvanced = ["stomach", "left knee", "right knee", "left ankle", "right ankle"];
const possSimonGrade6PartsBasic = ["stomach", "knees", "ankles"];

/* BASIC generic part -> either specific hotspot counts as a match. */
const possSimonGenericPartMap = {
  eyes: ["left eye", "right eye"],
  hands: ["left hand", "right hand"],
  fingers: ["left hand", "right hand"],
  arms: ["left arm", "right arm"],
  legs: ["left leg", "right leg"],
  feet: ["left foot", "right foot"],
  knees: ["left knee", "right knee"],
  ankles: ["left ankle", "right ankle"]
};
/* Parts only some characters have (character key -> extra parts). */
const possSimonExtraBodyParts = {
  ingrid: ["teeth"]
};

/* Hotspots nest (head contains face, face contains eyes/nose/mouth/teeth).
   A click on any nested part also counts as correct for a container
   target. head/face, mouth/teeth, and hand/finger (fingers have no hotspot
   of their own — they reuse the matching hand's) accept each other both ways.
   leg contains knee (one-way: a "leg" command accepts a knee click, but a
   "knee" command still needs precision). foot/ankle sit close together and
   accept each other both ways. */
const possSimonPartHierarchy = {
  head: ["hair", "face", "left eye", "right eye", "nose", "mouth", "teeth"],
  face: ["head", "left eye", "right eye", "nose", "mouth", "teeth"],
  mouth: ["teeth"],
  teeth: ["mouth"],
  "left hand": ["left finger"],
  "left finger": ["left hand"],
  "right hand": ["right finger"],
  "right finger": ["right hand"],
  "left leg": ["left knee"],
  "right leg": ["right knee"],
  "left foot": ["left ankle"],
  "left ankle": ["left foot"],
  "right foot": ["right ankle"],
  "right ankle": ["right foot"]
};

/* Coordinates are in the source image's native pixel space (1672 x 941).
   "left"/"right" are each character's OWN left/right (mirrored on screen
   since both characters face the viewer).
   Circles: { x, y, r } (x,y = center). Rects: { x, y, width, height }
   (x,y = top-left corner). Polygons: { points: [[x,y], ...] } — used for
   arms/legs so the hit area can hug the angled limb precisely.
   Key order matters: bigger regions (hair/head/face) are listed first so
   they render underneath, and the finer features (eyes/nose/mouth/teeth)
   are listed after so they stay on top and stay clickable. */
const possSimonHotspots = {
  oliver: {
    "hair": { x: 562, y: 30, r: 20 },
    "head": { x: 572, y: 106, r: 60 },
    "face": { x: 572, y: 106, r: 55 },
    "left eye": { x: 548, y: 99, r: 10 },
    "right eye": { x: 587, y: 99, r: 10 },
    "nose": { x: 568, y: 120, r: 15 },
    "mouth": { x: 548, y: 126, width: 40, height: 20 },
    "neck": { x: 530, y: 158.5, width: 80, height: 43 },
    "stomach": { x: 495, y: 312, width: 150, height: 120 },
    "left hand": { x: 412, y: 540, r: 40 },
    "right hand": { x: 723, y: 541, r: 40 },
    "left arm": { points: [[424, 282], [398, 484], [429, 484], [473, 321]] },
    "right arm": { points: [[666, 328], [721, 316], [742, 483], [706, 487]] },
    "left leg": { points: [[456, 566], [563, 575], [517, 841], [446, 838]] },
    "right leg": { points: [[572, 575], [679, 575], [681, 839], [616, 839]] },
    "left knee": { x: 495, y: 690, r: 25 },
    "right knee": { x: 645, y: 690, r: 25 },
    "left foot": { x: 475, y: 890, r: 40 },
    "right foot": { x: 662, y: 890, r: 40 },
    "left ankle": { x: 485, y: 840, r: 45 },
    "right ankle": { x: 645, y: 838, r: 45 }
  },
  ingrid: {
    "hair": { x: 1086, y: 78, r: 30 },
    "head": { x: 1105, y: 150, r: 60 },
    "face": { x: 1105, y: 150, r: 55 },
    "left eye": { x: 1070, y: 143, r: 10 },
    "right eye": { x: 1120, y: 140, r: 10 },
    "mouth": { x: 1095, y: 181, r: 20 },
    "nose": { x: 1095, y: 160, r: 15 },
    "teeth": { x: 1097, y: 182, r: 20 },
    "neck": { x: 1070.5, y: 206.5, width: 51, height: 27 },
    "stomach": { x: 1095, y: 380, rx: 42.5, ry: 40 },
    "left hand": { x: 960, y: 540, r: 30 },
    "right hand": { x: 1230, y: 535, r: 30 },
    "left arm": { points: [[990, 338], [963, 480], [989, 480], [1026, 346]] },
    "right arm": { points: [[1165, 328], [1203, 334], [1227, 476], [1200, 476]] },
    "left leg": { points: [[997, 554], [1087, 556], [1048, 830], [997, 827]] },
    "right leg": { points: [[1100, 555], [1194, 555], [1205, 830], [1155, 826]] },
    "left knee": { x: 1035, y: 685, r: 25 },
    "right knee": { x: 1170, y: 685, r: 25 },
    "left foot": { x: 1020, y: 890, r: 40 },
    "right foot": { x: 1200, y: 890, r: 40 },
    "left ankle": { x: 1025, y: 850, r: 45 },
    "right ankle": { x: 1180, y: 845, r: 45 }
  }
};

/* Closed-eyes overlay images, positioned/sized to sit exactly over each
   character's open eyes (native 1672 x 941 pixel space, top-left corner). */
const possSimonBlinkOverlays = {
  oliver: { src: "../func_presenter/images/possessive-adjectives/oliver_eyeshut.webp", x: 532, y: 79, width: 71, height: 24 },
  ingrid: { src: "../func_presenter/images/possessive-adjectives/ingrid_eyeshut.webp", x: 1054, y: 119, width: 82, height: 35 }
};

function startPossSimon(api) {
  const $ = (id) => document.getElementById(id);
  const screen = $("possSimonScreen");
  const hitSvg = $("possSimonHitSvg");
  const feedback = $("possSimonFeedback");
  const caption = $("possSimonCaption");
  const stageText = $("possSimonStageText");
  const startOverlay = $("possSimonStartOverlay");
  const failOverlay = $("possSimonFailOverlay");
  const winOverlay = $("possSimonWinOverlay");
  const basicButton = $("possSimonBasicButton");
  const advancedButton = $("possSimonAdvancedButton");
  const retryButton = $("possSimonRetryButton");
  const playAgainButton = $("possSimonPlayAgainButton");
  const winExitButton = $("possSimonWinExitButton");
  const exitButton = $("possSimonExitButton");
  const blinkImages = {
    oliver: $("possSimonBlinkOliver"),
    ingrid: $("possSimonBlinkIngrid")
  };
  const blinkTimers = [];

  const state = {
    difficulty: "advanced",
    stage: 1,
    sequence: [],
    expectedIndex: 0,
    accepting: false
  };
  let destroyed = false;

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function buildCommand() {
    const speaker = Math.random() < 0.5 ? "oliver" : "ingrid";
    const pronoun = speaker === "oliver" ? pickRandom(["my", "her"]) : pickRandom(["my", "his"]);
    const target = pronoun === "my" ? speaker : (speaker === "oliver" ? "ingrid" : "oliver");
    const isBasic = state.difficulty === "basic";
    const basePartList = isBasic ? possSimonBodyPartsBasic : possSimonBodyPartsAdvanced;
    const grade6Parts = api.grade === 6 ? (isBasic ? possSimonGrade6PartsBasic : possSimonGrade6PartsAdvanced) : [];
    const availableParts = basePartList.concat(grade6Parts, possSimonExtraBodyParts[target] || []);
    const part = pickRandom(availableParts);
    return { speaker, speakerName: speaker === "oliver" ? "Oliver" : "Ingrid", pronoun, target, part };
  }

  function pickVoice(gender) {
    const voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.startsWith("en"));
    if (!voices.length) return { voice: null, isFallback: true };
    const malePattern = /male|david|mark|guy|daniel|george|ryan|james|fred/i;
    const femalePattern = /female|zira|susan|samantha|victoria|karen|linda|hazel|aria|jenny/i;
    const pattern = gender === "male" ? malePattern : femalePattern;
    const opposite = gender === "male" ? femalePattern : malePattern;
    const matched = voices.find((voice) => pattern.test(voice.name) && !opposite.test(voice.name));
    return matched ? { voice: matched, isFallback: false } : { voice: voices[0], isFallback: true };
  }

  function speakCommand(command, onEnd) {
    if (!("speechSynthesis" in window)) {
      onEnd();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`Click ${command.pronoun} ${command.part}`);
    utterance.lang = "en-US";
    utterance.rate = .86;
    const isOliver = command.speaker === "oliver";
    const { voice, isFallback } = pickVoice(isOliver ? "male" : "female");
    utterance.pitch = isOliver ? (isFallback ? .02 : .4) : 1;
    if (voice) utterance.voice = voice;
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
    window.speechSynthesis.speak(utterance);
  }

  function drawHitAreas() {
    hitSvg.replaceChildren();
    hitSvg.classList.toggle("debug-outline", POSS_SIMON_DEBUG_HITAREAS);
    const NS = "http://www.w3.org/2000/svg";
    const background = document.createElementNS(NS, "rect");
    background.setAttribute("x", "0");
    background.setAttribute("y", "0");
    background.setAttribute("width", "1672");
    background.setAttribute("height", "941");
    background.setAttribute("fill", "transparent");
    background.addEventListener("click", () => handleClick(null));
    hitSvg.append(background);
    Object.entries(possSimonHotspots).forEach(([character, parts]) => {
      Object.entries(parts).forEach(([part, area]) => {
        const isPolygon = !!area.points;
        const isRect = !isPolygon && area.width != null && area.height != null;
        const isEllipse = !isPolygon && !isRect && area.rx != null && area.ry != null;
        const shape = document.createElementNS(NS, isPolygon ? "polygon" : isRect ? "rect" : isEllipse ? "ellipse" : "circle");
        if (isPolygon) {
          shape.setAttribute("points", area.points.map((point) => point.join(",")).join(" "));
        } else if (isRect) {
          shape.setAttribute("x", area.x);
          shape.setAttribute("y", area.y);
          shape.setAttribute("width", area.width);
          shape.setAttribute("height", area.height);
          if (area.rotate) {
            const cx = area.x + area.width / 2;
            const cy = area.y + area.height / 2;
            shape.setAttribute("transform", `rotate(${area.rotate} ${cx} ${cy})`);
          }
        } else if (isEllipse) {
          shape.setAttribute("cx", area.x);
          shape.setAttribute("cy", area.y);
          shape.setAttribute("rx", area.rx);
          shape.setAttribute("ry", area.ry);
        } else {
          shape.setAttribute("cx", area.x);
          shape.setAttribute("cy", area.y);
          shape.setAttribute("r", area.r);
        }
        shape.classList.add("room-hit-shape");
        shape.addEventListener("click", (event) => {
          event.stopPropagation();
          handleClick({ character, part, el: shape });
        });
        hitSvg.append(shape);
      });
    });
  }

  function setupBlinking() {
    const IMAGE_WIDTH = 1672;
    const IMAGE_HEIGHT = 941;
    /* Wide, per-character-offset random range so the two never fall into sync. */
    Object.entries(possSimonBlinkOverlays).forEach(([character, overlay], index) => {
      const img = blinkImages[character];
      if (!img) return;
      img.src = overlay.src;
      img.style.left = `${(overlay.x / IMAGE_WIDTH) * 100}%`;
      img.style.top = `${(overlay.y / IMAGE_HEIGHT) * 100}%`;
      img.style.width = `${(overlay.width / IMAGE_WIDTH) * 100}%`;
      img.style.height = `${(overlay.height / IMAGE_HEIGHT) * 100}%`;

      const blinkRateMultiplier = character === "oliver" ? 2 : 1;
      const scheduleBlink = (delay) => {
        const nextDelay = delay != null ? delay : (2200 + Math.random() * 3200) * blinkRateMultiplier;
        const timer = setTimeout(() => {
          if (destroyed) return;
          img.classList.add("show");
          const closeTimer = setTimeout(() => {
            if (destroyed) return;
            img.classList.remove("show");
            scheduleBlink();
          }, 160);
          blinkTimers.push(closeTimer);
        }, nextDelay);
        blinkTimers.push(timer);
      };
      scheduleBlink((800 + index * 1800 + Math.random() * 800) * blinkRateMultiplier);
    });
  }

  function stopBlinking() {
    blinkTimers.forEach((timer) => clearTimeout(timer));
    blinkTimers.length = 0;
    Object.values(blinkImages).forEach((img) => img?.classList.remove("show"));
  }

  function showFeedback(type) {
    feedback.textContent = type === "correct" ? "✓" : "✗";
    feedback.className = `room-feedback show ${type}`;
    setTimeout(() => feedback.classList.remove("show"), 500);
  }

  function highlightHit(el) {
    if (!el) return;
    el.classList.add("poss-simon-hit-glow");
    setTimeout(() => el.classList.remove("poss-simon-hit-glow"), 1000);
  }

  function updateStageText() {
    stageText.textContent = `STAGE ${state.stage} / ${possSimonMaxStage}`;
  }

  function announceSequence(index) {
    if (destroyed) return;
    if (index >= state.sequence.length) {
      state.accepting = true;
      caption.textContent = "Your turn! Click in order.";
      return;
    }
    const command = state.sequence[index];
    caption.innerHTML = `<span class="poss-simon-speaker">${command.speakerName}</span>: Click ${command.pronoun} ${command.part}`;
    speakCommand(command, () => {
      if (destroyed) return;
      setTimeout(() => announceSequence(index + 1), 300);
    });
  }

  function buildSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i += 1) {
      let command;
      let attempts = 0;
      do {
        command = buildCommand();
        attempts += 1;
      } while (
        i > 0 && attempts < 30
        && command.target === sequence[i - 1].target
        && command.part === sequence[i - 1].part
      );
      sequence.push(command);
    }
    return sequence;
  }

  function startStage() {
    state.sequence = buildSequence(state.stage);
    state.expectedIndex = 0;
    state.accepting = false;
    updateStageText();
    caption.textContent = "Listen carefully...";
    announceSequence(0);
  }

  function handleClick(hit) {
    if (!state.accepting || destroyed) return;
    const expected = state.sequence[state.expectedIndex];
    const partMatches = !!hit && (hit.part === expected.part
      || (possSimonPartHierarchy[expected.part] || []).includes(hit.part)
      || (possSimonGenericPartMap[expected.part] || []).includes(hit.part));
    const isCorrect = !!hit && hit.character === expected.target && partMatches;
    if (isCorrect) {
      api.playFeedbackSound(true);
      showFeedback("correct");
      highlightHit(hit.el);
      state.expectedIndex += 1;
      if (state.expectedIndex >= state.sequence.length) {
        state.accepting = false;
        if (state.stage >= possSimonMaxStage) {
          finishWin();
        } else {
          state.stage += 1;
          setTimeout(() => { if (!destroyed) startStage(); }, 900);
        }
      }
      return;
    }
    state.accepting = false;
    api.playFeedbackSound(false);
    showFeedback("wrong");
    failGame();
  }

  function failGame() {
    window.speechSynthesis?.cancel();
    caption.textContent = "Sorry, you failed!";
    setTimeout(() => { if (!destroyed) failOverlay.classList.remove("hidden"); }, 500);
  }

  function finishWin() {
    window.speechSynthesis?.cancel();
    caption.textContent = "Well done!";
    winOverlay.classList.remove("hidden");
  }

  function resetGame() {
    state.stage = 1;
    state.sequence = [];
    state.expectedIndex = 0;
    state.accepting = false;
    updateStageText();
    caption.textContent = "Listen carefully...";
    failOverlay.classList.add("hidden");
    winOverlay.classList.add("hidden");
    startOverlay.classList.remove("hidden");
  }

  const beginGame = (difficulty) => {
    state.difficulty = difficulty;
    startOverlay.classList.add("hidden");
    startStage();
  };
  basicButton.onclick = () => beginGame("basic");
  advancedButton.onclick = () => beginGame("advanced");
  retryButton.onclick = resetGame;
  playAgainButton.onclick = resetGame;
  const exitGame = () => {
    destroyed = true;
    stopBlinking();
    window.speechSynthesis?.cancel();
    screen.classList.add("hidden");
    api.onExit();
  };
  winExitButton.onclick = exitGame;
  exitButton.onclick = exitGame;

  $("possSimonGradeLabel").textContent = `GRADE ${api.grade}`;
  drawHitAreas();
  setupBlinking();
  resetGame();
  screen.classList.remove("hidden");
}

window.startPossSimon = startPossSimon;
