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
  visual.append(video);
  els.exampleVisualPanel.append(visual);

  const practice = document.createElement("section");
  practice.id = "videoDialoguePractice";
  const speakerClassification = data.speakerClassification;
  practice.className = `video-dialogue-practice${speakerClassification ? " video-dialogue-speaker-classification-practice" : " hidden"}`;
  const kicker = document.createElement("p");
  kicker.className = "video-dialogue-kicker";
  kicker.textContent = data.title || "WATCH, THEN COMPLETE THE DIALOGUE";
  const lines = document.createElement("div");
  lines.className = "video-dialogue-lines";
  let choiceCount = 0;
  let answeredCount = 0;
  let correctCount = 0;
  const handleAnswer = (isCorrect) => {
    answeredCount += 1;
    if (isCorrect) correctCount += 1;
    if (answeredCount === choiceCount) data.onComplete?.(correctCount === choiceCount);
  };
  data.lines.forEach((line) => {
    const row = document.createElement("p");
    row.className = "video-dialogue-line";
    const speaker = document.createElement("strong");
    speaker.textContent = `${line.speaker}:`;
    row.append(speaker, " ");
    (line.parts || []).forEach((part) => {
      if (part.choices) choiceCount += 1;
      row.append(part.choices ? createVideoDialogueChoice(part, handleAnswer) : document.createTextNode(part.text || ""));
    });
    lines.append(row);
  });
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
    practice.append(kicker, lines, classification);
  } else {
    practice.append(kicker, lines);
  }
  els.presenceView.append(practice);

  if (!speakerClassification) {
    let practiceOpened = false;
    const openPractice = () => {
      if (practiceOpened) return;
      practiceOpened = true;
      els.exampleCard.classList.add("video-dialogue-practice-open");
      practice.classList.remove("hidden");
    };
    video.addEventListener("ended", openPractice, { once: true });
    video.addEventListener("error", openPractice, { once: true });
  }
}
