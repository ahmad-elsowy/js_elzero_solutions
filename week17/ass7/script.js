let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

/*
//method 1

numsOne.push(...numsTwo)
console.log(numsOne)
*/


/*
//method 2

let aa = numsOne.concat(numsTwo)
console.log(aa)
*/


/*
//method 3
const aa = [...numsOne, ...numsTwo];
console.log(aa)
*/


/*
//method 4

const aa = [].concat(numsOne, numsTwo);
console.log(aa)
*/

// Needed Output
// [1, 2, 3, 4, 5, 6]