class ProtectedController {
    renderProtected(req, res) {
        res.json('Rota Protected');
    }
}

module.exports = new ProtectedController();