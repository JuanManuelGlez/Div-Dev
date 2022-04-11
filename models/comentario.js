const db = require('../util/database');

var today = new Date();

module.exports = class Comentario{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(id_usuario_comentario, id_ticket_comentario, texto_comentario, url_archivo_comentario) {
        this.id_usuario_comentario = id_usuario_comentario;
        this.id_ticket_comentario = id_ticket_comentario;
        this.texto_comentario = texto_comentario;
        this.url_archivo_comentario = url_archivo_comentario;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    comentario_save() {
        return db.execute('INSERT INTO comentario(Id_Usuario, Id_Ticket, Fecha_y_Hora, Texto_Comentario, URL_Archivo) VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?)', 
            [
                this.id_usuario_comentario,
                this.id_ticket_comentario,
                this.texto_comentario,
                this.url_archivo_comentario
            ]    
        );
    }

    static fetchcomentarios(id_ticket_comentario) {
        return db.execute('SELECT * FROM Comentario C, Usuario U WHERE U.Id_Usuario = C.Id_Usuario AND C.Id_Ticket = ? ORDER BY Fecha_y_Hora DESC',
        [id_ticket_comentario]
        );
    }


    static fetchComentariosTicket(id_ticket_comentario) {
        return db.execute('SELECT * FROM Comentario  WHERE  C.Id_Ticket = ? ORDER BY Fecha_y_Hora',
        [id_ticket_comentario]
        );
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
    }

}