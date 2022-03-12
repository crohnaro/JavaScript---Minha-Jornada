let quadrado = document.querySelector('.quadrado')

function minhaFuncao(){
    console.log('mensagem')
}

quadrado.onclick = minhaFuncao
quadrado.onmousemove = minhaFuncao
quadrado.onmmouseenter = minhaFuncao
quadradp.onmouseout = minhaFuncao

window.addEventListener('resize' , minhaFuncao)

window.addEventListener('keypress' , minhaFuncao)


//importante para avisar que o caps esta ativado