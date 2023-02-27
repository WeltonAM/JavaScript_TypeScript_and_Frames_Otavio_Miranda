const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(-1, 1, 'Luiz');
console.log(nomes, removidos);