# Interoperability

## Modules

### PF1 Alt Sheet

URLs: https://gitlab.com/zenvy/foundryvtt-pf1-alt-sheet, https://foundryvtt.com/packages/pf1-alt-sheet, https://www.foundryvtt-hub.com/package/pf1-alt-sheet/

[Custom CSS](https://foundryvtt.com/packages/custom-css) to avoid duplicate broken indicator:  
```css
.pf1alt.sheet itemhints .broken { display: none; }
```

### GM Notes

URLs: https://github.com/syl3r86/gm-notes, https://foundryvtt.com/packages/gm-notes, https://www.foundryvtt-hub.com/package/gm-notes/

Small note or clipboard icon is shown for the GM for items with _GM Notes_.

The hint can be customized with CSS to small degree, for example:
```css
.sheet itemhints .module.gm-notes.icon { color: green; text-shadow: 0 0 3px greenyellow; }
.sheet itemhints .module.gm-notes:not(.icon) { background-color: rgba(0, 255, 0, 0.05); }
```
