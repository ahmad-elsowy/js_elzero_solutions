let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

// let re = /\d{2}(\/|\s)(\d{2}|-\s)((\/\d{4})|(\d{2}\s-\s\d{4})|(\s\d{4})|(\s\d{2}))/ig; 
let re = /\d{2}(\/|\s(-\s)?)\d{2}(\/|\s(-\s)?)(\d{2,})/ig; 

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

