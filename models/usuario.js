const db = require('../util/database');
const bcrypt = require('bcryptjs');
const nodemailer= require('nodemailer');
        const { callbackPromise } = require('nodemailer/lib/shared');
        
        const transporter= nodemailer.createTransport({
            service: "hotmail",
            auth : {
                user:"ticketz_no_reply@outlook.com",
                pass: "Jorgito@22"
            }
        });


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
        .then((contrasenia_usuario_cifrado)=>{
            var crypto = require("crypto");
            var id = crypto.randomBytes(20).toString('hex');
            const options= {
                from: "ticketz_no_reply@outlook.com",
                to: this.login_usuario,
                subject: "Verificacion Ticketz",
                text: "Haga click en el siguiente link para verificar su correo:  localhost:8080/verificacion/"+ id 
            };
            transporter.sendMail(options,callbackPromise());
                        return db.execute('INSERT INTO usuario(Id_Rol, Nombre_Usuario, Login, Contraseña, URL_Foto, Hash_Verificacion) VALUES (?, ?, ?, ?, ?,?)', 
                            [
                                this.id_rol_usuario,
                                this.nombre_usuario,
                                this.login_usuario,
                                contrasenia_usuario_cifrado,
                                this.url_foto_usuario,
                                id
                            ]    
                        )
            }).catch((err) =>{    
            console.log(err);
        });

    }

    static getId(login)
    {
        return db.execute('SELECT Id_Usuario FROM usuario WHERE Login=?',
            [login])
        .then()
        .catch((err) => {console.log(err);});
    }

    static getOneActive(login){
        return db.execute('SELECT u.Activo FROM usuario u WHERE u.login = ? ', [login]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT u.Nombre_Usuario, u.Id_Usuario, u.URL_Foto, u.Login, u.Contraseña, u.Id_Rol, r.Nombre_Rol, CASE WHEN (u.Id_Usuario IN (SELECT ut.Id_Usuario FROM usuario_ticket ut, estado_ticket et WHERE ut.Id_Ticket = et.Id_Ticket AND ut.Cargo = "Encargado" AND et.Id_Estado != 4 AND et.Id_Estado != 6) = FALSE) THEN 0 WHEN (u.Id_Usuario IN (SELECT ut.Id_Usuario FROM usuario_ticket ut, estado_ticket et WHERE ut.Id_Ticket = et.Id_Ticket AND ut.Cargo = "Encargado" AND et.Id_Estado != 4 AND et.Id_Estado != 6) = TRUE) THEN 1 END AS "Tickets" FROM usuario u , rol r WHERE u.Id_Rol = r.Id_Rol AND u.Login = u.Login GROUP BY u.Id_Usuario');
    }

    static findOne(login_usuario) {
        return db.execute('SELECT * FROM usuario WHERE Login=?',
            [login_usuario]);
    }

    static findProfile(login_usuario) {
        return db.execute('SELECT u.Nombre_Usuario, u.Id_Usuario, u.URL_Foto, u.Login, u.Contraseña, u.Id_Rol, r.Nombre_Rol, CASE WHEN ((u.Id_Usuario IN (SELECT ut.Id_Usuario FROM usuario_ticket ut)) = FALSE) THEN 0 WHEN ((u.Id_Usuario IN (SELECT ut.Id_Usuario FROM usuario_ticket ut)) = TRUE) THEN 1 END AS "Tickets"  FROM usuario u , rol r WHERE u.Id_Rol = r.Id_Rol AND u.Login = ? GROUP BY u.Id_Usuario',
        [login_usuario]);
        //return db.execute('SELECT R.Id_Rol, R.Nombre_Rol, U.Id_Rol, U.URL_Foto, U.Id_Usuario, U.Login, U.Contraseña, U.Nombre_Usuario, COUNT(T.Id_Ticket) AS "Total" FROM rol R, usuario_ticket T, usuario U WHERE R.Id_Rol = U.Id_Rol AND T.Id_Usuario = U.Id_Usuario AND U.Login = ?',
        //[login_usuario]);
    }

    static countActiveTickets(id_usuario) {
        return db.execute('SELECT COUNT(t.Id_Ticket) as "Total" FROM ticket t, usuario_ticket ut WHERE t.Id_Ticket = ut.Id_Ticket AND ut.Id_Usuario = ? AND t.Id_Estado != 4 AND t.Id_Estado != 6 AND ut.Cargo ="Encargado"',
            [id_usuario]);
        
    }

    static countAllActiveTickets(){
        return db.execute('SELECT ut.Id_Usuario, COUNT(ut.Id_Ticket) AS "Total" FROM usuario_ticket ut, ticket t WHERE t.Id_Ticket = ut.Id_Ticket AND t.Id_Estado != 4 AND t.Id_Estado != 6 AND ut.Cargo = "Encargado" GROUP BY (ut.Id_Usuario)')
    }

    static countAllTickets(id_usuario){
        return db.execute('SELECT COUNT(t.Id_Ticket) as "Total" FROM ticket t, usuario_ticket ut WHERE t.Id_Ticket = ut.Id_Ticket AND ut.Id_Usuario = ? AND ut.Cargo ="Encargado"',
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
        return db.execute('SELECT rp.Id_Privilegio, r.Nombre_Rol FROM rol r, usuario u, rol_privilegio rp WHERE u.Id_Rol = r.Id_Rol AND u.Id_Usuario=? AND rp.Id_Rol=r.Id_Rol',
        [id_usuario]);
    }
    //CU MODIFICAR USUARIO // EN PROCESO
    //ID USUARIO - ID ROL - NOMBRE_USUARIO - LOGIN - CONTASEÑA - URL FOTO
    static async updatepassword(id_usuario,id_rol,newpassword){
                return db.execute('UPDATE usuario SET Id_Rol=?, Contraseña=? WHERE Id_Usuario=?',[id_rol,newpassword,id_usuario]); 
    }

    static async update(id_usuario,id_rol){
                return db.execute('UPDATE usuario SET Id_Rol=? WHERE Id_Usuario=?',[id_rol, id_usuario]);
    }
    
    static fetchByRol(execute) {
        return db.execute(execute);
    }
    
    static async profile_update(name,id_usuario){
        
        return db.execute('UPDATE usuario SET Nombre_Usuario = ? WHERE Id_Usuario=?',[name,id_usuario]);
    }

    static fetchLike(texto_ingresado) {
        return db.execute('SELECT R.Id_Rol, R.Nombre_Rol, U.Id_Rol, U.URL_Foto, U.Id_Usuario, U.Login, U.Contraseña, U.Nombre_Usuario, COUNT(T.Id_Ticket) AS "Total" FROM rol R, usuario_ticket T, usuario U WHERE R.Id_Rol = U.Id_Rol AND T.Id_Usuario = U.Id_Usuario AND U.Nombre_Usuario LIKE ? GROUP BY U.Id_Usuario', ['%' + texto_ingresado + '%']);
    }


    static  Usuario_Verificar(hash){
        return db.execute('SELECT U.Id_Usuario,U.Contraseña FROM usuario U WHERE Hash_Verificacion=?',[hash]);
    }
    static async Activo(id_usuario){
        return db.execute('UPDATE usuario SET Activo = 1 WHERE Id_Usuario=?',[id_usuario]);
    }
}