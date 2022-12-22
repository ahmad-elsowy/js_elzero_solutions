let div = document.querySelector("div");

let counter = setInterval(countDown, 1000);
function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "6") {
    location.assign("https://elzero.org/");
  }
}
