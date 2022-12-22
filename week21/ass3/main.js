// let mainData = JSON.parse(`[
//     {
//         "id": 1,
//         "name":"ahmed",
//         "section" : "politic",
//         "title": "one",
//         "content": "article one"
//     },
//     {
//         "id": 2,
//         "name":"gamal",
//         "section" : "navy",
//         "title": "two",
//         "content": "article two"
//     },
//     {
//         "id": 3,
//         "name":"hasssn",
//         "section" : "html",
//         "title": "three",
//         "content": "article three"
//     },
//     {
//         "id": 4,
//         "name":"ali",
//         "section" : "css",
//         "title": "four",
//         "content": "article four"
//     },
//     {
//         "id": 5,
//         "name":"elsowy",
//         "section" : "js",
//         "title": "five",
//         "content": "article five"
//     }
// ]`)

//to read from file path
let request = new XMLHttpRequest();
   request.open("GET", "/artices.json", false);
   request.send(null)

let mainData = JSON.parse(request.responseText);


for(let i in mainData){
    mainData[i].section = "ALL"
}
console.log(mainData)

let updatedData = JSON.stringify(mainData)
console.log(updatedData)