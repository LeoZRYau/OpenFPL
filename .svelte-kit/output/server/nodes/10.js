

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/player/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.4dd519dc.js","_app/immutable/chunks/index.ecdb4ab3.js","_app/immutable/chunks/vendor.77122788.js"];
export const stylesheets = ["_app/immutable/assets/index.4b91e4d9.css"];
export const fonts = [];
