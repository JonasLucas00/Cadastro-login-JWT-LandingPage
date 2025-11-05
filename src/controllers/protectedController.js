class ProtectedController {
    renderProtected(req, res) {
        res.render('protected');
    }
}

module.exports = new ProtectedController();