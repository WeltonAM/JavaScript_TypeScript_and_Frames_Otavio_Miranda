/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  const nome = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  export const pessoa = new PessoaDoNamespace(nome);
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoOutroNamespace = 'Otávio';
  }
}

console.log(MeuNamespace);
