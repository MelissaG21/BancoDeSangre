var express = require('express');
var router = express.Router();
const controller = require('../controllers/seleccion');

/* GET home page. */

router.get('/', controller.seleccion);

module.exports = router;