
    // لديك متغير بإسم myArray يحتوي على Array وبداخلها Array أخرى
    // قم بإنشاء Array جديدة بواسطة ال Reduce
    // يجب عليك عمل Flatten لل Array لترجع ب Array واحدة
    // يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
    // ممنوع إستخدام Array.flat() نهائيا

    let myArray = ["E", "l", "z", ["e", "r"], "o"];

   
console.log( myArray.reduce((p,c) => p.concat(c),[] ))


let newARRAY = myArray.reduce(function(p,c){
    return  p.concat(c)
},[]).join("")
console.log(newARRAY)
// // Elzero


// const arr = [1, 2, [3, 4],5];
// console.log(arr.reduce((acc, val) => acc.concat(val), []))