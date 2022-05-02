const text = require('body-parser/lib/types/text');
const db = require('../util/database');

module.exports = class Metricas{

    static getByStatusAll(usuario, tipo_incidencia, fecha_inicio, fecha_fin){
        return db.execute('SELECT e.Nombre_Estado AS "Estado", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, estado e WHERE t.Id_Estado = e.Id_Estado GROUP BY t.Id_Estado');
    }

    static getByProcedenciaAll(usuario, tipo_incidencia, fecha_inicio, fecha_fin){
        return db.execute('SELECT p.Nombre_Procedencia AS "Procedencia", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, procedencia p WHERE t.Id_Procedencia = p.Id_Procedencia GROUP BY t.Id_Procedencia');
    }

    static getByTipoIncidenciaAll(usuario, tipo_incidencia, fecha_inicio, fecha_fin){
        return db.execute('SELECT ti.Nombre_Tipo_Incidencia AS "Tipo_Incidencia", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, tipo_incidencia ti WHERE t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia  GROUP BY ti.Id_Tipo_Incidencia');
    }

    static getATiempo(usuario, tipo_incidencia, fecha_inicio, fecha_fin){
        return db.execute('SELECT COUNT(t.Id_Ticket) AS "A_Tiempo" FROM ticket t, tipo_incidencia ti WHERE t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia AND t.Fecha_Fin IS NOT NULL AND ((UNIX_TIMESTAMP(t.Fecha_Fin) - UNIX_TIMESTAMP(t.Fecha_Inicio)) DIV 3600) <= ti.SLA  AND t.Id_Estado != 4');
    }

    static getADestiempo(usuario, tipo_incidencia, fecha_inicio, fecha_fin){
        return db.execute('SELECT COUNT(t.Id_Ticket) AS "A_Destiempo" FROM ticket t, tipo_incidencia ti WHERE t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia AND t.Fecha_Fin IS NOT NULL AND ((UNIX_TIMESTAMP(t.Fecha_Fin) - UNIX_TIMESTAMP(t.Fecha_Inicio)) DIV 3600) > ti.SLA  AND t.Id_Estado != 4');
    }

    static getSinResolver(usuario, tipo_incidencia, fecha_inicio, fecha_fin){
        return db.execute('SELECT COUNT(Id_Ticket) AS "SinResolver" FROM ticket WHERE Fecha_Fin IS NULL');
    }
    
}