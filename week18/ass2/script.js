let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/os\w+o/ig))
//['Os10O', 'Os100O', 'Osa100O']
console.log(specialNames.match(/\bos\w+o\b/ig))
//['Os10O', 'Os100O', 'Osa100O']
