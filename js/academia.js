document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
      btn.textContent = 'Ver más';
    } else {
      content.style.display = 'block';
      btn.textContent = 'Cerrar';
    }
  });
});
