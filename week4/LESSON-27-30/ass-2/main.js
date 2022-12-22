// لديك بعض المتغيرات عبارة عن كلمة ومجموعة حروف
// في السطر الأول تأكد أن الحرف Z موجود داخل الكلمة وان النتيجة التي ستخرج هي true
// في السطر الثاني تأكد أن الكلمة تبدا بالحرف E وأن النتيجة التي ستخرج هي true
// في السطر الثالث تأكد أن الكلمة تنتهي بالحرف o وأن النتيجة التي ستخرج هي true
// لاحظ حالة الأحرف Capital And Small
// غير مسموح التلاعب بالمتغيرات

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.split("").includes(letterZ)); // True
console.log(word.toLocaleLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
