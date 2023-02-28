const falar = {
    falar() {
        console.log(`${this.nome} falando...`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} comendo...`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} bebendo...`)
    }
}

// const pessoaPrototype = Object.assign({}, falar, comer, beber);

const pessoaPrototype = {...falar, ...comer, ...beber };

const criaPessoa = (nome, sobrenome) => {
    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: { value: sobrenome},
    })
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'Alvez');

p1.falar();
p2.comer();