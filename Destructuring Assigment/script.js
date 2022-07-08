/*

Destructuring Assigment

*/

const obj = {
    nome: 'fulano',
    idade : 35,
}

const {
    nome : nomeDoUsuario,
    idade
} = obj


function TransformarEmJson(response){
    return response.json()
}

function exibirNaTela(dados){
    console.log('exibir na tela', dados)
}

function exibirErro(){
    console.log('Ops Deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')
botaoCarregar.onclick = aoClicarNoBotao


async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(TransformarEmJson)
        .catch(exibirErro)

    console.log(dados) 
    
    
    const {name, email, phone} = dados
}    