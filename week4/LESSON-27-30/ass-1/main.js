// لديك متغير يحتوي على String
// المطلوب جلب أول حرف من ال String
// يجب تنفيذ الحل ب 6 طرق مختلفة
// يجب عدم تكرار اي حل ويجب إستعمال المتغير فقط
// يجب التأكد أن الحرف صغير Small Letter
// واحد من الحلول تأكد أنه يقوم بتكرار الحرف المأخوذ 3 مرات

let userName = "Elzero";
console.log(userName.toLowerCase().charAt(0)); // e
console.log(userName.toLowerCase().charAt(0)); // e
console.log(
  userName.toLowerCase().slice(-userName.length, -(userName.length - 1))
); // e
console.log(userName.toLowerCase().slice(0, 1)); // e
console.log(userName.toLowerCase().substring(0, 1)); // e
console.log(userName.toLowerCase().charAt(0).repeat(3)); // eee
