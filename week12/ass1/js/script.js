// لديك العنصر التالي في ال HTML عليك إختياره بال JavaScript ب 15 طريقة مختلفة
// يمكنك إستخدام querySelector أربع مرات فقط وكذلك querySelectorAll اربع مرات فقط

console.log(document.getElementById("elzero").innerHTML)  
console.log(document.getElementsByClassName("element")[0].innerHTML)  
console.log(document.getElementsByName("js")[0].innerHTML)  
console.log(document.getElementsByTagName("div")[0].innerHTML)  
console.log(document.querySelector("div").innerHTML)  
console.log(document.querySelector("#elzero").innerHTML)  
console.log(document.querySelector(".element").innerHTML)  
console.log(document.querySelector("[name=js]").innerHTML)  
console.log(document.querySelectorAll("[name=js]")[0].innerHTML)  
console.log(document.querySelectorAll(".element")[0].innerHTML)  
console.log(document.querySelectorAll("#elzero")[0].innerHTML)  
console.log(document.querySelectorAll("div")[0].innerHTML) 


console.log(document.body.children[0].innerHTML) 
console.log(document.documentElement.children[1].firstElementChild.innerHTML) 
console.log(document.body.firstElementChild.innerHTML) 


