const inputEl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");
inputEl.addEventListener("input", () => {
  spanText.style.fontSize = `${inputEl.value}px`;
});
