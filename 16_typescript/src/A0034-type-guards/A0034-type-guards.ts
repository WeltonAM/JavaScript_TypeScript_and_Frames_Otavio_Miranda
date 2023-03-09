type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;

    case 'animal':
      console.log(`Isso é um animal ${obj.cor}`);
      return;

    default:
      break;
  }
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'rosa' });
