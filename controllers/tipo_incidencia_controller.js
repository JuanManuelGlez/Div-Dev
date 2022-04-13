const path = require('path');
const Tipo_incidencia = require('../models/tipo_incidencia');
const Pregunta = require('../models/pregunta');

exports.getTipo_Incidencia = (request, response, next) => {
    Tipo_incidencia.fetchAll()
        .then(([rowsTipo_Incidencia, fieldDataTipo_Incidencia]) => {
            Tipo_incidencia.fetchAllPreguntas()
                .then(([rowsPreguntas, fieldDataPreguntas]) => {
                    response.render('tipo_incidencia/lista_tipo_incidencia', {
                        Tipo_Incidencias: rowsTipo_Incidencia,
                        Preguntas: rowsPreguntas
                    });
                })
                .catch(err => console.log(err));
            })
        .catch(err => console.log(err));
}

exports.postTipo_Incidencia = (request, response, next) => {

    const tipo_incidencia_nuevo = new Tipo_incidencia(request.body.nombre_tipo_incidencia, request.body.sla_tipo_incidencia);
    tipo_incidencia_nuevo.tipo_incidencia_save();
    Tipo_incidencia.tipo_incidencia_fetch_lastinsertion().then(([rowLastTipoIncidencia, fieldDatalasttipoincidencia]) => {
        if((typeof(request.body.preguntas) != "undefined")){
            for(let pregunta of request.body.preguntas){
                Pregunta.pregunta_check(pregunta.replace(/_/g, ' ')).then(([rowcheck, fieldDatacheck]) => {
                    if(rowcheck[0].E == 0){
                        const pregunta_nuevo = new Pregunta(pregunta.replace(/_/g, ' '));
                        pregunta_nuevo.pregunta_save();
                        Pregunta.pregunta_getId(pregunta.replace(/_/g, ' ')).then(([rowidPregunta, fieldDataidPregunta]) => {
                            Pregunta.agregaPregunta(rowidPregunta[0].Id_Pregunta, rowLastTipoIncidencia[0].L);
                        })
                    }else{
                        if(rowcheck[0].E == 1){
                            Pregunta.pregunta_getId(pregunta.replace(/_/g, ' ')).then(([rowidPregunta, fieldDataidPregunta]) => {
                                Pregunta.agregaPregunta(rowidPregunta[0].Id_Pregunta, rowLastTipoIncidencia[0].L);
                            })
                        }
                    }
                })
            }
        }
    })
    response.redirect('/tipo_incidencia');
}

exports.getModficarTipo_Incidencia = (request,response,next) => {
    const id =request.params.id_tipo_incidencia;
    Tipo_incidencia.fetchtipo_incidencia(id)
        .then(([rowsTipo_Incidencia,fieldDataTipo_Incidencia]) => {
            Tipo_incidencia.fetchPreguntas(id)
                .then(([rowsPreguntas, fieldDataPreguntas]) => {
                    response.render('tipo_incidencia/modificar_tipo_incidencia', {
                        Id_Tipo_Incidencia: id,
                        Tipo_Incidencia: rowsTipo_Incidencia,
                        Preguntas: rowsPreguntas
                    });
                })
        })
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