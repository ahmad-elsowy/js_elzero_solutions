let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

let [t, ag, av, [ ,c] ] = Object.values(myFriends[chosen]);

console.log(Object.values(myFriends[chosen]));




if(chosen === 1){
    
    console.log(`${t}
    ${ag}
    ${av ?  "Available" : "Not Available"}
    ${c}`)
}else if (chosen === 2){
    console.log(`${t}
    ${ag}
    ${av ?  "Available" : "Not Available"}
    ${c}`)
}else if(chosen === 3){
    console.log(`${t}
    ${ag}
    ${av ?  "Available" : "Not Available"}
    ${c}`)
}


// // If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"