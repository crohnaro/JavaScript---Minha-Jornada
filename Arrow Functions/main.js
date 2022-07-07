/* 

Arrow Functions

ES6

As funções de seta nos permitem escrever uma sintaxe de função mais curta

*/

const soma = (param1, param2) => {
    return param1 + param2
}

//retorno implicito
const teste = (param1, param2) => param1 + param2


const resultado = teste(1, 2)
console.log(resultado)


//Quando tem 1 parametro pode remover paranteses
const teste2 = param1 => param1

console.log(teste2('ok'))

const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
}