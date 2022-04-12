let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()

    console.log(document.forms['formCadastro']['nome'].value)
}