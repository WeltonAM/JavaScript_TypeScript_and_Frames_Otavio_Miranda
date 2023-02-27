function Produto(nome, preco, estoque, reserva) {

    let reservaPrivada = reserva

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra valor
            value: nome, // valor
            writable: false, // pode alterar
            configurable: false // configurável
        },
        preco: {
            enumerable: true, // mostra valor
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        }
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra valor
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    })

    Object.defineProperty(this, 'reserva', {
        enumerable: true,
        configurable: true,
        get() {
            return reservaPrivada;
        },
        set(valor) {
            reservaPrivada = +valor;
        },
    })
}

const p1 = new Produto('Camiseta', 20, 100);
p1.estoque = 500;
delete p1.estoque;
p1.reserva = 2;
console.log(p1);
console.log(p1.reserva);