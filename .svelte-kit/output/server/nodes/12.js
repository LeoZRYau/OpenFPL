

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.09e6e0eb.js","_app/immutable/chunks/index.245a0e92.js","_app/immutable/chunks/Layout.c037416c.js","_app/immutable/chunks/index.c203a7c8.js","_app/immutable/chunks/stores.a9eccd55.js","_app/immutable/chunks/singletons.d0372d1c.js","_app/immutable/chunks/toast-store.0b82f89c.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/Layout.31940902.css"];
export const fonts = [];
