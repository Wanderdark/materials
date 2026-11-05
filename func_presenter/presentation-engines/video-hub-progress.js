// Shared completion persistence for Watch and Complete hubs.
function getVideoHubProgressKey(example, kind) {
  const module = state.module;
  if (!module?.id || !example?.id) return null;
  return JSON.stringify(["fpVideoHubProgress:v1", module.grade, module.unit, module.id, example.id, kind]);
}

function loadVideoHubProgress(example, kind, hubState) {
  try {
    const key = getVideoHubProgressKey(example, kind);
    const stored = key && JSON.parse(localStorage.getItem(key) || "{}");
    if (stored && typeof stored === "object" && !Array.isArray(stored)) {
      Object.keys(stored).forEach((id) => {
        if (stored[id] === true) hubState.completed[id] = true;
      });
    }
  } catch {}
  return hubState;
}

function saveVideoHubProgress(example, kind, hubState) {
  loadVideoHubProgress(example, kind, hubState);
  try {
    const key = getVideoHubProgressKey(example, kind);
    if (key) localStorage.setItem(key, JSON.stringify(hubState.completed));
  } catch {}
}
