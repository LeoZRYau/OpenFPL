

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-fixture-data/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.2bJtRSbq.js","_app/immutable/chunks/index.yVgzs-im.js","_app/immutable/chunks/vendor.9jxumFXr.js"];
export const stylesheets = ["_app/immutable/assets/index.LowOqC7e.css"];
export const fonts = [];
