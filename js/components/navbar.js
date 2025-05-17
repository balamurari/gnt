// Navbar Component

export function initializeNavbar() {
  // Desktop Navbar Functionality
  const dropdownItems = document.querySelectorAll('.navbar-item');
  
  dropdownItems.forEach(item => {
    const link = item.querySelector('.navbar-link');
    const dropdown = item.querySelector('.navbar-dropdown');
    
    if (!dropdown) return;
    
    // For desktop: Show dropdown on hover
    if (window.innerWidth >= 992) {
      item.addEventListener('mouseenter', () => {
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
        dropdown.style.transform = 'translateY(0)';
      });
      
      item.addEventListener('mouseleave', () => {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(10px)';
      });
    }
    
    // For mobile: Toggle dropdown on click
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth < 992 && dropdown) {
          e.preventDefault();
          dropdown.classList.toggle('show');
        }
      });
    }
  });
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('show');
      
      // Prevent body scroll when menu is open
      document.body.classList.toggle('menu-open');
    });
  }
  
  // Mobile Category Tabs
  const categoryTabs = document.querySelectorAll('.category-tab');
  
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Here you would typically update content based on selected category
      const category = tab.textContent.trim().toLowerCase();
      updateMobileSearchPlaceholder(category);
    });
  });
  
  // Update search placeholder based on category
  function updateMobileSearchPlaceholder(category) {
    const searchInput = document.querySelector('.mobile-search input');
    if (!searchInput) return;
    
    const location = document.querySelector('.mobile-header-location h3').textContent.trim().split(' ')[0];
    
    switch(category) {
      case 'buy':
        searchInput.placeholder = `Search to buy in ${location}...`;
        break;
      case 'rent':
        searchInput.placeholder = `Search to rent in ${location}...`;
        break;
      case 'new projects':
        searchInput.placeholder = `Search new projects in ${location}...`;
        break;
      case 'commercial':
        searchInput.placeholder = `Search commercial in ${location}...`;
        break;
      default:
        searchInput.placeholder = `Search properties in ${location}...`;
    }
  }
  
  // Mobile Bottom Navigation
  const navItems = document.querySelectorAll('.mobile-navbar-link');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Only update if not already active
      if (!item.classList.contains('active')) {
        // Remove active class from all items
        navItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
      }
    });
  });
  
  // Handle location selector
  const locationSelector = document.querySelector('.mobile-header-location');
  const locationDropdown = document.createElement('div');
  locationDropdown.className = 'location-dropdown';
  locationDropdown.innerHTML = `
    <ul>
      <li data-location="Guntur">Guntur</li>
      <li data-location="Bapatla">Bapatla</li>
      <li data-location="Amaravati">Amaravati</li>
      <li data-location="Narasaraopet">Narasaraopet</li>
    </ul>
  `;
  
  // Add dropdown to the DOM but hidden
  if (locationSelector) {
    locationSelector.appendChild(locationDropdown);
    
    // Toggle dropdown on click
    locationSelector.addEventListener('click', (e) => {
      e.stopPropagation();
      locationDropdown.classList.toggle('show');
    });
    
    // Handle location selection
    const locationItems = locationDropdown.querySelectorAll('li');
    locationItems.forEach(item => {
      item.addEventListener('click', () => {
        const location = item.getAttribute('data-location');
        locationSelector.querySelector('h3').innerHTML = `${location} <i class="fas fa-chevron-down"></i>`;
        locationDropdown.classList.remove('show');
        
        // Update search placeholder
        const activeCategory = document.querySelector('.category-tab.active');
        if (activeCategory) {
          updateMobileSearchPlaceholder(activeCategory.textContent.trim().toLowerCase());
        }
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      locationDropdown.classList.remove('show');
    });
  }
  
  // Add active class to current page nav link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Handle navbar color change on scroll
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
  
  // Handle search form in navbar
  const navbarSearch = document.querySelector('.navbar-search');
  
  if (navbarSearch) {
    const searchInput = navbarSearch.querySelector('input');
    const searchButton = navbarSearch.querySelector('button');
    
    searchButton.addEventListener('click', () => {
      if (searchInput.value.trim() !== '') {
        // Redirect to search results page with query parameter
        window.location.href = `search-results.html?q=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
    
    // Submit on Enter key
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        window.location.href = `search-results.html?q=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
}

// Export function to create a mobile menu programmatically
export function createMobileMenu(categories) {
  // Create menu structure
  const menuHTML = `
    <div class="mobile-menu">
      <div class="mobile-menu-header">
        <a href="index.html" class="mobile-menu-logo">
          <img src="assets/images/logo-light.png" alt="Guntur Properties" class="light-logo">
          <img src="assets/images/logo-dark.png" alt="Guntur Properties" class="dark-logo">
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
          ${categories.map(category => `
            <li class="mobile-menu-item">
              <a href="#" class="mobile-menu-link dropdown-toggle">
                ${category.name} <i class="fas fa-chevron-down"></i>
              </a>
              ${category.items ? `
                <ul class="mobile-submenu">
                  ${category.items.map(item => `
                    <li class="mobile-submenu-item">
                      <a href="${item.url}" class="mobile-submenu-link">
                        <i class="${item.icon}"></i> ${item.name}
                      </a>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </li>
          `).join('')}
          <li class="mobile-menu-item">
            <a href="contact.html" class="mobile-menu-link">Contact Us</a>
          </li>
        </ul>
        <div class="mobile-menu-actions">
          <a href="#" class="btn btn-primary btn-block">Post Property</a>
          <a href="login.html" class="btn btn-outline-primary btn-block mt-sm">Login / Sign Up</a>
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
  
  // Initialize mobile menu functionality
  initializeNavbar();
  
  return document.querySelector('.mobile-menu');
}