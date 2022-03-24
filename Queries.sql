SELECT p.Nombre_Procedencia AS 'Procedencia', ti.Nombre AS 'Categoría', pri.Nombre AS 'Prioridad', t.Fecha_Inicio, t.Fecha_Fin, t.Descripcion, t.Asunto, 
e.Nombre AS 'Estado', u.Nombre_Usuario AS 'Usuario'
FROM procedencia p, tipo_incidencia ti, estado e, usuario_ticket ut, usuario u, prioridad pri, ticket t, estado_ticket et
WHERE t.Id_Ticket = ut.Id_Ticket AND t.Id_Procedencia = p.Id_Procedencia AND t.Id_Tipo_Incidencia = ti.Id_Tipo_Incidencia
AND t.Id_Prioridad = pri.Id_Prioridad AND et.Id_Ticket = t.Id_Ticket AND et.Id_Estado = e.Id_Estado AND ut.Id_Ticket = t.Id_Ticket
AND ut.Id_Usuario = u.Id_Usuario AND t.Id_Ticket='#'