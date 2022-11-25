let toggleBtn;
let wrapper;
let section = document.querySelector("section");
let dark = false;
function getElements() {
  toggleBtn = document.querySelector(".toggle-btn");
  wrapper = document.querySelector(".wrapper");
}
getElements();
function toggleAnimation() {
  document.body.classList.add("stop-scrolling");
  dark = !dark;
  let clone = wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  section.appendChild(clone);
  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    wrapper.remove();
    clone.classList.remove("copy");
    getElements();
    toggleBtn.addEventListener("click", toggleAnimation);
    document.body.classList.remove("stop-scrolling");
  });
}
toggleBtn.addEventListener("click", toggleAnimation);
