const path = require('path')
const Procedencia = require('../models/procedencia')


exports.get_procedencia=(request,response,next) =>{
    Procedencia.fetchProcedencias()
    .then((rowsProcedencias,fieldDataProce)=>{
        response.render('procedencia_f',{
            procedencias:rowsProcedencias,
        });
    })
    .catch(err => console.log(err));
}

exports.post_procedencia=(request,response,next)=>{
    const procedencianueva= new Procedencia(request.body.Nombre_Procedencia);
    procedencianueva.save()
        .then(()=>{
            response.redirect('/procedencias_f')
        })
        .catch((err)=>{
            console.log(err);
        })

}

