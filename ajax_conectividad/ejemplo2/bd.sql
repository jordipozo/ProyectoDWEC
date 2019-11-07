create database Ejemplo;
use Ejemplo;
CREATE TABLE IF NOT EXISTS `empleados` (
  `cedula` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha_nacimiento` varchar(100) NOT NULL,
  `cargo` varchar(100) NOT NULL
) ;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`cedula`, `nombre`, `fecha_nacimiento`, `cargo`) VALUES
('55', '2525', 'sfsf', 'sf'),
('22222', 'eeee', '34', 'rrrr'),
('11', 'fgf', '4', 'u'),
('sdsd', 'sdsds', 'sdsds', 'sddsdsd'),
('111111', '1111', '1111', '111'),
('eeewe', 'asdfasd', 'asfasdf', 'asdfsdfdfsdf'),
('1', 'a', '111', '123'),
('161', 'juan', '22031988', 'aaa'),
('dd', 'ff', 'ff', 'fff'),
('1111111', 'zzzzzzz', '121323', 'ddd'),
('12', '12', '12', 'dsa');
