const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');
const procedencia_controller = require('../controllers/procedencia_controller');

const router = express.Router();

router.get('/procedencia_f', isAuth,procedencia_controller.get_All_Procedencia);
router.post('/procedencia_f', isAuth,procedencia_controller.post_procedencia);
router.get('/procedencia_f/:id_procedencia', isAuth,procedencia_controller.get_procedencia);
router.post('/procedencia_f/update', isAuth,procedencia_controller.update_procedencia);

module.exports=router;