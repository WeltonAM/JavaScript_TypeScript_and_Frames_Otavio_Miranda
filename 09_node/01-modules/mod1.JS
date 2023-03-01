const nome = 'Luiz';
const sobrenome = 'Miranda';

const falar = () => console.log(nome, sobrenome);

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falar = falar;

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

module.exports = {
    nome,
    sobrenome,
    falar,
    Pessoa
}