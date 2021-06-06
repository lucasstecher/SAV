app.get("/gerente", (req, res) => {
    res.sendFile('gerente.html', {root:'../../web/components'});
});