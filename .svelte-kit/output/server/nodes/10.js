

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pick-team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.kokBeXPn.js","_app/immutable/chunks/index.yUiKS0Mp.js","_app/immutable/chunks/vendor.HYaJUzF5.js"];
export const stylesheets = ["_app/immutable/assets/index.USi8Uar5.css"];
export const fonts = [];
