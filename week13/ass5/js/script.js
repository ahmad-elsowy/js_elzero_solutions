let div = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");

div.onclick = function () {
  console.log("this is div");
};
span.onclick = function () {
  console.log("this is span");
};
p.onclick = function () {
  console.log("this is p");
};
article.onclick = function () {
  console.log("this is article");
};
section.onclick = function () {
  console.log("this is section");
};
