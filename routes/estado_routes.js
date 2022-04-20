const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');
const estado_controller = require('../controllers/estado_controller');

const router = express.Router();
    
router.get('/getAll',  isAuth,estado_controller.getAllEstados);

router.post('/getLike',  isAuth,estado_controller.getLike);

router.post('/nuevoEstado',  isAuth,estado_controller.nuevoEstado);


module.exports = router;