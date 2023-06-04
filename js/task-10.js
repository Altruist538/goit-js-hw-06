function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divBoxes = document.querySelector("#boxes");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const controlsDiv = document.querySelector("#controls");
let divArr = [];
createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);
function createBoxes() {
  const numberEl = controlsDiv.querySelector("input");
  const amount = parseInt(numberEl.value);

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    let sizeEl = 30 + i * 10;
    divEl.style.width = `${sizeEl}px`;
    divEl.style.height = `${sizeEl}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divArr.push(divEl);
  }

  return divBoxes.append(...divArr);
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
  divArr = [];
}
