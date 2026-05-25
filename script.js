// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav
function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
}
function closeNav() {
    document.getElementById('navLinks').classList.remove('open');
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));