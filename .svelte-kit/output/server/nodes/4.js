

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-proposal/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.EFXB_DlR.js","_app/immutable/chunks/index.18tCYbqf.js","_app/immutable/chunks/vendor.F6kRLxTH.js"];
export const stylesheets = ["_app/immutable/assets/index.ZONkP7mR.css"];
export const fonts = [];
