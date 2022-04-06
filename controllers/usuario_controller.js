const path = require("path");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");

exports.signup_get = (request, response, next) => {
  response.render("signup");
};

exports.lista = (request, response, next) => {
  Usuario.fetchEstado()
    .then(([rowsRols, fieldDataRows]) => {
      Usuario.fetchAll()
        .then(([rowsUsuarios, fieldData]) => {
          response.render("lista_usuarios", {
            usuarios: rowsUsuarios,
            rols: rowsRols,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.signup_post = (request, response, next) => {
  const usuario_nuevo = new Usuario(
    request.body.nombre,
    request.body.correo,
    request.body.contrasenia,
    "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
  );

  usuario_nuevo
    .usuario_save()
    .then(() => {
      response.redirect("/usuario/login");
    })
    .catch((err) => console.log(err));
};

exports.login_get = (request, response, next) => {
  response.render("login", {
    //login_usuario??
    correo: request.session.correo ? request.session.correo : "",
    info: "",
  });
};

exports.login_post = (request, response, next) => {
  Usuario.findOne(request.body.correo)
    .then(([rows, fielData]) => {
      if (rows.length < 1) 
      {
        return response.redirect("usuario/login");
      }
      const usuario = new Usuario(
        rows[0].Nombre_Usuario,
        rows[0].Login,
        rows[0]["Contraseña"],
        ""
      );
      bcrypt.compare(request.body.contrasenia, usuario.contrasenia_usuario)
        .then((doMatch) => {
          if (doMatch) {
            request.session.isLoggedIn = true;
            request.session.usuario = usuario;
            request.session.correo = usuario.login_usuario;
            return request.session.save((err) => {
              response.redirect("/tickets/lista");
            });
          }
          response.redirect("/usuarios/login");
        })
        .catch((err) => {
          console.log(err);
          response.redirect("/usuarios/login");
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/usuarios/login");
  });
};

// MODIFICAR USUARIO CU - EN PROCESO

// //Esto ya creo que no se usa hay que checarlo
// exports.usuario_get=(request,response,next) => {
//     Tipo_incidencia.fetchAll()
//         .then(([rowsIncidencias,fielDataIncidencias])=>{
//             Ticket.fetchPregunta_Ticket(request.params.id_ticket)
//             .then(([rowsPreguntas,fielDataPregunta])=>{
//                 Ticket.fetchPrioridades()
//                 .then(([rowsPrioridades,fieldDataPrioridades])=>{
//                     Ticket.fetchEstado()
//                     .then(([rowsEstados,fielDataEstados])=>{
//                         Ticket.fetchEstado_Ticket(request.params.id_ticket)
//                             .then(([rowsEstado,fielDataEstado])=>{
//                                 Ticket.fetchLabel_Ticket(request.params.id_ticket)
//                                 .then(([rowsLabels,fielDataLabels])=>{
//                                     Ticket.fetchOne(request.params.id_ticket)
//                                     .then(([rowsTickets,fielData])=>{
//                                         response.render('panel_principal',{
//                                             tickets:rowsTickets,
//                                             prioridades:rowsPrioridades,
//                                             labels:rowsLabels,
//                                             estado:rowsEstado,
//                                             estados:rowsEstados,
//                                             preguntas:rowsPreguntas,
//                                             incidencias:rowsIncidencias
//                                         });
//                                     })
//                                     .catch(err =>{
//                                         console.log(err);
//                                     });
//                             })
//                             .catch(err=>{
//                                 console.log(err);
//                             });

//                             }).catch(err=>{
//                                 console.log(err);
//                             });
//                     })
//                     .catch(err=>{
//                         console.log(err);
//                     });

//                 }) .catch(err=>{
//                     console.log(err);
//                 })
//             }).catch(err=>{
//                 console.log(err);
//             })

//         }).catch(err=>{
//             console.log(err);
//         });

// };

// exports.usuario_post=(request,response,next)=>{
//     Ticket.update(request.params.id_ticket,request.body.estado,request.body.prioridad,request.body.Estado_Actual,request.body.tipo_incidencia)
//         .then(()=>{
//             for(let i = 0; i < request.body.numPreguntas; i++)
//             {
//                 Ticket.assignPregunta(request.params.id_ticket, request.body.preguntas[i].pregunta, request.body.preguntas[i].respuesta); //Esto funciona, no se si sea lo mejor
//             }
//             response.status(200).json({});
//         }).catch(err=>{
//             console.log(err);
//         })
// }

exports.getDatosUsuario = (request, response, next) => {
  const id = request.params.id_usuario;

  Usuario.fetchOne(request.params.id_usuario)
    .then(([rowsTicket, fielData]) => {
        console.log(rowsTicket);
      response.status(200).json({
        datosGenerales: rowsTicket,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
