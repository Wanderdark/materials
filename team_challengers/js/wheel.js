(() => {
  const TC = window.TeamChallengers;
  const palette = ["#7c3aed", "#06b6d4", "#f43f5e", "#f59e0b", "#22c55e", "#3b82f6", "#d946ef", "#14b8a6", "#fb7185", "#8b5cf6"];

  class PointsWheel {
    constructor(canvas, button, segments) {
      this.canvas = canvas;
      this.button = button;
      this.segments = [...segments];
      this.rotation = 0;
      this.spinning = false;
      this.draw();
      window.addEventListener("resize", () => this.draw());
    }

    draw() {
      const canvas = this.canvas;
      const viewportWidth = canvas.clientWidth;
      if (viewportWidth < 32) return;
      const size = Math.min(viewportWidth, 520);
      const ratio = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = size * ratio;
      canvas.height = size * ratio;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const center = size / 2;
      const radius = center - 8;
      const arc = (Math.PI * 2) / this.segments.length;
      ctx.clearRect(0, 0, size, size);
      this.segments.forEach((value, index) => {
        const start = -Math.PI / 2 + index * arc;
        const end = start + arc;
        ctx.beginPath(); ctx.moveTo(center, center); ctx.arc(center, center, radius, start, end); ctx.closePath();
        ctx.fillStyle = value === 100 ? "#facc15" : palette[index % palette.length]; ctx.fill();
        ctx.lineWidth = 3; ctx.strokeStyle = "rgba(255,255,255,.82)"; ctx.stroke();
        ctx.save(); ctx.translate(center, center); ctx.rotate(start + arc / 2); ctx.textAlign = "right"; ctx.textBaseline = "middle";
        ctx.fillStyle = value === 100 ? "#3b1700" : "#fff"; ctx.font = `800 ${Math.max(17, size * .043)}px 'Barlow Condensed', sans-serif`; ctx.shadowColor = "rgba(0,0,0,.45)"; ctx.shadowBlur = 4; ctx.fillText(String(value), radius - 22, 0); ctx.restore();
      });
      ctx.beginPath(); ctx.arc(center, center, radius, 0, Math.PI * 2); ctx.lineWidth = 8; ctx.strokeStyle = "#fff"; ctx.stroke();
    }

    bindSpin(onSpin, canSpin) {
      this.powerBar = document.querySelector("#spin-power-bar");
      this.powerFill = document.querySelector("#spin-power-fill");
      this.chargeFrame = null;
      this.chargePointer = null;
      const powerAt = (elapsed) => {
        const cycle = Math.max(0, elapsed - 200) % 4000;
        return cycle <= 2000 ? cycle / 2000 : (4000 - cycle) / 2000;
      };
      const update = () => {
        if (this.chargePointer === null) return;
        const elapsed = performance.now() - this.chargeStarted;
        if (elapsed >= 200) {
          const power = powerAt(elapsed);
          TC.updateSpinPowerSound(power);
          this.powerBar.hidden = false;
          this.powerFill.style.transform = `scaleX(${power})`;
          this.powerBar.setAttribute("aria-valuenow", String(Math.round(power * 100)));
          this.button.classList.add("is-charging");
        }
        this.chargeFrame = requestAnimationFrame(update);
      };
      this.button.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || this.spinning || this.button.disabled || this.chargePointer !== null || !canSpin()) return;
        event.preventDefault();
        this.chargePointer = event.pointerId;
        this.chargeStarted = performance.now();
        TC.prepareSpinPowerSound();
        this.button.setPointerCapture(event.pointerId);
        this.chargeFrame = requestAnimationFrame(update);
      });
      this.button.addEventListener("pointerup", (event) => {
        if (event.pointerId !== this.chargePointer) return;
        event.preventDefault();
        const elapsed = performance.now() - this.chargeStarted;
        const power = elapsed >= 200 ? powerAt(elapsed) : undefined;
        this.cancelCharge();
        if (canSpin() && !this.spinning && !this.button.disabled) onSpin(power);
      });
      ["pointercancel", "lostpointercapture"].forEach((type) => this.button.addEventListener(type, () => this.cancelCharge()));
      ["contextmenu", "selectstart", "dragstart"].forEach((type) => this.button.addEventListener(type, (event) => event.preventDefault()));
      this.button.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.detail === 0 && this.chargePointer === null && canSpin() && !this.spinning && !this.button.disabled) onSpin();
      });
      window.addEventListener("blur", () => this.cancelCharge());
      document.addEventListener("visibilitychange", () => { if (document.hidden) this.cancelCharge(); });
    }

    cancelCharge() {
      TC.stopSpinPowerSound();
      if (this.chargeFrame !== null) cancelAnimationFrame(this.chargeFrame);
      this.chargeFrame = null;
      const pointer = this.chargePointer;
      this.chargePointer = null;
      if (pointer !== null && pointer !== undefined && this.button.hasPointerCapture(pointer)) this.button.releasePointerCapture(pointer);
      if (this.powerBar) this.powerBar.hidden = true;
      if (this.powerFill) this.powerFill.style.transform = "scaleX(0)";
      this.button.classList.remove("is-charging");
    }

    spin(power) {
      if (this.spinning) return Promise.resolve(null);
      this.spinning = true;
      this.button.disabled = true;
      const selectedIndex = Math.floor(Math.random() * this.segments.length);
      const segmentDegrees = 360 / this.segments.length;
      const desired = (360 - (selectedIndex * segmentDegrees + segmentDegrees / 2)) % 360;
      const current = ((this.rotation % 360) + 360) % 360;
      const extra = (desired - current + 360) % 360;
      const turns = power === undefined ? 6 + Math.floor(Math.random() * 3) : 3 + Math.round(Math.max(0, Math.min(1, power)) * 9);
      this.rotation += turns * 360 + extra;
      this.canvas.style.transform = `rotate(${this.rotation}deg)`;
      return new Promise((resolve) => {
        let settled = false;
        const done = () => { if (settled) return; settled = true; clearTimeout(fallback); this.canvas.removeEventListener("transitionend", done); this.spinning = false; resolve(this.segments[selectedIndex]); };
        const fallback = setTimeout(done, 5200);
        this.canvas.addEventListener("transitionend", done, { once: true });
      });
    }

    reset() { this.cancelCharge(); this.button.disabled = false; this.draw(); }
  }

  TC.PointsWheel = PointsWheel;
})();
