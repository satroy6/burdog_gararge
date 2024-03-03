const menuToogle = document.querySelector(".menu-toogle input");
const containerMenuToogle = document.querySelector(".container-menu-toogle");
const nav = document.querySelector("nav ul");

menuToogle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  containerMenuToogle.classList.toggle("menu-open");
});
