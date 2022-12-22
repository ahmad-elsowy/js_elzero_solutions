let div = document.querySelector("div")
let fonts = document.getElementById("fonts")
let colors = document.getElementById("colors")
let size = document.getElementById("size")

if(  window.localStorage.color){
    div.style.color=window.localStorage.color
    colors.value = window.localStorage.color
}

colors.addEventListener("change" , function(e){
    window.localStorage.color = e.currentTarget.value
    div.style.color=window.localStorage.color
    console.log(window.localStorage.color)
    
})

if(  window.localStorage.fontSize){
    div.style.fontSize=`${window.localStorage.fontSize+"px"}`  
    size.value = window.localStorage.fontSize
}
size.addEventListener("change" , function(e){
    window.localStorage.fontSize = e.currentTarget.value
    div.style.fontSize= `${window.localStorage.fontSize+"px"}`     
})


if(  window.localStorage.fontFamily){
    div.style.fontFamily=window.localStorage.fontFamily 
    fonts.value = window.localStorage.fontFamily
}
fonts.addEventListener("change" , function(e){
    window.localStorage.fontFamily = e.currentTarget.value
    div.style.fontFamily= window.localStorage.fontFamily
       
})

