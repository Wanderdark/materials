(() => {
window.LeagueListening = window.LeagueListening || {};

function parseRangeTime(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const match = String(value ?? "").trim().match(/^(\d+):(\d{2}(?:\.\d{1,3})?)$/);
  return match ? Number(match[1]) * 60 + Number(match[2]) : null;
}

function dialogueSegments(text) {
  const source = String(text || "");
  const matches = [...source.matchAll(/(^|[.!?]\s+)([\p{L}][\p{L}\s'-]*?)\s*:\s*/gu)];
  return matches.map((match, index) => ({
    speaker: match[2].trim(),
    text: source.slice(match.index + match[0].length, matches[index + 1]?.index ?? source.length).trim()
  })).filter((segment) => segment.text);
}

function hasCompleteEvidence(question) {
  return question?.evidenceStart != null || question?.evidenceEnd != null;
}

function getEvidenceLine(question) {
  if (question?.evidenceStart == null && question?.evidenceEnd == null) return String(question?.transcript || "");
  if (question?.evidenceSentence != null) return String(question.evidenceSentence);
  return String(question?.transcript || "");
}

function playVideoRange(video, startAt, endAt) {
  return new Promise((resolve) => {
    let frameId = 0;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      if (frameId) cancelAnimationFrame(frameId);
      video.removeEventListener("ended", finish);
      video.pause();
      resolve();
    };
    const monitor = () => {
      if (video.currentTime >= endAt) return finish();
      frameId = requestAnimationFrame(monitor);
    };
    const begin = () => {
      video.currentTime = Math.max(0, startAt);
      video.addEventListener("ended", finish, { once: true });
      video.play().then(() => { frameId = requestAnimationFrame(monitor); }).catch(finish);
    };
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) begin();
    else video.addEventListener("loadedmetadata", begin, { once: true });
  });
}

function playEvidenceSegment(video, question) {
  const questionStart = parseRangeTime(question?.videoStart) ?? 0;
  const durationEnd = Number.isFinite(video.duration) ? video.duration : questionStart + 30;
  const questionEnd = Math.min(parseRangeTime(question?.videoEnd) ?? durationEnd, durationEnd);
  const evidenceStart = parseRangeTime(question?.evidenceStart);
  const evidenceEnd = parseRangeTime(question?.evidenceEnd);
  if (evidenceStart == null && evidenceEnd == null) return playVideoRange(video, questionStart, questionEnd);
  const startAt = evidenceStart ?? questionStart;
  const endAt = Math.min(evidenceEnd ?? questionEnd, durationEnd);
  return playVideoRange(video, startAt, Math.max(startAt + .01, endAt));
}

function playEchoSegment(video, question) {
  const startAt = parseRangeTime(question?.videoStart) ?? 0;
  const configuredEnd = parseRangeTime(question?.videoEnd);
  const endAt = configuredEnd ?? (Number.isFinite(video.duration) ? video.duration : startAt + 30);
  return playVideoRange(video, startAt, endAt);
}

Object.assign(window.LeagueListening, { getEvidenceLine, hasCompleteEvidence, playEchoSegment, playEvidenceSegment });
})();
