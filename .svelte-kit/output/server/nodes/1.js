

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ee071a4f.js","_app/immutable/chunks/index.890f1dc0.js","_app/immutable/chunks/vendor.7d16b6fe.js"];
export const stylesheets = ["_app/immutable/assets/index.70305e57.css"];
export const fonts = [];
