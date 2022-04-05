const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const tipo_incidencia_controller = require('../controllers/tipo_incidencia_controller');

const router = express.Router();
    
router.get('/preguntas/:id_tipo_incidencia', tipo_incidencia_controller.getPreguntas);

router.post('/preguntasNuevas/:id_tipo_incidencia', tipo_incidencia_controller.getPreguntasNuevas);

router.get('/', tipo_incidencia_controller.getTipo_Incidencia);

router.post('/',tipo_incidencia_controller.postTipo_Incidencia);




module.exports = router;