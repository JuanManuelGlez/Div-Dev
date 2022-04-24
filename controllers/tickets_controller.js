const path = require("path");
const Ticket = require("../models/ticket");
const Tipo_incidencia = require("../models/tipo_incidencia");
const Usuario = require("../models/usuario");
const Comentario = require("../models/comentario");

exports.lista = (request, response, next) => {
  if(14 in request.session.privilegios){
    Ticket.fetchList()
    .then(([rowsTickets, fielData]) => {
      Tipo_incidencia.fetchAll()
        .then(([rowsIncidencias, fielDataIncidencias]) => {
          Ticket.fetchPrioridades()
            .then(([rowsPrioridades, fieldDataPrioridades]) => {
              Ticket.fetchEstado()
                .then(([rowsEstados, fielDataEstados]) => {
                  response.render("panel_principal", {
                    tickets: rowsTickets,
                    prioridades: rowsPrioridades,
                    estados: rowsEstados,
                    incidencias: rowsIncidencias,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
  }else{
    response.redirect("/");
  }
  
};

exports.lista_archivo = (request, response, next) => {
  if( 8 in request.session.privilegios){
  Ticket.fetchListArchivo()
    .then(([rowsTickets, fielData]) => {
      Tipo_incidencia.fetchAll()
        .then(([rowsIncidencias, fielDataIncidencias]) => {
          Ticket.fetchPrioridades()
            .then(([rowsPrioridades, fieldDataPrioridades]) => {
              Ticket.fetchEstado()
                .then(([rowsEstados, fielDataEstados]) => {
                  response.render("archivo", {
                    tickets: rowsTickets,
                    prioridades: rowsPrioridades,
                    estados: rowsEstados,
                    incidencias: rowsIncidencias,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
  }else{
    response.redirect("/");
  }
};



exports.nuevo_get = (request, response, next) => {
  //debe de haber una manera mejor de hacer esto pero aja creo que sirve por ahora
  console.log(request.session);
  if (1 in request.session.privilegios){
  Tipo_incidencia.fetchAll()
    .then(([rowsTipoIncidencia, fieldDataTipoIncidencia]) => {
      Ticket.fetchPrioridades()
        .then(([rowsPrioridades, fieldDataPrioridades]) => {
          Ticket.fetchProcedencias()
            .then(([rowsProcedencias, fieldDataProsedencias]) => {
              Ticket.fetchLabels()
                .then(([rowsLabels, fieldDataLabels]) => {
                  response.render("nuevo_ticket", {
                    tipos_incidencia: rowsTipoIncidencia,
                    prioridades: rowsPrioridades,
                    procedencias: rowsProcedencias,
                    labels: rowsLabels,
                  });
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  }else{
    response.redirect("/");
  }
};

exports.nuevo_post = (request, response, next) => {
  if (!Array.isArray(request.body.labels))
    request.body.labels = [request.body.labels];

  const ticketNuevo = new Ticket(
    request.body.asunto,
    request.body.descripcion,
    request.body.prioridad,
    request.body.tipo_incidencia,
    request.body.procedencia
  );
  ticketNuevo.save()
    .then((result) => {
      let idNuevo = result[0].insertId; //probablemente una mejor manera de hacer esto
      Ticket.assignEstado(idNuevo, 1);

      if(typeof request.body.labels[0] !== 'undefined')
      {
        for (label of request.body.labels) 
        {
          Ticket.assignLabel(idNuevo, label);
        }
      }

      if(request.session.isLoggedIn)
      {
        let usuarioAct = request.session.usuario;
        Usuario.getId(usuarioAct.login_usuario)
        .then(([rows, fieldData]) => {
          Ticket.assignUsuario(idNuevo, rows[0].Id_Usuario, "Creador");
        })
        .catch((err) => {console.log(err)});
      }

      for (let i = 0; i < request.body.numPreguntas; i++) 
      {
        let actualP = "pregunta" + i;
        let actualR = "respuesta" + i;
        Ticket.assignPregunta(
          idNuevo,
          request.body[actualP],
          request.body[actualR]
        ); //Esto funciona, no se si sea lo mejor
      }

      response.redirect("/tickets/nuevo");
    })
    .catch((err) => console.log(err));
};

//Esto ya creo que no se usa hay que checarlo
exports.ticket_get = (request, response, next) => {
  Tipo_incidencia.fetchAll()
    .then(([rowsIncidencias, fielDataIncidencias]) => {
      Ticket.fetchPregunta_Ticket(request.params.id_ticket)
        .then(([rowsPreguntas, fielDataPregunta]) => {
          Ticket.fetchPrioridades()
            .then(([rowsPrioridades, fieldDataPrioridades]) => {
              Ticket.fetchEstado()
                .then(([rowsEstados, fielDataEstados]) => {
                  Ticket.fetchEstado_Ticket(request.params.id_ticket)
                    .then(([rowsEstado, fielDataEstado]) => {
                      Ticket.fetchLabel_Ticket(request.params.id_ticket)
                        .then(([rowsLabels, fielDataLabels]) => {
                          Ticket.fetchOne(request.params.id_ticket)
                            .then(([rowsTickets, fielData]) => {
                              response.render("panel_principal", {
                                tickets: rowsTickets,
                                prioridades: rowsPrioridades,
                                labels: rowsLabels,
                                estado: rowsEstado,
                                estados: rowsEstados,
                                preguntas: rowsPreguntas,
                                incidencias: rowsIncidencias,
                              });
                            })
                            .catch((err) => {
                              console.log(err);
                            });
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.ticket_post = (request, response, next) => {
  Ticket.update(
    request.params.id_ticket,
    request.body.estado,
    request.body.prioridad,
    request.body.Estado_Actual,
    request.body.tipo_incidencia
  )
    .then(() => {
      for (let i = 0; i < request.body.numPreguntas; i++) {
        Ticket.assignPregunta(
          request.params.id_ticket,
          request.body.preguntas[i].pregunta,
          request.body.preguntas[i].respuesta
        ); //Esto funciona, no se si sea lo mejor
      }
      response.status(200).json({});
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.filtros = (request, response, next) => {

  Ticket.fetchListFiltrarEstado(
    request.body.estado
  )
  .then(([rowsTickets, fielDataLabels])=>{
    
    response.status(200).json({
      tickets: rowsTickets
    } 
    )
  })
  .catch((err)=>{
      console.log(err);
  })
};

exports.ticket_archivar = (request, response, next) => {

  Ticket.archivar(
    request.body.Archivado,
    request.params.id_ticket
  )
  .then(()=>{
    response.status(200).json()
  })
  .catch((err)=>{
      console.log(err);
  })
};



exports.getDatosTicket = (request, response, next) => {
  const id = request.params.id_ticket;

  Ticket.fetchPregunta_Ticket(request.params.id_ticket)
    .then(([rowsPreguntas, fielDataPregunta]) => {
      Ticket.fetchEstado_Ticket(request.params.id_ticket)
        .then(([rowsEstado, fielDataEstado]) => {
          Ticket.fetchLabel_Ticket(request.params.id_ticket)
            .then(([rowsLabels, fielDataLabels]) => {
              Ticket.fetchOne(request.params.id_ticket)
                .then(([rowsTicket, fielData]) => {
                  response.status(200).json({
                    datosGenerales: rowsTicket,
                    labels: rowsLabels,
                    estado: rowsEstado,
                    preguntas: rowsPreguntas,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.ticket_panel=(request,response,next)=>{
    Ticket.fetchAll_Progreso()
    .then(([rowsTickets, fielData]) => {
      Tipo_incidencia.fetchAll()
        .then(([rowsIncidencias, fielDataIncidencias]) => {
          Ticket.fetchPrioridades()
            .then(([rowsPrioridades, fieldDataPrioridades]) => {
              Ticket.fetchEstado()
                .then(([rowsEstados, fielDataEstados]) => {
                  response.render("panel", {
                    tickets: rowsTickets,
                    prioridades: rowsPrioridades,
                    estados: rowsEstados,
                    incidencias: rowsIncidencias,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));   
                           
             
}
