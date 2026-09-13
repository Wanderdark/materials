// Prefer the repository video library for offline classroom use, then fall back to R2.
function setLocalFirstVideoSource(video, remoteUrl) {
  const fallbackUrl = String(remoteUrl || "");
  const remoteMatch = fallbackUrl.match(/^https:\/\/media\.adilhoca\.com\/video\/([^/?#]+)(?:[?#].*)?$/i);

  if (!remoteMatch) {
    video.src = fallbackUrl;
    return;
  }

  const localUrl = `../olivias_movie_memories/assets/video/${remoteMatch[1]}`;
  const useFallback = () => {
    if (video.dataset.videoSourceFallback === "true") return;
    video.dataset.videoSourceFallback = "true";
    video.src = fallbackUrl;
    video.load();
  };

  video.addEventListener("error", useFallback);
  video.src = localUrl;
}

window.setLocalFirstVideoSource = setLocalFirstVideoSource;
