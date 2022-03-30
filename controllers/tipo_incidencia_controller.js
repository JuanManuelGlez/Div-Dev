const path = require('path');
const Tipo_incidencia = require('../models/tipo_incidencia');


exports.getPreguntas = (request, response, next) => {
    const id = request.params.id_tipo_incidencia;
    Tipo_incidencia.fetchPreguntas(id)
        .then(([rows, fieldData]) => {
            response.status(200).json({preguntas: rows});
        })
        .catch(err => console.log(err));
};

exports.getPreguntasNuevas = (request, response, next) => {
    const id = request.params.id_tipo_incidencia;
    id_Ticket=parseInt(request.body.id);
    Tipo_incidencia.fetchPreguntasNuevas(id, id_Ticket)
        .then(([rows, fieldData]) => {
            response.status(200).json({preguntas: rows});
        })
        .catch(err => console.log(err));
};