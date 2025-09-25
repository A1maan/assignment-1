// wait for the dom to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // mobile menu should be closed when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // dark mode 
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // quick check to see if user has any mode preferences (cuz some people seem to like light mode apparently)
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
    } else {
        // light mode preference (why just why lol)
        body.classList.remove('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = '🌙';
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // update button icon to opposite mode and save user's preference
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
            
            updateNavbarTheme();
        });
    }
    
    // func to update navbar colr
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
    
    // smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // contact form submission logic
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // extracting form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // data validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // form submitted
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);
            
            contactForm.reset();
        });
    }
    
    // extra small thing (this part will greet the user based on the time of day)
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
    
    displayGreeting();
    
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            updateNavbarTheme();
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // fade-in animation to sections when they come into view
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

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // hero section should be visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
    
    // typing effect for hero subtitle 
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
        
        // typing using a short delay to replicate real human typing
        setTimeout(type, 1000);
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 80);
    }
});

// func just to get the current time in string format
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

// same thing but for date
function getCurrentDate() {
    return new Date().toLocaleDateString();
}