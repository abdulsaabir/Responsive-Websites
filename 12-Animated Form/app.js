let Images = ["./img/image1.png", "./img/image2.png", "./img/image3.png"];

let dots = document.querySelectorAll("nav");
let image = document.getElementById("image");
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    removeDot();
    dot.classList.add("focused");
    image.src = Images[dot.dataset.num - 1];
    image.classList.add(".image");
  });
});

const removeDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove("focused");
  });
};
