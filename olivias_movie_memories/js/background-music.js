(() => {
window.LeagueListening = window.LeagueListening || {};

const tracks = window.LeagueListening.backgroundTracks || [];
const normalVolume = 0.18;
const duckedVolume = 0.04;
const audio = new Audio();
let queue = [];
let previousTracks = [];
let started = false;
let currentTrack = "";
let ducked = false;
let muted = false;

function refillQueue() { queue = [...tracks].sort(() => Math.random() - 0.5); }
function playTrack(track) {
  if (!track) return;
  currentTrack = track;
  audio.src = `../song_presenter/kareoke/${track}`;
  audio.volume = ducked ? duckedVolume : normalVolume;
  audio.play().catch(() => {});
}
function playNext() {
  if (!started) return;
  if (!queue.length) refillQueue();
  if (currentTrack) previousTracks.push(currentTrack);
  playTrack(queue.pop());
}
function startBackgroundMusic() {
  started = true;
  if (audio.src) audio.play().catch(() => {});
  else playNext();
}
function duckBackgroundMusic() { ducked = true; audio.volume = duckedVolume; }
function restoreBackgroundMusic() { ducked = false; audio.volume = normalVolume; }
function previousBackgroundTrack() {
  if (!previousTracks.length) return;
  if (currentTrack) queue.push(currentTrack);
  playTrack(previousTracks.pop());
}
function nextBackgroundTrack() { if (!started) { startBackgroundMusic(); return; } playNext(); }
function toggleBackgroundMusic() { muted = !muted; audio.muted = muted; return muted; }

audio.addEventListener("ended", playNext);
audio.addEventListener("error", () => { if (queue.length) playNext(); });
Object.assign(window.LeagueListening, { duckBackgroundMusic, nextBackgroundTrack, previousBackgroundTrack, restoreBackgroundMusic, startBackgroundMusic, toggleBackgroundMusic });
})();
