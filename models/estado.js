const db = require('../util/database');
module.exports = class Estado{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, visibilidad) {
        this.nombre_estado = nombre;
        this.visibilidad_estado = visibilidad;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO estado(Nombre_Estado, Visibilidad_Estado) VALUES (?, ?)', 
            [this.nombre_estado, 1]
        );
    }

    static updateVisibilidad(idEstado, visibilidad)
    {
        return db.execute('UPDATE estado SET Visibilidad_Estado =? WHERE Id_Estado =?',
            [
                visibilidad,
                idEstado
            ]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM estado'
        );
    }

    static fetchLike(texto_ingresado) {
        return db.execute('SELECT * FROM estado WHERE Nombre_Estado LIKE ?', ['%' + texto_ingresado + '%']);
    }

}