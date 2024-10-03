<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import "../app.css";
  
    // Define the base path for GitHub Pages deployment
    let basePath = import.meta.env.MODE === 'production' ? '/UrbanoPrincessYAN.github.io' : '';
  
    // Define tabs with their names and links
    let tabs = [
      { name: "Home", href: `${basePath}/Home-Page` },
      { name: "Portfolio", href: `${basePath}/portfolio` },
      { name: "About", href: `${basePath}/about` },
      { name: "Contact", href: `${basePath}/contact` }
    ];
  
    // Store for the current tab
    let currentTab = writable("Home");
  
    // Redirect to the Home page when the component mounts
    onMount(() => {
      const path = window.location.pathname.split('/').pop(); // Get the last part of the URL path
      const foundTab = tabs.find(tab => tab.href.split('/').pop() === path);
      
      // If the current path does not match any tab, redirect to Home
      if (!foundTab) {
        window.location.href = `${basePath}/Home-Page`;
      } else {
        currentTab.set(foundTab.name); // Set the current tab based on the found tab
      }
    });
  </script>
  
  <nav class="flex space-x-4 p-4 bg-gray-800">
    {#each tabs as tab}
      <a href={tab.href}
         class="text-white px-3 py-2 rounded-md text-sm font-medium { $currentTab === tab.name ? 'bg-gray-900' : 'hover:bg-gray-700'}">
        {tab.name}
      </a>
    {/each}
  </nav>
  
  <!-- Slot where the content of each page will be displayed -->
  <slot />
  