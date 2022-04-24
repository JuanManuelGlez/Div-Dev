const express = require('express');
const router = express.Router();
const filesystem = require('fs');
const path = require('path');
const isAuth = require('../util/is-auth.js');
const tick_panel= require('../controllers/tickets_controller');

router.get('/', isAuth,(request, response, next) =>{
    console.log(request.session);
    if (10 in request.session.privilegios ){
        response.render('metricas');    
    }else{
        response.render('ayuda');
    }
});
router.get('/metricas', isAuth,(request, response, next) =>{
    console.log(request.session);
    if (10 in request.session.privilegios ){
        response.render('metricas');    
    }else{
        response.render('ayuda');
    }
});
router.get('/archivo', isAuth,(request, response, next) =>{
    console.log("holi");
    console.log(request.session);
    if (request.session.privilegios.includes('7') ){
        response.render('archivo');    
    }else{
        response.render('ayuda');
    }
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
    console.log(request.session.privilegios);
    if (3 in request.session.privilegios ){
        response.render('administrar_privilegios');    
    }else{
        response.render('ayuda');
    }
});

router.get('/nuevo_tipo_incidencia', isAuth,(request, response, next) =>{
    console.log(request.session.privilegios);
    if (3 in request.session.privilegios ){
        response.render('nuevo_tipo_incidencia');    
    }else{
        response.render('ayuda');
    }
});
router.get('/lista_usuarios', isAuth,(request, response, next) =>{
    console.log(request.session.privilegios);
    if (15 in request.session.privilegios ){
        response.render('lista_usuarios');    
    }else{
        response.render('ayuda');
    }
});

router.get('/ticket', isAuth,(request, response, next) =>{
    response.render('ticket');
});


module.exports = router;