document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Cerrar otros dropdowns abiertos
      dropdowns.forEach(other => {
        if (other !== dropdown) other.classList.remove('open');
      });

      // Alternar el dropdown actual
      dropdown.classList.toggle('open');
    });
  });

  // Cerrar al hacer clic en cualquier marca
  document.querySelectorAll('.brand-item').forEach(item => {
    item.addEventListener('click', () => {
      dropdowns.forEach(d => d.classList.remove('open'));
    });
  });

  // Cerrar si se hace clic fuera del menú
  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('open'));
  });
});