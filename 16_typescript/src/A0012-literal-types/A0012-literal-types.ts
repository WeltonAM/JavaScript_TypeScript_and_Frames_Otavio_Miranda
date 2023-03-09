/* eslint-disable */
let x: 10 = 10;

// a = 20;


const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Otávio',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

export = { x, pessoa, escolhaCor };
