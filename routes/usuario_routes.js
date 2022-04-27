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

router.get('/lista', isAuth,usuario_controller.lista);

router.post('/filtros', isAuth,usuario_controller.filtros);

router.get('/datos', isAuth,usuario_controller.datos);

router.post('/getLike',isAuth, usuario_controller.getLike);

router.post('/profile_update', isAuth,usuario_controller.profile_update); // ?

router.post('/profile_image', isAuth,usuario_controller.profile_image); // ?

router.get('/panelAdmin', isAuth,usuario_controller.panel_admin);

router.get('/datos/:id_usuario', isAuth, usuario_controller.getDatosUsuario);

router.post('/:id_usuario', isAuth,usuario_controller.usuario_post);

router.get('/logout',usuario_controller.logout);


module.exports = router;