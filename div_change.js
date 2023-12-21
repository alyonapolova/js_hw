const divEl = document.querySelector(".main-div");
console.log(divEl);

divEl.addEventListener("click", onChangeColor);
function onChangeColor(e) {
  console.log(e.target);

  if (e.target.classList.contains("box1")) {
    e.target.style.backgroundColor = "black";
  }
  if (e.target.classList.contains("box2")) {
    e.target.style.backgroundColor = "red";
  }
  if (e.target.classList.contains("box3")) {
    e.target.style.backgroundColor = "pink";
  }
}
