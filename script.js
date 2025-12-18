// --- Efecto de Máquina de Escribir ---
const textElement = document.querySelector(".typing-text");
const textArray = ["Ingeniero de Sistemas", "Desarrollador Python", "Entusiasta de la Tecnología"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        textElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
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
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000);
});

// --- Menú Hamburguesa (Móvil) ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// --- Scroll Reveal Animation (Intersection Observer) ---
// Esto hace que los elementos aparezcan suavemente al bajar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            // Si quieres que la animación se repita al subir y bajar, descomenta esto:
            // entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
