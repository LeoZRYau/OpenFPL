

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.HYlaNbC0.js","_app/immutable/chunks/index.hPPP8Pz3.js","_app/immutable/chunks/vendor.PmbRkDNL.js"];
export const stylesheets = ["_app/immutable/assets/index.USi8Uar5.css"];
export const fonts = [];
