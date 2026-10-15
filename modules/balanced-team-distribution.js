/* Shared roster-score distribution: 50% snake, 50% straight, shuffled team order. */
(() => {
  "use strict";
  const nameKey = value => String(value || "").trim().replace(/\s+/g, " ").toLocaleUpperCase("tr-TR");
  const score = student => (Number(student?.points) || 0) + (Number(student?.stars) || 0) * 10;
  const shuffle = values => {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  function fromRoster(students) {
    const teacher = window.TeacherControl;
    const room = teacher?.isActiveClassroomLocked?.()
      ? (teacher.getClassrooms?.() || []).find(item => item.id === teacher.getActiveClassroomId?.())
      : null;
    const now = new Date();
    const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    const absent = new Set(room?.attendanceDate === today ? room.absentStudentIds || [] : []);
    const byName = new Map((room?.roster || []).map(student => [nameKey(student.name), student]));
    return students.map(source => {
      const student = typeof source === "string" ? { name: source } : source;
      const matched = byName.get(nameKey(student.name));
      return { ...student, name: String(student.name || "").trim(), score: score(matched || student),
        balanceAbsent: Boolean(matched && absent.has(matched.id)) };
    }).filter(student => student.name && !student.balanceAbsent);
  }

  function distribute(students, count, options = {}) {
    if (!Number.isInteger(count) || count < 1) throw new Error("Invalid team count");
    const ranked = [...students].sort((a, b) => value(b) - value(a) ||
      String(a.name).localeCompare(String(b.name), "tr", { sensitivity: "base" }));
    if (!ranked.length) return Array.from({ length: count }, () => []);
    function value(student) { return Number(student.score ?? student.balanceScore ?? score(student)) || 0; }

    // Merge overlapping pair constraints; each connected set stays together.
    const parent = ranked.map((_, index) => index);
    const find = index => parent[index] === index ? index : (parent[index] = find(parent[index]));
    const byName = new Map(ranked.map((student, index) => [nameKey(student.name), index]));
    for (const pair of options.pairs || []) {
      const members = pair.map(name => byName.get(nameKey(name))).filter(index => index !== undefined);
      for (let i = 1; i < members.length; i++) parent[find(members[i])] = find(members[0]);
    }
    const sets = new Map();
    ranked.forEach((student, index) => {
      const root = find(index);
      if (!sets.has(root)) sets.set(root, []);
      sets.get(root).push(student);
    });
    const units = [...sets.values()];
    const teams = Array.from({ length: count }, () => []);
    const snake = Math.random() < 0.5;
    const order = shuffle(Array.from({ length: count }, (_, index) => index));
    units.forEach((unit, index) => {
      const row = Math.floor(index / count);
      const column = index % count;
      const position = snake && row % 2 ? count - 1 - column : column;
      teams[order[position]].push(...unit);
    });
    return teams;
  }

  window.TeamBalance = { score, fromRoster, distribute };
})();
