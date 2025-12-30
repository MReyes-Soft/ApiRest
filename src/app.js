const express = require('express');
const config = require('./config/config');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const {errorHandler,notFoundHandler} = require('./middlewares/errorHandler');
//Configuracion
app.set("port",config.app.port)

app.use(express.json());

// Rutas principales
app.use('/api/v1/clientes', clienteRoutes);
app.use('/api/v1/tickets', ticketRoutes);

// Middleware 404 (si ninguna ruta coincide)
app.use(notFoundHandler)
// Middleware de errores internos
app.use(errorHandler);

module.exports = app;
