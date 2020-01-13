-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 13, 2020 at 08:53 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Hogwarts`
--
CREATE DATABASE IF NOT EXISTS `Hogwarts` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Hogwarts`;

-- --------------------------------------------------------

--
-- Table structure for table `Effetti`
--

CREATE TABLE `Effetti` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Effetti`
--

INSERT INTO `Effetti` (`ID`, `Nome`) VALUES
(1, 'Guarigione'),
(2, 'Trasformazione');

-- --------------------------------------------------------

--
-- Table structure for table `Ingredienti`
--

CREATE TABLE `Ingredienti` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Ingredienti`
--

INSERT INTO `Ingredienti` (`ID`, `Nome`) VALUES
(1, 'Corno di drago'),
(2, 'Acqua'),
(3, 'Capelli'),
(4, 'Ala di pipistrello');

-- --------------------------------------------------------

--
-- Table structure for table `IngredientiPozione`
--

CREATE TABLE `IngredientiPozione` (
  `ID` int(11) NOT NULL,
  `Pozione` int(11) NOT NULL,
  `Ingrediente` int(11) NOT NULL,
  `Quantità` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `IngredientiPozione`
--

INSERT INTO `IngredientiPozione` (`ID`, `Pozione`, `Ingrediente`, `Quantità`) VALUES
(1, 1, 3, 3),
(2, 1, 2, 34);

-- --------------------------------------------------------

--
-- Table structure for table `Pozioni`
--

CREATE TABLE `Pozioni` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(500) NOT NULL,
  `Tempo` int(11) NOT NULL,
  `IDEffetto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Pozioni`
--

INSERT INTO `Pozioni` (`ID`, `Nome`, `Tempo`, `IDEffetto`) VALUES
(1, 'Polisucco', 4544, 2),
(3, 'Elisir', 6, 1),
(4, 'Tonico di drago', 56, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Effetti`
--
ALTER TABLE `Effetti`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Ingredienti`
--
ALTER TABLE `Ingredienti`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `IngredientiPozione`
--
ALTER TABLE `IngredientiPozione`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Pozione` (`Pozione`),
  ADD KEY `Ingrediente` (`Ingrediente`);

--
-- Indexes for table `Pozioni`
--
ALTER TABLE `Pozioni`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDEffetto` (`IDEffetto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Effetti`
--
ALTER TABLE `Effetti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Ingredienti`
--
ALTER TABLE `Ingredienti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `IngredientiPozione`
--
ALTER TABLE `IngredientiPozione`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Pozioni`
--
ALTER TABLE `Pozioni`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `IngredientiPozione`
--
ALTER TABLE `IngredientiPozione`
  ADD CONSTRAINT `Ingrediente` FOREIGN KEY (`Ingrediente`) REFERENCES `Ingredienti` (`ID`),
  ADD CONSTRAINT `Pozione` FOREIGN KEY (`Pozione`) REFERENCES `Pozioni` (`ID`);

--
-- Constraints for table `Pozioni`
--
ALTER TABLE `Pozioni`
  ADD CONSTRAINT `PozioneEffetto` FOREIGN KEY (`IDEffetto`) REFERENCES `Effetti` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
