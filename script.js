document.addEventListener('DOMContentLoaded', () => {
  const botonesMarca = document.querySelectorAll('.btn-marca');
  const tarjetasProductos = document.querySelectorAll('.tarjeta-producto');

  botonesMarca.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();

      const marcaSeleccionada = boton.getAttribute('data-marca');

      tarjetasProductos.forEach(producto => {
        const marcaProducto = producto.getAttribute('data-marca');

        if (marcaSeleccionada === 'todos' || marcaProducto === marcaSeleccionada) {
          producto.style.display = 'block';
        } else {
          producto.style.display = 'none';
        }
      });
    });
  });
});