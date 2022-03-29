const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const comentario_controller = require('../controllers/comentario_controller');

const router = express.Router();
    
router.get('/nuevo', comentario_controller.nuevocomentario_get);

router.post('/nuevo', comentario_controller.nuevocomentario_post);


module.exports = router;