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
              Ticket.fetchProcedencias()
            .then(([rowsProcedencias, fieldDataPrioridades]) => {
              Usuario.fetchAll()
            .then(([rowsUsuarios, fieldDataPrioridades]) => {
              Ticket.fetchEstado()
                .then(([rowsEstados, fielDataEstados]) => {
                  response.render("panel_principal", {
                    usuarios: rowsUsuarios,
                    procedencias: rowsProcedencias,
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
              Ticket.fetchProcedencias()
            .then(([rowsProcedencias, fieldDataPrioridades]) => {
              Usuario.fetchAll()
            .then(([rowsUsuarios, fieldDataPrioridades]) => {
              Ticket.fetchEstado()
                .then(([rowsEstados, fielDataEstados]) => {
                  response.render("archivo", {
                    tickets: rowsTickets,
                    prioridades: rowsPrioridades,
                    estados: rowsEstados,
                    incidencias: rowsIncidencias,
                    usuarios: rowsUsuarios,
                    procedencias: rowsProcedencias
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
    .catch((err) => console.log(err));
  }else{
    response.redirect("/");
  }
};



exports.nuevo_get = (request, response, next) => {
  //debe de haber una manera mejor de hacer esto pero aja creo que sirve por ahora
  console.log(request.session);
  if (2 in request.session.privilegios){
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
                  Ticket.fetchProcedencias()
                .then(([rowsProcedencias, fielDataEstados]) => {
                  Usuario.fetchAll()
                .then(([rowsUsuarios, fielDataEstados]) => {
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
                                procedencias: rowsProcedencia,
                                usuarios: rowsUsuarios,
                                estados: rowsEstados,
                                preguntas: rowsPreguntas,
                                incidencias: rowsIncidencias
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
    request.body.tipo_incidencia,
    request.session.id_usuario
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

exports.filtros_panel = (request, response, next) => {
  
  var execute = 'SELECT t.Id_Ticket,t.Asunto,t.Descripcion,t.Fecha_Inicio,t.Id_Prioridad,t.Id_Estado FROM ticket t, usuario_ticket u WHERE t.Id_Ticket = u.Id_Ticket AND t.Archivado = 0 AND t.Id_Prioridad =' + request.body.prioridad + ' AND t.Id_Tipo_Incidencia = ' + request.body.tipo_incidencia +' AND u.Id_Usuario = ' + request.body.usuario + ' AND t.Id_Procedencia = ' + request.body.procedencia + ' AND t.Id_Estado = ' + request.body.estado + ' '
  Ticket.fetchListFiltrarPanel(execute)
    .then(([rowsTickets, fielDataLabels]) => {
      response.status(200).json({
        tickets: rowsTickets,
      });
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


exports.getLike = (request, response, next) => {
  Ticket.fetchLike(request.body.buscaTicket)
  .then(([rows, fieldData]) => {
      response.status(200).json({
          tickets:rows
      });
  })
  .catch(err => console.log(err));
};

exports.filtros_archivo = (request, response, next) => {
  var execute = 'SELECT u.Id_Usuario,t.Id_Ticket,t.Asunto,t.Descripcion,t.Fecha_Inicio,t.Id_Prioridad,t.Id_Estado FROM ticket t, usuario_ticket u WHERE t.Id_Ticket = u.Id_Ticket AND t.Archivado = 1 AND t.Id_Prioridad =' + request.body.prioridad + ' AND t.Id_Tipo_Incidencia = ' + request.body.tipo_incidencia +' AND u.Id_Usuario = ' + request.body.usuario + ' AND t.Id_Procedencia = ' + request.body.procedencia + ' AND t.Id_Estado = ' + request.body.estado +' GROUP BY t.Id_Ticket '
  Ticket.fetchListFiltrarPanel(execute)
    .then(([rowsTickets, fielDataLabels]) => {
      response.status(200).json({
        tickets: rowsTickets,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.filtros_backlog = (request, response, next) => {
  var execute = 'SELECT t.Id_Ticket,u.Id_Usuario,t.Asunto,t.Descripcion,t.Fecha_Inicio,t.Id_Prioridad,t.Id_Estado FROM ticket t, usuario_ticket u WHERE t.Id_Ticket = u.Id_Ticket AND t.Archivado = 0 AND t.Id_Prioridad =' + request.body.prioridad + ' AND t.Id_Tipo_Incidencia = ' + request.body.tipo_incidencia +' AND u.Id_Usuario = ' + request.body.usuario + ' AND t.Id_Procedencia = ' + request.body.procedencia + ' GROUP BY t.Id_Ticket '
 
  Ticket.fetchListFiltrarPanel(execute)
    .then(([rowsTickets, fielDataLabels]) => {
      response.status(200).json({
        tickets: rowsTickets,
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
                  console.log(rowsTicket);
                  response.status(200).json({
                    datosGenerales: rowsTicket,
                    labels: rowsLabels,
                    estado: rowsEstado,
                    preguntas: rowsPreguntas,
                    privilegios:request.session.privilegios
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

exports.asignar_usuario= async (request,response,next)=>{
  
  await Ticket.assignUsuario(request.params.id_ticket, request.body.elegir_usuario, "Encargado");
  response.redirect("/tickets/lista")
  
}

exports.ticket_panel=(request,response,next)=>{
    Ticket.fetchAll_Progreso(request.session.id_usuario)
    .then(([rowsTickets, fielData]) => {
      Tipo_incidencia.fetchAll()
        .then(([rowsIncidencias, fielDataIncidencias]) => {
          Ticket.fetchPrioridades()
            .then(([rowsPrioridades, fieldDataPrioridades]) => {
              Ticket.fetchEstado()
                .then(([rowsEstados, fielDataEstados]) => {
                  Usuario.fetchAll()
                  .then(([rowsUsuarios,fieldData]) => {
                  Ticket.fetchAllSinAsignar()
                  .then(([rowsSinAsignar,fieldData])=>{
                    response.render("panel", {
                      usuarios: rowsUsuarios,
                      tickets: rowsTickets,
                      prioridades: rowsPrioridades,
                      estados: rowsEstados,
                      incidencias: rowsIncidencias,
                      sinasignar: rowsSinAsignar
                    });
                  })
                  .catch((err)=>{
                    console.log(err);
                  });
                })
                .catch((err)=>{
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
    .catch((err) => console.log(err));   
}

