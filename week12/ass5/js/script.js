/* 
<img src="#" alt="Old" />
<img src="#" alt="Elzero New" />
<img src="#" alt="Old" />
<img src="#" alt="Elzero New" />
<img src="#" alt="Elzero New" /> 
*/
let element = document.querySelectorAll("[src='#']");

for (let i = 0; i < element.length; i++) {
  if (element[i].hasAttribute("alt")) {
    element[i].setAttribute("alt", "old");
  } else {
    element[i].setAttribute("alt", "Elzero New");
  }
}
