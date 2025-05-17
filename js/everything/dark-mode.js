// dark-mode.js
// Handles dark mode functionality across the site

// Get references to both desktop and mobile toggles
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
const html = document.documentElement;

export function initializeDarkMode() {
  // Early return if neither toggle exists
  if (!darkModeToggle && !mobileDarkModeToggle) {
    console.warn("Dark mode toggles not found in DOM");
    return;
  }
  
  // Check for saved theme preference or user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply the appropriate theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  
  // Toggle dark mode when the desktop button is clicked
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      toggleDarkMode();
    });
  }
  
  // Toggle dark mode when the mobile button is clicked
  if (mobileDarkModeToggle) {
    mobileDarkModeToggle.addEventListener('click', () => {
      toggleDarkMode();
    });
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      }
    });
}

// Toggle between dark and light mode
export function toggleDarkMode() {
  if (html.getAttribute('data-theme') === 'dark') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Enable dark mode
export function enableDarkMode() {
  html.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
  
  // Update icons if using Font Awesome
  const moonIcons = document.querySelectorAll('.moon-icon');
  const sunIcons = document.querySelectorAll('.sun-icon');
  
  moonIcons.forEach(icon => {
    icon.style.display = 'none';
  });
  
  sunIcons.forEach(icon => {
    icon.style.display = 'block';
  });
}

// Disable dark mode
export function disableDarkMode() {
  html.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
  
  // Update icons if using Font Awesome
  const moonIcons = document.querySelectorAll('.moon-icon');
  const sunIcons = document.querySelectorAll('.sun-icon');
  
  moonIcons.forEach(icon => {
    icon.style.display = 'block';
  });
  
  sunIcons.forEach(icon => {
    icon.style.display = 'none';
  });
}