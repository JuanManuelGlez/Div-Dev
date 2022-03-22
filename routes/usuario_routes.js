const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const usuario_controller = require('../controllers/usuario_controller');

const router = express.Router();


router.post('/nuevo', usuario_controller.nuevo);



module.exports = router;