function clearSuggestionDialogue() {
  document.getElementById("suggestionDialogueVideo")?.pause();
  document.getElementById("suggestionDialogueVideoWrap")?.remove();
  els.presenceView.replaceChildren();
}

function renderSuggestionDialogue(example) {
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");

  const dialogue = example.suggestionDialogue;
  let video;
  let videoWrap;
  let activeVideoClip;
  const setActiveVideoClip = (clip) => {
    if (!video || !clip?.videoUrl) return;
    activeVideoClip = clip;
    video.pause();
    videoWrap.classList.remove("is-playing");
    video.src = clip.videoUrl;
    video.load();
  };
  const firstVideoClip = dialogue.bubbles.find((bubble) => bubble.videoClip)?.videoClip;
  if (firstVideoClip) {
    const wrap = document.createElement("button");
    wrap.id = "suggestionDialogueVideoWrap";
    wrap.className = "suggestion-dialogue-video-wrap";
    wrap.type = "button";
    wrap.title = "Play the video clip";
    wrap.setAttribute("aria-label", "Play the video clip");

    videoWrap = wrap;
    video = document.createElement("video");
    video.id = "suggestionDialogueVideo";
    video.className = "suggestion-dialogue-video";
    video.playsInline = true;
    video.preload = "auto";

    const resetToStart = () => {
      if (Number.isFinite(activeVideoClip?.evidenceStart)) video.currentTime = activeVideoClip.evidenceStart;
    };
    video.addEventListener("loadedmetadata", () => {
      resetToStart();
    });
    video.addEventListener("timeupdate", () => {
      if (Number.isFinite(activeVideoClip?.evidenceEnd) && video.currentTime >= activeVideoClip.evidenceEnd) {
        video.pause();
        resetToStart();
        videoWrap.classList.remove("is-playing");
      }
    });
    video.addEventListener("seeking", () => {
      if (!Number.isFinite(activeVideoClip?.evidenceEnd)) return;
      if (video.currentTime < activeVideoClip.evidenceStart || video.currentTime > activeVideoClip.evidenceEnd) resetToStart();
    });
    wrap.addEventListener("click", () => {
      if (!activeVideoClip) return;
      if (video.currentTime < activeVideoClip.evidenceStart || video.currentTime >= activeVideoClip.evidenceEnd) resetToStart();
      video.play().then(() => videoWrap.classList.add("is-playing")).catch(() => {});
    });

    const playHint = document.createElement("span");
    playHint.className = "suggestion-dialogue-video-play";
    playHint.textContent = "▶ PLAY CLIP";

    wrap.append(video, playHint);
    els.exampleVisualPanel.append(wrap);
  }
  const root = document.createElement("section");
  const densityClass = dialogue.bubbles.length === 7 ? " seven-bubbles" : dialogue.bubbles.length >= 8 ? " dense" : "";
  root.className = `suggestion-dialogue${densityClass}`;

  const heading = document.createElement("h2");
  heading.className = "suggestion-dialogue-heading";
  heading.textContent = dialogue.heading;

  const intro = document.createElement("p");
  intro.className = "suggestion-dialogue-intro";
  intro.textContent = dialogue.intro;

  const bubbles = document.createElement("div");
  bubbles.className = "suggestion-dialogue-bubbles";

  const continueButton = document.createElement("button");
  continueButton.type = "button";
  continueButton.className = "suggestion-dialogue-next";
  continueButton.textContent = ">";
  continueButton.setAttribute("aria-label", "Show the next speech bubble");

  let visibleCount = 0;
  const showNextBubble = () => {
    const bubbleData = dialogue.bubbles[visibleCount];
    if (!bubbleData) return;
    const bubble = document.createElement("p");
    bubble.className = `suggestion-dialogue-bubble ${bubbleData.type}`;
    if (bubbleData.parts) {
      bubble.replaceChildren(...bubbleData.parts.map(({ text, className = "" }) => {
        const part = document.createElement("span");
        part.className = className;
        part.textContent = text;
        return part;
      }));
    } else {
      bubble.textContent = bubbleData.text;
    }
    bubbles.append(bubble);
    setActiveVideoClip(bubbleData.videoClip);
    visibleCount += 1;
    if (visibleCount === dialogue.bubbles.length) continueButton.classList.add("hidden");
  };

  continueButton.addEventListener("click", showNextBubble);
  showNextBubble();
  root.append(heading);
  if (dialogue.intro) root.append(intro);
  root.append(bubbles, continueButton);
  els.presenceView.replaceChildren(root);
}
