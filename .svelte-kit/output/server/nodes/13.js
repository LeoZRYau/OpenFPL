

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/whitepaper/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.12ea16d1.js","_app/immutable/chunks/index.c7b38e5e.js","_app/immutable/chunks/Layout.52a12f65.js","_app/immutable/chunks/index.8caf67b2.js","_app/immutable/chunks/stores.30e0e13a.js","_app/immutable/chunks/singletons.b497871b.js","_app/immutable/chunks/toast-store.fd13d56a.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/6.2206b352.css","_app/immutable/assets/Layout.31940902.css"];
export const fonts = [];
