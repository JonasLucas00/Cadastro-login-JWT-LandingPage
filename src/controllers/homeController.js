class HomeController {
    renderHome(req, res) {
        res.json('Home Page');
    }
}

module.exports = new HomeController()