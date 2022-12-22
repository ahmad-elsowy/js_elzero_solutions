let dateNow  = new Date()
let birthday = new Date("1993-12-20")
let diffMillSecond= dateNow - birthday


console.log(`"${Math.trunc(diffMillSecond/1000) } Seconds"`)
console.log(`"${Math.trunc(diffMillSecond/1000/60) } Minutes"`)
console.log(`"${Math.trunc(diffMillSecond/1000/60/60) } Hours"`)
console.log(`"${Math.trunc(diffMillSecond/1000/60/60/24) } Days"`)
console.log(`"${Math.trunc(diffMillSecond/1000/60/60/24/30) } Months"`)
console.log(`"${Math.trunc(diffMillSecond/1000/60/60/24/30/12) } Years"`)




"1667215147 Seconds"
"27786919 Minutes"
"463115 Hours"
"19296 Days"
"643 Months"
"53 Years"

// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"