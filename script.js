const headers = document.querySelectorAll(".accordion-header, .accordion-subheader");

headers.forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        // Alternar la clase 'open' para mostrar/ocultar
        content.classList.toggle("open");
    });
});
