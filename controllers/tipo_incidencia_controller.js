const path = require('path');
const Tipo_incidencia = require('../models/tipo_incidencia');

exports.getTipo_Incidencia = (request, response, next) => {
    Tipo_incidencia.fetchAll()
        .then(([rowsTipo_Incidencia, fieldDataTipo_Incidencia]) => {
            response.render('tipo_incidencia/lista_tipo_incidencia', {
                Tipo_Incidencias: rowsTipo_Incidencia
            });
        })
        .catch(err => console.log(err));
}

exports.postTipo_Incidencia = (request, response, next) => {
    const tipo_incidencia_nuevo = new Tipo_incidencia(request.body.nombre_tipo_incidencia, request.body.sla_tipo_incidencia);
    tipo_incidencia_nuevo.tipo_incidencia_save();
    response.redirect('/tipo_incidencia');
}

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