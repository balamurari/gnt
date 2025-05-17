/**
 * Simple cross-fade carousel implementation
 * No black flash during transitions
 */
document.addEventListener('DOMContentLoaded', function() {
  initCarousel();
});

function initCarousel() {
  // Elements
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  const prevBtn = carousel.querySelector('.carousel-control-prev');
  const nextBtn = carousel.querySelector('.carousel-control-next');
  
  // Variables
  let currentIndex = 0;
  let interval;
  let isAnimating = false;
  const autoplayDelay = 5000; // Time between slide changes (ms)
  const fadeTime = 800; // Fade transition time (ms)
  
  // Show initial slide
  showSlide(currentIndex);
  
  // Initialize autoplay
  startAutoplay();
  
  // Add event listeners
  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);
  
  // Set up indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Pause autoplay on hover
  carousel.addEventListener('mouseenter', pauseAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  
  // Add touch/swipe support
  let touchStartX = 0;
  carousel.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  
  carousel.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // Detect swipe (with threshold)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNextSlide();
      } else {
        showPrevSlide();
      }
    }
  }, { passive: true });
  
  /**
   * Show a specific slide by index
   */
  function showSlide(index) {
    if (isAnimating) return;
    
    // Set current index
    currentIndex = index;
    
    // Update slides
    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active', 'next', 'prev');
      }
    });
    
    // Update indicators
    updateIndicators();
  }
  
  /**
   * Update indicator states
   */
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('active');
        indicator.setAttribute('aria-current', 'true');
      } else {
        indicator.classList.remove('active');
        indicator.removeAttribute('aria-current');
      }
    });
  }
  
  /**
   * Show next slide with cross-fade animation
   */
  function showNextSlide() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Get current and next slide
    const currentSlide = slides[currentIndex];
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];
    
    // Set next slide below current with opacity 0
    nextSlide.style.opacity = '0';
    nextSlide.classList.add('active');
    nextSlide.classList.add('next');
    
    // Ensure browser processes these style changes before the transition
    setTimeout(function() {
      // Fade in next slide
      nextSlide.style.transition = `opacity ${fadeTime}ms ease-in-out`;
      nextSlide.style.opacity = '1';
      
      // After transition completes
      setTimeout(function() {
        // Remove active class from previous slide
        currentSlide.classList.remove('active');
        currentSlide.style.opacity = '';
        nextSlide.classList.remove('next');
        nextSlide.style.transition = '';
        nextSlide.style.opacity = '';
        
        // Update current index
        currentIndex = nextIndex;
        updateIndicators();
        isAnimating = false;
      }, fadeTime);
    }, 20);
    
    // Reset autoplay
    resetAutoplay();
  }
  
  /**
   * Show previous slide with cross-fade animation
   */
  function showPrevSlide() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Get current and prev slide
    const currentSlide = slides[currentIndex];
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const prevSlide = slides[prevIndex];
    
    // Set prev slide below current with opacity 0
    prevSlide.style.opacity = '0';
    prevSlide.classList.add('active');
    prevSlide.classList.add('prev');
    
    // Ensure browser processes these style changes before the transition
    setTimeout(function() {
      // Fade in prev slide
      prevSlide.style.transition = `opacity ${fadeTime}ms ease-in-out`;
      prevSlide.style.opacity = '1';
      
      // After transition completes
      setTimeout(function() {
        // Remove active class from previous slide
        currentSlide.classList.remove('active');
        currentSlide.style.opacity = '';
        prevSlide.classList.remove('prev');
        prevSlide.style.transition = '';
        prevSlide.style.opacity = '';
        
        // Update current index
        currentIndex = prevIndex;
        updateIndicators();
        isAnimating = false;
      }, fadeTime);
    }, 20);
    
    // Reset autoplay
    resetAutoplay();
  }
  
  /**
   * Go to specific slide
   */
  function goToSlide(index) {
    if (index === currentIndex || isAnimating) return;
    
    // Determine direction
    if (index > currentIndex) {
      // Going forward
      isAnimating = true;
      
      // Get current and target slide
      const currentSlide = slides[currentIndex];
      const targetSlide = slides[index];
      
      // Set target slide below current with opacity 0
      targetSlide.style.opacity = '0';
      targetSlide.classList.add('active');
      targetSlide.classList.add('next');
      
      // Ensure browser processes these style changes before the transition
      setTimeout(function() {
        // Fade in target slide
        targetSlide.style.transition = `opacity ${fadeTime}ms ease-in-out`;
        targetSlide.style.opacity = '1';
        
        // After transition completes
        setTimeout(function() {
          // Remove active class from previous slide
          currentSlide.classList.remove('active');
          currentSlide.style.opacity = '';
          targetSlide.classList.remove('next');
          targetSlide.style.transition = '';
          targetSlide.style.opacity = '';
          
          // Update current index
          currentIndex = index;
          updateIndicators();
          isAnimating = false;
        }, fadeTime);
      }, 20);
    } else {
      // Going backward
      isAnimating = true;
      
      // Get current and target slide
      const currentSlide = slides[currentIndex];
      const targetSlide = slides[index];
      
      // Set target slide below current with opacity 0
      targetSlide.style.opacity = '0';
      targetSlide.classList.add('active');
      targetSlide.classList.add('prev');
      
      // Ensure browser processes these style changes before the transition
      setTimeout(function() {
        // Fade in target slide
        targetSlide.style.transition = `opacity ${fadeTime}ms ease-in-out`;
        targetSlide.style.opacity = '1';
        
        // After transition completes
        setTimeout(function() {
          // Remove active class from previous slide
          currentSlide.classList.remove('active');
          currentSlide.style.opacity = '';
          targetSlide.classList.remove('prev');
          targetSlide.style.transition = '';
          targetSlide.style.opacity = '';
          
          // Update current index
          currentIndex = index;
          updateIndicators();
          isAnimating = false;
        }, fadeTime);
      }, 20);
    }
    
    // Reset autoplay
    resetAutoplay();
  }
  
  /**
   * Start autoplay for the carousel
   */
  function startAutoplay() {
    clearInterval(interval);
    interval = setInterval(showNextSlide, autoplayDelay);
  }
  
  /**
   * Pause the autoplay
   */
  function pauseAutoplay() {
    clearInterval(interval);
  }
  
  /**
   * Reset the autoplay timer
   */
  function resetAutoplay() {
    pauseAutoplay();
    startAutoplay();
  }
}