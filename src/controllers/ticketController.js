const Ticket = require('../models/Ticket');
const { successResponse, errorResponse } = require('../utils/response');
// POST /api/v1/tickets
exports.crearTicket = async (req, res, next) => {
  try {
    const { cliente_id, asunto, descripcion } = req.body;
    Ticket.crear({cliente_id,asunto,descripcion},(err,ticket)=>{
      if(err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,ticket, 'Ticket registrado exitosamente', 201);
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/tickets
exports.listarTickets = async(req,res,next)=>{
  try {
    Ticket.listarTickets((err,ticket)=>{
      if(err) return errorResponse(res,'Error interno del servidor', 500);
      successResponse(res,ticket, 'Ticket listado exitosamente', 200);
    })
  } catch (error) {
    next(error);
  }
}

// PUT /api/v1/tickets/:id
exports.actualizar = async(req,res,next)=>{
  try {
    const {id} = req.params;
    const {asunto,descripcion,estado} = req.body;
    Ticket.actualizar(id,{asunto,descripcion,estado},(err,ticket)=>{
      if(err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,ticket, 'ticket actualizado exitosamente', 200);
    });
  } catch (error) {
    next(error);
  }
}

// PATCH /api/v1/tickets/:id
exports.actualizarEstado = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {estado} = req.body;
    Ticket.actualizarEstado(id,estado,(err,ticket)=>{
      if(err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,ticket, 'Estado de ticket actualizado exitosamente', 200);
    });
  } catch (error) {
    next(error);
  }
};


// DELETE /api/v1/tickets/:id
exports.eliminar = async(req,res,next)=>{
  try {
    const {id} = req.params;
    Ticket.eliminar(id,(err,ticket)=>{
      if(err) return errorResponse(res, 'Error interno del servidor', 500);
      successResponse(res,ticket, 'ticket eliminado exitosamente', 200);
    });
  } catch (error) {
    next(error);
  }
}