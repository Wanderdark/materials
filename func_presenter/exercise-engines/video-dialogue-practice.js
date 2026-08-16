// APP-ANCHOR: Video dialogue presentation practice.
let videoDialoguePracticeClosePopup = null;

function clearVideoDialoguePractice() {
  els.exampleCard?.classList.remove("video-dialogue-practice-open");
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
  video.playsInline = true;
  video.preload = "metadata";
  visual.append(video);
  els.exampleVisualPanel.append(visual);

  const practice = document.createElement("section");
  practice.id = "videoDialoguePractice";
  practice.className = "video-dialogue-practice hidden";
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
  practice.append(kicker, lines);
  els.presenceView.append(practice);

  video.addEventListener("ended", () => {
    els.exampleCard.classList.add("video-dialogue-practice-open");
    practice.classList.remove("hidden");
  }, { once: true });
}
