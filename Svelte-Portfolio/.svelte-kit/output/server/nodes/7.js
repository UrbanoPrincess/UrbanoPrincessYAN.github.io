

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.u1ZuJAsX.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CY7AifqN.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/7.CQD-_OOk.css"];
export const fonts = [];
