// قم بإنشاء Function تظهر رسالة ترحيب لكل شخص بأي إسم تريده
// ال Function تقبل إثنين Parameters وهما إسم الشخص والنوع سواء ذكر أو انثى
// قم بطباعة رسالة ترحيبية للشخص فيها إسمه وقبل الإسم Mr أو Miss بناء على نوع الشخص سواء ذكر أو انثى
// لو لم يكتب الشخص نوعه ويفضل عدم ذكره لا تطبع Mr ولا Miss وإطبع الرسالة الترحيبية فقط

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`"Hello Mr ${theName}"`);
  } else if (theGender === "Female") {
    console.log(`"Hello Miss ${theName}"`);
  } else {
    console.log(`"Hello ${theName}"`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
