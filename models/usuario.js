const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, login, contrasenia, url_foto, id_rol) {
        this.nombre_usuario = nombre;
        this.login_usuario = login;
        this.contrasenia_usuario = contrasenia;
        this.url_foto_usuario = url_foto;
        this.id_rol_usuario = id_rol;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    Usuario_save() {
        let comando = 'INSERT INTO usuario VALUES (?, ?, ?, ?, ?)';
        return bcrypt.hash(this.contrasenia_usuario, 12)
        .then((contrasenia_usuario_cifrado) => {
            return db.execute(comando, 
                [this.nombre_usuario,
                this.login_usuario,
                contrasenia_usuario_cifrado,
                this.url_foto_usuario,
                this.id_rol_usuario]    
        );
        })
        .catch((err) =>{
            console.log(err);
        });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
    }

    static fetchOne() {

    }

}