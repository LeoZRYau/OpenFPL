

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/club/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.d31bf715.js","_app/immutable/chunks/index.173bed50.js","_app/immutable/chunks/vendor.67f10be1.js"];
export const stylesheets = ["_app/immutable/assets/index.99ad048d.css"];
export const fonts = [];
