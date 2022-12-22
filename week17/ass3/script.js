let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  

let map = new Map(Object.entries(myInfo));

console.log(map)
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
console.log(map.size)
// 3
console.log(map.has("role"))
// true

