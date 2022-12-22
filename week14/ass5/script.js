let div = document.querySelector("div");
let xx =""
let counter = setInterval(countDown, 1000);
function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
     xx =  window.open("https://elzero.org", "_blank", "width = 400 ,  height = 400 , left = 100 , top = 100");
  }else if(div.innerHTML === "0"){
    clearInterval(counter)
    xx.close()
  }
}
