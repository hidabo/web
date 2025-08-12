document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel img');
  let index = 0;
  if (slides.length > 0) {
    slides[index].classList.add('active');
    setInterval(() => {
      const current = slides[index];
      index = (index + 1) % slides.length;
      const next = slides[index];
      next.classList.add('active');
      setTimeout(() => {
        current.classList.remove('active');
      }, 100);
    }, 2000);
  }
});
