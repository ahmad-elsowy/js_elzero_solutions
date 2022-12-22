let myReqest = new XMLHttpRequest()

myReqest.onload = function(){
    console.log(this.readyState)
    console.log(this.status)
    if(this.readyState === 4 && this.status === 200){
        console.log("JSON Object Content Here")
        console.log("Data Loaded")
        console.log(this.responseText)
    }
}

myReqest.open("GET","/articles.json")
myReqest.send()
