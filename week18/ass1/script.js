let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
        ['2001:db8:3333:4444:5555:6666:7777:8888']

let re = /\d{4}:\w+\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig
console.log(ip.match(re))
console.log(re.test(ip))


let re2 = /\d{4}:\w+\d(:\d{4})+/ig
console.log(ip.match(re2))
console.log(re2.test(ip))