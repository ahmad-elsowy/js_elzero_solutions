// قم بإنشاء Function تقوم بضرب جميع الأعداد التي تمررها لها في بعضها
// غير معروف كم عدد ال Parameters التي ستمررها لل Function
// إذا كان ال Argument ألمستخدم في ال Function عبارة عن String لا تستعمله مع الأرقام
// إذا كان ال Argument عبارة عن Float قم بتحويله ل Integer قبل بدأ عملية الضرب

function multiply(...m) {
  for (let i = 0; i < m.length; i++) {
    if (typeof m[i] != "number") {
      continue;
    } else {
      m = Math.trunc(m[i]) * Math.trunc(m[i + 1]);
      console.log(m);
    }
  }
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
