const t0 = performance.now();

for(let i= 0 ;i<100000;i++ ){
    console.log(i)
}
const t1 = performance.now();

console.log(`"Loop Took ${Math.trunc(t1 - t0) } Milliseconds."`)
// Needed Output

// "Loop Took 1921 Milliseconds."

/*

const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
*/