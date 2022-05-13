/*

FETCH

*/


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
botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(TransformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro)


