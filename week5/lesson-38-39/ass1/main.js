// لديك متغير يحتوي على اليوم الخاص بالموعد وبواسطة ال Switch قم بإظهار رسالة للشخص على حسب اليوم المختار مع عمل الشروط التالية
// يجب التأكد أن إسم اليوم لا توجد قبله مسافات ولا بعده ويكون أول حرف Capital حتى لو تم كتابة الإسم بحروف صغيرة
// إذا كانت قيمة المتغير هي يوم الجمعة أو السبت أو الأحد تظهر له أنه لا توجد مواعيد متاحة في هذه الأيام
// إذا كانت قيمة المتغير هي يوم الإثنين أو الخميس يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى الخامسة مساء
// إذا كانت قيمة المتغير هي يوم الثلاثاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السادسة مساء
// إذا كانت قيمة المتغير هي يوم الأربعاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السابعة مساء
// إذا كانت قيمة المتغير هي يوم خاطيء تظهر له رسالة أن اليوم فيه خطأ

let day = "   World  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// let d = day.trim().charAt(0).toUpperCase();
let day2 = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
// console.log(day2);
switch (day2) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}

let ddd = ["a", "b", "c"];
ddd[6] = "hh";
console.log(ddd);
