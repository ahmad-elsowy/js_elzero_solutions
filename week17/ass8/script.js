let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
// Needed Output
// 210

// let a = n1.join('')//10301020
// let b= n1.join('').split('')// ['1', '0', '3', '0', '1', '0', '2', '0']
// let c = new Set(b)//{'1', '0', '3', '2'}
// let [x,y,,z] = c

 let [x,y,,z] = new Set(n1.join('').split(''))
 console.log(`${z + x + y }`) //210



/*
let a = n1.join('').split('')//['1', '0', '3', '0', '1', '0', '2', '0']
let b = new Set (a)//{'1', '0', '3', '2'}
let c =[...b]//['1', '0', '3', '2']
let d = c.join("")//1032
let e = d.split(3)// ['10', '2']
let f = e.reverse()//['2', '10']
let g = f.join('')//210

console.log(g)
*/



console.log( [...new Set (n1.join('').split(''))].join("").split(3).reverse().join(''))