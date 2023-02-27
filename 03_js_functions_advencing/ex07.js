function* geradora1() {
    
    // código

    yield 'Valor 1'; 

    // código

    yield 'Valor 2'; 

    // código

    yield 'Valor 3'; 
}

const g1 = geradora1();
for(let valor of g1){
    console.log(valor)
}