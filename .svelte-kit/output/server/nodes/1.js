

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d052948e.js","_app/immutable/chunks/index.5a19c9f4.js","_app/immutable/chunks/vendor.1d438c01.js"];
export const stylesheets = ["_app/immutable/assets/index.28121524.css"];
export const fonts = [];
