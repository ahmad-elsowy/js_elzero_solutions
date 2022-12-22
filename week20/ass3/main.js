let x = new Date()
x.setDate(0)
console.log(x)
// Fri Sep 30 2022 14:21:24 GMT+0200 (Eastern European Standard Time)
console.log(`"Previous Month Is ${x.toLocaleString('default', { month: 'long' })} And Last Day Is ${x.getDate()}"`)
"Previous Month Is September And Last Day Is 30"




// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"


