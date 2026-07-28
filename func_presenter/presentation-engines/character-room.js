// APP-ANCHOR: Character room and room-dialogue interaction.
function pickRoomVoice(gender) {
  const voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.startsWith("en"));
  if (!voices.length) return { voice: null, isFallback: true };
  const malePattern = /male|david|mark|guy|daniel|george|ryan|james|fred/i;
  const femalePattern = /female|zira|susan|samantha|victoria|karen|linda|hazel|aria|jenny/i;
  const pattern = gender === "male" ? malePattern : femalePattern;
  const opposite = gender === "male" ? femalePattern : malePattern;
  const matched = voices.find((voice) => pattern.test(voice.name) && !opposite.test(voice.name));
  return matched ? { voice: matched, isFallback: false } : { voice: voices[0], isFallback: true };
}

function speakRoomLine(text, room, onEnd) {
  if (!text || text.includes("____") || !("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/"/g, ""));
  utterance.lang = "en-US";
  utterance.rate = .92;
  const isMale = room?.gender === "male";
  const { voice, isFallback } = pickRoomVoice(isMale ? "male" : "female");
  // room.pitch is a per-character manual override; falls back to the generic gender pitch when unset.
  utterance.pitch = room?.pitch ?? (isMale ? (isFallback ? .3 : .75) : 1.27);
  if (voice) utterance.voice = voice;
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();
  window.speechSynthesis.speak(utterance);
}

/* Per-character voice profiles for spoken dialogue lines in presence slides
   (e.g. "Can for Permission"). Reused by name against each line's speaker. */
const presenceDialogueVoices = {
  VICTORIA: { gender: "female", pitch: 1.1 },
  HANNAH: { gender: "female", pitch: 1.25 },
  ELLA: { gender: "female", pitch: 1.15 },
  MIA: { gender: "female", pitch: 1.34 },
  NOAH: { gender: "female", pitch: .7 },
  BENJAMIN: { gender: "female", pitch: .8 },
  CHLOE: { gender: "female", pitch: 1.27 },
  ZOE: { gender: "female", pitch: 1.2 },
  ETHAN: { gender: "female", pitch: .75 },
  TEACHER: { gender: "female", pitch: 1 }
};

function speakPresenceRow(row) {
  const textEl = row?.querySelector(".speaker-line-text");
  const headEl = row?.querySelector(".speaker-head");
  if (!textEl || !headEl) return;
  if (row.querySelector(".inline-choice-group")) return; // popup-choice lines: skip, reading both options sounds wrong
  const rawText = (textEl.textContent || "").trim();
  if (!rawText || rawText.includes("____")) return;
  const speakerName = (headEl.alt || "").trim();
  const text = speakerName ? rawText.replace(new RegExp(`^${speakerName}:\\s*`), "") : rawText;
  const profile = presenceDialogueVoices[speakerName.toUpperCase()];
  speakRoomLine(text, profile);
}

function hideAllScreens() {
  [els.setup, els.presentation, els.complete, els.exercise, els.exerciseResult, els.guessAnimal, els.verbCard, els.possSimon, els.sort, els.conversation, els.jumbled, els.matching, els.matchingTime, els.trueFalse, els.pronounMemory, els.pronounMemoryResult, els.pronounSnap, els.pronounSnapResult, els.timeSetter, els.fillBlank, els.mistake, els.luckySpin, els.pcScreen, els.smScreen, els.exerciseMenu, els.room].forEach((screen) => screen.classList.add("hidden"));
}

function playFeedbackSound(isCorrect, { studentCorrect = true } = {}) {
  if (isCorrect) {
    if (studentCorrect) window.StudentGame?.onCorrect();
  } else {
    window.StudentGame?.onWrong();
  }
  if (isCorrect) window.TeacherControl?.onCorrect();
  if (feedbackAudio) {
    feedbackAudio.pause();
    feedbackAudio.currentTime = 0;
  }
  feedbackAudio = new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`);
  feedbackAudio.play().catch(() => {});
}

function playWavFeedback(isCorrect, { studentCorrectCount = 1 } = {}) {
  if (isCorrect) {
    for (let index = 0; index < studentCorrectCount; index += 1) window.StudentGame?.onCorrect();
  } else {
    window.StudentGame?.onWrong();
  }
  if (isCorrect) window.TeacherControl?.onCorrect();
  if (feedbackAudio) {
    feedbackAudio.pause();
    feedbackAudio.currentTime = 0;
  }
  feedbackAudio = new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.wav`);
  feedbackAudio.play().catch(() => {});
}

function openCharacterRoom(room, returnIndex) {
  roomState = { data: room, targetIndex: 0, locked: false, returnIndex };
  hideAllScreens();
  els.room.classList.remove("hidden");
  els.roomGrade.textContent = `GRADE ${state.grade}`;
  els.roomTitle.textContent = `${room.name}'S ROOM`;
  els.roomImage.src = room.imagePath;
  els.roomSpeechBubble.classList.add("hidden");
  els.roomIntroOverlay.classList.add("hidden");
  renderRoomTarget();
}

function renderRoomTarget() {
  const room = roomState.data;
  const step = room.targets[roomState.targetIndex];
  els.roomChoices.replaceChildren();
  els.roomChoices.classList.add("hidden");
  delete els.roomChoices.dataset.answered;
  els.roomNext.classList.add("hidden");
  els.roomSentence.classList.remove("hidden");
  els.roomSentence.textContent = "";
  clearTimeout(roomEasterEggTimer);
  els.roomSpeechBubble.classList.add("hidden");
  const shownIndex = Math.min(roomState.targetIndex + 1, room.targets.length);
  els.roomProgress.textContent = `${shownIndex} / ${room.targets.length}`;
  if (!step) {
    els.roomExit.classList.remove("hidden");
    drawRoomHitAreas(null);
    return;
  }
  els.roomExit.classList.add("hidden");
  const promptText = step.type === "yesno" ? step.question : step.sentence;
  const isFirstPerson = !room.noSentenceBubble && promptText.startsWith("I ");
  if (isFirstPerson) {
    els.roomSentence.classList.add("hidden");
    positionRoomSpeechBubble(room.speechPoint);
    els.roomSpeechBubble.classList.remove("hidden");
    roomActiveSentenceEl = els.roomSpeechBubble;
    speakRoomLine(promptText, room);
  } else {
    roomActiveSentenceEl = els.roomSentence;
  }
  roomActiveSentenceEl.innerHTML = formatRoomSentence(promptText);
  if (step.type === "choice" || step.type === "yesno") {
    drawRoomHitAreas(null);
    renderRoomChoiceButtons(step);
  } else {
    drawRoomHitAreas(step);
    if (step.showIntro) showRoomIntro(step.introText || "FIND IT AND CLICK");
  }
}

function renderRoomChoiceButtons(step) {
  els.roomChoices.classList.remove("hidden");
  step.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "presence-choice";
    button.textContent = option;
    button.addEventListener("click", () => answerRoomChoice(button, option, step));
    els.roomChoices.append(button);
  });
}

function answerRoomChoice(button, option, step) {
  if (els.roomChoices.dataset.answered) return;
  els.roomChoices.dataset.answered = "true";
  const isCorrect = option === step.answer;
  [...els.roomChoices.children].forEach((choiceButton) => {
    choiceButton.disabled = true;
    if (choiceButton.textContent === step.answer) choiceButton.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("wrong");
  if (roomActiveSentenceEl.innerHTML.includes("____")) {
    roomActiveSentenceEl.innerHTML = roomActiveSentenceEl.innerHTML.replace("____", `<span class="room-word">${step.answer}</span>`);
  }
  playFeedbackSound(isCorrect);
  const egg = isCorrect && step.easterEggId && (roomState.data.easterEggs || []).find((e) => e.id === step.easterEggId);
  if (egg) handleRoomEasterEgg(egg, () => els.roomNext.classList.remove("hidden"));
  else els.roomNext.classList.remove("hidden");
}

function formatRoomSentence(sentence) {
  return sentence.replace(/"([^"]+)"/g, '<span class="room-word">$1</span>');
}

function showRoomIntro(text) {
  els.roomIntroText.textContent = text;
  els.roomIntroOverlay.classList.remove("hidden");
}

function positionRoomSpeechBubble(point) {
  const room = roomState.data;
  const anchor = point || { x: room.imageWidth / 2, y: room.imageHeight * 0.1 };
  const growLeft = anchor.x / room.imageWidth > 0.5;
  const lift = room.speechLift ?? 16;
  els.roomSpeechBubble.style.left = `${(anchor.x / room.imageWidth) * 100}%`;
  els.roomSpeechBubble.style.top = `${(anchor.y / room.imageHeight) * 100}%`;
  els.roomSpeechBubble.style.transform = growLeft ? `translate(-104%, -${lift}%)` : `translate(0, -${lift}%)`;
}

function drawRoomHitAreas(target) {
  const room = roomState.data;
  const svg = els.roomHitSvg;
  svg.setAttribute("viewBox", `0 0 ${room.imageWidth} ${room.imageHeight}`);
  svg.classList.toggle("debug-outline", ROOM_DEBUG_HITAREAS);
  svg.replaceChildren();
  const NS = "http://www.w3.org/2000/svg";
  if (target) {
    const background = document.createElementNS(NS, "rect");
    background.setAttribute("x", "0");
    background.setAttribute("y", "0");
    background.setAttribute("width", room.imageWidth);
    background.setAttribute("height", room.imageHeight);
    background.setAttribute("fill", "transparent");
    background.addEventListener("click", () => handleRoomMiss());
    svg.append(background);
  }
  if (!target) return;
  target.hitAreas.forEach((area) => {
    const shape = createRoomHitShape(area);
    shape.classList.add("room-hit-shape");
    shape.addEventListener("click", (event) => {
      event.stopPropagation();
      handleRoomHit();
    });
    svg.append(shape);
  });
}

let roomEasterEggTimer = null;
function handleRoomEasterEgg(egg, onDone) {
  clearTimeout(roomEasterEggTimer);
  positionRoomSpeechBubble(roomState.data.speechPoint);
  els.roomSpeechBubble.textContent = egg.line;
  els.roomSpeechBubble.classList.remove("hidden");
  speakRoomLine(egg.line, roomState.data, () => {
    if (!egg.sound) {
      onDone?.();
      return;
    }
    const audio = new Audio(egg.sound);
    const afterSound = () => setTimeout(() => onDone?.(), 2000);
    audio.addEventListener("ended", afterSound, { once: true });
    audio.addEventListener("error", afterSound, { once: true });
    const playSound = () => audio.play().catch(afterSound);
    if (egg.soundDelay) setTimeout(playSound, egg.soundDelay);
    else playSound();
  });
  roomEasterEggTimer = setTimeout(() => els.roomSpeechBubble.classList.add("hidden"), egg.duration || 10000);
}

function createRoomHitShape(area) {
  const NS = "http://www.w3.org/2000/svg";
  if (area.type === "polygon") {
    const polygon = document.createElementNS(NS, "polygon");
    polygon.setAttribute("points", area.points.map((point) => point.join(",")).join(" "));
    return polygon;
  }
  const circle = document.createElementNS(NS, "circle");
  circle.setAttribute("cx", area.x);
  circle.setAttribute("cy", area.y);
  circle.setAttribute("r", area.r);
  return circle;
}

function handleRoomHit() {
  if (roomState.locked) return;
  roomState.locked = true;
  playFeedbackSound(true);
  showRoomFeedback("CORRECT!", true);
  const room = roomState.data;
  const step = room.targets[roomState.targetIndex];
  const egg = step?.easterEggId && (room.easterEggs || []).find((e) => e.id === step.easterEggId);
  const advance = () => {
    roomState.locked = false;
    roomState.targetIndex += 1;
    renderRoomTarget();
  };
  if (egg) handleRoomEasterEgg(egg, advance);
  else setTimeout(advance, 900);
}

function handleRoomMiss() {
  if (roomState.locked) return;
  playFeedbackSound(false);
  showRoomFeedback("TRY AGAIN!", false);
}

let roomFeedbackTimer = null;
function showRoomFeedback(text, isCorrect) {
  els.roomFeedback.textContent = text;
  els.roomFeedback.className = `room-feedback ${isCorrect ? "correct" : "wrong"}`;
  clearTimeout(roomFeedbackTimer);
  requestAnimationFrame(() => els.roomFeedback.classList.add("show"));
  roomFeedbackTimer = setTimeout(() => els.roomFeedback.classList.remove("show"), 700);
}

function exitCharacterRoom() {
  const room = roomState.data;
  els.roomExit.classList.add("hidden");
  positionRoomSpeechBubble(room.speechPoint);
  els.roomSpeechBubble.textContent = room.exitLine || "Bye!";
  els.roomSpeechBubble.classList.remove("hidden");
  speakRoomLine(room.exitLine || "Bye!", room);
  if (room.exitSound) setTimeout(() => new Audio(room.exitSound).play().catch(() => {}), room.exitSoundDelay ?? 0);
  setTimeout(returnToHubFromRoom, room.exitDelay || 2000);
}

function returnToHubFromRoom() {
  const returnIndex = roomState?.returnIndex;
  els.roomSpeechBubble.classList.add("hidden");
  roomState = null;
  hideAllScreens();
  els.presentation.classList.remove("hidden");
  if (returnIndex != null) state.index = returnIndex;
  renderExample();
}

