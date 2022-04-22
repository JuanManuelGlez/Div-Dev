const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const preguntas_controller = require('../controllers/preguntas_controller');

const router = express.Router();
    
router.get('/preguntas_getAll', preguntas_controller.preguntas_getAll);

router.post('/getLike_Pregunta', preguntas_controller.getLike);

router.post('/nuevaPregunta_panel', preguntas_controller.nueva_panel);

router.post('/eliminarPreguntaPanel', preguntas_controller.eliminarP_panel)

router.post('/actualizaPregunta', preguntas_controller.actualizaPregunta)

module.exports = router;