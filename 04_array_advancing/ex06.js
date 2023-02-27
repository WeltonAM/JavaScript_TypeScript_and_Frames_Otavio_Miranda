const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 47},
]

const maisVelha = pessoas.reduce((primeiroEl, segundoEl) => {
    
    if(primeiroEl.idade > segundoEl.idade) return primeiroEl

    return segundoEl

})

console.log(maisVelha);
