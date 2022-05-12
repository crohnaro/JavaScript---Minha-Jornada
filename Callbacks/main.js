/*

Callbacks

*/

function exibirNaTela(dados){
    console.log('exibir na tela', dados)
}


const botaoCarregar = document.querySelector('#botaoCarregar')
botaoCarregar.onclick = () => carregarFotos(exibirNaTela)


function carregarFotos(callback){
    const xhtpp = new XMLHttpRequest()

    xhtpp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
        const response = JSON.parse(this.responseText)
            
            if (callback){
                callback(response)
            }
        }
    }
    
    xhtpp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
    xhtpp.send()
}




