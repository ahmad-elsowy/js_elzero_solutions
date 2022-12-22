let num = document.getElementsByName("elements")[0];
let texts = document.getElementsByName("texts")[0];
let create = document.getElementsByName("create")[0];
let type = document.getElementsByName("type")[0];
// let divOption = type.firstElementChild;
// let sectionOption = type.lastElementChild;
let result = document.getElementsByClassName("results")[0];
// let myForm = document.getElementsByTagName("form")[0];

num.addEventListener("change", function () {
  console.log(num.value);
});
texts.addEventListener("change", function () {
  console.log(texts.value);
});
type.addEventListener("change", function () {
  console.log(type.value);
});

create.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("ok");

  while (result.hasChildNodes()) {
    result.removeChild(result.firstChild);
  }

  for (let i = 0; i < num.value; i++) {
    //creation of new element
    let newDiv = document.createElement("div");
    let newtext = document.createTextNode(texts.value);
    newDiv.appendChild(newtext);
    newDiv.className = "box";
    newDiv.setAttribute("title", "Element");
    newDiv.id = `id-${i + 1}`;
    result.appendChild(newDiv);
  }
});
