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

    static fetchOne() {
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

    static assignLabel(id_ticket, id_label) {
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

}