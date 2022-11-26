let btnToggle = document.querySelectorAll(".btn-toggle");
let Main = document.querySelector("main");
btnToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    Main.classList.toggle("sign-up-mode");
  });
});
