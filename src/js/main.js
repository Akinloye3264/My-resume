// ===== 2025 MODERN RESUME JAVASCRIPT =====

// Global variables
let isMenuOpen = false;
let currentSection = 'home';
let scrollPosition = 0;

// DOM Elements
const body = document.body;
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const skillBars = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const timelineItems = document.querySelectorAll('.timeline-item');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 2025 Modern Resume Initialized');
    
    initializeApp();
    setupEventListeners();
    setupScrollAnimations();
    setupSkillBars();
    setupParallaxEffects();
    setupTypewriterEffect();
    setupParticleSystem();
    
    // Initial animations
    animateOnLoad();
});

// ===== APP INITIALIZATION =====
function initializeApp() {
    // Add scroll animation classes
    sections.forEach(section => {
        section.classList.add('scroll-animate');
    });
    
    // Add staggered animation delays
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
    });
    
    // Initialize skill bars
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
    
    console.log('✅ App initialized successfully');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Form submission
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Mouse move effects
    document.addEventListener('mousemove', handleMouseMove);
    
    console.log('✅ Event listeners setup complete');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navMenu.classList.add('active');
        navToggle.classList.add('active');
        body.style.overflow = 'hidden';
        
        // Animate menu items
        const menuItems = navMenu.querySelectorAll('a');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('slide-in');
        });
    } else {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        body.style.overflow = '';
        
        // Reset menu items
        const menuItems = navMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.classList.remove('slide-in');
        });
    }
}

// ===== NAVIGATION HANDLING =====
function handleNavClick(e) {
    e.preventDefault();
    
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        // Close mobile menu if open
        if (isMenuOpen) {
            toggleMobileMenu();
        }
        
        // Smooth scroll to section
        smoothScrollTo(targetSection);
        
        // Update active nav link
        updateActiveNavLink(targetId);
    }
}

function smoothScrollTo(targetElement) {
    const headerHeight = navbar.offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function updateActiveNavLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// ===== SCROLL HANDLING =====
function handleScroll() {
    scrollPosition = window.pageYOffset;
    
    // Navbar background effect
    if (scrollPosition > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active section
    updateActiveSection();
    
    // Parallax effects
    updateParallaxElements();
    
    // Trigger scroll animations
    triggerScrollAnimations();
}

function updateActiveSection() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = section.getAttribute('id');
            if (sectionId !== currentSection) {
                currentSection = sectionId;
                updateActiveNavLink(sectionId);
            }
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special animations for different elements
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillBars(entry.target);
                }
                
                if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.scroll-animate, .skill-category, .timeline-item, .project-card');
    animatedElements.forEach(el => observer.observe(el));
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition + windowHeight > elementTop + elementHeight * 0.3) {
            element.classList.add('animate');
        }
    });
}

// ===== SKILL BARS ANIMATION =====
function setupSkillBars() {
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

function animateSkillBars(container) {
    const bars = container.querySelectorAll('.skill-progress');
    
    bars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
        
        // Add shimmer effect
        bar.classList.add('shimmer');
    });
}

// ===== PARALLAX EFFECTS =====
function setupParallaxEffects() {
    // Add parallax to floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.transform = `translateY(${scrollPosition * (0.1 + index * 0.05)}px)`;
    });
}

function updateParallaxElements() {
    const shapes = document.querySelectorAll('.shape');
    const heroImage = document.querySelector('.hero-image');
    
    // Parallax for floating shapes
    shapes.forEach((shape, index) => {
        const speed = 0.1 + index * 0.05;
        const yPos = scrollPosition * speed;
        shape.style.transform = `translateY(${yPos}px) rotate(${scrollPosition * 0.01}deg)`;
    });
    
    // Parallax for hero image
    if (heroImage) {
        const speed = 0.3;
        const yPos = scrollPosition * speed;
        heroImage.style.transform = `translateY(${yPos}px)`;
    }
}

// ===== TYPEWRITER EFFECT =====
function setupTypewriterEffect() {
    const titleName = document.querySelector('.title-name');
    if (!titleName) return;
    
    const text = titleName.textContent;
    titleName.textContent = '';
    titleName.style.borderRight = '3px solid var(--primary)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleName.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Start blinking cursor
            titleName.style.animation = 'blink 1s infinite';
        }
    };
    
    // Start typewriter after a delay
    setTimeout(typeWriter, 1000);
}

// ===== PARTICLE SYSTEM =====
function setupParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--primary);
        border-radius: 50%;
        opacity: 0.3;
        animation: float-particle 10s linear infinite;
    `;
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    
    container.appendChild(particle);
}

// ===== FORM HANDLING =====
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const formStatus = document.getElementById('form-status');
    const originalText = submitBtn.innerHTML;
    
    // Basic form validation
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Clear previous status
    if (formStatus) {
        formStatus.innerHTML = '';
        formStatus.className = 'form-status';
    }
    
    // Get form data
    const formData = new FormData(form);
    
    // Submit to Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        // Success
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        
        if (formStatus) {
            formStatus.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Message sent successfully!</div>';
            formStatus.className = 'form-status success';
        }
    })
    .catch(error => {
        // Error
        console.error('Form submission error:', error);
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        
        if (formStatus) {
            formStatus.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i> Error sending message. Please try again.</div>';
            formStatus.className = 'form-status error';
        }
    })
    .finally(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : 'var(--primary-blue)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 20px ${type === 'success' ? 'rgba(34, 197, 94, 0.3)' : type === 'error' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(37, 99, 235, 0.3)'};
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// ===== MOUSE EFFECTS =====
function handleMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Create ripple effect on cards
    const cards = document.querySelectorAll('.card, .project-card, .skill-category');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt((mouseX - cardX) ** 2 + (mouseY - cardY) ** 2);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
            const intensity = 1 - distance / maxDistance;
            card.style.transform = `translateY(-${intensity * 5}px) scale(${1 + intensity * 0.02})`;
        } else {
            card.style.transform = '';
        }
    });
}

// ===== KEYBOARD SHORTCUTS =====
function handleKeyboardShortcuts(e) {
    // Escape to close mobile menu
    if (e.key === 'Escape' && isMenuOpen) {
        toggleMobileMenu();
    }
    
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Focus search input if exists
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.focus();
        }
    }
}

// ===== RESIZE HANDLING =====
function handleResize() {
    // Close mobile menu on large screens
    if (window.innerWidth > 768 && isMenuOpen) {
        toggleMobileMenu();
    }
    
    // Recalculate positions
    updateParallaxElements();
}

// ===== LOAD ANIMATIONS =====
function animateOnLoad() {
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('fade-in');
    });
    
    // Animate tech stack
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${1 + index * 0.1}s`;
        item.classList.add('bounce-in');
    });
}

// ===== TIMELINE ANIMATIONS =====
function animateTimelineItem(item) {
    const marker = item.querySelector('.timeline-marker');
    const content = item.querySelector('.timeline-content');
    
    // Animate marker
    marker.style.animation = 'pulse 1s ease-out';
    
    // Animate content
    content.style.animation = 'slideInRight 0.8s ease-out';
    
    // Reset animations
    setTimeout(() => {
        marker.style.animation = '';
        content.style.animation = '';
    }, 1000);
}

// ===== UTILITY FUNCTIONS =====
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
    };
}

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events
const throttledScrollHandler = throttle(handleScroll, 16);
window.addEventListener('scroll', throttledScrollHandler);

// ===== CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-color: var(--primary); }
        51%, 100% { border-color: transparent; }
    }
    
    @keyframes float-particle {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 0.3; }
        90% { opacity: 0.3; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(50px); opacity: 0; }
    }
    
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes bounce-in {
        0% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); opacity: 1; }
    }
    
    .fade-in {
        animation: fade-in 0.8s ease-out forwards;
    }
    
    .bounce-in {
        animation: bounce-in 0.6s ease-out forwards;
    }
    
    .slide-in {
        animation: slideInRight 0.5s ease-out forwards;
    }
    
    .shimmer {
        position: relative;
        overflow: hidden;
    }
    
    .shimmer::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        animation: shimmer 2s infinite;
    }
    
    .navbar.scrolled {
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(20px);
        box-shadow: var(--shadow-lg);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(20px);
        padding: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-toggle.active .hamburger span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active .hamburger span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active .hamburger span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .nav-link.active {
        color: var(--primary);
        background: rgba(99, 102, 241, 0.1);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .nav-toggle {
            display: block;
        }
    }
`;

document.head.appendChild(style);

// ===== EXPORT FUNCTIONS =====
window.toggleMobileMenu = toggleMobileMenu;
window.smoothScrollTo = smoothScrollTo;

console.log('🎉 2025 Modern Resume JavaScript loaded successfully!'); 