

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/player/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.WBF-AhpH.js","_app/immutable/chunks/index.GZEcA0Aj.js","_app/immutable/chunks/vendor.6L55xBPo.js"];
export const stylesheets = ["_app/immutable/assets/index.LowOqC7e.css"];
export const fonts = [];
