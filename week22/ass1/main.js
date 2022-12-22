const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
      let myRequest = new XMLHttpRequest();
      myRequest.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(Error("No Data Found"));
        }
      };
  
      myRequest.open("GET", apiLink);
      myRequest.send();
    });
  };
  
  
  getData("/main.json")
    .then((result) => {
      result.length = 5;
      return result;
    })
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