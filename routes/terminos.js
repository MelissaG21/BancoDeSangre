var express = require('express');
var router = express.Router();
const controller = require('../controllers/terminos');

/* GET home page. */
router.get('/', controller.home);

module.exports = router;
