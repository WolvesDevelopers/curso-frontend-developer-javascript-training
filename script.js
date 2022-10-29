const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu")
const buguerMenu = document.querySelector(".menu")

navEmail.addEventListener("click", toggleMenu);
buguerMenu.addEventListener("click", toggleBuguerMenu)


function toggleMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleBuguerMenu() {
    mobileMenu.classList.toggle("inactive")
}