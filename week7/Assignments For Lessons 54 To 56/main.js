// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
// يجب عدم طباعة الأرقام ولا الاسماء التي تبدأ بحرف A
// يجب إستخدام ال Loop While لعمل المطلوب

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

for (let i = index; i < friends.length; i++) {
  if (typeof friends[i] === "string") {
    if (friends[i].startsWith("A")) {
      continue;
    } else {
      console.log(`("${++counter} => ${friends[i]}");`);
    }
  } else {
    continue;
  }
}

/*
// Output
("1 => Sayed");
("2 => Mahmoud");
*/
