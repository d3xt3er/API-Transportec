const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagamentoController')
const pag = require('../../config/pagseguroConfig')


// router.post('/:nome/:senha', controller.post);
// router.get('/', controller.get);
// router.post('/:nome/:email/:senha', controller.post); 
router.get('/:nome/:senha', controller.get);
router.post('/:nome/:email/:senha', controller.postPayment);
// router.get('/:id', controller.getById);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

module.exports = router;
