const path = require('path');
const Estado = require('../models/estado');

exports.getAllEstados = (request, response, next) => {
   Estado.fetchAll()
        .then(([rowsEstados, fieldDataEstados]) => {
            response.status(200).json({estados: rowsEstados});
        })
        .catch(err => console.log(err));
};

