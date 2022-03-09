function entrar() {
    let inputNome = prompt('Digite o seu Nome:')
    let inputIdade = prompt('Digite o sua Idade:')
    let idade = parseInt(inputIdade)
    let maiorOuMenor

    if(inputNome === '' || inputIdade ===''){
        alert('Existem campos sem preencher')
        return
    }
    
    if (idade >= 18) {
      maiorOuMenor = 'maior'
    } else if (idade < 18) {
      maiorOuMenor = 'menor'
    }
    
    let mensagemPersonalizada = ''
    
    if (inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
      mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
    }
    
    let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`
    
    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
  }