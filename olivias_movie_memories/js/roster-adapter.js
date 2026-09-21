(() => {
window.LeagueListening = window.LeagueListening || {};

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

function setActiveClassroom(classroomId) {
  return window.TeacherControl?.setActiveClassroom?.(classroomId) || false;
}

function getPresentStudents(classroom) {
  const absentIds = classroom?.attendanceDate === todayKey() ? new Set(classroom.absentStudentIds || []) : new Set();
  return (classroom?.roster || []).filter((student) => String(student?.name || "").trim() && !absentIds.has(student.id));
}

function resolveRosterAvatarPath(path = "") {
  const value = String(path || "");
  return /^images\/avatars\//i.test(value) ? `../func_presenter/${value}` : value;
}

function getStudentLevel(student) {
  return Math.max(1, Number(window.TeacherControl?.getStudentLevel?.(student)) || 1);
}

function distributeBalanced(classroom, groupCount) {
  const teams = Array.from({ length: groupCount }, () => []);
  const students = getPresentStudents(classroom).map((student) => ({ name: student.name.trim(), avatarPath: resolveRosterAvatarPath(student.avatarPath), level: getStudentLevel(student), score: effectiveScore(student) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "tr", { sensitivity: "base" }));
  const order = [...Array(groupCount).keys(), ...[...Array(groupCount).keys()].reverse()];
  students.forEach((student, index) => teams[order[index % order.length]].push(student));
  return teams;
}

function getRosterPointAwards(groups, ratio) {
  const allStudents = (groups || []).flatMap((group) => group.students || []);
  const winningScore = Math.max(...(groups || []).map((group) => Number(group.score) || 0));
  const overallTopScore = Math.max(...allStudents.map((student) => Number(student.score) || 0));
  const awards = (groups || []).flatMap((group) => {
    const students = group.students || [];
    const teamBonus = (Number(group.score) || 0) === winningScore ? 2 : 1;
    const groupTopScore = Math.max(...students.map((student) => Number(student.score) || 0));
    return students.map((student) => ({
      name: student.name,
      points: Math.floor((Number(student.score) || 0) / ratio.gamePoints) * ratio.rosterPoints + teamBonus +
        ((Number(student.score) || 0) === groupTopScore ? 2 : 0) +
        ((Number(student.score) || 0) === overallTopScore ? 2 : 0)
    }));
  });
  return awards;
}

function transferRosterPoints(groups, classroomId, ratio) {
  const awards = getRosterPointAwards(groups, ratio);
  return window.TeacherControl?.awardFinalPoints?.(awards, classroomId) || { awarded: [], missing: [] };
}

Object.assign(window.LeagueListening, { distributeBalanced, getClassrooms, getPresentStudents, setActiveClassroom, getRosterPointAwards, transferRosterPoints });
})();
