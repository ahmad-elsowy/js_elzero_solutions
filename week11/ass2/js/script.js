// قم بإنشاء Object جديد بأربع طرق مختلفة

// Method One
// Create Your Object Here
const objMethodOne = Object.create({ property: "Method One" });

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

const objMethodTwo = Object.assign({}, { property: "Method Two" });
console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
const objMethodThree = {
  property: "Method Three",
};
console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
const objMethodFour = new Object({
  property: "Method Four",
});
console.log(objMethodFour.property); // "Method Four"
