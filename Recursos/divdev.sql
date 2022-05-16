-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-05-2022 a las 20:32:02
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "ONLY_FULL_GROUP_BY";
START TRANSACTION;
SET time_zone = "-05:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `divdev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `Id_Usuario` int(7) NOT NULL,
  `Id_Ticket` int(7) NOT NULL,
  `Fecha_y_Hora` datetime NOT NULL,
  `Texto_Comentario` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `URL_Archivo` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `Id_Estado` int(7) NOT NULL,
  `Nombre_Estado` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Visibilidad_Estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`Id_Estado`, `Nombre_Estado`, `Visibilidad_Estado`) VALUES
(1, 'Sin Asignar', 1),
(2, 'En Progreso', 1),
(3, 'En Pausa', 1),
(4, 'Cancelado', 1),
(5, 'En Espera de Revisión', 1),
(6, 'Completado', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_ticket`
--

CREATE TABLE `estado_ticket` (
  `Id_Estado` int(7) NOT NULL,
  `Id_Ticket` int(7) NOT NULL,
  `Fecha_y_Hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `label`
--

CREATE TABLE `label` (
  `Id_Label` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Visibilidad_Label` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `label`
--

INSERT INTO `label` (`Id_Label`, `Visibilidad_Label`) VALUES
('4th generation', 1),
('Abilities', 1),
('ability', 1),
('Accesibildad', 1),
('algorithm', 1),
('Ameliorated', 1),
('application', 0),
('architecture', 1),
('benchmark', 1),
('Bug', 1),
('Cloned', 1),
('coherent', 1),
('Compatible', 1),
('Configurable', 1),
('content-based', 1),
('Cross-group', 1),
('Cross-platform', 1),
('database', 1),
('discrete', 1),
('eco-centric', 1),
('empowering', 1),
('encompassing', 1),
('Ergonomic', 1),
('Extended', 1),
('exuding', 1),
('firmware', 1),
('hardware', 1),
('homogeneous', 1),
('IA', 1),
('Implemented', 1),
('Intuitive', 1),
('knowledge user', 1),
('mobile', 1),
('monitoring', 1),
('Multi-tiered', 1),
('Open-source', 1),
('Optimized', 1),
('page', 1),
('portal', 1),
('reciprocal', 1),
('Robust', 1),
('software', 1),
('static', 1),
('superstructure', 1),
('systemic', 1),
('tangible', 1),
('task-force', 1),
('Triple-buffered', 1),
('workforce', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `label_ticket`
--

CREATE TABLE `label_ticket` (
  `Id_Label` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Id_Ticket` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `Id_Pregunta` int(7) NOT NULL,
  `Texto_Pregunta` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Visibilidad_Pregunta` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`Id_Pregunta`, `Texto_Pregunta`, `Visibilidad_Pregunta`) VALUES
(1, 'Pregunta Extra:', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_ticket`
--

CREATE TABLE `pregunta_ticket` (
  `Id_Pregunta` int(7) NOT NULL,
  `Id_Ticket` int(7) NOT NULL,
  `Respuesta` varchar(500) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `Pregunta` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prioridad`
--

CREATE TABLE `prioridad` (
  `Id_Prioridad` int(7) NOT NULL,
  `Nombre_Prioridad` varchar(10) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `prioridad`
--

INSERT INTO `prioridad` (`Id_Prioridad`, `Nombre_Prioridad`) VALUES
(1, 'baja'),
(2, 'media'),
(3, 'alta'),
(4, 'urgente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegio`
--

CREATE TABLE `privilegio` (
  `Id_Privilegio` int(7) NOT NULL,
  `Nombre_Privilegio` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Visibilidad_Privilegio` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `privilegio`
--

INSERT INTO `privilegio` (`Id_Privilegio`, `Nombre_Privilegio`, `Visibilidad_Privilegio`) VALUES
(1, 'Sesiones', 1),
(2, 'Incidencias', 1),
(3, 'Modificar Incidencia', 1),
(4, 'Panel Admin', 1),
(5, 'Labels', 1),
(6, 'Consultar Usuario', 1),
(7, 'Comentarios', 1),
(8, 'Archivo', 1),
(9, 'Panel Ticket', 1),
(10, 'Asignar Ticket', 1),
(11, 'Metricas', 1),
(12, 'Roles', 1),
(13, 'Usuarios', 1),
(14, 'Historial', 1),
(15, 'Modificar Rol de Usuario', 1),
(16, 'Lista Usuarios', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procedencia`
--

CREATE TABLE `procedencia` (
  `Id_Procedencia` int(7) NOT NULL,
  `Nombre_Procedencia` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `Visibilidad_Procedencia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `procedencia`
--

INSERT INTO `procedencia` (`Id_Procedencia`, `Nombre_Procedencia`, `Visibilidad_Procedencia`) VALUES
(1, 'Luuna', 1),
(2, 'Nooz', 1),
(3, 'Mappa', 1),
(4, 'Oiils', 1),
(5, 'Ergo', 1),
(6, 'Homeware', 1),
(7, 'Quilty', 1),
(8, 'Added', 1),
(9, 'Nubed', 1),
(10, 'Unfold', 1),
(11, 'Loop', 1),
(12, 'Zebrands', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `Id_Rol` int(7) NOT NULL,
  `Nombre_Rol` varchar(30) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`Id_Rol`, `Nombre_Rol`) VALUES
(1, 'Administrador'),
(2, 'Líder de Soporte'),
(3, 'Técnico de Soporte'),
(4, 'Usuario Zebrands');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_privilegio`
--

CREATE TABLE `rol_privilegio` (
  `Id_Rol` int(7) NOT NULL,
  `Id_Privilegio` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`Id_Rol`, `Id_Privilegio`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 13),
(2, 14),
(2, 16),
(3, 1),
(3, 2),
(3, 3),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 11),
(3, 13),
(3, 14),
(4, 1),
(4, 2),
(4, 6),
(4, 7),
(4, 9),
(4, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket`
--

CREATE TABLE `ticket` (
  `Id_Ticket` int(7) NOT NULL,
  `Id_Procedencia` int(7) NOT NULL,
  `Id_Tipo_Incidencia` int(7) NOT NULL,
  `Id_Prioridad` int(7) NOT NULL,
  `Fecha_Inicio` datetime NOT NULL,
  `Fecha_Fin` datetime DEFAULT NULL,
  `Descripcion` varchar(1000) CHARACTER SET utf8mb4 NOT NULL,
  `Asunto` varchar(250) CHARACTER SET utf8mb4 NOT NULL,
  `Archivado` tinyint(1) NOT NULL,
  `Id_Estado` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_incidencia`
--

CREATE TABLE `tipo_incidencia` (
  `Id_Tipo_Incidencia` int(7) NOT NULL,
  `Nombre_Tipo_Incidencia` varchar(40) CHARACTER SET utf8mb4 NOT NULL,
  `SLA` int(3) NOT NULL,
  `Visibilidad_Tipo_Incidencia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_incidencia`
--

INSERT INTO `tipo_incidencia` (`Id_Tipo_Incidencia`, `Nombre_Tipo_Incidencia`, `SLA`, `Visibilidad_Tipo_Incidencia`) VALUES
(1, 'Tipo de Incidencia Base', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_incidencia_pregunta`
--

CREATE TABLE `tipo_incidencia_pregunta` (
  `Id_Pregunta` int(7) NOT NULL,
  `Id_Tipo_Incidencia` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id_Usuario` int(7) NOT NULL,
  `Id_Rol` int(7) NOT NULL,
  `Nombre_Usuario` varchar(70) CHARACTER SET utf8mb4 NOT NULL,
  `Login` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `Contraseña` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `URL_Foto` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `Activo` tinyint(1) NOT NULL DEFAULT 0,
  `Hash_Verificacion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id_Usuario`, `Id_Rol`, `Nombre_Usuario`, `Login`, `Contraseña`, `URL_Foto`, `Activo`, `Hash_Verificacion`) VALUES
(0, 4, 'Usuario Sin Asignar', 'n/a', 'n/a', 'n/a', 1, 'n/a'),
(1, 1, 'Admin', 'admin@zeb.mx', '$2a$12$wVKI2Xd8aYOGxIxQehjx2OmwhUD.C7Oz4LM19A9Uhxn4lt/mw3/Au', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg', 1, 'n/a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_ticket`
--

CREATE TABLE `usuario_ticket` (
  `Id_Usuario` int(7) NOT NULL,
  `Id_Ticket` int(7) NOT NULL,
  `Cargo` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `Fecha_Asignacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`Id_Usuario`,`Id_Ticket`,`Fecha_y_Hora`),
  ADD KEY `Id_Ticket` (`Id_Ticket`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`Id_Estado`);

--
-- Indices de la tabla `estado_ticket`
--
ALTER TABLE `estado_ticket`
  ADD PRIMARY KEY (`Id_Estado`,`Id_Ticket`,`Fecha_y_Hora`),
  ADD KEY `Id_Ticket` (`Id_Ticket`);

--
-- Indices de la tabla `label`
--
ALTER TABLE `label`
  ADD PRIMARY KEY (`Id_Label`);

--
-- Indices de la tabla `label_ticket`
--
ALTER TABLE `label_ticket`
  ADD PRIMARY KEY (`Id_Label`,`Id_Ticket`),
  ADD KEY `Id_Ticket` (`Id_Ticket`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`Id_Pregunta`);

--
-- Indices de la tabla `pregunta_ticket`
--
ALTER TABLE `pregunta_ticket`
  ADD PRIMARY KEY (`Id_Pregunta`,`Id_Ticket`),
  ADD KEY `Id_Ticket` (`Id_Ticket`);

--
-- Indices de la tabla `prioridad`
--
ALTER TABLE `prioridad`
  ADD PRIMARY KEY (`Id_Prioridad`);

--
-- Indices de la tabla `privilegio`
--
ALTER TABLE `privilegio`
  ADD PRIMARY KEY (`Id_Privilegio`);

--
-- Indices de la tabla `procedencia`
--
ALTER TABLE `procedencia`
  ADD PRIMARY KEY (`Id_Procedencia`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`Id_Rol`);

--
-- Indices de la tabla `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD PRIMARY KEY (`Id_Rol`,`Id_Privilegio`),
  ADD KEY `Id_Privilegio` (`Id_Privilegio`);

--
-- Indices de la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`Id_Ticket`),
  ADD KEY `Id_Procedencia` (`Id_Procedencia`),
  ADD KEY `Id_Tipo_Incidencia` (`Id_Tipo_Incidencia`),
  ADD KEY `Id_Prioridad` (`Id_Prioridad`),
  ADD KEY `ticket_ibfk_4` (`Id_Estado`);

--
-- Indices de la tabla `tipo_incidencia`
--
ALTER TABLE `tipo_incidencia`
  ADD PRIMARY KEY (`Id_Tipo_Incidencia`);

--
-- Indices de la tabla `tipo_incidencia_pregunta`
--
ALTER TABLE `tipo_incidencia_pregunta`
  ADD PRIMARY KEY (`Id_Tipo_Incidencia`,`Id_Pregunta`),
  ADD KEY `Id_Pregunta` (`Id_Pregunta`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id_Usuario`),
  ADD KEY `Id_Rol` (`Id_Rol`);

--
-- Indices de la tabla `usuario_ticket`
--
ALTER TABLE `usuario_ticket`
  ADD PRIMARY KEY (`Id_Usuario`,`Id_Ticket`,`Fecha_Asignacion`),
  ADD KEY `Id_Ticket` (`Id_Ticket`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `Id_Estado` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `Id_Pregunta` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `prioridad`
--
ALTER TABLE `prioridad`
  MODIFY `Id_Prioridad` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `privilegio`
--
ALTER TABLE `privilegio`
  MODIFY `Id_Privilegio` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `procedencia`
--
ALTER TABLE `procedencia`
  MODIFY `Id_Procedencia` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `Id_Rol` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ticket`
--
ALTER TABLE `ticket`
  MODIFY `Id_Ticket` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `tipo_incidencia`
--
ALTER TABLE `tipo_incidencia`
  MODIFY `Id_Tipo_Incidencia` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`Id_Usuario`) REFERENCES `usuario` (`Id_Usuario`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`Id_Ticket`) REFERENCES `ticket` (`Id_Ticket`);

--
-- Filtros para la tabla `estado_ticket`
--
ALTER TABLE `estado_ticket`
  ADD CONSTRAINT `estado_ticket_ibfk_1` FOREIGN KEY (`Id_Estado`) REFERENCES `estado` (`Id_Estado`),
  ADD CONSTRAINT `estado_ticket_ibfk_2` FOREIGN KEY (`Id_Ticket`) REFERENCES `ticket` (`Id_Ticket`);

--
-- Filtros para la tabla `label_ticket`
--
ALTER TABLE `label_ticket`
  ADD CONSTRAINT `label_ticket_ibfk_1` FOREIGN KEY (`Id_Label`) REFERENCES `label` (`Id_Label`),
  ADD CONSTRAINT `label_ticket_ibfk_2` FOREIGN KEY (`Id_Ticket`) REFERENCES `ticket` (`Id_Ticket`);

--
-- Filtros para la tabla `pregunta_ticket`
--
ALTER TABLE `pregunta_ticket`
  ADD CONSTRAINT `pregunta_ticket_ibfk_1` FOREIGN KEY (`Id_Pregunta`) REFERENCES `pregunta` (`Id_Pregunta`),
  ADD CONSTRAINT `pregunta_ticket_ibfk_2` FOREIGN KEY (`Id_Ticket`) REFERENCES `ticket` (`Id_Ticket`);

--
-- Filtros para la tabla `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD CONSTRAINT `rol_privilegio_ibfk_1` FOREIGN KEY (`Id_Rol`) REFERENCES `rol` (`Id_Rol`),
  ADD CONSTRAINT `rol_privilegio_ibfk_2` FOREIGN KEY (`Id_Privilegio`) REFERENCES `privilegio` (`Id_Privilegio`);

--
-- Filtros para la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`Id_Procedencia`) REFERENCES `procedencia` (`Id_Procedencia`),
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`Id_Tipo_Incidencia`) REFERENCES `tipo_incidencia` (`Id_Tipo_Incidencia`),
  ADD CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`Id_Prioridad`) REFERENCES `prioridad` (`Id_Prioridad`),
  ADD CONSTRAINT `ticket_ibfk_4` FOREIGN KEY (`Id_Estado`) REFERENCES `estado` (`Id_Estado`);

--
-- Filtros para la tabla `tipo_incidencia_pregunta`
--
ALTER TABLE `tipo_incidencia_pregunta`
  ADD CONSTRAINT `tipo_incidencia_pregunta_ibfk_1` FOREIGN KEY (`Id_Tipo_Incidencia`) REFERENCES `tipo_incidencia` (`Id_Tipo_Incidencia`),
  ADD CONSTRAINT `tipo_incidencia_pregunta_ibfk_2` FOREIGN KEY (`Id_Pregunta`) REFERENCES `pregunta` (`Id_Pregunta`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`Id_Rol`) REFERENCES `rol` (`Id_Rol`);

--
-- Filtros para la tabla `usuario_ticket`
--
ALTER TABLE `usuario_ticket`
  ADD CONSTRAINT `usuario_ticket_ibfk_1` FOREIGN KEY (`Id_Usuario`) REFERENCES `usuario` (`Id_Usuario`),
  ADD CONSTRAINT `usuario_ticket_ibfk_2` FOREIGN KEY (`Id_Ticket`) REFERENCES `ticket` (`Id_Ticket`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
