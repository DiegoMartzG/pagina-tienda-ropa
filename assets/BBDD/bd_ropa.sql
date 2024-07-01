-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2024 a las 16:25:15
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_ropa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hombre`
--

CREATE TABLE `hombre` (
  `hom_id` int(11) NOT NULL,
  `hom_nombre` varchar(100) NOT NULL,
  `hom_precio` double NOT NULL,
  `hom_talla` varchar(6) NOT NULL,
  `hom_color` varchar(50) NOT NULL,
  `hom_stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hombre`
--

INSERT INTO `hombre` (`hom_id`, `hom_nombre`, `hom_precio`, `hom_talla`, `hom_color`, `hom_stock`) VALUES
(1, 'Pantalon baquero', 20.45, 'XL', 'Azul', 60),
(2, 'Camiseta', 10, 'L', 'Azul', 100),
(3, 'Pantalon Chandal', 45.3, 'M', 'Verde', 60),
(4, 'Pantalon Chandal', 45.3, 'XL', 'Verde', 60),
(5, 'Pantalon Chandal', 45.3, 'S', 'Verde', 60),
(6, 'Pantalon Chandal', 45.3, 'L', 'Verde', 60),
(12, 'Camisa', 15.25, 'L', 'Beige', 10),
(13, 'Camisa', 15.25, 'XL', 'Beige', 50),
(14, 'Camisa', 15.25, 'xs', 'Beige', 14),
(15, 'Camisa', 15.25, 'M', 'Beige', 0),
(16, 'Camisa', 15.25, 'S', 'Beige', 2),
(17, 'Camisa', 20.25, 'L', 'Azul', 100),
(18, 'Camisa', 20.25, 'XL', 'Azul', 5),
(19, 'Camisa', 20.25, 'XXL', 'Azul', 60),
(20, 'Camisa', 20.25, 'M', 'Azul', 50),
(21, 'Camisa', 20.25, 'S', 'Azul', 0),
(22, 'Polo', 30.5, 'L', 'Azul', 50),
(23, 'Polo', 30.5, 'XL', 'Azul', 43),
(24, 'Polo', 30.5, 'XXL', 'Azul', 100),
(25, 'Polo', 30.5, 'M', 'Azul', 20),
(26, 'Polo', 30.5, 'S', 'Azul', 40),
(27, 'Polo', 30.5, 'L', 'Verde', 50),
(28, 'Polo', 30.5, 'XL', 'Verde', 43),
(29, 'Polo', 30.5, 'XXL', 'Verde', 100),
(30, 'Polo', 30.5, 'M', 'Verde', 20),
(31, 'Polo', 30.5, 'S', 'Verde', 40),
(32, 'Americana', 105.6, 'L', 'Gris', 50),
(33, 'Americana', 105.6, 'XL', 'Gris', 43),
(34, 'Americana', 105.6, 'XXL', 'Gris', 100),
(35, 'Americana', 105.6, 'M', 'Gris', 20),
(36, 'Americana', 105.6, 'S', 'Gris', 40),
(37, 'Americana', 105.6, 'XXL', 'Gris', 37),
(38, 'Americana', 105.6, 'L', 'Rojo', 50),
(39, 'Americana', 105.6, 'XL', 'Rojo', 43),
(40, 'Americana', 105.6, 'XXL', 'Rojo', 100),
(41, 'Americana', 105.6, 'M', 'Rojo', 20),
(42, 'Americana', 105.6, 'S', 'Rojo', 40),
(43, 'Americana', 105.6, 'XXL', 'Rojo', 43);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mujer`
--

CREATE TABLE `mujer` (
  `mu_id` int(11) NOT NULL,
  `mu_nombre` varchar(100) NOT NULL,
  `mu_precio` double NOT NULL,
  `mu_talla` varchar(6) NOT NULL,
  `mu_color` varchar(50) NOT NULL,
  `mu_stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mujer`
--

INSERT INTO `mujer` (`mu_id`, `mu_nombre`, `mu_precio`, `mu_talla`, `mu_color`, `mu_stock`) VALUES
(1, 'bestido con flores', 24.23, 'XXL', 'Rojo y blanco', 1),
(2, 'bestido con flores', 24.23, 'XL', 'Rojo y blanco', 50),
(3, 'bestido con flores', 24.23, 'L', 'Rojo y blanco', 40),
(4, 'bestido con flores', 24.23, 'M', 'Rojo y blanco', 30),
(5, 'bestido con flores', 24.23, 'S', 'Rojo y blanco', 30),
(6, 'Peto baquero', 15.3, 'XXL', 'Azul oscuro', 0),
(7, 'Peto baquero', 15.3, 'XL', 'Azul oscuro', 70),
(8, 'Peto baquero', 15.3, 'L', 'Azul oscuro', 70),
(9, 'Peto baquero', 15.3, 'M', 'Azul oscuro', 90),
(10, 'Peto baquero', 15.3, 'S', 'Azul oscuro', 200),
(11, 'blusa', 8.99, 'XXL', 'Rojo', 90),
(12, 'blusa', 8.99, 'XL', 'Rojo', 90),
(13, 'blusa', 8.99, 'L', 'Rojo', 90),
(14, 'blusa', 8.99, 'M', 'Rojo', 0),
(15, 'blusa', 8.99, 'S', 'Rojo', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usu_id` int(11) NOT NULL,
  `usu_password` varchar(50) NOT NULL,
  `usu_admin` int(11) NOT NULL,
  `usu_nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usu_id`, `usu_password`, `usu_admin`, `usu_nombre`) VALUES
(2, '926e27eecdbc7a18858b3798ba99bddd', 0, 'Pepe'),
(3, 'a94652aa97c7211ba8954dd15a3cf838', 0, 'Juan'),
(4, '5bd537fc3789b5482e4936968f0fde95', 0, 'Sara'),
(5, 'a763a66f984948ca463b081bf0f0e6d0', 0, 'Marta'),
(6, '91f5167c34c400758115c2a6826ec2e3', 1, 'Administrador'),
(12, '078c007bd92ddec308ae2f5115c1775d', 0, 'Diego'),
(13, '117735823fadae51db091c7d63e60eb0', 0, 'francisco'),
(14, '4968983f769e256a3496684b05018a35', 0, 'Carlota'),
(15, 'c1bfc188dba59d2681648aa0e6ca8c8e', 0, 'Roberto'),
(16, '7eb662a50bc9c7f747664df0fbad4a37', 0, 'Brus');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hombre`
--
ALTER TABLE `hombre`
  ADD PRIMARY KEY (`hom_id`);

--
-- Indices de la tabla `mujer`
--
ALTER TABLE `mujer`
  ADD PRIMARY KEY (`mu_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `hombre`
--
ALTER TABLE `hombre`
  MODIFY `hom_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `mujer`
--
ALTER TABLE `mujer`
  MODIFY `mu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
