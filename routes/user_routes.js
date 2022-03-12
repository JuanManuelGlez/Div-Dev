const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const user_controller = require('../controllers/user_controller');

const router = express.Router();


router.use('/login', user_controller.login);



module.exports = router;