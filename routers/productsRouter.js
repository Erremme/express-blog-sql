const express = require('express');

//funzione router
const router = express.Router();
//importo tutti i controller
const controller = require('../controllers/controller')
//importo il middleware 
const middlewareValidationId = require('../middleware/middlewareVerify')


// index
router.get('/', controller.index )

// show
router.get('/:id', middlewareValidationId, controller.show, );

// store
router.post('/', controller.store);

//update
router.put('/:id', middlewareValidationId , controller.update) ;

//modify
router.patch('/:id', middlewareValidationId , controller.modify);

//delete
router.delete('/:id', middlewareValidationId, controller.destroy)


module.exports = router;