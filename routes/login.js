var express = require('express');
var router = express.Router();
const controller = require('../controllers/login');

/* GET home page. */
router.get('/', controller.home);

router.post('/inicio', controller.inicio);

module.exports = router;