class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    static trocaPilha(){
        console.log('Trocando...')
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
console.log(c1);

console.log('----------');
const c2 = new ControleRemoto('Samsung');
c2.aumentarVolume();
c2.aumentarVolume();
c2.aumentarVolume();
console.log(c2);

console.log('----------');
ControleRemoto.trocaPilha();