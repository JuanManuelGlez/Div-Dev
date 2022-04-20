const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');
const tipo_incidencia_controller = require('../controllers/tipo_incidencia_controller');

const router = express.Router();
    
router.get('/preguntas/:id_tipo_incidencia', isAuth, tipo_incidencia_controller.getPreguntas);

router.post('/preguntasNuevas/:id_tipo_incidencia',  isAuth,tipo_incidencia_controller.getPreguntasNuevas);

router.post('/eliminar_pregunta/:id_pregunta', isAuth, tipo_incidencia_controller.eliminarPregunta);

router.get('/', isAuth, tipo_incidencia_controller.getTipo_Incidencia);

router.post('/', isAuth,tipo_incidencia_controller.postTipo_Incidencia);

router.get('/modificar/:id_tipo_incidencia', isAuth,tipo_incidencia_controller.getModficarTipo_Incidencia);

router.post('/modificar/:id_tipo_incidencia', isAuth,tipo_incidencia_controller.postModficarTipo_Incidencia);


module.exports = router;