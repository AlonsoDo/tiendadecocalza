-- --------------------------------------------------------
-- Host:                         us-cdbr-iron-east-01.cleardb.net
-- Versión del servidor:         5.5.40-log - MySQL Community Server (GPL)
-- SO del servidor:              Linux
-- HeidiSQL Versión:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para heroku_1951f82b54cf633
CREATE DATABASE IF NOT EXISTS `heroku_1951f82b54cf633` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `heroku_1951f82b54cf633`;


-- Volcando estructura para tabla heroku_1951f82b54cf633.articulos
CREATE TABLE IF NOT EXISTS `articulos` (
  `Grupo` int(11) NOT NULL DEFAULT '1',
  `Producto` int(11) NOT NULL,
  `NombreFichero` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `Precio` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `PrecioAnterior` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `PorCientoDescuento` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `Descripcion` varchar(1000) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Volcando datos para la tabla heroku_1951f82b54cf633.articulos: ~19 rows (aproximadamente)
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` (`Grupo`, `Producto`, `NombreFichero`, `Precio`, `PrecioAnterior`, `PorCientoDescuento`, `Descripcion`) VALUES
	(1, 1, 'r027.jpg', '300,95', '250,95', '0', ''),
	(1, 2, 'r002.jpg', '100,95', '100,95', '0', ''),
	(1, 3, 'r003.jpg', '200,00', '400,00', '50', ''),
	(1, 4, 'r010.jpg', '25,50', '25,50', '0', ''),
	(1, 5, 'r006.jpg', '100,00', '125,00', '0', ''),
	(1, 6, 'r007.jpg', '90,00', '90,00', '0', ''),
	(1, 7, 'r001.jpg', '25,00', '25,00', '0', ''),
	(1, 8, 'r010.jpg', '20,20', '22,20', '0', ''),
	(1, 9, 'r011.jpg', '21,20', '21,20', '0', ''),
	(11, 10, 'r001.jpg', '25,95', '25,95', '0', ''),
	(11, 11, 'r002.jpg', '50,95', '30,95', '0', ''),
	(11, 12, 'r013.jpg', '24,95', '30,95', '0', ''),
	(11, 14, 'r004.jpg', '30,00', '40,00', '0', ''),
	(12, 15, 'r035.jpg', '35,55', '40,90', '0', ''),
	(12, 16, 'r039.jpg', '35,55', '35,55', '0', ''),
	(13, 17, 'r013.jpg', '25,35', '23,35', '0', ''),
	(13, 18, 'r019.jpg', '50,95', '60,95', '0', ''),
	(15, 19, 'r020.jpg', '25,95', '30,95', '0', ''),
	(15, 20, 'r031.jpg', '30,95', '30,95', '0', '');
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
