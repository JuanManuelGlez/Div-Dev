-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2022 a las 15:37:37
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


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

--
-- Volcado de datos para la tabla `estado_ticket`
--

INSERT INTO `estado_ticket` (`Id_Estado`, `Id_Ticket`, `Fecha_y_Hora`) VALUES
(1, 2, '2022-04-27 13:47:09'),
(1, 2, '2022-04-27 16:58:50'),
(1, 2, '2022-04-27 17:19:38'),
(1, 2, '2022-04-27 18:02:55'),
(1, 2, '2022-04-27 18:40:01'),
(1, 2, '2022-04-27 18:50:34'),
(1, 2, '2022-04-27 18:59:29'),
(1, 2, '2022-04-27 19:09:12'),
(1, 2, '2022-04-27 19:09:36'),
(1, 2, '2022-04-27 19:13:01'),
(1, 2, '2022-04-27 19:24:01'),
(1, 2, '2022-04-28 09:46:58'),
(1, 2, '2022-04-28 10:51:35'),
(1, 2, '2022-04-28 10:51:54'),
(1, 2, '2022-04-28 17:29:24'),
(1, 2, '2022-04-28 17:51:59'),
(1, 2, '2022-04-29 08:22:36'),
(1, 3, '2022-04-27 18:11:39'),
(1, 3, '2022-04-27 18:12:21'),
(1, 3, '2022-04-27 18:12:35'),
(1, 3, '2022-04-27 18:50:21'),
(1, 3, '2022-04-27 19:15:06'),
(1, 3, '2022-04-28 09:46:46'),
(1, 3, '2022-04-28 11:07:22'),
(1, 3, '2022-04-28 17:52:04'),
(1, 4, '2022-04-27 18:49:51'),
(1, 4, '2022-04-28 10:51:40'),
(1, 4, '2022-04-28 17:36:59'),
(1, 4, '2022-04-28 17:55:15'),
(1, 5, '2022-04-28 11:04:15'),
(1, 6, '2022-04-28 17:51:35'),
(1, 6, '2022-04-28 17:52:57'),
(1, 6, '2022-04-28 17:54:02'),
(1, 7, '2022-04-29 08:25:39'),
(1, 8, '2022-04-29 08:26:06'),
(1, 9, '2022-04-29 08:26:45'),
(1, 10, '2022-04-29 08:28:43'),
(2, 2, '2022-04-27 16:58:36'),
(2, 2, '2022-04-27 17:19:18'),
(2, 2, '2022-04-27 18:38:54'),
(2, 2, '2022-04-27 18:59:22'),
(2, 2, '2022-04-27 19:07:03'),
(2, 2, '2022-04-27 19:09:30'),
(2, 2, '2022-04-27 19:12:16'),
(2, 2, '2022-04-27 19:20:56'),
(2, 2, '2022-04-28 09:46:52'),
(2, 2, '2022-04-28 10:51:29'),
(2, 2, '2022-04-28 12:31:32'),
(2, 2, '2022-04-28 12:31:53'),
(2, 2, '2022-04-28 16:35:57'),
(2, 2, '2022-04-28 17:28:13'),
(2, 2, '2022-04-29 08:22:24'),
(2, 3, '2022-04-27 18:50:07'),
(2, 3, '2022-04-27 19:13:44'),
(2, 3, '2022-04-27 19:39:17'),
(2, 3, '2022-04-28 17:48:40'),
(2, 3, '2022-04-29 08:27:05'),
(2, 6, '2022-04-28 17:51:52'),
(3, 2, '2022-04-27 18:02:50'),
(3, 2, '2022-04-27 19:08:51'),
(3, 2, '2022-04-28 17:28:07'),
(3, 2, '2022-04-28 17:41:24'),
(3, 3, '2022-04-27 18:11:59'),
(3, 4, '2022-04-28 17:36:52'),
(3, 4, '2022-04-28 17:54:47'),
(3, 4, '2022-04-29 08:27:13'),
(4, 2, '2022-04-27 16:58:42'),
(4, 2, '2022-04-27 17:19:31'),
(4, 2, '2022-04-27 18:02:37'),
(4, 2, '2022-04-27 18:40:09'),
(4, 2, '2022-04-27 19:09:26'),
(4, 2, '2022-04-28 10:41:11'),
(4, 2, '2022-04-28 10:51:48'),
(4, 2, '2022-04-28 12:31:41'),
(4, 2, '2022-04-28 17:28:28'),
(4, 2, '2022-04-28 17:29:09'),
(4, 2, '2022-04-29 08:22:11'),
(4, 3, '2022-04-27 18:12:10'),
(4, 3, '2022-04-27 18:12:28'),
(4, 3, '2022-04-27 18:50:01'),
(4, 3, '2022-04-27 19:14:59'),
(4, 3, '2022-04-27 19:40:04'),
(4, 3, '2022-04-28 10:53:24'),
(4, 6, '2022-04-29 08:27:24'),
(5, 2, '2022-04-28 17:28:18'),
(5, 3, '2022-04-27 18:12:04'),
(5, 5, '2022-04-29 08:28:17'),
(6, 2, '2022-04-27 17:19:24'),
(6, 2, '2022-04-27 18:02:44'),
(6, 2, '2022-04-27 18:47:27'),
(6, 2, '2022-04-27 19:09:20'),
(6, 2, '2022-04-28 12:31:47'),
(6, 2, '2022-04-28 12:32:00'),
(6, 2, '2022-04-28 17:27:57'),
(6, 2, '2022-04-28 17:28:23'),
(6, 2, '2022-04-28 17:28:34'),
(6, 3, '2022-04-27 18:12:16'),
(6, 3, '2022-04-27 18:50:14'),
(6, 3, '2022-04-27 19:41:00'),
(6, 3, '2022-04-28 10:53:40'),
(6, 4, '2022-04-28 10:41:25'),
(6, 4, '2022-04-28 17:36:44'),
(6, 4, '2022-04-28 17:54:33'),
(6, 6, '2022-04-28 17:52:11'),
(6, 6, '2022-04-28 17:53:41'),
(6, 8, '2022-04-29 08:27:35'),
(6, 9, '2022-04-29 08:27:45');

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
('algorithm', 1),
('Ameliorated', 1),
('application', 0),
('architecture', 1),
('benchmark', 1),
('Bug', 1),
('Bug 2', 1),
('Bug 3', 1),
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
('Implemented', 1),
('Intuitive', 1),
('knowledge user', 1),
('mobile', 1),
('monitoring', 1),
('Multi-tiered', 1),
('Nueva', 1),
('Nueva Label', 1),
('Nueva Label 2', 1),
('Nueva Label 3', 1),
('Open-source', 1),
('Optimized', 1),
('page', 1),
('portal', 1),
('pruba', 1),
('reciprocal', 1),
('Robust', 1),
('rodigo', 1),
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

--
-- Volcado de datos para la tabla `label_ticket`
--

INSERT INTO `label_ticket` (`Id_Label`, `Id_Ticket`) VALUES
('Abilities', 9),
('ability', 9),
('algorithm', 9),
('Bug', 5),
('Bug', 9),
('Bug 2', 3),
('Bug 2', 5),
('Bug 2', 9),
('Bug 3', 3),
('Bug 3', 5),
('Bug 3', 9),
('Cloned', 5),
('Cross-group', 9),
('Cross-platform', 9),
('database', 4),
('discrete', 4),
('empowering', 7),
('encompassing', 7),
('Intuitive', 8),
('Multi-tiered', 8),
('Nueva Label', 8),
('pruba', 6),
('reciprocal', 6),
('rodigo', 6),
('software', 10),
('static', 6),
('static', 10),
('superstructure', 10),
('tangible', 6);

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
(1, 'SKU:', 1),
(2, 'Motivo:', 1),
(3, 'Colocar IAO en shipping (si/no):', 1),
(4, 'Colocar IAO en payment (si/no):', 1),
(5, 'Estatus faltante en envio de la orden', 1),
(6, 'Estatus faltantes en el pago de la orden', 1),
(7, 'Problema con numero de contacto del cliente.', 1),
(8, 'La direccion del cliente no coincide con el ticket', 1),
(9, 'No se envió el correo de confirmacion', 1),
(10, 'Direccion de envio: ', 1),
(11, 'Telefono de cliente:', 1),
(12, 'Nombre del cliente que reporto incidencia:', 1),
(13, 'SLA:', 1),
(14, 'Dia en el que se espera la entrega:', 1),
(15, 'Numero de error:', 1),
(16, 'Pagina de error:', 1),
(17, 'Motivo de devolucion:', 1),
(18, 'comentarios extras:', 1),
(19, 'Pedido no entregado:', 1),
(20, 'Articulo dañado:', 1);

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

--
-- Volcado de datos para la tabla `pregunta_ticket`
--

INSERT INTO `pregunta_ticket` (`Id_Pregunta`, `Id_Ticket`, `Respuesta`, `Pregunta`) VALUES
(1, 5, 'Prueba 6 cambio bd', 'SKU:'),
(1, 10, 'Prueba 4 Instancia', 'SKU:'),
(4, 2, 'Prueba 3 cambio bd', 'Colocar IAO en payment (si/no):'),
(4, 8, 'Prueba 2 Instancia', 'Colocar IAO en payment (si/no):'),
(5, 4, 'Prueba 5 cambio bd', 'Estatus faltante en envio de la orden'),
(5, 5, 'Prueba 6 cambio bd', 'Estatus faltante en envio de la orden'),
(5, 6, 'Prueba 7 cambio bd', 'Estatus faltante en envio de la orden'),
(5, 7, 'Prueba 1 Instancia', 'Estatus faltante en envio de la orden'),
(5, 10, 'Prueba 4 Instancia', 'Estatus faltante en envio de la orden'),
(7, 4, 'Prueba 5 cambio bd', 'Problema con numero de contacto del cliente.'),
(7, 6, 'Prueba 7 cambio bd', 'Problema con numero de contacto del cliente.'),
(7, 7, 'Prueba 1 Instancia', 'Problema con numero de contacto del cliente.'),
(8, 9, 'Prueba 3 Instancia', 'La direccion del cliente no coincide con el ticket'),
(10, 5, 'Prueba 6 cambio bd', 'Direccion de envio: '),
(10, 10, 'Prueba 4 Instancia', 'Direccion de envio: '),
(11, 9, 'Prueba 3 Instancia', 'Telefono de cliente:');

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
(9, 'Nubed', 0),
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

--
-- Volcado de datos para la tabla `ticket`
--

INSERT INTO `ticket` (`Id_Ticket`, `Id_Procedencia`, `Id_Tipo_Incidencia`, `Id_Prioridad`, `Fecha_Inicio`, `Fecha_Fin`, `Descripcion`, `Asunto`, `Archivado`, `Id_Estado`) VALUES
(2, 12, 1, 1, '2022-04-27 13:47:09', NULL, 'Prueba 3 cambio bd', 'Prueba 3 cambio bd', 0, 1),
(3, 10, 6, 1, '2022-04-27 18:11:39', NULL, 'Prueba 4 cambio bd', 'Prueba 4 cambio bd', 0, 2),
(4, 8, 4, 1, '2022-04-27 18:49:51', NULL, 'Prueba 5 cambio bd', 'Prueba 5 cambio bd', 1, 3),
(5, 2, 8, 1, '2022-04-28 11:04:15', NULL, 'Prueba 6 cambio bd', 'Prueba 6 cambio bd', 0, 5),
(6, 12, 4, 1, '2022-04-28 17:51:35', '2022-04-29 08:27:24', 'Prueba 7 cambio bd', 'Prueba 7 cambio bd', 0, 4),
(7, 4, 4, 1, '2022-04-29 08:25:39', NULL, 'Prueba 1 Instancia', 'Prueba 1 Instancia', 0, 1),
(8, 10, 1, 1, '2022-04-29 08:26:06', '2022-04-29 08:27:35', 'Prueba 2 Instancia', 'Prueba 2 Instancia', 0, 6),
(9, 12, 11, 1, '2022-04-29 08:26:45', '2022-04-29 08:27:45', 'Prueba 3 Instancia', 'Prueba 3 Instancia', 0, 6),
(10, 10, 8, 1, '2022-04-29 08:28:43', NULL, 'Prueba 4 Instancia', 'Prueba 4 Instancia', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_incidencia`
--

CREATE TABLE `tipo_incidencia` (
  `Id_Tipo_Incidencia` int(7) NOT NULL,
  `Nombre_Tipo_Incidencia` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `SLA` int(3) NOT NULL,
  `Visibilidad_Tipo_Incidencia` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_incidencia`
--

INSERT INTO `tipo_incidencia` (`Id_Tipo_Incidencia`, `Nombre_Tipo_Incidencia`, `SLA`, `Visibilidad_Tipo_Incidencia`) VALUES
(1, 'Logo no se visualiza', 7, 1),
(2, 'Problema con boton', 4, 1),
(3, 'Pagina no carga', 9, 1),
(4, 'Datos no se envian', 6, 1),
(5, 'No puedo hacer login', 6, 1),
(6, 'Formulario no aparece', 7, 1),
(7, 'Problema con pedido', 9, 1),
(8, 'Problema en BD', 9, 1),
(9, 'Error de autentificacion', 6, 1),
(10, 'Nuevo post no se publica', 9, 1),
(11, 'Link roto', 6, 1),
(12, 'Problemas de acceso', 2, 1),
(13, 'Brecha de seguridad Cambio', 2, 1),
(14, 'Nueva Categoria', 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_incidencia_pregunta`
--

CREATE TABLE `tipo_incidencia_pregunta` (
  `Id_Pregunta` int(7) NOT NULL,
  `Id_Tipo_Incidencia` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_incidencia_pregunta`
--

INSERT INTO `tipo_incidencia_pregunta` (`Id_Pregunta`, `Id_Tipo_Incidencia`) VALUES
(4, 1),
(9, 2),
(5, 4),
(7, 4),
(9, 5),
(1, 7),
(6, 7),
(8, 7),
(1, 8),
(5, 8),
(10, 8),
(6, 9),
(2, 10),
(8, 10),
(10, 10),
(8, 11),
(11, 11),
(1, 13),
(4, 13),
(9, 13),
(11, 13),
(12, 13);

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
  `URL_Foto` varchar(255) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id_Usuario`, `Id_Rol`, `Nombre_Usuario`, `Login`, `Contraseña`, `URL_Foto`) VALUES
(1, 1, 'Rodrigo M', 'ro@zeb.mx', '$2a$12$wVKI2Xd8aYOGxIxQehjx2OmwhUD.C7Oz4LM19A9Uhxn4lt/mw3/Au', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(2, 3, 'MAURICIO', 'mau@zeb.mx', '$2a$12$WvpeezaxYMQqKMajonPUdO7nHNF4Bc04AbuaYLVDShAguuvpo5bAC', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg');

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
-- Volcado de datos para la tabla `usuario_ticket`
--

INSERT INTO `usuario_ticket` (`Id_Usuario`, `Id_Ticket`, `Cargo`, `Fecha_Asignacion`) VALUES
(1, 2, 'Creador', '2022-04-27 13:47:09'),
(1, 3, 'Creador', '2022-04-27 18:11:39'),
(1, 3, 'Encargado', '2022-04-29 08:27:05'),
(1, 4, 'Creador', '2022-04-27 18:49:51'),
(1, 4, 'Encargado', '2022-04-29 08:27:13'),
(1, 5, 'Creador', '2022-04-28 11:04:16'),
(1, 5, 'Encargado', '2022-04-29 08:28:17'),
(1, 6, 'Creador', '2022-04-28 17:51:35'),
(1, 6, 'Encargado', '2022-04-29 08:27:24'),
(1, 7, 'Creador', '2022-04-29 08:25:39'),
(1, 8, 'Creador', '2022-04-29 08:26:06'),
(1, 8, 'Encargado', '2022-04-29 08:27:35'),
(1, 9, 'Creador', '2022-04-29 08:26:45'),
(1, 9, 'Encargado', '2022-04-29 08:27:45'),
(1, 10, 'Creador', '2022-04-29 08:28:43');

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
  MODIFY `Id_Estado` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `Id_Pregunta` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
  MODIFY `Id_Rol` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `ticket`
--
ALTER TABLE `ticket`
  MODIFY `Id_Ticket` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipo_incidencia`
--
ALTER TABLE `tipo_incidencia`
  MODIFY `Id_Tipo_Incidencia` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id_Usuario` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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