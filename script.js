// Fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});