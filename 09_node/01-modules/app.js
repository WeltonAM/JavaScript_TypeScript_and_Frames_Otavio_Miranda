const path = require('path');
const axios = require('axios');
const { nome, sobrenome, falar } = require('./mod1');
const { Pessoa } = require('./mod1');
const multiplicacao = require('./mod2');

falar();

const p1 = new Pessoa('Luiz');
console.log(p1);

console.log('-----------');

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
// .then(res => console.log(res.data))
// .catch(e => console.log(e))

console.log('-----------');
console.log(multiplicacao(2, 2));

console.log('-----------');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));