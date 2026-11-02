function renderProductGallery(product) {
  const mainImage = document.getElementById("detailProductImage");
  const thumbnails = document.getElementById("detailImageThumbnails");

  if (!mainImage || !thumbnails) return;

  // Obtener las fotos sin repetir rutas.
  const images = Array.isArray(product.images)
    ? [...new Set(product.images)]
    : [product.image];

  // Quitar rutas vacías.
  const validImages = images.filter(Boolean);

  // Mostrar solamente la primera foto como imagen principal.
  mainImage.src = validImages[0] || "";
  mainImage.alt = product.name;

  // Limpiar las miniaturas anteriores.
  thumbnails.innerHTML = "";

  // Si tiene dos fotos o menos, no mostrar galería.
  if (validImages.length <= 2) {
    thumbnails.style.display = "none";
    return;
  }

  // Si tiene más de dos fotos, mostrar las miniaturas.
  thumbnails.style.display = "flex";

  validImages.forEach((src, index) => {
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

      thumbnails
        .querySelectorAll(".detail-thumbnail")
        .forEach(img => img.classList.remove("selected"));

      thumb.classList.add("selected");
    });

    thumbnails.appendChild(thumb);
  });
}