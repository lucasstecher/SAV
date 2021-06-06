module.exports = {
    async login (req, res) {
        const connection = require("../database/database");
        var usuario = req.body.usuario;
        var senha = req.body.senha;
        if (usuario && senha) {
                const [results] = await connection.query(`SELECT * FROM tb_gerente WHERE login_gerente = '${usuario}' AND senha_gerente = '${senha}'`);
                if (results.length > 0) {
                    res.redirect('/menu');
                } else {
                    res.redirect('/');
                }
                res.end();
        }
    }
}
