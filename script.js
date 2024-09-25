const headers = document.querySelectorAll(
    ".accordion-header, .accordion-subheader"
);

headers.forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
