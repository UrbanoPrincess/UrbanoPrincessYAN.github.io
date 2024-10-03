import { c as create_ssr_component, e as each, b as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: ".gallery-container.svelte-1qryb0r.svelte-1qryb0r{max-width:1200px;margin:0 auto;padding:20px;background-color:#f7f7f7}.gallery-title.svelte-1qryb0r.svelte-1qryb0r{text-align:center;font-size:2.5rem;color:#333;margin-bottom:20px}.gallery.svelte-1qryb0r.svelte-1qryb0r{display:grid;gap:16px}.image-mapping-gallery.svelte-1qryb0r.svelte-1qryb0r,.game-gallery.svelte-1qryb0r.svelte-1qryb0r{grid-template-columns:repeat(4, 1fr)}.we-manage-gallery.svelte-1qryb0r.svelte-1qryb0r,.bloggy-gallery.svelte-1qryb0r.svelte-1qryb0r{grid-template-columns:repeat(3, 1fr)}.gallery-item.svelte-1qryb0r.svelte-1qryb0r{overflow:hidden;border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);transition:transform 0.3s}.gallery-item.svelte-1qryb0r img.svelte-1qryb0r{width:100%;height:auto;display:block}.gallery-item.svelte-1qryb0r.svelte-1qryb0r:hover{transform:scale(1.05)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n// @ts-nocheck\\r\\n\\r\\n  // Array of images for the image mapping section\\r\\n  export let imageMapping = [\\r\\n    { src: 'images/Image Mapping1.png', alt: 'Image 1' }, // This should be first\\r\\n    { src: 'images/Image Mapping2.png', alt: 'Image 2' },\\r\\n    { src: 'images/Image Mapping3.png', alt: 'Image 3' },\\r\\n    { src: 'images/Image Mapping4.png', alt: 'Image 4' },\\r\\n  ];\\r\\n\\r\\n  // Array of images for the game section\\r\\n  export let gameImages = [\\r\\n    { src: 'images/Game0.png', alt: 'Game 0' }, // This should be first\\r\\n    { src: 'images/Game1.png', alt: 'Game 1' },\\r\\n    { src: 'images/Game2.png', alt: 'Game 2' },\\r\\n    { src: 'images/Game3.png', alt: 'Game 3' },\\r\\n  ];\\r\\n\\r\\n  // Array of images for the WeManage application\\r\\n  export let weManageImages = [\\r\\n    { src: 'images/Login-WeManage.png', alt: 'Login WeManage' },\\r\\n    { src: 'images/Register-WeManage.png', alt: 'Register WeManage' },\\r\\n    { src: 'images/Dashboard-WeManage.png', alt: 'Dashboard WeManage' },\\r\\n    { src: 'images/Editprofile-WeManage.png', alt: 'Edit Profile WeManage' },\\r\\n    { src: 'images/Progress-WeManage.png', alt: 'Progress WeManage' },\\r\\n    { src: 'images/Sched-WeManage.png', alt: 'Schedule WeManage' },\\r\\n  ];\\r\\n\\r\\n  // Array of images for the Bloggy application\\r\\n  export let bloggyImages = [\\r\\n    { src: 'images/LogIn-Bloggy.png', alt: 'Log In Bloggy' },\\r\\n    { src: 'images/SignUp-Bloggy.png', alt: 'Sign Up Bloggy' },\\r\\n    { src: 'images/Addpost-Bloggy.png', alt: 'Add Post Bloggy' },\\r\\n    { src: 'images/Home-Bloggy.png', alt: 'Home Bloggy' },\\r\\n    { src: 'images/Newsfeed-Bloggy.png', alt: 'Newsfeed Bloggy' },\\r\\n  ];\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .gallery-container {\\r\\n    max-width: 1200px; /* Max width for the gallery container */\\r\\n    margin: 0 auto; /* Centering the container */\\r\\n    padding: 20px;\\r\\n    background-color: #f7f7f7; /* Light gray background */\\r\\n  }\\r\\n\\r\\n  .gallery-title {\\r\\n    text-align: center; /* Centered title */\\r\\n    font-size: 2.5rem;\\r\\n    color: #333;\\r\\n    margin-bottom: 20px;\\r\\n  }\\r\\n\\r\\n  .gallery {\\r\\n    display: grid;\\r\\n    gap: 16px; /* Spacing between items */\\r\\n  }\\r\\n\\r\\n  .image-mapping-gallery, .game-gallery {\\r\\n    grid-template-columns: repeat(4, 1fr); /* Four columns for image mapping and game sections */\\r\\n  }\\r\\n\\r\\n  .we-manage-gallery, .bloggy-gallery {\\r\\n    grid-template-columns: repeat(3, 1fr); /* Three columns for WeManage and Bloggy sections */\\r\\n  }\\r\\n\\r\\n  .gallery-item {\\r\\n    overflow: hidden; /* Hides overflow */\\r\\n    border-radius: 8px; /* Rounded corners */\\r\\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */\\r\\n    transition: transform 0.3s; /* Smooth transform effect */\\r\\n  }\\r\\n\\r\\n  .gallery-item img {\\r\\n    width: 100%; /* Make images responsive */\\r\\n    height: auto; /* Maintain aspect ratio */\\r\\n    display: block; /* Remove bottom space */\\r\\n  }\\r\\n\\r\\n  .gallery-item:hover {\\r\\n    transform: scale(1.05); /* Scale effect on hover */\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"gallery-container\\">\\r\\n  <h2 class=\\"gallery-title\\">Image Mapping</h2>\\r\\n  <div class=\\"gallery image-mapping-gallery\\">\\r\\n    {#each imageMapping as { src, alt }}\\r\\n      <div class=\\"gallery-item\\">\\r\\n        <img src={src} alt={alt} />\\r\\n      </div>\\r\\n    {/each}\\r\\n  </div>\\r\\n\\r\\n  <h2 class=\\"gallery-title\\">Hide and Find Game</h2>\\r\\n  <div class=\\"gallery game-gallery\\">\\r\\n    {#each gameImages as { src, alt }}\\r\\n      <div class=\\"gallery-item\\">\\r\\n        <img src={src} alt={alt} />\\r\\n      </div>\\r\\n    {/each}\\r\\n  </div>\\r\\n\\r\\n  <h2 class=\\"gallery-title\\">WeManage - Web-based Task Manager</h2>\\r\\n  <div class=\\"gallery we-manage-gallery\\">\\r\\n    {#each weManageImages as { src, alt }}\\r\\n      <div class=\\"gallery-item\\">\\r\\n        <img src={src} alt={alt} />\\r\\n      </div>\\r\\n    {/each}\\r\\n  </div>\\r\\n\\r\\n  <h2 class=\\"gallery-title\\">Bloggy: Blogging Web Application</h2>\\r\\n  <div class=\\"gallery bloggy-gallery\\">\\r\\n    {#each bloggyImages as { src, alt }}\\r\\n      <div class=\\"gallery-item\\">\\r\\n        <img src={src} alt={alt} />\\r\\n      </div>\\r\\n    {/each}\\r\\n  </div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAwCE,gDAAmB,CACjB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OACpB,CAEA,4CAAe,CACb,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IACjB,CAEA,sCAAS,CACP,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CAEA,oDAAsB,CAAE,2CAAc,CACpC,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CAEA,gDAAkB,CAAE,6CAAgB,CAClC,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CAEA,2CAAc,CACZ,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,UAAU,CAAE,SAAS,CAAC,IACxB,CAEA,4BAAa,CAAC,kBAAI,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,KACX,CAEA,2CAAa,MAAO,CAClB,SAAS,CAAE,MAAM,IAAI,CACvB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageMapping = [
    {
      src: "images/Image Mapping1.png",
      alt: "Image 1"
    },
    {
      src: "images/Image Mapping2.png",
      // This should be first
      alt: "Image 2"
    },
    {
      src: "images/Image Mapping3.png",
      alt: "Image 3"
    },
    {
      src: "images/Image Mapping4.png",
      alt: "Image 4"
    }
  ] } = $$props;
  let { gameImages = [
    { src: "images/Game0.png", alt: "Game 0" },
    {
      src: "images/Game1.png",
      // This should be first
      alt: "Game 1"
    },
    { src: "images/Game2.png", alt: "Game 2" },
    { src: "images/Game3.png", alt: "Game 3" }
  ] } = $$props;
  let { weManageImages = [
    {
      src: "images/Login-WeManage.png",
      alt: "Login WeManage"
    },
    {
      src: "images/Register-WeManage.png",
      alt: "Register WeManage"
    },
    {
      src: "images/Dashboard-WeManage.png",
      alt: "Dashboard WeManage"
    },
    {
      src: "images/Editprofile-WeManage.png",
      alt: "Edit Profile WeManage"
    },
    {
      src: "images/Progress-WeManage.png",
      alt: "Progress WeManage"
    },
    {
      src: "images/Sched-WeManage.png",
      alt: "Schedule WeManage"
    }
  ] } = $$props;
  let { bloggyImages = [
    {
      src: "images/LogIn-Bloggy.png",
      alt: "Log In Bloggy"
    },
    {
      src: "images/SignUp-Bloggy.png",
      alt: "Sign Up Bloggy"
    },
    {
      src: "images/Addpost-Bloggy.png",
      alt: "Add Post Bloggy"
    },
    {
      src: "images/Home-Bloggy.png",
      alt: "Home Bloggy"
    },
    {
      src: "images/Newsfeed-Bloggy.png",
      alt: "Newsfeed Bloggy"
    }
  ] } = $$props;
  if ($$props.imageMapping === void 0 && $$bindings.imageMapping && imageMapping !== void 0) $$bindings.imageMapping(imageMapping);
  if ($$props.gameImages === void 0 && $$bindings.gameImages && gameImages !== void 0) $$bindings.gameImages(gameImages);
  if ($$props.weManageImages === void 0 && $$bindings.weManageImages && weManageImages !== void 0) $$bindings.weManageImages(weManageImages);
  if ($$props.bloggyImages === void 0 && $$bindings.bloggyImages && bloggyImages !== void 0) $$bindings.bloggyImages(bloggyImages);
  $$result.css.add(css);
  return `<div class="gallery-container svelte-1qryb0r"><h2 class="gallery-title svelte-1qryb0r" data-svelte-h="svelte-di3t5l">Image Mapping</h2> <div class="gallery image-mapping-gallery svelte-1qryb0r">${each(imageMapping, ({ src, alt }) => {
    return `<div class="gallery-item svelte-1qryb0r"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-1qryb0r"> </div>`;
  })}</div> <h2 class="gallery-title svelte-1qryb0r" data-svelte-h="svelte-gh0tci">Hide and Find Game</h2> <div class="gallery game-gallery svelte-1qryb0r">${each(gameImages, ({ src, alt }) => {
    return `<div class="gallery-item svelte-1qryb0r"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-1qryb0r"> </div>`;
  })}</div> <h2 class="gallery-title svelte-1qryb0r" data-svelte-h="svelte-ffmrg6">WeManage - Web-based Task Manager</h2> <div class="gallery we-manage-gallery svelte-1qryb0r">${each(weManageImages, ({ src, alt }) => {
    return `<div class="gallery-item svelte-1qryb0r"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-1qryb0r"> </div>`;
  })}</div> <h2 class="gallery-title svelte-1qryb0r" data-svelte-h="svelte-1o8tfi1">Bloggy: Blogging Web Application</h2> <div class="gallery bloggy-gallery svelte-1qryb0r">${each(bloggyImages, ({ src, alt }) => {
    return `<div class="gallery-item svelte-1qryb0r"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-1qryb0r"> </div>`;
  })}</div></div>`;
});
export {
  Page as default
};
