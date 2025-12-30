const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
// POST /api/v1/clientes - Registrar cliente
router.post('/', clienteController.registrarCliente);
// GET /api/v1/clientes - Listar clientes
router.get('/', clienteController.listarClientes);
// GET /api/v1/clientes/:id - Obtener cliente por ID
router.get('/:id',clienteController.obtener);
// PUT /api/v1/clientes/:id - Actualizar cliente
router.put('/:id', clienteController.actualizar);
// DELETE /api/v1/clientes/:id - Eliminar cliente
router.delete('/:id', clienteController.eliminar);
// GET /api/v1/clientes/:id/tickets - Listar tickets de un cliente
router.get('/:id/tickets', clienteController.listarTicketsCliente);

module.exports = router;
