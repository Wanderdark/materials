export class DebugPanel {
    constructor(panel, config, callbacks) {
        this.panel = panel;
        this.config = config;
        this.callbacks = callbacks;
        this.layerStatus = new Map();
        this.warningList = [];
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
        this.number(global, "Current speed", this.config.speed, "current", 0, 1200, 10, () => this.callbacks.applyConfig());
        this.number(global, "Target speed", this.config.speed, "target", 0, 1200, 10, () => this.callbacks.applyConfig());
        this.number(global, "Environment scale", this.config.environment, "baseScale", 0.5, 1.5, 0.01, () => this.callbacks.applyConfig());
        this.number(global, "Shared environment Y", this.config.environment, "sharedY", -500, 200, 1, () => this.callbacks.applyConfig());
        this.number(global, "Ground line", this.config.environment, "groundLineY", 600, 1040, 1, () => this.callbacks.applyConfig());
        this.number(global, "Character scale", this.config.character, "scale", 0.2, 1.2, 0.01, () => this.callbacks.applyConfig());
        this.number(global, "Character X", this.config.character, "anchorX", 0.05, 0.75, 0.01, () => this.callbacks.applyConfig());
        this.number(global, "Character Y offset", this.config.character, "visualYOffset", -400, 400, 1, () => this.callbacks.applyConfig());
        this.number(global, "Ride animation FPS", this.config.character.states.ride, "fps", 1, 24, 1, () => this.callbacks.applyConfig());

        const overlays = this.section("Overlays");
        Object.keys(this.config.overlays).forEach((key) => {
            this.checkbox(overlays, labelFromKey(key), this.config.overlays, key, () => this.callbacks.applyConfig());
        });

        this.config.layers.forEach((layer) => {
            const section = this.section(layer.label);
            this.checkbox(section, "Enabled", layer, "enabled", () => this.callbacks.applyConfig());
            this.number(section, "Speed multiplier", layer, "speedMultiplier", 0, 2, 0.01, () => this.callbacks.applyConfig());
            this.number(section, "X offset", layer, "xOffset", -600, 600, 1, () => this.callbacks.applyConfig());
            this.number(section, "Y offset", layer, "yOffset", -600, 600, 1, () => this.callbacks.applyConfig());
            this.number(section, "Scale", layer, "scale", 0.5, 1.5, 0.01, () => this.callbacks.applyConfig());
            this.number(section, "Opacity", layer, "opacity", 0, 1, 0.01, () => this.callbacks.applyConfig());
            this.readout(section, "Z-index", layer.zIndex);
            this.readout(section, "Loaded", "pending", `${layer.id}-loaded`);
            this.readout(section, "Rendered width", layer.renderWidth, `${layer.id}-width`);
            this.readout(section, "Rendered height", layer.renderHeight, `${layer.id}-height`);
            this.readout(section, "Scroll offset", 0, `${layer.id}-offset`);
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

    number(parent, label, target, key, min, max, step, onChange) {
        const row = this.row(label);
        const input = document.createElement("input");
        input.type = "number";
        input.min = String(min);
        input.max = String(max);
        input.step = String(step);
        input.value = String(target[key]);
        input.addEventListener("input", () => {
            target[key] = Number(input.value);
            onChange();
        });
        row.append(input);
        parent.append(row);
    }

    checkbox(parent, label, target, key, onChange) {
        const row = this.row(label);
        const input = document.createElement("input");
        input.type = "checkbox";
        input.checked = Boolean(target[key]);
        input.addEventListener("change", () => {
            target[key] = input.checked;
            onChange();
        });
        row.append(input);
        parent.append(row);
    }

    readout(parent, label, value, id) {
        const row = document.createElement("div");
        const name = document.createElement("span");
        const output = document.createElement("output");
        row.className = "debug-readout";
        name.textContent = label;
        output.textContent = String(value);
        if (id) {
            output.dataset.readout = id;
        }
        row.append(name, output);
        parent.append(row);
    }

    row(label) {
        const row = document.createElement("label");
        const text = document.createElement("span");
        row.className = "control-row";
        text.textContent = label;
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
        this.warningList = warnings;
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

function labelFromKey(key) {
    return key.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`).replace(/^./, (match) => match.toUpperCase());
}
