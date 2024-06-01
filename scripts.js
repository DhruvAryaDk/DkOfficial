// Navbar Toggle
document.getElementById("navbarToggle").addEventListener("click", function() {
    var navbarNav = document.getElementById("navbarNav");
    navbarNav.classList.toggle("show");
});

// Add scrolling effect to navbar
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

