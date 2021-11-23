var express = require('express');
var router = express.Router();
const controller = require('../controllers/proceso');

/* GET home page. */

router.get('/', controller.proceso);

module.exports = router;