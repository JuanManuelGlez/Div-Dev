-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-04-2022 a las 00:47:38
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

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`Id_Usuario`, `Id_Ticket`, `Fecha_y_Hora`, `Texto_Comentario`, `URL_Archivo`) VALUES
(1, 7, '2021-02-01 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(2, 17, '2021-02-02 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(3, 21, '2021-02-03 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(4, 2, '2021-02-04 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(5, 5, '2021-02-05 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(6, 6, '2021-02-06 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(7, 21, '2021-02-07 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(8, 37, '2021-02-08 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(9, 24, '2021-02-09 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(10, 1, '2022-04-13 17:30:41', 'Prueba', ''),
(10, 2, '2022-04-13 15:54:15', 'prueba', ''),
(10, 3, '2022-04-13 15:54:33', 'prueba', ''),
(10, 3, '2022-04-13 15:54:39', 'prueba 1', ''),
(10, 15, '2021-02-10 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(11, 25, '2021-02-11 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(12, 5, '2021-02-12 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(13, 11, '2021-02-13 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(14, 6, '2021-02-14 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(15, 10, '2021-02-15 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(16, 8, '2021-02-16 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(17, 31, '2021-02-17 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(18, 18, '2021-02-18 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(19, 39, '2021-02-19 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(20, 22, '2021-02-20 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(21, 15, '2021-02-21 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(22, 47, '2021-02-22 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(23, 24, '2021-02-23 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(24, 35, '2021-02-24 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(25, 47, '2021-02-25 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(26, 48, '2021-02-26 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(27, 4, '2021-02-27 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(28, 48, '2021-02-28 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(29, 7, '2021-03-01 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(30, 34, '2021-03-02 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(31, 19, '2021-03-03 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(32, 4, '2021-03-04 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(33, 36, '2021-03-05 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(34, 20, '2021-03-06 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(35, 5, '2021-03-07 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(36, 30, '2021-03-08 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(37, 21, '2021-03-09 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(38, 42, '2021-03-10 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(39, 7, '2021-03-11 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(40, 39, '2021-03-12 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(41, 13, '2021-03-13 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(42, 25, '2021-03-14 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(43, 21, '2021-03-15 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(44, 38, '2021-03-16 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(45, 13, '2021-03-17 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(46, 3, '2021-03-18 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(47, 24, '2021-03-19 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(48, 6, '2021-03-20 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(49, 30, '2021-03-21 00:00:00', 'Foto prueba', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(50, 50, '2021-03-22 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(51, 42, '2021-03-23 00:00:00', 'Foto Error', 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'),
(1000059, 201, '2022-04-22 09:18:57', 'Nuevo', '');

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
(1, 4, '2021-02-28 00:00:00'),
(1, 9, '2021-02-24 00:00:00'),
(1, 16, '2021-03-17 00:00:00'),
(1, 19, '2021-02-01 00:00:00'),
(1, 26, '2021-02-19 00:00:00'),
(1, 27, '2021-03-16 00:00:00'),
(1, 42, '2021-02-16 00:00:00'),
(1, 43, '2021-03-09 00:00:00'),
(1, 49, '2021-03-03 00:00:00'),
(1, 55, '2021-02-18 00:00:00'),
(1, 59, '2021-02-07 00:00:00'),
(1, 201, '2022-04-08 09:09:57'),
(1, 202, '2022-04-11 12:08:05'),
(1, 203, '2022-04-11 12:10:31'),
(1, 206, '2022-04-11 12:25:54'),
(1, 207, '2022-04-11 13:12:14'),
(1, 208, '2022-04-12 10:59:20'),
(1, 209, '2022-04-12 12:08:46'),
(1, 210, '2022-04-12 12:27:49'),
(1, 211, '2022-04-12 12:31:23'),
(1, 212, '2022-04-12 12:43:06'),
(1, 213, '2022-04-13 13:22:48'),
(1, 214, '2022-04-13 13:57:59'),
(1, 215, '2022-04-13 16:55:43'),
(1, 216, '2022-04-13 17:19:27'),
(1, 217, '2022-04-18 12:51:46'),
(1, 218, '2022-04-22 09:15:24'),
(2, 1, '2022-04-08 09:07:38'),
(2, 1, '2022-04-12 11:04:21'),
(2, 1, '2022-04-12 15:46:30'),
(2, 1, '2022-04-13 17:12:45'),
(2, 9, '2021-03-12 00:00:00'),
(2, 10, '2021-02-09 00:00:00'),
(2, 22, '2021-02-27 00:00:00'),
(2, 24, '2021-03-04 00:00:00'),
(2, 25, '2021-02-06 00:00:00'),
(2, 26, '2021-03-20 00:00:00'),
(2, 35, '2021-02-21 00:00:00'),
(2, 36, '2021-03-10 00:00:00'),
(2, 38, '2021-02-05 00:00:00'),
(2, 41, '2021-02-13 00:00:00'),
(2, 46, '2021-02-04 00:00:00'),
(2, 54, '2021-02-14 00:00:00'),
(2, 57, '2021-02-03 00:00:00'),
(2, 209, '2022-04-22 08:58:21'),
(2, 215, '2022-04-13 16:56:10'),
(3, 1, '2022-04-12 14:22:44'),
(3, 1, '2022-04-13 17:01:42'),
(3, 5, '2021-02-17 00:00:00'),
(3, 7, '2022-04-11 13:29:13'),
(3, 9, '2021-02-02 00:00:00'),
(3, 11, '2021-02-22 00:00:00'),
(3, 18, '2021-02-25 00:00:00'),
(3, 19, '2021-03-05 00:00:00'),
(3, 22, '2021-03-11 00:00:00'),
(3, 26, '2021-03-07 00:00:00'),
(3, 32, '2021-03-14 00:00:00'),
(3, 37, '2021-03-13 00:00:00'),
(3, 49, '2021-03-01 00:00:00'),
(3, 52, '2021-02-08 00:00:00'),
(3, 217, '2022-04-22 09:01:59'),
(4, 1, '2022-04-13 17:01:51'),
(4, 12, '2021-03-15 00:00:00'),
(4, 20, '2021-02-23 00:00:00'),
(4, 22, '2021-02-11 00:00:00'),
(4, 27, '2021-02-10 00:00:00'),
(4, 32, '2021-03-18 00:00:00'),
(4, 41, '2021-03-02 00:00:00'),
(4, 42, '2021-02-26 00:00:00'),
(4, 59, '2021-02-12 00:00:00'),
(5, 1, '2022-04-08 09:02:01'),
(5, 1, '2022-04-12 10:53:48'),
(5, 216, '2022-04-13 17:21:47'),
(9, 1, '2022-04-19 12:14:14'),
(9, 212, '2022-04-22 08:58:52');

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
('4th generation', 0),
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
('4th generation', 32),
('4th generation', 212),
('Abilities', 215),
('ability', 25),
('ability', 212),
('ability', 214),
('ability', 215),
('algorithm', 12),
('algorithm', 212),
('algorithm', 214),
('algorithm', 215),
('algorithm', 216),
('Ameliorated', 60),
('Ameliorated', 201),
('Ameliorated', 216),
('application', 5),
('architecture', 44),
('benchmark', 55),
('benchmark', 218),
('Bug', 216),
('Bug 2', 216),
('Cloned', 36),
('Cloned', 218),
('coherent', 4),
('Compatible', 35),
('Configurable', 22),
('content-based', 38),
('Cross-group', 42),
('Cross-platform', 19),
('database', 33),
('discrete', 56),
('eco-centric', 24),
('empowering', 14),
('encompassing', 22),
('Ergonomic', 32),
('Extended', 8),
('exuding', 21),
('firmware', 23),
('hardware', 21),
('homogeneous', 48),
('Implemented', 35),
('Intuitive', 33),
('knowledge user', 36),
('mobile', 51),
('mobile', 217),
('monitoring', 10),
('Multi-tiered', 2),
('Nueva', 213),
('Nueva Label', 214),
('Nueva Label 2', 214),
('Open-source', 40),
('Optimized', 31),
('page', 217),
('portal', 33),
('pruba', 201),
('reciprocal', 24),
('Robust', 41),
('software', 28),
('static', 1),
('superstructure', 8),
('systemic', 13),
('tangible', 27),
('task-force', 40),
('Triple-buffered', 43),
('workforce', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `Id_Pregunta` int(7) NOT NULL,
  `Texto_Pregunta` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Visibilidad_Pregunta` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`Id_Pregunta`, `Texto_Pregunta`, `Visibilidad_Pregunta`) VALUES
(1, 'SKU:', b'1'),
(2, 'Motivo:', b'1'),
(3, 'Colocar IAO en shipping (si/no):', b'1'),
(4, 'Colocar IAO en payment (si/no):', b'1'),
(5, 'Estatus faltante en envio de la orden', b'1'),
(6, 'Estatus faltantes en el pago de la orden', b'1'),
(7, 'Problema con numero de contacto del cliente.', b'1'),
(8, 'La direccion del cliente no coincide con el ticket', b'1'),
(9, 'No se envió el correo de confirmacion', b'1'),
(10, 'Direccion de envio: ', b'1'),
(11, 'Telefono de cliente:', b'1'),
(12, 'Nombre del cliente que reporto incidencia:', b'1'),
(13, 'SLA:', b'1'),
(14, 'Dia en el que se espera la entrega:', b'1'),
(15, 'Numero de error:', b'1'),
(16, 'Pagina de error:', b'1'),
(17, 'Motivo de devolucion:', b'1'),
(18, 'comentarios extras:', b'1'),
(19, 'Pedido no entregado:', b'1'),
(20, 'Articulo dañado:', b'1');

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
(1, 1, 'URB60-9', 'SKU:'),
(1, 21, 'URB60-9', 'SKU:'),
(1, 41, 'URB60-9', 'SKU:'),
(1, 209, 'prueba 1.1', 'SKU:'),
(1, 210, 'prueba 1.1', 'SKU:'),
(1, 211, '', 'SKU:'),
(1, 212, '', 'SKU:'),
(1, 213, 'prueba 1.1', 'SKU:'),
(1, 214, '', 'SKU:'),
(1, 216, 'prueba 1.1', 'SKU:'),
(2, 1, 'prueba', 'Motivo:'),
(2, 2, 'Incomodo el colchon', 'Motivo:'),
(2, 22, 'Incomodo el colchon', 'Motivo:'),
(2, 42, 'Incomodo el colchon', 'Motivo:'),
(3, 3, 'si', 'Colocar IAO en shipping (si/no):'),
(3, 23, 'si', 'Colocar IAO en shipping (si/no):'),
(3, 43, 'si', 'Colocar IAO en shipping (si/no):'),
(4, 4, 'no', 'Colocar IAO en payment (si/no):'),
(4, 24, 'no', 'Colocar IAO en payment (si/no):'),
(4, 44, 'no', 'Colocar IAO en payment (si/no):'),
(5, 1, '', 'Estatus faltante en envio de la orden'),
(5, 5, 'El estatus fue incorrecto', 'Estatus faltante en envio de la orden'),
(5, 25, 'El estatus fue incorrecto', 'Estatus faltante en envio de la orden'),
(5, 45, 'El estatus fue incorrecto', 'Estatus faltante en envio de la orden'),
(5, 215, 'prueba 1.1', 'Estatus faltante en envio de la orden'),
(6, 6, 'Estatus correguidos', 'Estatus faltantes en el pago de la orden'),
(6, 26, 'Estatus correguidos', 'Estatus faltantes en el pago de la orden'),
(6, 46, 'Estatus correguidos', 'Estatus faltantes en el pago de la orden'),
(6, 209, 'prueba 1.1', 'Estatus faltantes en el pago de la orden'),
(6, 210, 'prueba 1.1', 'Estatus faltantes en el pago de la orden'),
(6, 211, '', 'Estatus faltantes en el pago de la orden'),
(6, 212, '', 'Estatus faltantes en el pago de la orden'),
(6, 213, 'prueba 1.1', 'Estatus faltantes en el pago de la orden'),
(6, 214, '', 'Estatus faltantes en el pago de la orden'),
(6, 216, 'prueba 1.2', 'Estatus faltantes en el pago de la orden'),
(7, 7, 'Contactamos al cliente por otro medio', 'Problema con numero de contacto del cliente.'),
(7, 27, 'Contactamos al cliente por otro medio', 'Problema con numero de contacto del cliente.'),
(7, 47, 'Contactamos al cliente por otro medio', 'Problema con numero de contacto del cliente.'),
(7, 215, 'prueba 1.2', 'Problema con numero de contacto del cliente.'),
(8, 1, 'prueba', 'La direccion del cliente no coincide con el ticket'),
(8, 8, 'Contactar al cliente para solucionar el problema', 'La direccion del cliente no coincide con el ticket'),
(8, 28, 'Contactar al cliente para solucionar el problema', 'La direccion del cliente no coincide con el ticket'),
(8, 48, 'Contactar al cliente para solucionar el problema', 'La direccion del cliente no coincide con el ticket'),
(8, 201, 'prueba', 'La direccion del cliente no coincide con el ticket'),
(8, 209, 'prueba 1.1', 'La direccion del cliente no coincide con el ticket'),
(8, 210, 'prueba 1.1', 'La direccion del cliente no coincide con el ticket'),
(8, 211, '', 'La direccion del cliente no coincide con el ticket'),
(8, 212, '', 'La direccion del cliente no coincide con el ticket'),
(8, 213, '', 'La direccion del cliente no coincide con el ticket'),
(8, 214, '', 'La direccion del cliente no coincide con el ticket'),
(8, 216, 'prueba 1.3', 'La direccion del cliente no coincide con el ticket'),
(9, 9, 'El correo fue reenviado', 'No se envió el correo de confirmacion'),
(9, 29, 'El correo fue reenviado', 'No se envió el correo de confirmacion'),
(9, 49, 'El correo fue reenviado', 'No se envió el correo de confirmacion'),
(9, 218, 'prueba', 'No se envió el correo de confirmacion'),
(10, 1, 'prueba', 'Direccion de envio: '),
(10, 10, 'Los rojos', 'Direccion de envio: '),
(10, 30, 'Los rojos', 'Direccion de envio: '),
(10, 50, 'Los rojos', 'Direccion de envio: '),
(11, 11, '4616666666', 'Telefono de cliente:'),
(11, 31, '4616666666', 'Telefono de cliente:'),
(11, 51, '4616666666', 'Telefono de cliente:'),
(11, 201, 'prueba', 'Telefono de cliente:'),
(12, 12, 'Juan Manuel Gonzalez', 'Nombre del cliente que reporto incidencia:'),
(12, 32, 'Juan Manuel Gonzalez', 'Nombre del cliente que reporto incidencia:'),
(12, 52, 'Juan Manuel Gonzalez', 'Nombre del cliente que reporto incidencia:'),
(13, 13, '7', 'SLA:'),
(13, 33, '7', 'SLA:'),
(13, 53, '7', 'SLA:'),
(14, 14, 'Lunes 14 de marzo de 2022', 'Dia en el que se espera la entrega:'),
(14, 34, 'Lunes 14 de marzo de 2022', 'Dia en el que se espera la entrega:'),
(14, 54, 'Lunes 14 de marzo de 2022', 'Dia en el que se espera la entrega:'),
(15, 15, '420-69', 'Numero de error:'),
(15, 35, '420-69', 'Numero de error:'),
(15, 55, '420-69', 'Numero de error:'),
(16, 16, 'Backlog', 'Pagina de error:'),
(16, 36, 'Backlog', 'Pagina de error:'),
(16, 56, 'Backlog', 'Pagina de error:'),
(17, 17, 'Muy dura almohada', 'Motivo de devolucion:'),
(17, 37, 'Muy dura almohada', 'Motivo de devolucion:'),
(17, 57, 'Muy dura almohada', 'Motivo de devolucion:'),
(18, 18, 'El ticket es facil de resolver', 'comentarios extras:'),
(18, 38, 'El ticket es facil de resolver', 'comentarios extras:'),
(18, 58, 'El ticket es facil de resolver', 'comentarios extras:'),
(19, 19, 'Almohada Luna', 'Pedido no entregado:'),
(19, 39, 'Almohada Luna', 'Pedido no entregado:'),
(19, 59, 'Almohada Luna', 'Pedido no entregado:'),
(20, 20, 'Almohada Luna', 'Articulo dañado:'),
(20, 40, 'Almohada Luna', 'Articulo dañado:'),
(20, 60, 'Almohada Luna', 'Articulo dañado:');

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
  `Archivado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `ticket`
--

INSERT INTO `ticket` (`Id_Ticket`, `Id_Procedencia`, `Id_Tipo_Incidencia`, `Id_Prioridad`, `Fecha_Inicio`, `Fecha_Fin`, `Descripcion`, `Asunto`, `Archivado`) VALUES
(1, 1, 8, 4, '2021-02-03 00:00:00', '2022-04-19 12:14:14', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(2, 9, 1, 1, '2021-02-04 00:00:00', '2021-05-05 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(3, 6, 7, 4, '2021-02-05 00:00:00', '2021-05-06 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(4, 10, 4, 3, '2021-02-06 00:00:00', '2021-05-07 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(5, 10, 4, 4, '2021-02-07 00:00:00', '2021-05-08 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(6, 7, 4, 4, '2021-02-08 00:00:00', '2021-05-09 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(7, 2, 10, 3, '2021-02-09 00:00:00', '2022-04-11 13:29:13', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(8, 8, 1, 2, '2021-02-10 00:00:00', '2021-05-11 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(9, 11, 4, 4, '2021-02-11 00:00:00', '2021-05-12 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(10, 6, 1, 1, '2021-02-12 00:00:00', '2021-05-13 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(11, 5, 7, 2, '2021-02-13 00:00:00', '2021-05-14 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(12, 1, 9, 3, '2021-02-14 00:00:00', '2021-05-15 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(13, 1, 4, 2, '2021-02-15 00:00:00', '2021-05-16 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(14, 2, 10, 2, '2021-02-16 00:00:00', '2021-05-17 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(15, 6, 1, 3, '2021-02-17 00:00:00', '2021-05-18 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(16, 1, 8, 3, '2021-02-18 00:00:00', '2021-05-19 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(17, 7, 12, 3, '2021-02-19 00:00:00', '2021-05-20 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(18, 12, 10, 2, '2021-02-20 00:00:00', '2021-05-21 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(19, 10, 3, 1, '2021-02-21 00:00:00', '2021-05-22 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(20, 1, 9, 1, '2021-02-22 00:00:00', '2021-05-23 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(21, 9, 9, 4, '2021-02-23 00:00:00', '2021-05-24 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(22, 3, 4, 1, '2021-02-24 00:00:00', '2021-05-25 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(23, 9, 8, 1, '2021-02-25 00:00:00', '2021-05-26 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(24, 2, 8, 3, '2021-02-26 00:00:00', '2021-05-27 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(25, 8, 8, 2, '2021-02-27 00:00:00', '2021-05-28 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(26, 7, 5, 3, '2021-02-28 00:00:00', '2021-05-29 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(27, 6, 3, 3, '2021-03-01 00:00:00', '2021-05-30 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(28, 7, 4, 3, '2021-03-02 00:00:00', '2021-05-31 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(29, 9, 12, 1, '2021-03-03 00:00:00', '2021-06-01 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(30, 3, 1, 1, '2021-03-04 00:00:00', '2021-06-02 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(31, 6, 1, 1, '2021-03-05 00:00:00', '2021-06-03 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(32, 9, 5, 4, '2021-03-06 00:00:00', '2021-06-04 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(33, 2, 7, 4, '2021-03-07 00:00:00', '2021-06-05 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(34, 7, 4, 1, '2021-03-08 00:00:00', '2021-06-06 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(35, 2, 7, 4, '2021-03-09 00:00:00', '2021-06-07 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(36, 2, 3, 4, '2021-03-10 00:00:00', '2021-06-08 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(37, 10, 7, 1, '2021-03-11 00:00:00', '2021-06-09 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(38, 7, 13, 2, '2021-03-12 00:00:00', '2021-06-10 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(39, 10, 4, 4, '2021-03-13 00:00:00', '2021-06-11 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(40, 1, 4, 1, '2021-03-14 00:00:00', '2021-06-12 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(41, 10, 2, 2, '2021-03-15 00:00:00', '2021-06-13 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(42, 11, 7, 2, '2021-03-16 00:00:00', '2021-06-14 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(43, 7, 7, 4, '2021-03-17 00:00:00', '2021-06-15 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(44, 3, 13, 2, '2021-03-18 00:00:00', '2021-06-16 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(45, 10, 12, 2, '2021-03-19 00:00:00', '2021-06-17 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(46, 10, 7, 2, '2021-03-20 00:00:00', '2021-06-18 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(47, 10, 13, 4, '2021-03-21 00:00:00', '2021-06-19 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(48, 11, 4, 2, '2021-03-22 00:00:00', '2021-06-20 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(49, 2, 1, 1, '2021-03-23 00:00:00', '2021-06-21 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(50, 2, 2, 4, '2021-03-24 00:00:00', '2021-06-22 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(51, 10, 13, 2, '2021-03-25 00:00:00', '2021-06-23 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(52, 6, 4, 4, '2021-03-26 00:00:00', '2021-06-24 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(53, 3, 3, 4, '2021-03-27 00:00:00', '2021-06-25 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(54, 6, 4, 4, '2021-03-28 00:00:00', '2021-06-26 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(55, 11, 2, 4, '2021-03-29 00:00:00', '2021-06-27 00:00:00', 'div duv div dav', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(56, 8, 6, 1, '2021-03-30 00:00:00', '2021-06-28 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(57, 9, 6, 1, '2021-03-31 00:00:00', '2021-06-29 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(58, 6, 7, 2, '2021-04-01 00:00:00', '2021-06-30 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'div duv div dav', 1),
(59, 1, 9, 3, '2021-04-02 00:00:00', '2021-07-01 00:00:00', 'Descripci?n expl?cita del problema (importante colocar si es error del sistema o se equivocaron durante el proceso): Hola equipo. me podr?an ayudar con la siguiente orden de mercad o libre. se encuentra con estatus Assignation Pending y no nos es posible avanzarlas a picking and packing y realizar las entregas. Orden: 2111162807501-5023248646 Nos podr?an ayudar a revisar las ordenes y modificarlas para que pueda seguir su proceso normal y pueda ser entregado al cliente. Adjunto gu?a por si se perdiera en el proceso. Gracias!', 'Avanzar ?rden MELI Assignation Pending 2111162807501', 1),
(60, 10, 9, 3, '2021-04-03 00:00:00', '2021-07-02 00:00:00', 'div duv div dav', 'div duv div dav', 1),
(201, 9, 11, 2, '2022-04-08 09:09:57', NULL, 'prueba', 'prueba', 0),
(202, 9, 7, 1, '2022-04-11 12:08:05', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(203, 9, 7, 1, '2022-04-11 12:10:31', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(206, 9, 4, 1, '2022-04-11 12:25:54', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 1),
(207, 9, 7, 1, '2022-04-11 13:12:14', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'La plataforma no deja que se haga un pedido ya que no hay un numero exterior de la propiedad pero para la direccion completa se necesita un numero', 0),
(208, 9, 7, 1, '2022-04-12 10:59:20', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(209, 9, 7, 1, '2022-04-12 12:08:46', '2022-04-22 08:58:21', 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(210, 9, 7, 1, '2022-04-12 12:27:49', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(211, 9, 7, 1, '2022-04-12 12:31:23', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(212, 9, 7, 1, '2022-04-12 12:43:06', '2022-04-22 08:58:52', 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'La plataforma no deja que se haga un pedido ya que', 0),
(213, 9, 7, 1, '2022-04-13 13:22:48', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(214, 9, 7, 1, '2022-04-13 13:57:59', NULL, 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(215, 7, 4, 3, '2022-04-13 16:55:43', '2022-04-13 16:56:10', 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(216, 5, 7, 2, '2022-04-13 17:19:27', '2022-04-13 17:21:47', 'El sistema no valida que la dirección del usuario sea correcta o este en el rango de distancia aceptado.', 'Plataforma no valida dirección', 0),
(217, 6, 3, 4, '2022-04-18 12:51:46', '2022-04-22 09:01:59', 'Intento loggearme, pero la pagina no carga', 'El login no carga', 0),
(218, 10, 2, 3, '2022-04-22 09:15:24', NULL, 'descripcion', 'Nuvo ticket', 0);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `ticket_archivo_magia`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `ticket_archivo_magia` (
`Id_Ticket` int(7)
,`Archivado` tinyint(1)
,`Id_Estado` int(7)
,`Fecha_Inicio` datetime
,`Id_Prioridad` int(7)
,`Asunto` varchar(250)
,`Fecha_y_Hora` datetime
,`Descripcion` varchar(1000)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `ticket_estado_magia`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `ticket_estado_magia` (
`Id_Ticket` int(7)
,`Id_Estado` int(7)
,`Fecha_Inicio` datetime
,`Id_Prioridad` int(7)
,`Asunto` varchar(250)
,`Fecha_y_Hora` datetime
);

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
(1, 3, 'Chrysler Mountain', 'chryslermountain@zeb.mx', 'K58BlpPycJS', 'http://dummyimage.com/245x100.png/dddddd/000000'),
(2, 3, 'Padraig Stovin', 'padraigstovin@zeb.mx', 'Cij4ddu2n', 'http://dummyimage.com/180x100.png/cc0000/ffffff'),
(3, 4, 'Tiffanie Gerhold', 'tiffaniegerhold@zeb.mx', 'QULuHRZlo', 'http://dummyimage.com/157x100.png/cc0000/ffffff'),
(4, 2, 'Spencer Jandak', 'spencerjandak@zeb.mx', 'e7Zc6xL', 'http://dummyimage.com/185x100.png/5fa2dd/ffffff'),
(5, 1, 'Andras Ellinor', 'andrasellinor@zeb.mx', 'nLXCn2', 'http://dummyimage.com/202x100.png/dddddd/000000'),
(6, 4, 'Clevey Heersema', 'cleveyheersema@zeb.mx', 'mlTwVU6cW', 'http://dummyimage.com/195x100.png/ff4444/ffffff'),
(7, 1, 'Tan Roscow', 'tanroscow@zeb.mx', 'dG3j97ayOtQ', 'http://dummyimage.com/240x100.png/dddddd/000000'),
(8, 1, 'Marlo Scinelli', 'marloscinelli@zeb.mx', '7fGWsBqD1H', 'http://dummyimage.com/166x100.png/5fa2dd/ffffff'),
(9, 4, 'Ruthe Kegley', 'ruthekegley@zeb.mx', '0foWyy', 'http://dummyimage.com/237x100.png/cc0000/ffffff'),
(10, 2, 'Kandace Muldrew', 'kandacemuldrew@zeb.mx', 'twM9Hp', 'http://dummyimage.com/168x100.png/ff4444/ffffff'),
(11, 4, 'Helge Macak', 'helgemacak@zeb.mx', 'WVjeeeq2Qn', 'http://dummyimage.com/119x100.png/ff4444/ffffff'),
(12, 2, 'Andrew Lyddon', 'andrewlyddon@zeb.mx', 'p2Z1U1q', 'http://dummyimage.com/170x100.png/ff4444/ffffff'),
(13, 3, 'Ciro Caird', 'cirocaird@zeb.mx', 'Dyhhv2HWd', 'http://dummyimage.com/144x100.png/cc0000/ffffff'),
(14, 1, 'Culver Creenan', 'culvercreenan@zeb.mx', 'lHIRyRirKhT', 'http://dummyimage.com/228x100.png/ff4444/ffffff'),
(15, 2, 'Sibelle Dur', 'sibelledur@zeb.mx', 'skwMJeqeiuQ', 'http://dummyimage.com/228x100.png/5fa2dd/ffffff'),
(16, 3, 'Wendall Leicester', 'wendallleicester@zeb.mx', 'eZaZRm', 'http://dummyimage.com/124x100.png/dddddd/000000'),
(17, 4, 'Devlin Marjanovic', 'devlinmarjanovic@zeb.mx', 'r7WnBR', 'http://dummyimage.com/212x100.png/cc0000/ffffff'),
(18, 1, 'Niki Sylvaine', 'nikisylvaine@zeb.mx', 'e2X0u15j', 'http://dummyimage.com/117x100.png/5fa2dd/ffffff'),
(19, 2, 'Brittni Gadie', 'brittnigadie@zeb.mx', '4HB5w5', 'http://dummyimage.com/160x100.png/dddddd/000000'),
(20, 1, 'Udell Swalteridge', 'udellswalteridge@zeb.mx', '47IVfa6Xuyoe', 'http://dummyimage.com/175x100.png/cc0000/ffffff'),
(21, 2, 'Jermayne Marsland', 'jermaynemarsland@zeb.mx', 'xAD3ft0ifnk2', 'http://dummyimage.com/243x100.png/cc0000/ffffff'),
(22, 4, 'Danni Erat', 'dannierat@zeb.mx', 'yySy8fLK7Rj', 'http://dummyimage.com/100x100.png/cc0000/ffffff'),
(23, 2, 'Auria Klainer', 'auriaklainer@zeb.mx', 'vbMqkeUi', 'http://dummyimage.com/165x100.png/ff4444/ffffff'),
(24, 4, 'Gothart Martinie', 'gothartmartinie@zeb.mx', 'tktoaZ2', 'http://dummyimage.com/136x100.png/dddddd/000000'),
(25, 3, 'Maighdiln Giovannetti', 'maighdilngiovannetti@zeb.mx', 'JWi2g5EyZY5', 'http://dummyimage.com/201x100.png/5fa2dd/ffffff'),
(26, 3, 'Myrle Rainey', 'myrlerainey@zeb.mx', 'fMve0Nkt', 'http://dummyimage.com/160x100.png/ff4444/ffffff'),
(27, 3, 'Al Safell', 'alsafell@zeb.mx', 'TpkFhVKR0F1', 'http://dummyimage.com/127x100.png/cc0000/ffffff'),
(28, 3, 'Del Carloni', 'delcarloni@zeb.mx', '7WnCGg2uMmV', 'http://dummyimage.com/107x100.png/ff4444/ffffff'),
(29, 2, 'Cissiee Baldacco', 'cissieebaldacco@zeb.mx', 'ixKOWj3vA', 'http://dummyimage.com/159x100.png/cc0000/ffffff'),
(30, 3, 'Amandi Alldis', 'amandialldis@zeb.mx', 'CtYhoBezlZ', 'http://dummyimage.com/172x100.png/dddddd/000000'),
(31, 2, 'Caria Piccard', 'cariapiccard@zeb.mx', 'z1WXH2xU', 'http://dummyimage.com/181x100.png/ff4444/ffffff'),
(32, 4, 'Berty Blakeston', 'bertyblakeston@zeb.mx', 'CM992IbFV', 'http://dummyimage.com/151x100.png/ff4444/ffffff'),
(33, 2, 'Roxanna Duplain', 'roxannaduplain@zeb.mx', 'dCKs59fhWp6', 'http://dummyimage.com/156x100.png/5fa2dd/ffffff'),
(34, 4, 'Jackie Mesnard', 'jackiemesnard@zeb.mx', 'DFT9nRAnmJX5', 'http://dummyimage.com/239x100.png/cc0000/ffffff'),
(35, 2, 'Lotte Yedy', 'lotteyedy@zeb.mx', 'gl8ZjbD', 'http://dummyimage.com/136x100.png/ff4444/ffffff'),
(36, 3, 'Odetta Blandamore', 'odettablandamore@zeb.mx', 'yjxeCeO0uhX', 'http://dummyimage.com/141x100.png/5fa2dd/ffffff'),
(37, 1, 'Celisse Grossier', 'celissegrossier@zeb.mx', 'nyUj6HNiUW', 'http://dummyimage.com/131x100.png/cc0000/ffffff'),
(38, 2, 'Forbes Moyse', 'forbesmoyse@zeb.mx', 'fSsW01', 'http://dummyimage.com/241x100.png/dddddd/000000'),
(39, 1, 'Silvana Bremen', 'silvanabremen@zeb.mx', 'tYNZ0gZb2', 'http://dummyimage.com/236x100.png/dddddd/000000'),
(40, 4, 'Carmon Brittan', 'carmonbrittan@zeb.mx', 'C92ms7ws', 'http://dummyimage.com/176x100.png/dddddd/000000'),
(41, 4, 'Maia Favela', 'maiafavela@zeb.mx', '93YBDiBdzfG', 'http://dummyimage.com/213x100.png/dddddd/000000'),
(42, 1, 'Meris Hargrove', 'merishargrove@zeb.mx', 'BYnOLfqnRaK', 'http://dummyimage.com/215x100.png/ff4444/ffffff'),
(43, 4, 'Aubree Yellep', 'aubreeyellep@zeb.mx', 'L2JpncpYoj', 'http://dummyimage.com/218x100.png/ff4444/ffffff'),
(44, 1, 'Terrill Signoret', 'terrillsignoret@zeb.mx', 'g6z6qod', 'http://dummyimage.com/243x100.png/5fa2dd/ffffff'),
(45, 1, 'Lenard Lambirth', 'lenardlambirth@zeb.mx', 'UX3C6Mps', 'http://dummyimage.com/209x100.png/5fa2dd/ffffff'),
(46, 2, 'Yvon Haskins', 'yvonhaskins@zeb.mx', 'v4IvPQT5IbN', 'http://dummyimage.com/186x100.png/cc0000/ffffff'),
(47, 4, 'Elliot Carlisle', 'elliotcarlisle@zeb.mx', 's0x2WbFRH2', 'http://dummyimage.com/239x100.png/ff4444/ffffff'),
(48, 4, 'Kerrin Medway', 'kerrinmedway@zeb.mx', 'SRtePQIi', 'http://dummyimage.com/169x100.png/5fa2dd/ffffff'),
(49, 2, 'Cecile Yuill', 'cecileyuill@zeb.mx', 'VTome5ZF', 'http://dummyimage.com/118x100.png/dddddd/000000'),
(50, 4, 'Ginevra Bellefant', 'ginevrabellefant@zeb.mx', 'u6flhxcv9C7', 'http://dummyimage.com/190x100.png/cc0000/ffffff'),
(51, 1, 'Cristin Lamperti', 'cristinlamperti@zeb.mx', 'EILQEwQ', 'http://dummyimage.com/148x100.png/ff4444/ffffff'),
(1000051, 4, 'romugue', 'aaa@zeb.mx', '1234', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000052, 4, 'romugue', 'aaa@zeb.mx', '1234', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000053, 4, 'asdasd', 'asdasdasd', 'asdasd', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000054, 4, 'sssss', 'adadadadad', '$2a$12$mxlVARAzR9J68', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000055, 4, 'asdddsadsadsa', 'dsadasdasadsads', '$2a$12$Z260unRQpmHPi', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000056, 4, 'MAURICIO', 'ergwew', '$2a$12$LlGeUaiMCi.9Z8aYs/zsju7VWJahVoc2wrEdEsx77JgPr.1EE6Oue', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000057, 4, 'egwe', 'dvyjs', '$2a$12$CZ.JBD8EcwU6/bDQ/P7aZufmd8S9IHfNuSf776nXeq.zroJ/MAOvi', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000058, 4, 'MAURICIO', 'mau@zeb.mx', '$2a$12$tkoxYmRsM8bJUzJRnRyf0uA3tV5isVdLVUcSQLDBz321I5F2KjViy', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'),
(1000059, 1, 'Rodrigo M', 'ro@zeb.mx', '$2a$12$wVKI2Xd8aYOGxIxQehjx2OmwhUD.C7Oz4LM19A9Uhxn4lt/mw3/Au', 'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg');

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
(1, 9, 'Encargado', '2021-03-20 00:00:00'),
(1, 33, 'T?cnico', '2021-02-03 00:00:00'),
(3, 13, 'Encargado', '2021-03-16 00:00:00'),
(4, 42, 'T?cnico', '2021-02-14 00:00:00'),
(6, 24, 'T?cnico', '2021-02-15 00:00:00'),
(6, 50, 'T?cnico', '2021-02-02 00:00:00'),
(7, 38, 'T?cnico', '2021-02-19 00:00:00'),
(9, 27, 'T?cnico', '2021-02-09 00:00:00'),
(12, 23, 'T?cnico', '2021-02-25 00:00:00'),
(12, 31, 'Encargado', '2021-03-03 00:00:00'),
(13, 12, 'Encargado', '2021-03-19 00:00:00'),
(14, 5, 'Encargado', '2021-03-21 00:00:00'),
(14, 39, 'T?cnico', '2021-02-12 00:00:00'),
(14, 46, 'Encargado', '2021-03-10 00:00:00'),
(15, 19, 'T?cnico', '2021-02-17 00:00:00'),
(15, 33, 'Encargado', '2021-03-12 00:00:00'),
(18, 20, 'T?cnico', '2021-02-26 00:00:00'),
(18, 32, 'Encargado', '2021-03-07 00:00:00'),
(19, 33, 'T?cnico', '2021-02-10 00:00:00'),
(21, 22, 'T?cnico', '2021-03-01 00:00:00'),
(21, 32, 'Encargado', '2021-03-04 00:00:00'),
(23, 1, 'T?cnico', '2021-02-05 00:00:00'),
(26, 29, 'T?cnico', '2021-02-08 00:00:00'),
(27, 11, 'Encargado', '2021-03-02 00:00:00'),
(29, 32, 'T?cnico', '2021-02-23 00:00:00'),
(32, 6, 'T?cnico', '2021-02-13 00:00:00'),
(32, 41, 'Encargado', '2021-03-05 00:00:00'),
(34, 10, 'Encargado', '2021-03-06 00:00:00'),
(34, 22, 'T?cnico', '2021-02-06 00:00:00'),
(34, 41, 'T?cnico', '2021-02-27 00:00:00'),
(38, 5, 'T?cnico', '2021-02-04 00:00:00'),
(38, 27, 'T?cnico', '2021-02-28 00:00:00'),
(39, 32, 'T?cnico', '2021-02-11 00:00:00'),
(39, 46, 'T?cnico', '2021-02-01 00:00:00'),
(41, 5, 'Encargado', '2021-03-22 00:00:00'),
(42, 38, 'Encargado', '2021-03-13 00:00:00'),
(43, 17, 'T?cnico', '2021-02-24 00:00:00'),
(44, 7, 'Encargado', '2021-03-08 00:00:00'),
(44, 29, 'Encargado', '2021-03-11 00:00:00'),
(44, 43, 'Encargado', '2021-03-09 00:00:00'),
(46, 32, 'T?cnico', '2021-02-18 00:00:00'),
(46, 42, 'T?cnico', '2021-02-07 00:00:00'),
(49, 26, 'Encargado', '2021-03-15 00:00:00'),
(49, 36, 'T?cnico', '2021-02-21 00:00:00'),
(50, 48, 'T?cnico', '2021-02-22 00:00:00'),
(1000059, 13, 'T?cnico', '2021-02-20 00:00:00'),
(1000059, 218, 'Creador', '2022-04-22 09:15:24');

-- --------------------------------------------------------

--
-- Estructura para la vista `ticket_archivo_magia`
--
DROP TABLE IF EXISTS `ticket_archivo_magia`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ticket_archivo_magia`  AS SELECT `t`.`Id_Ticket` AS `Id_Ticket`, `t`.`Archivado` AS `Archivado`, `et`.`Id_Estado` AS `Id_Estado`, `t`.`Fecha_Inicio` AS `Fecha_Inicio`, `t`.`Id_Prioridad` AS `Id_Prioridad`, `t`.`Asunto` AS `Asunto`, `et`.`Fecha_y_Hora` AS `Fecha_y_Hora`, `t`.`Descripcion` AS `Descripcion` FROM (`ticket` `t` join `estado_ticket` `et`) WHERE `et`.`Id_Ticket` = `t`.`Id_Ticket` GROUP BY `t`.`Id_Ticket`, `et`.`Id_Estado` ORDER BY `t`.`Id_Ticket` ASC, `et`.`Fecha_y_Hora` DESC ;

-- --------------------------------------------------------

--
-- Estructura para la vista `ticket_estado_magia`
--
DROP TABLE IF EXISTS `ticket_estado_magia`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ticket_estado_magia`  AS SELECT `t`.`Id_Ticket` AS `Id_Ticket`, `et`.`Id_Estado` AS `Id_Estado`, `t`.`Fecha_Inicio` AS `Fecha_Inicio`, `t`.`Id_Prioridad` AS `Id_Prioridad`, `t`.`Asunto` AS `Asunto`, `et`.`Fecha_y_Hora` AS `Fecha_y_Hora` FROM (`ticket` `t` join `estado_ticket` `et`) WHERE `et`.`Id_Ticket` = `t`.`Id_Ticket` GROUP BY `t`.`Id_Ticket`, `et`.`Id_Estado` ORDER BY `t`.`Id_Ticket` ASC, `et`.`Fecha_y_Hora` DESC ;

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
  ADD KEY `Id_Prioridad` (`Id_Prioridad`);

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
  ADD PRIMARY KEY (`Id_Usuario`,`Id_Ticket`),
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
  MODIFY `Id_Ticket` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=219;

--
-- AUTO_INCREMENT de la tabla `tipo_incidencia`
--
ALTER TABLE `tipo_incidencia`
  MODIFY `Id_Tipo_Incidencia` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id_Usuario` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000060;

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
  ADD CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`Id_Prioridad`) REFERENCES `prioridad` (`Id_Prioridad`);

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
