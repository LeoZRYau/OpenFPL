

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.fdcdd62a.js","_app/immutable/chunks/index.ed3f1f99.js","_app/immutable/chunks/vendor.9e1e3645.js"];
export const stylesheets = ["_app/immutable/assets/index.e87a5613.css"];
export const fonts = [];
