let menuItem = document.querySelector(".menu-item");
let menu = document.querySelector(".menu");

menuItem.addEventListener("click", () => {
  menu.classList.toggle("show");
  document.querySelector("body").classList.toggle("scroll-of");
});
