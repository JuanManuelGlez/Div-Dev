const path = require("path");
const Privilegio = require("../models/privilegio");
const Rol = require("../models/rol");

exports.getRoles = (request, response, next) => {
    Rol.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('administrar_privilegios', {
            roles: rows
        });
    })
    .catch(err => console.log(err));
}

exports.getprivs = (request, response, next) => {
    const rol = request.params.rol;
    Rol.getId(rol)
        .then(([rowsIdRol, fieldDataIdRol]) => {
            Privilegio.fetchPrivilegios(rowsIdRol[0].Id_Rol)
                .then(([rowsPrivs, fieldDataPrivs]) => {
                    Privilegio.fetchAll()
                        .then(([rows, fieldData]) => {
                            response.status(200).json({allprivilegios: rows, privilegiosact: rowsPrivs});
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}

exports.EliminaPrivilegio = (request, response, next) => {
    const rol = request.body.Rol;
    const id_priv = request.body.Id_Privilegio;
    Rol.getId(rol)
        .then(([rowsIdRol, fieldDataIdRol]) => {
            Privilegio.EliminaPrivilegio(rowsIdRol[0].Id_Rol, id_priv)
            .then(response.status(200).json({}))
            .catch(err => console.log(err));
        })
}

exports.AgregaPrivilegio = (request, response, next) => {
    const rol = request.body.Rol;
    const id_priv = request.body.Id_Privilegio;
    Rol.getId(rol)
        .then(([rowsIdRol, fieldDataIdRol]) => {
            Privilegio.AgregaPrivilegio(rowsIdRol[0].Id_Rol, id_priv)
            .then(response.status(200).json({}))
            .catch(err => console.log(err));
        })
}