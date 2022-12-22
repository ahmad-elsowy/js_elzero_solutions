let string1= "https://(:-a-b.)-c-d.ef(:.gh)/.."
let string2= "https://x.x.x.x/."
let string3= "https://-.-.x.x/."
let string4= "http://-.x/"
let string5="http://-d-w.ee"


let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
         
console.log(re.test(string1))
console.log(re.test(string2))
console.log(re.test(string3))
console.log(re.test(string4))
console.log(re.test(string5))

// https? ==>http or https

//[-\w]+)  ==> -d-w or -d

// .* ==> .. or .. or no 
//(?:[-\w]+\.) ==> (?:)==> 