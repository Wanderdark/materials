function clearLikesDislikesIntro() {
  document.getElementById("likesDislikesIntro")?.remove();
  document.getElementById("likesDislikesDetailImage")?.remove();
  document.getElementById("likesDislikesDetailVideo")?.pause();
  document.getElementById("likesDislikesDetailVideo")?.remove();
  document.getElementById("likesDislikesToggleVideo")?.pause();
  document.getElementById("likesDislikesToggleVideo")?.remove();
  document.getElementById("likesDislikesVideoToggle")?.remove();
  els.exampleCard?.classList.remove("likes-dislikes-detail");
}

function renderLikesDislikesIntro(example) {
  const data = example.likesDislikesIntro;
  if (!data) return;

  const root = document.createElement("section");
  root.id = "likesDislikesIntro";
  root.className = `likes-dislikes-intro ${data.theme === "dislikes" ? "likes-dislikes-intro-dislikes" : ""}`;

  const banner = document.createElement("header");
  banner.className = "likes-dislikes-banner";
  const heading = document.createElement("h1");
  heading.textContent = data.heading;
  const subheading = document.createElement("p");
  subheading.textContent = data.subheading;
  banner.append(heading, subheading);

  const hubState = example._likesDislikesHubState || (example._likesDislikesHubState = { visited: {} });
  const expressions = document.createElement("div");
  expressions.className = "likes-dislikes-expressions";
  data.items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "likes-dislikes-expression";
    button.textContent = item.label;
    button.classList.toggle("visited", Boolean(hubState.visited[item.key]));
    if (item.imagePath || item.videoPath) button.addEventListener("click", () => showLikesDislikesDetail(example, item));
    expressions.append(button);
  });

  root.append(banner, expressions);
  els.presenceView.replaceChildren(root);
}

function showLikesDislikesDetail(example, item) {
  els.exampleCard.classList.add("likes-dislikes-detail");
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.exampleVisualPanel.classList.remove("hidden");
  if (item.videoPath) {
    const video = document.createElement("video");
    video.id = "likesDislikesDetailVideo";
    video.className = "likes-dislikes-detail-video";
    video.src = item.videoPath;
    video.controls = true;
    video.controlsList = "nodownload";
    video.disablePictureInPicture = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.addEventListener("loadedmetadata", () => {
      video.currentTime = Math.min(item.videoStartTime || 0, video.duration || 0);
    }, { once: true });
    if (item.videoStartTime) {
      video.addEventListener("ended", () => {
        video.currentTime = Math.min(item.videoStartTime, video.duration || 0);
      });
    }
    els.exampleVisualPanel.append(video);
  } else {
    const image = document.createElement("img");
    image.id = "likesDislikesDetailImage";
    image.className = "likes-dislikes-detail-image";
    image.src = item.imagePath;
    image.alt = item.label;
    els.exampleVisualPanel.append(image);
    if (item.toggleVideoPath) {
      const toggle = document.createElement("button");
      toggle.id = "likesDislikesVideoToggle";
      toggle.className = "static-dialogue-video-toggle";
      toggle.type = "button";
      toggle.textContent = "🎥";
      toggle.title = "Watch video";
      toggle.setAttribute("aria-label", "Watch video");
      const showImage = () => {
        document.getElementById("likesDislikesToggleVideo")?.pause();
        document.getElementById("likesDislikesToggleVideo")?.remove();
        image.classList.remove("hidden");
        toggle.textContent = "🎥";
        toggle.title = "Watch video";
        toggle.setAttribute("aria-label", "Watch video");
      };
      const showVideo = () => {
        const video = document.createElement("video");
        video.id = "likesDislikesToggleVideo";
        video.className = "likes-dislikes-toggle-video";
        video.src = item.toggleVideoPath;
        video.controls = true;
        video.controlsList = "nodownload";
        video.disablePictureInPicture = true;
        video.playsInline = true;
        video.preload = "metadata";
        els.exampleVisualPanel.append(video);
        image.classList.add("hidden");
        toggle.textContent = "🖼️";
        toggle.title = "Show image";
        toggle.setAttribute("aria-label", "Show image");
        video.play().catch(() => {});
      };
      toggle.addEventListener("click", () => {
        if (document.getElementById("likesDislikesToggleVideo")) showImage();
        else showVideo();
      });
      els.exampleVisualPanel.append(toggle);
    }
  }

  const detail = document.createElement("section");
  detail.id = "likesDislikesIntro";
  detail.className = "likes-dislikes-detail-content";
  const portraits = document.createElement("div");
  portraits.className = "likes-dislikes-detail-portraits";
  (item.portraitPaths || [item.portraitPath]).forEach((portraitPath) => {
    const portrait = document.createElement("img");
    portrait.className = "likes-dislikes-detail-portrait";
    portrait.src = portraitPath;
    portrait.alt = item.label;
    portraits.append(portrait);
  });
  const sentence = document.createElement("p");
  sentence.className = "likes-dislikes-detail-sentence";
  item.sentenceParts.forEach(({ text, className = "", lineBreakBefore = false }) => {
    if (lineBreakBefore) sentence.append(document.createElement("br"));
    const part = document.createElement("span");
    part.className = className;
    part.textContent = text;
    sentence.append(part);
  });
  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "likes-dislikes-detail-next";
  nextButton.textContent = "BACK";
  nextButton.addEventListener("click", () => {
    example._likesDislikesHubState.visited[item.key] = true;
    clearLikesDislikesIntro();
    els.exampleVisualPanel.classList.add("hidden");
    renderLikesDislikesIntro(example);
  });
  const affection = document.createElement("div");
  affection.className = "likes-dislikes-affection";
  const burst = document.createElement("div");
  burst.className = "likes-dislikes-like-burst";
  burst.classList.toggle("wide", Boolean(item.wideBurst));
  burst.textContent = item.burstLabel || item.label;
  const hearts = document.createElement("div");
  hearts.className = "likes-dislikes-hearts";
  Array.from({ length: item.heartCount || 2 }, () => item.heartEmoji || "❤️").forEach((heart) => {
    const icon = document.createElement("span");
    icon.textContent = heart;
    hearts.append(icon);
  });
  affection.append(burst, hearts);
  detail.append(portraits, sentence, affection, nextButton);
  els.presenceView.replaceChildren(detail);
}
