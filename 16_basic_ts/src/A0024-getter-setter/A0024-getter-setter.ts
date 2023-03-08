export class Pessoa {
  constructor(private nome: string, private sobrenome: string, private idade: number, private _cpf: string) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-11');
pessoa.cpf = '123.456.789-99';

console.log(pessoa.cpf);
