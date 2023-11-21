var menu = document.getElementById("menuToggler");
var nav__links = document.getElementById("nav__links");

menu.addEventListener("click", function () {
    if (nav__links.classList.contains("active__navLinks")) {
        nav__links.classList.remove("active__navLinks");
    } else {
        nav__links.classList.add("active__navLinks");
    }
});
