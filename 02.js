/*2 - Modifique o exercício anterior para exibir uma mensagem personalizada caso o nome da pessoa seja "Thomas Anderson", exibir: 

"Olá [nome], você é MAIOR de idade. Você é personagem do filme The Matrix!". 

Mantenha a mensagem condizente com a idade informada.*/

let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua Idade')

if ( idade >=18 && nome === `Thomas Anderson` || nome === `thomas anderson`){
    document.write (`Olá ${nome} você é maior de idade e é um personagem do Matrix`)
}else if (idade >= 18){
    document.write (`Olá ${nome} você é maior de idade`)
} else {
    document.write (`Olá ${nome} você é menor de idade`)
}