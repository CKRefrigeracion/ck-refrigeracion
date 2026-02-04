// Confirmación en consola
console.log("C&K Refrigeración online");

// Selecciona todas las secciones con animación
const elements = document.querySelectorAll(".fade");

// Función para mostrar elementos al hacer scroll o cargar
function showOnScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
}

// Ejecutar al cargar la página
window.addEventListener("load", showOnScroll);

// Ejecutar al hacer scroll
window.addEventListener("scroll", showOnScroll);

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});