const path = require("path");
const Metricas = require("../models/metrica");

exports.getByStatusAll = (request, response, next) => {
    Metricas.getByStatusAll()
        .then(([rowsEstados, fieldDataEstados]) => {
            response.status(200).json({datos: rowsEstados});
        })
        .catch(err => console.log(err));
}

