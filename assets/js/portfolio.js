// Portfolio Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Show/hide navigation on scroll with smooth animation
    const topNav = document.getElementById('top-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 600) {
            topNav.style.display = 'block';
            topNav.style.animation = 'fadeInDown 0.3s ease-in';
        } else {
            topNav.style.display = 'none';
        }

        lastScroll = currentScroll;
    });

    // Enhanced Intersection Observer for scroll reveal animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Unobserve after revealing to improve performance
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections with scroll-reveal class
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
        fadeInObserver.observe(section);
    });

    // Staggered animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.transitionDelay = `${index * 0.15}s`;
        fadeInObserver.observe(card);
    });

    // Staggered animation for skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('scroll-reveal');
        category.style.transitionDelay = `${index * 0.1}s`;
        fadeInObserver.observe(category);
    });

    // Staggered animation for certification cards
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.transitionDelay = `${index * 0.15}s`;
        fadeInObserver.observe(card);
    });

    // Staggered animation for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.classList.add('scroll-reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
        fadeInObserver.observe(item);
    });

    // Add pulse animation to download button
    const downloadBtn = document.querySelector('.header-actions .button.primary');
    if (downloadBtn) {
        setInterval(() => {
            downloadBtn.classList.add('animate-pulse');
            setTimeout(() => {
                downloadBtn.classList.remove('animate-pulse');
            }, 2000);
        }, 10000); // Pulse every 10 seconds
    }

    // Add hover effect to social icons
    const socialIcons = document.querySelectorAll('#header nav a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const bg = document.getElementById('bg');
        if (bg) {
            bg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add loading complete class to body
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
