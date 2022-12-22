// قم بإنشاء Function تقوم بحساب عمرك بجميع وحدات الوقت
// ال Function تقبل Parameter واحد فقط هو عمرك بالسنين
// المطلوب طباعة عمرك بالشهور والأسابيع والأيام والساعات والدقائق والثواني
// المطلوب طباعة كل وحدة من وحدات الوقت في سطر منفصل في ال Console
// يجب التأكد من أن العمر أكبر من 10 وأقل من 100 وفي حالة غير ذلك إطبع رسالة تفيد أن العمر خارج النطاق

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 12 * 4} Weeks`);
    console.log(`${theAge * 12 * 4 * 7} Days`);
    console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
    console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minuites`);
    console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
// ageInTime(28); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
