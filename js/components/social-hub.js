// Social Hub Component

export function initializeSocialHub() {
  const socialHub = document.querySelector('.social-hub');
  const socialHubToggle = document.querySelector('.social-hub-toggle');
  
  if (!socialHub || !socialHubToggle) return;
  
  socialHubToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    socialHub.classList.toggle('active');
  });
  
  // Close social hub when clicking outside
  document.addEventListener('click', (e) => {
    if (socialHub && !socialHub.contains(e.target)) {
      socialHub.classList.remove('active');
    }
  });
  
  // Add click events for social items
  const socialItems = document.querySelectorAll('.social-hub-item');
  
  socialItems.forEach(item => {
    item.addEventListener('click', () => {
      // Track click for analytics (placeholder)
      console.log(`Clicked on ${item.classList[1]}`);
      
      // Close the social hub after clicking an item
      setTimeout(() => {
        socialHub.classList.remove('active');
      }, 300);
    });
  });
}

// Create Social Hub Element
export function createSocialHub() {
  const socialHubHTML = `
    <div class="social-hub">
      <button class="social-hub-toggle" aria-label="Connect with us">
        <i class="fas fa-share-alt"></i>
        <span class="pulse-ring"></span>
      </button>
      
      <div class="social-hub-menu">
        <a href="https://wa.me/919876543210" class="social-hub-item whatsapp" aria-label="Contact on WhatsApp">
          <span class="label">WhatsApp</span>
          <div class="icon-wrapper">
            <i class="fab fa-whatsapp"></i>
          </div>
        </a>
        
        <a href="tel:+919876543210" class="social-hub-item phone" aria-label="Call us">
          <span class="label">Call</span>
          <div class="icon-wrapper">
            <i class="fas fa-phone-alt"></i>
          </div>
        </a>
        
        <a href="mailto:info@gunturproperties.com" class="social-hub-item email" aria-label="Email us">
          <span class="label">Email</span>
          <div class="icon-wrapper">
            <i class="far fa-envelope"></i>
          </div>
        </a>
        
        <a href="#" class="social-hub-item facebook" aria-label="Facebook page">
          <span class="label">Facebook</span>
          <div class="icon-wrapper">
            <i class="fab fa-facebook-f"></i>
          </div>
        </a>
        
        <a href="#" class="social-hub-item instagram" aria-label="Instagram profile">
          <span class="label">Instagram</span>
          <div class="icon-wrapper">
            <i class="fab fa-instagram"></i>
          </div>
        </a>
      </div>
    </div>
  `;
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = socialHubHTML;
  
  return tempDiv.firstElementChild;
}