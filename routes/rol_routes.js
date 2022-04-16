const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const rol_controller = require('../controllers/rol_controller');

const router = express.Router();

router.get('/listaRoles', rol_controller.getAll);
router.post('/listaRoles', rol_controller.post_roles);

module.exports = router;