const path = require("path");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const { getUnpackedSettings } = require("http2");
const { response } = require("express");
const { Usuario_Verificar } = require("../models/usuario");
const { redirect } = require("express/lib/response");


exports.signup_get = (request, response, next) => {
  response.render("signup");
};

exports.datos = (request, response, next) => {
  console.log(request.session.usuario)
  Usuario.findProfile(request.session.usuario.login_usuario)
    .then(([rowsUsuarios, fieldData]) => {
      Usuario.countActiveTickets(request.session.id_usuario)
        .then(([rowsTickets, fieldData]) => {
          Usuario.countAllTickets(request.session.id_usuario)
            .then(([rowsTotal, fieldData]) => {
              response.status(200).json({
                datos: rowsUsuarios,
                privilegios: request.session.privilegios,
                total: rowsTickets,
                historicos: rowsTotal
              });
            }).catch((err) => console.log(err));
        })
    })
    .catch((err) => console.log(err));
};

exports.filtros = (request, response, next) => {
  execute = 'SELECT u.Nombre_Usuario, u.Id_Usuario, u.URL_Foto, u.Login, u.Contraseña, u.Id_Rol, r.Nombre_Rol, CASE WHEN (u.Id_Usuario IN (SELECT ut.Id_Usuario FROM usuario_ticket ut, ticket t WHERE ut.Id_Ticket = t.Id_Ticket AND ut.Cargo = "Encargado" AND t.Id_Estado != 4 AND t.Id_Estado != 6) = FALSE) THEN 0 WHEN (u.Id_Usuario IN (SELECT ut.Id_Usuario FROM usuario_ticket ut, ticket t WHERE ut.Id_Ticket = t.Id_Ticket AND ut.Cargo = "Encargado" AND t.Id_Estado != 4 AND t.Id_Estado != 6) = TRUE) THEN 1 END AS "Tickets" FROM usuario u , rol r WHERE u.Id_Rol = r.Id_Rol AND u.Login = u.Login AND r.Id_Rol =' + request.body.rol + ' GROUP BY u.Id_Usuario'
  Usuario.fetchByRol(execute)
    .then(([rowsUsuario, fieldData]) => {
      Usuario.countAllActiveTickets()
        .then(([rowsTickets, fieldData]) => {
          if(rowsTickets.length === 0){
            response.status(200).json({
              usuarios: rowsUsuario,
              totales : 0
          });
          } else {
            response.status(200).json({
              usuarios: rowsUsuario,
              totales : rowsTickets
          });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
};

exports.getLike = (request, response, next) => {
  Usuario.fetchLike(request.body.buscaUsuario)
    .then(([rows, fieldData]) => {
      response.status(200).json({
        usuarios: rows
      });
    })
    .catch(err => console.log(err));
};

exports.lista = (request, response, next) => {
  if (request.session.privilegios.includes(16)) {
    Usuario.fetchEstado()
      .then(([rowsRols, fieldDataRows]) => {
        Usuario.fetchAll()
          .then(([rowsUsuarios, fieldData]) => {
            Usuario.countAllActiveTickets()
              .then(([rowsTickets, fieldData]) => {
                console.log(rowsTickets);
                console.log(rowsUsuarios);
                if (rowsTickets.length === 0) {
                  response.render("lista_usuarios", {
                    usuarios: rowsUsuarios,
                    rols: rowsRols,
                    totales: 0
                  });
                } else {
                  response.render("lista_usuarios", {
                    usuarios: rowsUsuarios,
                    rols: rowsRols,
                    totales: rowsTickets
                  });
                }

              })
              .catch((err) => console.log(err));

          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  } else {
    response.redirect("/");
  }
};


exports.signup_post = (request, response, next) => {
  const usuario_nuevo = new Usuario(
    request.body.nombre,
    request.body.correo,
    request.body.contrasenia,
    "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
  );

  Usuario.findOne(request.body.correo)
    .then(([rows, fieldData]) => {
      if (rows.length == 0) {
        usuario_nuevo

          .usuario_save()
          .then(() => {
            response.redirect("/usuario/login");

          })
          .catch((err) => console.log(err));
      }
      else {
        response.redirect("/usuario/signup");
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
      if (rows.length < 1) {
        return response.redirect("/login");
      }
      const usuario = new Usuario(
        rows[0].Nombre_Usuario,
        rows[0].Login,
        rows[0]["Contraseña"],
        rows[0].URL_Foto
      );
      bcrypt.compare(request.body.contrasenia, usuario.contrasenia_usuario)
        .then((doMatch) => {
          let error = 1;
          if (doMatch) {
            Usuario.getOneActive(usuario.login_usuario)
              .then(([rowsActive, fielData]) => {
                error= 2;
                if (rowsActive[0].Activo == 1) {
                  error = 0;
                  request.session.isLoggedIn = true;
                  request.session.usuario = usuario;
                  request.session.correo = usuario.login_usuario;
                  //console.log(request.session.usuario);
                  Usuario.getId(request.session.correo)
                    .then(([rowsid, fieldData]) => {
                      request.session.id_usuario = rowsid[0].Id_Usuario;
                      Usuario.fetchRolUsuario(request.session.id_usuario)
                        .then(([rowsprivilegios, fielData]) => {
                          let privilegios = [];
                          for (let privilegio in rowsprivilegios) {
                            privilegios.push(rowsprivilegios[privilegio].Id_Privilegio);
                          }
                          request.session.privilegios = privilegios;
                          return request.session.save((err) => {
                            response.status(200).json({ errores: error });
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                        })
                    })
                    .catch((err) => {
                      console.log(err);
                    })
                }
                else {
                  response.status(200).json({errores: error});
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            response.status(200).json({ errores: error });
          }

        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.logout = (request, response, next) => {

  if (request.session.privilegios.includes(1)) {
    request.session.destroy(() => {
      response.redirect("/usuario/login");
    });
  } else {
    response.redirect("/");
  }
};

// MODIFICAR USUARIO CU - EN PROCESO



exports.getDatosUsuario = (request, response, next) => {
  const id = request.params.id_usuario;

  Usuario.fetchOne(request.params.id_usuario)
    .then(([rowsUsuario, fielData]) => {
      Usuario.countActiveTickets(request.params.id_usuario)
        .then(([rowsTickets, fielData]) => {
          Usuario.fetchRolUsuario(request.params.id_usuario)
            .then(([rowsRol, fielData]) => {
              Usuario.countAllTickets(request.params.id_usuario)
                .then(([rowsTotal, fielData]) => {

                  response.status(200).json({
                    datosGenerales: rowsUsuario,
                    rol: rowsRol,
                    total: rowsTickets,
                    privilegios: request.session.privilegios,
                    historicos: rowsTotal
                  });
                }).catch((err) => {
                  console.log(err);
                })

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

exports.usuario_post = (request, response, next) => {
  console.log(request.body.contrasenia);
  if (request.body.contrasenia === "") {
    Usuario.update(
      request.params.id_usuario,
      request.body.rol
    )
      .then(() => {
        response.status(200).json({});
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    bcrypt.hash(request.body.contrasenia, 12)
      .then((contrasenia_cifrada) => {
        Usuario.updatepassword(
          request.params.id_usuario,
          request.body.rol,
          contrasenia_cifrada
        )
          .then(() => {
            response.status(200).json({});
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
  }

};


exports.profile_update = (request, response, next) => {
  Usuario.profile_update(
    request.body.name,
    request.body.id_usuario
  )
    .then(() => {
      response.status(200).json({});
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.profile_image = (request, response, next) => {
  image = request.file.filename;
  //   Usuario.profile_update(
  //      request.body.image_url,
  //      request.body.id_usuario
  //   )
  //     .then(() => {
  //       response.status(200).json({hola:"jaks"});
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

exports.panel_admin = (request, response, next) => {
  if (request.session.privilegios.includes(4)) {
    response.render('panel_administrativo');
  } else {
    response.redirect("/");
  }
};


exports.verificar_get = (request, response, next) => {
  response.render("verificar");
}
exports.verificar = (request, response, next) => {
  Usuario.Usuario_Verificar(request.params.cript)
    .then(([rowsUsuario, fielData]) => {
      if (rowsUsuario.length < 1) {
        return response.redirect("/login");
      }
      bcrypt.compare(request.body.password, rowsUsuario[0].Contraseña)
        .then((doMatch) => {
          if (doMatch) {
            Usuario.Activo(rowsUsuario[0].Id_Usuario)
              .then(() => {
                response.redirect("/login");
              })
              .catch((err) => {
                console.log(err);
              })
          }
          else {
            response.redirect("/signup")
          }
        }).catch((err) => {
          console.log(err);
        })
    }).catch((err) => {
      console.log(err);
    })
}