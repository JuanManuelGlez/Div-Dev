const db = require('../util/database');
module.exports = class Rol{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre) {
        this.nombre_rol = nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO rol (Nombre_Rol) VALUES (?)', 
            [this.nombre_rol]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM rol');
    }
}