

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B3VuulVA.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CY7AifqN.js"];
export const stylesheets = ["_app/immutable/assets/5.CYCBpxw0.css"];
export const fonts = [];
