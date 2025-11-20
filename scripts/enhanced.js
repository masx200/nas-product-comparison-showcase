// Enhanced JavaScript functionality for 全闪NAS巅峰对决

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initScrollIndicator();
    initSmoothScrolling();
    initAnimations();
    initCounterAnimations();
    initProgressBars();
    initScrollToTop();
    initParallaxEffects();
    initMobileMenu();
});

// Scroll progress indicator
function initScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        scrollIndicator.style.width = Math.min(scrollPercent, 100) + '%';
    });
}

// Enhanced smooth scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add different animation classes based on element type
                if (element.classList.contains('card')) {
                    element.style.animation = 'scaleIn 0.6s ease forwards';
                } else if (element.classList.contains('section')) {
                    element.style.animation = 'slideInFromLeft 0.8s ease forwards';
                } else if (element.classList.contains('stats-grid')) {
                    element.style.animation = 'slideInFromRight 0.8s ease forwards';
                }
                
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.card, .section, .stats-grid, .comparison-table').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Animated counters for statistics
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-counter');
    
    const countUp = (counter, target, duration = 2000) => {
        const start = 0;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOutCubic);
            
            if (target.includes('ms')) {
                counter.textContent = `<${current}ms`;
            } else if (target.includes('%')) {
                counter.textContent = current + '%';
            } else if (target.includes('dB')) {
                counter.textContent = `<${current}dB`;
            } else if (target.includes('GB/s')) {
                counter.textContent = current + 'GB/s';
            } else {
                counter.textContent = current;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        requestAnimationFrame(updateCounter);
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.getAttribute('data-target') || counter.textContent;
                
                // Extract numeric value from target text
                const numericValue = target.match(/\d+/);
                if (numericValue) {
                    counter.textContent = '0';
                    counter.classList.add('animate');
                    countUp(counter, target);
                }
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Progress bar animations
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width') || '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                
                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Scroll to top button
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Parallax effects for hero section
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Mobile menu functionality (for future enhancement)
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Enhanced scroll performance
window.addEventListener('scroll', throttle(() => {
    // Scroll-dependent functions are already throttled
}, 16)); // ~60fps

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const nav = document.querySelector('.nav');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (mobileToggle) mobileToggle.classList.remove('active');
        }
    }
    
    // Arrow keys for navigation (future enhancement)
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        const sections = document.querySelectorAll('.section');
        const currentSection = getCurrentSection();
        const nextSection = getNextSection(sections, currentSection);
        
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        const sections = document.querySelectorAll('.section');
        const currentSection = getCurrentSection();
        const prevSection = getPrevSection(sections, currentSection);
        
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Helper functions for keyboard navigation
function getCurrentSection() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
            return section;
        }
    }
    return sections[0];
}

function getNextSection(sections, currentSection) {
    const currentIndex = Array.from(sections).indexOf(currentSection);
    return sections[currentIndex + 1] || null;
}

function getPrevSection(sections, currentSection) {
    const currentIndex = Array.from(sections).indexOf(currentSection);
    return sections[currentIndex - 1] || null;
}

// Print functionality
function initPrintStyles() {
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Guide';
    printButton.className = 'btn btn-secondary';
    printButton.style.position = 'fixed';
    printButton.style.top = '20px';
    printButton.style.right = '20px';
    printButton.style.zIndex = '1001';
    printButton.style.opacity = '0';
    printButton.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(printButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            printButton.style.opacity = '1';
        } else {
            printButton.style.opacity = '0';
        }
    });
    
    printButton.addEventListener('click', () => {
        window.print();
    });
}

// Initialize print functionality
initPrintStyles();

// Performance monitoring (for development)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Log performance metrics
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Log largest contentful paint
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
        }).observe({entryTypes: ['largest-contentful-paint']});
    });
}

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (e) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Enhanced error boundaries
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Service Worker registration (for future PWA enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then((registration) => {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch((registrationError) => {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}