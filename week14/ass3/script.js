div = document.querySelector("div");
console.log( typeof div.innerHTML);

let counter = setInterval(countDown, 1000);
function countDown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(counter);
    }
}
