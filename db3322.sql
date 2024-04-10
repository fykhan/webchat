CREATE TABLE `account` (
 `id` smallint NOT NULL AUTO_INCREMENT,
 `useremail` varchar(60) NOT NULL,
 `password` varchar(50) NOT NULL,
 PRIMARY KEY (`id`)
);
CREATE TABLE `message` (
 `msgid` int NOT NULL AUTO_INCREMENT,
 `time` bigint NOT NULL,
 `message` varchar(250) NOT NULL,
 `person` varchar(20) NOT NULL,
 PRIMARY KEY (`msgid`)
);
