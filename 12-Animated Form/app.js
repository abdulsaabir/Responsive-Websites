let btnToggle = document.querySelectorAll(".btn-toggle");
let Main = document.querySelector("main");
btnToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    Main.classList.toggle("sign-up-mode");
  });
});

let bullets = document.querySelectorAll(".bullets span");
let imagesWrapper = document.querySelectorAll(".images-wrapper .image");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    let value = bullet.dataset.value;
    ImagesActive(value);
    RemoveActive();
    bullet.classList.add("active");
  });
});

function RemoveActive() {
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
function ImagesActive(value) {
  imagesWrapper.forEach((image) => {
    if (image.classList.contains(`img-${value}`)) {
      image.classList.add("show");
    } else {
      image.classList.remove("show");
    }
  });
}

// 1- Closures
// 2- prototypes
// 3- es-6
// part two
// 4- async/ await
// 5-event loop
// 6 -micro tasks / promises / callback
// 7-v8-engine
// 8-debugging & profiling
// 9 - ecoSystem => ex  web-back / babel
//
//
