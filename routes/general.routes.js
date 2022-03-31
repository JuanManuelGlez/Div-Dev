const express = require('express');
const router = express.Router();
const filesystem = require('fs');
const path = require('path');

router.get('/',(request, response, next) =>{
    response.render('metricas');
});
router.get('/metricas',(request, response, next) =>{
    response.render('metricas');
});
router.get('/archivo',(request, response, next) =>{
    response.render('archivo');
});
router.get('/nuevo_ticket',(request, response, next) =>{
    response.render('nuevo_ticket');
});
router.get('/panel',(request, response, next) =>{
    response.render('panel');
});
router.get('/ayuda',(request, response, next) =>{
    response.render('ayuda');
});
router.get('/login',(request, response, next) =>{
    response.render('login');
});
router.get('/signup',(request, response, next) =>{
    response.render('signup');
});
router.get('/administrar_privilegios',(request, response, next) =>{
    response.render('administrar_privilegios');
});
router.get('/nuevo_tipo_incidencia',(request, response, next) =>{
    response.render('nuevo_tipo_incidencia');
});
router.get('/lista_usuarios',(request, response, next) =>{
    response.render('lista_usuarios');
});

router.get('/reporte',(request, response, next) =>{
    response.render('reporte');
});


module.exports = router;