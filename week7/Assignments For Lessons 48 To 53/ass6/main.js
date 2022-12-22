// ممنوع إستخدام الأرقام أو الحروف نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
// المطلوب بإستخدام ال Loop تحويل الحروف الكبير لصغيرة والعكس. شاهد المثال
// يجب إستخدام ال Loop For لعمل المطلوب
let start = 0;
let swappedName = "elZerO";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName.split("")[i] === swappedName.toLowerCase().split("")[i]) {
    swappedName.split("")[i] = swappedName.split("")[i].toUpperCase();
  } else {
    swappedName.split("")[i] = swappedName.split("")[i].toLowerCase();
  }
}
console.log(swappedName.split("").join(""));

// // Output
// ("ELzERo");
