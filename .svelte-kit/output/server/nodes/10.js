

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pick-team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.LEQE_eUT.js","_app/immutable/chunks/index.qtqbg87e.js","_app/immutable/chunks/vendor.nXjeGEC7.js"];
export const stylesheets = ["_app/immutable/assets/index.JxclgTL9.css"];
export const fonts = [];
