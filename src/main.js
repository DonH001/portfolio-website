// Reveal sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const slideSections = document.querySelectorAll('.slide-up');
  const revealOnScroll = () => {
    slideSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});