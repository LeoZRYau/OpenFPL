

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.d2759993.js","_app/immutable/chunks/index.c7b38e5e.js","_app/immutable/chunks/Layout.a538b3b7.js","_app/immutable/chunks/index.8caf67b2.js","_app/immutable/chunks/stores.f89c8fde.js","_app/immutable/chunks/singletons.fe993027.js","_app/immutable/chunks/toast-store.58fa49f6.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/Layout.31940902.css"];
export const fonts = [];
