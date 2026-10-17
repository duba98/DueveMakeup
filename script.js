
       const products = [
        { id: 1, name: "Base Líquida Atenea", price: 1500, category: "atenea", image: "imagenes/atenea/BASE LIQUIDA CREAM ATENEA 1ST X 30 ml.png" },
        { id: 2, name: "Fijador de Cejas", price: 1000, category: "atenea", image: "imagenes/atenea/GEL FIJADOR DE CEJAS.png" },
        { id: 3, name: "Iluminador Atenea Sublime", price: 0, category: "atenea", image: "imagenes/atenea/ILUMINADOR ATENEA SUBLIME.png" },
        { id: 4, name: "Polvo Suelto", price: 0, category: "atenea", image: "imagenes/atenea/POLVO SUELTO ATENEA TRASLUCIDO 1ST SCENE X 35 g.png" },
        { id: 5, name: "Rubor Dúo Atenea Pink Crush", price: 0, category: "atenea", image: "imagenes/atenea/RUBOR DUO ATENEA PINK CRUSH.png" }
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

    function renderProducts(filter = 'all') {
        productsGrid.innerHTML = '';
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://previews.123rf.com/images/koblizeek/koblizeek2208/koblizeek220800254/190563481-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?_gl=1*1bdftwn*_gcl_au*Nzg5NTE2NTE2LjE3OTIxOTAxMTg.*_ga*MTc1Nzc2NDg2MS4xNzkyMTkwMTE4*_ga_Y8798Z0549*czE3OTIxOTAxMTgkbzEkZzEkdDE3OTIxOTAxMTgkajYwJGwwJGgw'">
                <div class="product-info">
                    <div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                    </div>
                    <button class="btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }

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

 function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }

    // 1. Calculamos el total real de los productos en el carrito
    let totalCOP = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Si por alguna razón el total sigue en 0, evitamos el error de Wompi alertando al usuario
    if (totalCOP <= 0) {
        alert('Por favor, asegúrate de que los productos tengan un precio válido antes de pagar.');
        return;
    }

    // Wompi requiere el monto estrictamente en centavos (Ej: $35.000 COP = 3500000 centavos)
    let amountInCents = Math.round(totalCOP * 100);

    // 2. Generamos una referencia única para cada orden
    let reference = 'DUEVE-' + Date.now();

    // 3. Inicializamos el Widget oficial de Wompi con tus datos
    var checkout = new WidgetCheckout({
        currency: 'COP',
        amountInCents: amountInCents,
        reference: reference,
        publicKey: 'pub_prod_eambP8bNy1zXLL3pHa30peUhYgtqat0', // Tu llave pública de Wompi
        redirectUrl: window.location.href
    });

    // 4. Abrimos la ventana de pagos segura
    checkout.open(function (result) {
        var transaction = result.transaction;
        if (transaction && transaction.status === 'APPROVED') {
            alert('¡Pago aprobado con éxito! Gracias por tu compra.');
            cart = [];
            updateCartUI();
            closeCartDrawer();
        }
    });
}

    renderProducts();