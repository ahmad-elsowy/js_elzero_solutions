let parentDiv = document.getElementsByClassName("assign")[0];
let addClass = document.getElementsByClassName("classes-to-add")[0];
let removeClass = document.getElementsByClassName("classes-to-remove")[0];
let current = document.getElementsByClassName("current")[0];
let Lists = document.getElementsByClassName("classes-list")[0];
let show = Lists.lastElementChild;

let j = 0;

let arr = [];
addClass.addEventListener("blur", function () {
  let val = addClass.value.toLowerCase();
  if (val) {
    // to make sure that the user write something into the field after blur
    let valSplitted = val.split(" "); //to sort user input each time
    for (let i = 0; i < valSplitted.length; i++) {
      if (valSplitted[i] !== "") {
        //to prevent creating element when user enter space into the field
        arr[j] = valSplitted[i];
        j++;
      }
    }
    //sot elements
    arr.sort();
    //update element classes
    while (show.hasChildNodes()) {
      show.removeChild(show.firstChild);
    }
    //create new elements
    for (let k = 0; k < arr.length; k++) {
      let element = document.createElement("div");
      element.className = arr[k];
      let textElement = document.createTextNode(arr[k]);
      element.appendChild(textElement);
      show.appendChild(element);
    }

    addClass.value = null; // to empty the field after blur
  }
});

removeClass.addEventListener("blur", function () {
  let val = removeClass.value.toLowerCase();
  let valSplitted = val.split(" ");
  for (let i = 0; i < valSplitted.length; i++) {
    // remove element
    let element = document.getElementsByClassName(valSplitted[i])[0];
    show.removeChild(element);
  }
  removeClass.value = null; // to empty the field after blur
});
