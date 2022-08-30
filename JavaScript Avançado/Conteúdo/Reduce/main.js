const clientes =  [
    { name: 'Tiago', score: 34 },
    { name: 'Jaqueline', score: 38 },
    { name: 'Sarah', score: 80 },
    { name: 'Clara', score: 50 },
    { name: 'Sophia', score: 98 },
]

// acc = accumulator
//curr = current
const clientesFinal = clientes.reduce((acc,curr) =>{
    if (curr.score >= 50){
        acc.pass.push(curr)
    }else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass : [],
    fail : []
})

console.log(clientesFinal)




const numeros = [1, 2, 3, 4, 5]

const numerosFinal = numeros.reduce((acc,curr) => {

    acc += `${curr + 1}`
    return acc

},'')

var traco = numerosFinal.length

console.log(numerosFinal)


var authors = ["a","b","c"];

var result = authors.reduce(function (author, val, index) {
    var comma = author.length ? " - " : "";
    return author + comma + val;
}, '');
console.log(result);