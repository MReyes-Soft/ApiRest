require('dotenv').config;
module.exports = {
  app: {
    port: process.env.PORT || 900,
  },
  mysql: {
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'soporte_db'
  }
}