const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categoriesController'),
    cc = new CategoriesController();

/* GET home page. */
router
    .get('/', function(req, res, next) {
        res.render('index', { title: 'Grupo Car Simulator' });
    })

    .get('/ai', cc.getAi)
    .get('/aiia', cc.getAiia)
    .get('/aiib', cc.getAiib)
    .get('/aiiia', cc.getAiiia)
    .get('/aiiib', cc.getAiiib)
    .get('/aiiic', cc.getAiiic)

    .post('/check', cc.check)
    .post('/validate', cc.validate);
module.exports = router;
