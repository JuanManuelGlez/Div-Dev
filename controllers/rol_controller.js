const path = require('path');
const Rol = require('../models/rol');

exports.getAll = (request, response, next) => {
    Rol.fetchAll()
        .then(([rows, fieldData]) => {
            response.render("roles_f", {
                roles: rows
            })
        })
        .catch(err => console.log(err));
};

exports.post_roles=(request,response,next)=>{
    const new_role= new Rol(request.body.Nuevo_Nombre);
    new_role.save()
        .then(()=>{
            response.redirect('listaRoles')
        })
        .catch((err)=>{
            console.log(err);
        })
}