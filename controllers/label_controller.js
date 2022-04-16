const path = require("path");
const Ticket = require("../models/ticket");
const Label = require("../models/label");

exports.nuevaLabel = (request, response, next) => {
  Ticket.crearLabel(request.body.Id_Label);
  response.status(200).json({});
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
  Ticket.fetchLabels()
  .then(([rows, fieldData]) => {
      response.status(200).json({
          labels:rows
      });
  })
  .catch(err => console.log(err));
};

