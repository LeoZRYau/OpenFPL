

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4qDAIFLR.js","_app/immutable/chunks/index.huGMpKYj.js","_app/immutable/chunks/vendor.hB46pdEq.js"];
export const stylesheets = ["_app/immutable/assets/index.LowOqC7e.css"];
export const fonts = [];
