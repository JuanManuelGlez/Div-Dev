const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');

const comentario_controller = require('../controllers/comentario_controller');

const router = express.Router();
    
router.get('/nuevo', isAuth, comentario_controller.nuevocomentario_get);

router.get('/:id_ticket',  isAuth,comentario_controller.comentarios_get);

router.get('/datos/:id_ticket',  isAuth,comentario_controller.comentarios_getData);


router.post('/nuevo/:id_ticket',  isAuth,comentario_controller.nuevocomentario_postData);


router.post('/:id_ticket', isAuth, comentario_controller.nuevocomentario_post);


module.exports = router;