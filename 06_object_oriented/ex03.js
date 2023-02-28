class Dispositivo {
    constructor(nome){
        this.nome = nome;
        this.ligado = true;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} LIGADO...`)
        }

        this.ligado = true;
    }

    desligar(){
        if(this.ligado){
            console.log(`${this.nome} DESLIGADO...`)
        }

        this.ligado = false;
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Table extends Dispositivo {
    constructor(nome, wifi){
        super(nome);
        this.wifi = true;
    }

    ligar(){
        console.log('Ligar alterado');
    }
}

const s1 = new Smartphone('Motorola', 'Preto', 'Modelo');
s1.ligar();
s1.desligar();
console.log(s1.modelo);

console.log('------------');
const t1 = new Table('iPad', true);
console.log(t1)
t1.ligar();
