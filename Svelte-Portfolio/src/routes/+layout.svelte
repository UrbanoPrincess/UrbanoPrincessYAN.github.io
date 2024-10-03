<script>
    import { onMount } from 'svelte';
    import "../app.css";
  
    // This layout component will serve as the main layout with the navigation tabs
    let tabs = [
      { name: "Home", href: "/Home-Page", current: true },
      { name: "Portfolio", href: "/portfolio", current: false },
      { name: "About", href: "/about", current: false },
      { name: "Contact", href: "/contact", current: false }
    ];
  
    // Redirect to the Home page when the component mounts
    onMount(() => {
      if (window.location.pathname === '/') {
        window.location.href = '/Home-Page';
      }
    });
  </script>
  
  <nav class="flex space-x-4 p-4 bg-gray-800">
    {#each tabs as tab}
      <a href={tab.href}
         class="text-white px-3 py-2 rounded-md text-sm font-medium {tab.current ? 'bg-gray-900' : 'hover:bg-gray-700'}">
        {tab.name}
      </a>
    {/each}
  </nav>
  
  <!-- Slot where the content of each page will be displayed -->
  <slot />
  