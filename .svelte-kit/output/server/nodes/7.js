

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gameplay-rules/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.dfb24109.js","_app/immutable/chunks/index.b17ea26b.js","_app/immutable/chunks/vendor.f74fbb8c.js"];
export const stylesheets = ["_app/immutable/assets/index.71e058bb.css"];
export const fonts = [];
