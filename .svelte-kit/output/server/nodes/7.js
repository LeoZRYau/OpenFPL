

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/governance/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.35ff5f8a.js","_app/immutable/chunks/index.548c7fc3.js","_app/immutable/chunks/vendor.9ffe4ae8.js"];
export const stylesheets = ["_app/immutable/assets/index.28121524.css"];
export const fonts = [];
