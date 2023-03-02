const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Página Título',
        numeros: [0, 1, 2, 3, 4, 5, 6]
    });
    return;
}