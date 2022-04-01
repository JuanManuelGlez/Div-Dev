const db = require('../util/database');

module.exports = class Tipo_incidencia{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, SLA) {
        this.nombre_tipo_incidencia = nombre;
        this.SLA_tipo_incidencia = SLA;
        this.visibilidad_tipo_incidencia = 1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    tipo_incidencia_save() {
        console.log(this.nombre_tipo_incidencia, this.SLA_tipo_incidencia, this.visibilidad_tipo_incidencia);
        db.execute('INSERT INTO tipo_incidencia(Nombre, SLA, Visibilidad_Tipo_Incidencia) VALUES (?, ?, ?)', 
            [
                this.nombre_tipo_incidencia,
                this.SLA_tipo_incidencia,
                this.visibilidad_tipo_incidencia
            ]    
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM tipo_incidencia WHERE Visibilidad_Tipo_Incidencia = 1');
    }
    //6.4 ratio pizza precio de 300 varod dominos
    //7.3 ratio precio pizza extra grande
    static fetchPreguntas(id_tipo_incidencia) {
        return db.execute('SELECT p.Id_Pregunta, p.Texto_Pregunta FROM pregunta p, tipo_incidencia_pregunta tip WHERE p.Id_Pregunta = tip.Id_Pregunta AND tip.Id_Tipo_Incidencia = ?',
        [id_tipo_incidencia]
        );
    }

    static fetchPreguntasNuevas(id_tipo_incidencia,id_ticket) {
        return db.execute('SELECT p.Id_Pregunta, p.Texto_Pregunta FROM pregunta p, tipo_incidencia_pregunta tip WHERE p.Id_Pregunta = tip.Id_Pregunta AND tip.Id_Tipo_Incidencia = ? AND p.Id_Pregunta NOT IN (SELECT pt.Id_Pregunta FROM pregunta_ticket pt WHERE Id_Ticket = ?)',
        [id_tipo_incidencia, id_ticket]
        );
    }

}