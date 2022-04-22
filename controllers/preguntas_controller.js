const { resolve } = require("path");
const path = require("path");
const Estado = require("../models/estado");
const Label = require("../models/label");
const Pregunta = require("../models/pregunta");
const { fetchProcedencias } = require("../models/ticket");

exports.preguntas_getAll = (request, response, next) => {
  Pregunta.fetchAll()
    .then(([rows, fieldData]) => {
      response.status(200).json({
          preguntas:rows
      });
  })
  .catch(err => console.log(err));
};

exports.actualizaPregunta = (request, response, next) => {
  Pregunta.update_visibilidad(request.body.Pregunta, request.body.nuevaVisibilidad)
  .then(() => {
    response.status(200).json({});
  })
  .catch(err => console.log(err));
};

exports.nueva_panel = (request, response, next) => {
  pregunta_nueva = new Pregunta(request.body.Pregunta);
  pregunta_nueva.pregunta_save();
  response.status(200).json({});
};

exports.getLike = (request, response, next) => {
  Pregunta.fetchLike(request.body.buscaPregunta)
    .then(([rows, fieldData]) => {
        response.status(200).json({
            preguntas:rows
        });
    })
  .catch(err => console.log(err));
};

exports.eliminarP_panel = (request, response, next) => {
  Pregunta.cambiaVisibilidad(request.body.Pregunta,request.body.Visibilidad);
  response.status(200).json({});
};

