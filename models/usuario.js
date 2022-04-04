const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, login, contrasenia, url_foto) {
        this.nombre_usuario = nombre;
        this.login_usuario = login;
        this.contrasenia_usuario = contrasenia;
        this.url_foto_usuario = url_foto;
        this.id_rol_usuario = 4;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    usuario_save (){
        return bcrypt.hash(this.contrasenia_usuario, 12)
        .then((contrasenia_usuario_cifrado) => {
            return db.execute('INSERT INTO usuario(Id_Rol, Nombre_Usuario, Login, Contraseña, URL_Foto) VALUES (?, ?, ?, ?, ?)', 
                [
                    this.id_rol_usuario,
                    this.nombre_usuario,
                    this.login_usuario,
                    contrasenia_usuario_cifrado,
                    this.url_foto_usuario
                ]    
        );
        })
        .catch((err) =>{    
            console.log(err);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuario');
    }

    static findOne(login_usuario) {
        return db.execute('SELECT * FROM usuario WHERE Login=?',
            [login_usuario]);
    }

    static fetchOne(id_usuario) {
        return db.execute('SELECT * FROM usuario WHERE Id_Usuario=?',
            [id_usuario]);
    }

    static fetchEstado(){
        return db.execute('SELECT * FROM rol');
    }

    //CU MODIFICAR USUARIO // EN PROCESO
    //ID USUARIO - ID ROL - NOMBRE_USUARIO - LOGIN - CONTASEÑA - URL FOTO
    static async update(id_ticket,id_estado,id_prioridad,Estado_Actual,id_incidencia){
        
        await this.assignIncidencia(id_ticket,id_incidencia);
        await this.assignPrioridad(id_ticket,id_prioridad);
            if(id_estado!=Estado_Actual){
                await this.assignEstado(id_ticket,id_estado);
                if(id_estado ==1||5){
                    return db.execute('UPDATE ticket SET Fecha_Fin=CURRENT_TIMESTAMP WHERE Id_Ticket=?',[id_ticket]);
                }
                           
            }          
        
    }

}