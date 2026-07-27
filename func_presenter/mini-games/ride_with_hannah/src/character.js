import { riderPlaceholderDataUrl } from "./placeholders.js";

export class HannahCharacter {
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

    getStatus() {
        return {
            frame: this.frame,
            frameWidth: this.frameWidth,
            frameHeight: this.frameHeight,
            loaded: !this.assetInfo || this.assetInfo.loaded
        };
    }
}
