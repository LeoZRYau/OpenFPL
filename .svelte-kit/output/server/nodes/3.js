

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-fixture-data/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.1e18be7c.js","_app/immutable/chunks/index.a8c54947.js","_app/immutable/chunks/stores.95126db5.js","_app/immutable/chunks/singletons.fdfa7ed0.js","_app/immutable/chunks/Layout.0e76e124.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/Layout.ef6abfb5.css"];
export const fonts = [];
