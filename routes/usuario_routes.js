//const filesystem = require('fs');
//const path = require('path');
const express = require('express');
//const app = express();
const router = express.Router();
const isAuth= require ('../util/is-auth.js')

const usuario_controller = require('../controllers/usuario_controller');


router.get('/signup',usuario_controller.signup_get);

router.post('/signup',usuario_controller.signup_post);

router.get('/login',usuario_controller.login_get);

router.post('/login',usuario_controller.login_post);

router.get('/lista',usuario_controller.lista);

router.get('/panelAdmin',usuario_controller.panel_admin);

router.get('/datos/:id_usuario', usuario_controller.getDatosUsuario);

router.post('/:id_usuario',usuario_controller.usuario_post);



module.exports = router;