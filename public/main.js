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

// Accordion for certificates
document.addEventListener('DOMContentLoaded', () => {
  const accBtn = document.querySelector('.accordion-btn');
  const accPanel = document.querySelector('.accordion-panel');
  if (accBtn && accPanel) {
    accBtn.addEventListener('click', () => {
      accBtn.classList.toggle('active');
      accPanel.classList.toggle('open');
    });
  }
});