console.group("Group 1")
    console.log("m1")
    console.log("m2")
    console.group("child Group")
        console.log("m1")
        console.log("m2")
        console.group("Grand chilr Group")
            console.log("m1")
            console.log("m2")
        console.groupEnd()
    console.groupEnd()
console.groupEnd()

console.group("Group 1")
    console.log("m1")
    console.log("m2")
console.groupEnd()