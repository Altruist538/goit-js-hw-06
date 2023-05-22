const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const arrNew = [];
ingredients.forEach(function (ingredient) {
  const liNew = document.createElement("li");
  liNew.textContent = ingredient;
  liNew.classList.add("item");
  arrNew.push(liNew);
});
const list = document.querySelector("ul#ingredients");
list.append(...arrNew);
