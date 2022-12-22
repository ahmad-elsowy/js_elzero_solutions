// لديك ثلاث متغيرات والمطلوب فحص الشروط التالية وإظهار الرسالة بنفس شكل ال Output في المثال
// يجب عمل جميع الحلول ب If Condition واحدة
// السطر الأول تأكد أن المتغير الثالث أكبر من الأول ولا يساوي الثاني في النوع
// السطر الثاني تأكد أن المتغير الثالث أكبر من الأول ومساوي للثاني في القيمة ولا يساوي الثاني في النوع
// السطر الثالث تأكد أن قيمة المتغير الثالث لا تساوي الأول من ناحية القيمة والنوع ولا تساوي الثاني من ناحية النوع
// يجب فحص نوع البيانات والقيمة بنفسك لأن البيانات يمكن ان يتغير نوعها وقيمته

let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

if (num3 > num1 && typeof num3 !== typeof num1) {
  console.log(
    `${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num1}`
  );
} else if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
  console.log(
    `${num3} Is Larger Than ${num1}  And Value Is The Same As ${num3} And Type ${typeof num3} Not The Same Type As ${typeof num2}`
  );
} else if (num3 !== num1 && typeof num3 !== typeof num2) {
  console.log(
    ` {num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`
  );
}
