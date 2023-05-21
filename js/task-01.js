const listWithClass = document.querySelectorAll("li.item");
console.log("Number of categories:", listWithClass.length);
listWithClass.forEach(function (number, index) {
  console.log(number);
});
