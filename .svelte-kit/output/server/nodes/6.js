

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/governance/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.886c7e40.js","_app/immutable/chunks/index.878abf19.js","_app/immutable/chunks/Layout.987d9cae.js","_app/immutable/chunks/stores.8fa21572.js","_app/immutable/chunks/singletons.6a8625ca.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/Layout.1525f4bf.css"];
export const fonts = [];
