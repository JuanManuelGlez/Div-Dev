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

    static fetchEstado(id_estado){
        return db.execute('SELECT Id_Estado,Nombre_Estado,Visibilidad_Estado FROM estado WHERE Id_Estado=?',[id_estado]);
    }

    static update(id_estado,nombre_estado,visibilidad_estado){
        return db.execute('UPDATE estado SET Nombre_Estado=?, Visibilidad_Estado=? WHERE Id_Estado=?',[nombre_estado,visibilidad_estado,id_estado]);
    }

}