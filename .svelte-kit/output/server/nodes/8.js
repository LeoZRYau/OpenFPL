

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/governance/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.z0unXcP7.js","_app/immutable/chunks/index.18tCYbqf.js","_app/immutable/chunks/vendor.F6kRLxTH.js"];
export const stylesheets = ["_app/immutable/assets/index.ZONkP7mR.css"];
export const fonts = [];
