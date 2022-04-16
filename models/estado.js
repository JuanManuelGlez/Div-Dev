const db = require('../util/database');
module.exports = class Estado{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre) {
        this.nombre_estado = nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO estado(Nombre_Estado, Visibilidad_Estado) VALUES (?, ?)', 
            [this.nombre_estado, 1]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM estado'
        );
    }

    static fetchLike(texto_ingresado) {
        return db.execute('SELECT * FROM estado WHERE Visibilidad_Estado = 1 AND Nombre_Estado LIKE ?', ['%' + texto_ingresado + '%']);
    }

}