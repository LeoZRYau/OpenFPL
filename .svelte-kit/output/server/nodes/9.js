

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/manager/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.e2784b2e.js","_app/immutable/chunks/index.4a9b45ea.js","_app/immutable/chunks/vendor.e7469dd9.js"];
export const stylesheets = ["_app/immutable/assets/index.5a3bf4ba.css"];
export const fonts = [];
