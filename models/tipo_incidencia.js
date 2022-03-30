const db = require('../util/database');

module.exports = class Tipo_incidencia{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor() {
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
    }

    static assign_pregunta(id_tipo_incidencia, Id_Pregunta) {
        return db.execute('INSERT INTO tipo_incidencia_pregunta(Id_Pregunta, Id_Tipo_Incidencia) VALUES (?,?)',
        [Id_Pregunta,
        id_tipo_incidencia]);
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

}