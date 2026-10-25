/*
 * DUEVE MAKEUP
 * Catálogo, filtros, productos ampliados, variantes, carrito y Wompi.
 * No coloques la clave secreta de Wompi en este archivo.
 */

// ==================================================
// 1. CATÁLOGO DE PRODUCTOS
// ==================================================

const products = [
  // MAQUILLAJE - ATENEA
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

  // MAQUILLAJE - BLOOMSHELL
  {
    id: 6,
    name: "Bálsamo de labios Bloom Honey",
    price: 0,
    category: "maquillaje",
    brand: "BLOOMSHELL",
    image: "imagenes/BLOOMSHELL/Bálsamo de labios bloom honey_.png"
  },
  {
    id: 8,
    name: "Beauty Blender",
    price: 0,
    category: "maquillaje",
    brand: "BLOOMSHELL",
    image: "imagenes/BLOOMSHELL/Beauty blender xl_.png"
  },
  {
    id: 9,
    name: "Rubor Bloomshell",
    price: 0,
    category: "maquillaje",
    brand: "BLOOMSHELL",
    image: "imagenes/BLOOMSHELL/Archivo_080.png"
  },

  // MAQUILLAJE - PROSA
  {
  id: 10,
  name: "Pestañina Prosa",
  price: 0,
  category: "maquillaje",
  brand: "prosa",

  // Foto principal del producto
  image: "imagenes/PROSA/Archivo_000.png",

  // Todas las fotos que se mostrarán en la galería
  images: [
    "imagenes/PROSA/Archivo_000.png",
    "imagenes/PROSA/Archivo_001.png",
    "imagenes/PROSA/Archivo_002.png",
    "imagenes/PROSA/ARCHIVO_003.png",
    "imagenes/PROSA/Archivo_004.png",
    "imagenes/PROSA/Archivo_005.png",
    "imagenes/PROSA/Archivo_007.png"
  ],

  // Colores disponibles
  variants: ["Negro", "Gris", "Rosado", "Morado", "Café"]
},
  {
    id: 16,
    name: "Aceite para pestañas",
    price: 0,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_006.png"
  },
  {
    id: 17,
    name: "Tratamiento para pestañas",
    price: 0,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_008.png"
  },
  {
    id: 125,
    name: "Pestañina a prueba de agua",
    price: 0,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_009.png"
  },

  // CAPILAR
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
    name: "Producto Pocion (completar)",
    price: 0,
    category: "capilar",
    brand: "pocion",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 108,
    name: "Producto Menta Hair (completar)",
    price: 0,
    category: "capilar",
    brand: "menta hair",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 109,
    name: "Producto Leche Pal Pelo (completar)",
    price: 0,
    category: "capilar",
    brand: "leche pal pelo",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 110,
    name: "Producto Magic Hair (completar)",
    price: 0,
    category: "capilar",
    brand: "magic hair",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 111,
    name: "Producto María Salomé (completar)",
    price: 0,
    category: "capilar",
    brand: "maria salome",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 112,
    name: "Producto Lehit (completar)",
    price: 0,
    category: "capilar",
    brand: "lehit",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 113,
    name: "Producto Elvive (completar)",
    price: 0,
    category: "capilar",
    brand: "elvive",
    image: "imagenes/sin-imagen.png"
  },
  {
    id: 114,
    name: "Producto Ponto (completar)",
    price: 0,
    category: "capilar",
    brand: "ponto",
    image: "imagenes/sin-imagen.png"
  },

  // LOCIONES
  {
    id: 201,
    name: "Asad Lattafa",
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
];

// ==================================================
// 2. VARIABLES Y ELEMENTOS
// ==================================================

let cart = [];
let selectedDetailProduct = null;
let selectedDetailVariant = "";

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
}).format(Number(value) || 0);

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

// ==================================================
// 3. CREAR VENTANA DE PRODUCTO AMPLIADO
// ==================================================

const productModal = document.createElement("div");

productModal.id = "productDetailModal";
productModal.className = "product-detail-modal";
productModal.setAttribute("aria-hidden", "true");

productModal.innerHTML = `
  <div class="product-detail-content"
       role="dialog"
       aria-modal="true"
       aria-labelledby="detailProductName">

    <button type="button"
            class="product-detail-close"
            aria-label="Cerrar">&times;</button>

    <div class="product-detail-layout">

      <div class="product-detail-photo">
        <img id="detailProductImage" src="" alt="">
      </div>

      <div class="product-detail-info">
        <h2 id="detailProductName"></h2>

        <p id="detailProductPrice" class="product-price"></p>

        <div id="detailVariants"></div>

        <label for="detailQuantity">Cantidad</label>

        <input id="detailQuantity"
               type="number"
               min="1"
               value="1">

        <button type="button"
                id="detailAddButton"
                class="btn">
          Añadir al carrito
        </button>
      </div>

    </div>
  </div>
`;

document.body.appendChild(productModal);

// ==================================================
// 4. ESTILOS DE LA VENTANA
// ==================================================

const productModalStyles = document.createElement("style");

productModalStyles.textContent = `
  .product-detail-modal {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, .72);
    padding: 20px;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
  }

  .product-detail-modal.active {
    display: flex;
  }

  .product-detail-content {
    position: relative;
    background: white;
    color: #292329;
    width: 100%;
    max-width: 760px;
    padding: 28px;
    border-radius: 18px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .product-detail-close {
    position: absolute;
    top: 8px;
    right: 14px;
    border: 0;
    background: transparent;
    font-size: 32px;
    cursor: pointer;
    z-index: 1;
  }

  .product-detail-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px;
    align-items: start;
    padding-top: 12px;
  }

  .product-detail-photo img {
    width: 100%;
    max-height: 440px;
    object-fit: contain;
    display: block;
  }

  .product-detail-info label {
    display: block;
    margin: 18px 0 8px;
  }

  #detailVariants {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .variant-option {
    border: 1px solid #d8cbd0;
    background: white;
    color: #292329;
    border-radius: 20px;
    padding: 9px 13px;
    cursor: pointer;
  }

  .variant-option.selected {
    border: 2px solid #d46a84;
    background: #fff0f4;
    font-weight: bold;
  }

  #detailQuantity {
    display: block;
    width: 100%;
    max-width: 110px;
    padding: 10px;
  }

  #detailAddButton {
    margin-top: 20px;
    width: 100%;
    background: #d46a84;
    color: white;
    border: 0;
    padding: 13px;
    border-radius: 8px;
    cursor: pointer;
  }

  .product-img {
    cursor: zoom-in;
  }

  @media (max-width: 600px) {
    .product-detail-content {
      padding: 20px;
    }

    .product-detail-layout {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .product-detail-photo img {
      max-height: 280px;
    }
  }
`;

document.head.appendChild(productModalStyles);

// ==================================================
// 5. MOSTRAR Y FILTRAR PRODUCTOS
// ==================================================

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
    image.alt = product.name;
    image.loading = "lazy";
    image.src = product.image || "";

    // Al pulsar la foto se abre la ventana ampliada.
    image.addEventListener("click", () => {
      openProductModal(product.id);
    });

    // Evita un bucle de errores si falta la imagen.
    image.onerror = () => {
      image.onerror = null;
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
    price.textContent = moneyCOP(product.price);

    const addButton = document.createElement("button");

    addButton.type = "button";
    addButton.className = "btn add-cart-btn";

    addButton.textContent = product.variants?.length
      ? "Elegir color"
      : "Añadir al carrito";

    addButton.addEventListener("click", () => {
      if (product.variants?.length) {
        openProductModal(product.id);
      } else {
        addToCart(product.id);
      }
    });

    details.append(title, price);
    info.append(details, addButton);
    card.append(image, info);

    productsGrid.appendChild(card);
  });
}

// ==================================================
// 6. FILTROS ACTIVOS
// ==================================================

function setActiveFilter(filter, brand = null) {
  document.querySelectorAll(".filter-btn").forEach(button => {
    const isModalButton = [
      "btnMaquillaje",
      "btnMaquillajeMobile",
      "btnCapilar",
      "btnCapilarMobile",
      "btnLociones",
      "btnLocionesMobile"
    ].includes(button.id);

    const active = brand
      ? false
      : (!isModalButton &&
         normalize(button.dataset.filter) === normalize(filter));

    button.classList.toggle("active", active);
  });
}

// ==================================================
// 7. MODALES DE CATEGORÍAS
// ==================================================

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
  document.getElementById(buttonId)?.addEventListener("click", () => {
    openModal(modal);
  });
}

bindModalButton("btnMaquillaje", makeupModal);
bindModalButton("btnMaquillajeMobile", makeupModal);

bindModalButton("btnCapilar", capilarModal);
bindModalButton("btnCapilarMobile", capilarModal);

bindModalButton("btnLociones", locionesModal);
bindModalButton("btnLocionesMobile", locionesModal);

document.getElementById("closeModal")?.addEventListener("click", () => {
  closeModal(makeupModal);
});

document.getElementById("closeCapilar")?.addEventListener("click", () => {
  closeModal(capilarModal);
});

document.getElementById("closeLociones")?.addEventListener("click", () => {
  closeModal(locionesModal);
});

[makeupModal, capilarModal, locionesModal].forEach(modal => {
  modal?.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

// Botones que tienen data-filter en index.html.
document.querySelectorAll(".filter-btn[data-filter]").forEach(button => {
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

// Botones de marcas y subcategorías.
document.querySelectorAll(".brand-btn").forEach(button => {
  button.addEventListener("click", () => {
    const brand = normalize(button.dataset.brand);

    if (!brand) return;

    const category = normalize(
      button.dataset.category || "maquillaje"
    );

    setActiveFilter(category, brand);
    renderProducts(category, brand);
    closeAllModals();

    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ==================================================
// 8. ABRIR PRODUCTO Y SELECCIONAR COLOR
// ==================================================

function openProductModal(productId) {
  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) return;

  selectedDetailProduct = product;
  selectedDetailVariant = "";

  document.getElementById("detailProductName").textContent =
    product.name;

  document.getElementById("detailProductPrice").textContent =
    moneyCOP(product.price);

  const detailImage = document.getElementById("detailProductImage");

  detailImage.onerror = () => {
    detailImage.onerror = null;
    detailImage.alt = `${product.name} (imagen no disponible)`;
  };

  detailImage.src = product.image || "";
  detailImage.alt = product.name;

  document.getElementById("detailQuantity").value = 1;

  const variantsContainer = document.getElementById("detailVariants");

  variantsContainer.innerHTML = "";

  if (product.variants?.length) {
    const label = document.createElement("p");

    label.textContent = "Selecciona el color:";
    variantsContainer.appendChild(label);

    product.variants.forEach(variant => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "variant-option";
      button.textContent = variant;
      button.setAttribute("aria-pressed", "false");

      button.addEventListener("click", () => {
        selectedDetailVariant = variant;

        variantsContainer.querySelectorAll(".variant-option")
          .forEach(option => {
            const selected = option === button;

            option.classList.toggle("selected", selected);
            option.setAttribute("aria-pressed", String(selected));
          });
      });

      variantsContainer.appendChild(button);
    });
  }

  productModal.classList.add("active");
  productModal.setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  productModal.classList.remove("active");
  productModal.setAttribute("aria-hidden", "true");
}

productModal.querySelector(".product-detail-close")
  .addEventListener("click", closeProductModal);

productModal.addEventListener("click", event => {
  if (event.target === productModal) {
    closeProductModal();
  }
});

document.getElementById("detailAddButton")
  .addEventListener("click", () => {
    if (!selectedDetailProduct) return;

    if (
      selectedDetailProduct.variants?.length &&
      !selectedDetailVariant
    ) {
      alert("Selecciona el color que deseas comprar.");
      return;
    }

    const quantity = Number(
      document.getElementById("detailQuantity").value
    );

    if (!Number.isInteger(quantity) || quantity < 1) {
      alert("Introduce una cantidad válida.");
      return;
    }

    const added = addToCart(
      selectedDetailProduct.id,
      selectedDetailVariant,
      quantity
    );

    if (added) {
      closeProductModal();
    }
  });

// ==================================================
// 9. AÑADIR PRODUCTOS AL CARRITO
// ==================================================

function addToCart(productId, variant = "", quantity = 1) {
  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) return false;

  // Los productos con variantes requieren selección.
  if (product.variants?.length && !variant) {
    openProductModal(product.id);
    return false;
  }

  // No permitir comprar productos sin precio.
  if (
    !Number.isFinite(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    alert(
      "Este producto todavía no tiene un precio válido. Actualiza su precio antes de comprarlo."
    );

    return false;
  }

  // Cada color se guarda como un producto distinto en el carrito.
  const cartKey = `${product.id}::${variant || ""}`;

  const existingItem = cart.find(
    item => item.cartKey === cartKey
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      variant,
      cartKey,
      quantity
    });
  }

  updateCartUI();
  openCartDrawer();

  return true;
}

// ==================================================
// 10. CAMBIAR CANTIDADES Y ELIMINAR DEL CARRITO
// ==================================================

function changeQuantity(cartKey, change) {
  const item = cart.find(
    product => product.cartKey === cartKey
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(
      product => product.cartKey !== cartKey
    );
  }

  updateCartUI();
}

function removeFromCart(cartKey) {
  cart = cart.filter(
    item => item.cartKey !== cartKey
  );

  updateCartUI();
}

// ==================================================
// 11. ACTUALIZAR INTERFAZ DEL CARRITO
// ==================================================

function updateCartUI() {
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  if (cartCount) {
    cartCount.textContent = totalQuantity;
  }

  if (cartCountDrawer) {
    cartCountDrawer.textContent = totalQuantity;
  }

  if (cartTotal) {
    cartTotal.textContent = moneyCOP(total);
  }

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("p");

    empty.className = "empty-cart";
    empty.textContent = "El carrito está vacío.";

    cartItemsContainer.appendChild(empty);

    if (checkoutButton) {
      checkoutButton.disabled = true;
    }

    return;
  }

  if (checkoutButton) {
    checkoutButton.disabled = false;
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const info = document.createElement("div");
    info.className = "cart-item-info";

    const name = document.createElement("h3");

    name.textContent = item.variant
      ? `${item.name} - Color: ${item.variant}`
      : item.name;

    const price = document.createElement("p");
    price.textContent = `${moneyCOP(item.price)} c/u`;

    const subtotal = document.createElement("p");
    subtotal.className = "cart-item-subtotal";

    subtotal.textContent =
      `Subtotal: ${moneyCOP(item.price * item.quantity)}`;

    const controls = document.createElement("div");
    controls.className = "quantity-controls";

    const minus = document.createElement("button");

    minus.type = "button";
    minus.className = "quantity-btn";
    minus.textContent = "−";

    minus.setAttribute(
      "aria-label",
      `Quitar una unidad de ${item.name}`
    );

    minus.addEventListener("click", () => {
      changeQuantity(item.cartKey, -1);
    });

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;

    const plus = document.createElement("button");

    plus.type = "button";
    plus.className = "quantity-btn";
    plus.textContent = "+";

    plus.setAttribute(
      "aria-label",
      `Añadir una unidad de ${item.name}`
    );

    plus.addEventListener("click", () => {
      changeQuantity(item.cartKey, 1);
    });

    const remove = document.createElement("button");

    remove.type = "button";
    remove.className = "remove-btn";

    remove.setAttribute(
      "aria-label",
      `Eliminar ${item.name} del carrito`
    );

    remove.innerHTML =
      '<i class="fas fa-trash" aria-hidden="true"></i>';

    remove.addEventListener("click", () => {
      removeFromCart(item.cartKey);
    });

    controls.append(minus, quantity, plus, remove);
    info.append(name, price, subtotal);
    row.append(info, controls);

    cartItemsContainer.appendChild(row);
  });
}

// ==================================================
// 12. ABRIR Y CERRAR EL CARRITO
// ==================================================

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

// Escape cierra las ventanas abiertas.
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeAllModals();
    closeProductModal();
    closeCartDrawer();
  }
});

// ==================================================
// 13. PAGOS CON WOMPI
// ==================================================

let checkoutInProgress = false;

async function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  if (cart.some(item =>
    !Number.isFinite(Number(item.price)) ||
    Number(item.price) <= 0
  )) {
    alert(
      "Hay productos sin precio válido en el carrito. Revisa los precios antes de pagar."
    );

    return;
  }

  if (typeof WidgetCheckout === "undefined") {
    alert(
      "No se pudo cargar Wompi. Comprueba tu conexión e inténtalo de nuevo."
    );

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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: cart.map(item => ({
          id: item.id,
          quantity: item.quantity,
          variant: item.variant || ""
        }))
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        data.error || "El servidor no pudo preparar el pago."
      );
    }

    if (
      !data.signature ||
      !data.publicKey ||
      !data.reference ||
      !data.amountInCents
    ) {
      throw new Error(
        "La respuesta del servidor está incompleta."
      );
    }

    const checkoutWidget = new WidgetCheckout({
      currency: data.currency,
      amountInCents: data.amountInCents,
      reference: data.reference,
      publicKey: data.publicKey,
      signature: {
        integrity: data.signature
      },
      redirectUrl: window.location.href
    });

    checkoutWidget.open(result => {
      const transaction = result && result.transaction;

      if (
        transaction &&
        transaction.status === "APPROVED"
      ) {
        alert(
          "Wompi reportó el pago como aprobado. La confirmación final del pedido debe verificarse en el servidor."
        );

        cart = [];

        updateCartUI();
        closeCartDrawer();

      } else if (transaction && transaction.status) {
        alert(`Estado del pago: ${transaction.status}.`);
      }
    });

  } catch (error) {
    console.error("Error al iniciar Wompi:", error);

    alert(
      "Error al iniciar el pago: " +
      (error?.message || String(error))
    );

  } finally {
    checkoutInProgress = false;

    if (checkoutButton) {
      checkoutButton.disabled = cart.length === 0;
      checkoutButton.textContent =
        "Finalizar compra con Wompi";
    }
  }
}

checkoutButton?.addEventListener("click", checkout);

// Compatibilidad con botones antiguos.
window.checkout = checkout;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

// ==================================================
// 14. INICIAR LA TIENDA
// ==================================================

updateCartUI();
renderProducts("all");