#!/usr/bin/env bash
cat <<'CONTEXT'
VOCABULARY PRESENTER TOOL handoff context

Working directory:
F:\OYUN_SITESI\func_presenter\mini-games\ride_with_hannah

Prototype:
Ride with Hannah side-scrolling mini-game, moved from F:\ride_with_hannah into func_presenter mini-games.

Current standalone entry:
index.html

Local test command:
cd /f/OYUN_SITESI/func_presenter/mini-games/ride_with_hannah
python -m http.server 4174 --bind 127.0.0.1

Verified local URL:
http://127.0.0.1:4174/

Current runtime status:
- app script: ./src/app.js?v=3
- all asset paths are relative to ride_with_hannah
- no F:\ride_with_hannah absolute dependency remains
- debug panel is hidden with CSS
- 6 active environment layers, 11 environment image nodes
- forest ambience: ./assets/sounds/forest.mp3, loop audio element
- Space triggers Hannah jump, then returns to ride

Active environment layers:
- distant_sky_layer
- distant_clouds_layer using ./assets/backgrounds/distant_clouds_seamless_layer.png
- composite_distant_landscape_layer using ./assets/backgrounds/composite_distant_landscape_seamless_layer.png
- composite_mid_roadside_layer using ./assets/backgrounds/composite_mid_roadside_seamless_layer.png
- ground_layer using ./assets/backgrounds/cycling_path_layer.png
- foreground_vegetation_layer using ./assets/backgrounds/foreground_vegetation_dense_layer.png

Inactive original layers preserved in config:
- distant_mountain_layer
- far_forest_layer
- midground_trees_layer
- near_bushes_layer
- roadside_details_layer

Character assets:
- ride: ./assets/characters/hannah_ride_manual_atlas.png?v=1
- jump: ./assets/characters/hannah_jump_manual_atlas.png?v=1
- original/source split files are preserved in assets/characters

Important tuned values:
- character scale: 0.8
- character visualYOffset: 260
- jumpHeight: 155
- jumpHangPower: 0.58
- jump fps: 8
- ground yOffset: 105
- foreground yOffset: 110

Recent validation at new location:
- layerCount: 6
- envImages: 11
- loaderHidden: true
- debugPanelDisplay: none
- audioExists: true
- audioLoop: true
- audioSrc: http://127.0.0.1:4174/assets/sounds/forest.mp3
- console errors: none

Repository rules:
- Read F:\OYUN_SITESI\AGENTS.md before editing.
- Use apply_patch for edits.
- Preserve UTF-8, BOM state, Turkish characters and line endings.
- Create byte-for-byte backups under F:\backups before editing existing source files.

Recommended next task in VOCABULARY PRESENTER TOOL:
Integrate ride_with_hannah as a callable mini-game inside func_presenter without changing the existing presenter flow. First inspect func_presenter/index.html and app.js navigation/launch patterns, then add the smallest safe link/launch path to mini-games/ride_with_hannah/index.html.
CONTEXT
