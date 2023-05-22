const listWithClass = document.querySelectorAll("li.item");
console.log("Number of categories:", listWithClass.length);
listWithClass.forEach(function (number) {
  console.log("Category:", number.querySelector("h2").textContent);
  console.log("Elements:", number.querySelectorAll("li").length);
});
