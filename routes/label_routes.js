const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');


const label_controller = require('../controllers/label_controller');

const router = express.Router();
    
router.get('/getAll', isAuth, label_controller.getAll);

router.post('/nuevaLabel',isAuth, label_controller.nuevaLabel);

router.post('/getLike',isAuth, label_controller.getLike);

//router.get('/getAll', label_controller.getAll);

module.exports = router;