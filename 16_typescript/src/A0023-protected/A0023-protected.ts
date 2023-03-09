export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Luiz', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Otávio', 'Miranda');
const colaborador2 = new Colaborador('Ana', 'Luiza');
// empresa1.nome = 'Facebook';

const empresa2 = new Udemy();
empresa2.adicionaColaborador(colaborador1);
empresa2.adicionaColaborador(colaborador2);

empresa1.adicionaColaborador(colaborador1);
empresa1.mostrarColaboradores();
console.log('--------------');

const colaboradorRemovido = empresa2.popColaborador();
console.log(colaboradorRemovido);
console.log('--------------');
empresa2.mostrarColaboradores();
