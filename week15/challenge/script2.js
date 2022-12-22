


    let parent = document.querySelector(".parent")
    let button = document.querySelector("button")
    
    
    let  div= document.createElement("div")
    
    
    button.addEventListener("click",function(){
        
        // let text = document.createTextNode("sowy")
        div.innerHTML = "ahmed"
        // div.appendChild(text)  
        parent.appendChild(div)
        
        
        window.localStorage.div = div.innerHTML
        
    })
    
    
    
    if(window.localStorage.div ){
        div.innerHTML =  window.localStorage.div
        
    }
    // window.localStorage.clear()
    


    // b.addEventListener('click', addDiv);
    // function addDiv() {
    //     var div = document.createElement('div');
    //     div.innerHTML = "Content to be add and get from localStorage!"
    //     localStorage.setItem("contentDiv",div.outerHTML);
    // }

// To Retrieve can use like:

    // function getStoaregeDate(){
    //      div.innerHTML = 
    //     localStorage.getItem("contentDiv");
    // }