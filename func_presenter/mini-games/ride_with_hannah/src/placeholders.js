const placeholders = {
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

export function placeholderDataUrl(key) {
    const colors = placeholders[key] || placeholders.sky;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080"><defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop stop-color="${colors[0]}"/><stop offset="1" stop-color="${colors[1]}"/></linearGradient></defs><rect width="1920" height="1080" fill="url(#g)"/></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function riderPlaceholderDataUrl(frameCount, frameWidth, height) {
    const width = frameCount * frameWidth;
    const frames = Array.from({ length: frameCount }, (_, index) => {
        const x = index * frameWidth;
        const pedal = index % 2 === 0 ? 20 : -20;
        return `<g transform="translate(${x} 0)"><rect width="${frameWidth}" height="${height}" fill="none"/><circle cx="92" cy="632" r="44" fill="none" stroke="#df3d6d" stroke-width="10"/><circle cx="188" cy="632" r="44" fill="none" stroke="#df3d6d" stroke-width="10"/><path d="M92 632 L138 568 L188 632 L128 632 Z" fill="none" stroke="#3a8ad8" stroke-width="10" stroke-linejoin="round"/><path d="M138 568 L154 505 L176 468" fill="none" stroke="#f4a62a" stroke-width="16" stroke-linecap="round"/><circle cx="168" cy="430" r="36" fill="#ffd39a"/><path d="M142 448 C104 468 98 512 110 552" fill="none" stroke="#f6bf31" stroke-width="18" stroke-linecap="round"/><path d="M138 568 L${138 + pedal} 620" stroke="#24343d" stroke-width="9" stroke-linecap="round"/></g>`;
    }).join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${frames}</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
