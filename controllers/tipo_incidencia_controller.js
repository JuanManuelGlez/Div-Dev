const path = require('path');
const Tipo_incidencia = require('../models/tipo_incidencia');
const Pregunta = require('../models/pregunta');

exports.getTipo_Incidencia = (request, response, next) => {
    if(request.session.privilegios.includes(4)){   
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
    }else{
        response.redirect("/")
    }
}

exports.postEliminar_tp = (request, response, next) => {
    id_tp = request.params.id_tipo_incidencia;
    Tipo_incidencia.cambiar_visibilidad(id_tp)
    .then(response.status(200).json({}))
    .catch(err => console.log(err));

}

exports.postTipo_Incidencia =  async (request, response, next) => {

    if (!Array.isArray(request.body.preguntas))
    request.body.preguntas = [request.body.preguntas];

    const tipo_incidencia_nuevo = new Tipo_incidencia(request.body.nombre_tipo_incidencia, request.body.sla_tipo_incidencia);
    tipo_incidencia_nuevo.tipo_incidencia_save()
        .then( () => {
            Tipo_incidencia.tipo_incidencia_fetch_lastinsertion()
            .then(([rowLastTipoIncidencia, fieldDatalasttipoincidencia]) => {
                if((typeof(request.body.preguntas) != "undefined")){
                    for(let pregunta of request.body.preguntas){
                        Pregunta.pregunta_check(pregunta.replace(/_/g, ' '))
                            .then(([rowcheck, fieldDatacheck]) => {
                                if(rowcheck[0].E == 0){
                                    Pregunta.pregunta_save(pregunta.replace(/_/g, ' '))
                                    .then(() => {
                                        Pregunta.pregunta_getId(pregunta.replace(/_/g, ' '))
                                            .then(([rowidPregunta, fieldDataidPregunta]) => {
                                                Pregunta.agregaPregunta(rowidPregunta[0].Id_Pregunta, rowLastTipoIncidencia[0].L)
                                                .then()
                                                .catch(err => console.log(err));
                                            }).catch(err => console.log(err));
                                    })
                                    .catch(err => console.log(err));
                                }
                                if(rowcheck[0].E == 1){
                                    Pregunta.pregunta_getId(pregunta.replace(/_/g, ' '))
                                        .then(([rowidPregunta, fieldDataidPregunta]) => {
                                            Pregunta.agregaPregunta(rowidPregunta[0].Id_Pregunta, rowLastTipoIncidencia[0].L)
                                                .then()
                                                .catch(err => console.log(err));
                                        }).catch(err => console.log(err));
                                }   
                            }).catch(err => console.log(err));
                    }
                }
            }).catch(err => console.log(err))
        })
        .catch(err => console.log(err)); 
    }

exports.getModficarTipo_Incidencia = (request,response,next) => {
    if(request.session.privilegios.includes(4)){
        const id =request.params.id_tipo_incidencia;
        Tipo_incidencia.fetchtipo_incidencia(id)
            .then(([rowsTipo_Incidencia,fieldDataTipo_Incidencia]) => {
                Tipo_incidencia.fetchPreguntas(id)
                    .then(([rowsPreguntasAct, fieldDataPreguntas]) => {
                        Tipo_incidencia.fetchAllPreguntas()
                            .then(([rowsPreguntasAll, fieldDataPreguntasAll]) =>{
                                response.render('tipo_incidencia/modificar_tipo_incidencia', {
                                    Id_Tipo_Incidencia: id,
                                    Tipo_Incidencia: rowsTipo_Incidencia,
                                    Preguntas_act: rowsPreguntasAct,
                                    Preguntas_all: rowsPreguntasAll
                                });
                            })
                    })
            })
    }else{
        response.redirect('/')
    }
    
}

exports.postModficarTipo_Incidencia = async (request,response,next) => {
    const id = request.params.id_tipo_incidencia;
    nuevo_tp = request.body.Nombre_Tipo_Incidencia;
    nuevo_SLA = parseInt(request.body.SLA);
    await Tipo_incidencia.modificar_tipo_incidencia(id, nuevo_tp, nuevo_SLA);
        
    if((typeof(request.body.Preguntas) != "undefined")){

        for(let pregunta_act of request.body.Actuales){
            let cont = 0;

            for(let pregunta of request.body.Preguntas){
                if(pregunta.replace(/_/g, ' ') == pregunta_act.replace(/_/g, ' ')){
                    cont = 1;
                }
            }
            if(cont == 0){
                Pregunta.pregunta_getId(pregunta_act.replace(/_/g, ' '))
                    .then(([rowidPregunta, fieldDataidPregunta]) => {
                        Tipo_incidencia.eliminarPregunta(rowidPregunta[0].Id_Pregunta, id)
                            .then()
                            .catch(err => console.log(err));
                    }).catch(err => console.log(err));
            }
        }

        for(let pregunta of request.body.Preguntas){

            Pregunta.pregunta_check(pregunta.replace(/_/g, ' '))
                .then(([rowcheck, fieldDatacheck]) => {
                    if(rowcheck[0].E == 0 && pregunta.replace(/_/g, ' ') != "Preguntas:"){
                        Pregunta.pregunta_save(pregunta.replace(/_/g, ' '))
                        .then(() => {
                            Pregunta.pregunta_getId(pregunta.replace(/_/g, ' '))
                                .then(([rowidPregunta, fieldDataidPregunta]) => {
                                    Pregunta.agregaPregunta(rowidPregunta[0].Id_Pregunta, id)
                                    .then()
                                    .catch(err => console.log(err));
                                }).catch(err => console.log(err));
                        });
                    }else{
                        if(rowcheck[0].E == 1){
                            Pregunta.pregunta_getId(pregunta.replace(/_/g, ' '))
                                .then(([rowidPregunta, fieldDataidPregunta]) => {
                                    Tipo_incidencia.pregunta_check_tp(rowidPregunta[0].Id_Pregunta, id)
                                        .then(([rowcheck_tp, fieldData_rowcheck_tp]) => {
                                            if(rowcheck_tp[0].E == 0){
                                                Pregunta.agregaPregunta(rowidPregunta[0].Id_Pregunta, id)
                                                .then()
                                                .catch(err => console.log(err));
                                            }
                                        }).catch(err => console.log(err));
                                }).catch(err => console.log(err));
                        }
                    }
                }).catch(err => console.log(err));
        }
    }
    response.redirect('/tipo_incidencia/modificar'+id);
}

exports.eliminarPregunta = (request, response, next) => {
    id_p = request.params.id_pregunta;
    id_t = parseInt(request.body.id_tipo_incidencia);
    Tipo_incidencia.eliminarPregunta(id_p,id_t);
    response.status(200).json();
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