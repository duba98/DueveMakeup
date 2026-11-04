
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
    "id": 3001,
    "name": "Archivo 080",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Archivo_080.png"
  },
  {
    "id": 3002,
    "name": "Bloom bronzer luminoso 2 en 1 #02",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom bronzer luminoso 2 en 1 %2302.png"
  },
  {
    "id": 3003,
    "name": "Bloom esplendor tono 1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom esplendor tono 1.png"
  },
  {
    "id": 3004,
    "name": "Bloom hydra 2 en 1 #1-2-3-4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom hydra 2 en 1 %231-2-3-4.png"
  },
  {
    "id": 3005,
    "name": "BLOOM OIL CONTROL",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/BLOOM OIL CONTROL.jpg"
  },
  {
    "id": 3006,
    "name": "Borla Bloomshell corazón",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Borla Bloomshell corazón_.png"
  },
  {
    "id": 3007,
    "name": "Brillo color bloom glow",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo color bloom glow.png"
  },
  {
    "id": 3008,
    "name": "Brillo glossy color tono 4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo glossy color tono 4.png"
  },
  {
    "id": 3009,
    "name": "Brillo labial powder kiss #1 flower",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo labial powder kiss #1 flower.png"
  },
  {
    "id": 3010,
    "name": "BRILLO POKET KISS",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/BRILLO POKET KISS.jpg"
  },
  {
    "id": 3011,
    "name": "Contorno en barra bloom define #1 contour",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Contorno en barra bloom define %231 contour.png"
  },
  {
    "id": 3012,
    "name": "Crema en gel bloom essential",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Crema en gel bloom essential.png"
  },
  {
    "id": 3013,
    "name": "FIJADOR BLOOM 120ml",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/FIJADOR BLOOM 120ml.png"
  },
  {
    "id": 3014,
    "name": "Iluminador bloom glow #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Iluminador bloom glow %233.png"
  },
  {
    "id": 3015,
    "name": "Kit mini favoritos x6",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Kit mini favoritos x6.png"
  },
  {
    "id": 3016,
    "name": "Lápiz delineador labios coofe 02",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lápiz delineador labios coofe 02.jpg"
  },
  {
    "id": 3017,
    "name": "Lápiz para ojos negro (1)",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lápiz para ojos negro_(1).png"
  },
  {
    "id": 3018,
    "name": "Lip balm bloom sparkle kiss #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip balm bloom sparkle kiss %231.png"
  },
  {
    "id": 3019,
    "name": "Lip bloom coco nut",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip bloom coco nut.png"
  },
  {
    "id": 3020,
    "name": "Lip oil mimosa xl",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip oil mimosa xl.jpg"
  },
  {
    "id": 3021,
    "name": "Llavero dúo nude",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Llavero dúo nude.jpg"
  },
  {
    "id": 3022,
    "name": "Bálsamo de labios bloom honey",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bálsamo de labios bloom honey_.png"
  },
  {
    "id": 3023,
    "name": "Bloom bronzer matte 2 en 1 #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom bronzer matte 2 en 1 %232.png"
  },
  {
    "id": 3024,
    "name": "Bloom gelei berry",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom gelei berry.png"
  },
  {
    "id": 3025,
    "name": "Bloom jelly fusión",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom jelly fusión.png"
  },
  {
    "id": 3026,
    "name": "Bloom oil stop",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom oil stop_.png"
  },
  {
    "id": 3027,
    "name": "Borlas x3 Bloomshell",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Borlas x3 Bloomshell_.png"
  },
  {
    "id": 3028,
    "name": "Brillo glossy color #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo glossy color %232.png"
  },
  {
    "id": 3029,
    "name": "Brillo glossy color tono 6",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo glossy color tono 6.png"
  },
  {
    "id": 3030,
    "name": "Brillo labial powder kiss #2 rose",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo labial powder kiss %232 rose.png"
  },
  {
    "id": 3031,
    "name": "Bya bya brillo espejo",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bya bya brillo espejo.png"
  },
  {
    "id": 3032,
    "name": "Contorno en barra bloom define #3 dark",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Contorno en barra bloom define %233 dark.png"
  },
  {
    "id": 3033,
    "name": "Dúo contorno Bloomshell deep",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Dúo contorno Bloomshell deep_.png"
  },
  {
    "id": 3034,
    "name": "FIJADOR BLOOM FIX MINI 46ml",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/FIJADOR BLOOM FIX MINI 46ml.jpg"
  },
  {
    "id": 3035,
    "name": "Iluminador bloom glow #4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Iluminador bloom glow %234.png"
  },
  {
    "id": 3036,
    "name": "Kit mini infaltables x6",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Kit mini infaltables x6.png"
  },
  {
    "id": 3037,
    "name": "Lápiz delineador labios nude 04",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lápiz delineador labios nude 04.png"
  },
  {
    "id": 3038,
    "name": "Lápiz para ojos negro",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lápiz para ojos negro_.png"
  },
  {
    "id": 3039,
    "name": "Lip balm bloom sparkle kiss #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip balm bloom sparkle kiss %232.png"
  },
  {
    "id": 3040,
    "name": "Lip gloss bloom fusión",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip gloss bloom fusión.png"
  },
  {
    "id": 3041,
    "name": "LLAVERO BLOOM LATTE KISS",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/LLAVERO BLOOM LATTE KISS.jpg"
  },
  {
    "id": 3042,
    "name": "Llavero dúo shell tint+mini mimosa",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Llavero dúo shell tint+mini mimosa_.jpg"
  },
  {
    "id": 3043,
    "name": "Base cushion #—2-3-4-5-6-7-8",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Base cushion %23—2-3-4-5-6-7-8.png"
  },
  {
    "id": 3044,
    "name": "Bloom dulce duo tint",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom dulce duo tint_.png"
  },
  {
    "id": 3045,
    "name": "Bloom gelei cherry",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom gelei cherry.png"
  },
  {
    "id": 3046,
    "name": "Bloom lip kit tono 3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom lip kit tono 3_.jpg"
  },
  {
    "id": 3047,
    "name": "Bloom pincel perfect",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom pincel perfect_.png"
  },
  {
    "id": 3048,
    "name": "Brillo bloom Aqua fruit",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo bloom Aqua fruit.png"
  },
  {
    "id": 3049,
    "name": "Brillo glossy color #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo glossy color %233.png"
  },
  {
    "id": 3050,
    "name": "Brillo hidratante bloom gelee",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo hidratante bloom gelee.png"
  },
  {
    "id": 3051,
    "name": "Brillo labial powder kiss #3 mocha",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo labial powder kiss %233 mocha_.png"
  },
  {
    "id": 3052,
    "name": "Cera en barra Bloomshell",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Cera en barra Bloomshell_.png"
  },
  {
    "id": 3053,
    "name": "Contorno en barra define bronzy",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Contorno en barra define bronzy_.png"
  },
  {
    "id": 3054,
    "name": "Dúo contorno Bloomshell toasted",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Dúo contorno Bloomshell toasted_.png"
  },
  {
    "id": 3055,
    "name": "Fijador hidratante mist fix",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Fijador hidratante mist fix.jpg"
  },
  {
    "id": 3056,
    "name": "Iluminador crema bloom cosmic",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Iluminador crema bloom cosmic_.jpg"
  },
  {
    "id": 3057,
    "name": "LAMINADOR DE CEJAS XL",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/LAMINADOR DE CEJAS XL.jpg"
  },
  {
    "id": 3058,
    "name": "Lápiz delineador labios rose #3(1)",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lápiz delineador labios rose %233(1).png"
  },
  {
    "id": 3059,
    "name": "Limpiador bloom lumi gel",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Limpiador bloom lumi gel.jpg"
  },
  {
    "id": 3060,
    "name": "Lip balm sparkle kiss #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip balm sparkle kiss %233.png"
  },
  {
    "id": 3061,
    "name": "Lip oil bloom cherry",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip oil bloom cherry_.png"
  },
  {
    "id": 3062,
    "name": "Llavero bloom lush petan",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Llavero bloom lush petan_.png"
  },
  {
    "id": 3063,
    "name": "Llavero+espejo bloom mimosa",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Llavero+espejo bloom mimosa.jpg"
  },
  {
    "id": 3064,
    "name": "Beauty blender xl",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Beauty blender xl_.png"
  },
  {
    "id": 3065,
    "name": "Bloom dúo perfect",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom dúo perfect.png"
  },
  {
    "id": 3066,
    "name": "Bloom gelei pink",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom gelei pink.png"
  },
  {
    "id": 3067,
    "name": "Bloom lip kit tono 4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom lip kit tono 4.jpg"
  },
  {
    "id": 3068,
    "name": "Bloom rolon xl",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Bloom rolon xl.png"
  },
  {
    "id": 3069,
    "name": "Brillo bloom capuchi",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo bloom capuchi.jpg"
  },
  {
    "id": 3070,
    "name": "Brillo glossy color #5",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo glossy color %235.png"
  },
  {
    "id": 3071,
    "name": "Brillo labial bloom bombon",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo labial bloom bombon_.jpg"
  },
  {
    "id": 3072,
    "name": "Brillo mágico bloom crush",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Brillo mágico bloom crush_.png"
  },
  {
    "id": 3073,
    "name": "Cinta levanta busto Bloomshell",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Cinta levanta busto Bloomshell_.png"
  },
  {
    "id": 3074,
    "name": "Crema bloom repair",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Crema bloom repair_.png"
  },
  {
    "id": 3075,
    "name": "Estuche Bloomshell",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Estuche Bloomshell_.png"
  },
  {
    "id": 3076,
    "name": "Iluminador Bloom glow #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Iluminador Bloom glow %231.png"
  },
  {
    "id": 3077,
    "name": "Kit borla Bloomshell x7",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Kit borla Bloomshell x7.png"
  },
  {
    "id": 3078,
    "name": "Laminador de cejas",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Laminador de cejas_.jpg"
  },
  {
    "id": 3079,
    "name": "Lápiz delineador labios rose #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lápiz delineador labios rose %233.png"
  },
  {
    "id": 3080,
    "name": "Lip balm bloom latte",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip balm bloom latte.png"
  },
  {
    "id": 3081,
    "name": "Lip balm sparkle kiss #4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Lip balm sparkle kiss %234.png"
  },
  {
    "id": 3082,
    "name": "LIP OIL BLOOM SUBLIME XL",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/LIP OIL BLOOM SUBLIME XL.jpg"
  },
  {
    "id": 3083,
    "name": "Llavero dúo mimosa+mini",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/BLOOMSHELL/Llavero dúo mimosa+mini.png"
  },
  {
    "id": 3084,
    "name": "Paleta bloom luxury coral #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom luxury coral %232.png"
  },
  {
    "id": 3085,
    "name": "Paleta bloom nude #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom nude %231.png"
  },
  {
    "id": 3086,
    "name": "Paleta de rubores dolce bouquet",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta de rubores dolce bouquet.png"
  },
  {
    "id": 3087,
    "name": "Papel matificante con polvo suelto #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Papel matificante con polvo suelto %232_.png"
  },
  {
    "id": 3088,
    "name": "Pestañina lash resistente",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Pestañina lash resistente_.jpg"
  },
  {
    "id": 3089,
    "name": "Polvo compacto fusión",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto fusión.png"
  },
  {
    "id": 3090,
    "name": "Polvo compacto soft #4 nude",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %234 nude.png"
  },
  {
    "id": 3091,
    "name": "Polvo compacto soft #8 mocha",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %238 mocha_.png"
  },
  {
    "id": 3092,
    "name": "Polvo suelto mini Bloomshell traslúcido",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo suelto mini Bloomshell traslúcido_.png"
  },
  {
    "id": 3093,
    "name": "Primer bloom puff",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Primer bloom puff.png"
  },
  {
    "id": 3094,
    "name": "Rubor bloom touch huellita",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor bloom touch huellita_.png"
  },
  {
    "id": 3095,
    "name": "Rubor en barra cherry blossom #4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor en barra cherry blossom %234.png"
  },
  {
    "id": 3096,
    "name": "Rubor líquido bloom floral #5",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor líquido bloom floral %235.png"
  },
  {
    "id": 3097,
    "name": "Rubor luminoso shell #2 luminoso",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor luminoso shell %232 luminoso.png"
  },
  {
    "id": 3098,
    "name": "Rubor trío #8 magenta",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío #8 magenta_.png"
  },
  {
    "id": 3099,
    "name": "Rubor trío pink #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío pink %231.jpg"
  },
  {
    "id": 3100,
    "name": "Rubor trío vino #9",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío vino %239.png"
  },
  {
    "id": 3101,
    "name": "Shimmer blooming glow",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Shimmer blooming glow_.png"
  },
  {
    "id": 3102,
    "name": "Sombra individual matte bloom #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Sombra individual matte bloom %231.png"
  },
  {
    "id": 3103,
    "name": "Tinta de labios bloom bow",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Tinta de labios bloom bow_.png"
  },
  {
    "id": 3104,
    "name": "Paleta bloom luxury magenta #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom luxury magenta %233.png"
  },
  {
    "id": 3105,
    "name": "Paleta bloom nude #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom nude %232.png"
  },
  {
    "id": 3106,
    "name": "Paleta kiss love x6",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta kiss love x6.png"
  },
  {
    "id": 3107,
    "name": "Parches bye bye",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Parches bye bye_.png"
  },
  {
    "id": 3108,
    "name": "Polvo 2 en 1 bloom paqñ #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo 2 en 1 bloom paqñ %231.png"
  },
  {
    "id": 3109,
    "name": "Polvo compacto soft #1 ivory",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %231 ivory_.png"
  },
  {
    "id": 3110,
    "name": "Polvo compacto soft #5 sand",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %235 sand_.png"
  },
  {
    "id": 3111,
    "name": "Polvo suelto 4 en 1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo suelto 4 en 1.png"
  },
  {
    "id": 3112,
    "name": "Polvo suelto mini luminous banana malla",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo suelto mini luminous banana malla_.png"
  },
  {
    "id": 3113,
    "name": "PRIMER BLOOM PUMPLING",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/PRIMER BLOOM PUMPLING.png"
  },
  {
    "id": 3114,
    "name": "Rubor bloom touch love",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor bloom touch love_.png"
  },
  {
    "id": 3115,
    "name": "Rubor líquido bloom floral #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor líquido bloom floral %232.png"
  },
  {
    "id": 3116,
    "name": "Rubor líquido bloom floral #6",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor líquido bloom floral %236.png"
  },
  {
    "id": 3117,
    "name": "Rubor luminoso shell #3 sunsell",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor luminoso shell %233 sunsell.png"
  },
  {
    "id": 3118,
    "name": "Rubor trío cherry #6",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío cherry %236.png"
  },
  {
    "id": 3119,
    "name": "Rubor trío purple #7",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío purple %237.png"
  },
  {
    "id": 3120,
    "name": "Rubor en barra cherry blossom #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor en barra cherry blossom %232.png"
  },
  {
    "id": 3121,
    "name": "Sombra bloom seductor gold #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Sombra bloom seductor gold %232.png"
  },
  {
    "id": 3122,
    "name": "Sombra individual matte bloom #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Sombra individual matte bloom %232.png"
  },
  {
    "id": 3123,
    "name": "Tónico bloom repair mist",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Tónico bloom repair mist.png"
  },
  {
    "id": 3124,
    "name": "Paleta bloom luxury pink #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom luxury pink %231_.png"
  },
  {
    "id": 3125,
    "name": "Paleta bloom vibes #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom vibes %231.png"
  },
  {
    "id": 3126,
    "name": "Papel de arroz beautiful face",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Papel de arroz beautiful face.jpg"
  },
  {
    "id": 3127,
    "name": "Parches faciales x24",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Parches faciales x24.png"
  },
  {
    "id": 3128,
    "name": "Polvo 2 en 1 paqñ #2 rosado",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo 2 en 1 paqñ %232 rosado.png"
  },
  {
    "id": 3129,
    "name": "Polvo compacto soft #2 beige",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %232 beige.png"
  },
  {
    "id": 3130,
    "name": "Polvo compacto soft #6 golden",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %236 golden_.png"
  },
  {
    "id": 3131,
    "name": "Polvo suelto banana grande",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo suelto banana grande_.jpg"
  },
  {
    "id": 3132,
    "name": "Polvo suelto traslúcido grande",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo suelto traslúcido grande.jpg"
  },
  {
    "id": 3133,
    "name": "Primer en crema bloom pink",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Primer en crema bloom pink.png"
  },
  {
    "id": 3134,
    "name": "Rubor en barra cherry blossom #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor en barra cherry blossom %232.png"
  },
  {
    "id": 3135,
    "name": "Rubor líquido bloom floral #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor líquido bloom floral %233.png"
  },
  {
    "id": 3136,
    "name": "Rubor líquido mágico",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor líquido mágico_.png"
  },
  {
    "id": 3137,
    "name": "Rubor matte shell blush baby #5",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor matte shell blush baby %235_.png"
  },
  {
    "id": 3138,
    "name": "Rubor trío melón #4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío melón %234.png"
  },
  {
    "id": 3139,
    "name": "Rubor trío sandía #5",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío sandía %235.png"
  },
  {
    "id": 3140,
    "name": "Serum bloom balance",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Serum bloom balance_.jpg"
  },
  {
    "id": 3141,
    "name": "Sombra bloom seductor pink #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Sombra bloom seductor pink %233.png"
  },
  {
    "id": 3142,
    "name": "Sombra individual matte bloom #4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Sombra individual matte bloom %234.png"
  },
  {
    "id": 3143,
    "name": "unnamed 2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/unnamed_2.jpg"
  },
  {
    "id": 3144,
    "name": "Paleta bloom luxury vino #4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom luxury vino %234.png"
  },
  {
    "id": 3145,
    "name": "Paleta bloom vibes #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Paleta bloom vibes %232.png"
  },
  {
    "id": 3146,
    "name": "Papel matificante con polvo suelto #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Papel matificante con polvo suelto %231.png"
  },
  {
    "id": 3147,
    "name": "Pestañina coofe Bloomshell exclusive",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Pestañina coofe Bloomshell exclusive.png"
  },
  {
    "id": 3148,
    "name": "Polvo 2 en 1 paqñ #3 banana",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo 2 en 1 paqñ %233 banana_.png"
  },
  {
    "id": 3149,
    "name": "Polvo compacto soft #3 natural",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %233 natural.png"
  },
  {
    "id": 3150,
    "name": "Polvo compacto soft #7 honey",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo compacto soft %237 honey_.png"
  },
  {
    "id": 3151,
    "name": "Polvo suelto mini 4 en 1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Polvo suelto mini 4 en 1.png"
  },
  {
    "id": 3152,
    "name": "PRIMER BLOOM POROS INVISIBLES",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/PRIMER BLOOM POROS INVISIBLES.jpg"
  },
  {
    "id": 3153,
    "name": "Primer en crema bloom purple",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Primer en crema bloom purple.png"
  },
  {
    "id": 3154,
    "name": "Rubor en barra cherry blossom #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor en barra cherry blossom %233.png"
  },
  {
    "id": 3155,
    "name": "Rubor líquido bloom floral #4",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor líquido bloom floral %234.png"
  },
  {
    "id": 3156,
    "name": "Rubor luminoso shell #1 pink",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor luminoso shell %231 pink.png"
  },
  {
    "id": 3157,
    "name": "Rubor matte shell terracota #6",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor matte shell terracota %236.png"
  },
  {
    "id": 3158,
    "name": "Rubor trío peach #2",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío peach %232.png"
  },
  {
    "id": 3159,
    "name": "Rubor trío terracota #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Rubor trío terracota %233.png"
  },
  {
    "id": 3160,
    "name": "SERUM REPARADOR DE LABIOS",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/SERUM REPARADOR DE LABIOS_.png"
  },
  {
    "id": 3161,
    "name": "Sombra bloom seductor rose #1",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Sombra bloom seductor rose %231.png"
  },
  {
    "id": 3162,
    "name": "Sombra individual matte bloom #3",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Sombra individual matte bloom %233.png"
  },
  {
    "id": 3163,
    "name": "Voluminizador Bloomshell",
    "price": 0,
    "category": "maquillaje",
    "brand": "bloomshell",
    "image": "imagenes/bloomshell#2/Voluminizador Bloomshell_.png"
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

  if (!mainImage || !thumbnails) return;

  const images = Array.isArray(product.images)
    ? [...new Set(product.images.filter(Boolean))]
    : [];

  if (!images.length && product.image) {
    images.push(product.image);
  }

  thumbnails.innerHTML = "";

  mainImage.onerror = () => {
    mainImage.onerror = null;
    mainImage.alt = `${product.name} (imagen no disponible)`;
  };

  mainImage.src = images[0] || "";
  mainImage.alt = product.name;

  // Dos fotos o menos: mostrar solo la imagen principal.
  if (images.length <= 2) {
    thumbnails.style.display = "none";
    return;
  }

  thumbnails.style.display = "flex";

  images.forEach((src, index) => {
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

// ==================================================
// 6. MOSTRAR PRODUCTOS EN EL CATÁLOGO
// ==================================================

function renderProducts(filter = "all", brand = null) {
  if (!productsGrid) {
    console.error("No se encontró el elemento productsGrid en HTML.");
    return;
  }

  productsGrid.innerHTML = "";

  const filteredProducts = products.filter(product => {
    if (filter === "all") return true;

    const sameCategory =
      normalize(product.category) === normalize(filter);

    if (brand) {
      return sameCategory &&
        normalize(product.brand) === normalize(brand);
    }

    return sameCategory;
  });

  if (catalogTitle) {
    if (brand) {
      const brandButton = [...document.querySelectorAll(".brand-btn")]
        .find(button =>
          normalize(button.dataset.category) === normalize(filter) &&
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
    empty.textContent =
      "Todavía no hay productos registrados en esta categoría.";

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

    image.onerror = () => {
      image.onerror = null;
      image.alt = `${product.name} (imagen no disponible)`;
    };

    image.addEventListener("click", () => {
      openProductModal(product.id);
    });

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
// 7. FILTROS ACTIVOS
// ==================================================

function setActiveFilter(filter, brand = null) {
  document.querySelectorAll(".filter-btn").forEach(button => {
    const isCategoryMenu = [
      "btnMaquillaje",
      "btnMaquillajeMobile",
      "btnCapilar",
      "btnCapilarMobile",
      "btnLociones",
      "btnLocionesMobile"
    ].includes(button.id);

    const active = !brand &&
      !isCategoryMenu &&
      normalize(button.dataset.filter) === normalize(filter);

    button.classList.toggle("active", active);
  });
}

// ==================================================
// 8. MODALES DE CATEGORÍAS
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

$("#closeModal")?.addEventListener("click", () => {
  closeModal(makeupModal);
});

$("#closeCapilar")?.addEventListener("click", () => {
  closeModal(capilarModal);
});

$("#closeLociones")?.addEventListener("click", () => {
  closeModal(locionesModal);
});

[makeupModal, capilarModal, locionesModal].forEach(modal => {
  modal?.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

// Filtros Todos.
document.querySelectorAll(".filter-btn[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    const filter = normalize(button.dataset.filter) || "all";

    setActiveFilter(filter);
    renderProducts(filter);

    $("#productos")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Filtros por marca.
document.querySelectorAll(".brand-btn").forEach(button => {
  button.addEventListener("click", () => {
    const brand = normalize(button.dataset.brand);
    const category = normalize(button.dataset.category || "maquillaje");

    if (!brand) return;

    setActiveFilter(category, brand);
    renderProducts(category, brand);
    closeAllModals();

    $("#productos")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ==================================================
// 9. ABRIR PRODUCTO AMPLIADO Y SELECCIONAR VARIANTE
// ==================================================

function openProductModal(productId) {
  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) return;

  selectedDetailProduct = product;
  selectedDetailVariant = "";

  $("#detailProductName").textContent = product.name;
  $("#detailProductPrice").textContent = moneyCOP(product.price);

  $("#detailQuantity").value = 1;

  // Cargar la galería aquí, una sola vez.
  renderProductGallery(product);

  const variantsContainer = $("#detailVariants");
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

// Añadir desde la ventana ampliada.
$("#detailAddButton").addEventListener("click", () => {
  if (!selectedDetailProduct) return;

  if (
    selectedDetailProduct.variants?.length &&
    !selectedDetailVariant
  ) {
    alert("Selecciona el color que deseas comprar.");
    return;
  }

  const quantity = Number($("#detailQuantity").value);

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
// 10. CARRITO: AÑADIR PRODUCTOS
// ==================================================

function addToCart(productId, variant = "", quantity = 1) {
  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) return false;

  if (product.variants?.length && !variant) {
    openProductModal(product.id);
    return false;
  }

  if (
    !Number.isFinite(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    alert(
      "Este producto todavía no tiene un precio válido. Actualiza su precio antes de comprarlo."
    );

    return false;
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    alert("La cantidad no es válida.");
    return false;
  }

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
// 11. CAMBIAR CANTIDADES Y ELIMINAR PRODUCTOS
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
// 12. ACTUALIZAR INTERFAZ DEL CARRITO
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
    minus.setAttribute("aria-label", `Quitar una unidad de ${item.name}`);

    minus.addEventListener("click", () => {
      changeQuantity(item.cartKey, -1);
    });

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.className = "quantity-btn";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `Añadir una unidad de ${item.name}`);

    plus.addEventListener("click", () => {
      changeQuantity(item.cartKey, 1);
    });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.setAttribute("aria-label", `Eliminar ${item.name} del carrito`);
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
// 13. ABRIR Y CERRAR CARRITO
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

// Escape cierra las ventanas.
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeAllModals();
    closeProductModal();
    closeCartDrawer();
  }
});

// ==================================================
// 14. PAGOS CON WOMPI
// ==================================================

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
      checkoutButton.textContent = "Finalizar compra con Wompi";
    }
  }
}

checkoutButton?.addEventListener("click", checkout);

// Compatibilidad con botones antiguos.
window.checkout = checkout;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

// ==================================================
// 15. INICIAR TIENDA
// ==================================================

updateCartUI();
renderProducts("all");

console.log("Dueve Makeup: catálogo cargado correctamente.");
