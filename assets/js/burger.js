const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", function() {
    const isOpen = burger.classList.toggle("open");
    navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen);
});