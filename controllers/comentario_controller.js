const path = require('path');
const Comentario = require('../models/comentario');
const Usuario = require('../models/usuario');

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
        console.log(rowsComentarios);
        response.status(200).json({
            comentarios: rowsComentarios
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
        let usuarioAct = request.session.usuario;

        Usuario.getId(usuarioAct.login_usuario, usuarioAct.nombre_usuario)
        .then(([rows, fieldData]) => {
          let idAct = rows[0].Id_Usuario;
          const comentario_nuevo= new Comentario(idAct, request.body.id_ticket, request.body.texto_comentario, url_archivo_comentario);
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
        })
        .catch((err) => {console.log(err)});
        
        // var ruta = '/comentario/'+request.body.id_ticket;
        // response.redirect(ruta);
    

    
};

exports.nuevocomentario_postData = async (request, response, next) => {
    

    url_archivo_comentario = request.file;
    if((typeof(url_archivo_comentario) == "undefined")){
        url_archivo_comentario = "";
    }else{
        url_archivo_comentario = request.file.filename;
    }

    let usuarioAct = request.session.usuario;
    let idAct = 0;

    await Usuario.getId(usuarioAct.login_usuario)
        .then(([rows, fieldData]) => {
          idAct = rows[0].Id_Usuario;
        })
        .catch((err) => {console.log(err)});

    const comentario_nuevo= new Comentario(idAct, request.body.id_ticket, request.body.texto_comentario, url_archivo_comentario);
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