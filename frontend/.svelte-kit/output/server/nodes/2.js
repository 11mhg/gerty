

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fa98da8b.js","_app/immutable/chunks/index.ddb9a552.js"];
export const stylesheets = ["_app/immutable/assets/2.871b35ef.css"];
export const fonts = [];
