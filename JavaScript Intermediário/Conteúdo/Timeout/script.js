
let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')

function removerToast(){
  toast.classList.remove('visible')
}

botaoCadastrar.onclick = function(){
  toast.classList.add('visible')

  setTimeout(removerToast, 5000)
}





