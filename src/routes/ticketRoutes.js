const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
//POST /api/v1/tickets - Registrar tickets
router.post('/', ticketController.crearTicket);
//GET /api/v1/tickets - Listar todo los tickets
router.get('/',ticketController.listarTickets);
//PUT /api/v1/tickets - Actualizar tickets
router.put('/:id',ticketController.actualizar);
//DELETE /api/v1/tickets - eliminar tickets
router.delete('/:id',ticketController.eliminar);
//PATCH /api/v1/tickets - Actualizar estado de un tickets
router.patch('/:id', ticketController.actualizarEstado);

module.exports = router;
