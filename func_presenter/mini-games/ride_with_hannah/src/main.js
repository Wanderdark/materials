import { RideWithHannahEngine } from "./engine.js";

const engine = new RideWithHannahEngine({
    frame: document.getElementById("gameFrame"),
    world: document.getElementById("gameWorld"),
    environmentRoot: document.getElementById("environmentRoot"),
    hannahSprite: document.getElementById("hannahSprite"),
    hannahShadow: document.getElementById("hannahShadow"),
    overlays: document.getElementById("debugOverlays"),
    loader: document.getElementById("assetLoader"),
    debugPanel: document.getElementById("debugPanel")
});

engine.start();
