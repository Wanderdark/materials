// APP-ANCHOR: Video dialogue presentation practice.
let videoDialoguePracticeClosePopup = null;

function clearVideoDialoguePractice() {
  els.exampleCard?.classList.remove("video-dialogue-practice-open");
  els.exampleCard?.classList.remove("video-dialogue-speaker-classification");
  const video = document.getElementById("videoDialoguePracticeVideo");
  video?.pause();
  document.getElementById("videoDialoguePracticeVisual")?.remove();
  document.getElementById("videoDialoguePractice")?.remove();
  if (videoDialoguePracticeClosePopup) {
    document.removeEventListener("click", videoDialoguePracticeClosePopup, true);
    videoDialoguePracticeClosePopup = null;
  }
}

function createVideoDialogueChoice(part, onAnswer) {
  const group = document.createElement("span");
  group.className = "video-dialogue-choice";
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "video-dialogue-choice-trigger";
  trigger.textContent = "?";
  const popup = document.createElement("div");
  popup.className = "video-dialogue-choice-popup hidden";

  const closePopup = () => {
    popup.classList.add("hidden");
    if (videoDialoguePracticeClosePopup) {
      document.removeEventListener("click", videoDialoguePracticeClosePopup, true);
      videoDialoguePracticeClosePopup = null;
    }
  };

  (part.choices || []).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-dialogue-choice-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      const isCorrect = option === part.answer;
      closePopup();
      trigger.disabled = true;
      trigger.textContent = part.answer;
      trigger.classList.add(isCorrect ? "correct" : "wrong");
      playFeedbackSound(isCorrect);
      onAnswer?.(isCorrect);
    });
    popup.append(button);
  });

  trigger.addEventListener("click", (event) => {
    if (trigger.disabled) return;
    event.stopPropagation();
    const open = popup.classList.contains("hidden");
    closePopup();
    if (!open) return;
    popup.classList.remove("hidden");
    videoDialoguePracticeClosePopup = (clickEvent) => {
      if (!group.contains(clickEvent.target)) closePopup();
    };
    document.addEventListener("click", videoDialoguePracticeClosePopup, true);
  });

  group.append(trigger, popup);
  return group;
}

function createVideoDialogueImageChoice(part, onAnswer) {
  const group = document.createElement("span");
  group.className = "video-dialogue-choice";
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "video-dialogue-choice-trigger";
  trigger.textContent = "?";
  const popup = document.createElement("div");
  popup.className = "video-dialogue-image-choice-popup hidden";

  const closePopup = () => {
    popup.classList.add("hidden");
    if (videoDialoguePracticeClosePopup) {
      document.removeEventListener("click", videoDialoguePracticeClosePopup, true);
      videoDialoguePracticeClosePopup = null;
    }
  };

  (part.imageChoices || []).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-dialogue-image-choice-option";
    button.setAttribute("aria-label", option.value);
    const image = document.createElement("img");
    image.src = option.imagePath;
    image.alt = option.value;
    button.append(image);
    button.addEventListener("click", () => {
      const isCorrect = option.value === part.answer;
      closePopup();
      trigger.disabled = true;
      trigger.textContent = part.answer;
      trigger.classList.add(isCorrect ? "correct" : "wrong");
      playFeedbackSound(isCorrect);
      onAnswer?.(isCorrect);
    });
    popup.append(button);
  });

  trigger.addEventListener("click", (event) => {
    if (trigger.disabled) return;
    event.stopPropagation();
    const open = popup.classList.contains("hidden");
    closePopup();
    if (!open) return;
    popup.classList.remove("hidden");
    videoDialoguePracticeClosePopup = (clickEvent) => {
      if (!group.contains(clickEvent.target)) closePopup();
    };
    document.addEventListener("click", videoDialoguePracticeClosePopup, true);
  });

  group.append(trigger, popup);
  return group;
}

function createVideoDialogueImageSlotLine(line, onComplete, onAttempt) {
  const wrapper = document.createElement("div");
  wrapper.className = "video-dialogue-image-slot-line";
  const sentence = document.createElement("p");
  sentence.className = "video-dialogue-line";
  const speaker = document.createElement("strong");
  speaker.textContent = `${line.speaker}:`;
  sentence.append(speaker, " ");

  const slots = [];
  let activeSlot = null;
  (line.parts || []).forEach((part) => {
    if (!part.slot) {
      sentence.append(document.createTextNode(part.text || ""));
      return;
    }
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = "video-dialogue-image-slot";
    slot.textContent = "?";
    const slotState = { element: slot, answers: part.answers || [], filled: false };
    slot.addEventListener("click", () => {
      if (slotState.filled) return;
      activeSlot = slotState;
      slots.forEach((item) => item.element.classList.toggle("active", item === activeSlot));
    });
    slots.push(slotState);
    sentence.append(slot);
  });

  const options = document.createElement("div");
  options.className = "video-dialogue-image-slot-options";
  shuffleVideoDialogueChoices(line.imageChoices || []).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-dialogue-image-slot-option";
    button.setAttribute("aria-label", option.value);
    const image = document.createElement("img");
    image.src = option.imagePath;
    image.alt = option.value;
    button.append(image);
    button.addEventListener("click", () => {
      if (!activeSlot || button.disabled) return;
      if (!activeSlot.answers.includes(option.value)) {
        button.classList.add("wrong");
        playFeedbackSound(false);
        onAttempt?.(false);
        window.setTimeout(() => button.classList.remove("wrong"), 500);
        return;
      }
      activeSlot.element.replaceChildren(image.cloneNode(true));
      activeSlot.element.classList.remove("active");
      activeSlot.element.classList.add("filled");
      activeSlot.element.disabled = true;
      activeSlot.filled = true;
      activeSlot = null;
      button.disabled = true;
      button.classList.add("selected");
      if (!slots.every((item) => item.filled)) return;
      options.querySelectorAll("button").forEach((choice) => { choice.disabled = true; });
      playFeedbackSound(true);
      window.setTimeout(() => onComplete?.(true), 650);
    });
    options.append(button);
  });
  wrapper.append(sentence, options);
  return wrapper;
}

function shuffleVideoDialogueChoices(choices) {
  const shuffled = [...choices];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function getVideoDialoguePortrait(speaker) {
  const name = String(speaker || "").trim().toLowerCase();
  const characters = new Set(["ava", "benjamin", "chloe", "daniel", "david", "ella", "emma", "ethan", "hannah", "jack", "lucas", "mia", "noah", "olivia", "victoria", "zoe"]);
  return characters.has(name) ? `../olivias_movie_memories/assets/portraits/${name}.webp` : "";
}

function renderVideoDialoguePractice(example) {
  const data = example.videoDialogue;
  if (!data) return;
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.presenceView.replaceChildren();

  const visual = document.createElement("div");
  visual.id = "videoDialoguePracticeVisual";
  visual.className = "video-dialogue-visual";
  const video = document.createElement("video");
  video.id = "videoDialoguePracticeVideo";
  video.className = "video-dialogue-video";
  video.src = data.videoUrl;
  video.controls = true;
  video.controlsList = "nodownload";
  video.disablePictureInPicture = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.autoplay = Boolean(data.autoplay);
  visual.append(video);
  els.exampleVisualPanel.append(visual);
  if (data.autoplay) {
    const startVideo = () => video.play().catch(() => {});
    video.addEventListener("canplay", startVideo, { once: true });
    startVideo();
  }

  if (typeof data.onHubReturn === "function") {
    const returnButton = document.createElement("button");
    returnButton.type = "button";
    returnButton.className = "video-dialogue-return-hub";
    returnButton.textContent = "↩️";
    returnButton.setAttribute("aria-label", "Hub'a dön");
    returnButton.addEventListener("click", data.onHubReturn);
    visual.append(returnButton);
  }

  const practice = document.createElement("section");
  practice.id = "videoDialoguePractice";
  const speakerClassification = data.speakerClassification;
  practice.className = `video-dialogue-practice${speakerClassification ? " video-dialogue-speaker-classification-practice" : " hidden"}`;
  const kicker = data.hideTitle ? null : document.createElement("p");
  if (kicker) {
    kicker.className = "video-dialogue-kicker";
    kicker.textContent = data.title || "WATCH, THEN COMPLETE THE DIALOGUE";
  }
  const portrait = data.portraitPath ? document.createElement("img") : null;
  if (portrait) {
    portrait.className = "video-dialogue-practice-portrait";
    portrait.src = data.portraitPath;
    portrait.alt = data.portraitAlt || "Speaker";
  }
  const lines = document.createElement("div");
  lines.className = "video-dialogue-lines";
  const isSequential = Boolean(data.sequentialLines);
  let choiceCount = 0;
  let answeredCount = 0;
  let correctCount = 0;
  let hasWrongAnswer = false;
  const handleAnswer = (isCorrect) => {
    answeredCount += 1;
    if (isCorrect) correctCount += 1;
    if (answeredCount === choiceCount) data.onComplete?.(correctCount === choiceCount);
  };
  const createLine = (line, onAnswer) => {
    const row = document.createElement("p");
    row.className = "video-dialogue-line";
    const speaker = document.createElement("strong");
    speaker.textContent = `${line.speaker}:`;
    row.append(speaker, " ");
    (line.parts || []).forEach((part) => {
      const isChoice = Boolean(part.choices || part.imageChoices);
      if (isChoice && !isSequential) choiceCount += 1;
      row.append(isChoice
        ? part.imageChoices
          ? createVideoDialogueImageChoice(part, onAnswer)
          : createVideoDialogueChoice(part, onAnswer)
        : document.createTextNode(part.text || ""));
    });
    return row;
  };
  if (isSequential) {
    let sequentialIndex = 0;
    const renderSequentialLine = () => {
      const line = data.lines[sequentialIndex];
      lines.replaceChildren(line.imageChoices
        ? createVideoDialogueImageSlotLine(line, (isCorrect) => {
          if (sequentialIndex >= data.lines.length - 1) {
            data.onComplete?.(!hasWrongAnswer);
            return;
          }
          sequentialIndex += 1;
          window.setTimeout(renderSequentialLine, 0);
        }, (isCorrect) => {
          if (!isCorrect) hasWrongAnswer = true;
        })
        : createLine(line, (isCorrect) => {
        if (!isCorrect) {
          hasWrongAnswer = true;
          window.setTimeout(renderSequentialLine, 650);
          return;
        }
        if (sequentialIndex >= data.lines.length - 1) {
          data.onComplete?.(!hasWrongAnswer);
          return;
        }
        sequentialIndex += 1;
        window.setTimeout(renderSequentialLine, 650);
      }));
    };
    renderSequentialLine();
  } else {
    data.lines.forEach((line) => lines.append(createLine(line, handleAnswer)));
  }
  if (speakerClassification) {
    els.exampleCard.classList.add("video-dialogue-speaker-classification");
    const classification = document.createElement("div");
    classification.className = "video-dialogue-speaker-classification-area";
    const waiting = document.createElement("p");
    waiting.className = "video-dialogue-classification-waiting";
    waiting.textContent = "WATCH THE VIDEO, THEN CLASSIFY EACH RESPONSE.";
    classification.append(waiting);

    const classificationItems = shuffleVideoDialogueChoices(speakerClassification.items || []);
    let speakerIndex = 0;
    let classificationStarted = false;
    const renderSpeakerClassification = () => {
      visual.querySelector(".video-dialogue-classification-visual-next")?.remove();
      const item = classificationItems[speakerIndex];
      classification.replaceChildren();
      const portrait = getVideoDialoguePortrait(item.speaker);
      if (portrait) {
        const image = document.createElement("img");
        image.className = "video-dialogue-classification-portrait";
        image.src = portrait;
        image.alt = item.speaker;
        classification.append(image);
      }
      const name = document.createElement("p");
      name.className = "video-dialogue-classification-name";
      name.textContent = item.speaker;
      const options = document.createElement("div");
      options.className = "video-dialogue-classification-options";
      const colors = ["navy", "yellow", "red", "orange"];
      let firstAttempt = true;
      shuffleVideoDialogueChoices(speakerClassification.choices || []).forEach((choice, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `video-dialogue-classification-choice ${colors[index]}`;
        button.textContent = choice;
        button.addEventListener("click", () => {
          if (button.disabled) return;
          const isCorrect = choice === item.answer;
          playFeedbackSound(isCorrect);
          if (!isCorrect) {
            firstAttempt = false;
            button.disabled = true;
            button.classList.add("removed");
            return;
          }
          options.querySelectorAll("button").forEach((option) => {
            option.disabled = true;
            if (option !== button) option.classList.add("removed");
          });
          button.classList.add("correct");
          if (firstAttempt) window.StudentGame?.onCorrect();
          window.TeacherControl?.onCorrect();
          const nextButton = document.createElement("button");
          nextButton.type = "button";
          nextButton.className = "primary-button video-dialogue-classification-next video-dialogue-classification-visual-next";
          nextButton.textContent = speakerIndex === classificationItems.length - 1 ? "CONTINUE" : "NEXT CHARACTER";
          nextButton.addEventListener("click", () => {
            if (speakerIndex === classificationItems.length - 1) next();
            else {
              speakerIndex += 1;
              renderSpeakerClassification();
            }
          });
          visual.append(nextButton);
        });
        options.append(button);
      });
      classification.append(name, options);
    };
    const startSpeakerClassification = () => {
      if (classificationStarted) return;
      classificationStarted = true;
      renderSpeakerClassification();
    };
    video.addEventListener("ended", startSpeakerClassification, { once: true });
    video.addEventListener("error", startSpeakerClassification, { once: true });
    practice.append(...(portrait ? [portrait] : []), ...(kicker ? [kicker] : []), lines, classification);
  } else {
    practice.append(...(portrait ? [portrait] : []), ...(kicker ? [kicker] : []), lines);
  }
  els.presenceView.append(practice);

  if (!speakerClassification) {
    let practiceOpened = false;
    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.className = "video-dialogue-open-practice";
    openButton.textContent = "↙";
    openButton.setAttribute("aria-label", "Minimize video and open questions");
    const openPractice = () => {
      if (practiceOpened) return;
      practiceOpened = true;
      openButton.remove();
      els.exampleCard.classList.add("video-dialogue-practice-open");
      practice.classList.remove("hidden");
    };
    openButton.addEventListener("click", openPractice);
    visual.append(openButton);
    video.addEventListener("ended", openPractice, { once: true });
    video.addEventListener("error", openPractice, { once: true });
  }
}
