// Respuesta exitosa estandarizada
const successResponse = (res, data, message = 'Operación exitosa', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message
  });
};

// Respuesta de error estandarizada
const errorResponse = (res, message = 'Error en la operación', statusCode = 500, errors = null) => {
  const response = {
    success: false,
    statusCode,
    message
  };

  if (errors) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};

module.exports = {
  successResponse,
  errorResponse
};