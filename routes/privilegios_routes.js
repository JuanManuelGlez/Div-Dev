const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const privilegio_controller = require('../controllers/privilegio_controller');

const router = express.Router();

router.get('/listaPrivilegios', privilegio_controller.getAll);

module.exports = router;