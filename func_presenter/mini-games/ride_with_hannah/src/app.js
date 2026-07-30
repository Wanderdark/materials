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
            },
            gallop: {
                src: "./assets/sounds/gallop.mp3",
                volume: 0.38,
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
            layer("distant_sky_layer", "Sky", "./assets/backgrounds/distant_sky_layer.webp", "sky", 1774, 887, 1920, 1080, 0, 0, false),
            layer("distant_clouds_layer", "Clouds", "./assets/backgrounds/distant_clouds_seamless_layer.webp", "clouds", 1536, 1024, 1920, 1280, 0.04, 10, true),
            { ...layer("distant_mountain_layer", "Mountains", "./assets/backgrounds/distant_mountain_layer.webp", "mountains", 1536, 1024, 1920, 1280, 0.1, 20, true), enabled: false },
            { ...layer("composite_distant_landscape_layer", "Distant landscape composite", "./assets/backgrounds/composite_distant_landscape_seamless_layer.webp", "mountains", 1536, 1024, 1920, 1280, 0.16, 25, true), alternateFlip: false },
            { ...layer("far_forest_layer", "Far forest", "./assets/backgrounds/far_forest_layer.webp", "farForest", 1536, 1024, 1920, 1280, 0.18, 30, true), enabled: false },
            { ...layer("midground_trees_layer", "Midground trees", "./assets/backgrounds/midground_trees_layer.webp", "midgroundTrees", 1536, 1024, 1920, 1280, 0.38, 40, true), enabled: false },
            { ...layer("near_bushes_layer", "Near bushes", "./assets/backgrounds/near_bushes_and_grass_layer.webp", "nearBushes", 1536, 1024, 1920, 1280, 0.68, 50, true), expectedSrc: "./assets/backgrounds/near_bushes_layer.webp", enabled: false },
            { ...layer("roadside_details_layer", "Roadside details", "./assets/backgrounds/roadside_details_layer.webp", "roadsideDetails", 1536, 1024, 1920, 1280, 0.88, 60, true), enabled: false },
            { ...layer("composite_mid_roadside_layer", "Mid roadside composite", "./assets/backgrounds/composite_mid_roadside_seamless_layer.webp", "nearBushes", 1536, 1024, 1920, 1280, 0.72, 58, true), alternateFlip: false },
            { ...layer("ground_layer", "Ground", "./assets/backgrounds/cycling_path_layer.webp", "ground", 1536, 1024, 1920, 1280, 1, 70, true), expectedSrc: "./assets/backgrounds/ground_layer.webp", yOffset: 105 },
            { ...layer("foreground_vegetation_layer", "Foreground vegetation", "./assets/backgrounds/foreground_vegetation_dense_layer.webp", "foreground", 1536, 1024, 1920, 1280, 1.28, 100, true), yOffset: 110 }
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
                    src: "./assets/characters/hannah_horse_ride_1.webp",
                    frameSources: Array.from(
                        { length: 8 },
                        (_, index) => `./assets/characters/hannah_horse_ride_${index + 1}.webp`
                    ),
                    frameCount: 8,
                    columns: 8,
                    fps: 11,
                    loop: true,
                    sourceWidth: 294,
                    sourceHeight: 724,
                    frameWidth: 294,
                    frameHeight: 724,
                    runtimeSourceWidth: 294
                },
                jump: {
                    src: "./assets/characters/hannah_horse_jump_1.webp",
                    frameSources: Array.from(
                        { length: 4 },
                        (_, index) => `./assets/characters/hannah_horse_jump_${index + 1}.webp`
                    ),
                    frameCount: 4,
                    columns: 4,
                    fps: 4,
                    loop: false,
                    sourceWidth: 313,
                    sourceHeight: 724,
                    frameWidth: 313,
                    frameHeight: 724,
                    runtimeSourceWidth: 313,
                    scaleMultiplier: 0.9
                },
                duck: {
                    src: "./assets/characters/hannah_horse_duck_0.webp",
                    frameSources: Array.from(
                        { length: 6 },
                        (_, index) => `./assets/characters/hannah_horse_duck_${index}.webp`
                    ),
                    frameCount: 6,
                    columns: 6,
                    fps: 3.5,
                    loop: false,
                    sourceWidth: 684,
                    sourceHeight: 384,
                    runtimeSourceWidth: 684,
                    frameWidth: 342,
                    frameHeight: 384,
                    scaleMultiplier: 0.875,
                    wheelContactOffsetX: 160,
                    wheelContactOffsetY: 570,
                    visualYOffset: 220
                }
            }
        },
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

    function horsePlaceholderDataUrl(frameCount, frameWidth, height) {
        const width = frameCount * frameWidth;
        const frames = Array.from({ length: frameCount }, (_, index) => {
            const x = index * frameWidth;
            const stride = index % 2 === 0 ? 18 : -18;
            return `<g transform="translate(${x} 0)"><rect width="${frameWidth}" height="${height}" fill="none"/><ellipse cx="145" cy="570" rx="82" ry="48" fill="#7a4528"/><path d="M195 555 L218 448 L246 425" fill="none" stroke="#7a4528" stroke-width="30" stroke-linecap="round"/><circle cx="250" cy="415" r="27" fill="#7a4528"/><path d="M96 604 L${88 + stride} 670 M160 608 L${170 - stride} 670" stroke="#3a251d" stroke-width="15" stroke-linecap="round"/><circle cx="125" cy="470" r="28" fill="#ffd39a"/><path d="M105 484 L132 545" stroke="#397fc3" stroke-width="22" stroke-linecap="round"/><path d="M132 520 L185 550" stroke="#397fc3" stroke-width="16" stroke-linecap="round"/></g>`;
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
            this.isDucking = false;
            this.frameStrip = null;
            this.frameStripSource = "";
            this.frameWidth = this.state.frameWidth;
            this.frameHeight = this.state.frameHeight;
            this.spriteElement.style.zIndex = this.config.zIndex;
            this.shadowElement.style.zIndex = this.config.shadow.zIndex;
            this.applyStateImage();
            this.applyLayout();
        }

        applyStateImage() {
            if (this.state.frameSources) {
                this.ensureFrameStrip();
                return;
            }
            this.frameStrip?.remove();
            this.frameStrip = null;
            this.frameStripSource = "";
            this.spriteElement.style.overflow = "";
            const stateInfo = this.assetMap?.get(this.state.src) || this.assetInfo;
            const spriteSource = this.usePlaceholderAssets
                ? horsePlaceholderDataUrl(this.state.frameCount, this.state.frameWidth, this.state.frameHeight)
                : stateInfo?.runtimeSrc || this.state.src;
            this.spriteElement.style.backgroundImage = `url("${spriteSource}")`;
        }

        ensureFrameStrip() {
            const sources = this.state.frameSources;
            const sourceKey = sources.join("|");
            if (this.frameStripSource !== sourceKey) {
                this.frameStrip?.remove();
                const strip = document.createElement("div");
                strip.className = "hannah-frame-strip";
                strip.style.position = "absolute";
                strip.style.left = "0";
                strip.style.top = "0";
                strip.style.display = "flex";
                strip.style.willChange = "transform";
                sources.forEach((source) => {
                    const image = document.createElement("img");
                    image.src = source;
                    image.alt = "";
                    image.decoding = "async";
                    image.style.display = "block";
                    image.style.flex = "0 0 auto";
                    strip.append(image);
                });
                this.spriteElement.append(strip);
                this.frameStrip = strip;
                this.frameStripSource = sourceKey;
            }
            this.spriteElement.style.backgroundImage = "none";
            this.spriteElement.style.overflow = "hidden";
            this.updateFrameStrip();
        }

        updateFrameStrip() {
            if (!this.frameStrip) {
                return;
            }
            const stateScale = this.config.scale * (this.state.scaleMultiplier || 1);
            const offset = -(this.frame * this.frameWidth * stateScale);
            this.frameStrip.style.transform = `translate3d(${offset}px, 0, 0)`;
        }

        setState(name) {
            this.stateName = name;
            this.state = this.config.states[name];
            this.frame = 0;
            this.frameTimer = 0;
            this.stateElapsed = 0;
            this.isJumping = name === "jump";
            this.isDucking = name === "duck";
            this.applyStateImage();
            this.applyLayout();
        }

        jump() {
            if (!this.isJumping) {
                this.setState("jump");
            }
        }

        duck() {
            if (!this.isJumping && !this.isDucking && this.config.states.duck) {
                this.setState("duck");
            }
        }

        applyLayout() {
            const scale = this.config.scale * (this.state.scaleMultiplier || 1);
            const stateInfo = this.assetMap?.get(this.state.src) || this.assetInfo;
            this.frameWidth = stateInfo?.runtimeFrameWidth || this.state.frameWidth || (this.state.sourceWidth / this.state.columns);
            this.frameHeight = stateInfo?.runtimeHeight || this.state.frameHeight || this.state.sourceHeight;
            const width = this.frameWidth * scale;
            const height = this.frameHeight * scale;
            const anchorX = 1920 * this.config.anchorX;
            const groundY = 1080 * this.config.groundY;
            const wheelContactOffsetX = this.state.wheelContactOffsetX ?? this.config.wheelContactOffsetX;
            const wheelContactOffsetY = this.state.wheelContactOffsetY ?? this.config.wheelContactOffsetY;
            const visualYOffset = this.state.visualYOffset ?? this.config.visualYOffset;
            const left = anchorX - (wheelContactOffsetX * scale);
            const top = groundY - (wheelContactOffsetY * scale) + visualYOffset;
            this.spriteElement.style.width = `${width}px`;
            this.spriteElement.style.height = `${height}px`;
            this.spriteElement.style.left = `${left}px`;
            this.spriteElement.style.top = `${top}px`;
            const sheetWidth = stateInfo?.runtimeWidth || this.state.runtimeSourceWidth || this.state.sourceWidth;
            this.spriteElement.style.backgroundSize = `${sheetWidth * scale}px ${height}px`;
            this.spriteElement.style.backgroundPosition = "0px 0px";
            if (this.frameStrip) {
                this.frameStrip.style.width = `${this.frameWidth * this.state.frameCount * scale}px`;
                this.frameStrip.style.height = `${height}px`;
                this.frameStrip.querySelectorAll("img").forEach((image) => {
                    image.style.width = `${width}px`;
                    image.style.height = `${height}px`;
                });
                this.updateFrameStrip();
            }
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
                if (this.state.frameSources) {
                    this.updateFrameStrip();
                } else {
                    this.spriteElement.style.backgroundPosition = `${-(this.frame * this.frameWidth * this.config.scale)}px 0px`;
                }
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
            this.gallopAudio = null;
            this.gallopPausedForJump = false;
            this.touchStartY = null;
            this.speedMultiplier = 1;
            this.speedBoostTimer = 0;
            this.speedSlowTimer = 0;
            this.speedBoostActive = false;
            this.speedSlowActive = false;
            this.stormZoomActive = false;
            this.stormZoomTimer = 0;
            this.defaultCharacterAnchorX = this.config.character.anchorX;
            this.lastTime = 0;
            this.paused = false;
            this.rafId = 0;
            this.tick = this.tick.bind(this);
            this.onResize = this.onResize.bind(this);
            this.onVisibilityChange = this.onVisibilityChange.bind(this);
            this.onKeyDown = this.onKeyDown.bind(this);
            this.onTouchStart = this.onTouchStart.bind(this);
            this.onTouchEnd = this.onTouchEnd.bind(this);
            this.onFrameClick = this.onFrameClick.bind(this);
        }

        async start() {
            this.applySharedEnvironmentDefaults();
            const loader = new AssetLoader(this.config, this.elements.loader);
            const result = await loader.preload();
            this.assets = result.assets;
            this.warnings = result.warnings.concat(this.filenameMappingWarnings());
            this.buildScene();
            this.applyConfig();
            this.onResize();
            window.addEventListener("resize", this.onResize);
            document.addEventListener("visibilitychange", this.onVisibilityChange);
            window.addEventListener("keydown", this.onKeyDown);
            this.elements.frame.addEventListener("touchstart", this.onTouchStart, { passive: true });
            this.elements.frame.addEventListener("touchend", this.onTouchEnd, { passive: true });
            this.elements.frame.addEventListener("click", this.onFrameClick);
            this.elements.jumpControl?.addEventListener("click", () => this.triggerJump());
            this.elements.duckControl?.addEventListener("click", () => this.triggerDuck());
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
            const gameDelta = delta * this.speedMultiplier;
            this.layers.forEach((layerConfig) => layerConfig.update(gameDelta, this.config.speed.current));
            this.character.update(gameDelta);
            if (this.gallopPausedForJump && !this.character.isJumping) {
                this.gallopAudio?.play().catch(() => {});
                this.gallopPausedForJump = false;
            }
            this.applyOverlays();
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
            const stormZoom = this.stormZoomActive ? 1.04 : 1;
            this.elements.world.style.transform = `translate(-50%, -50%) scale(${viewportScale * stormZoom})`;
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
            const gallop = this.config.audio?.gallop;
            if (gallop?.src) {
                this.gallopAudio = document.createElement("audio");
                this.gallopAudio.src = gallop.src;
                this.gallopAudio.loop = gallop.loop !== false;
                this.gallopAudio.volume = gallop.volume;
                this.gallopAudio.preload = "auto";
                this.gallopAudio.hidden = true;
                document.body.append(this.gallopAudio);
            }
            window.__rideWithHannahAudio = this.audio;
            window.__rideWithHannahAudioReady = true;

            const tryPlay = () => {
                const tracks = [this.audio, this.gallopAudio].filter(Boolean);
                if (!tracks.some((track) => track.paused)) {
                    cleanup();
                    return;
                }
                Promise.all(tracks.map((track) => track.play())).then(cleanup).catch(() => {});
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
            if (event.code === "Space" || event.code === "ArrowUp") {
                event.preventDefault();
                this.triggerJump();
            } else if (event.code === "ArrowDown") {
                event.preventDefault();
                this.triggerDuck();
            }
        }

        onTouchStart(event) {
            if (event.touches.length === 1) {
                this.touchStartY = event.touches[0].clientY;
            }
        }

        onTouchEnd(event) {
            const touch = event.changedTouches[0];
            if (this.touchStartY !== null && touch) {
                const deltaY = this.touchStartY - touch.clientY;
                if (deltaY >= 48) {
                    this.triggerJump();
                } else if (deltaY <= -48) {
                    this.triggerDuck();
                }
            }
            this.touchStartY = null;
        }

        onFrameClick(event) {
            if (event.target.closest?.(".ride-balloon, button, .ride-choice, .ride-tutorial, .ride-game-ui, .ride-game-over")) {
                return;
            }
            const frame = this.elements.frame.getBoundingClientRect();
            const viewportScale = Math.min(frame.width / this.config.designWidth, frame.height / this.config.designHeight);
            const y = ((event.clientY - frame.top - (frame.height / 2)) / viewportScale) + (this.config.designHeight / 2);
            const bounds = this.character.getBounds();
            if (y < bounds.top + (bounds.height / 2)) {
                this.triggerJump();
            } else {
                this.triggerDuck();
            }
        }

        triggerJump() {
            this.audio?.play().catch(() => {});
            if (!this.character.isJumping && this.gallopAudio) {
                this.gallopAudio.pause();
                this.gallopPausedForJump = true;
            }
            this.character.jump();
        }

        triggerDuck() {
            this.character.duck();
        }

        activateSpeedBoost() {
            if (this.speedSlowActive) {
                this.speedSlowActive = false;
                window.clearTimeout(this.speedSlowTimer);
                this.speedSlowTimer = 0;
                this.updateSpeedEffects();
                return;
            }
            this.speedBoostActive = true;
            this.updateSpeedEffects();
            this.playStormBurst();
            window.clearTimeout(this.speedBoostTimer);
            this.speedBoostTimer = window.setTimeout(() => {
                this.speedBoostActive = false;
                this.updateSpeedEffects();
                this.speedBoostTimer = 0;
            }, 10000);
        }

        activateSlowdown() {
            if (this.speedBoostActive) {
                this.speedBoostActive = false;
                window.clearTimeout(this.speedBoostTimer);
                this.speedBoostTimer = 0;
                this.updateSpeedEffects();
                return;
            }
            this.speedSlowActive = true;
            this.updateSpeedEffects();
            window.clearTimeout(this.speedSlowTimer);
            this.speedSlowTimer = window.setTimeout(() => {
                this.speedSlowActive = false;
                this.updateSpeedEffects();
                this.speedSlowTimer = 0;
            }, 10000);
        }

        resetSpeedEffects() {
            window.clearTimeout(this.speedBoostTimer);
            window.clearTimeout(this.speedSlowTimer);
            window.clearTimeout(this.stormZoomTimer);
            this.speedBoostTimer = 0;
            this.speedSlowTimer = 0;
            this.stormZoomTimer = 0;
            this.speedBoostActive = false;
            this.speedSlowActive = false;
            this.stormZoomActive = false;
            this.elements.environmentRoot.classList.remove("is-motion-blurred");
            this.elements.speedBurst.classList.remove("is-active");
            this.updateSpeedEffects();
            this.onResize();
        }

        updateSpeedEffects() {
            this.speedMultiplier = (this.speedBoostActive ? 1.5 : 1) * (this.speedSlowActive ? 0.75 : 1);
            this.elements.environmentRoot.classList.toggle("is-motion-blurred", this.speedBoostActive);

            const targetAnchorX = this.speedBoostActive
                ? 0.5
                : this.speedSlowActive
                    ? 0.16
                    : this.defaultCharacterAnchorX;

            if (this.config.character.anchorX !== targetAnchorX) {
                this.config.character.anchorX = targetAnchorX;
                this.character?.applyLayout();
            }
        }

        playStormBurst() {
            const bounds = this.character.getBounds();
            const burst = this.elements.speedBurst;
            window.clearTimeout(this.stormZoomTimer);
            this.stormZoomActive = true;
            burst.style.left = `${bounds.left - 180}px`;
            burst.style.top = `${bounds.top + (bounds.height * 0.4)}px`;
            burst.classList.remove("is-active");
            void burst.offsetWidth;
            burst.classList.add("is-active");
            this.onResize();
            this.stormZoomTimer = window.setTimeout(() => {
                this.stormZoomActive = false;
                this.onResize();
                this.stormZoomTimer = 0;
            }, 250);
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

    const DEFAULT_WORD_SET = {
        id: "countable-uncountable",
        title: "Countable and Uncountable Nouns",
        groups: [
            { id: "countable", label: "COUNTABLE", words: ["BEANS", "SALAD", "CROISSANT", "MUSHROOM", "PANCAKE", "PEPPER", "BISCUIT", "COOKIE", "LEMON", "PIE", "NUT", "CORN", "LETTUCE"] },
            { id: "uncountable", label: "UNCOUNTABLE", words: ["SPICES", "MILK", "WATER", "JAM", "SUGAR", "BUTTER", "SALT", "FLOUR", "GARLIC", "MEAT", "OIL", "BAKING POWDER", "CINNAMON", "DOUGH"] }
        ]
    };

    function readLaunchConfig() {
        try {
            const stored = window.sessionStorage.getItem("funcPresenterMiniGameConfig");
            const config = stored ? JSON.parse(stored) : {};
            const query = new URLSearchParams(window.location.search);
            return query.get("launcher") === "student-zone" || !query.has("return") ? {} : config;
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

    function normalizeWordSet(wordSet) {
        const source = wordSet?.groups?.length >= 2 ? wordSet : DEFAULT_WORD_SET;
        const groups = source.groups.slice(0, 2).map((group, index) => ({
            id: String(group?.id || `group-${index + 1}`).trim().toLowerCase().replace(/[^a-z0-9-]/g, "-") || `group-${index + 1}`,
            label: String(group?.label || group?.id || `GROUP ${index + 1}`).trim().toUpperCase(),
            words: normalizeWordList(group?.words, [])
        }));
        return groups.every((group) => group.words.length)
            ? { id: source.id || "word-set", title: source.title || "Ride with Hannah", groups }
            : DEFAULT_WORD_SET;
    }

    function buildGradeWordSet(wordSet, grade) {
        const gradeGroups = wordSet?.gradeGroups;
        if (!gradeGroups) {
            return wordSet;
        }
        const grades = [5, 6, 7, 8].filter((entry) => entry <= grade);
        const groupDefinitions = wordSet.groupDefinitions?.length >= 2
            ? wordSet.groupDefinitions.slice(0, 2)
            : [
                { id: "singular", label: "SINGULAR" },
                { id: "plural", label: "PLURAL" }
            ];
        return {
            id: wordSet.id,
            title: `${wordSet.title} — Grade ${grade}`,
            groups: groupDefinitions.map((group) => ({
                id: group.id,
                label: group.label,
                words: grades.flatMap((entry) => gradeGroups[entry]?.[group.id] || [])
            }))
        };
    }

    function loadWordSet(source, id) {
        if (!source || !id) {
            return Promise.resolve(null);
        }
        window.RideWithHannahWordSets = window.RideWithHannahWordSets || {};
        if (window.RideWithHannahWordSets[id]) {
            return Promise.resolve(window.RideWithHannahWordSets[id]);
        }
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = source;
            script.onload = () => resolve(window.RideWithHannahWordSets[id] || null);
            script.onerror = () => reject(new Error(`Word set could not be loaded: ${source}`));
            document.head.append(script);
        });
    }

    function getReturnUrl() {
        const requested = new URLSearchParams(window.location.search).get("return");
        return requested || "../../index.html";
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

    class RideWordGame {
        constructor(engine, wordSet, launchConfig) {
            this.engine = engine;
            this.frame = engine.elements.frame;
            this.config = launchConfig || {};
            this.wordSet = normalizeWordSet(wordSet);
            this.groups = this.wordSet.groups;
            this.sources = Object.fromEntries(this.groups.map((group) => [group.id, group.words]));
            this.wordPools = Object.fromEntries(this.groups.map((group) => [group.id, []]));
            this.items = [];
            this.rafId = null;
            this.running = false;
            this.lastTime = 0;
            this.elapsed = 0;
            this.spawnTimer = 0;
            this.duration = Number(this.config.durationSeconds) || 90;
            this.spawnInterval = 2.15;
            this.speed = 400;
            this.arrow = null;
            this.balloons = [];
            this.balloonSpawnTimer = 4;
            this.arrowTimer = 15;
            this.arrowInterval = 15;
            this.arrowSpawnLeadTime = 1;
            this.arrowResumeSpawnDelay = 0.8;
            this.arrowSpeed = 322;
            this.arrowScale = 0.4;
            this.arrowYRatio = 0.68;
            this.lives = 3;
            this.bankHearts = 0;
            this.score = 0;
            this.targetGroup = this.groups[0];
            this.buildUi();
        }

        buildUi() {
            this.ui = document.createElement("div");
            this.ui.className = "ride-game-ui";
            this.ui.innerHTML = `
                <div class="ride-game-topbar">
                    <div class="ride-game-instruction-wrap">
                        <div class="ride-game-instruction" data-instruction></div>
                    </div>
                    <div class="ride-game-status">
                        <div class="ride-game-chip"><span>TIME</span><strong data-time>90</strong></div>
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
                bank: this.ui.querySelector("[data-bank]")
            };
        }

        start() {
            this.engine.resetSpeedEffects();
            this.clearItems();
            this.clearArrow();
            this.clearBalloons();
            this.removeEndOverlay();
            this.targetGroup = this.groups[Math.floor(Math.random() * this.groups.length)];
            this.items = [];
            this.wordPools = Object.fromEntries(this.groups.map((group) => [group.id, []]));
            this.lastTime = 0;
            this.elapsed = 0;
            this.spawnTimer = 0.65;
            this.arrowTimer = this.arrowInterval;
            this.balloonSpawnTimer = 4 + Math.random() * 3;
            this.lives = 3;
            this.bankHearts = 0;
            this.score = 0;
            this.running = true;
            this.correctAudio = new Audio("./assets/sounds/correct.mp3");
            this.correctAudio.preload = "auto";
            this.neighAudios = ["./assets/sounds/neigh1.mp3", "./assets/sounds/neigh2.mp3"].map((src) => {
                const audio = new Audio(src);
                audio.preload = "auto";
                return audio;
            });
            this.neighIndex = 0;
            this.nodes.instruction.textContent = `COLLECT ALL ${this.targetGroup.label} WORDS`;
            this.renderStats();
            this.rafId = requestAnimationFrame((time) => this.tick(time));
        }

        showTutorial() {
            const overlay = document.createElement("div");
            overlay.className = "ride-tutorial";
            overlay.innerHTML = `
                <div class="ride-tutorial-card">
                    <h2>RIDE WITH HANNAH</h2>
                    <p><strong>JUMP:</strong> Space, ↑ or swipe up.</p>
                    <p><strong>DUCK:</strong> ↓ or swipe down to avoid arrows.</p>
                    <button type="button" data-start-ride>START RIDE</button>
                </div>
            `;
            overlay.querySelector("[data-start-ride]").addEventListener("click", () => {
                overlay.remove();
                this.start();
            });
            this.frame.append(overlay);
        }

        tick(time) {
            if (!this.running) {
                return;
            }
            if (!this.lastTime) {
                this.lastTime = time;
            }
            const delta = Math.min((time - this.lastTime) / 1000, 0.05) * this.engine.speedMultiplier;
            this.lastTime = time;
            this.elapsed += delta;
            this.arrowTimer -= delta;
            if (this.arrowTimer <= 0) {
                this.spawnArrow();
                this.arrowTimer = this.arrowInterval;
            }
            if ((!this.arrow || this.arrow.spawnReleased) && this.arrowTimer > this.arrowSpawnLeadTime) {
                this.spawnTimer -= delta;
                if (this.spawnTimer <= 0) {
                    this.spawnItem();
                    this.spawnTimer = this.spawnInterval + Math.random() * 0.35;
                }
            }
            this.updateItems(delta);
            this.updateBalloons(delta);
            this.updateArrow(delta);
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
            const otherGroup = this.groups.find((group) => group.id !== this.targetGroup.id) || this.groups[0];
            const type = Math.random() < 0.58 ? this.targetGroup.id : otherGroup.id;
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

        spawnBalloon() {
            const colors = ["red", "blue", "green"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const node = document.createElement("img");
            node.className = `ride-balloon is-${color}`;
            node.src = `./assets/decals/${color}_baloon.webp`;
            node.alt = color === "red" ? "Speed balloon" : "";
            node.draggable = false;
            this.frame.append(node);
            const balloon = {
                node,
                color,
                x: this.frame.clientWidth + 130,
                y: this.frame.clientHeight * (0.2 + Math.random() * 0.42),
                speed: 75 + Math.random() * 45,
                drift: 24 + Math.random() * 28,
                phase: Math.random() * Math.PI * 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() < 0.5 ? -1 : 1) * (8 + Math.random() * 10)
            };
            node.addEventListener("click", () => {
                this.popBalloon(balloon);
                if (balloon.color === "red") {
                    this.engine.activateSpeedBoost();
                } else if (balloon.color === "blue") {
                    this.engine.activateSlowdown();
                } else if (balloon.color === "green") {
                    this.score += 1;
                    this.floatText("+1 SCORE", this.nodes.score.getBoundingClientRect(), "ride-floating-point");
                    this.playCorrectSound();
                    this.renderStats();
                }
            });
            this.balloons.push(balloon);
            this.positionBalloon(balloon);
        }

        updateBalloons(delta) {
            this.balloonSpawnTimer -= delta;
            if (!this.balloons.length && this.balloonSpawnTimer <= 0) {
                this.spawnBalloon();
                this.balloonSpawnTimer = 5 + Math.random() * 5;
            }
            this.balloons = this.balloons.filter((balloon) => {
                if (balloon.isDespawning) {
                    balloon.y -= 780 * delta;
                    balloon.despawnRemaining -= delta;
                    this.positionBalloon(balloon);
                    if (balloon.despawnRemaining <= 0) {
                        balloon.node.remove();
                        return false;
                    }
                    return true;
                }
                balloon.x -= balloon.speed * delta;
                balloon.phase += delta * 1.7;
                balloon.rotation += balloon.rotationSpeed * delta;
                this.positionBalloon(balloon);
                if (balloon.x < -180) {
                    balloon.isDespawning = true;
                    balloon.despawnRemaining = 0.36;
                    balloon.node.classList.add("is-despawning");
                }
                return true;
            });
        }

        popBalloon(balloon) {
            if (balloon.isPopped) {
                return;
            }
            balloon.isPopped = true;
            balloon.node.classList.add("is-popped");
            const popAudio = new Audio("./assets/sounds/baloon_pup.mp3");
            popAudio.volume = 0.65;
            popAudio.play().catch(() => {});
            window.setTimeout(() => balloon.node.remove(), 260);
            this.balloons = this.balloons.filter((item) => item !== balloon);
        }

        positionBalloon(balloon) {
            const y = balloon.y + Math.sin(balloon.phase) * balloon.drift;
            balloon.node.style.transform = `translate3d(${balloon.x}px, ${y}px, 0) rotate(${balloon.rotation}deg)`;
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
                    item.type === this.targetGroup.id ? this.collectItem(item) : this.hitWrongItem(item);
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

        spawnArrow() {
            this.clearArrow();
            const node = document.createElement("img");
            node.className = "ride-arrow";
            node.src = "./assets/decals/arrow.webp";
            node.alt = "";
            node.style.position = "absolute";
            node.style.zIndex = "145";
            node.style.width = `${154 * this.arrowScale}px`;
            node.style.height = "auto";
            node.style.pointerEvents = "none";
            node.style.willChange = "transform";
            this.frame.append(node);
            this.arrow = {
                node,
                x: this.frame.clientWidth + 120,
                y: this.frame.clientHeight * this.arrowYRatio,
                spawnReleased: false,
                hit: false
            };
            this.positionArrow();
        }

        updateArrow(delta) {
            if (!this.arrow) {
                return;
            }
            this.arrow.x -= this.arrowSpeed * delta;
            this.positionArrow();
            if (!this.arrow.spawnReleased && this.arrow.x <= 80) {
                this.arrow.spawnReleased = true;
                this.spawnTimer = this.arrowResumeSpawnDelay;
            }
            if (!this.arrow.hit && !this.engine.character?.isDucking && this.arrowHitsHannah()) {
                this.hitArrow();
                return;
            }
            if (this.arrow.x < -this.arrow.node.offsetWidth) {
                const releasedSpawn = this.arrow.spawnReleased;
                this.clearArrow();
                if (!releasedSpawn) {
                    this.spawnTimer = this.arrowResumeSpawnDelay;
                }
            }
        }

        positionArrow() {
            if (!this.arrow) {
                return;
            }
            this.arrow.node.style.left = `${this.arrow.x}px`;
            this.arrow.node.style.top = `${this.arrow.y}px`;
        }

        getArrowRect() {
            const rect = this.arrow.node.getBoundingClientRect();
            return {
                left: rect.left,
                right: rect.left + rect.width * 0.26,
                top: rect.top + rect.height * 0.2,
                bottom: rect.bottom - rect.height * 0.2
            };
        }

        arrowHitsHannah() {
            const spriteRect = this.engine.elements.hannahSprite.getBoundingClientRect();
            const arrowRect = this.getArrowRect();
            const headLeft = spriteRect.left + spriteRect.width * 0.42;
            const headRight = spriteRect.right - spriteRect.width * 0.31;
            return arrowRect.right > headLeft && arrowRect.left < headRight;
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

        getHannahHeadRect() {
            const spriteRect = this.engine.elements.hannahSprite.getBoundingClientRect();
            return {
                left: spriteRect.left + spriteRect.width * 0.42,
                right: spriteRect.right - spriteRect.width * 0.31,
                top: spriteRect.top + spriteRect.height * 0.27,
                bottom: spriteRect.top + spriteRect.height * 0.48
            };
        }

        collectItem(item) {
            item.hit = true;
            item.node.classList.add("is-collected");
            this.floatText("💛", item.node.getBoundingClientRect(), "ride-floating-heart");
            this.bankHearts += 1;
            try {
                window.StudentGame?.onCorrect?.();
            } catch (error) {
                console.warn("Student score hook failed.", error);
            }
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
            try {
                window.StudentGame?.onWrong?.();
            } catch (error) {
                console.warn("Student score hook failed.", error);
            }
            this.frame.classList.remove("ride-shake");
            void this.frame.offsetWidth;
            this.frame.classList.add("ride-shake");
            this.floatText("💔", this.nodes.lives.getBoundingClientRect(), "ride-floating-broken");
            this.renderStats();
            this.playNeighSound();
            playRideTone(125, 0.22, "sawtooth");
            if (this.lives <= 0) {
                this.endGame("GAME OVER");
            }
        }

        playNeighSound() {
            const audio = this.neighAudios[this.neighIndex];
            this.neighIndex = (this.neighIndex + 1) % this.neighAudios.length;
            audio.currentTime = 0;
            audio.play().catch(() => {});
        }

        hitArrow() {
            this.arrow.hit = true;
            this.clearArrow();
            this.spawnTimer = this.arrowResumeSpawnDelay;
            this.lives -= 1;
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
            this.clearArrow();
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
                window.location.href = getReturnUrl();
            });
            this.endOverlay = overlay;
            this.frame.append(overlay);
        }

        clearItems() {
            this.items.forEach((item) => item.node.remove());
            this.items = [];
        }

        clearArrow() {
            this.arrow?.node.remove();
            this.arrow = null;
        }

        clearBalloons() {
            this.balloons.forEach((balloon) => balloon.node.remove());
            this.balloons = [];
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
        speedBurst: document.getElementById("speedBurst"),
        hannahSprite: document.getElementById("hannahSprite"),
        hannahShadow: document.getElementById("hannahShadow"),
        overlays: document.getElementById("debugOverlays"),
        loader: document.getElementById("assetLoader"),
        jumpControl: document.getElementById("jumpControl"),
        duckControl: document.getElementById("duckControl")
    });

    const rideChoice = document.getElementById("rideChoice");
    const launchConfig = readLaunchConfig();
    let selectedWordSet = null;

    function setChoiceContent(kicker, title, actions) {
        rideChoice.querySelector(".ride-choice-kicker").textContent = kicker;
        rideChoice.querySelector("h1").textContent = title;
        rideChoice.querySelector(".ride-choice-actions").innerHTML = actions;
        rideChoice.hidden = false;
    }

    function getWordSetOptions() {
        return Array.isArray(window.RideWithHannahWordSetRegistry)
            ? window.RideWithHannahWordSetRegistry
            : [];
    }

    function isCurrentWordSetRegistry(options) {
        return window.RideWithHannahWordSetRegistryVersion >= 3 && options.length >= 3;
    }

    function reloadWordSetRegistry() {
        const registryScript = document.querySelector('script[src*="word-set-registry.js"]');
        const source = new URL(registryScript?.src || "./src/word-set-registry.js", window.location.href);
        source.searchParams.set("retry", Date.now().toString());
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = source.href;
            script.onload = () => isCurrentWordSetRegistry(getWordSetOptions()) ? resolve() : reject(new Error("Word set registry is outdated."));
            script.onerror = () => reject(new Error("Word set registry could not be loaded."));
            document.head.append(script);
        });
    }

    async function showWordSetChoice() {
        let options = getWordSetOptions();
        if (!isCurrentWordSetRegistry(options)) {
            setChoiceContent("RIDE WITH HANNAH", "Loading missions…", "");
            try {
                await reloadWordSetRegistry();
                options = getWordSetOptions();
            } catch (error) {
                console.warn("Ride with Hannah word set registry retry failed.", error);
            }
        }
        if (!isCurrentWordSetRegistry(options)) {
            setChoiceContent(
                "RIDE WITH HANNAH",
                "Missions couldn't load",
                '<button type="button" data-retry-missions>RETRY</button>'
            );
            rideChoice.querySelector("[data-retry-missions]").addEventListener("click", () => showWordSetChoice());
            return;
        }
        setChoiceContent(
            "RIDE WITH HANNAH",
            "Choose your grammar mission",
            options.map((option) => `<button type="button" data-word-set-id="${option.id}">${option.label}</button>`).join("")
        );
        rideChoice.querySelectorAll("[data-word-set-id]").forEach((button) => {
            button.addEventListener("click", async () => {
                const option = options.find((entry) => entry.id === button.dataset.wordSetId);
                const buttons = rideChoice.querySelectorAll("button");
                buttons.forEach((choice) => { choice.disabled = true; });
                try {
                    const wordSet = await loadWordSet(option?.source, option?.id);
                    if (wordSet?.gradeGroups) {
                        showGradeChoice(wordSet);
                    } else {
                        selectedWordSet = normalizeWordSet(wordSet);
                        await startRide();
                    }
                } catch (error) {
                    buttons.forEach((choice) => { choice.disabled = false; });
                    console.error("Ride with Hannah word set failed to load.", error);
                }
            });
        });
    }

    function showGradeChoice(wordSet) {
        setChoiceContent(
            wordSet.title.toUpperCase(),
            "Choose your grade",
            [5, 6, 7, 8].map((grade) => `<button type="button" data-grade="${grade}">GRADE ${grade}</button>`).join("")
        );
        rideChoice.querySelectorAll("[data-grade]").forEach((button) => {
            button.addEventListener("click", async () => {
                const buttons = rideChoice.querySelectorAll("button");
                buttons.forEach((choice) => { choice.disabled = true; });
                selectedWordSet = normalizeWordSet(buildGradeWordSet(wordSet, Number(button.dataset.grade)));
                await startRide();
            });
        });
    }

    async function startRide() {
        try {
            rideChoice.hidden = true;
            await window.__rideWithHannahStudentHudReady;
            await engine.start();
            const game = new RideWordGame(engine, selectedWordSet, launchConfig);
            game.showTutorial();
        } catch (error) {
            rideChoice.hidden = false;
            console.error("Ride with Hannah failed to start.", error);
        }
    }

    (async () => {
        if (launchConfig.wordSet?.source && launchConfig.wordSet?.id) {
            try {
                selectedWordSet = normalizeWordSet(await loadWordSet(launchConfig.wordSet.source, launchConfig.wordSet.id));
                await startRide();
                return;
            } catch (error) {
                console.error("Ride with Hannah word set failed to load.", error);
            }
        }
        await showWordSetChoice();
    })();
})();
