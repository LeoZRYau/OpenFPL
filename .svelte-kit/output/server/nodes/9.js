

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pick-team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.8c11ac93.js","_app/immutable/chunks/index.245a0e92.js","_app/immutable/chunks/Layout.0578a0e9.js","_app/immutable/chunks/index.c203a7c8.js","_app/immutable/chunks/stores.e742c101.js","_app/immutable/chunks/singletons.bd68a825.js","_app/immutable/chunks/toast-store.4fb1a6f1.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/system-store.c086a53a.js","_app/immutable/chunks/team-store.1430ecc0.js","_app/immutable/chunks/fixture-store.db6803db.js","_app/immutable/chunks/player-store.224e19e9.js","_app/immutable/chunks/manager-store.3967ef10.js","_app/immutable/chunks/BadgeIcon.aeacabbb.js","_app/immutable/chunks/ShirtIcon.b29a0cee.js"];
export const stylesheets = ["_app/immutable/assets/9.69c14fad.css","_app/immutable/assets/Layout.31940902.css"];
export const fonts = [];
