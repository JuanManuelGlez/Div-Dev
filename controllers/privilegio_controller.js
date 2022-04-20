const path = require('path');
const Privilegio = require('../models/privilegio');

exports.getAll = (request, response, next) => {
    Privilegio.fetchAll()
        .then(([rows, fieldData]) => {
            response.render("privilegios_f", {
                privilegios: rows
            })
        })
        .catch(err => console.log(err));
};