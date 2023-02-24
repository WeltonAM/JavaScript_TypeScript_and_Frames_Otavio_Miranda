const nome = prompt('Digite seu nome completo:')

document.body.innerHTML += `Seu nome é: ${nome} <br />`
document.body.innerHTML += `Seu nome tem: ${nome.length} letras <br />`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} letras <br />`
document.body.innerHTML += `Qual é o primeiro índice da letra 'a' no seu nome: ${nome.indexOf('a')} letras <br />`
document.body.innerHTML += `Qual é o último índice da letra 'a' no seu nome: ${nome.lastindexOf('a')} letras <br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} letras <br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} letras <br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase} letras <br />`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase} letras <br />`