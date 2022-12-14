let btns = document.querySelector("nav i");
let header = document.querySelector("header");
let cond = true;
let li = document.querySelectorAll("li");
let section = document.querySelector("section");
btns.addEventListener("click", () => {
  if (cond) {
    btns.classList.remove("fa-greater-than");
    btns.classList.add("fa-less-than");
    section.style.marginLeft = "16rem";
    cond = false;
  } else {
    btns.classList.remove("fa-less-than");
    btns.classList.add("fa-greater-than");
    section.style.marginLeft = "7rem";
    cond = true;
  }
  header.classList.toggle("active");
});

li.forEach((lis) => {
  lis.addEventListener("click", () => {
    remove();
    lis.classList.add("active");
  });
});

function remove() {
  li.forEach((lis) => {
    lis.classList.remove("active");
  });
}
