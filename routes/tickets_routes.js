const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isAuth = require('../util/is-auth.js');
const tickets_controller = require('../controllers/tickets_controller');

const router = express.Router();


router.use('/lista', isAuth, tickets_controller.lista);

router.use('/archivo',  isAuth,tickets_controller.lista_archivo);

router.get('/nuevo',  isAuth,tickets_controller.nuevo_get);

router.post('/nuevo',  isAuth,tickets_controller.nuevo_post);

router.post('/filtros',  isAuth,tickets_controller.filtros);

router.post('/getLike',isAuth, tickets_controller.getLike);

router.post('/filtros_archivo',  isAuth,tickets_controller.filtros_archivo);

router.post('/filtros_backlog',  isAuth,tickets_controller.filtros_backlog);

router.get('/datos/:id_ticket',  isAuth,tickets_controller.getDatosTicket);

router.get('/:id_ticket', isAuth, tickets_controller.ticket_get);

router.post('/filtros_panel',  isAuth,tickets_controller.filtros_panel);

router.post('/:id_ticket', isAuth,tickets_controller.ticket_post);

router.post('/archivar/:id_ticket', isAuth,tickets_controller.ticket_archivar);

router.get('/paneles',isAuth,tickets_controller.ticket_panel);

router.get('/panel', isAuth,tickets_controller.ticket_panel);

module.exports = router;