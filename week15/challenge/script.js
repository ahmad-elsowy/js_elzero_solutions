let add = document.querySelector(".add")
let input = document.querySelector(".input")
let tasks = document.querySelector(".tasks")

let creatDivs = function(){
    let  createdDiv= document.createElement("div")
    let p =  document.createElement("p")
    let button = document.createElement("button")
    let txtBtn =  document.createTextNode("Delete")
    let txtP =  document.createTextNode(input.value)
    
    tasks.appendChild(createdDiv)   
    createdDiv.appendChild(p)
    createdDiv.appendChild(button)
    p.appendChild(txtP)
    button.appendChild(txtBtn)
//     let  createdDiv= document.createElement("div")
//     let p = document.createElement("p")
//     let button = document.createElement("button")
//     let txtBtn = document.createTextNode("Delete")
//     let txtP = document.createTextNode(input.value)
    
//    tasks.appendChild(createdDiv)   
//     createdDiv.appendChild(p)
//     createdDiv.appendChild(button)
//     p.appendChild(txtP)
//     button.appendChild(txtBtn)
    

createdDiv.style.cssText=
    `
    display:flex;
    justify-content: space-between;
    align-items: center
    position:relative;
    width:100%;
    background-color:white;
    padding:10px;
    border-radius:5px

    `

//click on delete button
    button.addEventListener("click" , function(e){
        // createdDiv.style.display="none"
        createdDiv.remove()
        })
    }
    
    //put data entered to local storage
    if( window.localStorage.taskValue){
        input.value  = window.localStorage.taskValue
    }
    
    
    let taskVal =function(){
        window.localStorage.taskValue =   input.value 
    }
    
    
    //click on Add Task button
    add.addEventListener("click" , function(e){
        if( input.value !== " "){
            taskVal()
            console.log(input.value )
             creatDivs()
            // window.localStorage.tasks = creatDivs()
            input.value=" "
        }else{
            e.preventDefault()
        }
    })
  

  