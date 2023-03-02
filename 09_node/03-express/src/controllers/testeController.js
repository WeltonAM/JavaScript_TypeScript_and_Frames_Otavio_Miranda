exports.teste = (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params);
}