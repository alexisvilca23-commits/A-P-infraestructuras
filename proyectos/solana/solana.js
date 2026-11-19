document.addEventListener("DOMContentLoaded", () => {
  const slides = [...document.querySelectorAll("[data-slide]")];
  const previousSlide = document.getElementById("previousSlide");
  const nextSlide = document.getElementById("nextSlide");
  const counter = document.getElementById("slideCounter");
  const progress = document.getElementById("slideProgress");
  let currentSlide = 0;
  const showSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== currentSlide;
      slide.setAttribute("aria-hidden", String(position !== currentSlide));
      slide.setAttribute("aria-label", `Diapositiva ${position + 1} de ${slides.length}`);
    });
    counter.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    progress.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  };
  previousSlide.addEventListener("click", () => showSlide(currentSlide - 1));
  nextSlide.addEventListener("click", () => showSlide(currentSlide + 1));
  showSlide(0);

  const documentGroups = document.getElementById("documentGroups");
  const viewer = document.getElementById("pdfViewer");
  const pdfFrame = document.getElementById("pdfFrame");
  const pdfTitle = document.getElementById("pdfTitle");
  const docs = (window.SOLANA_DOCUMENTS || []).flatMap(group => (group.files || []).map(file => ({ ...file, discipline: group.discipline })));
  const openDocument = (file) => {
    if (!file || !file.url) return;
    pdfTitle.textContent = file.title;
    pdfFrame.src = file.url;
    document.getElementById("openPdf").href = file.url;
    document.getElementById("fallbackPdf").href = file.url;
    const download = document.getElementById("downloadPdf");
    download.href = file.url;
    download.download = file.filename || "";
    if (typeof viewer.showModal === "function") viewer.showModal();
    else window.open(file.url, "_blank", "noopener");
  };

  (window.SOLANA_DOCUMENTS || []).forEach(group => {
    const section = document.createElement("section");
    section.className = "document-group";
    const heading = document.createElement("h3");
    heading.textContent = group.discipline;
    section.append(heading);
    if (!group.files || !group.files.length) {
      const pending = document.createElement("p");
      pending.className = "pending-label";
      pending.textContent = "Documentación pendiente";
      section.append(pending);
    } else {
      const list = document.createElement("ul");
      list.className = "document-list";
      group.files.forEach(file => {
        const item = document.createElement("li");
        const title = document.createElement("span");
        title.textContent = file.title;
        const actions = document.createElement("span");
        actions.className = "document-actions";
        const view = document.createElement("button");
        view.type = "button";
        view.textContent = "Ver en visor";
        view.setAttribute("aria-label", `Ver ${file.title} en el visor integrado`);
        view.addEventListener("click", () => openDocument(file));
        const open = document.createElement("a");
        open.href = file.url;
        open.target = "_blank";
        open.rel = "noopener";
        open.textContent = "Abrir PDF";
        open.setAttribute("aria-label", `Abrir ${file.title} en una pestaña nueva`);
        const download = document.createElement("a");
        download.href = file.url;
        download.download = file.filename || "";
        download.textContent = "Descargar";
        actions.append(view, open, download);
        item.append(title, actions);
        list.append(item);
      });
      section.append(list);
    }
    documentGroups.append(section);
  });

  document.getElementById("closeViewer").addEventListener("click", () => viewer.close());
  viewer.addEventListener("close", () => { pdfFrame.src = "about:blank"; });
  viewer.addEventListener("click", event => { if (event.target === viewer) viewer.close(); });
  document.getElementById("fullscreenPdf").addEventListener("click", async () => {
    try {
      if (pdfFrame.requestFullscreen) await pdfFrame.requestFullscreen();
      else if (viewer.requestFullscreen) await viewer.requestFullscreen();
    } catch { /* El navegador puede denegar pantalla completa. */ }
  });
  document.querySelectorAll("[data-document]").forEach(link => link.addEventListener("click", event => {
    const file = docs.find(document => document.title === link.dataset.document);
    if (file) { event.preventDefault(); openDocument(file); }
  }));

  const renders = [
    { src: "../../assets/img/solana/solana-fachada.webp", alt: "Visualización arquitectónica de la fachada SOLANA", caption: "01 / Fachada" },
    { src: "../../assets/img/solana/solana-conjunto.webp", alt: "Visualización arquitectónica del conjunto SOLANA", caption: "02 / Conjunto" },
    { src: "../../assets/img/solana/solana-lateral.webp", alt: "Visualización arquitectónica lateral de SOLANA", caption: "03 / Vista lateral" },
    { src: "../../assets/img/solana/solana-terraza.webp", alt: "Visualización arquitectónica de una terraza SOLANA", caption: "04 / Terraza" }
  ];
  const lightbox = document.getElementById("renderLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  let currentImage = 0;
  const showImage = index => {
    currentImage = (index + renders.length) % renders.length;
    lightboxImage.src = renders[currentImage].src;
    lightboxImage.alt = renders[currentImage].alt;
    caption.textContent = `${renders[currentImage].caption} · ${currentImage + 1} / ${renders.length}`;
  };
  document.querySelectorAll("[data-image]").forEach(button => button.addEventListener("click", () => {
    showImage(Number(button.dataset.image));
    lightbox.showModal();
  }));
  document.getElementById("closeLightbox").addEventListener("click", () => lightbox.close());
  document.getElementById("previousImage").addEventListener("click", () => showImage(currentImage - 1));
  document.getElementById("nextImage").addEventListener("click", () => showImage(currentImage + 1));
  lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "Escape") {
      if (viewer.open) viewer.close();
      if (lightbox.open) lightbox.close();
      return;
    }
    if (lightbox.open && event.key === "ArrowLeft") showImage(currentImage - 1);
    if (lightbox.open && event.key === "ArrowRight") showImage(currentImage + 1);
    if (!viewer.open && !lightbox.open && !["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(document.activeElement?.tagName)) {
      if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
      if (event.key === "ArrowRight") showSlide(currentSlide + 1);
    }
  });
});
