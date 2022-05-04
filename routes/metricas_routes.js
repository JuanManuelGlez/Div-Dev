const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');

const metricas_controller = require('../controllers/metricas_controller');

const router = express.Router();
    
router.post('/getByStatusAll', isAuth, metricas_controller.getByStatusAll);

router.post('/getByProcedenciaAll', isAuth, metricas_controller.getByProcedenciaAll);

router.post('/getByTipoIncidenciaAll', isAuth, metricas_controller.getByTipoIncidenciaAll);

router.post('/getByResolucion', isAuth, metricas_controller.getByResolucion);

router.get('/getPromedios', isAuth, metricas_controller.getPromedios);

router.post('/getTiempoYDestiempo', isAuth, metricas_controller.getTiempoYDestiempo);


module.exports = router;