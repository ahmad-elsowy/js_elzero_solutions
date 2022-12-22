// قم بإنشاء Function تطبع رسالة للمستخدم فيها إسمه وسنه وهل هو متاح للعمل أم لا
// ال Function تقبل ثلاثة Parameters الإسم والسن والحالة. وتكون أسمائهم a, b, c
// أنواع البيانات ستكون String للإسم و Number للسن و Boolean للحالة
// البيانات سوف يتم إستخدامها داخل ال Function بشكل عشوائي وليس لهم ترتيب معين
// البيانات غير مرتبة وليس لها إسم يعبر عنها يجب عليك طباعة الرسالة بناء على نوع البيانات لتكون رسالة منطقية.
// حالة العمل يمكن أن تكون True أو False وبناء عليها تتغير الرسالة
function checkStatus(a, b, c) {
  let arg = [a, b, c];
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === "string") {
      a = arg[i];
    } else if (typeof arg[i] === "number") {
      b = arg[i];
    } else if (typeof arg[i] === "boolean") {
      c = arg[i];
    }
  }

  if (c === true) {
    console.log(`"Hello ${a}, Your Age Is ${b}, You Are Available For Hire"`);
  } else {
    console.log(
      `"Hello ${a}, Your Age Is ${b},  You Are Not Available For Hire"`
    );
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
