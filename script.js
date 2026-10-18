
       
const products = [
  {
    id: 1,
    name: "Base Líquida Atenea",
    price: 1500,
    category: "maquillaje",
    brand: "atenea",
    image: "imagenes/atenea/BASE LIQUIDA CREAM ATENEA 1ST X 30 ml.png"
  },
  {
    id: 2,
    name: "Fijador de Cejas",
    price: 1000,
    category: "maquillaje",
    brand: "atenea",
    image: "imagenes/atenea/GEL FIJADOR DE CEJAS.png"
  },
  {
    id: 3,
    name: "Iluminador Atenea Sublime",
    price: 0,
    category: "maquillaje",
    brand: "atenea",
    image: "imagenes/atenea/ILUMINADOR ATENEA SUBLIME.png"
  },
  {
    id: 4,
    name: "Polvo Suelto",
    price: 0,
    category: "maquillaje",
    brand: "atenea",
    image: "imagenes/atenea/POLVO SUELTO ATENEA TRASLUCIDO 1ST SCENE X 35 g.png"
  },
  {
    id: 5,
    name: "Rubor Dúo Atenea Pink Crush",
    price: 0,
    category: "maquillaje",
    brand: "atenea",
    image: "imagenes/atenea/RUBOR DUO ATENEA PINK CRUSH.png"
  }
];

    let cart = [];

    const productsGrid = document.getElementById('productsGrid');
    const cartButton = document.getElementById('cartButton');
    const cartDrawer = document.getElementById('cartDrawer'); // Asegúrate de que tu HTML tenga id="cartDrawer"
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const filterButtons = document.querySelectorAll('.filter-btn');

    
function renderProducts(filter = 'all', brand = null) {
    productsGrid.innerHTML = '';

    const filteredProducts = products.filter(product => {
        // Todos muestra absolutamente todas las categorías
        if (filter === 'all') {
            return true;
        }

        // Filtrar por marca dentro de maquillaje
        if (brand) {
            return product.category === 'maquillaje'
                && product.brand === brand;
        }

        // Filtrar por categoría
        return product.category === filter;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <p class="no-products">
                No hay productos disponibles en esta categoría todavía.
            </p>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-img"
                onerror="this.onerror=null; this.src='imagenes/sin-imagen.png';"
            >
            <div class="product-info">
                <div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        $${Number(product.price).toFixed(2)}
                    </div>
                </div>
                <button class="btn" onclick="addToCart(${product.id})">
                    Añadir al Carrito
                </button>
            </div>
        `;

        productsGrid.appendChild(card);
    });
}

// Filtros principales: Todos, Capilar y Lociones
filterButtons.forEach(btn => {
    // Maquillaje abre el modal, no filtra directamente
    if (btn.id === 'btnMaquillaje') return;

    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        renderProducts(btn.dataset.filter || 'all');
    });
});


    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartUI();
        openCartDrawer();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
    }

    function updateCartUI() {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-light);">El carrito está vacío</p>';
            cartTotal.textContent = '$0.00';
            return;
        }

        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    function openCartDrawer() {
        cartDrawer.classList.add('open');
        overlay.classList.add('active');
    }

    function closeCartDrawer() {
        cartDrawer.classList.remove('open');
        overlay.classList.remove('active');
    }

    // Eventos principales (ya configurados correctamente)
    cartButton.addEventListener('click', openCartDrawer);
    closeCart.addEventListener('click', closeCartDrawer);
    overlay.addEventListener('click', closeCartDrawer);

 // Función para generar la firma SHA-256 exigida por Wompi
async function generateIntegritySignature(reference, amountInCents, currency, secret) {
    const chain = `${reference}${amountInCents}${currency}${secret}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(chain);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function checkout() {
    if (!cart || cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }

    // 1. Limpiamos y calculamos el total numérico exacto
    let totalCOP = cart.reduce((sum, item) => {
        let priceNum = typeof item.price === 'string' 
            ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) 
            : Number(item.price);
        return sum + (priceNum * (Number(item.quantity) || 1));
    }, 0);

    if (isNaN(totalCOP) || totalCOP < 1000) {
        alert('El monto mínimo para procesar el pago con Wompi es de $1.000 COP.');
        return;
    }

    // 2. Parámetros para la transacción en Wompi
    let amountInCents = Math.round(totalCOP * 100);
    let reference = 'DUEVE-' + Date.now();
    let currency = 'COP';
    let integritySecret = 'prod_integrity_MSdS1nV2Mfn64gh7XirtCIkzKMTCo0cB';

    try {
        // 3. Calculamos la firma de integridad en tiempo real
        let signature = await generateIntegritySignature(reference, amountInCents, currency, integritySecret);

        // 4. Instanciamos e inicializamos el Widget de Wompi con la firma
        var checkoutWidget = new WidgetCheckout({
            currency: currency,
            amountInCents: amountInCents,
            reference: reference,
            publicKey: 'pub_prod_eambP8bNy1zXLL3pHa30peUhYgtqat0',
            signature: { integrity: signature },
            redirectUrl: window.location.href
        });

        // 5. Abrimos la pasarela de pago
        checkoutWidget.open(function (result) {
            var transaction = result.transaction;
            if (transaction && transaction.status === 'APPROVED') {
                alert('¡Gracias por tu compra! Tu pago ha sido aprobado.');
                cart = [];
                if (typeof updateCartUI === 'function') updateCartUI();
                if (typeof closeCartDrawer === 'function') closeCartDrawer();
            }
        });
    } catch (error) {
        console.error('Error al generar la firma o iniciar Wompi:', error);
        alert('Ocurrió un error al iniciar el proceso de pago. Inténtalo de nuevo.');
    }
}


const btnMaquillaje = document.getElementById('btnMaquillaje');
const modalMaquillaje = document.getElementById('modalMaquillaje');
const closeModal = document.getElementById('closeModal');

if (btnMaquillaje && modalMaquillaje && closeModal) {

    // Abrir la ventana de marcas
    btnMaquillaje.addEventListener('click', () => {
        modalMaquillaje.classList.add('active');
    });

    // Cerrar con la X
    closeModal.addEventListener('click', () => {
        modalMaquillaje.classList.remove('active');
    });

    // Cerrar al pulsar fuera de la ventana
    modalMaquillaje.addEventListener('click', event => {
        if (event.target === modalMaquillaje) {
            modalMaquillaje.classList.remove('active');
        }
    });

    // Filtrar por marca
    modalMaquillaje.querySelectorAll('.brand-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const brand = btn.dataset.brand.toLowerCase();

            filterButtons.forEach(b => b.classList.remove('active'));
            btnMaquillaje.classList.add('active');

            renderProducts('maquillaje', brand);

            modalMaquillaje.classList.remove('active');
        });
    });
}

// Mostrar todo el catálogo al cargar la página



// Comprobar que los elementos existen
if (btnMaquillaje && modalMaquillaje && closeModal) {

  // Abrir el modal de marcas
  


console.log('Botón maquillaje:', btnMaquillaje);
console.log('Modal maquillaje:', modalMaquillaje);

if (btnMaquillaje && modalMaquillaje) {
  btnMaquillaje.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    modalMaquillaje.classList.toggle('active');

    console.log(
      'Modal visible:',
      modalMaquillaje.classList.contains('active')
    );
  });
}


  // Cerrar con la X
  closeModal.addEventListener('click', () => {
    modalMaquillaje.classList.remove('active');
  });

  // Cerrar al pulsar fuera de la ventana
  modalMaquillaje.addEventListener('click', (e) => {
    if (e.target === modalMaquillaje) {
      modalMaquillaje.classList.remove('active');
    }
  });

  // Seleccionar una marca
  document.querySelectorAll('#modalMaquillaje .brand-btn')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        const brand = btn.dataset.brand;

        console.log('Marca seleccionada:', brand);

        modalMaquillaje.classList.remove('active');

        // Aquí conectaremos el filtro de productos
      });
    });
}
renderProducts('all');