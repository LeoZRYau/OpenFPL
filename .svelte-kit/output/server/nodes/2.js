

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.69569ea5.js","_app/immutable/chunks/index.3dbeeca9.js","_app/immutable/chunks/vendor.e3148676.js"];
export const stylesheets = ["_app/immutable/assets/index.cd0af289.css"];
export const fonts = [];
