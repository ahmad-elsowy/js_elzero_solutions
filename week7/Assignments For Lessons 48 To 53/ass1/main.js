// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
// يجب طباعة الأرقام وإستثناء الرقم 40 كما في المثال
// يجب إستخدام ال Loop For لعمل المطلوب
let start = 10;
let end = 100;
let exclude = 40;
/*
// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;
*/
for (let i = start; i <= 100; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}
