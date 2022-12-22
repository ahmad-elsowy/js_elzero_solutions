// ممنوع إستخدام الأرقام نهائيا
// يجب كتابة سطر Code واحد فقط لتخرج القيمة المطلوبة

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Cod
finalArr=(arrTwo.reverse().slice(0,1)).concat((arrOne.reverse()),arrTwo.slice(1))


console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]