const db = require('../util/database');

module.exports = class Rol{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor() {
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM rol');
    }

    static getId(rol) {
        return db.execute('SELECT Id_Rol FROM rol WHERE Nombre_Rol = ?',
            [rol]
        );
    }

}