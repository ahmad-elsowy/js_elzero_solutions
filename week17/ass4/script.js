let theNumber = 100020003000;

// let gg = theNumber.toString()
// let ff = new Set ([...gg])
// let aa = [...ff] 
// let bb= aa.filter((e)=> e > 0 )
// let cc = bb.map(e=> parseInt(e))
// let dd = cc.join('')
// let ee = Number (dd) 


// console.log(gg)// 100020003000
// console.log( typeof gg)//string
// console.log(ff)// Set(4) {'1', '0', '2', '3'}
// console.log(aa)// ['1', '0', '2', '3']
// console.log(bb)// ['1', '0', '2', '3']
// console.log(cc)//[1, 2, 3]
// console.log(dd)//123
// console.log( typeof dd)//string
// console.log(ee)//123
// console.log( typeof ee)//number




let xx = Number (  [...new Set (  [...theNumber.toString()]  )]  .filter((e)=> e > 0 )   .map(e=> parseInt(e))  .join('') ) 
console.log(xx)//123
console.log( typeof  xx)//number
