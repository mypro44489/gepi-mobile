-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 15 Août 2019 à 15:44
-- Version du serveur :  5.6.24
-- Version de PHP :  5.5.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `gestecole`
--

-- --------------------------------------------------------

--
-- Structure de la table `absence`
--

CREATE TABLE IF NOT EXISTS `absence` (
  `ID` int(11) NOT NULL,
  `IDELEVE` int(11) NOT NULL,
  `IDPERIODE` int(11) DEFAULT NULL,
  `DATEABSENCE` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `absence`
--

INSERT INTO `absence` (`ID`, `IDELEVE`, `IDPERIODE`, `DATEABSENCE`) VALUES
(1, 3, 1, '2019-08-08'),
(2, 3, 1, '2019-08-09'),
(6, 3, 2, '2019-08-15');

-- --------------------------------------------------------

--
-- Structure de la table `cahier_text`
--

CREATE TABLE IF NOT EXISTS `cahier_text` (
  `ID` int(11) NOT NULL,
  `IDEMPLOITEMPS` int(11) DEFAULT NULL,
  `LIBELLECT` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

CREATE TABLE IF NOT EXISTS `classe` (
  `ID` int(11) NOT NULL,
  `LIBELLECLASSE` text
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `classe`
--

INSERT INTO `classe` (`ID`, `LIBELLECLASSE`) VALUES
(1, '6éme'),
(2, '5ème'),
(3, '4ème'),
(4, '3ème');

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

CREATE TABLE IF NOT EXISTS `eleve` (
  `ID` int(11) NOT NULL,
  `IDCLASSE` int(11) DEFAULT NULL,
  `NOMELEVE` text,
  `PRENOMELEVE` text,
  `SEXEELEVE` text,
  `DATENAISSELEVE` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `emploidutemps`
--

CREATE TABLE IF NOT EXISTS `emploidutemps` (
  `ID` int(11) NOT NULL,
  `IDPERIODE` int(11) DEFAULT NULL,
  `IDCLASSE` int(11) DEFAULT NULL,
  `IDMATIERE` int(11) DEFAULT NULL,
  `DATEENREG` date DEFAULT NULL,
  `JOUR` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `emploidutemps`
--

INSERT INTO `emploidutemps` (`ID`, `IDPERIODE`, `IDCLASSE`, `IDMATIERE`, `DATEENREG`, `JOUR`) VALUES
(1, 1, 1, 1, '2019-08-07', 'Lundi');

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE IF NOT EXISTS `matiere` (
  `ID` int(11) NOT NULL,
  `LIBELLEMATIERE` text
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `matiere`
--

INSERT INTO `matiere` (`ID`, `LIBELLEMATIERE`) VALUES
(1, 'Mathématique'),
(2, 'Physique'),
(3, 'Français'),
(4, 'Anglais'),
(5, 'SVT'),
(6, 'Histoire - Géographie');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

CREATE TABLE IF NOT EXISTS `note` (
  `ID` int(11) NOT NULL,
  `IDELEVE` int(11) DEFAULT NULL,
  `IDMATIERE` int(11) DEFAULT NULL,
  `VALEURNOTESNOTES` float DEFAULT NULL,
  `DATENOTES` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `note`
--

INSERT INTO `note` (`ID`, `IDELEVE`, `IDMATIERE`, `VALEURNOTESNOTES`, `DATENOTES`) VALUES
(1, 3, 1, 12, '2019-08-15'),
(2, 3, 2, 10, '2019-08-15');

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE IF NOT EXISTS `notifications` (
  `ID` int(11) NOT NULL,
  `contenu` text,
  `date_notif` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `notifications`
--

INSERT INTO `notifications` (`ID`, `contenu`, `date_notif`) VALUES
(1, 'Hello there!', '2019-08-15 15:08:29'),
(2, 'Jeudi hoyay!!', '2019-08-15 15:09:20');

-- --------------------------------------------------------

--
-- Structure de la table `parent_eleve`
--

CREATE TABLE IF NOT EXISTS `parent_eleve` (
  `parentId` int(11) NOT NULL,
  `eleveId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `parent_eleve`
--

INSERT INTO `parent_eleve` (`parentId`, `eleveId`) VALUES
(5, 3),
(5, 4);

-- --------------------------------------------------------

--
-- Structure de la table `periode`
--

CREATE TABLE IF NOT EXISTS `periode` (
  `ID` int(11) NOT NULL,
  `HEUREPERIODE` varchar(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `periode`
--

INSERT INTO `periode` (`ID`, `HEUREPERIODE`) VALUES
(1, '1ère heure'),
(2, '2ème heure'),
(3, '3ème heure'),
(4, '4ème heure'),
(5, '5ème heure');

-- --------------------------------------------------------

--
-- Structure de la table `prof_matiere`
--

CREATE TABLE IF NOT EXISTS `prof_matiere` (
  `profId` int(11) NOT NULL,
  `matiereId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `retard`
--

CREATE TABLE IF NOT EXISTS `retard` (
  `ID` int(11) NOT NULL,
  `IDELEVE` int(11) NOT NULL,
  `IDPERIODE` int(11) DEFAULT NULL,
  `HEUREARRIVE` time DEFAULT NULL,
  `DATERETARD` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `retard`
--

INSERT INTO `retard` (`ID`, `IDELEVE`, `IDPERIODE`, `HEUREARRIVE`, `DATERETARD`) VALUES
(1, 4, 4, '10:30:00', '2019-08-15');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `login` varchar(10) DEFAULT NULL,
  `prenoms` varchar(20) DEFAULT NULL,
  `nom` varchar(20) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `profil` varchar(30) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `classeId` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `login`, `prenoms`, `nom`, `sex`, `profil`, `status`, `password`, `classeId`) VALUES
(1, 'admin', 'Administrateur', 'admin', 'M', 'Administrateur', 'actif', 'admin', NULL),
(2, 'prof', 'professeur', 'prof', 'M', 'Professeur', 'actif', 'prof', NULL),
(3, 'eleve1', 'Eleve1', 'Eleve', 'M', 'Eleve', 'actif', 'eleve1', 1),
(4, 'eleve2', 'eleve2', 'Eleve2', 'M', 'Eleve', 'actif', 'eleve2', 2),
(5, 'parent1', 'parent1', 'parent', 'M', 'Parent', 'actif', 'parent1', NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `cahier_text`
--
ALTER TABLE `cahier_text`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `emploidutemps`
--
ALTER TABLE `emploidutemps`
  ADD PRIMARY KEY (`ID`), ADD KEY `emploidutemps_ibfk_1` (`IDCLASSE`), ADD KEY `emploidutemps_ibfk_2` (`IDMATIERE`), ADD KEY `emploidutemps_ibfk_3` (`IDPERIODE`);

--
-- Index pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `parent_eleve`
--
ALTER TABLE `parent_eleve`
  ADD PRIMARY KEY (`parentId`,`eleveId`);

--
-- Index pour la table `periode`
--
ALTER TABLE `periode`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `retard`
--
ALTER TABLE `retard`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `absence`
--
ALTER TABLE `absence`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `cahier_text`
--
ALTER TABLE `cahier_text`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `classe`
--
ALTER TABLE `classe`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `eleve`
--
ALTER TABLE `eleve`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `emploidutemps`
--
ALTER TABLE `emploidutemps`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `matiere`
--
ALTER TABLE `matiere`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `note`
--
ALTER TABLE `note`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `periode`
--
ALTER TABLE `periode`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `retard`
--
ALTER TABLE `retard`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `emploidutemps`
--
ALTER TABLE `emploidutemps`
ADD CONSTRAINT `emploidutemps_ibfk_1` FOREIGN KEY (`IDCLASSE`) REFERENCES `classe` (`ID`),
ADD CONSTRAINT `emploidutemps_ibfk_2` FOREIGN KEY (`IDMATIERE`) REFERENCES `matiere` (`ID`),
ADD CONSTRAINT `emploidutemps_ibfk_3` FOREIGN KEY (`IDPERIODE`) REFERENCES `periode` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
