

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.85bc8840.js","_app/immutable/chunks/index.8d56e52c.js","_app/immutable/chunks/vendor.46433e6e.js"];
export const stylesheets = ["_app/immutable/assets/index.1eb97911.css"];
export const fonts = [];
