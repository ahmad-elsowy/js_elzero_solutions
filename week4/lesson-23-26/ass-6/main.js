// قم بإستخدام المتغير التالي لتخرج بالنتيجة 10 ب 5 طرق مختلفة
// يجب إستخدام المتغير فقط وعدم كتابة اي ارقام يدويا
// يجب عدم تكرار اي حل من الحلول

let flt = 10.4;

console.log(flt.toFixed(0)); // 10
console.log(flt.toPrecision(2)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
