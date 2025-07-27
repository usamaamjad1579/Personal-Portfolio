// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll animation for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.section').forEach(section => {
  section.classList.add("hidden-section");
  observer.observe(section);
});

// Contact form basic feedback
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message. I will contact you soon!');
    this.reset();
  });
}

// Theme toggle logic
const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

function setTheme(theme) {
  document.body.className = theme;

  // Change the hero background based on theme
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundImage = theme === 'dark-theme'
      ? "url('usama-header-dark.jpg')"   // 👈 Night image
      : "url('usama-header-light.jpg')"; // 👈 Day image
  }

  localStorage.setItem('theme', theme);
  icon.className = theme === 'dark-theme' ? 'fas fa-moon' : 'fas fa-sun';
}

// Apply theme on button click
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = document.body.className;
    const next = current === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme(next);
  });
}

// Load saved theme on page load
const saved = localStorage.getItem('theme') || 'light-theme';
setTheme(saved);
