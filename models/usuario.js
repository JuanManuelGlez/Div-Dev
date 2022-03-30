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
    /*static fetchAll() {
        return db.execute('SELECT * FROM usuario')
    }*/ 

    static fetchAll_AsignarTicket(){
        return db.execute("SELECT u.Nombre_Usuario, u.URL_Foto, COUNT(*) AS 'Tickets_Activos' FROM usuario_ticket ut, estado_ticket et, usuario u WHERE ut.Id_Ticket = et.Id_Ticket AND u.Id_Usuario = ut.Id_Usuario AND ut.Cargo = 'Encargado' AND (et.Id_Estado = 2 OR et.Id_Estado = 3 OR et.Id_Estado = 4) GROUP BY u.Nombre_Usuario, u.URL_Foto ORDER BY COUNT('Tickets_Activos')");
    }

    static findOne(login_usuario) {
        return db.execute('SELECT * FROM usuario WHERE Login=?',
            [login_usuario]);
    }

}