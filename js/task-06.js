const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", onTextBlur);
function onTextBlur() {
  const textEl = textInput.value.trim();
  if (textEl.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
