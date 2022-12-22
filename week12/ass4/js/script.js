/* <div class="one" title="one">One</div>
   <div class="two" title="two">Two 2</div> */

//    <div class="one" title="two">Two</div>
//    <div class="two" title="one">One</div>

let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];

// let oneText = one.textContent;
// let twoText = two.textContent;

if (one.getAttribute("title") !== "one") {
  one.setAttribute("title", "one");
}
if (two.getAttribute("title") !== "two") {
  two.setAttribute("title", "two");
}

if (one.innerHTML !== "one") {
  one.innerHTML = "One";
}
if (two.innerHTML !== "two") {
  two.innerHTML = "Two 2";
}
