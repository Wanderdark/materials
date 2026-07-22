/* Optional Supabase backup for teacher classrooms and rosters. */
(() => {
  const PROJECT_URL = "https://ademrnbtycxwqriwsvli.supabase.co";
  const PUBLISHABLE_KEY = "sb_publishable_vuYNoA2VxzgqikNIJG5niA_mYwJUA3K";
  const SESSION_KEY = "fpTeacherSupabaseSessionV1";
  const CLASSROOM_KEY = "fpTeacherSupabaseClassroomIdV1";
  const POINTS_DIRTY_KEY = "fpTeacherSupabasePointsDirtyV1";
  const POINT_SYNC_DELAY = 120000;
  let session = null;
  let hooks = null;
  let syncTimer = 0;
  let pointSyncTimer = 0;
  let syncing = false;
  let syncQueued = false;
  let knownStudentIds = new Set();
  let knownClassroomIds = new Set();

  const jsonHeaders = (token = "") => ({
    apikey: PUBLISHABLE_KEY,
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  });
  const read = (key) => { try { return JSON.parse(localStorage.getItem(key) || "null"); } catch { return null; } };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const clear = (key) => localStorage.removeItem(key);
  const notify = () => hooks?.onStatusChange?.(getAccount());

  async function responseJson(response) {
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload?.msg || payload?.message || payload?.error_description || "Cloud request failed.");
    return payload;
  }

  async function auth(path, body, token = "") {
    const response = await fetch(`${PROJECT_URL}/auth/v1/${path}`, {
      method: "POST",
      headers: jsonHeaders(token),
      body: JSON.stringify(body || {})
    });
    return responseJson(response);
  }

  async function refreshSession() {
    if (!session?.refresh_token) return null;
    const payload = await auth("token?grant_type=refresh_token", { refresh_token: session.refresh_token });
    session = { ...payload, expires_at: Math.floor(Date.now() / 1000) + (payload.expires_in || 3600) };
    write(SESSION_KEY, session);
    return session;
  }

  async function activeToken() {
    if (!session?.access_token) throw new Error("Please sign in first.");
    if (session.expires_at && session.expires_at - Math.floor(Date.now() / 1000) < 60) await refreshSession();
    return session.access_token;
  }

  async function rest(path, options = {}) {
    const token = await activeToken();
    const response = await fetch(`${PROJECT_URL}/rest/v1/${path}`, {
      ...options,
      headers: { ...jsonHeaders(token), ...(options.headers || {}) }
    });
    return responseJson(response);
  }

  function localClassrooms(state) {
    if (Array.isArray(state?.classrooms) && state.classrooms.length) return state.classrooms;
    if (Array.isArray(state?.roster)) {
      return [{ id: localStorage.getItem(CLASSROOM_KEY) || crypto.randomUUID(), name: "My Classroom", roster: state.roster }];
    }
    return [];
  }

  function cloudStudent(student, index, classroomId) {
    return {
      id: student.id,
      classroom_id: classroomId,
      name: student.name,
      points: Number(student.points) || 0,
      stars: Math.max(0, Math.floor(Number(student.stars) || 0)),
      avatar_id: student.avatarPath || null,
      sort_order: index
    };
  }

  function localStudent(student) {
    return {
      id: student.id,
      name: student.name,
      points: Number(student.points) || 0,
      stars: Math.max(0, Math.floor(Number(student.stars) || 0)),
      avatarPath: student.avatar_id || ""
    };
  }

  async function readCloudClassrooms() {
    const userId = session?.user?.id;
    const rooms = await rest(`classrooms?select=id,name&owner_id=eq.${encodeURIComponent(userId)}&order=name.asc`);
    const localById = new Map(localClassrooms(hooks?.getState?.()).map((classroom) => [classroom.id, classroom]));
    const classrooms = await Promise.all(rooms.map(async (room) => {
      const students = await rest(`classroom_students?select=id,name,points,stars,avatar_id,sort_order&classroom_id=eq.${encodeURIComponent(room.id)}&order=sort_order.asc`);
      const local = localById.get(room.id);
      return {
        id: room.id,
        name: room.name,
        roster: students.map(localStudent),
        pointBank: Number(local?.pointBank) || 0,
        attendanceDate: local?.attendanceDate || "",
        absentStudentIds: Array.isArray(local?.absentStudentIds) ? local.absentStudentIds : []
      };
    }));
    knownClassroomIds = new Set(rooms.map((room) => room.id));
    knownStudentIds = new Set(classrooms.flatMap((classroom) => classroom.roster.map((student) => student.id)));
    return classrooms;
  }

  async function ensureClassroomsAndHydrate() {
    const userId = session?.user?.id;
    if (!userId) throw new Error("Your session is missing a user.");
    const localState = hooks?.getState?.() || {};
    // Point updates are stored locally immediately. Flush them before reading the
    // cloud snapshot so a closed tab cannot lose an unsent score update.
    if (read(POINTS_DIRTY_KEY)) await pushState(localState);
    let classrooms = await readCloudClassrooms();
    const localRooms = localClassrooms(localState);
    const cloudHasStudents = classrooms.some((classroom) => classroom.roster.length);
    const localHasStudents = localRooms.some((classroom) => classroom.roster?.length);

    if (!classrooms.length) {
      await pushState(localState);
      classrooms = await readCloudClassrooms();
    } else if (!cloudHasStudents && localHasStudents) {
      const merged = localRooms.map((classroom, index) => index === 0
        ? { ...classroom, id: classrooms[0].id, name: classrooms[0].name }
        : classroom);
      hooks?.applyState?.({ classrooms: merged, activeClassroomId: merged[0]?.id || "" });
      await pushState(hooks?.getState?.());
      classrooms = await readCloudClassrooms();
    }

    if (classrooms.length) {
      const storedId = localStorage.getItem(CLASSROOM_KEY) || "";
      const activeClassroomId = classrooms.some((classroom) => classroom.id === storedId) ? storedId : classrooms[0].id;
      localStorage.setItem(CLASSROOM_KEY, activeClassroomId);
      hooks?.applyState?.({ classrooms, activeClassroomId });
    }
  }

  async function pushState(state) {
    if (!session?.access_token) return false;
    if (syncing) { syncQueued = true; return false; }
    syncing = true;
    try {
      const userId = session.user.id;
      const classrooms = localClassrooms(state);
      if (!classrooms.length) return false;
      const classroomRows = classrooms.map((classroom) => ({ id: classroom.id, owner_id: userId, name: classroom.name || "My Classroom" }));
      await rest("classrooms?on_conflict=id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify(classroomRows)
      });

      const studentRows = classrooms.flatMap((classroom) => (classroom.roster || []).map((student, index) => cloudStudent(student, index, classroom.id)));
      if (studentRows.length) {
        await rest("classroom_students?on_conflict=id", {
          method: "POST",
          headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
          body: JSON.stringify(studentRows)
        });
      }

      const currentStudentIds = new Set(studentRows.map((student) => student.id));
      await Promise.all([...knownStudentIds].filter((id) => !currentStudentIds.has(id)).map((id) => rest(`classroom_students?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" })));
      knownStudentIds = currentStudentIds;

      const currentClassroomIds = new Set(classrooms.map((classroom) => classroom.id));
      await Promise.all([...knownClassroomIds].filter((id) => !currentClassroomIds.has(id)).map((id) => rest(`classrooms?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" })));
      knownClassroomIds = currentClassroomIds;
      const activeId = state?.activeClassroomId || classrooms[0].id;
      localStorage.setItem(CLASSROOM_KEY, activeId);
      clear(POINTS_DIRTY_KEY);
      return true;
    } finally {
      syncing = false;
      if (syncQueued) { syncQueued = false; scheduleSync(hooks?.getState?.()); }
    }
  }

  async function restoreSession() {
    session = read(SESSION_KEY);
    if (!session?.access_token) { session = null; notify(); return; }
    try {
      const token = await activeToken();
      const response = await fetch(`${PROJECT_URL}/auth/v1/user`, { headers: jsonHeaders(token) });
      session.user = await responseJson(response);
      write(SESSION_KEY, session);
      await ensureClassroomsAndHydrate();
    } catch {
      session = null;
      knownStudentIds = new Set();
      knownClassroomIds = new Set();
      clear(SESSION_KEY);
      clear(CLASSROOM_KEY);
    }
    notify();
  }

  async function signIn(email, password) {
    const payload = await auth("token?grant_type=password", { email, password });
    session = { ...payload, expires_at: Math.floor(Date.now() / 1000) + (payload.expires_in || 3600) };
    write(SESSION_KEY, session);
    await ensureClassroomsAndHydrate();
    notify();
    return getAccount();
  }

  async function signOut() {
    try { if (session?.access_token) await auth("logout", {}, session.access_token); } catch { /* local sign-out is enough */ }
    session = null;
    clearTimeout(pointSyncTimer);
    knownStudentIds = new Set();
    knownClassroomIds = new Set();
    clear(SESSION_KEY);
    clear(CLASSROOM_KEY);
    notify();
  }

  function scheduleSync(state) {
    if (!session?.access_token) return;
    clearTimeout(syncTimer);
    syncTimer = window.setTimeout(() => pushState(state).catch(() => {}), 700);
  }

  function schedulePointSync(state) {
    if (!session?.access_token) return;
    write(POINTS_DIRTY_KEY, true);
    clearTimeout(pointSyncTimer);
    pointSyncTimer = window.setTimeout(() => pushState(state).catch(() => {}), POINT_SYNC_DELAY);
  }

  function getAccount() { return { signedIn: Boolean(session?.access_token), email: session?.user?.email || "" }; }

  window.TeacherCloud = {
    initialize(nextHooks) { hooks = nextHooks; restoreSession(); },
    signIn,
    signOut,
    scheduleSync,
    schedulePointSync,
    syncNow: () => pushState(hooks?.getState?.()),
    getAccount,
    isSignedIn: () => Boolean(session?.access_token)
  };
})();
