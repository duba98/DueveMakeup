const crypto = require("crypto");

// Precios del servidor: deben mantenerse sincronizados con el catálogo real.
// Los productos con precio 0 no se pueden cobrar hasta que se configure su precio.
const CATALOG = {
  1: { name: "Base Líquida Atenea", price: 1500 },
  2: { name: "Fijador de Cejas", price: 1000 },
  3: { name: "Iluminador Atenea Sublime", price: 0 },
  4: { name: "Polvo Suelto", price: 0 },
  5: { name: "Rubor Dúo Atenea Pink Crush", price: 0 }
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
