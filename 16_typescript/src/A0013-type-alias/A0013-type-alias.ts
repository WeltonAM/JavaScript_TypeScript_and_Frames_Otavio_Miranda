type Idade = number;
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

export const pessoa: Pessoa = {
  nome: 'Juliana',
  idade: 27,
  salario: 6000,
};

export function setCorPreferida(
  pessoa: Pessoa,
  cor: CorPreferida,
): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Preto'));
