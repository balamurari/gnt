// navbar.js
// Main module that initializes all navbar functionality

// Import modules
import { initializeDarkMode } from '../everything/dark-mode.js';
import { initializeMobileMenu } from './mobile-menu.js';
import { initializeMobileNavbar } from './mobile-navbar.js';

// Initialize Navbar
export function initializeNavbar() {
  // Handle desktop navbar functionality
  setupDesktopNavbar();
  
  // Setup search functionality
  setupSearch();
  
  // Handle category tabs
  setupCategoryTabs();
}

// Setup desktop navbar functionality
function setupDesktopNavbar() {
  // Get current page path
  const currentPath = window.location.pathname;
  
  // Set active links based on current URL
  document.querySelectorAll('.navbar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || 
        (currentPath === '/' && href === 'index.html') ||
        (currentPath.includes(href) && href !== '#')) {
      link.classList.add('active');
    }
  });
  
  // Handle dropdown hover states if needed
  document.querySelectorAll('.navbar-item').forEach(item => {
    const dropdown = item.querySelector('.navbar-dropdown');
    if (dropdown) {
      // Optional: Add any special dropdown behavior here
      // By default, CSS handles the hover behavior
    }
  });
}

// Setup search functionality
function setupSearch() {
  const searchForms = document.querySelectorAll('.navbar-search, .mobile-search');
  
  searchForms.forEach(form => {
    const input = form.querySelector('input');
    const button = form.querySelector('button');
    
    if (input) {
      // Submit on Enter key
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
          window.location.href = `search-results.html?q=${encodeURIComponent(input.value.trim())}`;
        }
      });
      
      // Submit on button click
      if (button) {
        button.addEventListener('click', () => {
          if (input.value.trim() !== '') {
            window.location.href = `search-results.html?q=${encodeURIComponent(input.value.trim())}`;
          }
        });
      }
    }
  });
}

// Setup category tabs
function setupCategoryTabs() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update search placeholder based on category
      const searchInput = document.querySelector('.mobile-search input');
      const location = document.querySelector('.mobile-header-location h3')?.textContent.trim() || 'Guntur';
      
      if (searchInput) {
        const category = tab.textContent.trim();
        searchInput.placeholder = `Search ${category.toLowerCase()} in ${location}...`;
      }
    });
  });
}

// Initialize everything
export function initializeAll() {
  // Wrap in DOMContentLoaded to ensure DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllComponents);
  } else {
    // DOM already loaded, run initialization
    initializeAllComponents();
  }
}

// Initialize all components
function initializeAllComponents() {
  console.log('Initializing all navbar components...');
  
  try {
    // Initialize desktop navbar
    initializeNavbar();
    console.log('Desktop navbar initialized');
    
    // Initialize dark mode
    initializeDarkMode();
    console.log('Dark mode initialized');
    
    // Initialize mobile menu
    initializeMobileMenu();
    console.log('Mobile menu initialized');
    
    // Initialize mobile navbar
    initializeMobileNavbar();
    console.log('Mobile navbar initialized');
  } catch (error) {
    console.error('Error initializing navbar components:', error);
  }
}

// Export all functions
export { 
  initializeDarkMode,
  initializeMobileMenu,
  initializeMobileNavbar
};

// Auto-initialize
initializeAll();