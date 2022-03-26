const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const tipo_incidencia_controller = require('../controllers/tipo_incidencia_controller');

const router = express.Router();
    
router.get('/preguntas/:id_tipo_incidencia', tipo_incidencia_controller.getPreguntas);



module.exports = router;