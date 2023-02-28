function aleatorio(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + max);
}

function esperaAi(msg, tempo) {

    return new Promise((res, req) => {

        setTimeout(() => {
            if (typeof msg !== 'string') req('Bad call');
            res(msg);
        }, tempo);
    });
}

const executa = async () => {

    try {
        
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);
    
        const fase3 = await esperaAi(3, aleatorio());
        console.log(fase3);

    } catch (e) {
        console.log(e);
    }
}

executa();