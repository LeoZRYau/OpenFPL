

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e637ea8c.js","_app/immutable/chunks/index.0bca18a4.js","_app/immutable/chunks/vendor.73d5715c.js"];
export const stylesheets = ["_app/immutable/assets/index.7ccd4a3f.css"];
export const fonts = [];
