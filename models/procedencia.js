const db = require('../util/database');
const bcrypt = require('bcryptjs');


module.exports = class Procedencia{

    constructor(nombre_procedencia) {
        this.nombre_procedencia=nombre_procedencia;
    }

    save() {
        return db.execute('INSERT INTO procedencia(Nombre_Procedencia,Visibilidad_Procedencia) VALUES (?,1)', 
                [
                    this.nombre_procedencia
                ]    
        );
    }


    static fetchProcedencias() {
        return db.execute('SELECT Id_Procedencia,Nombre_Procedencia,Visibilidad_Procedencia FROM procedencia');
    }

    static fetchProcedencia(id_procedencia) {
        return db.execute('SELECT Id_Procedencia,Nombre_Procedencia,Visibilidad_Procedencia FROM procedencia WHERE Id_Procedencia=?',[id_procedencia]);
    }


    static update(id_procedencia,nombre_procedencia,visibilidad_procedencia){
        return db.execute('UPDATE procedencia SET Nombre_Procedencia=?, Visibilidad_Procedencia=? WHERE Id_Procedencia=?',[nombre_procedencia,visibilidad_procedencia,id_procedencia]);
    }
}