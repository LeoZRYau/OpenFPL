

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pick-team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.12987927.js","_app/immutable/chunks/index.33f58753.js","_app/immutable/chunks/vendor.900e220e.js"];
export const stylesheets = ["_app/immutable/assets/index.71e058bb.css"];
export const fonts = [];
