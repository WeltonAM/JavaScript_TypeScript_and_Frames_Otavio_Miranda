const numeros = [5, 6, 50, 80, 1, 2, 3, 7, 8, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados);

const numerosDobrados = numerosFiltrados.map(valor => valor * 2)
console.log(numerosDobrados);