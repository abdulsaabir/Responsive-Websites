let btnToggle = document.querySelectorAll(".btn-toggle");
let Main = document.querySelector("main");
btnToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    Main.classList.toggle("sign-up-mode");
  });
});

let bullets = document.querySelectorAll(".bullets span");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    console.log(e.dataset);
    RemoveActive();
    bullet.classList.add("active");
  });
});

function RemoveActive() {
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
