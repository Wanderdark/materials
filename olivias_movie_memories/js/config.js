window.LeagueListening = window.LeagueListening || {};

window.LeagueListening.GAME_CONFIG = Object.freeze({
  maxVideoPlays: 2,
  answerSeconds: 20,
  jokersPerRound: 2,
  timeFreezeSeconds: 15,
  defaultRoundLimit: 10,
  streak: Object.freeze({ bonusAt: 3, bonusPoints: 50, jokerAt: 5 }),
  score: Object.freeze({ withSubtitles: 100, withoutSubtitles: 200, difficultyMultiplier: Object.freeze({ easy: 0.5, medium: 1 }) }),
  rosterPointRatio: Object.freeze({ gamePoints: 100, rosterPoints: 1 })
});

window.LeagueListening.VIDEO_BASE_URL = "https://media.adilhoca.com/video/";
window.LeagueListening.resolveVideoSrc = (source) => {
  if (!source || /^https?:\/\//i.test(source)) return source;
  const fileName = String(source).split(/[\\/]/).pop();
  return `${window.LeagueListening.VIDEO_BASE_URL}${encodeURIComponent(fileName)}`;
};
window.LeagueListening.resolveLocalVideoSrc = (source) => {
  const fileName = String(source || "").split(/[\\/]/).pop();
  return fileName ? `assets/video/${encodeURIComponent(fileName)}` : "";
};

if (Array.isArray(window.LEAGUE_OF_LISTENING_ITEMS)) {
  window.LEAGUE_OF_LISTENING_ITEMS.forEach((item) => {
    if (item?.videoSrc) {
      item.remoteVideoSrc = window.LeagueListening.resolveVideoSrc(item.videoSrc);
      item.localVideoSrc = window.LeagueListening.resolveLocalVideoSrc(item.videoSrc);
      item.videoSrc = item.remoteVideoSrc;
    }
  });
}

window.LeagueListening.teamColors = ["blue", "green", "orange"];
