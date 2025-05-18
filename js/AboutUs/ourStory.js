// our-story.js

document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements as they scroll into view
    const fadeElements = document.querySelectorAll('.milestone-card, .value-card, .team-member');
    
    // Initialize elements with opacity 0 if they're below the fold
    fadeElements.forEach(element => {
        if (element.getBoundingClientRect().top > window.innerHeight) {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
    });
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight - 100 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animations
    function handleScroll() {
        fadeElements.forEach(element => {
            if (isInViewport(element) && element.style.opacity === "0") {
                setTimeout(() => {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                }, 100);
            }
        });
    }
    
    // Initial check for elements in viewport
    handleScroll();
    
    // Add scroll event listener with throttling for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleScroll);
    });
    
    // Add click interaction for milestone cards
    const milestoneCards = document.querySelectorAll('.milestone-card');
    milestoneCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            milestoneCards.forEach(c => c.classList.remove('active-milestone'));
            // Add active class to clicked card
            this.classList.add('active-milestone');
        });
    });
});