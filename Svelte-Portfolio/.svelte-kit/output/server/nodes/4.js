

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CitXsmr6.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CY7AifqN.js"];
export const stylesheets = ["_app/immutable/assets/4.DmCXWRuI.css"];
export const fonts = [];
