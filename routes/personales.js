const express = require('express');
const router = express.Router();
const controller = require('../controllers/personal');

/* GET users listing. */
router.get('/', controller.pagina);

router.get('/:id',controller.pagina);

router.post('/',controller.create);

router.put('/:id',controller.replace);

router.patch('/:id',controller.edit);

router.delete('/:id',controller.destroy);

module.exports = router;