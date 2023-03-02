exports.contato = (req, res) => {
    res.send(`
    <form action="/contato" method="POST">
        Name: <input type="text" name="nome" />
        <button type="submit">Enviar</button>
    </form>
`)
}

exports.contatoForm = (req, res) => {
    res.send(`${req.body.nome}, recebemos seu formulário.`);
}