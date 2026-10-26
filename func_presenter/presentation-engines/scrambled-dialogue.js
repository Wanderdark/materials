// Reusable ordered dialogue activity for static dialogue slides.
function clearScrambledDialogue() {
  const video = document.getElementById("dialogueRevealVideo");
  if (video) {
    video.pause();
    video.removeAttribute("src");
    video.load();
  }
  document.getElementById("dialogueRevealVideoWrap")?.remove();
  els.exampleCard?.classList.remove("dialogue-reveal-video-wide");
  document.getElementById("dialogueImagePortraits")?.remove();
  document.getElementById("dialogueImageToggle")?.remove();
  els.exampleCard?.classList.remove("scrambled-dialogue-active", "scrambled-dialogue-shake");
}

function renderDialogueImageReveal(example) {
  if (!example?.dialogueImageReveal) return;
  const portraits = document.createElement("div");
  portraits.id = "dialogueImagePortraits";
  portraits.className = "dialogue-image-portraits";
  const speakers = new Set();
  example.items.forEach((item) => {
    if (!item.speakerImage || speakers.has(item.speaker)) return;
    speakers.add(item.speaker);
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = item.speakerImage;
    image.alt = item.speaker;
    const caption = document.createElement("figcaption");
    caption.textContent = item.speaker;
    figure.append(image, caption);
    portraits.append(figure);
  });
  const toggle = document.createElement("button");
  toggle.id = "dialogueImageToggle";
  toggle.className = "dialogue-image-toggle";
  toggle.type = "button";
  toggle.textContent = "🖼️";
  let imageVisible = false;
  let videoWrap = null;
  const update = () => {
    els.image.classList.toggle("hidden", !imageVisible || Boolean(videoWrap));
    els.fallback.classList.add("hidden");
    portraits.classList.toggle("hidden", imageVisible || Boolean(videoWrap));
    const action = videoWrap ? "Show dialogue image" : imageVisible && example.dialogueVideoUrl ? "Watch dialogue video" : imageVisible ? "Show speakers" : "Show dialogue image";
    toggle.textContent = !videoWrap && imageVisible && example.dialogueVideoUrl ? "🎬" : "🖼️";
    toggle.setAttribute("aria-pressed", String(imageVisible));
    toggle.setAttribute("aria-label", action);
    toggle.title = action;
  };
  const openVideo = () => {
    videoWrap = document.createElement("div");
    videoWrap.id = "dialogueRevealVideoWrap";
    videoWrap.className = "dialogue-reveal-video-wrap";
    const video = document.createElement("video");
    video.id = "dialogueRevealVideo";
    video.src = example.dialogueVideoUrl;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    const resize = document.createElement("button");
    resize.type = "button";
    resize.className = "dialogue-reveal-video-resize";
    const setWide = (wide) => {
      els.exampleCard.classList.toggle("dialogue-reveal-video-wide", wide);
      resize.textContent = wide ? "↙" : "⛶";
      resize.setAttribute("aria-label", wide ? "Minimize video and open questions" : "Expand video");
      resize.title = wide ? "Minimize video and open questions" : "Expand video";
    };
    resize.addEventListener("click", () => setWide(!els.exampleCard.classList.contains("dialogue-reveal-video-wide")));
    video.addEventListener("ended", () => toggle.click());
    videoWrap.append(video, resize);
    els.exampleVisualPanel.append(videoWrap);
    setWide(true);
    update();
    video.play().catch(() => {});
  };
  toggle.addEventListener("click", () => {
    if (videoWrap) {
      const video = videoWrap.querySelector("video");
      video.pause();
      video.removeAttribute("src");
      video.load();
      videoWrap.remove();
      videoWrap = null;
      els.exampleCard.classList.remove("dialogue-reveal-video-wide");
      update();
      return;
    }
    if (imageVisible && example.dialogueVideoUrl) {
      openVideo();
      return;
    }
    imageVisible = !imageVisible;
    update();
  });
  els.exampleVisualPanel.append(portraits);
  if (!example.dialoguePortraitsOnly) els.exampleVisualPanel.append(toggle);
  update();
}

function shuffleScrambledDialogueRows(rows) {
  const shuffled = [...rows];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function playScrambledDialogueSound(isCorrect) {
  new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`).play().catch(() => {});
}

function shakeScrambledDialogue() {
  els.exampleCard.classList.remove("scrambled-dialogue-shake");
  void els.exampleCard.offsetWidth;
  els.exampleCard.classList.add("scrambled-dialogue-shake");
}

function activateScrambledDialogue(example, onComplete) {
  const list = els.presenceView.querySelector(".presence-list");
  if (!list || list.classList.contains("scrambled-dialogue-list")) return;
  const title = els.presenceView.querySelector(".presence-title");
  if (title) {
    title.textContent = "Put the sentences into correct order.";
    title.classList.add("scrambled-dialogue-title");
  }

  const rows = [...list.querySelectorAll(".presence-row")];
  if (rows.length < 2) return;
  renderDialogueImageReveal(example);

  let nextIndex = 0;
  const solvedRows = [];
  let previousRemainingRows = [];
  const renderRows = (forceNewOrder = false) => {
    const remainingRows = rows.filter((row) => !solvedRows.includes(row));
    let shuffledRows = shuffleScrambledDialogueRows(remainingRows);
    if (forceNewOrder && shuffledRows.length > 1 && shuffledRows.every((row, index) => row === previousRemainingRows[index])) {
      shuffledRows = [...shuffledRows.slice(1), shuffledRows[0]];
    }
    previousRemainingRows = shuffledRows;
    list.replaceChildren(...solvedRows, ...shuffledRows);
  };
  const selectRow = (row) => {
    if (solvedRows.includes(row)) return;
    const isCorrect = Number(row.dataset.presenceIndex) === nextIndex;
    playScrambledDialogueSound(isCorrect);
    if (!isCorrect) {
      shakeScrambledDialogue();
      solvedRows.forEach((solvedRow) => {
        solvedRow.classList.remove("scrambled-dialogue-solved");
        solvedRow.tabIndex = 0;
        solvedRow.setAttribute("aria-disabled", "false");
      });
      solvedRows.splice(0);
      nextIndex = 0;
      renderRows(true);
      return;
    }
    row.classList.add("scrambled-dialogue-solved");
    row.tabIndex = -1;
    row.setAttribute("aria-disabled", "true");
    solvedRows.push(row);
    nextIndex += 1;
    renderRows();
    if (nextIndex === rows.length) {
      list.classList.add("scrambled-dialogue-complete");
      onComplete?.();
    }
  };

  list.classList.add("scrambled-dialogue-list");
  els.exampleCard.classList.add("scrambled-dialogue-active");
  rows.forEach((row) => {
    row.classList.remove("hidden");
    row.querySelector(".presence-next")?.remove();
    row.classList.add("scrambled-dialogue-row");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", "Select this dialogue line");
    row.addEventListener("click", () => selectRow(row));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRow(row);
      }
    });
  });
  renderRows();
}
