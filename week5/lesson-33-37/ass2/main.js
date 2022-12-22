// لديك ثلاث متغيرات والمطلوب فحص الشروط التالية وإظهار الرسالة بنفس شكل ال Output في المثال
// السطر الأول إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني
// السطر الثاني إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني ولكن النوع مختلف
// السطر الثالث إذا كانت قيمة المتغير الأول ليست نفس قيمة المتغير الثالث وليست ايضا نفس النوع
// السطر الرابع إذا كانت قيمة المتغير الثاني لا تساوي المتغير الثالث ولكنهم نفس النوع
// يجب فحص نوع البيانات والقيمة بنفسك لأن البيانات يمكن ان يتغير نوعها وقيمتها

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
} else if (num1 == str && typeof num1 !== typeof str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
} else if (num1 != str2 && typeof num1 !== typeof str) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
} else if (str !== str2 && typeof str === typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
