// script.js
const sections = document.querySelectorAll('.section');

function fadeInSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Calculate the opacity based on section position
    const opacity = Math.max(0, 1 - Math.abs(sectionTop) / windowHeight);

    // Apply opacity style
    section.style.opacity = opacity;
  });
}

function handleScroll() {
  fadeInSections();
}

// Initial fade in
fadeInSections();

// Listen for scroll events and fade in/out sections
window.addEventListener('scroll', handleScroll);
