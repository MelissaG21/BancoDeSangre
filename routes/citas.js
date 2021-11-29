const express = require('express');
const router = express.Router();
const controller = require('../controllers/citas');

/* GET users listing. */
router.get('/:idDonador', controller.pagina);

//router.get('/:id',controller.create);

router.post('/:idDonador',controller.create);

router.put('/:id',controller.replace);

router.patch('/:id',controller.edit);

router.delete('/:id',controller.destroy);

module.exports = router;
