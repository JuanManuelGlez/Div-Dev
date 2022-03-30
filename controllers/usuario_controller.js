const path = require('path');
const Usuario = require('../models/usuario');

exports.signup_get = (request, response, next) => {
    response.render('usuarios/signup');
};

exports.signup_post = (request, response, next) => {
    const usuario_nuevo= new Usuario(request.body.nombre, request.body.correo, request.body.contrasenia, 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg');

    usuario_nuevo.usuario_save()
        .then(() => {
            response.redirect('/usuario/login');
        })
        .catch(err => console.log(err));
};

exports.login_get = (request, response, next) => {
    response.render('usuarios/login', []);
};

exports.login_post = (request, response, next) => {
    //PONER COSAS PARA LOGIN 
};

exports.logout = (request, response, next) => {
    //request.session.destroy(() =>)
};


