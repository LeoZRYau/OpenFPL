

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-fixture-data/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e2a2edc4.js","_app/immutable/chunks/index.a8c54947.js","_app/immutable/chunks/stores.f797788d.js","_app/immutable/chunks/singletons.bce1901b.js","_app/immutable/chunks/Layout.a9f87d98.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/Layout.ef6abfb5.css"];
export const fonts = [];
