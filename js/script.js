// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
    } else {
        // Ensure light mode is properly set
        body.classList.remove('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = '🌙';
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Update button icon and save preference
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
            
            // Update navbar immediately when theme changes
            updateNavbarTheme();
        });
    }
    
    // Function to update navbar theme
    function updateNavbarTheme() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (body.classList.contains('dark-mode')) {
                navbar.style.backgroundColor = window.scrollY > 50 ? '#1e293b' : '#334155';
            } else {
                navbar.style.backgroundColor = '#ffffff';
            }
        }
    }
    
    // Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission (since there's no backend)
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Greeting Message by Time of Day
    function displayGreeting() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        const now = new Date();
        const hour = now.getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = "Good Morning! I'm";
        } else if (hour < 17) {
            greeting = "Good Afternoon! I'm";
        } else {
            greeting = "Good Evening! I'm";
        }
        
        heroTitle.innerHTML = `${greeting} <span class="highlight">Almaan Khan</span>`;
    }
    
    // Apply greeting on page load
    displayGreeting();
    
    // Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            updateNavbarTheme();
            
            // Update shadow based on scroll
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Add fade-in animation to sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in effect
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Hero section should be visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
    
    // Add typing effect to hero subtitle (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        if (!element) return;
        
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // Start typing after a short delay
        setTimeout(type, 1000);
    }
    
    // Apply typing effect to subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 80);
    }
    
    // Console message for developers
    console.log('🚀 Welcome to Almaan Khan\'s Portfolio!');
    console.log('💻 Built with HTML, CSS, and JavaScript');
    console.log('🎯 Assignment 1 - SWE 363');
});

// Additional utility functions
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

function getCurrentDate() {
    return new Date().toLocaleDateString();
}

// Export functions for potential testing (if using modules in the future)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCurrentTime,
        getCurrentDate
    };
}