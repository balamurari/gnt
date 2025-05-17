// mobile-menu.js
// Handles mobile menu functionality

export function initializeMobileMenu() {
  // Create mobile menu if it doesn't exist
  createMobileMenu();
  
  // Mobile menu toggle functionality
  setupMobileMenuToggle();
  
  // Mobile dropdown toggles
  setupMobileDropdowns();
  
  // Location selector functionality
  setupLocationSelector();
}

// Create mobile menu elements if they don't exist
function createMobileMenu() {
  // Check if menu already exists
  if (document.querySelector('.mobile-menu')) {
    return;
  }
  
  // Create menu
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  
  // Create menu content
  menu.innerHTML = `
    <div class="mobile-menu-header">
    
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
          <a href="#" class="mobile-menu-item">
            Properties 
          </a>
        </li>
         <li class="mobile-menu-item">
          <a href="#" class="mobile-menu-item">
            Agents 
          </a>
        </li>
        <li class="mobile-menu-item">
          <a href="#" class="mobile-menu-link dropdown-toggle">
            About Us <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="mobile-submenu">
            <li><a href="our-story.html" class="mobile-submenu-link">
              <i class="fas fa-book-open"></i> Our Story
            </a></li>
            <li><a href="our-work.html" class="mobile-submenu-link">
              <i class="fas fa-briefcase"></i> Our Work
            </a></li>
            <li><a href="our-clients.html" class="mobile-submenu-link">
              <i class="fas fa-users"></i> Our Clients
            </a></li>
          </ul>
        </li>
        <li class="mobile-menu-item">
          <a href="#" class="mobile-menu-link dropdown-toggle">
            Services <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="mobile-submenu">
            <li><a href="strategic-marketing.html" class="mobile-submenu-link">
              <i class="fas fa-chart-line"></i> Strategic Marketing
            </a></li>
            <li><a href="negotiation.html" class="mobile-submenu-link">
              <i class="fas fa-handshake"></i> Negotiation
            </a></li>
            <li><a href="closing-success.html" class="mobile-submenu-link">
              <i class="fas fa-check-circle"></i> Closing Success
            </a></li>
          </ul>
        </li>
        <li class="mobile-menu-item">
          <a href="contact-form.html" class="mobile-menu-link">Contact Us</a>
        </li>
      </ul>
      <div class="mobile-menu-actions">
        <a href="login.html" class="btn btn-outline-primary">Login / Sign Up</a>
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
  `;
  
  // Create overlay if it doesn't exist
  if (!document.querySelector('.menu-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
  }
  
  // Add menu to body
  document.body.appendChild(menu);
}

// Setup mobile menu toggle functionality
function setupMobileMenuToggle() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuCloseBtn = document.querySelector('.mobile-menu-close');
  
  if (menuToggle && mobileMenu && menuOverlay) {
    // Open menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('show');
      menuOverlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
    
    // Close menu function
    function closeMenu() {
      mobileMenu.classList.remove('show');
      menuOverlay.classList.remove('show');
      document.body.style.overflow = '';
    }
    
    // Close on X button click
    if (menuCloseBtn) {
      menuCloseBtn.addEventListener('click', closeMenu);
    }
    
    // Close on overlay click
    menuOverlay.addEventListener('click', closeMenu);
  }
}

// Setup mobile dropdown toggles
function setupMobileDropdowns() {
  document.querySelectorAll('.mobile-menu-link.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      
      const submenu = toggle.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('show');
        
        // Toggle icon
        const icon = toggle.querySelector('i');
        if (icon) {
          if (submenu.classList.contains('show')) {
            icon.className = 'fas fa-chevron-up';
          } else {
            icon.className = 'fas fa-chevron-down';
          }
        }
      }
    });
  });
}

// Setup location selector functionality
function setupLocationSelector() {
  const locationSelector = document.querySelector('.mobile-header-location');
  const locationDropdown = document.querySelector('.location-dropdown');
  
  if (locationSelector && locationDropdown) {
    locationSelector.addEventListener('click', () => {
      locationDropdown.classList.toggle('show');
    });
    
    // Location selection
    document.querySelectorAll('.location-dropdown li').forEach(item => {
      item.addEventListener('click', () => {
        const location = item.textContent;
        const locationText = document.querySelector('.mobile-header-location h3');
        if (locationText) {
          locationText.innerHTML = `${location} <i class="fas fa-chevron-down"></i>`;
        }
        locationDropdown.classList.remove('show');
        
        // Update search placeholder
        updateSearchPlaceholder(location);
      });
    });
    
    // Close location dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.mobile-header-location')) {
        locationDropdown.classList.remove('show');
      }
    });
  }
}

// Update search placeholder based on selected location and category
function updateSearchPlaceholder(location) {
  const searchInput = document.querySelector('.mobile-search input');
  const activeCategory = document.querySelector('.category-tab.active');
  
  if (searchInput && activeCategory) {
    const category = activeCategory.textContent.trim();
    searchInput.placeholder = `Search ${category.toLowerCase()} in ${location}...`;
  }
}