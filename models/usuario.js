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

    static getId(login, nombre)
    {
        return db.execute('SELECT Id_Usuario FROM usuario WHERE Login=? AND Nombre_Usuario=?',
            [login, nombre])
        .then()
        .catch((err) => {console.log(err);});
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    /*static fetchAll() {
        return db.execute('SELECT * FROM usuario')
    }*/ 

    static fetchAll_AsignarTicket(){
        return db.execute("SELECT ut.Id_Usuario, u.Nombre_Usuario, u.URL_Foto, COUNT(*) AS 'Tickets_Activos' FROM usuario_ticket ut, estado_ticket et, usuario u WHERE ut.Id_Ticket = et.Id_Ticket AND u.Id_Usuario = ut.Id_Usuario AND ut.Cargo = 'Encargado' AND (et.Id_Estado = 2 OR et.Id_Estado = 3 OR et.Id_Estado = 4) GROUP BY u.Nombre_Usuario, u.URL_Foto ORDER BY COUNT('Tickets_Activos')");}

        
    static fetchAll() {
        return db.execute('SELECT R.Id_Rol, R.Nombre_Rol, U.Id_Rol, U.URL_Foto, U.Id_Usuario, U.Login, U.Contraseña, U.Nombre_Usuario, COUNT(T.Id_Ticket) AS "Total" FROM rol R, usuario_ticket T, usuario U WHERE R.Id_Rol = U.Id_Rol AND T.Id_Usuario = U.Id_Usuario GROUP BY U.Id_Usuario');
    }

    static findOne(login_usuario) {
        return db.execute('SELECT * FROM usuario WHERE Login=?',
            [login_usuario]);
    }

    static countActiveTickets(id_usuario) {
        return db.execute('SELECT COUNT(T.Id_Ticket) as "Total" FROM usuario_ticket T WHERE T.Id_Usuario = ?',
            [id_usuario]);
    }

    static fetchOne(id_usuario) {
        return db.execute('SELECT * FROM usuario WHERE Id_Usuario=?',
            [id_usuario]);
    }

    static fetchEstado(){ //?
        return db.execute('SELECT * FROM rol');
    }

    static fetchRolUsuario(id_usuario){
        return db.execute('SELECT * FROM rol r, usuario u WHERE u.Id_Rol = r.Id_Rol AND u.Id_Usuario=?',
        [id_usuario]);
    }
    //CU MODIFICAR USUARIO // EN PROCESO
    //ID USUARIO - ID ROL - NOMBRE_USUARIO - LOGIN - CONTASEÑA - URL FOTO
    static async update(id_usuario,id_rol){
            return db.execute('UPDATE usuario SET Id_Rol=? WHERE Id_Usuario=?',[id_rol,id_usuario]);
          
    }

}