const nome = 'Otávio'
const sobrenome = 'Miranda'
const idade = 30
const alturaEmMt = 1.8
const peso = 84
let icm 
let anoNascimento

icm = peso / (alturaEmMt * alturaEmMt)
console.log(icm)

anoNascimento = new Date().getFullYear() - idade
console.log(anoNascimento)