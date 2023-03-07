function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Juliana',
  sobrenome: 'Karla',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Juliana', 'Karla');
pessoa.exibirNome();

export { pessoa };
