let counterValue = 0;
const text = document.querySelector("span#value");
const chekBtnUp = document.querySelector('[data-action="increment"]');
chekBtnUp.addEventListener("click", () => {
  text.textContent = counterValue += 1;
});
const chekBtnDown = document.querySelector('[data-action="decrement"]');
chekBtnDown.addEventListener("click", () => {
  text.textContent = counterValue -= 1;
});
