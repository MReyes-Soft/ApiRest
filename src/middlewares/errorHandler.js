const { errorResponse } = require('../utils/response');
// Middleware para errores internos
function errorHandler(err, req, res, next) {
  console.error('Error:', err.message);
  errorResponse(res, 'Error interno del servidor', 500, err.message);
}

// Middleware para rutas no encontradas (404)
function notFoundHandler(req, res, next) {
  errorResponse(res, 'Ruta no encontrada', 404, `La ruta ${req.originalUrl} no existe`);
}

module.exports = { errorHandler, notFoundHandler };


