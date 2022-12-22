
    // لديك متغير بإسم numsAndStrings يحتوي على Letters And Numbers
    // قم بإنشاء Array جديدة بواسطة ال Filter + Map
    // يجب عليك إستثناء ال Letters من النتيجة
    // يجب عليك عكس الأرقام بمعنى الموجب يكون سالب والسالب يكون موجب
    // يجب عليك إستخدام ال Map + Filter + ما تريد

    let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

    let invnums = numsAndStrings.filter(function(e){
      return  !isNaN(parseInt(e)) 
    }).map(function(e){
        return -e
    })
console.log(invnums)
// [-1, -10, 10, 20, -5, -3]


