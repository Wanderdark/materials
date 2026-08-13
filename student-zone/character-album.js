(() => {
  const album = document.querySelector("#character-album");
  const charactersHub = document.querySelector("#characters-hub");
  const characterHubGrid = charactersHub?.querySelector(".solo-game-grid");
  if (!album || !charactersHub || !characterHubGrid) return;

  const characters = ["ava", "benjamin", "chloe", "daniel", "david", "ella", "emma", "ethan", "hannah", "jack", "lucas", "mia", "noah", "olivia", "victoria", "zoe"];
  const chapters = [
    { id: "introduction", title: "INTRODUCTION", prefix: "introduce_" },
    { id: "countries", title: "COUNTRIES", prefix: "countries_" },
    { id: "appearance", title: "PHYSICAL APPEARANCE", prefix: "5_personal_life_appearance_" },
    { id: "family", title: "INTRODUCING FAMILIES", prefix: "introduce_family_" }
  ];
  const layouts = [
    [{ side: "left", x: 7, y: 13, w: 39, r: -4 }, { side: "left", x: 53, y: 12, w: 37, r: 3 }, { side: "left", x: 9, y: 54, w: 37, r: 3 }, { side: "left", x: 53, y: 55, w: 38, r: -3 }, { side: "right", x: 8, y: 14, w: 37, r: 4 }, { side: "right", x: 53, y: 12, w: 38, r: -3 }, { side: "right", x: 9, y: 55, w: 39, r: -2 }, { side: "right", x: 54, y: 54, w: 36, r: 4 }],
    [{ side: "left", x: 8, y: 12, w: 37, r: 3 }, { side: "left", x: 52, y: 15, w: 39, r: -4 }, { side: "left", x: 8, y: 55, w: 39, r: -3 }, { side: "left", x: 55, y: 53, w: 35, r: 4 }, { side: "right", x: 8, y: 13, w: 39, r: -3 }, { side: "right", x: 54, y: 14, w: 36, r: 4 }, { side: "right", x: 10, y: 54, w: 36, r: 3 }, { side: "right", x: 53, y: 54, w: 38, r: -4 }]
  ];
  const videoRoot = "../olivias_movie_memories/assets/video/";
  const portrait = (id) => `../func_presenter/images/common/bookmarks/${id}.webp`;
  const pretty = (id) => id.charAt(0).toUpperCase() + id.slice(1);
  const videoId = (chapter) => `${chapter.prefix}${currentCharacter}`;
  const videoSource = (id) => `${videoRoot}${id}.mp4`;
  const thumbnailTimes = window.CHARACTER_ALBUM_THUMBNAILS || {};
  let currentCharacter = null;
  let chapterIndex = 0;
  let characterPage = 0;
  let restoresCharactersHub = false;

  characterHubGrid.insertAdjacentHTML("afterbegin", `<button class="solo-game-card character-album-entry" type="button" data-character-album-open aria-haspopup="dialog" aria-controls="character-album" style="position:relative;isolation:isolate"><img src="../images/thumbnails/character_book.webp" width="640" height="360" alt="Character Album preview" style="position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover"><span class="solo-game-copy" style="z-index:1;grid-column:1/-1;justify-self:end;width:50%;padding:24px;color:#0b172b;background:transparent"><span class="game-tags" style="transform:translateX(12px)"><b style="color:#fff;background:#0b0b0b">AdilHoca</b><b style="color:#fff;background:#0b0b0b">Album</b></span><strong style="color:#0b172b;transform:translateX(12px)">Character Album</strong><small style="color:#2a405a">Meet every student and explore their growing learning stories.</small><em style="color:#111">Open album <i aria-hidden="true">→</i></em></span></button>`);
  const opener = characterHubGrid.querySelector("[data-character-album-open]");

  const readProfile = () => {
    try { return JSON.parse(localStorage.getItem("fpStudentProfile") || "{}") || {}; } catch (_) { return {}; }
  };
  const profileKey = (profile) => `${profile.name || "guest"}:${profile.avatar || "guest"}`;
  const watchedVideos = () => {
    const profile = readProfile();
    return profile.characterAlbumWatched?.[profileKey(profile)] || {};
  };
  const isWatched = (id) => Boolean(watchedVideos()[id]);
  const markWatched = (id) => {
    const profile = readProfile();
    const key = profileKey(profile);
    profile.characterAlbumWatched = profile.characterAlbumWatched || {};
    profile.characterAlbumWatched[key] = { ...(profile.characterAlbumWatched[key] || {}), [id]: true };
    localStorage.setItem("fpStudentProfile", JSON.stringify(profile));
    window.dispatchEvent(new Event("studentprofilechange"));
  };
  const parseTimestamp = (value) => {
    if (value == null) return 0;
    const match = String(value).match(/^(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?$/);
    if (!match) return 0;
    return Number(match[1]) * 60 + Number(match[2]) + Number(`0.${match[3] || "0"}`);
  };
  const seekThumbnail = (video, fallback) => {
    const replaceWithFallback = () => {
      const image = document.createElement("img");
      image.className = "album-memory-thumb";
      image.src = fallback;
      image.alt = "";
      video.replaceWith(image);
    };
    video.addEventListener("loadedmetadata", () => {
      const target = Math.min(parseTimestamp(video.dataset.thumbnail), Math.max(0, (video.duration || 0) - .05));
      video.currentTime = target;
    }, { once: true });
    video.addEventListener("error", replaceWithFallback, { once: true });
  };
  const pickerHeader = () => `<div class="character-album-backdrop" data-album-close></div><section class="character-album-panel" tabindex="-1"><header class="album-header"><span></span><div class="album-header-copy"><p>AdilHoca Universe</p><h2 id="character-album-title">Character Album</h2></div><button class="album-icon-button" type="button" data-album-close aria-label="Close Character Album">×</button></header><div class="album-body">`;
  const renderCharacters = (resetPage = true) => {
    if (resetPage) characterPage = 0;
    currentCharacter = null;
    const pageSize = 6;
    const pageCount = Math.ceil(characters.length / pageSize);
    const pageCharacters = characters.slice(characterPage * pageSize, characterPage * pageSize + pageSize);
    album.innerHTML = `${pickerHeader()}<p class="album-intro">Choose a student to open their Memory Book and explore their stories.</p><div class="album-character-grid">${pageCharacters.map((id) => `<button class="album-character-card" type="button" data-album-character="${id}"><img src="${portrait(id)}" alt="${pretty(id)}" style="object-fit:cover;object-position:center top" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><strong hidden>${pretty(id)}</strong></button>`).join("")}</div><nav class="album-character-pagination" aria-label="Character pages"><button type="button" data-album-character-page="previous" ${characterPage === 0 ? "disabled" : ""} aria-label="Previous characters">←</button><span>${characterPage + 1} / ${pageCount}</span><button type="button" data-album-character-page="next" ${characterPage === pageCount - 1 ? "disabled" : ""} aria-label="Next characters">→</button></nav></div></section>`;
  };
  const slotStyle = (slot) => {
    const pageLeft = slot.side === "left" ? 7.5 : 52.4;
    const pageWidth = slot.side === "left" ? 40.1 : 39.2;
    return `--x:${pageLeft + slot.x * pageWidth / 100}%;--y:${7.4 + slot.y * .84}%;--w:${slot.w * pageWidth / 100}%;--r:${slot.r}deg;`;
  };
  const renderBook = () => {
    const chapter = chapters[chapterIndex];
    const id = videoId(chapter);
    const watched = isWatched(id);
    const layout = layouts[chapterIndex % layouts.length];
    const slots = layout.map((slot, index) => {
      const style = slotStyle(slot);
      if (index !== 0) return `<div class="album-memory-empty" style="${style}" aria-hidden="true"><span>NEW MEMORY</span></div>`;
      return `<button class="album-memory-slot ${watched ? "" : "is-unwatched"}" type="button" data-album-video="${id}" style="${style}" aria-label="Watch ${chapter.title.toLowerCase()} memory for ${pretty(currentCharacter)}"><video class="album-memory-thumb" muted playsinline preload="metadata" data-thumbnail="${thumbnailTimes[id] || "00:00.000"}" src="${videoSource(id)}"></video><span class="album-memory-caption">${watched ? chapter.title : "UNWATCHED"}</span></button>`;
    }).join("");
    album.innerHTML = `<div class="character-album-backdrop" data-album-close></div><section class="album-book-card" aria-labelledby="character-album-title"><header class="album-book-head"><div><p class="kicker">${pretty(currentCharacter)}'S COLLECTION</p><h2 id="character-album-title">CHARACTER BOOK</h2></div><button class="album-book-close" type="button" data-album-book-close aria-label="Back to Character Album">×</button></header><nav class="album-book-chapter-nav" aria-label="Character Book chapters"><button type="button" data-album-chapter-scroll="-1" aria-label="Show previous chapters">‹</button><div class="album-book-chapters">${chapters.map((entry, index) => `<button type="button" data-album-chapter="${index}" ${index === chapterIndex ? "aria-current=\"page\"" : ""}>${entry.title}</button>`).join("")}</div><button type="button" data-album-chapter-scroll="1" aria-label="Show next chapters">›</button></nav><div class="album-book-stage"><div class="album-book-page-title"><span>${chapter.title}</span><small>PAGE 1 / 1</small></div><div class="album-book-pages">${slots}</div><button class="album-book-turn album-book-turn-prev" type="button" data-album-book-turn="previous" ${chapterIndex === 0 ? "disabled" : ""} aria-label="Previous chapter">‹</button><button class="album-book-turn album-book-turn-next" type="button" data-album-book-turn="next" ${chapterIndex === chapters.length - 1 ? "disabled" : ""} aria-label="Next chapter">›</button></div></section>`;
    album.querySelectorAll(".album-memory-thumb").forEach((video) => seekThumbnail(video, portrait(currentCharacter)));
  };
  const openViewer = (id) => {
    const chapter = chapters[chapterIndex];
    const viewer = document.createElement("section");
    viewer.className = "album-viewer";
    viewer.innerHTML = `<article class="album-viewer-card"><header class="album-viewer-head"><div><p class="kicker">CHARACTER REPLAY</p><h2>WATCH THE VIDEO</h2><p>${pretty(currentCharacter)} · ${chapter.title}</p></div><button class="album-viewer-close" type="button" data-album-viewer-close aria-label="Close character video">×</button></header><video controls playsinline preload="metadata" src="${videoSource(id)}"></video></article>`;
    const video = viewer.querySelector("video");
    video.addEventListener("play", () => document.dispatchEvent(new CustomEvent("characteralbumvideostart")));
    video.addEventListener("pause", () => document.dispatchEvent(new CustomEvent("characteralbumvideoend")));
    const close = () => { video.pause(); viewer.remove(); };
    viewer.querySelector("[data-album-viewer-close]").addEventListener("click", close);
    viewer.addEventListener("click", (event) => { if (event.target === viewer) close(); });
    video.addEventListener("ended", () => {
      markWatched(id);
      const card = album.querySelector(`[data-album-video="${id}"]`);
      card?.classList.remove("is-unwatched");
      const caption = card?.querySelector(".album-memory-caption");
      if (caption) caption.textContent = chapter.title;
    }, { once: true });
    album.append(viewer);
    video.play().catch(() => {});
  };
  const openAlbum = () => {
    restoresCharactersHub = !charactersHub.hidden;
    charactersHub.hidden = true;
    album.hidden = false;
    document.body.style.overflow = "hidden";
    renderCharacters();
    album.querySelector(".character-album-panel").focus();
  };
  const closeAlbum = () => {
    album.hidden = true;
    if (restoresCharactersHub) {
      charactersHub.hidden = false;
      opener.focus();
    } else {
      document.body.style.overflow = "";
    }
  };
  opener.addEventListener("click", openAlbum);
  album.addEventListener("click", (event) => {
    if (event.target.closest("[data-album-viewer-close]")) return;
    if (event.target.closest("[data-album-book-close]")) { renderCharacters(false); return; }
    if (event.target.closest("[data-album-close]")) { closeAlbum(); return; }
    const page = event.target.closest("[data-album-character-page]");
    if (page) { characterPage += page.dataset.albumCharacterPage === "next" ? 1 : -1; renderCharacters(false); return; }
    const character = event.target.closest("[data-album-character]");
    if (character) { currentCharacter = character.dataset.albumCharacter; chapterIndex = 0; renderBook(); return; }
    const chapter = event.target.closest("[data-album-chapter]");
    if (chapter) { chapterIndex = Number(chapter.dataset.albumChapter); renderBook(); return; }
    const chapterScroll = event.target.closest("[data-album-chapter-scroll]");
    if (chapterScroll) { album.querySelector(".album-book-chapters")?.scrollBy({ left: Number(chapterScroll.dataset.albumChapterScroll) * 260, behavior: "smooth" }); return; }
    const turn = event.target.closest("[data-album-book-turn]");
    if (turn) { chapterIndex += turn.dataset.albumBookTurn === "next" ? 1 : -1; renderBook(); return; }
    const video = event.target.closest("[data-album-video]");
    if (video) openViewer(video.dataset.albumVideo);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || album.hidden) return;
    const viewer = album.querySelector(".album-viewer");
    if (viewer) { viewer.querySelector("video")?.pause(); viewer.remove(); return; }
    if (currentCharacter) { renderCharacters(false); return; }
    closeAlbum();
  });
})();
