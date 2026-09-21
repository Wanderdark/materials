window.TeamChallengers = window.TeamChallengers || {};

(() => {
  const TC = window.TeamChallengers;

  function loadFirst(candidates, dependencyName) {
    return new Promise((resolve) => {
      const tryCandidate = (index) => {
        if (index >= candidates.length) { resolve(false); return; }
        const script = document.createElement("script");
        script.src = candidates[index];
        script.dataset.tcDependency = dependencyName;
        script.onload = () => resolve(true);
        script.onerror = () => { script.remove(); tryCandidate(index + 1); };
        document.head.appendChild(script);
      };
      tryCandidate(0);
    });
  }

  const teacherCandidates = (fileName) => [`../func_presenter/${fileName}`, `../OYUN_SITESI/func_presenter/${fileName}`];
  TC.dependenciesReady = (async () => {
    await loadFirst(teacherCandidates("names.js"), "names.js");
    await loadFirst(teacherCandidates("teacher-cloud.js"), "teacher-cloud.js");
    await loadFirst(teacherCandidates("teacher-control.js"), "teacher-control.js");
    await loadFirst(["../modules/finalscreen.js", "../OYUN_SITESI/modules/finalscreen.js"], "finalscreen.js");
    return true;
  })();
})();
