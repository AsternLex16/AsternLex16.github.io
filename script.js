const textElement = document.querySelector(".typing-text");
const textArray = [
    "Ingeniero de Sistemas",
    "Desarrollador Python",
    "Entusiasta de la Tecnología"
];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        textElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, 700);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Iniciar el efecto de escribir al cargar
    setTimeout(type, 1000);

    // Menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Animación de barras de progreso
    const progressBars = document.querySelectorAll(".progress-bar");
    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.getAttribute("data-progress");
                bar.style.width = value;
            }
        });
    }, { threshold: 0.6 });
    progressBars.forEach(bar => progressObserver.observe(bar));
});
