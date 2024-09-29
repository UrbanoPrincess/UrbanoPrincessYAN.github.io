<script>
    // Array of images for the image mapping section
    const imageMapping = [
      { src: 'Gallery/Image Mapping1.png', alt: 'Image 1' }, // This should be first
      { src: 'Gallery/Image Mapping2.png', alt: 'Image 2' },
      { src: 'Gallery/Image Mapping3.png', alt: 'Image 3' },
      { src: 'Gallery/Image Mapping4.png', alt: 'Image 4' },
    ];
  
    // Array of images for the game section
    const gameImages = [
      { src: 'Gallery/Game0.png', alt: 'Game 0' }, // This should be first
      { src: 'Gallery/Game1.png', alt: 'Game 1' },
      { src: 'Gallery/Game2.png', alt: 'Game 2' },
      { src: 'Gallery/Game3.png', alt: 'Game 3' },
    ];
  
    // Array of images for the WeManage application
    const weManageImages = [
      { src: 'Gallery/Login-WeManage.png', alt: 'Login WeManage' },
      { src: 'Gallery/Register-WeManage.png', alt: 'Register WeManage' },
      { src: 'Gallery/Dashboard-WeManage.png', alt: 'Dashboard WeManage' },
      { src: 'Gallery/Editprofile-WeManage.png', alt: 'Edit Profile WeManage' },
      { src: 'Gallery/Progress-WeManage.png', alt: 'Progress WeManage' },
      { src: 'Gallery/Sched-WeManage.png', alt: 'Schedule WeManage' },
    ];
  
    // Array of images for the Bloggy application
    const bloggyImages = [
      { src: 'Gallery/LogIn-Bloggy.png', alt: 'Log In Bloggy' },
      { src: 'Gallery/SignUp-Bloggy.png', alt: 'Sign Up Bloggy' },
      { src: 'Gallery/Addpost-Bloggy.png', alt: 'Add Post Bloggy' },
      { src: 'Gallery/Home-Bloggy.png', alt: 'Home Bloggy' },
      { src: 'Gallery/Newsfeed-Bloggy.png', alt: 'Newsfeed Bloggy' },
    ];
  </script>
  
  <style>
    .gallery-container {
      max-width: 1200px; /* Max width for the gallery container */
      margin: 0 auto; /* Centering the container */
      padding: 20px;
      background-color: #f7f7f7; /* Light gray background */
    }
  
    .gallery-title {
      text-align: center; /* Centered title */
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 20px;
    }
  
    .gallery {
      display: grid;
      gap: 16px; /* Spacing between items */
    }
  
    .image-mapping-gallery, .game-gallery {
      grid-template-columns: repeat(4, 1fr); /* Four columns for image mapping and game sections */
    }
  
    .we-manage-gallery, .bloggy-gallery {
      grid-template-columns: repeat(3, 1fr); /* Three columns for WeManage and Bloggy sections */
    }
  
    .gallery-item {
      overflow: hidden; /* Hides overflow */
      border-radius: 8px; /* Rounded corners */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
      transition: transform 0.3s; /* Smooth transform effect */
    }
  
    .gallery-item img {
      width: 100%; /* Make images responsive */
      height: auto; /* Maintain aspect ratio */
      display: block; /* Remove bottom space */
    }
  
    .gallery-item:hover {
      transform: scale(1.05); /* Scale effect on hover */
    }
  </style>
  
  <div class="gallery-container">
    <h2 class="gallery-title">Image Mapping</h2>
    <div class="gallery image-mapping-gallery">
      <!-- Image Mapping Section -->
      {#each imageMapping as { src, alt }}
        <div class="gallery-item">
          <img src={src} alt={alt} />
        </div>
      {/each}
    </div>
  
    <h2 class="gallery-title">Hide and Find Game</h2>
    <div class="gallery game-gallery">
      <!-- Game Images Section -->
      {#each gameImages as { src, alt }}
        <div class="gallery-item">
          <img src={src} alt={alt} />
        </div>
      {/each}
    </div>
  
    <h2 class="gallery-title">WeManage a web based task Manager</h2>
    <div class="gallery we-manage-gallery">
      <!-- WeManage Images Section -->
      {#each weManageImages as { src, alt }}
        <div class="gallery-item">
          <img src={src} alt={alt} />
        </div>
      {/each}
    </div>
  
    <h2 class="gallery-title">Bloggy: Blogging web application</h2>
    <div class="gallery bloggy-gallery">
      <!-- Bloggy Images Section -->
      {#each bloggyImages as { src, alt }}
        <div class="gallery-item">
          <img src={src} alt={alt} />
        </div>
      {/each}
    </div>
  </div>
  