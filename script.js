// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const logo = document.getElementById('logo');
    let currentLang = 'en';

    // Language switcher
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            if (lang !== currentLang) {
                currentLang = lang;
                
                // Update active button
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Update logo
                if (lang === 'es') {
                    logo.src = 'logo_es.png';
                } else {
                    logo.src = 'logo_en.png';
                }
                
                // Update all text elements
                updateLanguage(lang);
            }
        });
    });

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-en]');
        
        elements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = text;
                } else if (el.tagName === 'BUTTON') {
                    el.textContent = text;
                } else {
                    el.innerHTML = text;
                }
            }
        });
    }

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            const successMsg = currentLang === 'en' 
                ? 'Thank you for your message. We will contact you soon.'
                : 'Gracias por su mensaje. Nos pondremos en contacto pronto.';
            
            alert(successMsg);
            contactForm.reset();
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
