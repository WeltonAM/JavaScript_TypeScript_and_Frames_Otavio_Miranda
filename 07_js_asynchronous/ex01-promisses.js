function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + max);
}

function esperaAi(msg, tempo) {

    return new Promise((res, req) => {
        if(typeof msg !== 'string') req('Bad call');

        setTimeout(() => {
            res(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', aleatorio(1, 3))
    .then(res => {
        console.log(res);
        return esperaAi('Frase 2', aleatorio(1, 3));
    })
    .then(res => {
        console.log(res);
        return esperaAi(2, aleatorio(1, 3));
    })
    .then(res => console.log(res))
    .catch(e => console.log(e))