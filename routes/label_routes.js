const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const label_controller = require('../controllers/label_controller');

const router = express.Router();
    
router.post('/nuevaLabel', label_controller.nuevaLabel);

router.post('/getLike', label_controller.getLike);

router.get('/getAll', label_controller.getAll);

module.exports = router;