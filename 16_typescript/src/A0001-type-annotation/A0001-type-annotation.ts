/* eslint-disable */
let nome: string = 'Juliana';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

let arrayDeNumeros: Array<number> = [1, 2];
let arrayDeNumeros2: number[] = [1, 2];
let arrayDeString: string[] = ['a', '2'];

let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Juliana',
}

console.log(pessoa.nome);

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma2(2, 2));
