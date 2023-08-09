

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dbac6be8.js","_app/immutable/chunks/index.ddb9a552.js","_app/immutable/chunks/index.7be621fd.js"];
export const stylesheets = ["_app/immutable/assets/0.97a8b5e9.css"];
export const fonts = [];
