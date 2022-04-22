const path = require('path');
const Estado = require('../models/estado');

exports.getAllEstados = (request, response, next) => {
   Estado.fetchAll()
        .then(([rowsEstados, fieldDataEstados]) => {
            response.status(200).json({estados: rowsEstados});
        })
        .catch(err => console.log(err));
};

exports.nuevoEstado = (request, response, next) => {
    let estado_nuevo = new Estado(request.body.Nombre_Estado, 1);

    estado_nuevo.save()
    .then((result) => {
        response.status(200).json({ idNuevo: result[0].insertId});
    })
  };

  exports.actualizaEstado = (request, response, next) => {
  
    Estado.updateVisibilidad(request.body.Id_Estado, request.body.nuevaVisibilidad)
    .then(() => {
      response.status(200).json({});
    })
    .catch(err => console.log(err));
  };
  
  exports.getLike = (request, response, next) => {
    Estado.fetchLike(request.body.buscaEstado)
    .then(([rows, fieldData]) => {
        response.status(200).json({
            estados:rows
        });
    })
    .catch(err => console.log(err));
  };

