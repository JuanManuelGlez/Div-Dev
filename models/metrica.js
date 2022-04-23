const text = require('body-parser/lib/types/text');
const db = require('../util/database');

module.exports = class Metricas{

    static getByStatusAll(){
        return db.execute('SELECT e.Nombre_Estado AS "Estado", COUNT(et.Id_Ticket) AS "Tickets" FROM estado_ticket et, estado e WHERE et.Id_Estado = e.Id_Estado GROUP BY et.Id_Estado');
    }
    
}