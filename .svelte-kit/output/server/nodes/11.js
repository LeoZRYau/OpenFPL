

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/player/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.10e26e4e.js","_app/immutable/chunks/index.29f3fae6.js","_app/immutable/chunks/vendor.33c1901d.js"];
export const stylesheets = ["_app/immutable/assets/index.71e058bb.css"];
export const fonts = [];
