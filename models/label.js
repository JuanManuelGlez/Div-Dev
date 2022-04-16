const db = require('../util/database');
const bcrypt = require('bcryptjs');


module.exports = class Label{ 

    constructor() {
    }

    save() {
    }

    static fetchAll(texto_ingresado) {
        return db.execute('SELECT * FROM label');
    }

    static fetchLike(texto_ingresado) {
        return db.execute('SELECT * FROM label WHERE Visibilidad_Label = 1 AND Id_Label LIKE ?', ['%' + texto_ingresado + '%']);
    }

}