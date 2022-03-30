const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const tickets_controller = require('../controllers/tickets_controller');

const router = express.Router();


router.use('/lista', tickets_controller.lista);
    
router.get('/nuevo', tickets_controller.nuevo_get);

router.post('/nuevo', tickets_controller.nuevo_post);

router.get('/:id_ticket/asignar_usuario', tickets_controller.usuarios_get);

router.post('/:id_ticket/asignar_usuario', tickets_controller.asignar_usuario);

router.get('/:id_ticket', tickets_controller.ticket_get);

router.post('/:id_ticket',tickets_controller.ticket_post);

module.exports = router;