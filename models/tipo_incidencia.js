const db = require('../util/database');

module.exports = class Tipo_incidencia{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre_tipo_incidencia,SLA_tipo_incidencia) {
        this.nombre_tipo_incidencia = nombre_tipo_incidencia;
        this.SLA_tipo_incidencia = SLA_tipo_incidencia;
        this.visibilidad_tipo_incidencia = 1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    tipo_incidencia_save() {
        return db.execute('INSERT INTO tipo_incidencia(Nombre_Tipo_Incidencia, SLA, Visibilidad_Tipo_Incidencia) VALUES (?, ?, ?)', 
            [
                this.nombre_tipo_incidencia,
                this.SLA_tipo_incidencia,
                this.visibilidad_tipo_incidencia
            ]    
        );
    }

    static tipo_incidencia_fetch_lastinsertion(){
        return db.execute('SELECT(SELECT MAX(Id_Tipo_Incidencia) FROM tipo_incidencia t WHERE t.Visibilidad_Tipo_Incidencia = 1) AS L');
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM tipo_incidencia WHERE Visibilidad_Tipo_Incidencia = 1');
    }

    static fetchtipo_incidencia(id){
        return db.execute('SELECT T.Nombre_Tipo_Incidencia, T.SLA FROM tipo_incidencia t WHERE Id_Tipo_Incidencia = ?',
            [id]
        );
    }

    static async pregunta_check_tp(p_id, tp_id){
        return db.execute('SELECT EXISTS(SELECT * FROM tipo_incidencia_pregunta p WHERE p.Id_Pregunta = ? AND p.Id_Tipo_Incidencia = ?) AS E',
            [p_id, tp_id]
        );
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

    static fetchAllPreguntas() {
        return db.execute('SELECT * FROM pregunta P WHERE P.Visibilidad_Pregunta = 1');
    }

    static eliminarPregunta(id_p, id_t){
        return db.execute('DELETE FROM tipo_incidencia_pregunta WHERE Id_Pregunta = ? AND Id_Tipo_Incidencia = ?',
            [id_p, id_t]
        );
    }

    static modificar_tipo_incidencia(id_tp, nuevo_tp, nuevo_SLA){
        return db.execute('UPDATE tipo_incidencia SET Nombre_Tipo_Incidencia = ?, SLA = ? WHERE Id_Tipo_Incidencia = ?',
        [
            nuevo_tp,
            nuevo_SLA,
            id_tp
        ])
    }

}