const path = require('path');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs')

exports.signup_get = (request, response, next) => {
    response.render('usuarios/signup');
};

exports.signup_post = (request, response, next) => {
    const usuario_nuevo= new Usuario(request.body.nombre, request.body.correo, request.body.contrasenia, 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg');

    usuario_nuevo.usuario_save()
        .then(() => {
            response.redirect('login');
        })
        .catch(err => console.log(err));
};

exports.login_get = (request, response, next) => {
<<<<<<< HEAD
    response.render('usuarios/login', {
        //login_usuario??
        correo: request.session.correo ? request.session.correo: '',
        info:''
    });
=======
    response.render('usuario/login', []);
>>>>>>> 9c387ce790256af6907dfdf4b0a2608f56a4dbc3
};

exports.login_post = (request, response, next) => {
    Usuario.findOne(request.body.correo)
            .then(([rows,fielData])=>{
                if (rows.length<1){
                    return response.redirect('login');
                }
                const usuario=new Usuario(rows[0].Nombre_Usuario,rows[0].Login, rows[0]['Contraseña'], '');
                bcrypt.compare(request.body.contrasenia, usuario.contrasenia_usuario)
                    .then((doMatch) =>{
                        if (doMatch) {
                            request.session.isLoggedIn=true;
                            request.session.usuario=usuario;
                            request.session.correo=usuario.login_usuario;
                            return request.session.save(err=>{
                                response.redirect('/panelticket');
                            });
                        }
                        response.redirect('login');
                    }).catch(err=>{
                        console.log(err);
                        response.redirect('login');
                    });
            }).catch((error)=>{
                console.log(error);
            });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login');
    });
};

