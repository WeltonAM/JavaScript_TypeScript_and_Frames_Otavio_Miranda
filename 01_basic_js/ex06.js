const num = Number(prompt("Digite um número: "))

document.body.innerHTML += `O seu número é: ${num}`
document.body.innerHTML += `A raiz quadrada do seu número é: ${Math.pow(num)}`
document.body.innerHTML += `Esse número: ${Number.isInterger(num) ? ', é inteiro' : ', não é inteiro'}`
document.body.innerHTML += `É NaN: ${Number.NaN(num) ? 'verdadeiro' : 'falso'}`
document.body.innerHTML += `Arredondando para cima: ${Number.ceil(num)}`
document.body.innerHTML += `Arredondando para baixo: ${Number.floor(num)}`
document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}`