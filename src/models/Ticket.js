const conexion = require('./conexion');

class Ticket {
  //Registrar tickets
  static crear({ cliente_id, asunto, descripcion },callback) {
    conexion.query(
      'INSERT INTO tickets (cliente_id, asunto, descripcion, estado, fecha_creacion) VALUES (?, ?, ?, "abierto", NOW())',
      [cliente_id, asunto, descripcion],
      (err,results) =>{
        if (err) return callback(err, null); 
        callback(null, { id: results.insertId, cliente_id, asunto, descripcion, estado: "abierto" });
      }
    );
  }

  //Listar todos los tickets
  static listarTickets(callback){
    conexion.query(
      'SELECT * FROM tickets',
      (err,results)=>{
        if(err) return callback(err,null);
        callback(null,results);
      }
    )
  }
  
  //Actualizar tickets
  static actualizar(id,{asunto,descripcion,estado},callback){
    conexion.query(
      'UPDATE tickets SET asunto=?, descripcion=?, estado=?, fecha_actualizacion=NOW() WHERE id=?',
      [asunto,descripcion,estado,id],
      (err,results)=>{
        if(err) return callback(err,null);
        callback(null, {id,asunto,descripcion,estado});
      }
    );
  }

  //Actualizar estado de un tickets
  static actualizarEstado(id,estado,callback) {
    conexion.query(
      'UPDATE tickets SET estado = ?, fecha_actualizacion = NOW() WHERE id = ?',
      [estado, id],(err,results)=>{
        if(err) return callback(err,null);
        callback(null,{id, estado });
      }
    );
  }

  //Eliminar tickets
  static eliminar(id,callback){
    conexion.query('DELETE FROM tickets WHERE id=?',
      [id],(err,results)=>{
        if(err) return callback(err,null);
        callback(null,results.affectedRows >0);
      }
    );
  }
}

module.exports = Ticket;
