const text = require('body-parser/lib/types/text');
const db = require('../util/database');

module.exports = class Privilegio{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor() {
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchPrivilegios() {
        return db.execute('SELECT * FROM rol_privilegio');
    }

    static fetchAll(){
        return db.execute('SELECT * FROM privilegio')
    }

    static EliminaPrivilegio(id_rol, id_priv){
        return db.execute('DELETE FROM rol_privilegio WHERE Id_Rol = ? AND Id_Privilegio = ?', 
            [id_rol,
            id_priv]
        )
    }

    static AgregaPrivilegio (id_rol, id_priv){
        return db.execute('INSERT INTO rol_privilegio(Id_Rol, Id_Privilegio) VALUES (?, ?)', 
            [id_rol,
            id_priv]
        )
    }

    static async deleteprivs(id_rol){
        return db.execute('DELETE FROM rol_privilegio WHERE Id_Rol = ?', 
            [id_rol]
        )
    }

}