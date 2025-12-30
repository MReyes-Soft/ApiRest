const Cliente = require('../models/Cliente');
const { successResponse, errorResponse } = require('../utils/response');
// POST /api/v1/clientes
exports.registrarCliente = async (req, res, next) => {
  try {
    const { nombre, email, telefono } = req.body;
    Cliente.crear({ nombre, email, telefono }, (err, nuevoCliente) =>{
      if(err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,nuevoCliente, 'Cliente registrado exitosamente', 201);
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/clientes
exports.listarClientes = async (req, res, next) =>{
  try {
    Cliente.listarClientes((err, clientes) => {
      if (err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,clientes, 'Cliente listado exitosamente', 200);
    });
  } catch (error) {
    next(error);
  }
}

// GET /api/v1/clientes/:id
exports.obtener = async (req,res,next)=>{
  try {
    const {id} = req.params;
    Cliente.obtenerID(id,(err, clientes) => {
      if (err) return errorResponse(res, 'Error interno del servidor', 500); 
      if (!clientes) return res.status(404).json({ error: 'Cliente no encontrado' }); 
      successResponse(res,clientes, 'Cliente encontrado exitosamente', 200);
    });
  } catch (error) {
    next(error);
  }
}

// PUT /api/v1/clientes/:id
exports.actualizar = async(req,res,next) =>{
  try {
    const {id} = req.params;
    const {nombre,email,telefono} = req.body;
    Cliente.actualizar(id,{nombre,email,telefono},(err,clientes)=>{
      if (err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,clientes, 'Cliente actualizado exitosamente', 200);
    })
  } catch (error) {
    next(error);
  }
}

// DELETE /api/v1/clientes/:id
exports.eliminar = async (req,res,next)=>{
  try {
    const {id} = req.params;
    Cliente.eliminar(id,(err, clientes) => {
      if (err) return errorResponse(res, 'Error interno del servidor', 500); 
      if (!clientes) return res.status(404).json({ error: 'Cliente no fue eliminado' }); 
      successResponse(res,clientes, 'Cliente eliminado exitosamente', 200);
    });
  } catch (error) {
    next(error);
  }
}

// GET /api/v1/clientes/:id/tickets
exports.listarTicketsCliente = async (req, res, next) => {
  try {
    const {id} = req.params;
    Cliente.obtenerTickets(id,(err,tickets)=>{
      if (err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,tickets, 'Ticket encontrado exitosamente', 200);
    });
  } catch (error) {
    next(error);
  }
};
