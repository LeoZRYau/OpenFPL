

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/club/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.bREM0yIf.js","_app/immutable/chunks/index.Ya9GbuY1.js","_app/immutable/chunks/vendor.HOizhr7_.js"];
export const stylesheets = ["_app/immutable/assets/index.JxclgTL9.css"];
export const fonts = [];
