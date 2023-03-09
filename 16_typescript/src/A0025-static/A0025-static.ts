export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-11');
console.log(pessoa);

const pessoa2 = Pessoa.criaPessoa('Ana', 'Otávio');
console.log(pessoa2);
console.log('--------------');
pessoa.metodoNormal();
