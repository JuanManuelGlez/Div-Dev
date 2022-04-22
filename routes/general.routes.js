const express = require('express');
const router = express.Router();
const filesystem = require('fs');
const path = require('path');
const isAuth = require('../util/is-auth.js');
const tick_panel= require('../controllers/tickets_controller');

router.get('/', isAuth,(request, response, next) =>{
    response.render('metricas');
});
router.get('/metricas', isAuth,(request, response, next) =>{
    response.render('metricas');
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
    response.render('administrar_privilegios');
});
router.get('/nuevo_tipo_incidencia', isAuth,(request, response, next) =>{
    response.render('nuevo_tipo_incidencia');
});
router.get('/lista_usuarios', isAuth,(request, response, next) =>{
    response.render('lista_usuarios');
});

router.get('/ticket', isAuth,(request, response, next) =>{
    response.render('ticket');
});


module.exports = router;