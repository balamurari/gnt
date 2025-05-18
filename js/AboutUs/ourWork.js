// our-work.js

document.addEventListener('DOMContentLoaded', function() {
    // Simple fade-in animation for elements as they come into view
    const fadeElements = document.querySelectorAll('.expertise-card, .project-item, .achievement-item, .approach-step');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight - 50 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle fading in elements
    function handleScrollAnimation() {
        fadeElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('has-animated')) {
                element.classList.add('has-animated');
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('expertise-card') 
                    ? 'translateY(-5px)' 
                    : element.classList.contains('project-item') 
                        ? 'translateY(-5px)'
                        : 'translateY(0)';
            }
        });
    }
    
    // Initialize fade elements with opacity 0
    fadeElements.forEach(element => {
        if (!isInViewport(element)) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        } else {
            element.style.opacity = '1';
            element.classList.add('has-animated');
        }
    });
    
    // Add scroll event listener with throttling for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleScrollAnimation);
    });
    
    // Initial check for elements in viewport
    handleScrollAnimation();
    
    // Add focus effect to approach steps
    const approachSteps = document.querySelectorAll('.approach-step');
    
    approachSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid ' + getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.borderLeft = '';
        });
    });
    
    // Add subtle parallax effect to testimonial section
    const testimonialSection = document.querySelector('.testimonial-highlight');
    
    if (testimonialSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const sectionPosition = testimonialSection.offsetTop;
            const windowHeight = window.innerHeight;
            
            // Only apply effect when testimonial is in view
            if (scrollPosition + windowHeight > sectionPosition && 
                scrollPosition < sectionPosition + testimonialSection.offsetHeight) {
                
                const parallaxValue = (scrollPosition - sectionPosition) * 0.1;
                testimonialSection.style.backgroundPosition = `center ${50 + parallaxValue}%`;
            }
        });
    }
});