

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/player/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.KYzaEWLl.js","_app/immutable/chunks/index.G7d1Sx9t.js","_app/immutable/chunks/vendor.Rf4l0dsQ.js"];
export const stylesheets = ["_app/immutable/assets/index.USi8Uar5.css"];
export const fonts = [];
