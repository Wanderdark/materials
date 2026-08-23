// Optional video panel for static visual + portrait dialogue slides.
function clearStaticDialogueVideo() {
  document.getElementById("staticDialogueVideo")?.pause();
  document.getElementById("staticDialogueVideoWrap")?.remove();
  document.getElementById("staticDialogueVideoToggle")?.remove();
  els.exampleCard?.classList.remove("static-dialogue-video-open");
}

function renderStaticDialogueVideo(example) {
  const data = example.staticDialogueVideo;
  if (!data?.videoUrl) return;
  let aspectRatio = "16 / 9";
  let isSquare = false;
  const applyAspectRatio = () => {
    const wrap = document.getElementById("staticDialogueVideoWrap");
    if (!wrap) return;
    wrap.style.aspectRatio = aspectRatio;
    wrap.classList.toggle("static-dialogue-video-square", isSquare);
  };
  const detectVideo = document.createElement("video");
  detectVideo.preload = "metadata";
  detectVideo.src = data.videoUrl;
  detectVideo.addEventListener("loadedmetadata", () => {
    if (!detectVideo.videoWidth || !detectVideo.videoHeight) return;
    aspectRatio = `${detectVideo.videoWidth} / ${detectVideo.videoHeight}`;
    isSquare = Math.abs((detectVideo.videoWidth / detectVideo.videoHeight) - 1) < .03;
    applyAspectRatio();
  }, { once: true });
  detectVideo.load();

  const toggle = document.createElement("button");
  toggle.id = "staticDialogueVideoToggle";
  toggle.className = "static-dialogue-video-toggle";
  toggle.type = "button";
  toggle.textContent = "🎥";
  toggle.title = "Watch video";
  toggle.setAttribute("aria-label", "Watch video");

  const showImage = () => {
    document.getElementById("staticDialogueVideo")?.pause();
    document.getElementById("staticDialogueVideoWrap")?.remove();
    els.image.classList.remove("hidden");
    els.exampleCard.classList.remove("static-dialogue-video-open");
    toggle.textContent = "🎥";
    toggle.title = "Watch video";
    toggle.setAttribute("aria-label", "Watch video");
  };

  const showVideo = () => {
    const wrap = document.createElement("div");
    wrap.id = "staticDialogueVideoWrap";
    wrap.className = "static-dialogue-video-wrap";
    const video = document.createElement("video");
    video.id = "staticDialogueVideo";
    video.className = "static-dialogue-video";
    video.src = data.videoUrl;
    video.controls = true;
    video.controlsList = "nodownload";
    video.disablePictureInPicture = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.addEventListener("loadedmetadata", () => {
      if (!video.videoWidth || !video.videoHeight) return;
      aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
      isSquare = Math.abs((video.videoWidth / video.videoHeight) - 1) < .03;
      applyAspectRatio();
    }, { once: true });
    wrap.append(video);
    els.exampleVisualPanel.append(wrap);
    applyAspectRatio();
    els.image.classList.add("hidden");
    els.exampleCard.classList.add("static-dialogue-video-open");
    toggle.textContent = "🖼️";
    toggle.title = "Show image";
    toggle.setAttribute("aria-label", "Show image");
    video.play().catch(() => {});
    video.addEventListener("ended", () => {
      if (data.scrambledDialogue) activateScrambledDialogue(example);
    }, { once: true });
  };

  toggle.addEventListener("click", () => {
    if (els.exampleCard.classList.contains("static-dialogue-video-open")) showImage();
    else showVideo();
  });
  els.exampleVisualPanel.append(toggle);
}
