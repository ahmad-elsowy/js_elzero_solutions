/*
 * <div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div>
*/
let myp = document.querySelector("p");
myp.remove();

let myDiv = document.getElementsByClassName("our-element")[0];

let startele = document.createElement("div");
startele.className = "start";
startele.setAttribute("title", "Start Element");
startele.setAttribute("data-value", "Start");
startText = document.createTextNode("Start");
startele.appendChild(startText);
myDiv.before(startele)



let endele = document.createElement("div");
endele.className = "End";
endele.setAttribute("title", "end Element");
endele.setAttribute("data-value", "end");
endText = document.createTextNode("end");
endele.appendChild(endText);
myDiv.after(endele)