// APP-ANCHOR: Timetable and telling-time reveal helpers.
function revealTimeAnswer() {
  const example = state.module?.sentences[state.index];
  if (!example?.timePrompt) return;
  els.timePromptAnswer.classList.remove("hidden");
  els.timeReveal.disabled = true;
}

function renderTimetableParts(parts = []) {
  return parts.map(({ text, className = "" }) => `<span class="${className}">${text}</span>`).join("");
}

function revealTimetableAnswer() {
  const example = state.module?.sentences[state.index];
  if (!example?.timetableSlide || !example.answerReveal) return;
  els.timetableAnswer.classList.remove("hidden");
  els.timetableReveal.disabled = true;
}
