const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},
]

const novasPessoas = new Map();

for (const {id} of pessoas){
    novasPessoas.set(id, { ...pessoas })
}

console.log(novasPessoas);