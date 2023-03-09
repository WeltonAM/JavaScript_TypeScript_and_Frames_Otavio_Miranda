function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);

const concat = concatenaString('Juliana', 'Karla', '3');

const upper = toUpperCase('Juliana', 'Karla', '3');

console.log(result);
console.log(concat);
console.log(upper);
