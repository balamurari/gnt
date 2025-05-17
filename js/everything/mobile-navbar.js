// mobile-navbar.js
// Handles mobile bottom navbar functionality

export function initializeMobileNavbar() {
  // Create mobile navbar if it doesn't exist
  createMobileNavbar();
  
  // Set active link
  setActiveMobileNavLink();
  
  // Ensure visible on mobile devices
  ensureMobileNavbarVisibility();
}

// Create mobile navbar elements if they don't exist
function createMobileNavbar() {
  // Check if navbar already exists
  if (document.querySelector('.mobile-navbar')) {
    return;
  }
  
  // Create navbar
  const navbar = document.createElement('div');
  navbar.className = 'mobile-navbar';
  
  // Create navbar content
  navbar.innerHTML = `
    <ul class="mobile-navbar-menu">
      <li><a href="index.html" class="mobile-navbar-link">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </a></li>
      <li><a href="search-results.html" class="mobile-navbar-link">
        <i class="fas fa-search"></i>
        <span>Search</span>
      </a></li>
      <li><a href="post-property.html" class="mobile-navbar-link">
        <div class="post-circle">
          <i class="fas fa-plus"></i>
        </div>
        <span>Post</span>
      </a></li>
      <li><a href="saved.html" class="mobile-navbar-link">
        <i class="fas fa-heart"></i>
        <span>Saved</span>
      </a></li>
      <li><a href="account.html" class="mobile-navbar-link">
        <i class="fas fa-user"></i>
        <span>Account</span>
      </a></li>
    </ul>
  `;
  
  // Add navbar to body
  document.body.appendChild(navbar);
}

// Set active links based on current URL
function setActiveMobileNavLink() {
  const currentPath = window.location.pathname;
  
  document.querySelectorAll('.mobile-navbar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || 
        (currentPath === '/' && href === 'index.html') ||
        (currentPath.includes(href) && href !== '#')) {
      link.classList.add('active');
    }
  });
}

// Ensure mobile navbar is visible on mobile devices
function ensureMobileNavbarVisibility() {
  const mobileNavbar = document.querySelector('.mobile-navbar');
  
  if (mobileNavbar) {
    // Ensure it's visible on mobile
    if (window.innerWidth <= 992) {
      mobileNavbar.style.display = 'block';
    }
    
    // Update visibility on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 992) {
        mobileNavbar.style.display = 'block';
      } else {
        mobileNavbar.style.display = 'none';
      }
    });
  }
}