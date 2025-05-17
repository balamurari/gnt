// Dark Mode Component

const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

export function initializeDarkMode() {
  if (!darkModeToggle) return;
  
  // Check for saved theme preference or user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply the appropriate theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  
  // Toggle dark mode when the button is clicked
  darkModeToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
  
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

function enableDarkMode() {
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

function disableDarkMode() {
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