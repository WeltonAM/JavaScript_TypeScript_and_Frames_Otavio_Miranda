const dadosCliente1: [number, string?] = [1, 'Luiz'];
const dadosCliente2: [number, ...string[]] = [1, 'Luiz'];
const dadosCliente3: readonly [number, ...string[]] = [
  1,
  'Luiz',
];

dadosCliente1[0] = 2;
dadosCliente1.pop();
dadosCliente2[3] = 'Otávio';
// dadosCliente1[2] = 'Viera';
// dadosCliente3[2] = 'Viera';
// dadosCliente3.pop() = 'Viera';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
