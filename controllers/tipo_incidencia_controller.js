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

exports.assignar_pregunta_get = (request, response, next) => {
    const id_pregunta_ = request.body.id_pregunta;
    const id_tipo_incidencia_ = request.params.id_tipo_incidencia;
    Tipo_incidencia.assign_pregunta(id_pregunta_, id_tipo_incidencia_)
        .then(([rows, fieldData]) => {
            response.redirect('/nuevo_tipo_incidencia');
        })
        .catch(err=> console.log(err));
};

exports.assignar_pregunta_post = (request, response, next) => {

};

exports.assign_pregunta = (request, response, next) => {
    Tipo_incidencia.fetchAll
        .then(([rowsTipoIncidencia, fieldDataTipoIncidencia]) => {
            response.render('/preguntas/:id_tipo_incidencia', {
                tipos_incidencia: rowsTipoIncidencia
            });
        })
        .catch(err => console.log(err));
    };