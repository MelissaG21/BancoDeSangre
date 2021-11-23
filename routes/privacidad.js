/*var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname,'../views/privacidad.html'));
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();
const controller = require('../controllers/privacidad');

/* GET home page. */

router.get('/privacidad', controller.privacidad);

module.exports = router;