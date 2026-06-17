# Development Notes

## Future Game Projects

- Avoid growing prototype code as dense single-line blocks.
- Start with modular structure early, even for prototypes:
  - `core/game-state.js`
  - `systems/campaigns.js`
  - `systems/achievements.js`
  - `systems/daily-quests.js`
  - `ui/screens.js`
  - `data/*.js`
- Keep functions readable, multi-line, and easy to patch.
- Prefer small behavior-preserving changes near release instead of broad refactors.

## Word Overlord

- This project is close to early-access/prototype completion.
- From this point, prefer bug fixes and small polish.
- Avoid large structural refactors unless a bug or feature truly requires it.
