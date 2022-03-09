let numeroTabuada = prompt('Digite o número que deseja fazer a tabuada')
let numero = parseInt(numeroTabuada)
for(let count = 1; count <= 10; count++){
    resultado = numero * count
    resultadoPrint = `${numero} x ${count} = ${resultado}<br>`
    
    document.write(resultadoPrint)
}
