type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// type Pessoa = TemNome | TemSobrenome | TemIdade;
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Otávio',
};

console.log(pessoa);

export { pessoa };
