const produto = { nome: 'Caneca', preco: 1.8 };

const caneca = {... produto, estoque: 100};

console.log(produto, caneca);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log('-----------');
console.log(Object.values(produto));
console.log('-----------');

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}