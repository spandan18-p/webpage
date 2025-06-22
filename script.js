document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on page load
    animateOnScroll();
    
    // Initialize skill bars animation
    animateSkillBars();
    
    // Add hover effects to project cards
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
});

// Animate elements when they come into view
function animateOnScroll() {
    const sections = document.querySelectorAll('.section-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Animate skill bars
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        
        setTimeout(() => {
            skill.style.transition = 'width 1s ease-out';
            skill.style.width = width;
        }, 300);
    });
}

// Add print functionality
document.addEventListener('keydown', (e) => {
    // Ctrl+P or Command+P
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        window.print();
    }
});

// Dark mode toggle functionality (for future implementation)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 