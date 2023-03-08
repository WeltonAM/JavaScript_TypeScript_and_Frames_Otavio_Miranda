export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log(`Fazendo algo antes`);
    const result = super.getNomeCompleto();
    return result;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Clinte: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Luiz', 'Otávio', 30, '000.000.000-00', '01');
const cliente = new Cliente('Ana', 'Miranda', 20, '111.111.111-11');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
