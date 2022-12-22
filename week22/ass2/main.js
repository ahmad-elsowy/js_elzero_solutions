    fetch("/main.json").then((result) => {
       let  media  = result.json()
        return media;
      }).then((media)=>{
        media.length = 5
        return media
      } )
    .then((result) =>{
        for(let i =0;i<result.length;i++){
            let  div = document.createElement("div")
            let headerText = document.createTextNode(result[i].title)
            let paragraphText = document.createTextNode(result[i].description)    
            let h3 = document.createElement("h3")
            let p = document.createElement("p")

            document.body.appendChild(div)
            h3.appendChild(headerText)
            p.appendChild(paragraphText)
            div.appendChild(h3)
            div.appendChild(p)
       
       }
    }) 
    .catch((rej) => console.log(rej))
    .finally(console.log("fuck u world"))