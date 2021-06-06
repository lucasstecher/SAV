app.get("/funcionarios", (req, res) => {
    res.sendFile('funcionarios.html', {root:'../../web/components'});
});
