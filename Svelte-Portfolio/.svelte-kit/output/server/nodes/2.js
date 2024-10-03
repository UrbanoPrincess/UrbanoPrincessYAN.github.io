import * as universal from '../entries/pages/layout/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/layout/+layout.ts";
export const imports = ["_app/immutable/nodes/2.CFqKPe_6.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CY7AifqN.js"];
export const stylesheets = [];
export const fonts = [];
