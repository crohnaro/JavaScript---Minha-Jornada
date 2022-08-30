//seletor por id
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'
//seletor por tag
document.querySelector('a').innerText = 'teste ancora'
//
document.querySelectorAll('a').innerHTML = 'teste'

//selecionando mais de um item -- método que consulta somente arrays
let ancoras = document.querySelectorAll('a') // função anonima / callback
ancoras.forEach(function(elemento){
    elemento.innerHTML = 'teste'
})

//selecionando mais de um 1 item por classe
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    box.innerHTML = 'box' + (index + 1) // contando os índices.
})