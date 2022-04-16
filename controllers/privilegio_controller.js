const path = require('path');
const Privilegio = require('../models/privilegio');

exports.getAll = (request, response, next) => {
    Privilegio.fetchAll()
        .then(([rows, fieldData]) => {
            response.render("privilegios_f", {
                privilegios: rows
            })
        })
        .catch(err => console.log(err));
};

exports.post_privilegios=(request,response,next)=>{
    const new_privilegio= new Privilegio(request.body.Nuevo_Nombre);
    new_privilegio.save()
        .then(()=>{
            response.redirect('listaPrivilegios')
        })
        .catch((err)=>{
            console.log(err);
        })
}