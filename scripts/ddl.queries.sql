
CREATE DATABASE `fleet`;

CREATE TABLE `genre` (
  `genreId` int NOT NULL AUTO_INCREMENT,
  `genreType` varchar(500) NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`genreId`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=1003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `movies` (
  `movieId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `genre` int NOT NULL,
  `releaseDate` varchar(45) NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`movieId`),
  KEY `FK_Movies_Genre_idx` (`genre`),
  CONSTRAINT `FK_Movies_Genre` FOREIGN KEY (`genre`) REFERENCES `genre` (`genreId`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `moviereviews` (
  `reviewId` int NOT NULL AUTO_INCREMENT,
  `movieId` int NOT NULL,
  `userId` int NOT NULL,
  `reviews` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`reviewId`),
  KEY `FK_Review_MovieVoteId_idx` (`movieId`),
  KEY `FK_Review_UserId_idx` (`userId`),
  CONSTRAINT `FK_Review_Id_MovieVoteId` FOREIGN KEY (`movieId`) REFERENCES `movies` (`movieId`),
  CONSTRAINT `FK_Review_UserId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `movievote` (
  `voteId` int NOT NULL AUTO_INCREMENT,
  `movieId` int NOT NULL,
  `userId` int NOT NULL,
  `voteType` bit(1) NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`voteId`),
  KEY `FK_MovieId_MovieVoteId_idx` (`movieId`),
  KEY `FK_UserId_idx` (`userId`),
  CONSTRAINT `FK_MovieId_MovieVoteId` FOREIGN KEY (`movieId`) REFERENCES `movies` (`movieId`),
  CONSTRAINT `FK_UserId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=1005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `userprofile` (
  `profileId` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `favouriteGenre` int NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`profileId`),
  KEY `FK_Profile_UserId_idx` (`userId`),
  KEY `FK_Profile_GenreId_idx` (`favouriteGenre`),
  CONSTRAINT `FK_Profile_GenreId` FOREIGN KEY (`favouriteGenre`) REFERENCES `genre` (`genreId`),
  CONSTRAINT `FK_Profile_UserId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
