

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/whitepaper/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/14.pFC5yKCc.js","_app/immutable/chunks/index.Ky0yPQg5.js","_app/immutable/chunks/vendor.ZTqqCDw6.js"];
export const stylesheets = ["_app/immutable/assets/index.JxclgTL9.css"];
export const fonts = [];
