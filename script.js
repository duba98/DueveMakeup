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

document.addEventListener('DOMContentLoaded', () => {
  const botonesMarca = document.querySelectorAll('.btn-marca');
  const tarjetasProductos = document.querySelectorAll('.tarjeta-producto');
  const tituloSeccion = document.getElementById('titulo-seccion');

  botonesMarca.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();

      const marcaSeleccionada = boton.getAttribute('data-marca');
      const nombreMarca = boton.textContent.trim(); // Lee el texto (ej. "ATENEA")

      // 1. Cambia el título de la sección
      if (marcaSeleccionada === 'todos') {
        tituloSeccion.textContent = 'Nuestros Productos Destacados';
      } else {
        tituloSeccion.textContent = `Productos - ${nombreMarca}`;
      }

      // 2. Filtra los productos
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
document.addEventListener('DOMContentLoaded', () => {
  const botonesMarca = document.querySelectorAll('.btn-marca');
  const botonInicio = document.querySelector('.btn-inicio');
  const tarjetasProductos = document.querySelectorAll('.tarjeta-producto');
  const tituloSeccion = document.getElementById('titulo-seccion');

  // Función para restablecer la vista al estado inicial
  function mostrarInicio() {
    tituloSeccion.textContent = 'Nuestros Productos Destacados';
    tarjetasProductos.forEach(producto => {
      producto.style.display = 'block';
    });
    // Desplaza suavemente hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Evento al hacer clic en Inicio
  if (botonInicio) {
    botonInicio.addEventListener('click', (e) => {
      e.preventDefault();
      mostrarInicio();
    });
  }

  // Evento para los botones del submenú de marcas
  botonesMarca.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();

      const marcaSeleccionada = boton.getAttribute('data-marca');
      const nombreMarca = boton.textContent.trim();

      if (marcaSeleccionada === 'todos') {
        mostrarInicio();
      } else {
        tituloSeccion.textContent = `Productos - ${nombreMarca}`;
        
        tarjetasProductos.forEach(producto => {
          const marcaProducto = producto.getAttribute('data-marca');
          if (marcaProducto === marcaSeleccionada) {
            producto.style.display = 'block';
          } else {
            producto.style.display = 'none';
          }
        });
      }
    });
  });
});