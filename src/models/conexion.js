const mysql = require('mysql');
const config = require('../config/config');
const dbconfig = {
  port: config.mysql.port,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
}

let conexion;

function conMysql(){
  conexion = mysql.createConnection(dbconfig);
  conexion.connect((err) => {
    if(err){
      console.log('[db err]',err);
      setTimeout(conMysql,200);
    }else{
      console.log('db conectado!!');
    }
  })

  conexion.on('error', err =>{
    console.log('[db err]',err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
      conMysql();
    }else{
      throw err;
    }
  })
}

conMysql();


module.exports = conexion;