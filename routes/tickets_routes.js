const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const tickets_controller = require('../controllers/tickets_controller');

const router = express.Router();


router.use('/lista', tickets_controller.lista);

router.use('/archivo', tickets_controller.lista_archivo);
    
router.get('/nuevo', tickets_controller.nuevo_get);

router.post('/nuevo', tickets_controller.nuevo_post);

router.get('/datos/:id_ticket', tickets_controller.getDatosTicket);

router.get('/:id_ticket', tickets_controller.ticket_get);

router.post('/:id_ticket',tickets_controller.ticket_post);

router.post('/archivar/:id_ticket',tickets_controller.ticket_archivar);


module.exports = router;