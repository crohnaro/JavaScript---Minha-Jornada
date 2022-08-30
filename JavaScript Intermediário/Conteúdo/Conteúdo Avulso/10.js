let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

function removeToast(){
    toast.classList.remove('visible')
}

botaoCadastrar.onclick = function(){
    toast.classList.add('visible')
    setTimeout(removerToast, 5000)
}

//Importante para mostrar janela confirmando inscrição ou tarefa