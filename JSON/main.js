/* 
JSON 
JAVASCRIPT OBJECT NOTATION
*/

const objeto = {
    nome : 'fulano',
    idade : 23,
}

const json = JSON.stringify(objeto) // PASSANDO UM OBJETO JS PARA STRING

const jsonParseado = JSON.parse(json) // RECEBENDO O OBJETO EM STRING E PASSANDO PARA OBJETO JS

console.log(json)

console.log(jsonParseado.idade)
