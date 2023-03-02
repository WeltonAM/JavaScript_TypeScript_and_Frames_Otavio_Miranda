const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {
    // HomeModel.create({
    //     titulo: 'Um título de testes',
    //     descricao: 'Uma descricao de testes'
    // }).then(dados => console.log(dados)).catch(e => console.log(e))
}

module.exports = Home;