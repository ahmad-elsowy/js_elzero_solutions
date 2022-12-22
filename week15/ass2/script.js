let sel = document.getElementById("sel")
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")

if( window.sessionStorage.num ){
    sel.value =  window.sessionStorage.num
}
sel.addEventListener("change" , function(e){
    window.sessionStorage.num = e.currentTarget.value
   
})


if( window.sessionStorage.txt1 ){ 
    first.value =  window.sessionStorage.txt1
}

first.addEventListener("blur" , function(e){
    window.sessionStorage.txt1 = e.currentTarget.value
})

if( window.sessionStorage.txt2 ){ 
    second.value =  window.sessionStorage.txt2
}

second.addEventListener("blur" , function(e){
    window.sessionStorage.txt2 = e.currentTarget.value
})

if( window.sessionStorage.txt3 ){ 
    third.value =  window.sessionStorage.txt3
}

third.addEventListener("blur" , function(e){
    window.sessionStorage.txt3 = this.value
})
