const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", onTextSubmit);
function onTextSubmit() {
  const name = textInput.value.trim();
  if (name === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = name;
  }
}
