let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z"
let zletter = myString[myString.length - true]


// solution 1 

// let solution = myString.split('').filter(function(e){
//     return e !== "," && isNaN(parseInt(e)) && e !== zletter
// }).map(function(e){
//     return e.replace( "_" , " ") 
// }).reduce(function(acc,cur){
//     if(acc === cur){
//         return `${acc}`
//     }else{
//         return  `${acc}${cur}` 
//     }
// })


//   solution 2

// let solution = myString.split(",").filter( el =>  isNaN(parseInt(el)) )
// .reduce((acc,cur) => acc+ cur).split("_").reduce((acc,cur) =>`${acc} ${cur}` ).slice(myString.startsWith(""),-myString.startsWith(""))


// solution 3
let solution=myStrings.split("").map(function(el){
    return el==="," || !isNaN(parseInt(el)) ? "" : el.replace("_"," ")
    }).join("").slice(Boolean(myStrings),-true);
    document.write(solution);


console.log(solution)// Elzero Web School

