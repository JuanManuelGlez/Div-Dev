const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');

const metricas_controller = require('../controllers/metricas_controller');

const router = express.Router();
    
router.get('/getByStatusAll', isAuth, metricas_controller.getByStatusAll);

router.get('/getByProcedenciaAll', isAuth, metricas_controller.getByProcedenciaAll);

router.get('/getByTipoIncidenciaAll', isAuth, metricas_controller.getByTipoIncidenciaAll);

router.get('/getByResolucion', isAuth, metricas_controller.getByResolucion);


module.exports = router;