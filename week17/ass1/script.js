setOfNumbers = new Set().add(10)
setOfNumbers.add(20).add(setOfNumbers.size)

console.log(setOfNumbers)



let [,,lastElement] =setOfNumbers
console.log( lastElement)



// // Needed Output
// Set(3) {10, 20, 2}
// 2