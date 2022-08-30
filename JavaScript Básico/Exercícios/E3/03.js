
function entrar() {
  let inputNome = prompt('Digite o seu Nome:')
  
  let inputIdade = prompt('Digite o sua Idade:')
  
  let idade = parseInt(inputIdade)
  
  let maiorOuMenor
  
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


/*function entrar() {
  let nome = prompt('Digite seu nome')
  let idade = prompt('Digite sua Idade')

  let testeidade = parseInt(idade)
  
  let saudacao = `Olá ${nome}, você é ${idade} de idade!`
  
  document.querySelector('#saudacao').innerHTML = saudacao

  if (testeidade >= 18){
    document.write (`Olá ${nome} você é maior de idade`)
  } else {
    document.write (`Olá ${nome} você é menor de idade`)
  }
  
  let mensagemPersonalizada = ''
  
  if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
    mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
  }
  
  
  document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}*/