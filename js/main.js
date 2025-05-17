// Main JavaScript file for Guntur Properties

// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
const html = document.documentElement;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  
  // Initialize all components
  initializeDarkMode();
  initializeSocialHub();
  initializeCarousel();
  initializeNavbar();
  initializePropertyCards();
  initializeMobileMenu();
});

// Initialize Dark Mode
function initializeDarkMode() {
  // Check for saved theme preference or user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply the appropriate theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
  }
  
  // Handle desktop dark mode toggle
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  // Handle mobile dark mode toggle
  if (mobileDarkModeToggle) {
    mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  // Toggle dark mode function
  function toggleDarkMode() {
    if (html.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}

// Initialize Carousel - keeping your original implementation
function initializeCarousel() {
  const carousels = document.querySelectorAll('.hero-carousel');
  
  carousels.forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    
    let currentIndex = 0;
    let interval;
    
    // Function to show a specific slide
    const showSlide = (index) => {
      // Remove active class from all items
      items.forEach(item => {
        item.classList.remove('active');
        item.classList.remove('carousel-item-start');
        item.classList.remove('carousel-item-end');
        item.classList.remove('carousel-item-next');
        item.classList.remove('carousel-item-prev');
      });
      
      // Remove active class from all indicators
      indicators.forEach(indicator => {
        indicator.classList.remove('active');
      });
      
      // Add active class to current item and indicator
      items[index].classList.add('active');
      if (indicators[index]) {
        indicators[index].classList.add('active');
      }
    };
    
    // Function to move to the next slide
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    };
    
    // Function to move to the previous slide
    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
    };
    
    // Start automatic slideshow
    const startSlideshow = () => {
      interval = setInterval(nextSlide, 5000);
    };
    
    // Stop automatic slideshow
    const stopSlideshow = () => {
      clearInterval(interval);
    };
    
    // Add event listeners to controls
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        stopSlideshow();
        startSlideshow();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        stopSlideshow();
        startSlideshow();
      });
    }
    
    // Add event listeners to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = index;
        showSlide(currentIndex);
        stopSlideshow();
        startSlideshow();
      });
    });
    
    // Pause slideshow when hovering over carousel
    carousel.addEventListener('mouseenter', stopSlideshow);
    carousel.addEventListener('mouseleave', startSlideshow);
    
    // Start slideshow
    startSlideshow();
  });
}

// Initialize Social Hub - keeping your original implementation
function initializeSocialHub() {
  const socialHub = document.querySelector('.social-hub');
  const socialHubToggle = document.querySelector('.social-hub-toggle');
  
  if (!socialHub || !socialHubToggle) return;
  
  socialHubToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing immediately due to document click
    socialHub.classList.toggle('active');
  });
  
  // Close social hub when clicking outside
  document.addEventListener('click', (e) => {
    if (socialHub && !socialHub.contains(e.target)) {
      socialHub.classList.remove('active');
    }
  });
}

// Initialize Navbar - updating to improve functionality
function initializeNavbar() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  
  // Handle mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Either create or select the mobile menu
      let mobileMenu = document.querySelector('.mobile-menu');
      
      if (!mobileMenu) {
        // If there's no mobile menu, create it
        createMobileMenu();
        mobileMenu = document.querySelector('.mobile-menu');
      }
      
      // Toggle menu
      mobileMenu.classList.toggle('show');
      document.body.classList.toggle('menu-open');
    });
  }
  
  // Handle dropdown menus on mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        toggle.classList.toggle('active');
        const dropdown = toggle.nextElementSibling;
        dropdown.classList.toggle('show');
      }
    });
  });
  
  // Handle location selector in mobile header
  const locationSelector = document.querySelector('.mobile-header-location');
  if (locationSelector) {
    // Create dropdown if it doesn't exist
    let locationDropdown = locationSelector.querySelector('.location-dropdown');
    
    if (!locationDropdown) {
      locationDropdown = document.createElement('div');
      locationDropdown.className = 'location-dropdown';
      locationDropdown.innerHTML = `
        <ul>
          <li data-location="Guntur">Guntur</li>
          <li data-location="Bapatla">Bapatla</li>
          <li data-location="Amaravati">Amaravati</li>
          <li data-location="Narasaraopet">Narasaraopet</li>
        </ul>
      `;
      locationSelector.appendChild(locationDropdown);
    }
    
    // Toggle location dropdown
    locationSelector.addEventListener('click', (e) => {
      e.stopPropagation();
      locationDropdown.classList.toggle('show');
    });
    
    // Handle location selection
    const locationItems = locationDropdown.querySelectorAll('li');
    locationItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const location = item.getAttribute('data-location');
        locationSelector.querySelector('h3').innerHTML = `${location} <i class="fas fa-chevron-down"></i>`;
        locationDropdown.classList.remove('show');
        
        // Update search placeholder with selected location
        updateSearchPlaceholder(location);
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      if (locationDropdown) {
        locationDropdown.classList.remove('show');
      }
    });
  }
  
  // Handle mobile category tabs
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Update search placeholder based on selected category
      const category = tab.textContent.trim();
      const locationElement = document.querySelector('.mobile-header-location h3');
      const location = locationElement ? locationElement.textContent.trim().split(' ')[0] : 'Guntur';
      
      updateSearchPlaceholder(location, category);
    });
  });
}

// Function to update search placeholder based on location and category
function updateSearchPlaceholder(location, category) {
  const searchInput = document.querySelector('.mobile-search input');
  if (!searchInput) return;
  
  if (!category) {
    const activeCategory = document.querySelector('.category-tab.active');
    category = activeCategory ? activeCategory.textContent.trim() : 'Buy';
  }
  
  switch(category.toLowerCase()) {
    case 'buy':
      searchInput.placeholder = `Search to buy in ${location}...`;
      break;
    case 'rent':
      searchInput.placeholder = `Search to rent in ${location}...`;
      break;
    case 'new projects':
    case 'new':
      searchInput.placeholder = `Search new projects in ${location}...`;
      break;
    case 'commercial':
      searchInput.placeholder = `Search commercial in ${location}...`;
      break;
    default:
      searchInput.placeholder = `Search properties in ${location}...`;
  }
}

// Initialize Property Cards - keeping your original implementation
function initializePropertyCards() {
  const favoriteButtons = document.querySelectorAll('.property-card-favorite');
  
  favoriteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent card click
      button.classList.toggle('active');
      
      const icon = button.querySelector('i');
      if (button.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        showToast('Property added to favorites');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        showToast('Property removed from favorites');
      }
    });
  });
}

// Initialize Mobile Menu
function initializeMobileMenu() {
  // Close mobile menu when close button is clicked
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('show');
        document.body.classList.remove('menu-open');
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenu && mobileMenu.classList.contains('show') && 
        !mobileMenu.contains(e.target) && 
        mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
      mobileMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
    }
  });
}

// Create mobile menu dynamically
function createMobileMenu() {
  // Only create if it doesn't exist
  if (document.querySelector('.mobile-menu')) return;
  
  const menuHTML = `
    <div class="mobile-menu">
      <div class="mobile-menu-header">
        <a href="index.html" class="mobile-menu-logo">
          <img src="assets\images\logo.webp" alt="Guntur Properties" class="light-logo dark-logo">
        </a>
        <button class="mobile-menu-close">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="mobile-menu-body">
        <ul class="mobile-menu-nav">
          <li class="mobile-menu-item">
            <a href="index.html" class="mobile-menu-link">Home</a>
          </li>
          <li class="mobile-menu-item">
            <a href="#" class="mobile-menu-link dropdown-toggle">
              Properties </i>
            </a>
            
          </li>
           <li class="mobile-menu-item">
            <a href="#" class="mobile-menu-link dropdown-toggle">
              Agents </i>
            </a>
            
          </li>
          <li class="mobile-menu-item">
            <a href="#" class="mobile-menu-link dropdown-toggle">
              About us <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="mobile-submenu">
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-building"></i> Our story
                </a>
              </li>
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-home"></i> Our work
                </a>
              </li>
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-briefcase"></i> Our clients
                </a>
              </li>
               <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-briefcase"></i> How it works
                </a>
              </li>
            </ul>
          </li><li class="mobile-menu-item">
            <a href="#" class="mobile-menu-link dropdown-toggle">
              Services <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="mobile-submenu">
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-building"></i> Strategic marketing
                </a>
              </li>
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-home"></i> Negotiation
                </a>
              </li>
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-landmark"></i> Closing success
                </a>
              </li>
             
            </ul>
          </li>
          <li class="mobile-menu-item">
            <a href="#" class="mobile-menu-link dropdown-toggle">
              Contact Us <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="mobile-submenu">
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-building"></i> Contact form
                </a>
              </li>
              <li class="mobile-submenu-item">
                <a href="#" class="mobile-submenu-link">
                  <i class="fas fa-home"></i> Our offices
                </a>
              </li> 
            </ul>
          </li>  
        </ul>
       
        <div class="mobile-menu-actions">
          <a href="login.html" class="btn btn-outline-primary btn-block mt-sm">Agent login</a>
        </div>
      </div>
      <div class="mobile-menu-footer">
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <p>© 2025 Guntur Properties</p>
      </div>
    </div>
  `;
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = menuHTML;
  document.body.appendChild(tempDiv.firstElementChild);
  
  // Initialize the mobile menu
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const dropdownToggles = document.querySelectorAll('.mobile-menu .dropdown-toggle');
  
  // Add event listener to close button
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
    });
  }
  
  // Add event listeners to dropdown toggles
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle.classList.toggle('active');
      
      const submenu = toggle.nextElementSibling;
      if (submenu && submenu.classList.contains('mobile-submenu')) {
        submenu.classList.toggle('show');
      }
    });
  });
  
  // Show the mobile menu
  mobileMenu.classList.add('show');
  document.body.classList.add('menu-open');
  
  return mobileMenu;
}

// Show toast notification - keeping your original implementation
function showToast(message, duration = 3000) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Create new toast
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  
  // Add toast to body
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Hide toast after duration
  setTimeout(() => {
    toast.classList.remove('show');
    
    // Remove toast after animation
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// Add toast styles dynamically - keeping your original implementation
function addToastStyles() {
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 30px;
        font-size: 14px;
        z-index: 9999;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        text-align: center;
        max-width: 80%;
      }
      
      .toast-notification.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
      
      html[data-theme="dark"] .toast-notification {
        background-color: rgba(255, 255, 255, 0.9);
        color: var(--text-primary);
      }
    `;
    document.head.appendChild(style);
  }
}

// Call the function to add toast styles
addToastStyles();