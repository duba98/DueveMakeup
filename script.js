/*
  Dueve Makeup - catálogo, filtros, carrito y Wompi.
  IMPORTANTE: la firma de integridad se solicita al backend /api/wompi-signature.
  Nunca coloques la clave secreta de Wompi en este archivo.
*/

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

const productsGrid = document.getElementById("productsGrid");
const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartButton = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartCountDrawer = document.getElementById("cartCountDrawer");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");
const modalMaquillaje = document.getElementById("modalMaquillaje");
const closeModalButton = document.getElementById("closeModal");
const catalogTitle = document.getElementById("catalogTitle");
const catalogSubtitle = document.getElementById("catalogSubtitle");

const moneyCOP = value => new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
}).format(value);

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function renderProducts(filter = "all", brand = null) {
  productsGrid.innerHTML = "";

  const filteredProducts = products.filter(product => {
    if (filter === "all") return true;

    if (brand) {
      return normalize(product.category) === "maquillaje" &&
             normalize(product.brand) === normalize(brand);
    }

    return normalize(product.category) === normalize(filter);
  });

  if (catalogTitle) {
    if (brand) {
      const brandButton = document.querySelector(`.brand-btn[data-brand="${CSS.escape(brand)}"]`);
      catalogTitle.textContent = brandButton ? brandButton.textContent.trim() : brand;
    } else {
      const titles = {
        all: "Todos los productos",
        maquillaje: "Maquillaje",
        capilar: "Productos capilares",
        lociones: "Lociones"
      };
      catalogTitle.textContent = titles[filter] || "Productos";
    }
  }

  if (catalogSubtitle) {
    catalogSubtitle.textContent = `${filteredProducts.length} producto${filteredProducts.length === 1 ? "" : "s"} encontrado${filteredProducts.length === 1 ? "" : "s"}.`;
  }

  if (!filteredProducts.length) {
    const empty = document.createElement("p");
    empty.className = "no-products";
    empty.textContent = brand
      ? "Todavía no hay productos registrados para esta marca."
      : "Todavía no hay productos registrados en esta categoría.";
    productsGrid.appendChild(empty);
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.className = "product-img";
    image.loading = "lazy";
    image.onerror = () => {
      image.onerror = null;
      image.src = "imagenes/sin-imagen.png";
      image.alt = `${product.name} (imagen no disponible)`;
    };

    const info = document.createElement("div");
    info.className = "product-info";

    const details = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.name;

    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = moneyCOP(Number(product.price) || 0);

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "btn add-cart-btn";
    addButton.textContent = "Añadir al carrito";
    addButton.addEventListener("click", () => addToCart(product.id));

    details.append(title, price);
    info.append(details, addButton);
    card.append(image, info);
    productsGrid.appendChild(card);
  });
}

function setActiveFilter(filter, brand = null) {
  document.querySelectorAll(".filter-btn").forEach(button => {
    const isMakeupButton = button.id === "btnMaquillaje" || button.id === "btnMaquillajeMobile";
    const active = brand ? isMakeupButton : (!isMakeupButton && normalize(button.dataset.filter) === filter);
    button.classList.toggle("active", active);
  });
}

function openMakeupModal() {
  modalMaquillaje.classList.add("active");
  modalMaquillaje.setAttribute("aria-hidden", "false");
  closeModalButton.focus();
}

function closeMakeupModal() {
  modalMaquillaje.classList.remove("active");
  modalMaquillaje.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".filter-btn[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    const filter = normalize(button.dataset.filter) || "all";
    setActiveFilter(filter);
    renderProducts(filter);
    document.getElementById("productos").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("btnMaquillaje").addEventListener("click", openMakeupModal);
document.getElementById("btnMaquillajeMobile").addEventListener("click", openMakeupModal);
closeModalButton.addEventListener("click", closeMakeupModal);

modalMaquillaje.addEventListener("click", event => {
  if (event.target === modalMaquillaje) closeMakeupModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMakeupModal();
    closeCartDrawer();
  }
});

document.querySelectorAll(".brand-btn").forEach(button => {
  button.addEventListener("click", () => {
    const brand = normalize(button.dataset.brand);
    setActiveFilter("maquillaje", brand);
    renderProducts("maquillaje", brand);
    closeMakeupModal();
    document.getElementById("productos").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function addToCart(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;

  if (!Number.isFinite(Number(product.price)) || Number(product.price) <= 0) {
    alert("Este producto todavía no tiene un precio válido. Actualiza su precio antes de comprarlo.");
    return;
  }

  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCartDrawer();
}

function changeQuantity(productId, change) {
  const item = cart.find(product => product.id === Number(productId));
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== Number(productId));
  }
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== Number(productId));
  updateCartUI();
}

function updateCartUI() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  cartCount.textContent = totalQuantity;
  cartCountDrawer.textContent = totalQuantity;
  cartTotal.textContent = moneyCOP(total);

  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent = "El carrito está vacío.";
    cartItemsContainer.appendChild(empty);
    checkoutButton.disabled = true;
    return;
  }

  checkoutButton.disabled = false;

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const info = document.createElement("div");
    info.className = "cart-item-info";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = `${moneyCOP(item.price)} c/u`;

    const subtotal = document.createElement("p");
    subtotal.className = "cart-item-subtotal";
    subtotal.textContent = `Subtotal: ${moneyCOP(item.price * item.quantity)}`;

    const controls = document.createElement("div");
    controls.className = "quantity-controls";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.className = "quantity-btn";
    minus.textContent = "−";
    minus.setAttribute("aria-label", `Quitar una unidad de ${item.name}`);
    minus.addEventListener("click", () => changeQuantity(item.id, -1));

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.className = "quantity-btn";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `Añadir una unidad de ${item.name}`);
    plus.addEventListener("click", () => changeQuantity(item.id, 1));

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.setAttribute("aria-label", `Eliminar ${item.name} del carrito`);
    remove.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
    remove.addEventListener("click", () => removeFromCart(item.id));

    controls.append(minus, quantity, plus, remove);
    info.append(name, price, subtotal);
    row.append(info, controls);
    cartItemsContainer.appendChild(row);
  });
}

function openCartDrawer() {
  cartDrawer.classList.add("open");
  overlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "true");
}

cartButton.addEventListener("click", openCartDrawer);
closeCartButton.addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", closeCartDrawer);

/*
  Wompi:
  1) El total se calcula aquí a partir del carrito actual.
  2) El frontend pide al servidor que firme reference + amountInCents + currency.
  3) El servidor devuelve la firma sin exponer la clave secreta.
  Configura en server.js la clave pública de tu comercio y la URL del servidor.
*/

let checkoutInProgress = false;


async function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  if (cart.some(item => !Number.isFinite(Number(item.price)) || Number(item.price) <= 0)) {
    alert("Hay productos sin precio válido en el carrito. Revisa los precios antes de pagar.");
    return;
  }

  if (typeof WidgetCheckout === "undefined") {
    alert("No se pudo cargar Wompi. Comprueba tu conexión e inténtalo de nuevo.");
    return;
  }

  checkoutButton.disabled = true;
  checkoutButton.textContent = "Preparando pago...";

  checkoutInProgress = true;

  try {
    // El servidor valida IDs/cantidades y calcula el importe con precios propios.
    const response = await fetch("/api/wompi-signature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart.map(item => ({ id: item.id, quantity: item.quantity }))
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "El servidor no pudo preparar el pago.");
    }
    if (!data.signature || !data.publicKey || !data.reference || !data.amountInCents) {
      throw new Error("La respuesta del servidor está incompleta.");
    }

    const checkoutWidget = new WidgetCheckout({
  currency: data.currency,
  amountInCents: data.amountInCents,
  reference: data.reference,
  publicKey: data.publicKey,
  signature: { integrity: data.signature },
  redirectUrl: window.location.href
});

    checkoutWidget.open(result => {
      const transaction = result && result.transaction;
      if (transaction && transaction.status === "APPROVED") {
        // El callback del navegador no es una verificación final del pago.
        // Para confirmar pedidos reales, valida la transacción desde el servidor/webhook.
        alert("Wompi reportó el pago como aprobado. La confirmación final del pedido debe verificarse en el servidor.");
        cart = [];
        updateCartUI();
        closeCartDrawer();
      } else if (transaction && transaction.status) {
        alert(`Estado del pago: ${transaction.status}.`);
      }
    });
  } 
catch (error) {
    console.error("Error al iniciar Wompi:", error);

    const detalle = error?.message || String(error);
    alert("Error al iniciar el pago: " + detalle);
  } finally {
  checkoutInProgress = false;
  checkoutButton.disabled = cart.length === 0;
  checkoutButton.textContent = "Finalizar compra con Wompi";
}

}
checkoutButton.addEventListener("click", checkout);

// Compatibilidad con cualquier botón antiguo que invoque checkout().
window.checkout = checkout;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

updateCartUI();
renderProducts("all");
