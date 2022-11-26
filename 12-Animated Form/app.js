let Images = ["./img/image1.png", "./img/image2.png", "./img/image3.png"];

let dots = document.querySelectorAll("nav");
let image = document.getElementById("image");
let imageContainer = document.querySelector(".imgConainer");
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    removeDot();
    dot.classList.add("focused");
    image.src = Images[dot.dataset.num - 1];
    imageContainer.classList.remove("image");
    setTimeout(() => {
      imageContainer.classList.add("image");
    }, 2000);
  });
});

const removeDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove("focused");
  });
};
