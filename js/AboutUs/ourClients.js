// our-clients.js

document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements as they scroll into view
    const fadeElements = document.querySelectorAll('.metric-item, .testimonial-card, .type-card, .logo-item');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight - 100 &&
            rect.bottom >= 0
        );
    }
    
    // Initialize elements with opacity 0 if they're below the fold
    fadeElements.forEach(element => {
        if (!isInViewport(element)) {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
    });
    
    // Function to fade in elements
    function fadeInElements() {
        fadeElements.forEach(element => {
            if (isInViewport(element) && element.style.opacity === "0") {
                setTimeout(() => {
                    element.style.opacity = "1";
                    element.style.transform = element.classList.contains('metric-item') 
                        ? "translateY(-5px)" 
                        : element.classList.contains('testimonial-card') 
                            ? "translateY(-5px)" 
                            : element.classList.contains('type-card')
                                ? "translateY(-5px)"
                                : "scale(1)";
                }, 100);
            }
        });
    }
    
    // Add scroll event listener for fade animations with throttling
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(fadeInElements);
    });
    
    // Initial check for fade elements
    fadeInElements();
    
    // Add hover effect to client logos
    const logoItems = document.querySelectorAll('.logo-item');
    
    logoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            logoItems.forEach(logo => {
                if (logo !== item) {
                    logo.style.opacity = '0.5';
                }
            });
        });
        
        item.addEventListener('mouseleave', function() {
            logoItems.forEach(logo => {
                logo.style.opacity = '';
            });
        });
    });
    
    // Add counter animation to metric numbers
    function animateCounter(counter, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        function updateCount() {
            start += increment;
            if (start >= target) {
                counter.textContent = isNaN(target) ? target : Math.floor(target);
                return;
            }
            
            counter.textContent = isNaN(target) ? 
                Math.floor(start) : 
                Math.floor(start);
            requestAnimationFrame(updateCount);
        }
        
        updateCount();
    }
    
    // Get all metric numbers
    const metricNumbers = document.querySelectorAll('.metric-number');
    let metricsAnimated = false;
    const metricsSection = document.querySelector('.trust-metrics');
    
    function animateMetrics() {
        if (metricsSection && isInViewport(metricsSection) && !metricsAnimated) {
            metricNumbers.forEach(number => {
                const originalText = number.textContent;
                let targetNumber;
                
                // Handle different formats like "1500+", "95%", "4.8/5"
                if (originalText.includes('+')) {
                    targetNumber = parseFloat(originalText.replace(/[^0-9.]/g, ''));
                    number.textContent = '0+';
                } else if (originalText.includes('%')) {
                    targetNumber = parseFloat(originalText.replace(/[^0-9.]/g, ''));
                    number.textContent = '0%';
                } else if (originalText.includes('/')) {
                    const parts = originalText.split('/');
                    targetNumber = parseFloat(parts[0]);
                    number.textContent = '0/' + parts[1];
                } else {
                    targetNumber = parseFloat(originalText);
                    number.textContent = '0';
                }
                
                // Create closure to preserve originalText format
                const updateText = (value) => {
                    if (originalText.includes('+')) {
                        return `${value}+`;
                    } else if (originalText.includes('%')) {
                        return `${value}%`;
                    } else if (originalText.includes('/')) {
                        const parts = originalText.split('/');
                        return `${value}/${parts[1]}`;
                    } else {
                        return value;
                    }
                };
                
                // Custom counter function to handle special formats
                let start = 0;
                const duration = 2000;
                const increment = targetNumber / (duration / 16);
                
                function countUp() {
                    start += increment;
                    if (start >= targetNumber) {
                        number.textContent = updateText(targetNumber);
                        return;
                    }
                    
                    number.textContent = updateText(Math.floor(start));
                    requestAnimationFrame(countUp);
                }
                
                setTimeout(() => {
                    countUp();
                }, 200);
            });
            
            metricsAnimated = true;
        }
    }
    
    // Check for metrics on scroll
    window.addEventListener('scroll', animateMetrics);
    
    // Initial check for metrics
    animateMetrics();
});