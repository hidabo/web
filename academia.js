document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
      btn.textContent = 'Ver m\u00e1s';
    } else {
      content.style.display = 'block';
      btn.textContent = 'Cerrar';
    }
  });
});
