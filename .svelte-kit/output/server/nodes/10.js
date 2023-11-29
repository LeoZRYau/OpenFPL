

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/player/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.1abdf9da.js","_app/immutable/chunks/index.c7b38e5e.js","_app/immutable/chunks/stores.bf47915d.js","_app/immutable/chunks/singletons.c3049c55.js","_app/immutable/chunks/index.8caf67b2.js","_app/immutable/chunks/Layout.4ea1ffce.js","_app/immutable/chunks/toast-store.d43f66ba.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/player-store.492f18e6.js","_app/immutable/chunks/fixture-store.f2ac1ba0.js","_app/immutable/chunks/team-store.e2695fd5.js","_app/immutable/chunks/system-store.2529fbb7.js","_app/immutable/chunks/BadgeIcon.5f1570c4.js","_app/immutable/chunks/ViewDetailsIcon.98b59799.js","_app/immutable/chunks/ShirtIcon.cbb688e3.js"];
export const stylesheets = ["_app/immutable/assets/10.ff16016e.css","_app/immutable/assets/Layout.306651eb.css"];
export const fonts = [];
