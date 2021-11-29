const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */


router.get('/:id', controller.destroy);

router.get('/:idDonador', controller.pagina);

router.get('/:idUsuario/:tipoUsuario',controller.index);

router.post('/:idUsuario/:tipoUsuario',controller.create);

router.put('/:id',controller.replace);

router.patch('/:id',controller.edit);

router.delete('/:idDonador',controller.destroy);

module.exports = router;
