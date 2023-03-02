import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();

  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    if(!validator.isEmail(emailInput.value)) {
      let p = document.createElement('p');
      let errorMsg = document.createTextNode('Email inválido')
      p.appendChild(errorMsg);
      p.classList.add('erro');
      p.classList.add('alert-danger');
      emailInput.after(p);
      error = true

      setTimeout(() => {
        p.innerHTML = " "
      }, 3000)
    }

    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      let p = document.createElement('p');
      let errorMsg = document.createTextNode('A senha precisa ter entre 6 e 20 caracteres')
      p.appendChild(errorMsg);
      p.classList.add('erro');
      p.classList.add('alert-danger');
      passwordInput.after(p);
      error = true

      setTimeout(() => {
        p.innerHTML = " "
      }, 3000)
    }

    if(!error) el.submit();
  }
}
