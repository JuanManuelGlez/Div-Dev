const path = require('path')
const Procedencia = require('../models/procedencia')

exports.get_procedencia=(request,response,next)=>{
    const id = request.params.id_procedencia;
    id_Procedencia=parseInt(id);
    Procedencia.fetchProcedencia(id_Procedencia)
    .then(([rows,fielData])=>{
        response.status(200).json({procedencias:rows});
    })
    .catch(err =>console.log(err))
}

exports.get_All_Procedencia=(request,response,next) =>{
    Procedencia.fetchProcedencias()
    .then(([rowsProcedencias, fieldData])=>{
        response.render('procedencia_f',{
            procedencias: rowsProcedencias,
        });
    })
    .catch(err => console.log(err));
}

exports.post_procedencia=(request,response,next)=>{
    const procedencianueva= new Procedencia(request.body.Nombre_Procedencia);
    procedencianueva.save()
        .then(()=>{
            response.redirect('/procedencia_f')
        })
        .catch((err)=>{
            console.log(err);
        })

}
exports.update_procedencia=(request,response,next)=>{
    for(let i=1;i<=request.body.length;i++){
        if(request.body[i][1]==1){
            visibilidad=1;
        }else if (request.body[i][1]==0){
            visibilidad=0;
        }
        //console.log(request.body.count)
        Procedencia.update(i,request.body[i][0],visibilidad)
        .then(()=>{
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }
    response.redirect('/procedencia_f');
}
