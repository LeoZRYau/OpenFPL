

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/governance/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.cf694582.js","_app/immutable/chunks/index.b324a1dd.js","_app/immutable/chunks/Layout.8d88a232.js","_app/immutable/chunks/stores.b64d190c.js","_app/immutable/chunks/singletons.ed5340ea.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/Layout.48a06658.css"];
export const fonts = [];
