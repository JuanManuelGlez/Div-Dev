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
    static fetchPrivilegios(id) {
        return db.execute('SELECT p.Nombre_Privilegio, p.Id_Privilegio, rp.Id_Rol FROM privilegio p, rol_privilegio rp WHERE p.Id_Privilegio = rp.Id_Privilegio HAVING rp.Id_Rol = ?', 
        [id]);
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

}