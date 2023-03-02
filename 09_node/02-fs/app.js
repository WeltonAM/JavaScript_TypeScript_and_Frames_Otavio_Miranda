const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./write');
const ler = require('./read');

// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Luiza' },
//     { nome: 'Sara' },
// ]

// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome))
}

lerArquivo(caminhoArquivo);