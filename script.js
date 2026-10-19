/*
 * Dueve Makeup - catálogo, filtros, carrito y Wompi.
 *
 * PARA AGREGAR PRODUCTOS:
 * 1. Añade un objeto dentro del arreglo products, separado por coma.
 * 2. Usa un id numérico único.
 * 3. category debe ser "maquillaje", "capilar" o "lociones".
 * 4. brand debe coincidir exactamente (sin importar mayúsculas) con data-brand
 *    del botón correspondiente en index.html.
 * 5. image debe ser la ruta real de la imagen dentro del proyecto.
 *
 * No pongas la clave secreta de Wompi en este archivo.
 */

const products = [
  // ==================== MAQUILLAJE ====================
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
  },

  // ==================== CAPILAR ====================
  // EJEMPLOS: cambia nombre, precio e imagen por los datos reales.
  {
    id: 101,
    name: "Shampoo Mariana Zapata (completar)",
    price: 0,
    category: "capilar",
    brand: "mariana zapata",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 102,
    name: "Producto Anyeluz (completar)",
    price: 0,
    category: "capilar",
    brand: "anyeluz",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 103,
    name: "Producto Milagros (completar)",
    price: 0,
    category: "capilar",
    brand: "milagros",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 104,
    name: "Producto Ritual Botánico (completar)",
    price: 0,
    category: "capilar",
    brand: "ritual botanico",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 105,
    name: "Producto Click Hair (completar)",
    price: 0,
    category: "capilar",
    brand: "click hair",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 106,
    name: "Producto Kaba (completar)",
    price: 0,
    category: "capilar",
    brand: "kaba",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 107,
    name: "Producto pocion (completar)",
    price: 0,
    category: "capilar",
    brand: "pocion",
    image: "imagenes/sin-imagen.png"
  },
{
    id: 108,
    name: "Producto menta hair  (completar)",
    price: 0,
    category: "capilar",
    brand: "menta hair",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 109,
    name: "Producto leche pal pelo (completar)",
    price: 0,
    category: "capilar",
    brand: "leche pal pelo",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 110,
    name: "producto magic hair (completar)",
    price: 0,
    category: "capilar",
    brand: "magic hair",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 111,
    name: "Producto maria salome (completar)",
    price: 0,
    category: "capilar",
    brand: "mmaria salome",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 112,
    name: "Producto lehit (completar)",
    price: 0,
    category: "capilar",
    brand: "lehit",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 113,
    name: "Producto elvive (completar)",
    price: 0,
    category: "capilar",
    brand: "elvive",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 114,
    name: "Producto ponto (completar)",
    price: 0,
    category: "capilar",
    brand: "ponto",
    image: "imagenes/sin-imagen.png"
  },

  // ==================== LOCIONES ====================
  // EJEMPLOS: cambia nombre, precio e imagen por los datos reales.
  {
    id: 201,
    name: "asad-lattafa",
    price: 0,
    category: "lociones",
    brand: "hombre",
    image: "/imagenes/locionhombre/asad-lattafa.png"
  },
  {
    id: 202,
    name: "Loción para mujer (completar)",
    price: 0,
    category: "lociones",
    brand: "mujer",
    image: "imagenes/sin-imagen.png"
  }

  /*
   * COPIA ESTE MODELO PARA CADA PRODUCTO NUEVO:
   * ,
   * {
   *   id: 203,
   *   name: "Nombre del producto",
   *   price: 25000,
   *   category: "lociones",
   *   brand: "mujer",
   *   image: "imagenes/lociones/nombre-imagen.png"
   * }
   */
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
const catalogTitle = document.getElementById("catalogTitle");
const catalogSubtitle = document.getElementById("catalogSubtitle");

const makeupModal = document.getElementById("modalMaquillaje");
const capilarModal = document.getElementById("modalcapilar");
const locionesModal = document.getElementById("modallociones");

const moneyCOP = value => new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
}).format(value);

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function renderProducts(filter = "all", brand = null) {
  if (!productsGrid) return;

  productsGrid.innerHTML = "";

  const filteredProducts = products.filter(product => {
    if (filter === "all") return true;

    if (brand) {
      return normalize(product.category) === normalize(filter) &&
        normalize(product.brand) === normalize(brand);
    }

    return normalize(product.category) === normalize(filter);
  });

  if (catalogTitle) {
    if (brand) {
      const brandButton = [...document.querySelectorAll(".brand-btn")]
        .find(button =>
          normalize(button.dataset.category || "maquillaje") === normalize(filter) &&
          normalize(button.dataset.brand) === normalize(brand)
        );
      catalogTitle.textContent = brandButton
        ? brandButton.textContent.trim()
        : brand;
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
    const count = filteredProducts.length;
    catalogSubtitle.textContent =
      `${count} producto${count === 1 ? "" : "s"} encontrado${count === 1 ? "" : "s"}.`;
  }

  if (filteredProducts.length === 0) {
    const empty = document.createElement("p");
    empty.className = "no-products";
    empty.textContent = brand
      ? "Todavía no hay productos registrados para esta marca o subcategoría."
      : "Todavía no hay productos registrados en esta categoría.";
    productsGrid.appendChild(empty);
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.className = "product-img";
    image.alt = product.name || "Producto Dueve Makeup";
    image.loading = "lazy";
    image.src = product.image || "imagenes/sin-imagen.png";
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
    const isCategoryModalButton = [
      "btnMaquillaje", "btnMaquillajeMobile",
      "btnCapilar", "btnCapilarMobile",
      "btnLociones", "btnLocionesMobile"
    ].includes(button.id);

    const active = brand
      ? false
      : (!isCategoryModalButton && normalize(button.dataset.filter) === normalize(filter));

    button.classList.toggle("active", active);
  });
}

function openModal(modal) {
  if (!modal) return;
  closeAllModals();
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

function closeAllModals() {
  [makeupModal, capilarModal, locionesModal].forEach(closeModal);
}

function bindModalButton(buttonId, modal) {
  document.getElementById(buttonId)?.addEventListener("click", () => openModal(modal));
}

bindModalButton("btnMaquillaje", makeupModal);
bindModalButton("btnMaquillajeMobile", makeupModal);
bindModalButton("btnCapilar", capilarModal);
bindModalButton("btnCapilarMobile", capilarModal);
bindModalButton("btnLociones", locionesModal);
bindModalButton("btnLocionesMobile", locionesModal);

document.getElementById("closeModal")?.addEventListener("click", () => closeModal(makeupModal));
document.getElementById("closeCapilar")?.addEventListener("click", () => closeModal(capilarModal));
document.getElementById("closeLociones")?.addEventListener("click", () => closeModal(locionesModal));

[makeupModal, capilarModal, locionesModal].forEach(modal => {
  modal?.addEventListener("click", event => {
    if (event.target === modal) closeModal(modal);
  });
});

// Los botones "Todos" filtran directamente; las otras categorías abren su modal.
document.querySelectorAll('.filter-btn[data-filter]').forEach(button => {
  button.addEventListener("click", () => {
    const filter = normalize(button.dataset.filter) || "all";
    setActiveFilter(filter);
    renderProducts(filter);
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Al pulsar una marca o subcategoría, filtra usando su categoría y su brand.
document.querySelectorAll(".brand-btn").forEach(button => {
  button.addEventListener("click", () => {
    const brand = normalize(button.dataset.brand);
    if (!brand) return;

    const category = normalize(button.dataset.category || "maquillaje");
    setActiveFilter(category, brand);
    renderProducts(category, brand);
    closeAllModals();

    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeAllModals();
    closeCartDrawer();
  }
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

  if (cartCount) cartCount.textContent = totalQuantity;
  if (cartCountDrawer) cartCountDrawer.textContent = totalQuantity;
  if (cartTotal) cartTotal.textContent = moneyCOP(total);
  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent = "El carrito está vacío.";
    cartItemsContainer.appendChild(empty);
    if (checkoutButton) checkoutButton.disabled = true;
    return;
  }

  if (checkoutButton) checkoutButton.disabled = false;

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
  if (!cartDrawer || !overlay) return;
  cartDrawer.classList.add("open");
  overlay.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer?.classList.remove("open");
  overlay?.classList.remove("active");
  cartDrawer?.setAttribute("aria-hidden", "true");
  overlay?.setAttribute("aria-hidden", "true");
}

cartButton?.addEventListener("click", openCartDrawer);
closeCartButton?.addEventListener("click", closeCartDrawer);
overlay?.addEventListener("click", closeCartDrawer);

/*
 * Wompi:
 * El frontend solicita la firma al backend /api/wompi-signature.
 * El backend debe validar productos y precios; nunca expongas aquí la clave secreta.
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

  if (checkoutInProgress) return;
  checkoutInProgress = true;

  if (checkoutButton) {
    checkoutButton.disabled = true;
    checkoutButton.textContent = "Preparando pago...";
  }

  try {
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
        alert("Wompi reportó el pago como aprobado. La confirmación final del pedido debe verificarse en el servidor.");
        cart = [];
        updateCartUI();
        closeCartDrawer();
      } else if (transaction && transaction.status) {
        alert(`Estado del pago: ${transaction.status}.`);
      }
    });
  } catch (error) {
    console.error("Error al iniciar Wompi:", error);
    alert("Error al iniciar el pago: " + (error?.message || String(error)));
  } finally {
    checkoutInProgress = false;
    if (checkoutButton) {
      checkoutButton.disabled = cart.length === 0;
      checkoutButton.textContent = "Finalizar compra con Wompi";
    }
  }
}

checkoutButton?.addEventListener("click", checkout);

// Compatibilidad con cualquier botón antiguo que invoque estas funciones.
window.checkout = checkout;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

updateCartUI();
renderProducts("all");
