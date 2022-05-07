/*

AJAX - 2005

Asynchronous Js and XML requests

ROTAS

ENDPOINT

*/


const xhtpp = new XMLHttpRequest()

xhtpp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
    const response = JSON.parse(this.responseText)

    console.log(response[0])
    }
}


xhtpp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhtpp.send()
