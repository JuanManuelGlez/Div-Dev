const express = require('express');
const router = express.Router();
const filesystem = require('fs');
const path = require('path');
const isAuth = require('../util/is-auth.js');
const tick_panel= require('../controllers/tickets_controller');
const usuario=require('../controllers/usuario_controller');
const Tipo_Incidencia = require('../models/tipo_incidencia');
const Usuario = require('../models/usuario');

router.get('/', isAuth,tick_panel.ticket_panel
);

router.get('/metricas', isAuth,(request, response, next) =>{
    console.log(request.session.privilegios);
    if(request.session.privilegios.includes(11)){
        Tipo_Incidencia.fetchAll()
            .then(([rowsTipoIncidencia, fieldDataTipoIncidencia]) => {
                Usuario.fetchAll()
                .then(([rowsUsuario, fieldDataUsuario]) => {
                    response.render('metricas', {usuarios:rowsUsuario, incidencias:rowsTipoIncidencia});
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }else{
        response.redirect('/')
    } 

});
router.get('/archivo', isAuth,(request, response, next) =>{
     response.render('archivo');    
});

router.get('/panel', isAuth,tick_panel.ticket_panel
);

router.get('/ayuda', isAuth,(request, response, next) =>{
    response.render('ayuda');
});

router.get('/login', isAuth,(request, response, next) =>{
    response.render('login');
});

router.get('/signup', isAuth,(request, response, next) =>{
    response.render('signup');
});
router.get('/administrar_privilegios', isAuth,(request, response, next) =>{
    if(  12 in request.session.privilegios){
        response.render('administrar_privilegios'); 
    }else{
        response.redirect('/');
    }      
});

router.get('/nuevo_tipo_incidencia', isAuth,(request, response, next) =>{
    //if(  3 in request.session.privilegios){
        response.render('nuevo_tipo_incidencia'); 
    //}else{
    //    response.redirect('/');
    //}  
});
router.get('/lista_usuarios', isAuth,(request, response, next) =>{
        response.render('lista_usuarios');    
});

router.get('/ticket', isAuth,(request, response, next) =>{
    response.render('ticket');
});

router.get('/verificacion/:cript/',usuario.verificar_get);
router.post('/verificacion/:cript/',usuario.verificar);

module.exports = router;