function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.aumento(100)
console.log(p1);

console.log('--------');
const p2 = {
    nome: 'Caneca',
    preco: 15,
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(50)
console.log(p2)

console.log('--------');
const p3 = Object.create(Produto.prototype);
p3.preco = 114
p3.aumento(50)
console.log(p3)