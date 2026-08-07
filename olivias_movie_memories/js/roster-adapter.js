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

function distributeBalanced(classroom, groupCount) {
  const teams = Array.from({ length: groupCount }, () => []);
  const students = getPresentStudents(classroom).map((student) => ({ name: student.name.trim(), avatarPath: student.avatarPath || "", score: effectiveScore(student) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "tr", { sensitivity: "base" }));
  const order = [...Array(groupCount).keys(), ...[...Array(groupCount).keys()].reverse()];
  students.forEach((student, index) => teams[order[index % order.length]].push(student));
  return teams;
}

function transferRosterPoints(studentScores, classroomId, ratio) {
  const awards = studentScores.map(({ name, score }) => ({ name, points: Math.floor(score / ratio.gamePoints) * ratio.rosterPoints }))
    .filter((award) => award.points > 0);
  return window.TeacherControl?.awardFinalPoints?.(awards, classroomId) || { awarded: [], missing: [] };
}

Object.assign(window.LeagueListening, { distributeBalanced, getClassrooms, getPresentStudents, setActiveClassroom, transferRosterPoints });
})();
