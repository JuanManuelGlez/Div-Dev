const path = require('path');
const Comentario = require('../models/comentario');

exports.nuevocomentario_get = (request, response, next) => {
    Comentario.fetchcomentarios(3)
        .then(([rowsComentarios, fieldDataComentarios]) => {
            response.render('comentario/nuevocomentario', {
                Comentarios: rowsComentarios,
                id_ticket_comentario: 3
            });
        })
        .catch(err => console.log(err));
};

exports.comentarios_get = (request, response, next) => {
    Comentario.fetchcomentarios(request.params.id_ticket)
    .then(([rowsComentarios, fieldDataComentarios]) => {
        response.status(200).json({
            comentarios: rowsComentarios,
            ID : request.params.id_ticket
        });
    })
    .catch(err => console.log(err));
}

exports.comentarios_getData = (request, response, next) => {
    Comentario.fetchcomentarios(request.params.id_ticket)
    .then(([rowsComentarios, fieldDataComentarios]) => {
        response.status(200).json({
            comentarios: rowsComentarios,
        });
    })
    .catch(err => console.log(err));
}

exports.nuevocomentario_post = (request, response, next) => {
    

        // url_archivo_comentario = request.file;
        // console.log(url_archivo_comentario);
        // if((typeof(url_archivo_comentario) == "undefined")){
        //     url_archivo_comentario = "";
        //     console.log(url_archivo_comentario);
        // }else{
        //     url_archivo_comentario = request.file.filename;
        //     console.log(url_archivo_comentario);
        // }
        // console.log(url_archivo_comentario);
        url_archivo_comentario = 'no hay archivo';
        const comentario_nuevo= new Comentario(10, request.body.id_ticket, request.body.texto_comentario, url_archivo_comentario);
        console.log(comentario_nuevo);
    
        comentario_nuevo.comentario_save()
        .then(() => {
            Comentario.fetchcomentarios(request.body.id_ticket)
            .then(([rowsComentarios, filedData])=> {
                response.status(200).json({
                    comentarios: rowsComentarios
                });
            }).catch(err=>console.log(err));
            
        })
        .catch(err => console.log(err));
        
        // var ruta = '/comentario/'+request.body.id_ticket;
        // response.redirect(ruta);
    

    
};

exports.nuevocomentario_postData = (request, response, next) => {
    

    // url_archivo_comentario = request.file;
    // console.log(url_archivo_comentario);
    // if((typeof(url_archivo_comentario) == "undefined")){
    //     url_archivo_comentario = "";
    //     console.log(url_archivo_comentario);
    // }else{
    //     url_archivo_comentario = request.file.filename;
    //     console.log(url_archivo_comentario);
    // }
    // console.log(url_archivo_comentario);
    url_archivo_comentario = 'no hay archivo';
    const comentario_nuevo= new Comentario(10, request.body.id_ticket, request.body.texto_comentario, url_archivo_comentario);
    console.log(comentario_nuevo);
    comentario_nuevo.comentario_save()
        .then(() => {
            Comentario.fetchcomentarios(request.body.id_ticket)
            .then(([rowsComentarios, filedData])=> {
                response.status(200).json({
                    comentarios: rowsComentarios
                });
            }).catch(err=>console.log(err));
            
        })
        .catch(err => console.log(err));

   
    // var ruta = '/comentario/'+request.body.id_ticket;
    // response.redirect(ruta);



};