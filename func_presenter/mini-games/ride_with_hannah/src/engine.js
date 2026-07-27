import { cloneConfig } from "./config.js";
import { AssetLoader } from "./assetLoader.js";
import { ParallaxLayer } from "./parallaxLayer.js";
import { HannahCharacter } from "./character.js";
import { DebugPanel } from "./debugPanel.js";

export class RideWithHannahEngine {
    constructor(elements) {
        this.elements = elements;
        this.config = cloneConfig();
        this.layers = [];
        this.character = null;
        this.debugPanel = null;
        this.assets = new Map();
        this.warnings = [];
        this.audio = null;
        this.lastTime = 0;
        this.paused = false;
        this.rafId = 0;
        this.viewportScale = 1;
        this.debugTimer = 0;

        this.onResize = this.onResize.bind(this);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.tick = this.tick.bind(this);
    }

    async start() {
        this.applySharedEnvironmentDefaults();
        const loader = new AssetLoader(this.config, this.elements.loader);
        const result = await loader.preload();
        this.assets = result.assets;
        this.warnings = result.warnings.concat(this.filenameMappingWarnings());
        this.buildScene();
        this.debugPanel = new DebugPanel(this.elements.debugPanel, this.config, {
            applyConfig: () => this.applyConfig(),
            reset: () => this.resetVisualTuning()
        });
        this.debugPanel.setWarnings(this.warnings);
        this.applyConfig();
        this.onResize();
        window.addEventListener("resize", this.onResize);
        document.addEventListener("visibilitychange", this.onVisibilityChange);
        window.addEventListener("keydown", this.onKeyDown);
        this.setupAudio();
        this.lastTime = performance.now();
        this.rafId = requestAnimationFrame(this.tick);
    }

    buildScene() {
        this.elements.environmentRoot.innerHTML = "";
        this.layers = this.config.layers.filter((layer) => layer.enabled).map((layer) => new ParallaxLayer(
            layer,
            this.elements.environmentRoot,
            this.assets.get(layer.src),
            this.elements.overlays,
            this.config.usePlaceholderAssets
        ));
        this.character = new HannahCharacter(
            this.config.character,
            this.elements.hannahSprite,
            this.elements.hannahShadow,
            this.assets,
            this.config.usePlaceholderAssets
        );
    }

    applySharedEnvironmentDefaults() {
        this.config.layers.forEach((layer) => {
            if (layer.scroll) {
                layer.renderWidth = this.config.environment.sharedWidth;
                layer.renderHeight = this.config.environment.sharedHeight;
                layer.y = this.config.environment.sharedY;
            }
        });
    }

    applyConfig() {
        this.applySharedEnvironmentDefaults();
        this.layers.forEach((layer) => layer.applyLayout());
        this.character.applyLayout();
        this.applyOverlays();
        this.debugPanel?.updateLayerStatus(this.layers.map((layer) => layer.getStatus()));
    }

    applyOverlays() {
        const overlays = this.config.overlays;
        this.elements.overlays.classList.toggle("is-visible", Object.values(overlays).some(Boolean));
        this.toggleOverlay(".viewport-boundary", overlays.viewportBoundary);
        this.toggleOverlay(".horizon-guide", overlays.horizonGuide, { top: `${this.config.environment.horizonY}px` });
        this.toggleOverlay(".ground-guide", overlays.groundContactLine, { top: `${this.config.environment.groundLineY}px` });

        const bounds = this.character.getBounds();
        this.toggleOverlay(".anchor-point", overlays.hannahAnchorPoint, {
            left: `${bounds.anchorX}px`,
            top: `${bounds.anchorY}px`
        });
        this.toggleOverlay(".sprite-bounds", overlays.hannahSpriteBounds, {
            left: `${bounds.left}px`,
            top: `${bounds.top}px`,
            width: `${bounds.width}px`,
            height: `${bounds.height}px`
        });

        this.elements.overlays.querySelectorAll(".canvas-bounds").forEach((node) => {
            node.style.display = overlays.environmentCanvasBounds ? "block" : "none";
        });
        this.elements.overlays.querySelectorAll(".seam-guide").forEach((node) => {
            node.style.display = overlays.segmentSeams ? "block" : "none";
        });
    }

    toggleOverlay(selector, enabled, styles = {}) {
        const node = this.elements.overlays.querySelector(selector);
        node.style.display = enabled ? "block" : "none";
        Object.assign(node.style, styles);
    }

    tick(time) {
        if (this.paused) {
            this.lastTime = time;
            this.rafId = requestAnimationFrame(this.tick);
            return;
        }

        const delta = Math.min((time - this.lastTime) / 1000, 0.05);
        this.lastTime = time;
        this.updateSpeed(delta);
        this.layers.forEach((layer) => layer.update(delta, this.config.speed.current));
        this.character.update(delta);
        this.applyOverlays();
        this.debugTimer += delta;
        if (this.debugTimer >= this.config.debug.updateInterval) {
            this.debugTimer = 0;
            this.debugPanel?.updateLayerStatus(this.layers.map((layer) => layer.getStatus()));
        }
        this.rafId = requestAnimationFrame(this.tick);
    }

    updateSpeed(delta) {
        const speed = this.config.speed;
        if (speed.current === speed.target) {
            return;
        }
        const direction = Math.sign(speed.target - speed.current);
        const next = speed.current + direction * speed.acceleration * delta;
        speed.current = direction > 0 ? Math.min(next, speed.target) : Math.max(next, speed.target);
    }

    onResize() {
        const frame = this.elements.frame.getBoundingClientRect();
        this.viewportScale = Math.min(
            frame.width / this.config.designWidth,
            frame.height / this.config.designHeight
        );
        this.elements.world.style.transform = `translate(-50%, -50%) scale(${this.viewportScale})`;
    }

    onVisibilityChange() {
        this.paused = document.hidden;
        this.lastTime = performance.now();
    }

    setupAudio() {
        const forest = this.config.audio?.forest;
        if (!forest?.src) {
            return;
        }
        this.audio = document.createElement("audio");
        this.audio.src = forest.src;
        this.audio.loop = forest.loop !== false;
        this.audio.volume = forest.volume;
        this.audio.preload = "auto";
        this.audio.hidden = true;
        document.body.append(this.audio);
        window.__rideWithHannahAudio = this.audio;
        window.__rideWithHannahAudioReady = true;

        const tryPlay = () => {
            if (!this.audio || !this.audio.paused) {
                cleanup();
                return;
            }
            this.audio.play().then(cleanup).catch(() => {});
        };
        const cleanup = () => {
            window.removeEventListener("pointerdown", tryPlay);
            window.removeEventListener("keydown", tryPlay);
        };
        window.addEventListener("pointerdown", tryPlay);
        window.addEventListener("keydown", tryPlay);
        tryPlay();
    }

    onKeyDown(event) {
        if (event.code === "Space") {
            this.audio?.play().catch(() => {});
            event.preventDefault();
            this.character.jump();
        }
    }

    resetVisualTuning() {
        cancelAnimationFrame(this.rafId);
        this.elements.overlays.querySelectorAll(".canvas-bounds, .seam-guide").forEach((node) => node.remove());
        this.config = cloneConfig();
        this.applySharedEnvironmentDefaults();
        this.buildScene();
        this.debugPanel = new DebugPanel(this.elements.debugPanel, this.config, {
            applyConfig: () => this.applyConfig(),
            reset: () => this.resetVisualTuning()
        });
        this.debugPanel.setWarnings(this.warnings);
        this.applyConfig();
        this.onResize();
        this.lastTime = performance.now();
        this.rafId = requestAnimationFrame(this.tick);
    }

    filenameMappingWarnings() {
        return this.config.layers
            .filter((layer) => layer.enabled && layer.expectedSrc && layer.expectedSrc !== layer.src)
            .map((layer) => `${layer.id}: expected ${layer.expectedSrc}, using supplied ${layer.src}`);
    }
}
