let a = 21;
let b = 20;
let result = `_${b}${a}`.repeat(3);
// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // _21_2021_2021_2021_20_
console.log(`_${a}${result}_${b}`); // _21_2021_2021_2021_20_
