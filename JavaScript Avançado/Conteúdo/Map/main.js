const clientes = [
    {name: 'Fulano', lastname: 'Da Silva'},
    {name: 'Ciclano', lastname: 'Santos'},
    {name: 'Beltrano', lastname: 'Moreira'},
]

// [''Fulano da silva' , 'Ciclano Santos]

// sem utilizar o metodo map 
let clientesFinal = []
clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name + '' +  cliente.lastname)
})
console.log(clientesFinal)


//usando o map

const clientesFinalMap = clientes.map(cliente => cliente.name + '' + cliente.lastname )

console.log(clientesFinalMap)

