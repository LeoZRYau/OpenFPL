

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.395ed443.js","_app/immutable/chunks/index.5a19c9f4.js","_app/immutable/chunks/vendor.1d438c01.js"];
export const stylesheets = ["_app/immutable/assets/index.28121524.css"];
export const fonts = [];
