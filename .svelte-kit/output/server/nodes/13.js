

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.c27d9b27.js","_app/immutable/chunks/index.5cf108f4.js","_app/immutable/chunks/vendor.c5eb9305.js"];
export const stylesheets = ["_app/immutable/assets/index.90c185b1.css"];
export const fonts = [];
