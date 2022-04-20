const path = require("path");
const Ticket = require("../models/ticket");
const Label = require("../models/label");

exports.nuevaLabel = (request, response, next) => {
  Ticket.crearLabel(request.body.Id_Label);
  response.status(200).json({});
};

exports.actualizaLabel = (request, response, next) => {
  let nueva_label = new Label(request.body.Id_Label, request.body.nuevaVisibilidad);

  nueva_label.update()
  .then(() => {
    response.status(200).json({});
  })
  .catch(err => console.log(err));
};

exports.getLike = (request, response, next) => {
  Label.fetchLike(request.body.buscaLabel)
  .then(([rows, fieldData]) => {
      response.status(200).json({
          labels:rows
      });
  })
  .catch(err => console.log(err));
};

exports.getAll = (request, response, next) => {
  Label.fetchAll()
  .then(([rows, fieldData]) => {
      response.status(200).json({
          labels:rows
      });
  })
  .catch(err => console.log(err));
};

