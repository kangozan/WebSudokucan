// Responsive Navbar
const navLink = document.querySelector(".nav-links");
function ontoggleMenu(e) {
  e.name = e.name == "close" ? "menu" : "close";
  navLink.classList.toggle("bottom-[100%]");
}
// Responsive Navbar
