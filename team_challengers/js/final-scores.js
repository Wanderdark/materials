(() => {
  const TC = window.TeamChallengers;

  function getGroupRanks(groups) {
    return groups.map((group) => groups.filter((other) => other.score > group.score).length + 1);
  }

  function getFinalStarAwards(state) {
    const ranks = getGroupRanks(state.groups);
    const overallTop = Math.max(0, ...state.groups.flatMap((group) => group.students.map((student) => student.score)));
    return state.groups.flatMap((group, groupIndex) => {
      const rank = ranks[groupIndex];
      const topPoints = Math.max(0, ...group.students.map((student) => student.score));
      return group.students.map((student, studentIndex) => {
        const breakdown = [];
        let stars = student.score === 0 ? (rank === 1 ? 1 : 0) : 4 - rank;
        if (student.score === 0 && rank === 1) breakdown.push("Kazanan takım katılımı: +1 yıldız");
        if (student.score > 0) breakdown.push(`Takım sıralaması #${rank}: +${stars} yıldız`);
        if (student.score > 0 && student.score === topPoints) { stars += 1; breakdown.push("Takımın en yüksek puanı: +1 yıldız"); }
        if (student.score > 0 && student.score === overallTop && rank !== 1) { stars += 1; breakdown.push("En yüksek bireysel puan bonusu: +1 yıldız"); }
        return { key: `${groupIndex}-${studentIndex}`, name: student.name, stars, points: stars * TC.CONFIG.rosterPointsPerStar, breakdown };
      });
    });
  }

  function showAwardBreakdown(award) {
    const overlay = document.querySelector("#award-breakdown-overlay");
    const title = document.querySelector("#award-breakdown-title");
    const list = document.querySelector("#award-breakdown-list");
    const total = document.querySelector("#award-breakdown-total");
    if (!overlay || !title || !list || !total || !award) return;
    title.textContent = `${award.name.toLocaleUpperCase("tr-TR")} ÖDÜLÜ`;
    list.replaceChildren();
    (award.breakdown.length ? award.breakdown : ["Bu tur için yıldız ödülü yok."]).forEach((reason) => { const item = document.createElement("p"); item.textContent = reason; list.appendChild(item); });
    total.textContent = `${award.stars} yıldız × ${TC.CONFIG.rosterPointsPerStar} HUD puanı = +${award.points} Pts`;
    overlay.classList.add("open"); overlay.setAttribute("aria-hidden", "false");
  }

  function renderStars(count, max) {
    const wrap = document.createElement("div");
    wrap.className = "sg-stars";
    for (let index = 0; index < max; index += 1) {
      const star = document.createElement("span"); star.className = index < count ? "sg-star-filled" : "sg-star-empty"; star.textContent = "★"; wrap.appendChild(star);
    }
    return wrap;
  }

  function renderFinalScores(state) {
    const ranks = getGroupRanks(state.groups);
    const topScore = Math.max(...state.groups.map((group) => group.score));
    const winners = state.groups.filter((group) => group.score === topScore);
    document.querySelector("#wl-group").textContent = `${winners.map((group) => group.name).join(" & ")} ${winners.length > 1 ? "tie!" : "wins!"}`;
    document.querySelector("#wl-pts").textContent = topScore;
    const all = document.querySelector("#wl-all"); all.replaceChildren();
    state.groups.forEach((group) => { const row = document.createElement("p"); if (group.score === topScore) row.className = "w-top"; const name = document.createElement("span"); name.textContent = group.name; const score = document.createElement("strong"); score.textContent = `${group.score} pts`; row.append(name, score); all.appendChild(row); });

    const awards = getFinalStarAwards(state);
    const awardMap = new Map(awards.map((award) => [award.key, award]));
    const list = document.querySelector("#winner-scores-list"); list.replaceChildren();
    const entries = state.groups.flatMap((group, groupIndex) => group.students.map((student, studentIndex) => ({ ...student, group: group.name, groupIndex, studentIndex }))).sort((a, b) => b.score - a.score).slice(0, 8);
    entries.forEach((entry, index) => { const row = document.createElement("div"); row.className = `sp-row${index === 0 ? " sp-gold" : index === 1 ? " sp-silver" : index === 2 ? " sp-bronze" : ""}`; const rank = document.createElement("div"); rank.className = "sp-rk"; rank.textContent = index + 1; const info = document.createElement("div"); info.className = "sp-info"; const name = document.createElement("button"); name.type = "button"; name.className = "sp-name award-breakdown-trigger"; name.textContent = entry.name; name.addEventListener("click", () => showAwardBreakdown(awardMap.get(`${entry.groupIndex}-${entry.studentIndex}`))); const group = document.createElement("div"); group.className = "sp-grp"; group.textContent = entry.group; info.append(name, group); const points = document.createElement("div"); points.className = "sp-pts"; points.textContent = entry.score; row.append(rank, info, points); list.appendChild(row); });

    const grid = document.querySelector("#winner-group-grid"); grid.replaceChildren(); grid.classList.toggle("two-groups", state.groups.length === 2);
    const trophies = ["🥇", "🥈", "🥉"];
    state.groups.forEach((group, groupIndex) => {
      const rank = ranks[groupIndex];
      const col = document.createElement("div"); col.className = "sg-col";
      const header = document.createElement("div"); header.className = `sg-hdr${rank === 1 ? " sg-hdr-leader" : ""}`; header.textContent = `${trophies[rank - 1]} ${group.name}`;
      const total = document.createElement("div"); total.className = "sg-total"; total.textContent = `Toplam: ${group.score} puan`;
      col.append(header, total);
      [...group.students].map((student, studentIndex) => ({ ...student, originalIndex: studentIndex })).sort((a, b) => b.score - a.score).forEach((student, index) => {
        const row = document.createElement("div"); row.className = `sg-row${index === 0 ? " sg-top" : ""}`;
        const place = document.createElement("div"); place.className = "sg-rank"; place.textContent = index + 1;
        const award = awardMap.get(`${groupIndex}-${student.originalIndex}`);
        const name = document.createElement("button"); name.type = "button"; name.className = "sg-sname award-breakdown-trigger"; name.textContent = student.name; name.addEventListener("click", () => showAwardBreakdown(award));
        const hudPoints = document.createElement("div"); hudPoints.className = "sg-hud-points"; hudPoints.textContent = `+${award?.points || 0} Pts`;
        const points = document.createElement("div"); points.className = "sg-spts"; points.textContent = student.score;
        row.append(place, name, hudPoints, renderStars(award?.stars || 0, rank === 3 ? 3 : 4), points); col.appendChild(row);
      });
      grid.appendChild(col);
    });
    return awards;
  }

  Object.assign(TC, { getFinalStarAwards, getGroupRanks, renderFinalScores });
})();
