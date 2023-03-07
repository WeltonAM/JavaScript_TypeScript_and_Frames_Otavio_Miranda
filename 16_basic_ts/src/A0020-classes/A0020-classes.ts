export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Luiz', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Otávio', 'Miranda');
// empresa1.nome = 'Facebook';
empresa1.adicionaColaborador(colaborador1);
empresa1.mostrarColaboradores();
