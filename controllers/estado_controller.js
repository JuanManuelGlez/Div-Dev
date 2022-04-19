const path = require('path');
const Estado = require('../models/estado');

exports.getAllEstados = (request, response, next) => {
   Estado.fetchAll()
        .then(([rowsEstados, fieldDataEstados]) => {
            response.status(200).json({estados: rowsEstados});
        })
        .catch(err => console.log(err));
};

exports.nuevoEstado = (request, response, next) => {
    let estado_nuevo = new Estado(request.body.Nombre_Estado);

    estado_nuevo.save()
    .then((result) => {
        response.status(200).json({ idNuevo: result[0].insertId});
    })
  };
  
  exports.getLike = (request, response, next) => {
    Estado.fetchLike(request.body.buscaEstado)
    .then(([rows, fieldData]) => {
        response.status(200).json({
            estados:rows
        });
    })
    .catch(err => console.log(err));
  };

exports.get_estado=(request,response,next)=>{
    const id=request.params.id_estado;
    id_Estado=parseInt(id);
    Estado.fetchEstado(id_Estado)
    .then(([rows,fielData])=>{
        response.status(200).json({estados:rows});
    })
    .catch(err => console.log(err))
}


exports.update=(request,response,next)=>{
    let visibilidad=0;
    if(request.body.visibilidad==1){
        visibilidad=1;
    }else if (request.visibilidad==0){
        visibilidad=0;
    }
    Estado.update(request.body.estado,request.body.nombre,visibilidad)
    .then(()=>{

    })
    .catch((err)=>{
        console.log(err);
    })
    response.status(200).json({});
}