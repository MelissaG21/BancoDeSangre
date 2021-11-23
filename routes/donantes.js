const express = require('express');
const router = express.Router();

const controller= require('../controllers/donantes');

/* GET users listing.  /users/ */
router.get('/', controller.pagina);

router.get('/:id', controller.index);

router.post('/', controller.create);

router.put('/:id', controller.replace);

router.patch('/:id', controller.edit);

router.delete('/:id', controller.destroy);

module.exports = router;