const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const estado_controller = require('../controllers/estado_controller');

const router = express.Router();
    
router.get('/getAll', estado_controller.getAllEstados);

router.post('/getLike', estado_controller.getLike);

router.post('/nuevoEstado', estado_controller.nuevoEstado);


module.exports = router;