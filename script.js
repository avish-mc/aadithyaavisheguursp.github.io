// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and target section
            this.classList.add('active');
            targetSection.classList.add('active');
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Handle browser back/forward buttons with hash navigation
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1) || 'home';
        const targetSection = document.getElementById(hash);
        
        if (targetSection) {
            sections.forEach(s => s.classList.remove('active'));
            navLinks.forEach(l => l.classList.remove('active'));
            
            targetSection.classList.add('active');
            const correspondingLink = document.querySelector(`[href="#${hash}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });

    // Initialize page based on URL hash
    const initialHash = window.location.hash.substring(1) || 'home';
    if (initialHash !== 'home') {
        const targetSection = document.getElementById(initialHash);
        if (targetSection) {
            sections.forEach(s => s.classList.remove('active'));
            navLinks.forEach(l => l.classList.remove('active'));
            
            targetSection.classList.add('active');
            const correspondingLink = document.querySelector(`[href="#${initialHash}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    }

    // Add scroll effect to navigation bar
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.padding = '1rem 3rem';
            nav.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.12)';
        } else {
            nav.style.padding = '1.5rem 3rem';
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });

    // Animate elements on scroll within sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe research items, coursework blocks, and journal entries
    const animatedElements = document.querySelectorAll('.research-item, .semester-block, .journal-entry, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
