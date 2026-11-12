
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
  id:109,
  name:"Bloom esplendor tono 1",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom esplendor tono 1.png"
},

{
  id: 110,
  name: "Bloom Gelei Berry",
  price: 0,
  category: "maquillaje",
  brand: "bloomshell",

  image: "imagenes/BLOOMSHELL/Bloom gelei berry.png",

  images: [
    "imagenes/BLOOMSHELL/Bloom gelei berry.png",
    "imagenes/BLOOMSHELL/Bloom gelei cherry.png",
    "imagenes/BLOOMSHELL/Bloom gelei pink.png"
  ],

  variants: [
    {
      name: "Berry",
      image: "imagenes/BLOOMSHELL/Bloom gelei berry.png"
    },
    {
      name: "Cherry",
      image: "imagenes/BLOOMSHELL/Bloom gelei cherry.png"
    },
    {
      name: "Pink",
      image: "imagenes/BLOOMSHELL/Bloom gelei pink.png"
    }
  ]
},

{
  id:111,
  name:"bloom hydra 2 en 1",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom hydra 2 en 1 %231-2-3-4.png",
  variants: ["#1", "#2", "#3", "#4"]
},
{
  id:112,
  name:"bloom jelly fusion",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom jelly fusión.png"
},
{
  id:113,
  name:"bloom lip kit",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom lip kit tono 3_.jpg",
  images: [
    "imagenes/BLOOMSHELL/Bloom lip kit tono 3_.jpg",
    "imagenes/BLOOMSHELL/Bloom lip kit tono 4.jpg"
  ],
  variants:[
    {
      name:"tono 3",
      image:"imagenes/BLOOMSHELL/Bloom lip kit tono 3_.jpg"
    },
    {
      name:"tono 4",
      image:"imagenes/BLOOMSHELL/Bloom lip kit tono 4.jpg"
    }
  ]
},
{
  id:114,
  name:"BLOOM OIL CONTROl",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/BLOOM OIL CONTROl.jpg",
},
{
  id:115,
  name:"bloom oil stop",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom oil stop_.png"
},
{
  id:116,
  name:"brocha de bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom pincel perfect_.png"
},
{
  id:117,
  name:"bloom rolon XL",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bloom rolon xl.png"
},
{
  id:118,
  name:"borla bloomshell corazon ",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Borla Bloomshell corazón_.png",

  images:["imagenes/BLOOMSHELL/Borla Bloomshell corazón_.png",
    "imagenes/BLOOMSHELL/Borlas x3 Bloomshell_.png",
    "imagenes/BLOOMSHELL/Kit borla Bloomshell x7.png"
  ],

  variants: [
    {
      name:"borla X1",
      image:"imagenes/BLOOMSHELL/Borla Bloomshell corazón_.png"
    },
    {
      name:"borlas X3",
      image:"imagenes/BLOOMSHELL/Borlas x3 Bloomshell_.png"
    },
    {
      name:"borlas x7",
      image:"imagenes/BLOOMSHELL/Kit borla Bloomshell x7.png"
    }
  ]
},
{
  id:119,
  name:"brillo glossy ",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Brillo glossy color %232.png",
  variants: [
    {
      name:"tono 2",
      image:"imagenes/BLOOMSHELL/Brillo glossy color %232.png"
    },
    {
      name:"tono 3",
      image:"imagenes/BLOOMSHELL/Brillo glossy color %233.png"
    },
    {
      name:"tono 4",
      image:"imagenes/BLOOMSHELL/Brillo glossy color tono 4.png"
    },
    {
      name:"tono 5",
      image:"imagenes/BLOOMSHELL/Brillo glossy color %235.png"
    },
    {
      name:"tono 6",
      image:"imagenes/BLOOMSHELL/Brillo glossy color tono 6.png"
    }
  ]
},
{
  id:120,
  name:"brillo hidratante",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Brillo hidratante bloom gelee.png"
},
{
  id:121,
  name:"brillo labial bloom bombon",
  price:0,
  category:"bloomshell",
  image:"imagenes/BLOOMSHELL/Brillo labial bloom bombon_.jpg"
},
{
  id:122,
  name:"brillo labial podwer kiss",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Brillo labial podwer kiss %231 flower.png",

  images:[
    "imagenes/BLOOMSHELL/Brillo labial podwer kiss %231 flower.png",
    "imagenes/BLOOMSHELL/Brillo labial podwer kiss %232 rose.png",
    "imagenes/BLOOMSHELL/Brillo labial podwer kiss %233 mocha_.png"
  ],
  variants: [
    {
      name:"#1 flower",
      image:"imagenes/BLOOMSHELL/Brillo labial podwer kiss %231 flower.png"
    },
    {
      name:"#2 rose",
      image:"imagenes/BLOOMSHELL/Brillo labial podwer kiss %232 rose.png"
    },
    {
      name:"#3 mocha",
      image:"imagenes/BLOOMSHELL/Brillo labial podwer kiss %233 mocha_.png"
    }
  ]
},
{
  id:123,
  name:"brillo magico bloom crush",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Brillo mágico bloom crush_.png"
},
{
  id:124,
  name:"brillo poket kiss",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/BRILLO POKET KISS.jpg"
},
{
  id:125,
  name:"brillo espejo",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Bya bya brillo espejo.png"
},
{
  id:126,
  name:"cera en barra bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Cera en barra Bloomshell_.png"
},
{
  id:127,
  name:"cinta levanta bustos",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  image:"imagenes/BLOOMSHELL/Cinta levanta busto Bloomshell_.png"
},
{
  id:128,
  name:"contorno en barra",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Contorno en barra bloom define %231 contour.png",
  
  images:[
    "imagenes/BLOOMSHELL/Contorno en barra bloom define %231 contour.png",
    "imagenes/BLOOMSHELL/Contorno en barra define bronzy_.png",
    "imagenes/BLOOMSHELL/Contorno en barra bloom define %233 dark.png"
  ],

  variants: [
    {
      name:"#1 ",
      image:"imagenes/BLOOMSHELL/Contorno en barra bloom define %231 contour.png"
    },
    {
      name:"#3 dark",
      image:"imagenes/BLOOMSHELL/Contorno en barra bloom define %233 dark.png"
    },
    {
      name:"bronzy",
      image:"imagenes/BLOOMSHELL/Contorno en barra define bronzy_.png"
    }
  ]
},
{
  id:129,
  name:"crema bloom",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Crema bloom repair _.png",

  images:[
    "imagenes/BLOOMSHELL/Crema bloom repair _.png",
    "imagenes/BLOOMSHELL/Crema en gel bloom essential.png"
  ],

  variants:[
    {
      name:"bloom repair",
      image:"imagenes/BLOOMSHELL/Crema bloom repair _.png"
    },
    {
      name:"bloom essential",
      image:"imagenes/BLOOMSHELL/Crema en gel bloom essential.png"
    }
  ]
},
{
  id:130,
  name:"contorno duo",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Dúo contorno Bloomshell deep_.png",

  images:[
    "imagenes/BLOOMSHELL/Dúo contorno Bloomshell deep_.png",
    "imagenes/BLOOMSHELL/Dúo contorno Bloomshell toasted_.png"
  ],

  variants:[
    {
      name:"deep",
      image:"imagenes//BLOOMSHELL/Dúo contorno Bloomshell deep_.png"
    },
    {
      name:"toasted",
      image:"imagenes/BLOOMSHELL/Dúo contorno Bloomshell toasted_.png"
    }
  ]
},
{
  id:131,
  name:"estuche bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Estuche Bloomshell_.png"
},
{
  id:132,
  name:"fijador bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/FIJADOR BLOOM 120ml.png",

  images:[
    "imagenes/BLOOMSHELL/FIJADOR BLOOM 120ml.png",
    "imagenes/BLOOMSHELL/FIJADOR BLOOM FIX MINI 46ml.jpg"
  ],

  variants:[
    { 
      name: "fijador 120ml",
      image: "imagenes/BLOOMSHELL/FIJADOR BLOOM 120ml.png"
    },
    {
      name: "fijador mini",
      image: "imagenes/BLOOMSHELL/FIJADOR BLOOM FIX MINI 46ml.jpg"
    }
  ]
},
{
  id:133,
  name:"fijador hidratante",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Fijador hidratante mist fix.jpg"
},
{
  id:134,
  name:"iluminador bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Iluminador Bloom glow %231.png",

  images:[
    "imagenes/BLOOMSHELL/Iluminador Bloom glow %231.png",
    "imagenes/BLOOMSHELL/Iluminador bloom glow %233.png",
    "imagenes/BLOOMSHELL/Iluminador bloom glow %234.png"
  ],

  variants:[
    {
      name:"iluminador #1",
      image:"imagenes/BLOOMSHELL/Iluminador Bloom glow %231.png"
    },
    {
      name:"iluminador #3",
      image:"imagenes/BLOOMSHELL/Iluminador bloom glow %233.png"
    },
    {
      name:"iluminador #4",
      image:"imagenes/BLOOMSHELL/Iluminador bloom glow %234.png"
    }
  ]
},
{
  id:135,
  name:"iluminador crema",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Iluminador crema bloom cosmic_.jpg"
},
{
  id:136,
  name:"kit mini favorito x6",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Kit mini favoritos x6.png"
},
{
  id:137,
  name:"kit mini infaltable x6",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Kit mini infaltables x6.png"
},
{
  id:138,
  name:"laminador de cejas",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/LAMINADOR DE CEJAS XL.jpg",

  images:[
    "imagenes/BLOOMSHELL/LAMINADOR DE CEJAS XL.jpg",
    "imagenes/BLOOMSHELL/Laminador de cejas_.jpg"
  ],

  variants:[
    {
      name:"laminador de cejas xl",
      image:"imagenes/BLOOMSHELL/LAMINADOR DE CEJAS XL.jpg"
    },
    {
      name:"laminador de cejas",
      image:"imagenes/BLOOMSHELL/Laminador de cejas_.jpg"
    }
  ]
},
{
  id:139,
  name:"lapiz delineador",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Lápiz delineador labios coofe 02.jpg",

  images:[
    "imagenes/BLOOMSHELL/Lápiz delineador labios coofe 02.jpg",
    "imagenes/BLOOMSHELL/Lápiz delineador labios nude 04.png",
    "imagenes/BLOOMSHELL/Lápiz delineador labios rose %233.png"
  ],

  variants:[
    {
      name:"lapiz delineador cafe",
      image:"imagenes/BLOOMSHELL/Lápiz delineador labios coofe 02.jpg"
    },
    {
      name:"lapiz delineador nude",
      image:"imagenes/BLOOMSHELL/Lápiz delineador labios nude 04.png"
    },
    {
      name:"lapiz delineador rose",
      image:"imagenes/BLOOMSHELL/Lápiz delineador labios rose %233.png"
    }
  ]
},
{
  id:140,
  name:"lapiz para ojos negro",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Lápiz para ojos negro_(1).png",
  

  images:[
    "imagenes/BLOOMSHELL/Lápiz para ojos negro_(1).png",
    "imagenes/BLOOMSHELL/Lápiz para ojos negro_.png"
  ]
},
{
  id:141,
  name:"limpiador bloom",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Limpiador bloom lumi gel.jpg"
},
{
  id:142,
  name:"lip balm ",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Lip balm bloom latte.png",

  images:[
    "imagenes/BLOOMSHELL/Lip balm bloom latte.png",
    "imagenes/BLOOMSHELL/Lip balm bloom sparkle kiss %231.png",
    "imagenes/BLOOMSHELL/Lip balm bloom sparkle kiss %232.png",
    "imagenes/BLOOMSHELL/Lip balm sparkle kiss %233.png",
    "imagenes/BLOOMSHELL/Lip balm sparkle kiss %234.png"
  ],

  variants:[
    {
      name:"bloom latte",
      image:"imagenes/BLOOMSHELL/Lip balm bloom latte.png"
    },
    {
      name:"bloom sparkle #1",
      image:"imagenes/BLOOMSHELL/Lip balm bloom sparkle kiss %231.png"
    },
    {
      name:"bloom sparkle #2",
      image:"imagenes/BLOOMSHELL/Lip balm bloom sparkle kiss %232.png"
    },
    {
      name:"bloom sparkle #3",
      image:"imagenes/BLOOMSHELL/Lip balm sparkle kiss %233.png"
    },
    {
      name:"bloom sparkle #4",
      image:"imagenes/BLOOMSHELL/Lip balm sparkle kiss %234.png"
    }
  ]
},
{
  id:143,
  name:"lip bloom coco",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Lip bloom coco nut.png"
},
{
  id:144,
  name:"lip gloss fusion",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Lip gloss bloom fusión.png"
},
{
  id:145,
  name:"lip oil",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/Lip oil bloom cherry_.png",

  images:[
    "imagenes/BLOOMSHELL/Lip oil bloom cherry_.png",
    "imagenes/BLOOMSHELL/LIP OIL BLOOM SUBLIME XL.jpg",
    "imagenes/BLOOMSHELL/Lip oil mimosa xl.jpg"
  ],

  variants:[
    {
      name:"lip oil bloom cherry",
      image:"imagenes/BLOOMSHELL/Lip oil bloom cherry_.png"
    },
    {
      name:"lip oil bloom sublime",
      image:"imagenes/BLOOMSHELL/LIP OIL BLOOM SUBLIME XL.jpg"
    },
    {
      name:"lip oil bloom mimosa",
      image:"imagenes/BLOOMSHELL/Lip oil mimosa xl.jpg"
    }
  ]
},
{
  id:146,
  name:"llaveros bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/BLOOMSHELL/LLAVERO BLOOM LATTE KISS.jpg",

  images:[
    "imagenes/BLOOMSHELL/LLAVERO BLOOM LATTE KISS.jpg",
    "imagenes/BLOOMSHELL/Llavero bloom lush petan_.png",
    "imagenes/BLOOMSHELL/Llavero dúo mimosa+mini.png",
    "imagenes/BLOOMSHELL/Llavero dúo nude.jpg",
    "imagenes/BLOOMSHELL/Llavero dúo shell tint+mini mimosa_.jpg",
    "imagenes/BLOOMSHELL/Llavero+espejo bloom mimosa.jpg"
  ],

  variants:[
    {
      name:"latte kiss",
      image:"imagenes/BLOOMSHELL/LLAVERO BLOOM LATTE KISS.jpg"
    },
    {
      name:"lush petan",
      image:"imagenes/BLOOMSHELL/Llavero bloom lush petan_.png"
    },
    {
      name:"mimosa mini",
      image:"imagenes/BLOOMSHELL/Llavero dúo mimosa+mini.png"
    },
    {
      name:"duo nude",
      image:"imagenes/BLOOMSHELL/Llavero dúo nude.jpg"
    },
    {
      name:"duo shell tint + mini mimosa",
      image:"imagenes/BLOOMSHELL/Llavero dúo shell tint+mini mimosa_.jpg"
    },
    {
      name:"llavero espejo bloom mimosa",
      image:"imagenes/BLOOMSHELL/Llavero+espejo flor mimosa.jpg"
    }
  ]
},
//bloomshell#2

{
  id:200,
  name:"paleta bloom luxury",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Paleta bloom luxury coral %232.png",

  images:[
    "imagenes/bloomshell%232/Paleta bloom luxury coral %232.png",
    "imagenes/bloomshell%232/Paleta bloom luxury magenta %233.png",
    "imagenes/bloomshell%232/Paleta bloom luxury pink %231_.png",
    "imagenes/bloomshell%232/Paleta bloom luxury vino %234.png"
  ],
  
  variants:[
    {
      name:"luxury coral",
      image:"imagenes/bloomshell%232/Paleta bloom luxury coral %232.png"
    },
    {
      name:"luxury magenta",
      image:"imagenes/bloomshell%232/Paleta bloom luxury magenta %233.png"
    },
    {
      name:"luxury pink",
      image:"imagenes/bloomshell%232/Paleta bloom luxury pink %231_.png"
    },
    {
      name:"luxury vino",
      image:"imagenes/bloomshell%232/Paleta bloom luxury vino %234.png"
    }
  ]
  },
{
  id:201,
  name:"paleta bloom nude",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Paleta bloom nude %231.png",

  images:[
    "imagenes/bloomshell%232/Paleta bloom nude %231.png",
    "imagenes/bloomshell%232/Paleta bloom nude %232.png"
  ],

  variants:[
    {
      name:"bloom nude #1",
      images:"imagenes/bloomshell%232/Paleta bloom nude %231.png"
    },
    {
      name:"bloom nude #2",
      images:"imagenes/bloomshell%232/Paleta bloom nude %232.png"
    }
  ]
},
{
  id:202,
  name:"paleta bloom vibes",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Paleta bloom vibes %231.png",

  images:[
    "imagenes/bloomshell%232/Paleta bloom vibes %231.png",
    "imagenes/bloomshell%232/Paleta bloom vibes %232.png"
  ],

  variants:[
    {
      name:"bloom vibes #1",
      images:"imagenes/bloomshell%232/Paleta bloom vibes %231.png"
    },
    {
      name:"bloom vibes #2",
      images:"imagenes/bloomshell%232/Paleta bloom vibes %232.png"
    }
  ]
},
{
  id:203,
  name:"paleta de rubores dolce bouquet",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Paleta de rubores dolce bouquet.png"
},
{
  id:204,
  name:"paleta kiss love",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Paleta kiss love x6.png"
},
{
  id:205,
  name:"papel de arroz beautiful face",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  
  image:"imagenes/bloomshell%232/Papel de arroz beutiful face.jpg"
},
{
  id:206,
  name:"papel matificante con polvo suelto",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Papel matificante con polvo suelto %231.png",

  images:[
    "imagenes/bloomshell%232/Papel matificante con polvo suelto %231.png",
    "imagenes/bloomshell%232/Papel matificante con polvo suelto %232_.png"
  ],

  variants:[
    {
      name:"papel matificante con polvo suelto #1",
      image:"imagenes/bloomshell%232/Papel matificante con polvo suelto %231.png"
    },
    {
      name:"papel matificante con polvo suelto #2",
      image:"imagenes/bloomshell%232/Papel matificante con polvo suelto %232_.png"
    }
  ]
},
{
  id:207,
  name:"parches bye bye",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Parches bye bye_.png"
},
{
  id:208,
  name:"parches faciales x24",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Parches faciales x24.png"
},
{
  id:209,
  name:"pestañina coofe bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Pestañina coofe Bloomshell exclusive.png"
},
{
  id:210,
  name:"pestañina lash resistente",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Pestañina lash resistente_.jpg"
},
{
  id:211,
  name:"polvo 2 en 1 bloom pequeño",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo 2 en 1 bloom pqñ %231.png",

  images:[
    "imagenes/bloomshell%232/Polvo 2 en 1 bloom pqñ %231.png",
    "imagenes/bloomshell%232/Polvo 2 en 1 pqñ %232 rosado.png",
    "imagenes/bloomshell%232/Polvo 2 en 1 pqñ %233 banana_.png"
  ],

  variants:[
    {
      name:"polvo 2 en 1 #1",
      image:"imagenes/bloomshell%232/Polvo 2 en 1 bloom pqñ %231.png"
    },
    {
      name:"polvo 2 en 1 #2",
      image:"imagenes/bloomshell%232/Polvo 2 en 1 pqñ %232 rosado.png"
    },
    {
      name:"polvo 2 en 1 #3",
      image:"imagenes/bloomshell%232/Polvo 2 en 1 pqñ %233 banana_.png"
    }
  ]
},
{
  id:212,
  name:"polvo compacto fusion",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo compacto fusión.png"
},
{
  id:213,
  name:"polvo compacto soft",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo compacto soft %231 ivory_.png",

  images:[
    "imagenes/bloomshell%232/Polvo compacto soft %231 ivory_.png",
    "imagenes/bloomshell%232/Polvo compacto soft %232 beige.png",
    "imagenes/bloomshell%232/Polvo compacto soft %233 natural.png",
    "imagenes/bloomshell%232/Polvo compacto soft %234 nude.png",
    "imagenes/bloomshell%232/Polvo compacto soft %235 sand_.png",
    "imagenes/bloomshell%232/Polvo compacto soft %236 golden_.png",
    "imagenes/bloomshell%232/Polvo compacto soft %237 honey_.png",
    "imagenes/bloomshell%232/Polvo compacto soft %238 mocha_.png"
  ],

  variants:[
    {
      name:"polvo compacto #1",
      image:"imagenes/bloomshell%232/Polvo compacto soft %231 ivory_.png"
    },
    {
      name:"polvo compacto #2",
      image:"imagenes/bloomshell%232/Polvo compacto soft %232 beige.png"
    },
    {
      name:"polvo compacto #3",
      image:"imagenes/bloomshell%232/Polvo compacto soft %233 natural.png"
    },
    {
      name:"polvo compacto #4",
      image:"imagenes/bloomshell%232/Polvo compacto soft %234 nude.png"
    },
    {
      name:"polvo compacto #5",
      image:"imagenes/bloomshell%232/Polvo compacto soft %235 sand_.png"
    },
    {
      name:"polvo compacto #6",
      image:"imagenes/bloomshell%232/Polvo compacto soft %236 golden_.png"
    },
    {
      name:"polvo compacto #7",
      image:"imagenes/bloomshell%232/Polvo compacto soft %237 honey_.png"
    },
    {
      name:"polvo compacto #8",
      image:"imagenes/bloomshell%232/Polvo compacto soft %238 mocha_.png"
    }
  ]
},
{
  id:214,
  name:"polvo suelto 4 en 1",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo suelto 4 en 1.png"
},
{
  id:215,
  name:"polvo suelto banana grande",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo suelto banana grande_.jpg"
},
{
  id:216,
  name:"polvo suelto mini 4 en 1",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo suelto mini 4 en 1.png"
},
{
  id:217,
  name:"polvo mini bloomshell traslucido",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo suelto mini Bloomshell traslúcido_.png"
},
{
  id:218,
  name:"polvo suelto mini iluminous banana",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo suelto mini luminous banana malla_.png"
},
{
  id:219,
  name:"polvo suelto traslucido grande",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Polvo suelto traslúcido grande.jpg"
},
{
  id:220,
  name:"primer bloom poros invisible",
  price:0,
  category:"maquillaje:",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/PRIMER BLOOM POROS INVISIBLES.jpg"
},
{
  id:221,
  name:"primer bloom puff",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Primer bloom puff.png"
},
{
  id:222,
  name:"primer bloom pumplig",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/PRIMER BLOOM PUMPLING.png"
},
{
  id:223,
  name:"primer en crema bloom pink",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",
  
  image:"imagenes/bloomshell%232/Primer en crema bloom pink.png",

  images:[
    "imagenes/bloomshell%232/Primer en crema bloom pink.png",
    "imagenes/bloomshell%232/Primer en crema bloom purple.png"
  ],

  variants:[
    {
      name:"bloom pink",
      image:"imagenes/bloomshell%232/Primer en crema bloom pink.png",
    },
    {
      name:"bloom purple",
      image:"imagenes/bloomshell%232/Primer en crema bloom purple.png"
    }
  ]
},
{
  id:224,
  name:"rubor bloom touch",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Rubor bloom touch huellita_.png",

  images:[
    "imagenes/bloomshell%232/Rubor bloom touch huellita_.png",
    "imagenes/bloomshell%232/Rubor bloom touch love_.png"
  ],

  variants:[
    {
      name:"touch huellita",
      image:"imagenes/bloomshell%232/Rubor bloom touch huellita_.png"
    },
    {
      name:"touch love",
      image:"imagenes/bloomshell%232/Rubor bloom touch love_.png"
    }
  ]
},
{
  id:225,
  name:"rubor en barra blosson",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Rubor en barra cherry blosson %232.png",

  images:[
    "imagenes/bloomshell%232/Rubor en barra cherry blosson %232.png",
    "imagenes/bloomshell%232/Rubor en barra cherry blosson %233.png",
    "imagenes/bloomshell%232/Rubor en barra cherry blosson %234.png",
    "imagenes/bloomshell%232/Rubro en barra cherry blosson %232.png"
  ],

  variants:[
    {
      name:"blosson #1",
      image:"imagenes/bloomshell%232/Rubro en barra cherry blosson %232.png"
    },
    {
      name:"blosson #2",
      image:"imagenes/bloomshell%232/Rubor en barra cherry blosson %232.png"
    },
    {
      name:"blosson #3",
      image:"imagenes/bloomshell%232/Rubor en barra cherry blosson %233.png"
    },
    {
      name:"blosson #4",
      image:"imagenes/bloomshell%232/Rubor en barra cherry blosson %234.png"
    }
  ]
},
{
  id:226,
  name:"rubor liquido bloom floral",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Rubor líquido bloom floral %232.png",

  images:[
    "imagenes/bloomshell%232/Rubor líquido bloom floral %232.png",
    "imagenes/bloomshell%232/Rubor líquido bloom floral %233.png",
    "imagenes/bloomshell%232/Rubor líquido bloom floral %234.png",
    "imagenes/bloomshell%232/Rubor líquido bloom floral %235.png",
    "imagenes/bloomshell%232/Rubor líquido bloom floral %236.png"  
  ],

  variants:[
    {
      name:"bloom floral #2",
      image:"imagenes/bloomshell%232/Rubor líquido bloom floral %232.png"
    },
    {
      name:"bloom floral #3",
      image:"imagenes/bloomshell%232/Rubor líquido bloom floral %233.png"
    },
    {
      name:"bloom floral #4",
      image:"imagenes/bloomshell%232/Rubor líquido bloom floral %234.png"
    },
    {
      name:"bloom floral #5",
      image:"imagenes/bloomshell%232/Rubor líquido bloom floral %235.png"
    },
    {
      name:"bloom floral #6",
      image:"imagenes/bloomshell%232/Rubor líquido bloom floral %236.png"
    }
  ]
},
{
  id:227,
  name:"rubor liquido magico",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Rubor líquido mágico_.png"
},
{
  id:228,
  name:"rubor iluminoso shell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Rubor luminoso shell %231 pink.png",

  images:[
    "imagenes/bloomshell%232/Rubor luminoso shell %231 pink.png",
    "imagenes/bloomshell%232/Rubor luminoso shell %232 luminoso.png",
    "imagenes/bloomshell%232/Rubor luminoso shell %233 sunsell.png"
  ],

  variants:[
    {
      name:"shell #1",
      image:"imagenes/bloomshell%232/Rubor luminoso shell %231 pink.png"
    },
    {
      name:"shell #2",
      image:"imagenes/bloomshell%232/Rubor luminoso shell %232 luminoso.png"
    },
    {
      name:"shell #3",
      image:"imagenes/bloomshell%232/Rubor luminoso shell %233 sunsell.png"
    }
  ]
},
{
  id:229,
  name:"rubor matte shell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Rubor matte shell blush baby %235_.png",

  images:[
    "imagenes/bloomshell%232/Rubor matte shell blush baby %235_.png",
    "imagenes/bloomshell%232/Rubor matte shell terracota %236.png"
  ],

  variants:[
    {
      name:"shell #5",
      image:"imagenes/bloomshell%232/Rubor matte shell blush baby %235_.png"
    },
    {
      name:"shell #6",
      image:"imagenes/bloomshell%232/Rubor matte shell terracota %236.png"
    }
  ]
},
{
  id:230,
  name:"rubor trio bloom",
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Rubor trío pink %231.jpg",

  images:[
    "imagenes/bloomshell%232/Rubor trío pink %231.jpg",
    "imagenes/bloomshell%232/Rubor trío peach %232.png",
    "imagenes/bloomshell%232/Rubor trío terracota %233.png",
    "imagenes/bloomshell%232/Rubor trío melón %234.png",
    "imagenes/bloomshell%232/Rubor trío sandía %235.png",
    "imagenes/bloomshell%232/Rubor trío cherry %236.png",
    "imagenes/bloomshell%232/Rubor trío purple %237.png",
    "imagenes/bloomshell%232/Rubor trío %238 magenta_.png",
    "imagenes/bloomshell%232/Rubor trío vino %239.png"
  ],

  variants:[
    {
      name:"rubor trio #1",
      image:"imagenes/bloomshell%232/Rubor trío pink %231.jpg"
    },
     {
      name:"rubor trio #2",
      image:"imagenes/bloomshell%232/Rubor trío peach %232.png"
    },
     {
      name:"rubor trio #3",
      image: "imagenes/bloomshell%232/Rubor trío terracota %233.png"
    },
     {
      name:"rubor trio #4",
      image:"imagenes/bloomshell%232/Rubor trío melón %234.png"
    },
     {
      name:"rubor trio #5",
      image:"imagenes/bloomshell%232/Rubor trío sandía %235.png"
    },
     {
      name:"rubor trio #6",
      image:"imagenes/bloomshell%232/Rubor trío cherry %236.png"
    },
     {
      name:"rubor trio #7",
      image:"imagenes/bloomshell%232/Rubor trío purple %237.png"
    },
     {
      name:"rubor trio #8",
      image:"imagenes/bloomshell%232/Rubor trío %238 magenta_.png"
    },
     {
      name:"rubor trio #9",
      image:"imagenes/bloomshell%232/Rubor trío vino %239.png"
    }
  ]
},
{
  id:231,
  name:"serum bloom balance",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Serum bloom balance_.jpg"
},
{
  id:232,
  name:"serum reparador de labios",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/SERUM REPARADOR DE LABIOS_.png"
},
{
  id:233,
  name:"Shimmer blooming glow",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Shimmer blooming glow_.png"
},
 {
  id:234,
  name:"sombra bloom seductor",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Sombra bloom seductor rose %231.png",

  images:[
    "imagenes/bloomshell%232/Sombra bloom seductor rose %231.png",
    "imagenes/bloomshell%232/Sombra bloom seductor gold %232.png",
    "imagenes/bloomshell%232/Sombra bloom seductor pink %233.png"
  ],
  
  variants:[
    {
      name:"sombra bloom #1",
      image:"imagenes/bloomshell%232/Sombra bloom seductor rose %231.png"
    },
    {
      name:"sombra bloom #2",
      image:"imagenes/bloomshell%232/Sombra bloom seductor gold %232.png"
    },
    {
      name:"sombra bloom #3",
      image:"imagenes/bloomshell%232/Sombra bloom seductor pink %233.png"
    }
  ]
 },
 {
  id:235,
  name:"sombra individual matte bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Sombra individual matte bloom %231.png",

  images:[
    "imagenes/bloomshell%232/Sombra individual matte bloom %231.png",
    "imagenes/bloomshell%232/Sombra individual matte bloom %232.png",
    "imagenes/bloomshell%232/Sombre individual matte bloom %233.png",
    "imagenes/bloomshell%232/Sombra individual matte bloom %234.png"
  ],

  variants:[
    {
      name:"#1",
      image:"imagenes/bloomshell%232/Sombra individual matte bloom %231.png"
    },
    {
      name:"#2",
      image:"imagenes/bloomshell%232/Sombra individual matte bloom %232.png"
    },
    {
      name:"#3",
      image:"imagenes/bloomshell%232/Sombre individual matte bloom %233.png"
    },
    {
      name:"#4",
      image:"imagenes/bloomshell%232/Sombra individual matte bloom %234.png"
    }
  ]
 },
 {
  id:236,
  name:"tinta de labios bloom bow",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Tinta de labios bloom bow_.png"
 },
 {
  id:237,
  name:"tonico bloom",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Tónico bloom repair mist.png"
 },
 {
  id:238,
  name:"voluminizador bloomshell",
  price:0,
  category:"maquillaje",
  brand:"bloomshell",

  image:"imagenes/bloomshell%232/Voluminizador Bloomshell_.png"
 },
  
  // MAQUILLAJE - PROSA
  
{
  id: 300,
  name: "Pestañina Prosa",
  price: 19000,
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

  variants: [
    {
      name: "Negro",
      image: "imagenes/PROSA/Archivo_004.png"
    },
    {
      name: "Gris",
      image: "imagenes/PROSA/Archivo_000.png"
    },
    {
      name: "Morado",
      image: "imagenes/PROSA/Archivo_001.png"
    },
    {
      name: "Café",
      image: "imagenes/PROSA/Archivo_005.png"
    },
    {
      name: "Plata",
      image: "imagenes/PROSA/Archivo_002.png"
    },
    {
      name: "Fucsia",
      image: "imagenes/PROSA/Archivo_003.png"
    },
    {
      name: "Vino tinto",
      image: "imagenes/PROSA/Archivo_007.png"
    }
  ]
},

  {
    id: 301,
    name: "Aceite para pestañas",
    price: 23000,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_006.png"
  },
  {
    id: 302,
    name: "Tratamiento para pestañas",
    price: 20000,
    category: "maquillaje",
    brand: "prosa",
    image: "imagenes/PROSA/Archivo_008.png"
  },
  {
    id: 303,
    name: "Pestañina a prueba de agua",
    price: 19000,
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
    id:4000,
    name:"labial matte",
    price:0,
    category:"maquillaje",
    brand: "ruby-rose",
    image: "imagenes/RUBY ROSE/labial-matte.png"
  },
  //MAQUILLAJE SAGUI
  //MAQUILLAJE SAMY
  //MAQUILLAJE VOGUE
  //maquillaje lula
  //maquillaje majikal
  // CAPILAR MARIANA ZAPATA (10000)
  //{
    //id: 10001,
    //name: "Shampoo Mariana Zapata (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "mariana zapata",
    //image: "imagenes/sin-imagen.png"
  //},
  //CAPILAR ANYELUZ
  //{
    //id: 20000,
    //name: "Producto Anyeluz (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "anyeluz",
    //image: "imagenes/sin-imagen.png"
  //},
  // CAPILAR MILAGROS
  //{
    //id: 30000,
    //name: "Producto Milagros (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "milagros",
    //image: "imagenes/sin-imagen.png"
  //},
  // CAPILAR RITUAL BOTANICO
  {
    id: 40000,
    name: "keratina ritual botanico 120ml",
    price: 0,
    category: "capilar",
    brand: "ritual botanico",
    image: "imagenes/Ritual Botánico/KERATINA RITUAL BOTANICO X 120 ml.jpg"
  },
  {
    id:40001,
    name:"keratina ritual botanico 250ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/KERATINA RITUAL BOTANICO X 250 ml.jpg"
  },
  {
    id:40002,
    name:"keratina ritual botanico 1000ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/KERATINA RITUAL BOTANICO X 1000 ml.jpg"
  },
  {
    id:40003,
    name:"mantequilla corporal ritual botanico",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/MANTEQUILLA CORPORAL RITUAL BOTANICO X 240 ml.png"
  },
  {
    id:40004,
    name:"mascarilla bomba ritual botanico",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/MASCARILLA BOMBA RITUAL BOTANICO X 400 ML.jpg"
  },
  {
    id:40005,
    name:"shampoo ritual botanico romero y eucalipto 400ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/SH RITUAL BOTANICO ROMERO Y EUCALIPTO X 400 ml.jpg"
  },
  {
    id:40006,
    name:"shampoo ritual botanico jalea real 400ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/SH RITUAL BOTANICO X 400 ml - JALEA REAL.jpg"
  },
  {
    id:40007,
    name:"shampoo ritual botanico aji control caida 400ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/SHAMPOO RITUAL BOTANICO AJI CONTROL CAIDA.jpg"
  },
  {
    id:40008,
    name:"shampoo ritual botanico cebolla y argan 400ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/SHAMPOO RITUAL BOTANICO CEBOLLA Y ARGAN X 400 ML.jpg"
  },
  {
    id:40009,
    name:"termoprotector ritual botanico 120ml rosado",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/TERMOPROTECTOR RITUAL BOTANICO X 120 ML - ROSADO.jpg"
  },
  {
    id:40010,
    name:"termoprotector ritual botanico 120ml azul",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/TERMOPROTECTOR RITUAL BOTANICO X 120 ML AZUL.jpg"
  },
  {
    id:40011,
    name:"tratamiento intensivo plex ritual botanico 400ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/TRATAMIENTO INTENSIVO PLEX RITUAL BOTANICO X 400 ML.jpg"
  },
  {
    id:40012,
    name:"tratamiento ritual botanico jalea real 400ml",
    price:0,
    category:"capilar",
    brand:"ritual botanico",
    image:"imagenes/Ritual Botánico/TRATAMIENTO RITUAL BOTANICO X 400 ml - JALEA REAL.jpg"
  },
  // CAPILAR CLICK HAIR(50000)
  //{
    //id: 10005,
    //name: "Producto Click Hair (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "click hair",
    //image: "imagenes/sin-imagen.png"
  //},
  //CAPILAR KABA(60000)
  //{
    //id: 10006,
    //name: "Producto Kaba (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "kaba",
    //image: "imagenes/sin-imagen.png"
  //},
  // CAPILAR POCION(70000)
  //{
    //id: 10007,
    //name: "Producto Pocion (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "pocion",
    //image: "imagenes/sin-imagen.png"
  //},
  // CAPILAR MENTA HAIR(80000)
  //{
    //id: 10008,
    //name: "Producto Menta Hair (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "menta hair",
    //image: "imagenes/sin-imagen.png"
  //},
  // CAPILAR LECHE PAL PELO(90000)
  //{
    //id: 10009,
    //name: "Producto Leche Pal Pelo (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "leche pal pelo",
    //image: "imagenes/sin-imagen.png"
  //},
  // CAPILAR MAGIC HAIR(100000)
  //{
    //id: 10010,
    //name: "Producto Magic Hair (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "magic hair",
    //image: "imagenes/sin-imagen.png"
  //},
  // CAPILAR MARIA SALOME(200000)
  {
    id: 200000,
    name: "acondicionador salome azul 400ml",
    price: 0,
    category: "capilar",
    brand: "maria salome",

    image: "imagenes/María Salomé/ACONDICIONADOR SALOME AZUL X 400 ml.png"
  },
  {
    id:200001,
    name:"acondicionador salome keratina 400ml",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/ACONDICIONADOR SALOME KERATINA X 400 ml.png"
  },
  {
    id:200002,
    name:"crema de peinar salome 350ml",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/CREMA PEINAR SALOME X350.png"
  },
  {
    id:200003,
    name:"shampoo azul 400ml + 200ml",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/SHAMPOO SALOME AZUL X 400 + 200.png"
  },
  {
    id:200004,
    name:"shampoo salome keratina x 400 ml",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/SHAMPOO SALOME KERATINA X 400.png"
  },
  {
    id:200005,
    name:"shampoo salome x 400ml accion diaria",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/SHAMPOO SALOME KERATINA X 400.png"
  },
  {
    id:200006,
    name:"shampoo salome x 400ml anticaida",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/SHAMPOO SALOME X 400 ANTICAIDA.png"
  },
  {
    id:200007,
    name:"shampoo salome x 400ml control caspa",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/SHAMPOO SALOME X 400 CONTROL CASPA.png"
  },
  {
    id:200008,
    name:"shampoo salome x400ml hombres 2 en 1",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/SHAMPOO SALOME X 400 HOMBRES 2 EN 1.png"
  },
  {
    id:200009,
    name:"shampoo salome x400ml sensitive",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/SHAMPOO SALOME X 400 SENSITIVE.png"
  },
  {
    id:200010,
    name:"tonico salome locion x 320ml",
    price:0,
    category:"capilar",
    brand:"maria salome",

    image:"imagenes/María Salomé/TONICO SALOME LOCION x 320.jpg"
  },
  // CAPILAR LEHIT(300000)
  //{
    //id: 10012,
    //name: "Producto Lehit (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "lehit",
    //image: "imagenes/sin-imagen.png"
  //},
  //CAPILAR ELVIVE(400000)
  //{
    //id: 400000,
    //name: "Producto Elvive (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "elvive",
    //image: "imagenes/sin-imagen.png"
  //},
  //CAPILAR PONTO(500000)
  //{
    //id: 500000,
    //name: "Producto Ponto (completar)",
    //price: 0,
    //category: "capilar",
    //brand: "ponto",
    //image: "imagenes/sin-imagen.png"
  //},
  //capilar maria salome(600000)
  //capilar ganier(700000)
  {
    id:700000,
    name:"acondicionador ganier de aguacate 300ml",
    price:0,
    category:"capilar",
    brand:"ganier",
    image:"imagenes/Garnier/ACONDICIONADOR GARNIER FRUCTIS AGUACATE X 300 ml.png"
  },


  // LOCIONES HOMBRE(800000)
  {
    id: 800000,
    name: "Asad Lattafa",
    price: 0,
    category: "lociones",
    brand: "hombre",
    image: "imagenes/locionhombre/asad-lattafa.png"
  },
  // LOCIONES MUJER(900000)
  //{
    //id: 900000,
    //name: "Loción para mujer (completar)",
    //price: 0,
    //category: "lociones",
    //brand: "mujer",
    //image: "imagenes/sin-imagen.png"
  //}
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

  // Cargar galería de imágenes.
  renderProductGallery(product);

  const variantsContainer = $("#detailVariants");
  variantsContainer.innerHTML = "";

  if (product.variants?.length) {
    const label = document.createElement("p");
    label.textContent = "Selecciona el color o presentación:";
    variantsContainer.appendChild(label);

    product.variants.forEach(variant => {

      // Compatibilidad con variantes antiguas y nuevas.
      const variantName =
        typeof variant === "string"
          ? variant
          : variant.name || variant.label || "";

      const button = document.createElement("button");

      button.type = "button";
      button.className = "variant-option";
      button.textContent = variantName;
      button.setAttribute("aria-pressed", "false");

      button.addEventListener("click", () => {

        // Guardar solamente el nombre de la variante.
        selectedDetailVariant = variantName;

        // Cambiar imagen si la variante tiene una imagen propia.
        if (typeof variant === "object" && variant.image) {
          const mainImage = $("#detailProductImage");

          if (mainImage) {
            mainImage.src = variant.image;
            mainImage.alt = `${product.name} - ${variantName}`;
          }

          // Actualizar selección de miniaturas, si existen.
          const thumbnails = $("#detailImageThumbnails");

          if (thumbnails) {
            thumbnails.querySelectorAll(".detail-thumbnail")
              .forEach(img => {
                img.classList.toggle(
                  "selected",
                  img.getAttribute("src") === variant.image
                );
              });
          }
        }

        // Marcar botón seleccionado.
        variantsContainer.querySelectorAll(".variant-option")
          .forEach(option => {
            const selected = option === button;

            option.classList.toggle("selected", selected);
            option.setAttribute(
              "aria-pressed",
              String(selected)
            );
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
