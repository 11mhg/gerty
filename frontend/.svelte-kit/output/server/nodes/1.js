

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.174369c6.js","_app/immutable/chunks/index.ddb9a552.js","_app/immutable/chunks/singletons.6e4cb641.js","_app/immutable/chunks/index.7be621fd.js"];
export const stylesheets = [];
export const fonts = [];
