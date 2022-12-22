// كل ما عليك هو التأكد أن قيمة متغير needle موجود داخل ال Array المسماه haystack
// يجب عمل الحل بثلاث طرق مختلفة
// قم بطباعة كلمة Found في ال Console إذا كانت الكلمة موجودة


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.indexOf(needle) ){
    console.log("Found 1")
}
if (haystack.lastIndexOf(needle) ){
    console.log("Found 2")
}
if (haystack.includes(needle) ){
    console.log("Found 3")
}