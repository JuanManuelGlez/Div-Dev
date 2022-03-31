module.exports = class Pregunta{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor() {
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO pregunta (Texto_Pregunta, Visibilidad_Pregunta) VALUES(?,1)',
        [])
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM pregunta')
    }

    static fetchSomeNotIn(id_tipo_incidencia){
        return db.execute('SELECT Id_Pregunta, Texto_Pregunta FROM pregunta WHERE Id_Pregunta NOT IN (SELECT Id_Pregunta FROM tipo_incidencia_pregunta WHERE Id_Tipo_Incidencia = ?',
        [id_tipo_incidencia])
    }
}