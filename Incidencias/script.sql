-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `tbl_User`

CREATE TABLE `tbl_User`
(
 `idUser`  int NOT NULL ,
 `name`    varchar(45) NOT NULL ,
 `surname` varchar(45) NOT NULL ,

PRIMARY KEY (`idUser`)
);



-- ************************************** `tbl_Student`

CREATE TABLE `tbl_Student`
(
 `idStudent` int NOT NULL ,
 `dni`       varchar(45) NOT NULL ,
 `name`      varchar(45) NOT NULL ,
 `surname`   varchar(45) NOT NULL ,
 `idTeam`    int NOT NULL ,

PRIMARY KEY (`idStudent`),
KEY `fkIdx_49` (`idTeam`),
CONSTRAINT `FK_STUDENT` FOREIGN KEY `fkIdx_49` (`idTeam`) REFERENCES `tbl_Team` (`idTeam`)
);






-- ************************************** `tbl_Tasklist`

CREATE TABLE `tbl_Tasklist`
(
 `idTask`                 int NOT NULL ,
 `taskDate`               datetime NOT NULL ,
 `taskDescription`        varchar(100) NOT NULL ,
 `idtbl_incomingIncident` int(11) NOT NULL ,

PRIMARY KEY (`idTask`),
KEY `fkIdx_33` (`idtbl_incomingIncident`),
CONSTRAINT `FK_TASK` FOREIGN KEY `fkIdx_33` (`idtbl_incomingIncident`) REFERENCES `tbl_incomingincidents` (`idtbl_incomingIncident`)
);




-- ************************************** `tbl_Team`

CREATE TABLE `tbl_Team`
(
 `idTeam`   int NOT NULL ,
 `teamName` varchar(45) NOT NULL ,

PRIMARY KEY (`idTeam`)
);









-- ************************************** `tbl_incomingincidents`

CREATE TABLE `tbl_incomingincidents`
(
 `idtbl_incomingIncident` int(11) NOT NULL ,
 `codeTask`               double NULL DEFAULT NULL ,
 `description`            varchar(100) NULL DEFAULT NULL ,
 `idUser`                 int NOT NULL ,
 `idTeam`                 int NOT NULL ,
 `taskDate`               date NULL DEFAULT NULL ,
 `assignDate`             date NULL DEFAULT NULL ,
 `idAssociadedtClass`     varchar(45) NULL DEFAULT NULL ,
 `isSolved`               int(11) NULL DEFAULT NULL ,
 `isCurrent`              int(11) NULL DEFAULT NULL ,
 `solvedDate`             date NULL DEFAULT NULL ,
 `closeDate`              date NULL DEFAULT NULL ,

PRIMARY KEY (`idtbl_incomingIncident`),
KEY `fkIdx_25` (`idUser`),
CONSTRAINT `FK_USER` FOREIGN KEY `fkIdx_25` (`idUser`) REFERENCES `tbl_User` (`idUser`),
KEY `fkIdx_40` (`idTeam`),
CONSTRAINT `FK_TEAM` FOREIGN KEY `fkIdx_40` (`idTeam`) REFERENCES `tbl_Team` (`idTeam`)
) ENGINE=INNODB;





