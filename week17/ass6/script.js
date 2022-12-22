// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

 let a = chars.filter((e) =>  typeof e === "number")
 let c = chars.filter((e) =>  typeof e === "string") 



let chars1=[]
for(let i=0; i < a.length  ;i++){
    chars1.unshift(c[i])
}
c.unshift(...chars1.reverse())

console.log(c)
