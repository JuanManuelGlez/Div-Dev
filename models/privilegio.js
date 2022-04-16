const db = require('../util/database');
module.exports = class Privilegio{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre) {
        this.nombre_privilegio = nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO privilegio (Nombre_Privilegio, Visibilidad_Privilegio) VALUES (?,?)', 
            [this.nombre_privilegio, 1]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM privilegio');
    }

}