const path = require('path');
const Estado = require('../models/estado');

exports.lista = (request, response, next) => {
   Estado.fetchAll()
        .then(([rowsEstados, fieldDataEstados]) => {
            response.render('nuevo_tipo_incidencia', {
                estados: rowsEstados,
            });
        })
        .catch(err => console.log(err));
};

