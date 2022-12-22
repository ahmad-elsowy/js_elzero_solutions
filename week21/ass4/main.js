let mainData = JSON.parse(`[
    {
        "id": 1,
        "name":"ahmed",
        "section" : "politic",
        "title": "one",
        "content": "article one"
    },
    {
        "id": 2,
        "name":"gamal",
        "section" : "navy",
        "title": "two",
        "content": "article two"
    },
    {
        "id": 3,
        "name":"hasssn",
        "section" : "html",
        "title": "three",
        "content": "article three"
    },
    {
        "id": 4,
        "name":"ali",
        "section" : "css",
        "title": "four",
        "content": "article four"
    },
    {
        "id": 5,
        "name":"elsowy",
        "section" : "js",
        "title": "five",
        "content": "article five"
    }
]`)


let div = document.createElement("div")
 div.setAttribute("id","data")
document.body.appendChild(div)

for(let i =0 ;i<mainData.length;i++){
    console.log(mainData[i])

    let divch = document.createElement("div")
    let title = document.createElement("h2")
    let name = document.createElement("p")
    let section = document.createElement("p")
    let content = document.createElement("p")

    div.appendChild(divch)
    divch.appendChild(name)
    divch.appendChild(title)
    divch.appendChild(section)
    divch.appendChild(content)

    title.innerHTML =  mainData[i].title
    name.innerHTML =`name : ` + mainData[i].name
    section.innerHTML = mainData[i].section
    content.innerHTML = `content : ` + mainData[i].content

}