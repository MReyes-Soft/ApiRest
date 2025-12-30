
{
  "cliente_id": 1,
  "asunto": "Error en módulo de facturación",
  "descripcion": "El sistema no permite generar facturas con más de 10 productos"
}

{
  "nombre": "Nicolas huaman",
  "email": "nikh@gmail.com",
  "telefono": "994567880"
}


API REST - Sistema de Gestión de Clientes y Tickets de Soporte
API REST desarrollada con Node.js, Express y MySQL para la gestión de clientes y tickets de soporte postventa.

🚀 Características

Gestión completa de clientes (CRUD)
Sistema de tickets de soporte
Manejo de errores centralizado
Respuestas estandarizadas
Filtros por estado y prioridad

📋 Requisitos Previos

Node.js (v14 o superior)
MySQL (v5.7 o superior)
npm o yarn

🔧 Instalación
1. Clonar el repositorio
bashgit clone <url-del-repositorio>
cd apirest
2. Instalar dependencias
bash npm install
3. Configurar variables de entorno
Copiar el archivo .env y configurar las variables:
bash cp .env
Editar .env con tus datos:
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=soporte_db
4. Crear base de datos y tablas
Copiar el archivo scripts en Mysql y Ejecutar los scripts SQL en orden:


5. (Opcional) Cargar datos de prueba
🏃 Ejecutar el Proyecto

Modo desarrollo (con nodemon)
bash npm run dev
Modo producción
bash npm start
El servidor estará disponible en http://localhost:3000
📚 Documentación de Endpoints
Clientes
Registrar Cliente
httpPOST /api/v1/clientes
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan.perez@email.com",
  "telefono": "+51987654321"
}
Listar Clientes
httpGET /api/v1/clientes
Obtener Cliente
httpGET /api/v1/clientes/:id
Actualizar Cliente
httpPATCH /api/v1/clientes/:id
Content-Type: application/json

{
  "telefono": "+51999888777"
}
Eliminar Cliente
httpDELETE /api/v1/clientes/:id
Tickets
Crear Ticket
httpPOST /api/v1/tickets
Content-Type: application/json

{
  "cliente_id": 1,
  "asunto": "Error en módulo de facturación",
  "descripcion": "El sistema no permite generar facturas"
}
Listar Tickets de un Cliente
httpGET /api/v1/clientes/:clienteId/tickets?estado=abierto
Obtener Ticket
httpGET /api/v1/tickets/:id
Actualizar Estado de Ticket
httpPATCH /api/v1/tickets/:id/estado
Content-Type: application/json

{
  "estado": "en_proceso",
  "comentario": "Ticket asignado al equipo técnico"
}
Listar Todos los Tickets
httpGET /api/v1/tickets?estado=abierto
🧪 Pruebas
Ejecutar pruebas
bash npm test
📁 Estructura del Proyecto
soporte-api/
├── src/
│   ├── config/          # Configuraciones
│   ├── controllers/     # Controladores
│   ├── models/          # Modelos de datos
│   ├── routes/          # Rutas de la API
│   ├── middlewares/     # Middlewares
│   ├── utils/           # Utilidades
│   └── app.js           # Punto de entrada
└── tests/               # Pruebas

🛠️ Tecnologías Utilizadas

Node.js - Entorno de ejecución
Express - Framework web
MySQL - Base de datos
dotenv - Variables de entorno

📝 Estados de Tickets

abierto - Ticket recién creado
en progreso - Ticket siendo atendido
cerrado - Ticket finalizado

📧 Contacto
Para consultas o soporte, contactar a: soporte@empresa.com

📄 Licencia
ISC