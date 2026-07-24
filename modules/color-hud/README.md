# Color HUD module

Reusable temporary color-preview overlay. Load `color-hud.css` and `color-hud.js`, then mount it with the editable areas for the current design.

```html
<link rel="stylesheet" href="modules/color-hud/color-hud.css">
<script src="modules/color-hud/color-hud.js"></script>
<script>
  AdilHocaColorHUD.mount({
    title: "Color HUD",
    areas: [
      { id: "headline", label: "Hero headline", property: "color", target: ".hero h1", group: "text" },
      { id: "surface", label: "Page surface", property: "background-color", target: ".page", group: "background" }
    ]
  });
</script>
```

Each area needs `id`, `label`, `property`, `target`, and `group` (`text` or `background`). Use `property: "variable"` when the target is a CSS custom property. Add `pickTarget` when the click selector should differ from the CSS target.
