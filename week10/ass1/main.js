// لديك متغير بإسم mix يحتوي على Letters And Numbers
// قم بإنشاء Array جديدة بواسطة ال Map
// يجب عليك إستثناء الأرقام نهائيا من النتيجة
// يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
// يجب إستعمال ال Map + Reduce مع ما تعلمته لتخرج بالناتج المطلوب
// ممنوع إستخدام ال Join أو Filter

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixed = mix.map(function(e){
    return isNaN(parseInt(e)) ? e :""  
}).reduce(function(p,c){
    return `${p}${c}`
})


console.log(mixed)

// Elzero
