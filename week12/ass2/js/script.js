// لدينا مجموعة من الصور في الصفحة عبارة عن 10 صور بلا Source
// المطلوب هو تغيير ال Src Attribute لصورة اللوجو التالية “https://elzero.org/wp-content/themes/elzero/imgs/logo.png”
// تغيير محتوى ال Alt Attribute ل Elzero Logo
// يجب عمل Loop يقوم بالوظيفة مباشرة ولا تقوم بتكرار ال Code

/*
<div>
  <img src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png" alt="Elzero Logo">
</div>
*/


let count = document.body.children.length-1
let myImg = document.getElementsByTagName("img")
console.log(myImg)
console.log(count)
for(let i =0 ;i<count;i++){
    myImg[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    myImg[i].setAttribute("alt","Elzero Logo")
}