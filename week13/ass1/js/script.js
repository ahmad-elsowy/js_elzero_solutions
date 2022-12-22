// Your Code Here
let element = document.getElementsByTagName("a");
for (let i = 0; i < document.body.childElementCount - 1; i++) {
  element[i].onclick = function (e) {
    if (
      element[i].classList.contains("open") &&
      element[i].innerHTML.trim() === "Elzero"
    ) {
      console.log("opend");
    } else {
      e.preventDefault();
      console.log("closed");
    }
  };
}
