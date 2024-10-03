import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: "build",          // Output directory for pages
      assets: "build",         // Output directory for assets
      fallback: 'index.html',  // SPA fallback for routing
      precompress: false,      // Do not precompress assets
      strict: false,           // Allow dynamic routes
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/UrbanoPrincessYAN.github.io' : '',
    },
  }
};

export default config;
