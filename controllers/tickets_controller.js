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
                        response.render('nuevo_ticket', {
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

    const ticketNuevo = new Ticket(request.body.asunto, request.body.descripcion, request.body.prioridad, request.body.tipo_incidencia, request.body.procedencia);
    ticketNuevo.save()
        .then((result) => {
            let idNuevo = result[0].insertId; //probablemente una mejor manera de hacer esto
            Ticket.assignEstado(idNuevo, 1);

            for(label of request.body.labels)
            {
                Ticket.assignLabel(idNuevo, label);
            }

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

exports.ticket_get=(request,response,next) => {
    Tipo_incidencia.fetchAll()
        .then(([rowsIncidencias,fielDataIncidencias])=>{
            Ticket.fetchPregunta_Ticket(request.params.id_ticket)
            .then(([rowsPreguntas,fielDataPregunta])=>{
                Ticket.fetchPrioridades()
                .then(([rowsPrioridades,fieldDataPrioridades])=>{
                    Ticket.fetchEstado() 
                    .then(([rowsEstados,fielDataEstados])=>{
                        Ticket.fetchEstado_Ticket(request.params.id_ticket)
                            .then(([rowsEstado,fielDataEstado])=>{
                                Ticket.fetchLabel_Ticket(request.params.id_ticket)
                                .then(([rowsLabels,fielDataLabels])=>{
                                    Ticket.fetchOne(request.params.id_ticket)
                                    .then(([rowsTickets,fielData])=>{
                                        response.render('tickets/ticket_f',{
                                            tickets:rowsTickets,
                                            prioridades:rowsPrioridades,
                                            labels:rowsLabels,
                                            estado:rowsEstado,
                                            estados:rowsEstados,
                                            preguntas:rowsPreguntas,
                                            incidencias:rowsIncidencias
                                        });
                                    })
                                    .catch(err =>{
                                        console.log(err);
                                    });
                            })
                            .catch(err=>{
                                console.log(err);
                            });
                            
                            }).catch(err=>{
                                console.log(err);
                            });      
                    })
                    .catch(err=>{
                        console.log(err);
                    });   
                    
                }) .catch(err=>{
                    console.log(err);
                })
            }).catch(err=>{
                console.log(err);
            })
        
        }).catch(err=>{
            console.log(err);
        })
            
                    
};

exports.ticket_post=(request,response,next)=>{
    Ticket.update(request.params.id_ticket,request.body.estado,request.body.prioridad,request.body.Estado_Actual)
        .then(()=>{
            for(let i = 0; i < request.body.numPreguntas; i++)
            {
                let actualP = 'pregunta' + i;
                let actualR = 'respuesta' + i;
                Ticket.assignPregunta(request.params.id_ticket, request.body[actualP], request.body[actualR]); //Esto funciona, no se si sea lo mejor
            }
            response.redirect('/tickets/'+request.params.id_ticket);
        }).catch(err=>{
            console.log(err);
        })
}