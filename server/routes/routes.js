const AController = require('../controllers/a.controller');

module.exports = (app) => {
    app.get('/api/Art/a', AController.getAllA);
}