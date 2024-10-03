

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Home-Page/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.CfAEmdPd.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CY7AifqN.js"];
export const stylesheets = [];
export const fonts = [];
