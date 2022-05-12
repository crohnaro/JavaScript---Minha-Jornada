/*

Promises

*/

function exibirNaTela(dados){
    console.log('exibir na tela', dados)
}

function exibirErro(){
    console.log('Ops Deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')
botaoCarregar.onclick = () => 
    carregarFotos()
        .then(exibirNaTela)
        .catch(exibirErro)


function carregarFotos(){
    return new Promise((resolve, reject) => {
        const xhtpp = new XMLHttpRequest()

        xhtpp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
            const response = JSON.parse(this.responseText)
            
            resolve(response)
            }
            if (this.status === 404){
                reject()
            }
        }
        
        xhtpp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
        xhtpp.send()
    })
    
}