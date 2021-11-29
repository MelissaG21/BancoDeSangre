var express = require('express');
var router = express.Router();
const controller = require('../controllers/correos');

/* GET home page. */
router.get('/', controller.home);

router.post('/', controller.send);

module.exports = router;