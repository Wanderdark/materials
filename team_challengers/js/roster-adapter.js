(() => {
  const TC = window.TeamChallengers;

  function todayKey() {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }

  function effectiveScore(student) {
    return (Number(student?.points) || 0) + ((Number(student?.stars) || 0) * 10);
  }

  function getClassrooms() {
    return window.TeacherControl?.getClassrooms?.() || [];
  }

  function getStudentLevel(student) {
    return Math.max(1, Number(window.TeacherControl?.getStudentLevel?.(student)) || 1);
  }

  function getPresentStudents(classroom) {
    const absentIds = classroom?.attendanceDate === todayKey() ? new Set(classroom.absentStudentIds || []) : new Set();
    return (classroom?.roster || []).filter((student) => String(student?.name || "").trim() && !absentIds.has(student.id));
  }

  function resolveAvatarPath(path) {
    const value = String(path || "").trim();
    if (!value) return "";
    const canonical = value.match(/(?:^|\/)(?:func_presenter\/)?images\/avatars\/([^/?#]+\.webp)(?:[?#].*)?$/i);
    const teacherScript = [...document.scripts].find((script) => /\/func_presenter\/teacher-control\.js(?:[?#].*)?$/i.test(script.src));
    if (canonical && teacherScript?.src) return new URL(`images/avatars/${canonical[1]}`, teacherScript.src).href;
    if (/^(?:https?:|file:|data:|blob:)/i.test(value)) return value;
    if (teacherScript?.src) {
      try { return new URL(value, teacherScript.src).href; } catch { return value; }
    }
    return value;
  }

  function distributeBalanced(classroom, groupCount) {
    const groups = Array.from({ length: groupCount }, () => []);
    const students = getPresentStudents(classroom).map((student) => ({
      id: student.id || "",
      name: String(student.name).trim(),
      avatarPath: resolveAvatarPath(student.avatarPath),
      level: getStudentLevel(student),
      balanceScore: effectiveScore(student)
    })).sort((a, b) => b.balanceScore - a.balanceScore || a.name.localeCompare(b.name, "tr", { sensitivity: "base" }));
    const forward = Array.from({ length: groupCount }, (_, index) => index);
    const snake = forward.concat([...forward].reverse());
    students.forEach((student, index) => groups[snake[index % snake.length]].push(student));
    return groups;
  }

  function setActiveClassroom(classroomId) {
    return window.TeacherControl?.setActiveClassroom?.(classroomId) || false;
  }

  function transferStarAwards(awards, classroomId) {
    const pointAwards = awards.filter((award) => award.name && award.stars > 0).map((award) => ({ name: award.name, points: Number.isFinite(award.points) ? award.points : award.stars * TC.CONFIG.rosterPointsPerStar }));
    return window.TeacherControl?.awardFinalPoints?.(pointAwards, classroomId) || { awarded: [], missing: pointAwards };
  }

  Object.assign(TC, { distributeBalanced, getClassrooms, getPresentStudents, getStudentLevel, setActiveClassroom, transferStarAwards });
})();
