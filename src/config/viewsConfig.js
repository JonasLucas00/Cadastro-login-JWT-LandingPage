const path = require('path')

module.exports = function viewConfig(app) {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views')); // Pasta onde ficarão os arquivos .ejs
    // console.log(path.join(__dirname, '../views'))
}

