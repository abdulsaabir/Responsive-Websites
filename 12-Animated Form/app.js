let Images = ["./img/image1.png", "./img/image2.png", "./img/image3.png"];

let dots = document.querySelectorAll("nav");
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    removeDot();
    dot.classList.add("focused");
    console.log(dot.dataset.num);
  });
});

const removeDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove("focused");
  });
};
