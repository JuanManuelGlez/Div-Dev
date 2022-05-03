const path = require("path");
const Privilegio = require("../models/privilegio");
const Rol = require("../models/rol");

exports.getRoles = (request, response, next) => {

    Privilegio.fetchPrivilegios()
                .then(([rowsPrivs, fieldDataPrivs]) => {
                    Privilegio.fetchAll()
                        .then(([rowsall, fieldData]) => {
                            Rol.fetchAll()
                                .then(([rows, fieldData]) => {
                                    response.render('administrar_privilegios',{allprivilegios: rowsall, privilegiosact: rowsPrivs, roles: rows});
                                })
                                .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
}

exports.EliminaPrivilegio = (request, response, next) => {
    const id_rol = request.body.Rol;
    const id_priv = request.body.Id_Privilegio;
        Privilegio.EliminaPrivilegio(id_rol, id_priv)
            .then(response.status(200).json({}))
            .catch(err => console.log(err));
}

exports.AgregaPrivilegio = (request, response, next) => {
    const id_rol = request.body.Rol;
    const id_priv = request.body.Id_Privilegio;
            Privilegio.AgregaPrivilegio(id_rol, id_priv)
            .then(response.status(200).json({}))
            .catch(err => console.log(err));
}