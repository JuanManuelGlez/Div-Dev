const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const procedencia_controller = require('../controllers/procedencia_controller');

const router = express.Router();

router.get('/procedencia_f',procedencia_controller.get_All_Procedencia);
router.post('/procedencia_f',procedencia_controller.post_procedencia);
router.get('/procedencia_f/:id_procedencia',procedencia_controller.get_procedencia);
router.post('/procedencia_f/update',procedencia_controller.update_procedencia);

module.exports=router;