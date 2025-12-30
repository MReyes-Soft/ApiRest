# API REST – Gestión de Clientes y Tickets de Soporte

API REST desarrollada con **Node.js, Express y MySQL**.  
Permite gestionar clientes y tickets de soporte postventa.

---

## 🚀 Características

- CRUD completo de clientes  
- Gestión de tickets de soporte  
- Manejo centralizado de errores  
- Respuestas JSON estandarizadas  
- Filtros por estado y prioridad  

---

## 📋 Requisitos Previos

- Node.js v14 o superior  
- MySQL v5.7 o superior  
- npm o yarn  

---

## 🔧 Instalación

### 1. Clonar el repositorio
```bash
git clone [apirest](https://github.com/MReyes-Soft/ApiRest.git)
cd apirest
```
## 2. Instalar dependencias
```npm install```
## 3. Configurar variables de entorno
```cp .env.example .env```

### Editar el archivo .env:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=soporte_db
```
## 4. 🏃 Ejecutar el Proyecto
### - Modo desarrollo
```npm run dev```
### -Modo producción
```npm start```
### - Servidor disponible en:
```http://localhost:3000```
## 5. 📚 Documentación de Endpoints
### Clientes
-Registrar cliente

```
POST /api/v1/clientes

{
  "nombre": "Juan Pérez",
  "email": "juan.perez@email.com",
  "telefono": "+51987654321"
}
```

-Listar clientes

```GET /api/v1/clientes```


-Obtener cliente

```GET /api/v1/clientes/:id```

-Actualizar cliente

```
PATCH /api/v1/clientes/:id

{
  "telefono": "+51999888777"
}
```

-Eliminar cliente

```DELETE /api/v1/clientes/:id```

### Tickets

-Crear ticket

```
POST /api/v1/tickets

{
  "cliente_id": 1,
  "asunto": "Error en facturación",
  "descripcion": "No permite generar facturas"
}
```

-Listar tickets de un cliente

```GET /api/v1/clientes/:clienteId/tickets?estado=abierto```
-Obtener ticket

```GET /api/v1/tickets/:id```
-Actualizar estado del ticket

```
PATCH /api/v1/tickets/:id/estado

{
  "estado": "en_proceso",
  "comentario": "Asignado a soporte técnico"
}
```

-Listar todos los tickets

```GET /api/v1/tickets?estado=abierto```

## 6. 📁 Estructura del Proyecto
```
apirest/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── app.js
```

## 7.🛠️ Tecnologías Utilizadas

-Node.js

-Express

-MySQL

-dotenv


## 8. 📧 Contacto

-Soporte técnico: reyessanchezmiguel2009@gmail.com


