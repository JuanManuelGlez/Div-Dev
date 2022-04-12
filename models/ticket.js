const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Ticket{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(asunto, descripcion, id_prioridad, id_tipo_incidencia, id_procedencia) {
        this.asunto = asunto;
        this.descripcion = descripcion;
        this.archivado = 0;
        this.id_prioridad = id_prioridad;
        this.id_tipo_incidencia = id_tipo_incidencia;
        this.id_procedencia = id_procedencia;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO ticket(Id_Procedencia, Id_Tipo_Incidencia, Id_Prioridad, Fecha_Inicio,  Descripcion, Asunto, Archivado) VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?)', 
                [
                    this.id_procedencia,
                    this.id_tipo_incidencia,
                    this.id_prioridad,
                    this.descripcion,
                    this.asunto,
                    this.archivado
                ]    
        );
    }


    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
    }

    static fetchList(){
        return db.execute('SELECT Asunto, Fecha_Inicio, Id_Ticket FROM ticket');
    }

    static fetchOne(id_ticket){
        return db.execute('SELECT Id_Ticket,ticket.Id_Procedencia,ticket.Id_Tipo_Incidencia,ticket.Id_Prioridad,Fecha_Inicio,Fecha_Fin,Descripcion,Asunto,prioridad.Nombre_Prioridad,procedencia.Nombre_Procedencia,tipo_incidencia.Nombre_Tipo_Incidencia FROM ticket, prioridad,procedencia,tipo_incidencia WHERE Id_Ticket=? AND ticket.Id_Prioridad=prioridad.Id_Prioridad AND ticket.Id_Procedencia=procedencia.Id_Procedencia AND ticket.Id_Tipo_Incidencia=tipo_incidencia.Id_Tipo_Incidencia ',[id_ticket]);
        //return db.execute('SELECT *,Nombre_Prioridad FROM ticket, prioridad,procedencia,tipo_incidencia WHERE Id_Ticket=? AND ticket.Id_Prioridad=prioridad.Id_Prioridad AND ticket.Id_Procedencia=procedencia.Id_Procedencia AND ticket.Id_Tipo_Incidencia=tipo_incidencia.Id_Tipo_Incidencia',[id_ticket]);
    }
    static fetchLabel_Ticket(id_ticket){
        return db.execute('SELECT Id_Label FROM label_ticket WHERE Id_Ticket=?',[id_ticket]);
    }
    static fetchEstado_Ticket(id_ticket){
        return db.execute('SELECT estado.Nombre_Estado,estado.Id_Estado FROM estado_ticket, estado WHERE Id_Ticket=? AND estado_ticket.Id_Estado=estado.Id_Estado ORDER BY Fecha_y_Hora DESC  LIMIT 1',[id_ticket]);
    }
    static fetchPregunta_Ticket(id_ticket){
        return db.execute('SELECT Pregunta, Respuesta FROM pregunta_ticket WHERE Id_Ticket=?',[id_ticket]);
    }

    static fetchEstado(){
        return db.execute('SELECT * FROM estado')
    }

    static fetchPrioridades() {
        return db.execute('SELECT * FROM prioridad');
    }

    static fetchProcedencias() {
        return db.execute('SELECT * FROM procedencia WHERE Visibilidad_Procedencia = 1');
    }

    static fetchLabels() {
        return db.execute('SELECT * FROM label WHERE Visibilidad_Label = 1');
    }

    static crearLabel(id_label){
        return db.execute('SELECT * FROM label WHERE Id_Label = ?', [id_label])
        .then(([rows, fieldData]) =>{
            if(rows.length == 0)
            {
                db.execute('INSERT INTO label VALUES(?, ?)', [id_label, 1])
                .then()
                .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
    }

    static async assignLabel(id_ticket, id_label) {
        await this.crearLabel(id_label);

        return db.execute('INSERT INTO label_ticket VALUES(?, ?)',
        [id_label, id_ticket])
        .then()
        .catch(err => console.log(err));
    }

    static assignEstado(id_ticket, id_estado) {
        return db.execute('INSERT INTO estado_ticket VALUES(?, ?, CURRENT_TIMESTAMP)',
        [id_estado, id_ticket])
        .then()
        .catch(err => console.log(err));
    }

    static assignPrioridad(id_ticket, id_prioridad){
        return db.execute('UPDATE ticket SET Id_Prioridad=? WHERE Id_Ticket=?',
        [id_prioridad,id_ticket])
        .then()
        .catch(err => console.log(err));
    }

    static assignIncidencia(id_ticket, id_incidencia){
        return db.execute('UPDATE ticket SET Id_Tipo_Incidencia=? WHERE Id_Ticket=?',
        [id_incidencia, id_ticket]);
    }

    static assignUsuario(id_ticket, id_usuario, cargo){
        return db.execute('INSERT INTO usuario_ticket VALUES(?, ?, ?, CURRENT_TIMESTAMP)',
        [id_usuario, id_ticket, cargo])
        .then()
        .catch(err => console.log(err));
    }

    static assignPregunta(id_ticket, id_pregunta, respuesta) {
        db.execute('SELECT Texto_Pregunta FROM pregunta WHERE Id_Pregunta = ?', [id_pregunta])
        .then(([rows, fieldData]) => {
            return db.execute('INSERT INTO pregunta_ticket VALUES(?, ?, ?, ?)',
            [id_pregunta, id_ticket, respuesta, rows[0].Texto_Pregunta])
            .then()
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));

    }

    static async update(id_ticket, id_estado, id_prioridad, Estado_Actual, id_incidencia){
        
        await this.assignIncidencia(id_ticket,id_incidencia);
        await this.assignPrioridad(id_ticket,id_prioridad);
            if(id_estado!=Estado_Actual){
                await this.assignEstado(id_ticket,id_estado);
                if(id_estado ==1||5){
                    return db.execute('UPDATE ticket SET Fecha_Fin=CURRENT_TIMESTAMP WHERE Id_Ticket=?',[id_ticket]);
                }
                           
            }          
        
    }
}