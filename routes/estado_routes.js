const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const estado_controller = require('../controllers/estado_controller');

const router = express.Router();
    
router.get('/estados', estado_controller.lista);
module.exports = router;