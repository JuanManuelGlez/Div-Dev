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

exports.nuevocomentario_post = (request, response, next) => {
    if ('texto_comentario' in request.body){

        url_archivo_comentario = request.file;
        console.log(url_archivo_comentario);
        console.log('CASOOOOO1');
        if((typeof(url_archivo_comentario) == "undefined")){
            url_archivo_comentario = "";
            console.log(url_archivo_comentario);
            console.log('CASOOOOO2');
        }else{
            url_archivo_comentario = request.file.filename;
            console.log(url_archivo_comentario);
            console.log('CASOOOOO3');
        }
        console.log(url_archivo_comentario);
        console.log('CASOOOOOFINAL');

        const comentario_nuevo= new Comentario(10, request.body.id_ticket, request.body.texto_comentario, url_archivo_comentario);
        console.log(comentario_nuevo);
    
        comentario_nuevo.comentario_save();
        response.redirect('/comentario/nuevo');
    }else{

    }
};