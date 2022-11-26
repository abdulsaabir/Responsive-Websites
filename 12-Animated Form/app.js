let btnToggle = document.querySelectorAll(".btn-toggle");
let Main = document.querySelector("main");
console.log(btnToggle);
btnToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(5464);
    Main.classList.toggle("sign-up-mode");
  });
});
