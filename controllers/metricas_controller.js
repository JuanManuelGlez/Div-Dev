const path = require("path");
const Metricas = require("../models/metrica");

exports.getByStatusAll = (request, response, next) => {
    Metricas.getByStatusAll()
        .then(([rowsEstados, fieldDataEstados]) => {
            response.status(200).json({datos: rowsEstados});
        })
        .catch(err => console.log(err));
}

exports.getByProcedenciaAll = (request, response, next) => {
    Metricas.getByProcedenciaAll()
        .then(([rows, fieldData]) => {
            response.status(200).json({datos: rows});
        })
        .catch(err => console.log(err));
}

exports.getByTipoIncidenciaAll = (request, response, next) => {
    Metricas.getByTipoIncidenciaAll()
        .then(([rows, fieldData]) => {
            response.status(200).json({datos: rows});
        })
        .catch(err => console.log(err));
}

exports.getByResolucion = async (request, response, next) => {
    Metricas.getATiempo()
        .then(([rowsATiempo, fieldData1]) => {
            Metricas.getADestiempo()
            .then(([rowsDestiempo, fieldData2]) => {
                Metricas.getSinResolver()
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

