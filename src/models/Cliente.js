const conexion = require('./conexion');

class Cliente {
  //Registrar clientes
  static crear({ nombre, email, telefono },callback) {
    conexion.query('INSERT INTO clientes (nombre, email, telefono, fecha_registro) VALUES (?, ?, ?, NOW())',
      [nombre, email, telefono],
      (err,results)=>{
        if(err) return callback(err, null);
        callback(null, { id: results.insertId, nombre, email, telefono });
      }
    )
  }

  //listar clientes
  static listarClientes(callback){
    conexion.query('SELECT * FROM clientes', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
  }

  //obtener clientes por id
  static obtenerID(id,callback) {
    conexion.query(
      'SELECT * FROM clientes WHERE id = ?',
      [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);
    });
  }

  //actualizar clientes
  static actualizar(id,{ nombre, email, telefono },callback) {
    conexion.query('UPDATE clientes SET nombre=?, email=?, telefono=? WHERE id = ?',
      [nombre, email, telefono,id],
      (err,results)=>{
        if(err) return callback(err, null);
        callback(null, { id, nombre, email, telefono });
      }
    )
  }

  //eliminar clientes
  static eliminar(id,callback){
    conexion.query(
      'DELETE FROM clientes WHERE id = ?',
      [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows >0);
    });
  }

  //obtener tickets de un cliente
  static async obtenerTickets(idCliente, callback) {
    conexion.query(
      'SELECT * FROM tickets WHERE cliente_id = ?',
      [idCliente], (err,results) =>{
        if (err) return callback(err, null);
        callback(null, results[0]);
      }
    );
  }
}

module.exports = Cliente;
