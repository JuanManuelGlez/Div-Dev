const path = require("path");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const { getUnpackedSettings } = require("http2");

exports.signup_get = (request, response, next) => {
  response.render("signup");
};

exports.datos = (request, response, next) => {
  console.log(request.session.usuario)
  Usuario.findProfile(request.session.usuario.login_usuario)
  .then(([rowsUsuarios, fieldData]) => {
    Usuario.countActiveTickets(request.session.id_usuario)
    .then(([rowsTickets,fieldData])=>{
      Usuario.countAllTickets(request.session.id_usuario)
      .then(([rowsTotal,fieldData])=>{
        response.status(200).json({
          datos: rowsUsuarios,
          privilegios: request.session.privilegios,
          total:rowsTickets,
          historicos:rowsTotal
        });
      }).catch((err)=>console.log(err));
    })
  })
  .catch((err) => console.log(err));
};

exports.lista = (request, response, next) => {
  console.log(request.session.privilegios);
  if(request.session.privilegios.includes(16)){
  Usuario.fetchEstado()
    .then(([rowsRols, fieldDataRows]) => {
      Usuario.fetchAll()
        .then(([rowsUsuarios, fieldData]) => {
          Usuario.countAllActiveTickets()
          .then(([rowsTickets,fieldData])=> {
            if (rowsTickets.length===0){
              response.render("lista_usuarios", {
                usuarios: rowsUsuarios,
                rols: rowsRols,
                totales:0
              });
            }else{
              response.render("lista_usuarios", {
                usuarios: rowsUsuarios,
                rols: rowsRols,
                totales:rowsTickets
              });
            }
            
          })
          .catch((err)=> console.log(err));
          
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  }else{
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
            if(rows.length == 0)
            {
              usuario_nuevo
              .usuario_save()
              .then(() => {
                response.redirect("/usuario/login");
              })
              .catch((err) => console.log(err));
            }
            else
            {
              response.redirect("/usuario/signup");
            }
        })
        .catch((err) =>{    
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
      if (rows.length < 1) 
      {
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
          let error=true;
          if (doMatch) {
            error=false;
            request.session.isLoggedIn = true;
            request.session.usuario = usuario;
            request.session.correo = usuario.login_usuario;
            //console.log(request.session.usuario);
            Usuario.getId(request.session.correo)
            .then(([rowsid, fieldData])=>{
              request.session.id_usuario=rowsid[0].Id_Usuario;
              Usuario.fetchRolUsuario(request.session.id_usuario)
              .then(([rowsprivilegios, fielData])=>{
                let privilegios=[];
                for (let privilegio in rowsprivilegios){
                  privilegios.push(rowsprivilegios[privilegio].Id_Privilegio);
                }
                request.session.privilegios=privilegios;
              return request.session.save((err) => {
                response.status(200).json({errores:error});
              });
              })
              .catch((err)=>{
                console.log(err);
              })
            })
            .catch((err)=>{
              console.log(err);
            })
           
          }else{
            response.status(200).json({errores:error});
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

  if (request.session.privilegios.includes(1)){
  request.session.destroy(() => {
    response.redirect("/usuario/login");
  });
  }else{
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
          .then(([rowsTotal,fielData])=>{
            
            response.status(200).json({
              datosGenerales: rowsUsuario,
              rol : rowsRol,
              total : rowsTickets,
              privilegios:request.session.privilegios,
              historicos:rowsTotal
            });
          }).catch((err)=>{
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
  Usuario.update(
    request.params.id_usuario,
    request.body.rol,
  )
    .then(() => {
      response.status(200).json({});
    })
    .catch((err) => {
      console.log(err);
    });
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
  if (request.session.privilegios.includes(4)){
  response.render('panel_administrativo');
  }else{
    response.redirect("/");
  }
};

