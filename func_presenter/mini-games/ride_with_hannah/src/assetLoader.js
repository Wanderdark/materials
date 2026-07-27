export class AssetLoader {
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
        return {
            assets: this.assets,
            warnings: this.warnings
        };
    }

    collectUrls() {
        if (this.config.usePlaceholderAssets) {
            return [];
        }

        const urls = new Set();
        this.config.layers.forEach((layer) => {
            if (layer.enabled) {
                urls.add(layer.src);
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
                const alpha = (distance - tolerance) / feather;
                data[index + 3] = Math.round(data[index + 3] * alpha);
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
