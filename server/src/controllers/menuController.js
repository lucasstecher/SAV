// REQ => DADOS ENVIADOS PELO USURÁRIO
// RES => RESPOSTA ENVIADA AO USUÁRIO

module.exports = {
    async index (req, res) {
        res.sendFile('index.html', {root:'../../web'});
    },
    async menu (req, res) {
        res.sendFile('menu.html', {root:'../../web/components'});
    }
}