import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: 'index.html', // Enable SPA fallback
      precompress: false,
      strict: false, // Set to false to allow dynamic routes
    }),
    
    // Add paths configuration here
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/UrbanoPrincessYAN.github.io' : '',
    },
  }
};

export default config;
