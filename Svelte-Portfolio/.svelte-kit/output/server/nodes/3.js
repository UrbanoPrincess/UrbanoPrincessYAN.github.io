

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CSJFJyH8.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CY7AifqN.js"];
export const stylesheets = [];
export const fonts = [];
