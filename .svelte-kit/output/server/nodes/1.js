

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d5c80dec.js","_app/immutable/chunks/index.cd1dce0c.js","_app/immutable/chunks/vendor.1ae5dcba.js"];
export const stylesheets = ["_app/immutable/assets/index.28121524.css"];
export const fonts = [];
