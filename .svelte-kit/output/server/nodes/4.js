

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-proposal/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9W_oBVPp.js","_app/immutable/chunks/index.pU7Jugnz.js","_app/immutable/chunks/vendor.fqwirlyn.js"];
export const stylesheets = ["_app/immutable/assets/index.482clYIt.css"];
export const fonts = [];
