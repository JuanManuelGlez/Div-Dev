const path = require('path');
const Ticket = require('../models/ticket');
const Tipo_incidencia = require('../models/tipo_incidencia');


exports.lista = (request, response, next) => {
    //response.render()
};

exports.nuevo_get = (request, response, next) => {
    //debe de haber una manera mejor de hacer esto pero aja creo que sirve por ahora
    Tipo_incidencia.fetchAll()
        .then(([rowsTipoIncidencia, fieldDataTipoIncidencia]) => {
            Ticket.fetchPrioridades()
            .then(([rowsPrioridades, fieldDataPrioridades]) => {
                Ticket.fetchProcedencias()
                .then(([rowsProcedencias, fieldDataProsedencias]) => {
                    Ticket.fetchLabels()
                    .then(([rowsLabels, fieldDataLabels]) => {
                        response.render('tickets/nuevo_ticket', {
                            tipos_incidencia: rowsTipoIncidencia,
                            prioridades: rowsPrioridades,
                            procedencias: rowsProcedencias,
                            labels: rowsLabels
                        });
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

exports.nuevo_post = (request, response, next) => {

    const ticketNuevo = new Ticket(request.body.asunto, request.body.descripcion, request.body.prioridad, request.body.tipo_incidencia, request.body.prosedencia);
    ticketNuevo.save()
        .then((result) => {
            let idNuevo = result[0].insertId; //probablemente una mejor manera de hacer esto
            Ticket.assignLabel(idNuevo, request.body.labels);
            Ticket.assignEstado(idNuevo, 1);

            for(let i = 0; i < request.body.numPreguntas; i++)
            {
                let actualP = 'pregunta' + i;
                let actualR = 'respuesta' + i;
                Ticket.assignPregunta(idNuevo, request.body[actualP], request.body[actualR]); //Esto funciona, no se si sea lo mejor
            }
            
            response.redirect('/tickets/nuevo');
            
        })
        .catch(err => console.log(err));

};