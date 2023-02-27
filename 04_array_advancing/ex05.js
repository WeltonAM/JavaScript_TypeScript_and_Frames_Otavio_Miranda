const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map(pessoa => pessoa.nome)
// const idades = pessoas.map(obj => {
//     delete obj.nome
//     return obj
// })
const idades = pessoas.map(obj => ({ idade: obj.idade }))

console.log(nomes);
console.log(idades);