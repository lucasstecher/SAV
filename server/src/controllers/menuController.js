// REQ => DADOS ENVIADOS PELO USURÁRIO
// RES => RESPOSTA ENVIADA AO USUÁRIO

module.exports = {
    async index (req, res) {
        res.render('index', {root:'../../web'});
    },
    async menu (req, res) {
        res.render('menu', {root:'../../web/views'});
    }
}