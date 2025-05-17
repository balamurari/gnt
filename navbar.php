<!-- Updated index.html with proper script imports -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guntur Properties</title>
  <link rel="stylesheet" href="css/components/navbar.css">
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
  <!-- Desktop Navbar -->
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="navbar-logo">
        <a href="index.html">
          <img src="assets/images/logo.webp" alt="Guntur Properties">
        </a>
      </div>
      
      <!-- Main Menu -->
      <ul class="navbar-menu">
        <li class="navbar-item">
          <a href="index.html" class="navbar-link">Home</a>
        </li>
        <li class="navbar-item">
          <a href="#" class="navbar-link">Properties <i class="fas fa-chevron-down"></i></a>
          <div class="navbar-dropdown">
            <a href="portfolio.html" class="dropdown-item">
              <i class="fas fa-building"></i> Portfolio
            </a>
            <a href="categories.html" class="dropdown-item">
              <i class="fas fa-home"></i> Categories
            </a>
            <a href="property-management.html" class="dropdown-item">
              <i class="fas fa-landmark"></i> Property Management
            </a>
          </div>
        </li>
        <li class="navbar-item">
          <a href="#" class="navbar-link">About Us <i class="fas fa-chevron-down"></i></a>
          <div class="navbar-dropdown">
            <a href="our-story.html" class="dropdown-item">
              <i class="fas fa-book-open"></i> Our Story
            </a>
            <a href="our-work.html" class="dropdown-item">
              <i class="fas fa-briefcase"></i> Our Work
            </a>
            <a href="our-clients.html" class="dropdown-item">
              <i class="fas fa-users"></i> Our Clients
            </a>
          </div>
        </li>
        <li class="navbar-item">
          <a href="#" class="navbar-link">Services <i class="fas fa-chevron-down"></i></a>
          <div class="navbar-dropdown">
            <a href="strategic-marketing.html" class="dropdown-item">
              <i class="fas fa-chart-line"></i> Strategic Marketing
            </a>
            <a href="negotiation.html" class="dropdown-item">
              <i class="fas fa-handshake"></i> Negotiation
            </a>
            <a href="closing-success.html" class="dropdown-item">
              <i class="fas fa-check-circle"></i> Closing Success
            </a>
          </div>
        </li>
        <li class="navbar-item">
          <a href="contact-form.html" class="navbar-link">Contact Us</a>
        </li>
      </ul>
      
      <!-- Right Actions -->
      <div class="navbar-actions">
        <!-- Search 
        <div class="navbar-search">
          <input type="text" placeholder="Search properties...">
          <button type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>-->
        
        <!-- Dark Mode Toggle -->
        <button id="darkModeToggle" class="dark-mode-toggle">
          <i class="fas fa-moon moon-icon"></i>
          <i class="fas fa-sun sun-icon"></i>
        </button>
        
        <!-- Post Property Button -->
        <a href="post-property.html" class="post-property-btn">
          <i class="fas fa-plus-circle"></i> Post Property
        </a>
      </div>
    </div>
  </nav>

  <!-- Mobile Header -->
  <header class="mobile-header">
    <!-- Top Bar -->
    <div class="mobile-header-top">
      <!-- Hamburger Menu Toggle -->
      <button class="mobile-menu-toggle">
        <i class="fas fa-bars"></i>
      </button>
      
      <!-- Logo -->
      <a href="index.html" class="mobile-logo">
        <img src="assets/images/logo.webp" alt="Guntur Properties">
      </a>
      
      <!-- Dark Mode Toggle -->
      <button id="mobileDarkModeToggle" class="dark-mode-toggle">
        <i class="fas fa-moon moon-icon"></i>
        <i class="fas fa-sun sun-icon"></i>
      </button>
    </div>
    
    <!-- Location Selector -->
    <div class="mobile-header-location">
      <h3>Guntur <i class="fas fa-chevron-down"></i></h3>
      <div class="location-dropdown">
        <ul>
          <li>Guntur</li>
          <li>Bapatla</li>
          <li>Amaravati</li>
          <li>Narasaraopet</li>
        </ul>
      </div>
    </div>
    
    <!-- Search 
    <div class="mobile-search">
      <input type="text" placeholder="Search properties in Guntur...">
    </div>-->
    
    <!-- Category Tabs -->
    <div class="mobile-category-tabs">
      <a href="#" class="category-tab active">Buy</a>
      <a href="#" class="category-tab">Rent</a>
      <a href="#" class="category-tab">New Projects</a>
      <a href="#" class="category-tab">Commercial</a>
      <a href="#" class="category-tab">PG/Co-living</a>
    </div>
  </header>

 

  <!-- Proper Scripts with type="module" -->
  <script type="module">
    // Import the main initialization function
    import { initializeAll } from './js/components/navbar.js';
    
    // Initialize all components when the DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, initializing components...');
        initializeAll();
      });
    } else {
      // DOM already loaded
      console.log('DOM already loaded, initializing components...');
      initializeAll();
    }
    
    // Fallback for older browsers or if modules fail
    window.addEventListener('load', () => {
      console.log('Window loaded, checking if initialization completed...');
      
      // Check if dark mode toggle is working
      const darkModeToggle = document.getElementById('darkModeToggle');
      const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
      
      if (darkModeToggle && !darkModeToggle.hasAttribute('data-initialized')) {
        console.log('Applying fallback for dark mode toggle...');
        
        // Fallback toggle function
        function toggleDarkMode() {
          const html = document.documentElement;
          if (html.getAttribute('data-theme') === 'dark') {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
          } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
          }
        }
        
        // Apply event listeners directly
        darkModeToggle.addEventListener('click', toggleDarkMode);
        if (mobileDarkModeToggle) {
          mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
        }
        
        // Mark as initialized
        darkModeToggle.setAttribute('data-initialized', 'true');
      }
    });
  </script>
</body>
</html>