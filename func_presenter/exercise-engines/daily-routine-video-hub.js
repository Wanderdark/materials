// APP-ANCHOR: Daily-routine video character hub.
function getDailyRoutineVideoHubState(example) {
  if (!example._dailyRoutineVideoHubState) example._dailyRoutineVideoHubState = { completed: {} };
  return example._dailyRoutineVideoHubState;
}

function clearDailyRoutineVideoHubPractice() {
  els.exampleCard?.classList.remove("daily-routine-video-practice-open");
  document.getElementById("dailyRoutineVideoPracticeVideo")?.pause();
  document.getElementById("dailyRoutineVideoPracticeVisual")?.remove();
  document.getElementById("dailyRoutineVideoPractice")?.remove();
}

function renderDailyRoutineVideoPractice(character, onComplete) {
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.presenceView.replaceChildren();

  const visual = document.createElement("div");
  visual.id = "dailyRoutineVideoPracticeVisual";
  visual.className = "daily-routine-video-visual";
  const video = document.createElement("video");
  video.id = "dailyRoutineVideoPracticeVideo";
  video.className = "daily-routine-video-video";
  video.src = character.videoUrl;
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  visual.append(video);
  els.exampleVisualPanel.append(visual);

  const practice = document.createElement("section");
  practice.id = "dailyRoutineVideoPractice";
  practice.className = "daily-routine-video-practice hidden";
  const title = document.createElement("p");
  title.className = "daily-routine-video-kicker";
  title.textContent = "TRUE OR FALSE?";
  const questions = document.createElement("div");
  questions.className = "daily-routine-video-questions";
  let answered = 0;
  const completeWhenReady = () => {
    if (answered !== character.questions.length) return;
    setTimeout(onComplete, 550);
  };

  character.questions.forEach((question, index) => {
    const row = document.createElement("div");
    row.className = "daily-routine-video-question";
    const text = document.createElement("p");
    text.textContent = `${index + 1}. ${question.text}`;
    const choices = document.createElement("div");
    choices.className = "daily-routine-video-choices";
    [true, false].forEach((value) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "daily-routine-video-choice";
      button.textContent = value ? "TRUE" : "FALSE";
      button.addEventListener("click", (event) => {
        if (row.dataset.answered) {
          if (value !== false || !question.correction) return;
          event.currentTarget.classList.remove("answer-switch");
          const showingCorrection = row.dataset.showingCorrection === "true";
          row.dataset.showingCorrection = String(!showingCorrection);
          text.textContent = showingCorrection ? `${index + 1}. ${question.text}` : `✓ ${question.correction}`;
          row.classList.toggle("showing-correction", !showingCorrection);
          return;
        }
        row.dataset.answered = "true";
        const correct = value === question.answer;
        button.classList.add(correct ? "correct" : "wrong");
        choices.querySelectorAll("button").forEach((choice) => {
          choice.disabled = true;
          if ((choice.textContent === "TRUE") === question.answer) choice.classList.add("correct-answer");
        });
        if (question.correction) {
          const falseButton = choices.querySelectorAll("button")[1];
          falseButton.disabled = false;
          falseButton.classList.add("answer-switch");
        }
        playFeedbackSound(correct);
        answered += 1;
        completeWhenReady();
      });
      choices.append(button);
    });
    row.append(text, choices);
    questions.append(row);
  });
  practice.append(title, questions);
  els.presenceView.append(practice);

  video.addEventListener("ended", () => {
    els.exampleCard.classList.add("daily-routine-video-practice-open");
    practice.classList.remove("hidden");
  }, { once: true });
}

function renderDailyRoutineVideoHub(example) {
  const hubState = getDailyRoutineVideoHubState(example);
  els.presenceView.querySelectorAll(".presence-row.category-list").forEach((row, index) => {
    const character = example.items?.[index]?.dailyRoutineVideoCharacter;
    if (!character) return;
    const completed = Boolean(hubState.completed[character.name]);
    row.classList.add("clickable");
    row.tabIndex = completed ? -1 : 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-pressed", completed ? "true" : "false");
    if (completed) row.classList.add("visited");
    const openVideo = () => {
      if (hubState.completed[character.name]) return;
      els.exampleCard.classList.remove("presence-slide");
      els.exampleCard.classList.add("video-dialogue-slide");
      renderDailyRoutineVideoPractice(character, () => {
        hubState.completed[character.name] = true;
        renderExample();
      });
    };
    row.addEventListener("click", openVideo);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openVideo();
      }
    });
  });
}
