let div = document.getElementById("popup");
let span = document.getElementById("close");

setTimeout(function () {
  window.onload((div.style.display = "block"));
}, 5000);

span.onclick = function () {
  div.style.display = "none";
};
