

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-fixture-data/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7231619a.js","_app/immutable/chunks/index.709e150e.js","_app/immutable/chunks/vendor.915501b0.js"];
export const stylesheets = ["_app/immutable/assets/index.507befdb.css"];
export const fonts = [];
