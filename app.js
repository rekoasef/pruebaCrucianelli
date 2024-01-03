// inicio.js
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            // Obtén el valor de data-text para determinar la URL
            const dataText = box.getAttribute("data-text");
            window.location.href = `${dataText.toLowerCase()}1.html`;
        });
    });
});
