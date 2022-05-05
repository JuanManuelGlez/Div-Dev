const path = require("path");
const Metricas = require("../models/metrica");

exports.getByStatusAll = (request, response, next) => {
    Metricas.getByStatusAll(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
        .then(([rowsEstados, fieldDataEstados]) => {
            response.status(200).json({datos: rowsEstados});
        })
        .catch(err => console.log(err));
}

exports.getByProcedenciaAll = (request, response, next) => {
    Metricas.getByProcedenciaAll(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
        .then(([rows, fieldData]) => {
            response.status(200).json({datos: rows});
        })
        .catch(err => console.log(err));
}

exports.getByTipoIncidenciaAll = (request, response, next) => {
    Metricas.getByTipoIncidenciaAll(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
        .then(([rows, fieldData]) => {
            response.status(200).json({datos: rows});
        })
        .catch(err => console.log(err));
}

exports.getByResolucion = async (request, response, next) => {
    Metricas.getATiempo(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
        .then(([rowsATiempo, fieldData1]) => {
            Metricas.getADestiempo(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
            .then(([rowsDestiempo, fieldData2]) => {
                Metricas.getSinResolver(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
                .then(([rowsSin, fieldData3]) => {
                    let datosTickets = [
                        {estado: 'Resueltos a Tiempo', Tickets: rowsATiempo[0].A_Tiempo},
                        {estado: 'Resueltos a Destiempo', Tickets: rowsDestiempo[0].A_Destiempo},
                        {estado: 'Sin resolver', Tickets: rowsSin[0].SinResolver},
                    ];
                    response.status(200).json({datos: datosTickets});
                })
                .catch((err) => {console.log(err)});
            })
            .catch((err) => {console.log(err)});
        })
        .catch((err) => {console.log(err)});
}

exports.getPromedios = (request, response, next) => {
    Metricas.getPromedios()
        .then(([rows, fieldData]) => {
            response.status(200).json({datos: rows});
        })
        .catch(err => console.log(err));
}

exports.getTiempoYDestiempo = (request, response, next) => {
    Metricas.getATiempoRango(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
        .then(([rowsATiempo, fieldData1]) => {
            Metricas.getADestiempoRango(request.body.usuario, request.body.tipo_incidencia, request.body.fecha_inicio, request.body.fecha_fin, request.body.archivado)
            .then(([rowsDestiempo, fieldData2]) => {
                    response.status(200).json({datosATiempo: rowsATiempo, datosADestiempo: rowsDestiempo});
            })
            .catch((err) => {console.log(err)});
        })
        .catch((err) => {console.log(err)});
}