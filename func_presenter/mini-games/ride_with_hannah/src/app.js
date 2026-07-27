(() => {
    const DEFAULT_CONFIG = {
        usePlaceholderAssets: false,
        designWidth: 1920,
        designHeight: 1080,
        speed: { current: 360, target: 360, acceleration: 900 },
        audio: {
            forest: {
                src: "./assets/sounds/forest.mp3",
                volume: 0.45,
                loop: true
            }
        },
        environment: {
            sharedWidth: 1920,
            sharedHeight: 1280,
            sharedY: -200,
            baseScale: 1,
            horizonY: 445,
            groundLineY: 890
        },
        overlays: {
            viewportBoundary: false,
            horizonGuide: false,
            groundContactLine: false,
            hannahAnchorPoint: false,
            hannahSpriteBounds: false,
            environmentCanvasBounds: false,
            segmentSeams: false
        },
        layers: [
            layer("distant_sky_layer", "Sky", "./assets/backgrounds/distant_sky_layer.png", "sky", 1774, 887, 1920, 1080, 0, 0, false),
            layer("distant_clouds_layer", "Clouds", "./assets/backgrounds/distant_clouds_seamless_layer.png", "clouds", 1536, 1024, 1920, 1280, 0.04, 10, true),
            { ...layer("distant_mountain_layer", "Mountains", "./assets/backgrounds/distant_mountain_layer.png", "mountains", 1536, 1024, 1920, 1280, 0.1, 20, true), enabled: false },
            { ...layer("composite_distant_landscape_layer", "Distant landscape composite", "./assets/backgrounds/composite_distant_landscape_seamless_layer.png", "mountains", 1536, 1024, 1920, 1280, 0.16, 25, true), alternateFlip: false },
            { ...layer("far_forest_layer", "Far forest", "./assets/backgrounds/far_forest_layer.png", "farForest", 1536, 1024, 1920, 1280, 0.18, 30, true), enabled: false },
            { ...layer("midground_trees_layer", "Midground trees", "./assets/backgrounds/midground_trees_layer.png", "midgroundTrees", 1536, 1024, 1920, 1280, 0.38, 40, true), enabled: false },
            { ...layer("near_bushes_layer", "Near bushes", "./assets/backgrounds/near_bushes_and_grass_layer.png", "nearBushes", 1536, 1024, 1920, 1280, 0.68, 50, true), expectedSrc: "./assets/backgrounds/near_bushes_layer.png", enabled: false },
            { ...layer("roadside_details_layer", "Roadside details", "./assets/backgrounds/roadside_details_layer.png", "roadsideDetails", 1536, 1024, 1920, 1280, 0.88, 60, true), enabled: false },
            { ...layer("composite_mid_roadside_layer", "Mid roadside composite", "./assets/backgrounds/composite_mid_roadside_seamless_layer.png", "nearBushes", 1536, 1024, 1920, 1280, 0.72, 58, true), alternateFlip: false },
            { ...layer("ground_layer", "Ground", "./assets/backgrounds/cycling_path_layer.png", "ground", 1536, 1024, 1920, 1280, 1, 70, true), expectedSrc: "./assets/backgrounds/ground_layer.png", yOffset: 105 },
            { ...layer("foreground_vegetation_layer", "Foreground vegetation", "./assets/backgrounds/foreground_vegetation_dense_layer.png", "foreground", 1536, 1024, 1920, 1280, 1.28, 100, true), yOffset: 110 }
        ],
        character: {
            anchorX: 0.3,
            groundY: 0.824,
            wheelContactOffsetX: 138,
            wheelContactOffsetY: 705,
            scale: 0.8,
            visualYOffset: 260,
            jumpHeight: 205,
            jumpHangPower: 0.42,
            bobAmplitude: 0,
            bobFrequency: 0,
            tiltAmplitude: 0,
            zIndex: 90,
            shadow: { enabled: false, zIndex: 65, width: 228, height: 42, xOffset: 8, yOffset: -6, opacity: 0.28 },
            states: {
                ride: {
                    src: "./assets/characters/hannah_ride_manual_atlas.png?v=1",
                    frameCount: 8,
                    columns: 8,
                    fps: 11,
                    loop: true,
                    sourceWidth: 2184,
                    sourceHeight: 724,
                    frameWidth: 273,
                    frameHeight: 724,
                    runtimeSourceWidth: 2184,
                    frameRects: [
                        { x: 0, y: 0, width: 273, height: 724 },
                        { x: 273, y: 0, width: 273, height: 724 },
                        { x: 546, y: 0, width: 273, height: 724 },
                        { x: 819, y: 0, width: 273, height: 724 },
                        { x: 1092, y: 0, width: 273, height: 724 },
                        { x: 1365, y: 0, width: 273, height: 724 },
                        { x: 1638, y: 0, width: 273, height: 724 },
                        { x: 1911, y: 0, width: 273, height: 724 }
                    ],
                    chromaKey: { enabled: false, color: [247, 2, 245], tolerance: 72, feather: 24 }
                },
                jump: {
                    src: "./assets/characters/hannah_jump_manual_atlas.png?v=1",
                    frameCount: 4,
                    columns: 4,
                    fps: 4,
                    loop: false,
                    sourceWidth: 1196,
                    sourceHeight: 724,
                    frameWidth: 299,
                    frameHeight: 724,
                    runtimeSourceWidth: 1196
                },
                idleFallback: { src: "./assets/characters/hannah1.png", frameCount: 1, sourceWidth: 1536, sourceHeight: 1024 }
            }
        },
        debug: { panelVisible: true, warningsVisible: true, updateInterval: 0.25 }
    };

    function layer(id, label, src, placeholder, sourceWidth, sourceHeight, renderWidth, renderHeight, speedMultiplier, zIndex, scroll) {
        return {
            id,
            label,
            src,
            placeholder,
            sourceWidth,
            sourceHeight,
            renderWidth,
            renderHeight,
            x: 0,
            y: scroll ? -200 : 0,
            xOffset: 0,
            yOffset: 0,
            scale: 1,
            speedMultiplier,
            zIndex,
            opacity: 1,
            enabled: true,
            scroll,
            alternateFlip: false
        };
    }

    const placeholderColors = {
        sky: ["#88cdf0", "#c7edf8"],
        clouds: ["#dff7ff", "#ffffff"],
        mountains: ["#8aa1b1", "#d1dbe1"],
        farForest: ["#5f8c72", "#9fc5a2"],
        midgroundTrees: ["#407b54", "#8eb878"],
        nearBushes: ["#2e6f45", "#76a95b"],
        roadsideDetails: ["#5f7f46", "#b0bd63"],
        ground: ["#8d8170", "#d4bf97"],
        foreground: ["#21593a", "#5d9f54"]
    };

    function cloneConfig() {
        return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    }

    function placeholderDataUrl(key) {
        const colors = placeholderColors[key] || placeholderColors.sky;
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080"><defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop stop-color="${colors[0]}"/><stop offset="1" stop-color="${colors[1]}"/></linearGradient></defs><rect width="1920" height="1080" fill="url(#g)"/></svg>`;
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }

    function riderPlaceholderDataUrl(frameCount, frameWidth, height) {
        const width = frameCount * frameWidth;
        const frames = Array.from({ length: frameCount }, (_, index) => {
            const x = index * frameWidth;
            const pedal = index % 2 === 0 ? 20 : -20;
            return `<g transform="translate(${x} 0)"><rect width="${frameWidth}" height="${height}" fill="none"/><circle cx="92" cy="632" r="44" fill="none" stroke="#df3d6d" stroke-width="10"/><circle cx="188" cy="632" r="44" fill="none" stroke="#df3d6d" stroke-width="10"/><path d="M92 632 L138 568 L188 632 L128 632 Z" fill="none" stroke="#3a8ad8" stroke-width="10" stroke-linejoin="round"/><path d="M138 568 L154 505 L176 468" fill="none" stroke="#f4a62a" stroke-width="16" stroke-linecap="round"/><circle cx="168" cy="430" r="36" fill="#ffd39a"/><path d="M142 448 C104 468 98 512 110 552" fill="none" stroke="#f6bf31" stroke-width="18" stroke-linecap="round"/><path d="M138 568 L${138 + pedal} 620" stroke="#24343d" stroke-width="9" stroke-linecap="round"/></g>`;
        }).join("");
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${frames}</svg>`;
        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }

    class AssetLoader {
        constructor(config, loaderElement) {
            this.config = config;
            this.loaderElement = loaderElement;
            this.assets = new Map();
            this.warnings = [];
        }

        async preload() {
            const urls = this.collectUrls();
            let completed = 0;
            this.updateProgress(completed, urls.length);
            await Promise.all(urls.map((url) => new Promise((resolve) => {
                const image = new Image();
                image.onload = () => {
                    completed += 1;
                    const info = { image, loaded: true, width: image.naturalWidth, height: image.naturalHeight, runtimeSrc: url };
                    try {
                        this.applyRuntimeProcessing(url, image, info);
                    } catch (error) {
                        this.warnings.push(`Runtime processing skipped for ${url}: ${error.message}`);
                    }
                    this.assets.set(url, info);
                    this.updateProgress(completed, urls.length);
                    resolve();
                };
                image.onerror = () => {
                    completed += 1;
                    this.assets.set(url, { image: null, loaded: false, width: 0, height: 0 });
                    this.warnings.push(`Missing or unreadable asset: ${url}`);
                    this.updateProgress(completed, urls.length);
                    resolve();
                };
                image.src = url;
            })));
            this.loaderElement.hidden = true;
            return { assets: this.assets, warnings: this.warnings };
        }

        collectUrls() {
            if (this.config.usePlaceholderAssets) {
                return [];
            }
            const urls = new Set();
            this.config.layers.forEach((layerConfig) => {
                if (layerConfig.enabled) {
                    urls.add(layerConfig.src);
                }
            });
            Object.values(this.config.character.states).forEach((state) => urls.add(state.src));
            return [...urls];
        }

        applyRuntimeProcessing(url, image, info) {
            const ride = this.config.character.states.ride;
            if (url !== ride.src || !ride.chromaKey?.enabled) {
                return;
            }
            const frameWidth = ride.frameWidth;
            const frameHeight = ride.frameHeight;
            const canvas = document.createElement("canvas");
            canvas.width = ride.runtimeSourceWidth || frameWidth * ride.frameCount;
            canvas.height = frameHeight;
            const context = canvas.getContext("2d", { willReadFrequently: true });
            ride.frameRects.forEach((rect, index) => {
                context.drawImage(
                    image,
                    rect.x,
                    rect.y,
                    rect.width,
                    rect.height,
                    index * frameWidth,
                    0,
                    rect.width,
                    frameHeight
                );
            });
            const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = pixels.data;
            const [targetR, targetG, targetB] = ride.chromaKey.color;
            const tolerance = ride.chromaKey.tolerance;
            const feather = ride.chromaKey.feather;
            let changed = 0;
            for (let index = 0; index < data.length; index += 4) {
                const dr = data[index] - targetR;
                const dg = data[index + 1] - targetG;
                const db = data[index + 2] - targetB;
                const distance = Math.sqrt((dr * dr) + (dg * dg) + (db * db));
                if (distance <= tolerance) {
                    data[index + 3] = 0;
                    changed += 1;
                } else if (distance <= tolerance + feather) {
                    data[index + 3] = Math.round(data[index + 3] * ((distance - tolerance) / feather));
                    changed += 1;
                }
            }
            if (changed > 0) {
                context.putImageData(pixels, 0, 0);
                info.runtimeSrc = canvas.toDataURL("image/png");
                info.runtimeProcessed = "chroma-key";
                info.runtimeWidth = canvas.width;
                info.runtimeHeight = canvas.height;
                info.runtimeFrameWidth = frameWidth;
                this.warnings.push("hannah_ride_spritesheet.png uses uneven frame widths and an opaque magenta background; a transparent 8-frame runtime atlas was generated.");
            }
        }

        updateProgress(completed, total) {
            this.loaderElement.textContent = `Loading assets ${completed} / ${total}`;
        }
    }

    class ParallaxLayer {
        constructor(layerConfig, root, assetInfo, overlaysRoot, usePlaceholderAssets) {
            this.config = layerConfig;
            this.assetInfo = assetInfo;
            this.offset = 0;
            this.segmentWidth = layerConfig.renderWidth;
            this.element = document.createElement("div");
            this.track = document.createElement("div");
            this.segmentA = document.createElement("img");
            this.segmentB = document.createElement("img");
            this.canvasBounds = document.createElement("div");
            this.seamA = document.createElement("div");
            this.seamB = document.createElement("div");
            this.element.className = "parallax-layer";
            this.track.className = "parallax-track";
            this.segmentA.className = "parallax-segment segment-a";
            this.segmentB.className = "parallax-segment segment-b";
            this.canvasBounds.className = "canvas-bounds";
            this.seamA.className = "seam-guide";
            this.seamB.className = "seam-guide";
            this.element.dataset.layerId = layerConfig.id;
            this.element.dataset.scroll = String(layerConfig.scroll);
            const source = usePlaceholderAssets ? placeholderDataUrl(layerConfig.placeholder) : layerConfig.src;
            this.segmentA.decoding = "async";
            this.segmentB.decoding = "async";
            this.segmentA.src = source;
            this.segmentB.src = source;
            if (layerConfig.scroll) {
                this.track.append(this.segmentA, this.segmentB);
            } else {
                this.track.append(this.segmentA);
                this.segmentB.removeAttribute("src");
            }
            this.element.append(this.track);
            overlaysRoot.append(this.canvasBounds, this.seamA, this.seamB);
            root.append(this.element);
            this.applyLayout();
        }

        applyLayout() {
            const width = this.config.renderWidth * this.config.scale;
            const height = this.config.renderHeight * this.config.scale;
            const x = this.config.x + this.config.xOffset;
            const y = this.config.y + this.config.yOffset;
            this.segmentWidth = width;
            this.element.style.width = `${width}px`;
            this.element.style.height = `${height}px`;
            this.element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            this.element.style.zIndex = this.config.zIndex;
            this.element.style.opacity = this.config.opacity;
            this.element.style.display = this.config.enabled ? "block" : "none";
            this.track.style.width = `${this.config.scroll ? width * 2 : width}px`;
            this.track.style.height = `${height}px`;
            this.segmentA.style.left = "0px";
            this.segmentB.style.left = `${width}px`;
            this.segmentA.style.width = `${width}px`;
            this.segmentB.style.width = `${width}px`;
            this.segmentA.style.transform = "none";
            this.segmentB.style.transform = this.config.alternateFlip ? "scaleX(-1)" : "none";
            this.segmentA.style.transformOrigin = "center center";
            this.segmentB.style.transformOrigin = "center center";
            this.canvasBounds.style.left = `${x}px`;
            this.canvasBounds.style.top = `${y}px`;
            this.canvasBounds.style.width = `${width}px`;
            this.canvasBounds.style.height = `${height}px`;
            this.canvasBounds.dataset.layerId = this.config.id;
            this.seamA.dataset.layerId = this.config.id;
            this.seamB.dataset.layerId = this.config.id;
            this.updateOverlayPositions();
        }

        update(delta, speed) {
            if (!this.config.enabled || !this.config.scroll || this.segmentWidth <= 0) {
                return;
            }
            this.offset = (this.offset + (delta * speed * this.config.speedMultiplier)) % this.segmentWidth;
            this.track.style.transform = `translate3d(${-this.offset}px, 0, 0)`;
            this.updateOverlayPositions();
        }

        updateOverlayPositions() {
            const x = this.config.x + this.config.xOffset;
            const seamX = x + this.segmentWidth - this.offset;
            const wrappedSeamX = seamX > 1920 ? seamX - this.segmentWidth : seamX;
            this.seamA.style.left = `${seamX}px`;
            this.seamB.style.left = `${wrappedSeamX}px`;
        }

        getStatus() {
            return {
                id: this.config.id,
                loaded: !this.assetInfo || this.assetInfo.loaded,
                width: Math.round(this.segmentWidth),
                height: Math.round(this.config.renderHeight * this.config.scale),
                offset: Math.round(this.offset)
            };
        }
    }

    class HannahCharacter {
        constructor(config, spriteElement, shadowElement, assetInfo, usePlaceholderAssets) {
            this.config = config;
            this.spriteElement = spriteElement;
            this.shadowElement = shadowElement;
            this.assetInfo = assetInfo;
            this.usePlaceholderAssets = usePlaceholderAssets;
            this.assetMap = assetInfo instanceof Map ? assetInfo : null;
            this.state = config.states.ride;
            this.stateName = "ride";
            this.frame = 0;
            this.frameTimer = 0;
            this.elapsed = 0;
            this.stateElapsed = 0;
            this.isJumping = false;
            this.frameWidth = this.state.frameWidth;
            this.frameHeight = this.state.frameHeight;
            this.spriteElement.style.zIndex = this.config.zIndex;
            this.shadowElement.style.zIndex = this.config.shadow.zIndex;
            this.applyStateImage();
            this.applyLayout();
        }

        applyStateImage() {
            const stateInfo = this.assetMap?.get(this.state.src) || this.assetInfo;
            const spriteSource = this.usePlaceholderAssets
                ? riderPlaceholderDataUrl(this.state.frameCount, this.state.frameWidth, this.state.frameHeight)
                : stateInfo?.runtimeSrc || this.state.src;
            this.spriteElement.style.backgroundImage = `url("${spriteSource}")`;
        }

        setState(name) {
            this.stateName = name;
            this.state = this.config.states[name];
            this.frame = 0;
            this.frameTimer = 0;
            this.stateElapsed = 0;
            this.isJumping = name === "jump";
            this.applyStateImage();
            this.applyLayout();
        }

        jump() {
            if (!this.isJumping) {
                this.setState("jump");
            }
        }

        applyLayout() {
            const scale = this.config.scale;
            const stateInfo = this.assetMap?.get(this.state.src) || this.assetInfo;
            this.frameWidth = stateInfo?.runtimeFrameWidth || this.state.frameWidth || (this.state.sourceWidth / this.state.columns);
            this.frameHeight = stateInfo?.runtimeHeight || this.state.frameHeight || this.state.sourceHeight;
            const width = this.frameWidth * scale;
            const height = this.frameHeight * scale;
            const anchorX = 1920 * this.config.anchorX;
            const groundY = 1080 * this.config.groundY;
            const left = anchorX - (this.config.wheelContactOffsetX * scale);
            const top = groundY - (this.config.wheelContactOffsetY * scale) + this.config.visualYOffset;
            this.spriteElement.style.width = `${width}px`;
            this.spriteElement.style.height = `${height}px`;
            this.spriteElement.style.left = `${left}px`;
            this.spriteElement.style.top = `${top}px`;
            const sheetWidth = stateInfo?.runtimeWidth || this.state.runtimeSourceWidth || this.state.sourceWidth;
            this.spriteElement.style.backgroundSize = `${sheetWidth * scale}px ${height}px`;
            this.spriteElement.style.backgroundPosition = "0px 0px";
            const shadow = this.config.shadow;
            this.shadowElement.classList.toggle("is-enabled", shadow.enabled);
            this.shadowElement.style.width = `${shadow.width * scale}px`;
            this.shadowElement.style.height = `${shadow.height * scale}px`;
            this.shadowElement.style.left = `${anchorX - ((shadow.width * scale) / 2) + shadow.xOffset}px`;
            this.shadowElement.style.top = `${groundY - ((shadow.height * scale) / 2) + shadow.yOffset}px`;
            this.shadowElement.style.opacity = shadow.opacity;
        }

        update(delta) {
            this.elapsed += delta;
            this.frameTimer += delta;
            this.stateElapsed += delta;
            const frameDuration = 1 / this.state.fps;
            if (this.frameTimer >= frameDuration) {
                const framesToAdvance = Math.floor(this.frameTimer / frameDuration);
                this.frameTimer %= frameDuration;
                if (this.state.loop === false) {
                    this.frame += framesToAdvance;
                    if (this.frame >= this.state.frameCount) {
                        this.setState("ride");
                        return;
                    }
                } else {
                    this.frame = (this.frame + framesToAdvance) % this.state.frameCount;
                }
                this.spriteElement.style.backgroundPosition = `${-(this.frame * this.frameWidth * this.config.scale)}px 0px`;
            }
            const bob = this.config.bobAmplitude === 0 ? 0 : Math.sin(this.elapsed * this.config.bobFrequency * Math.PI * 2) * this.config.bobAmplitude;
            const tilt = this.config.tiltAmplitude === 0 ? 0 : Math.sin(this.elapsed * this.config.bobFrequency * Math.PI * 2) * this.config.tiltAmplitude;
            const jumpDuration = this.config.states.jump.frameCount / this.config.states.jump.fps;
            const jumpProgress = this.isJumping ? Math.min(this.stateElapsed / jumpDuration, 1) : 0;
            const jumpArc = Math.pow(Math.sin(jumpProgress * Math.PI), this.config.jumpHangPower);
            const jumpLift = this.isJumping ? -jumpArc * this.config.jumpHeight : 0;
            this.spriteElement.style.transform = `translate3d(0, ${bob + jumpLift}px, 0) rotate(${tilt}deg)`;
        }

        getBounds() {
            return {
                left: parseFloat(this.spriteElement.style.left),
                top: parseFloat(this.spriteElement.style.top),
                width: parseFloat(this.spriteElement.style.width),
                height: parseFloat(this.spriteElement.style.height),
                anchorX: 1920 * this.config.anchorX,
                anchorY: 1080 * this.config.groundY
            };
        }
    }

    class DebugPanel {
        constructor(panel, config, callbacks) {
            this.panel = panel;
            this.config = config;
            this.callbacks = callbacks;
            this.render();
        }

        render() {
            this.panel.innerHTML = "";
            const title = document.createElement("h2");
            title.textContent = "Visual Tuning";
            this.panel.append(title);
            const warnings = document.createElement("div");
            warnings.dataset.role = "warnings";
            this.panel.append(warnings);
            const global = this.section("Global");
            this.number(global, "Current speed", this.config.speed, "current", 0, 1200, 10);
            this.number(global, "Target speed", this.config.speed, "target", 0, 1200, 10);
            this.number(global, "Environment scale", this.config.environment, "baseScale", 0.5, 1.5, 0.01);
            this.number(global, "Shared environment Y", this.config.environment, "sharedY", -500, 200, 1);
            this.number(global, "Ground line", this.config.environment, "groundLineY", 600, 1040, 1);
            this.number(global, "Character scale", this.config.character, "scale", 0.2, 1.2, 0.01);
            this.number(global, "Character X", this.config.character, "anchorX", 0.05, 0.75, 0.01);
            this.number(global, "Character Y offset", this.config.character, "visualYOffset", -400, 400, 1);
            this.number(global, "Ride animation FPS", this.config.character.states.ride, "fps", 1, 24, 1);
            const overlays = this.section("Overlays");
            Object.keys(this.config.overlays).forEach((key) => this.checkbox(overlays, labelFromKey(key), this.config.overlays, key));
            this.config.layers.forEach((layerConfig) => {
                const section = this.section(layerConfig.label);
                this.checkbox(section, "Enabled", layerConfig, "enabled");
                this.number(section, "Speed multiplier", layerConfig, "speedMultiplier", 0, 2, 0.01);
                this.number(section, "X offset", layerConfig, "xOffset", -600, 600, 1);
                this.number(section, "Y offset", layerConfig, "yOffset", -600, 600, 1);
                this.number(section, "Scale", layerConfig, "scale", 0.5, 1.5, 0.01);
                this.number(section, "Opacity", layerConfig, "opacity", 0, 1, 0.01);
                this.readout(section, "Z-index", layerConfig.zIndex);
                this.readout(section, "Loaded", "pending", `${layerConfig.id}-loaded`);
                this.readout(section, "Rendered width", layerConfig.renderWidth, `${layerConfig.id}-width`);
                this.readout(section, "Rendered height", layerConfig.renderHeight, `${layerConfig.id}-height`);
                this.readout(section, "Scroll offset", 0, `${layerConfig.id}-offset`);
            });
            const reset = document.createElement("button");
            reset.type = "button";
            reset.textContent = "Reset Visual Tuning";
            reset.addEventListener("click", this.callbacks.reset);
            this.panel.append(reset);
        }

        section(label) {
            const section = document.createElement("section");
            const heading = document.createElement("h3");
            const grid = document.createElement("div");
            heading.textContent = label;
            grid.className = "debug-grid";
            section.append(heading, grid);
            this.panel.append(section);
            return grid;
        }

        number(parent, labelText, target, key, min, max, step) {
            const row = this.row(labelText);
            const input = document.createElement("input");
            input.type = "number";
            input.min = String(min);
            input.max = String(max);
            input.step = String(step);
            input.value = String(target[key]);
            input.addEventListener("input", () => {
                target[key] = Number(input.value);
                this.callbacks.applyConfig();
            });
            row.append(input);
            parent.append(row);
        }

        checkbox(parent, labelText, target, key) {
            const row = this.row(labelText);
            const input = document.createElement("input");
            input.type = "checkbox";
            input.checked = Boolean(target[key]);
            input.addEventListener("change", () => {
                target[key] = input.checked;
                this.callbacks.applyConfig();
            });
            row.append(input);
            parent.append(row);
        }

        readout(parent, labelText, value, id) {
            const row = document.createElement("div");
            const name = document.createElement("span");
            const output = document.createElement("output");
            row.className = "debug-readout";
            name.textContent = labelText;
            output.textContent = String(value);
            if (id) {
                output.dataset.readout = id;
            }
            row.append(name, output);
            parent.append(row);
        }

        row(labelText) {
            const row = document.createElement("label");
            const text = document.createElement("span");
            row.className = "control-row";
            text.textContent = labelText;
            row.append(text);
            return row;
        }

        updateLayerStatus(statuses) {
            statuses.forEach((status) => {
                this.setReadout(`${status.id}-loaded`, status.loaded ? "loaded" : "missing");
                this.setReadout(`${status.id}-width`, status.width);
                this.setReadout(`${status.id}-height`, status.height);
                this.setReadout(`${status.id}-offset`, status.offset);
            });
        }

        setWarnings(warnings) {
            const root = this.panel.querySelector('[data-role="warnings"]');
            root.innerHTML = "";
            warnings.forEach((warning) => {
                const item = document.createElement("div");
                item.className = "debug-warning";
                item.textContent = warning;
                root.append(item);
            });
        }

        setReadout(id, value) {
            const output = this.panel.querySelector(`[data-readout="${id}"]`);
            if (output) {
                output.textContent = String(value);
            }
        }
    }

    class RideWithHannahEngine {
        constructor(elements) {
            this.elements = elements;
            this.config = cloneConfig();
            this.layers = [];
            this.character = null;
            this.assets = new Map();
            this.warnings = [];
            this.audio = null;
            this.lastTime = 0;
            this.paused = false;
            this.rafId = 0;
            this.debugTimer = 0;
            this.tick = this.tick.bind(this);
            this.onResize = this.onResize.bind(this);
            this.onVisibilityChange = this.onVisibilityChange.bind(this);
            this.onKeyDown = this.onKeyDown.bind(this);
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
            this.layers = this.config.layers.filter((layerConfig) => layerConfig.enabled).map((layerConfig) => new ParallaxLayer(
                layerConfig,
                this.elements.environmentRoot,
                this.assets.get(layerConfig.src),
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
            this.config.layers.forEach((layerConfig) => {
                if (layerConfig.scroll) {
                    layerConfig.renderWidth = this.config.environment.sharedWidth;
                    layerConfig.renderHeight = this.config.environment.sharedHeight;
                    layerConfig.y = this.config.environment.sharedY;
                }
            });
        }

        applyConfig() {
            this.applySharedEnvironmentDefaults();
            this.layers.forEach((layerConfig) => layerConfig.applyLayout());
            this.character.applyLayout();
            this.applyOverlays();
            this.debugPanel?.updateLayerStatus(this.layers.map((layerConfig) => layerConfig.getStatus()));
        }

        applyOverlays() {
            const overlays = this.config.overlays;
            this.elements.overlays.classList.toggle("is-visible", Object.values(overlays).some(Boolean));
            this.toggleOverlay(".viewport-boundary", overlays.viewportBoundary);
            this.toggleOverlay(".horizon-guide", overlays.horizonGuide, { top: `${this.config.environment.horizonY}px` });
            this.toggleOverlay(".ground-guide", overlays.groundContactLine, { top: `${this.config.environment.groundLineY}px` });
            const bounds = this.character.getBounds();
            this.toggleOverlay(".anchor-point", overlays.hannahAnchorPoint, { left: `${bounds.anchorX}px`, top: `${bounds.anchorY}px` });
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
            this.layers.forEach((layerConfig) => layerConfig.update(delta, this.config.speed.current));
            this.character.update(delta);
            this.applyOverlays();
            this.debugTimer += delta;
            if (this.debugTimer >= this.config.debug.updateInterval) {
                this.debugTimer = 0;
                this.debugPanel?.updateLayerStatus(this.layers.map((layerConfig) => layerConfig.getStatus()));
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
            const viewportScale = Math.min(frame.width / this.config.designWidth, frame.height / this.config.designHeight);
            this.elements.world.style.transform = `translate(-50%, -50%) scale(${viewportScale})`;
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
                .filter((layerConfig) => layerConfig.enabled && layerConfig.expectedSrc && layerConfig.expectedSrc !== layerConfig.src)
                .map((layerConfig) => `${layerConfig.id}: expected ${layerConfig.expectedSrc}, using supplied ${layerConfig.src}`);
        }
    }

    function labelFromKey(key) {
        return key.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`).replace(/^./, (match) => match.toUpperCase());
    }

    const DEFAULT_NOUN_GAME_CONFIG = {
        countableWords: [
            "BEANS", "SALAD", "CROISSANT", "MUSHROOM", "PANCAKE",
            "PEPPER", "BISCUIT", "COOKIE", "LEMON", "PIE",
            "NUT", "CORN", "LETTUCE"
        ],
        uncountableWords: [
            "SPICES", "MILK", "WATER", "JAM", "SUGAR",
            "BUTTER", "SALT", "FLOUR", "GARLIC", "MEAT",
            "OIL", "BAKING POWDER", "CINNAMON", "DOUGH"
        ]
    };

    function readNounGameConfig() {
        try {
            const stored = window.sessionStorage.getItem("funcPresenterMiniGameConfig");
            return stored ? JSON.parse(stored) : {};
        } catch (error) {
            console.warn("Mini-game config could not be read.", error);
            return {};
        }
    }

    function normalizeWordList(words, fallback) {
        const source = Array.isArray(words) && words.length ? words : fallback;
        return source
            .map((word) => String(word || "").trim().toUpperCase())
            .filter(Boolean);
    }

    function shuffled(items) {
        const copy = [...items];
        for (let index = copy.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
        }
        return copy;
    }

    function rectanglesOverlap(first, second) {
        return first.left < second.right
            && first.right > second.left
            && first.top < second.bottom
            && first.bottom > second.top;
    }

    function playRideTone(frequency, duration = 0.14, type = "triangle") {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) {
            return;
        }
        const context = window.__rideToneContext || new AudioContext();
        window.__rideToneContext = context;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.001, context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.13, context.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
        oscillator.connect(gain).connect(context.destination);
        oscillator.start();
        oscillator.stop(context.currentTime + duration + 0.02);
    }

    class CountableUncountableRideGame {
        constructor(engine) {
            this.engine = engine;
            this.frame = engine.elements.frame;
            this.config = readNounGameConfig();
            this.sources = {
                countable: normalizeWordList(this.config.countableWords, DEFAULT_NOUN_GAME_CONFIG.countableWords),
                uncountable: normalizeWordList(this.config.uncountableWords, DEFAULT_NOUN_GAME_CONFIG.uncountableWords)
            };
            this.wordPools = { countable: [], uncountable: [] };
            this.items = [];
            this.basketWords = [];
            this.rafId = null;
            this.running = false;
            this.lastTime = 0;
            this.elapsed = 0;
            this.spawnTimer = 0;
            this.duration = 60;
            this.spawnInterval = 2.15;
            this.speed = 400;
            this.lives = 3;
            this.bankHearts = 0;
            this.score = 0;
            this.targetType = "countable";
            this.buildUi();
        }

        buildUi() {
            this.ui = document.createElement("div");
            this.ui.className = "ride-game-ui";
            this.ui.innerHTML = `
                <div class="ride-game-topbar">
                    <div class="ride-game-instruction-wrap">
                        <div class="ride-game-instruction" data-instruction></div>
                        <div class="ride-game-basket">
                            <span>BASKET</span>
                            <div data-basket></div>
                        </div>
                    </div>
                    <div class="ride-game-status">
                        <div class="ride-game-chip"><span>TIME</span><strong data-time>60</strong></div>
                        <div class="ride-game-chip"><span>SCORE</span><strong data-score>0</strong></div>
                        <div class="ride-game-lives" data-lives></div>
                        <div class="ride-game-bank" data-bank></div>
                    </div>
                </div>
            `;
            this.frame.append(this.ui);
            this.nodes = {
                instruction: this.ui.querySelector("[data-instruction]"),
                time: this.ui.querySelector("[data-time]"),
                score: this.ui.querySelector("[data-score]"),
                lives: this.ui.querySelector("[data-lives]"),
                bank: this.ui.querySelector("[data-bank]"),
                basket: this.ui.querySelector("[data-basket]")
            };
        }

        start() {
            this.clearItems();
            this.removeEndOverlay();
            this.targetType = Math.random() < 0.5 ? "countable" : "uncountable";
            this.items = [];
            this.basketWords = [];
            this.wordPools = { countable: [], uncountable: [] };
            this.lastTime = 0;
            this.elapsed = 0;
            this.spawnTimer = 0.65;
            this.lives = 3;
            this.bankHearts = 0;
            this.score = 0;
            this.running = true;
            this.correctAudio = new Audio("./assets/sounds/correct.mp3");
            this.correctAudio.preload = "auto";
            this.nodes.instruction.textContent = `COLLECT ALL ${this.targetType.toUpperCase()} ITEMS`;
            this.renderStats();
            this.rafId = requestAnimationFrame((time) => this.tick(time));
        }

        tick(time) {
            if (!this.running) {
                return;
            }
            if (!this.lastTime) {
                this.lastTime = time;
            }
            const delta = Math.min((time - this.lastTime) / 1000, 0.05);
            this.lastTime = time;
            this.elapsed += delta;
            this.spawnTimer -= delta;
            if (this.spawnTimer <= 0) {
                this.spawnItem();
                this.spawnTimer = this.spawnInterval + Math.random() * 0.35;
            }
            this.updateItems(delta);
            this.nodes.time.textContent = String(Math.max(0, Math.ceil(this.duration - this.elapsed)));
            if (this.elapsed >= this.duration) {
                this.endGame("TIME IS UP!");
                return;
            }
            this.rafId = requestAnimationFrame((nextTime) => this.tick(nextTime));
        }

        nextWord(type) {
            if (!this.wordPools[type].length) {
                this.wordPools[type] = shuffled(this.sources[type]);
            }
            return this.wordPools[type].shift();
        }

        spawnItem() {
            const otherType = this.targetType === "countable" ? "uncountable" : "countable";
            const type = Math.random() < 0.58 ? this.targetType : otherType;
            const word = this.nextWord(type);
            const node = document.createElement("div");
            node.className = `ride-noun-box is-${type}`;
            node.textContent = word;
            this.frame.append(node);
            const y = this.getGroundItemY(node);
            const item = {
                node,
                type,
                word,
                x: this.frame.clientWidth + 90,
                y,
                hit: false
            };
            this.items.push(item);
            this.positionItem(item);
        }

        getGroundItemY(node) {
            const frameHeight = this.frame.clientHeight || 720;
            const itemHeight = node.offsetHeight || 52;
            const groundClearance = Math.max(48, Math.min(72, frameHeight * 0.075));
            return Math.round(frameHeight - groundClearance - itemHeight);
        }

        updateItems(delta) {
            const hannahRect = this.getHannahRect();
            this.items = this.items.filter((item) => {
                item.x -= this.speed * delta;
                this.positionItem(item);
                if (!item.hit && rectanglesOverlap(hannahRect, this.getItemRect(item))) {
                    item.type === this.targetType ? this.collectItem(item) : this.hitWrongItem(item);
                    return false;
                }
                if (item.x < -260) {
                    item.node.remove();
                    return false;
                }
                return true;
            });
        }

        positionItem(item) {
            item.node.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
        }

        getItemRect(item) {
            const rect = item.node.getBoundingClientRect();
            return {
                left: rect.left + rect.width * 0.12,
                right: rect.right - rect.width * 0.12,
                top: rect.top + rect.height * 0.14,
                bottom: rect.bottom - rect.height * 0.08
            };
        }

        getHannahRect() {
            const spriteRect = this.engine.elements.hannahSprite.getBoundingClientRect();
            const topFactor = this.engine.character?.isJumping ? 0.68 : 0.58;
            return {
                left: spriteRect.left + spriteRect.width * 0.34,
                right: spriteRect.right - spriteRect.width * 0.34,
                top: spriteRect.top + spriteRect.height * topFactor,
                bottom: spriteRect.bottom - spriteRect.height * 0.08
            };
        }

        collectItem(item) {
            item.hit = true;
            item.node.classList.add("is-collected");
            this.floatText("💛", item.node.getBoundingClientRect(), "ride-floating-heart");
            this.bankHearts += 1;
            this.basketWords.unshift(item.word);
            this.basketWords = this.basketWords.slice(0, 6);
            if (this.bankHearts >= 3) {
                this.bankHearts = 0;
                this.score += 1;
                this.floatText("+1 SCORE", this.nodes.score.getBoundingClientRect(), "ride-floating-point");
                this.playCorrectSound();
                try {
                    window.TeacherControl?.onCorrect?.();
                } catch (error) {
                    console.warn("Teacher score hook failed.", error);
                }
            }
            this.renderStats();
            playRideTone(760, 0.1, "triangle");
            window.setTimeout(() => item.node.remove(), 160);
        }

        playCorrectSound() {
            if (!this.correctAudio) {
                return;
            }
            try {
                this.correctAudio.currentTime = 0;
                this.correctAudio.play().catch(() => {});
            } catch (error) {
                console.warn("Correct sound failed.", error);
            }
        }

        hitWrongItem(item) {
            item.hit = true;
            item.node.remove();
            this.lives -= 1;
            this.bankHearts = Math.max(0, this.bankHearts - 1);
            this.frame.classList.remove("ride-shake");
            void this.frame.offsetWidth;
            this.frame.classList.add("ride-shake");
            this.floatText("💔", this.nodes.lives.getBoundingClientRect(), "ride-floating-broken");
            this.renderStats();
            playRideTone(125, 0.22, "sawtooth");
            if (this.lives <= 0) {
                this.endGame("GAME OVER");
            }
        }

        renderStats() {
            this.nodes.score.textContent = String(this.score);
            this.nodes.lives.textContent = "❤".repeat(Math.max(0, this.lives));
            this.nodes.bank.textContent = "💛".repeat(Math.max(0, this.bankHearts));
            this.nodes.basket.innerHTML = this.basketWords.map((word) => `<span>${word}</span>`).join("");
        }

        floatText(text, rect, className) {
            const frameRect = this.frame.getBoundingClientRect();
            const node = document.createElement("span");
            node.className = `ride-floating-text ${className}`;
            node.textContent = text;
            node.style.left = `${rect.left - frameRect.left + rect.width / 2}px`;
            node.style.top = `${rect.top - frameRect.top}px`;
            this.frame.append(node);
            node.addEventListener("animationend", () => node.remove(), { once: true });
        }

        endGame(title) {
            if (!this.running) {
                return;
            }
            this.running = false;
            cancelAnimationFrame(this.rafId);
            this.clearItems();
            const overlay = document.createElement("div");
            overlay.className = "ride-game-end";
            overlay.innerHTML = `
                <div class="ride-game-end-card">
                    <div class="ride-game-end-title">${title}</div>
                    <div class="ride-game-end-score">Score: ${this.score}</div>
                    <div class="ride-game-end-actions">
                        <button type="button" data-try>TRY AGAIN</button>
                        <button type="button" data-exit>EXIT</button>
                    </div>
                </div>
            `;
            overlay.querySelector("[data-try]").addEventListener("click", () => this.start());
            overlay.querySelector("[data-exit]").addEventListener("click", () => {
                window.location.href = "../../index.html";
            });
            this.endOverlay = overlay;
            this.frame.append(overlay);
        }

        clearItems() {
            this.items.forEach((item) => item.node.remove());
            this.items = [];
        }

        removeEndOverlay() {
            this.endOverlay?.remove();
            this.endOverlay = null;
        }
    }

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

    engine.start()
        .then(() => {
            const game = new CountableUncountableRideGame(engine);
            game.start();
        })
        .catch((error) => console.error("Ride with Hannah failed to start.", error));
})();
