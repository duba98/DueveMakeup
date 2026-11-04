
/*
 * DUEVE MAKEUP
 * Catálogo, filtros, galería, variantes, carrito y Wompi.
 * IMPORTANTE: nunca coloques la clave secreta de Wompi aquí.
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
    id: 101,
    name: "Bálsamo de labios Bloom Honey",
    price: 0,
    category: "maquillaje",
    brand: "bloomshell",
    image: "imagenes/BLOOMSHELL/Bálsamo de labios bloom honey_.png"
  },
  {
    id: 102,
    name: "Beauty Blender",
    price: 0,
    category: "maquillaje",
    brand: "bloomshell",
    image: "imagenes/BLOOMSHELL/Beauty blender xl_.png"
  },
  {
    id: 103,
    name: "Rubor Bloomshell",
    price: 0,
    category: "maquillaje",
    brand: "bloomshell",
    image: "imagenes/BLOOMSHELL/Archivo_080.png"
  },
{
  id:104,
  name:"base cushion",
  price: 0,
  category: "maquillaje",
  brand: "bloomshell",
  image: "imagenes/BLOOMSHELL/Base cushion %23%E2%80%942-3-4-5-6-7-8.png",
  variants: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8"]
},
{id:105,
  name:"bloom bronzer iluminoso 2 en 1 #2",
  price:0,
  category: "maquillaje",
  brand: "bloomshell",
  image: "imagenes/BLOOMSHELL/Bloom bronzer luminoso 2 en 1 %2302.png"
},
{
  id:106,
  name:"bloom bronzer matte 2 en 1 #2",
  price:0,
  category: "maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom bronzer matte 2 en 1 %232.png"
},
{
  id:107,
  name:"bloom duo perfect",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom dúo perfect.png"
},
{
  id:108,
  name:"Bloom dulce duo tint",
  price:0,
  category:"maquillaje",
  brand:"bloonshell",
  image:"imagenes/BLOOMSHELL/Bloom dulce duo tint_.png"
},
{
  id:108,
  name:"Bloom esplendor tono 1",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom esplendor tono 1.png"
},
{
  id:109,
  name:"bloom gelei berry",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom gelei berry.png",
  images: [
    "imagenes/BLOOMSHELL/bloom gelei berry.png",
    "imagenes/BLOOMSHELL/Bloom gelei cherry.png",
    "imagenes/BLOOMSHELL/Bloom gelei pink.png",
  ],
  variants: ["berry", "cherry", "pink"]
},
{
  id:110,
  name:"bloom hydra 2 en 1",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom hydra 2 en 1 %231-2-3-4.png",
  variants: ["#1", "#2", "#3", "#4"]
},
{
  id:111,
  name:"bloom jelly fusion",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom jelly fusión.png"
},
{
  id:112,
  name:"bloom lip kit",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom lip kit tono 3_.jpg",
  images: [
    "imagenes/BLOOMSHELL/Bloom lip kit tono 4.jpg"
  ],
  variants:["tono #3", "tono #4"]
},
{
  id:113,
  name:"BLOOM OIL CONTROl",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/BLOOM OIL CONTROl.jpg",
},
{
  id:113,
  name:"bloom oil stop",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom oil stop_.png",
},


  // MAQUILLAJE - PROSA
  {
    id: 1000,
    name: "Pestañina Prosa",
    price: 0,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_000.png",
    images: [
      "imagenes/PROSA/Archivo_000.png",
      "imagenes/PROSA/Archivo_001.png",
      "imagenes/PROSA/Archivo_002.png",
      "imagenes/PROSA/Archivo_003.png",
      "imagenes/PROSA/Archivo_004.png",
      "imagenes/PROSA/Archivo_005.png",
      "imagenes/PROSA/Archivo_007.png"
    ],
    variants: ["Negro", "Gris", "Morado", "Café", "plata", "fucsia", "vino tinto"]
  },
  {
    id: 1001,
    name: "Aceite para pestañas",
    price: 0,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_006.png"
  },
  {
    id: 1002,
    name: "Tratamiento para pestañas",
    price: 0,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_008.png"
  },
  {
    id: 1003,
    name: "Pestañina a prueba de agua",
    price: 0,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_009.png"
  },
  //MAQUILLAJE ANI-K
  //MAQUILLAJE BONSHIK
  //MAQUILLAJE ELAYA
  //MAQUILLAJE GIRLY
  //MAQUILLAJE MAYBELLINE
  //MAQUILLAJE MYK
  //MAQUILLAJE NAILEN
  //MAQUILLAJE RAQUEL
  //MQUILLAJE RUBIROSE
  {
    id:1151,
    name:"labial matte",
    price:0,
    category:"maquillaje",
    brand: "ruby-rose",
    image: "imagenes/RUBY ROSE/labial-matte.png"
  },
  //MAQUILLAJE SAGUI
  //MAQUILLAJE SAMY
  //MAQUILLAJE VOGUE
  // CAPILAR MARIANA ZAPATA
  {
    id: 10001,
    name: "Shampoo Mariana Zapata (completar)",
    price: 0,
    category: "capilar",
    brand: "mariana zapata",
    image: "imagenes/sin-imagen.png"
  },
  //CAPILAR ANYELUZ
  {
    id: 10002,
    name: "Producto Anyeluz (completar)",
    price: 0,
    category: "capilar",
    brand: "anyeluz",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR MILAGROS
  {
    id: 10003,
    name: "Producto Milagros (completar)",
    price: 0,
    category: "capilar",
    brand: "milagros",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR RITUAL BOTANICO
  {
    id: 10004,
    name: "Producto Ritual Botánico (completar)",
    price: 0,
    category: "capilar",
    brand: "ritual botanico",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR CLICK HAIR
  {
    id: 10005,
    name: "Producto Click Hair (completar)",
    price: 0,
    category: "capilar",
    brand: "click hair",
    image: "imagenes/sin-imagen.png"
  },
  //CAPILAR KABA
  {
    id: 10006,
    name: "Producto Kaba (completar)",
    price: 0,
    category: "capilar",
    brand: "kaba",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR POCION
  {
    id: 10007,
    name: "Producto Pocion (completar)",
    price: 0,
    category: "capilar",
    brand: "pocion",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR MENTA HAIR
  {
    id: 10008,
    name: "Producto Menta Hair (completar)",
    price: 0,
    category: "capilar",
    brand: "menta hair",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR LECHE PAL PELO
  {
    id: 10009,
    name: "Producto Leche Pal Pelo (completar)",
    price: 0,
    category: "capilar",
    brand: "leche pal pelo",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR MAGIC HAIR
  {
    id: 10010,
    name: "Producto Magic Hair (completar)",
    price: 0,
    category: "capilar",
    brand: "magic hair",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR MARIA SALOME
  {
    id: 10011,
    name: "Producto María Salomé (completar)",
    price: 0,
    category: "capilar",
    brand: "maria salome",
    image: "imagenes/sin-imagen.png"
  },
  // CAPILAR LEHIT
  {
    id: 10012,
    name: "Producto Lehit (completar)",
    price: 0,
    category: "capilar",
    brand: "lehit",
    image: "imagenes/sin-imagen.png"
  },
  //CAPILAR ELVIVE
  {
    id: 10013,
    name: "Producto Elvive (completar)",
    price: 0,
    category: "capilar",
    brand: "elvive",
    image: "imagenes/sin-imagen.png"
  },
  //CAPILAR PONTO
  {
    id: 10014,
    name: "Producto Ponto (completar)",
    price: 0,
    category: "capilar",
    brand: "ponto",
    image: "imagenes/sin-imagen.png"
  },

  // LOCIONES HOMBRE
  {
    id: 201,
    name: "Asad Lattafa",
    price: 0,
    category: "lociones",
    brand: "hombre",
    image: "imagenes/locionhombre/asad-lattafa.png"
  },
  // LOCIONES MUJER
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
// 2. VARIABLES GENERALES
// ==================================================

let cart = [];
let selectedDetailProduct = null;
let selectedDetailVariant = "";
let checkoutInProgress = false;

const $ = selector => document.querySelector(selector);

const productsGrid = $("#productsGrid");
const catalogTitle = $("#catalogTitle");
const catalogSubtitle = $("#catalogSubtitle");

const cartButton = $("#cartButton");
const cartDrawer = $("#cartDrawer");
const closeCartButton = $("#closeCart");
const overlay = $("#overlay");
const cartItemsContainer = $("#cartItems");
const cartCount = $("#cartCount");
const cartCountDrawer = $("#cartCountDrawer");
const cartTotal = $("#cartTotal");
const checkoutButton = $("#checkoutButton");

const makeupModal = $("#modalMaquillaje");
const capilarModal = $("#modalcapilar");
const locionesModal = $("#modallociones");

const moneyCOP = value =>
  new Intl.NumberFormat("es-CO", {
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

        <div id="detailImageThumbnails"
             class="detail-image-thumbnails">
        </div>
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
// 4. ESTILOS DE LA VENTANA DE PRODUCTO
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

  .detail-image-thumbnails {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
  }

  .detail-thumbnail {
    width: 58px !important;
    height: 58px;
    object-fit: contain;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 4px;
    background: white;
  }

  .detail-thumbnail.selected {
    border: 2px solid #d46a84;
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
// 5. GALERÍA DE IMÁGENES
// ==================================================


function renderProductGallery(product) {
  const mainImage = $("#detailProductImage");
  const thumbnails = $("#detailImageThumbnails");

  if (!mainImage || !thumbnails || !product) return;

  // La primera imagen siempre será la misma de la tarjeta.
  const images = [
    product.image,
    ...(Array.isArray(product.images) ? product.images : [])
  ].filter(Boolean);

  const uniqueImages = [...new Set(images)];

  thumbnails.innerHTML = "";

  // Evitar conservar una fotografía del producto anterior.
  mainImage.removeAttribute("src");
  mainImage.alt = product.name;

  mainImage.onerror = () => {
    mainImage.onerror = null;
    console.error("No se pudo cargar la imagen:", mainImage.src);
    mainImage.alt = `${product.name} (imagen no disponible)`;
  };

  if (!uniqueImages.length) {
    thumbnails.style.display = "none";
    return;
  }

  mainImage.src = uniqueImages[0];

  if (uniqueImages.length <= 1) {
    thumbnails.style.display = "none";
    return;
  }

  thumbnails.style.display = "flex";

  uniqueImages.forEach((src, index) => {
    const thumb = document.createElement("img");

    thumb.src = src;
    thumb.alt = `${product.name} - foto ${index + 1}`;
    thumb.className = "detail-thumbnail";

    if (index === 0) {
      thumb.classList.add("selected");
    }

    thumb.onerror = () => {
      thumb.style.display = "none";
    };

    thumb.addEventListener("click", () => {
      mainImage.src = src;

      thumbnails.querySelectorAll(".detail-thumbnail")
        .forEach(img => img.classList.remove("selected"));

      thumb.classList.add("selected");
    });

    thumbnails.appendChild(thumb);
  });
}
