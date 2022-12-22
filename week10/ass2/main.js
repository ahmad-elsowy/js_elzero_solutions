
    // لديك متغير بإسم myString يحتوي على Letters منها المكرر ومنها العادي
    // قم بإنشاء Array جديدة بواسطة ال Filter
    // يجب عليك إستثناء ال Letters المكررة نهائيا من النتيجة
    // يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة

    let myString = "EElllzzzzzzzeroo";

    // let newString = myString.split("").filter(function(e,i,arr){
    //     return arr[i-1] !== arr[i] 
    // }).join("")

      let newString = myString.split("").reduce(function(acc,cur,i,arr){
        if(arr[i-1] === arr[i] ){
          return  `${acc}`
        }else{
            return `${acc}${cur}`
        } 
    })


    
    console.log(newString)
// Elzero