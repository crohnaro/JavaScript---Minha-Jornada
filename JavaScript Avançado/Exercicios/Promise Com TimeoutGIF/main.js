    const formulario = document.querySelector('#formulario')
    const botaoEnviar = document.querySelector('#botao-enviar')
    const message = document.querySelector('#message')
    const spinner = document.querySelector('#spinner')
    const result = document.querySelector('#result')

    function job(msg) {      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(msg)
        }, 10000)
      })
    }

    formulario.onsubmit = function(e) {
      e.preventDefault()

      const inputMsg = message.value

      botaoEnviar.classList.add('hidden')
      spinner.classList.remove('hidden')

      job(inputMsg).then(msg => {
        formulario.classList.add('hidden')
        result.innerHTML = msg
      })
    }