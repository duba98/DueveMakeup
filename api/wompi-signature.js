const crypto = require("crypto");

// Precios del servidor: deben mantenerse sincronizados con el catálogo real.
// Los productos con precio 0 no se pueden cobrar hasta que se configure su precio.

const CATALOG = {
  // =========================
  // ATENEA
  // =========================
  1: { name: "Base Líquida Atenea", price: 1500 },
  2: { name: "Fijador de Cejas", price: 1000 },
  3: { name: "Iluminador Atenea Sublime", price: 0 },
  4: { name: "Polvo Suelto", price: 0 },
  5: { name: "Rubor Dúo Atenea Pink Crush", price: 0 },

  // =========================
  // BLOOMSHELL
  // =========================
  101: { name: "Bálsamo de labios Bloom Honey", price: 0 },
  102: { name: "Beauty Blender", price: 0 },
  103: { name: "Rubor Bloomshell", price: 0 },
  104: { name: "base cushion", price: 0 },
  105: { name: "bloom bronzer iluminoso 2 en 1 #2", price: 0 },
  106: { name: "bloom bronzer matte 2 en 1 #2", price: 0 },
  107: { name: "bloom duo perfect", price: 0 },
  108: { name: "Bloom dulce duo tint", price: 0 },
  109: { name: "Bloom esplendor tono 1", price: 0 },
  110: { name: "Bloom Gelei Berry", price: 0 },
  111: { name: "bloom hydra 2 en 1", price: 0 },
  112: { name: "bloom jelly fusion", price: 0 },
  113: { name: "bloom lip kit", price: 0 },
  114: { name: "BLOOM OIL CONTROl", price: 0 },
  115: { name: "bloom oil stop", price: 0 },
  116: { name: "brocha de bloomshell", price: 0 },
  117: { name: "bloom rolon XL", price: 0 },
  118: { name: "borla bloomshell corazon ", price: 0 },
  119: { name: "brillo glossy ", price: 0 },
  120: { name: "brillo hidratante", price: 0 },
  121: { name: "brillo labial bloom bombon", price: 0 },
  122: { name: "brillo labial podwer kiss", price: 0 },
  123: { name: "brillo magico bloom crush", price: 0 },
  124: { name: "brillo poket kiss", price: 0 },
  125: { name: "brillo espejo", price: 0 },
  126: { name: "cera en barra bloomshell", price: 0 },
  127: { name: "cinta levanta bustos", price: 0 },
  128: { name: "contorno en barra", price: 0 },
  129: { name: "crema bloom", price: 0 },
  130: { name: "contorno duo", price: 0 },
  131: { name: "estuche bloomshell", price: 0 },
  132: { name: "fijador bloomshell", price: 0 },
  133: { name: "fijador hidratante", price: 0 },
  134: { name: "iluminador bloomshell", price: 0 },
  135: { name: "iluminador crema", price: 0 },
  136: { name: "kit mini favorito x6", price: 0 },
  137: { name: "kit mini infaltable x6", price: 0 },
  138: { name: "laminador de cejas", price: 0 },
  139: { name: "lapiz delineador", price: 0 },
  140: { name: "lapiz para ojos negro", price: 0 },
  141: { name: "limpiador bloom", price: 0 },
  142: { name: "lip balm ", price: 0 },
  143: { name: "lip bloom coco", price: 0 },
  144: { name: "lip gloss fusion", price: 0 },
  145: { name: "lip oil", price: 0 },
  146: { name: "llaveros bloomshell", price: 0 },

  // =========================
  // BLOOMSHELL #2
  // =========================
  200: { name: "paleta bloom luxury", price: 0 },
  201: { name: "paleta bloom nude", price: 0 },
  202: { name: "paleta bloom vibes", price: 0 },
  203: { name: "paleta de rubores dolce bouquet", price: 0 },
  204: { name: "paleta kiss love", price: 0 },
  205: { name: "papel de arroz beautiful face", price: 0 },
  206: { name: "papel matificante con polvo suelto", price: 0 },
  207: { name: "parches bye bye", price: 0 },
  208: { name: "parches faciales x24", price: 0 },
  209: { name: "pestañina coofe bloomshell", price: 0 },
  210: { name: "pestañina lash resistente", price: 0 },
  211: { name: "polvo 2 en 1 bloom pequeño", price: 0 },
  212: { name: "polvo compacto fusion", price: 0 },
  213: { name: "polvo compacto soft", price: 0 },
  214: { name: "polvo suelto 4 en 1", price: 0 },
  215: { name: "polvo suelto banana grande", price: 0 },
  216: { name: "polvo suelto mini 4 en 1", price: 0 },
  217: { name: "polvo mini bloomshell traslucido", price: 0 },
  218: { name: "polvo suelto mini iluminous banana", price: 0 },
  219: { name: "polvo suelto traslucido grande", price: 0 },
  220: { name: "primer bloom poros invisible", price: 0 },
  221: { name: "primer bloom puff", price: 0 },
  222: { name: "primer bloom pumplig", price: 0 },
  223: { name: "primer en crema bloom pink", price: 0 },
  224: { name: "rubor bloom touch", price: 0 },
  225: { name: "rubor en barra blosson", price: 0 },
  226: { name: "rubor liquido bloom floral", price: 0 },
  227: { name: "rubor liquido magico", price: 0 },
  228: { name: "rubor iluminoso shell", price: 0 },
  229: { name: "rubor matte shell", price: 0 },
  230: { name: "rubor trio bloom", price: 0 },
  231: { name: "serum bloom balance", price: 0 },
  232: { name: "serum reparador de labios", price: 0 },
  233: { name: "Shimmer blooming glow", price: 0 },
  234: { name: "sombra bloom seductor", price: 0 },
  235: { name: "sombra individual matte bloomshell", price: 0 },
  236: { name: "tinta de labios bloom bow", price: 0 },
  237: { name: "tonico bloom", price: 0 },
  238: { name: "voluminizador bloomshell", price: 0 },

  // =========================
  // PROSA
  // =========================
  300: { name: "Pestañina Prosa", price: 19000 },
  301: { name: "Aceite para pestañas", price: 23000 },
  302: { name: "Tratamiento para pestañas", price: 20000 },
  303: { name: "Pestañina a prueba de agua", price: 19000 },

  // =========================
  // RUBY ROSE
  // =========================
  4000: { name: "labial matte", price: 0 },

  // =========================
  // RITUAL BOTÁNICO
  // =========================
  40000: { name: "keratina ritual botanico 120ml", price: 0 },
  40001: { name: "keratina ritual botanico 250ml", price: 0 },
  40002: { name: "keratina ritual botanico 1000ml", price: 0 },
  40003: { name: "mantequilla corporal ritual botanico", price: 0 },
  40004: { name: "mascarilla bomba ritual botanico", price: 0 },
  40005: { name: "shampoo ritual botanico romero y eucalipto 400ml", price: 0 },
  40006: { name: "shampoo ritual botanico jalea real 400ml", price: 0 },
  40007: { name: "shampoo ritual botanico aji control caida 400ml", price: 0 },
  40008: { name: "shampoo ritual botanico cebolla y argan 400ml", price: 0 },
  40009: { name: "termoprotector ritual botanico 120ml rosado", price: 0 },
  40010: { name: "termoprotector ritual botanico 120ml azul", price: 0 },
  40011: { name: "tratamiento intensivo plex ritual botanico 400ml", price: 0 },
  40012: { name: "tratamiento ritual botanico jalea real 400ml", price: 0 },

  // =========================
  // GARNIER
  // =========================
  700000: { name: "acondicionador ganier de aguacate 300ml", price: 0 },

  // =========================
  // LOCIONES HOMBRE
  // =========================
  800000: { name: "Asad Lattafa", price: 0 }
};


module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido." });
  }

  const publicKey = process.env.WOMPI_PUBLIC_KEY;
  const integritySecret = process.env.WOMPI_INTEGRITY_SECRET;
  if (!publicKey || !integritySecret) {
    return res.status(500).json({ error: "Faltan variables de entorno de Wompi en Vercel." });
  }

  const items = req.body && req.body.items;
  if (!Array.isArray(items) || items.length === 0 || items.length > 100) {
    return res.status(400).json({ error: "El carrito no es válido." });
  }

  let totalCOP = 0;
  for (const item of items) {
    const id = Number(item && item.id);
    const quantity = Number(item && item.quantity);
    const product = CATALOG[id];

    if (!product || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > 99) {
      return res.status(400).json({ error: "Hay un producto o una cantidad no válida." });
    }
    if (!Number.isSafeInteger(product.price) || product.price <= 0) {
      return res.status(400).json({ error: `El producto "${product.name}" todavía no tiene precio válido.` });
    }

    totalCOP += product.price * quantity;
  }

  if (!Number.isSafeInteger(totalCOP) || totalCOP < 1000) {
    return res.status(400).json({ error: "El total mínimo para pagar con Wompi es $1.000 COP." });
  }

  const amountInCents = totalCOP * 100;
  const reference = `DUEVE-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
  const signatureChain = `${reference}${amountInCents}COP${integritySecret}`;
  const signature = crypto.createHash("sha256").update(signatureChain, "utf8").digest("hex");

  return res.status(200).json({
    reference,
    amountInCents,
    currency: "COP",
    signature,
    publicKey
  });
};
