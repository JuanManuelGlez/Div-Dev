const text = require('body-parser/lib/types/text');
const db = require('../util/database');

module.exports = class Metricas{

    static getByStatusAll(){
        return db.execute('SELECT e.Nombre_Estado AS "Estado", COUNT(et.Id_Ticket) AS "Tickets" FROM estado_ticket et, estado e WHERE et.Id_Estado = e.Id_Estado GROUP BY et.Id_Estado');
    }

    static getByProcedenciaAll(){
        return db.execute('SELECT p.Nombre_Procedencia AS "Procedencia", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, procedencia p WHERE t.Id_Procedencia = p.Id_Procedencia GROUP BY t.Id_Procedencia');
    }

    static getByTipoIncidenciaAll(){
        return db.execute('SELECT ti.Nombre_Tipo_Incidencia AS "Tipo_Incidencia", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, tipo_incidencia ti WHERE t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia  GROUP BY ti.Id_Tipo_Incidencia');
    }
    
}