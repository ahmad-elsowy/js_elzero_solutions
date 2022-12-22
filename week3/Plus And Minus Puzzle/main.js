// d = "30";
e = 40;
// console.log(d); //30
// console.log(+d); //30
// console.log(-d); //-30
// console.log(+d); //30
// console.log(d); //30
// console.log(+d++); //30>>31
// console.log(-d++); //-31>>32
// console.log(d); //32
// console.log(-d); //-32
// console.log(-e++); //-40
// console.log(e); //41
// console.log(--e * +d++);
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// let a = 13;
// let b = "22";
// let c = 81;
// console.log(a); //14
// console.log(b); //21
// console.log(c); //82
// console.log(--c);
// console.log(--c + +b);
// console.log(--a * +b++);
// console.log(--c + +b + --a * +b++); //81+21+13*21=375
// console.log(a); //13
// console.log(b); //22
// console.log(c); //81
// console.log(+b * a); //22*13=286
// console.log(a); //13
// console.log(b); //22
// console.log(c); //81
// console.log(--a - +true); //12-1=11
//375-286+11=100

/*
/*
/*
let a = 12;
let b = "20";
let c = 81;
11+20+80-11=100
*/
/*
let a = 12;
let b = "21";
let c = 81;
13-21+81+13+14=100
*/

r = "20";
console.log(+r++); //20
console.log(r); //21
console.log(-r++); //-21
console.log(r); //22
