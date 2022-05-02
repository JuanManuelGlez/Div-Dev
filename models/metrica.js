const text = require('body-parser/lib/types/text');
const db = require('../util/database');

module.exports = class Metricas{

    static getByStatusAll(usuario, tipo_incidencia, fecha_inicio, fecha_fin, archivado){
    
        if(fecha_inicio != 't.Fecha_Inicio')
            fecha_inicio = "'" + fecha_inicio + "'";
        
        if(fecha_fin != 't.Fecha_Inicio')
            fecha_fin = "'" + fecha_fin + "'";

        if(fecha_inicio != 't.Fecha_Inicio')
        {
            if(fecha_fin == 't.Fecha_Inicio')
            {
                fecha_fin = 'CURRENT_DATE + INTERVAL 1 DAY';
            }
        }

        let query = 'SELECT e.Nombre_Estado AS "Estado", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, estado e WHERE t.Id_Estado = e.Id_Estado AND t.Id_Ticket IN (SELECT ut.Id_Ticket FROM usuario_ticket ut WHERE ut.Id_Usuario = ' + usuario + ' GROUP BY ut.Id_Ticket) AND t.Id_Tipo_Incidencia = ' + tipo_incidencia + ' AND t.Archivado = ' + archivado + ' AND t.Fecha_Inicio BETWEEN ' + fecha_inicio + ' AND ' + fecha_fin + ' GROUP BY t.Id_Estado';
        return db.execute(query);
    }

    static getByProcedenciaAll(usuario, tipo_incidencia, fecha_inicio, fecha_fin, archivado){

        if(fecha_inicio != 't.Fecha_Inicio')
            fecha_inicio = "'" + fecha_inicio + "'";
        
        if(fecha_fin != 't.Fecha_Inicio')
            fecha_fin = "'" + fecha_fin + "'";

        if(fecha_inicio != 't.Fecha_Inicio')
        {
            if(fecha_fin == 't.Fecha_Inicio')
            {
                fecha_fin = 'CURRENT_DATE + INTERVAL 1 DAY';
            }
        }
    
        let query = 'SELECT p.Nombre_Procedencia AS "Procedencia", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, procedencia p WHERE t.Id_Procedencia = p.Id_Procedencia AND t.Id_Ticket IN (SELECT ut.Id_Ticket FROM usuario_ticket ut WHERE ut.Id_Usuario = ' + usuario + ' GROUP BY ut.Id_Ticket) AND t.Id_Tipo_Incidencia = ' + tipo_incidencia + ' AND t.Archivado = ' + archivado + ' AND t.Fecha_Inicio BETWEEN ' + fecha_inicio + ' AND ' + fecha_fin + ' GROUP BY t.Id_Procedencia';
        return db.execute(query);
    }

    static getByTipoIncidenciaAll(usuario, tipo_incidencia, fecha_inicio, fecha_fin, archivado){

        if(fecha_inicio != 't.Fecha_Inicio')
            fecha_inicio = "'" + fecha_inicio + "'";
        
        if(fecha_fin != 't.Fecha_Inicio')
            fecha_fin = "'" + fecha_fin + "'";

        if(fecha_inicio != 't.Fecha_Inicio')
        {
            if(fecha_fin == 't.Fecha_Inicio')
            {
                fecha_fin = 'CURRENT_DATE + INTERVAL 1 DAY';
            }
        }

        let query = 'SELECT ti.Nombre_Tipo_Incidencia AS "Tipo_Incidencia", COUNT(t.Id_Ticket) AS "Tickets" FROM ticket t, tipo_incidencia ti WHERE t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia AND t.Id_Ticket IN (SELECT ut.Id_Ticket FROM usuario_ticket ut WHERE ut.Id_Usuario = ' + usuario + ' GROUP BY ut.Id_Ticket) AND t.Id_Tipo_Incidencia = ' + tipo_incidencia + ' AND t.Archivado = ' + archivado + ' AND t.Fecha_Inicio BETWEEN ' + fecha_inicio + ' AND ' + fecha_fin + ' GROUP BY ti.Id_Tipo_Incidencia'
        return db.execute(query);
    }

    static getATiempo(usuario, tipo_incidencia, fecha_inicio, fecha_fin, archivado){

        if(fecha_inicio != 't.Fecha_Inicio')
            fecha_inicio = "'" + fecha_inicio + "'";
        
        if(fecha_fin != 't.Fecha_Inicio')
            fecha_fin = "'" + fecha_fin + "'";

        if(fecha_inicio != 't.Fecha_Inicio')
        {
            if(fecha_fin == 't.Fecha_Inicio')
            {
                fecha_fin = 'CURRENT_DATE + INTERVAL 1 DAY';
            }
        }

        let query = 'SELECT COUNT(t.Id_Ticket) AS "A_Tiempo" FROM ticket t, tipo_incidencia ti WHERE t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia AND t.Fecha_Fin IS NOT NULL AND ((UNIX_TIMESTAMP(t.Fecha_Fin) - UNIX_TIMESTAMP(t.Fecha_Inicio)) DIV 3600) <= ti.SLA  AND t.Id_Estado != 4 AND t.Id_Ticket IN (SELECT ut.Id_Ticket FROM usuario_ticket ut WHERE ut.Id_Usuario = ' + usuario + ' GROUP BY ut.Id_Ticket) AND t.Id_Tipo_Incidencia = ' + tipo_incidencia + ' AND t.Archivado = ' + archivado + ' AND t.Fecha_Inicio BETWEEN ' + fecha_inicio + ' AND ' + fecha_fin;
        return db.execute(query);
    }

    static getADestiempo(usuario, tipo_incidencia, fecha_inicio, fecha_fin, archivado){

        if(fecha_inicio != 't.Fecha_Inicio')
            fecha_inicio = "'" + fecha_inicio + "'";
        
        if(fecha_fin != 't.Fecha_Inicio')
            fecha_fin = "'" + fecha_fin + "'";

        if(fecha_inicio != 't.Fecha_Inicio')
        {
            if(fecha_fin == 't.Fecha_Inicio')
            {
                fecha_fin = 'CURRENT_DATE + INTERVAL 1 DAY';
            }
        }

        let query = 'SELECT COUNT(t.Id_Ticket) AS "A_Destiempo" FROM ticket t, tipo_incidencia ti WHERE t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia AND t.Fecha_Fin IS NOT NULL AND ((UNIX_TIMESTAMP(t.Fecha_Fin) - UNIX_TIMESTAMP(t.Fecha_Inicio)) DIV 3600) > ti.SLA  AND t.Id_Estado != 4 AND t.Id_Ticket IN (SELECT ut.Id_Ticket FROM usuario_ticket ut WHERE ut.Id_Usuario = ' + usuario + ' GROUP BY ut.Id_Ticket) AND t.Id_Tipo_Incidencia = ' + tipo_incidencia + ' AND t.Archivado = ' + archivado + ' AND t.Fecha_Inicio BETWEEN ' + fecha_inicio + ' AND ' + fecha_fin;
        return db.execute(query);
    }

    static getSinResolver(usuario, tipo_incidencia, fecha_inicio, fecha_fin, archivado){

        if(fecha_inicio != 't.Fecha_Inicio')
            fecha_inicio = "'" + fecha_inicio + "'";
        
        if(fecha_fin != 't.Fecha_Inicio')
            fecha_fin = "'" + fecha_fin + "'";

        if(fecha_inicio != 't.Fecha_Inicio')
        {
            if(fecha_fin == 't.Fecha_Inicio')
            {
                fecha_fin = 'CURRENT_DATE + INTERVAL 1 DAY';
            }
        }

        let query = 'SELECT COUNT(Id_Ticket) AS "SinResolver" FROM ticket t WHERE t.Fecha_Fin IS NULL AND t.Id_Ticket IN (SELECT ut.Id_Ticket FROM usuario_ticket ut WHERE ut.Id_Usuario = ' + usuario + ' GROUP BY ut.Id_Ticket) AND t.Id_Tipo_Incidencia = ' + tipo_incidencia + ' AND t.Archivado = ' + archivado + ' AND t.Fecha_Inicio BETWEEN ' + fecha_inicio + ' AND ' + fecha_fin;
        return db.execute(query);
    }
    
}