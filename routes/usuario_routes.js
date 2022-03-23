const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const usuario_controller = require('../controllers/usuario_controller');

const router = express.Router();

router.get('/signup', usuario_controller.signup_get);

router.post('/signup', usuario_controller.signup_post);



module.exports = router;