import { placeholderDataUrl } from "./placeholders.js";

export class ParallaxLayer {
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
        const scale = this.config.scale;
        const width = this.config.renderWidth * scale;
        const height = this.config.renderHeight * scale;
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

        const distance = delta * speed * this.config.speedMultiplier;
        this.offset = (this.offset + distance) % this.segmentWidth;
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

    resetOffset() {
        this.offset = 0;
        this.track.style.transform = "translate3d(0, 0, 0)";
        this.updateOverlayPositions();
    }

    getStatus() {
        const loaded = !this.assetInfo || this.assetInfo.loaded;
        return {
            id: this.config.id,
            loaded,
            width: Math.round(this.segmentWidth),
            height: Math.round(this.config.renderHeight * this.config.scale),
            offset: Math.round(this.offset)
        };
    }
}
