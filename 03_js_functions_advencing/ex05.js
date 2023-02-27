const criaCalculadora = () => {
  return {

    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    realizaConta() {
      let conta = this.display.value;

      try {

        conta = eval(conta);

        if (!conta) alert('Conta inválida.');

        this.display.value = String(conta);

      } catch (e) {
        return alert('Conta inválida.');
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
          this.realizaConta();
        }
      })
    },

    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

        if (el.classList.contains('btn-clear')) this.clearDisplay();

        if (el.classList.contains('btn-del')) this.apagaUm();

        if (el.classList.contains('btn-eq')) this.realizaConta();

        this.display.focus();

      })
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();