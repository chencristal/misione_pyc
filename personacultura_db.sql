/*
SQLyog Ultimate v8.3 
MySQL - 5.5.5-10.1.16-MariaDB : Database - personacultura_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`personacultura_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `personacultura_db`;

/*Table structure for table `admins` */

DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `admin_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `admin_id` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `admins` */

insert  into `admins`(`admin_id`,`password`) values ('root','d0942590f4bf511967fc7fcc848c33ed');

/*Table structure for table `album` */

DROP TABLE IF EXISTS `album`;

CREATE TABLE `album` (
  `album_id` int(11) NOT NULL AUTO_INCREMENT,
  `galeria` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `url_imagen` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usuario_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `album` */

/*Table structure for table `ci_sessions` */

DROP TABLE IF EXISTS `ci_sessions`;

CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `ip_address` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `user_agent` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `ci_sessions` */

/*Table structure for table `diario` */

DROP TABLE IF EXISTS `diario`;

CREATE TABLE `diario` (
  `diario_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `diario` */

/*Table structure for table `emociones` */

DROP TABLE IF EXISTS `emociones`;

CREATE TABLE `emociones` (
  `emocion_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_emocion` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `on_img` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`emocion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `emociones` */

insert  into `emociones`(`emocion_id`,`nombre_emocion`,`on_img`) values (1,'CONTENTO','btn_a_on'),(2,'TRISTE','btn_b_on'),(3,'CANSADO','btn_e_on'),(4,'ENFERMO','btn_f_on'),(5,'ENAMORADO','btn_g_on'),(6,'ASUSTADO','btn_c_on'),(7,'PENSATIVO','btn_h_on'),(8,'ENFADADO','btn_d_on'),(9,'DESPECHADO','btn_i_on'),(10,'RELAJADO','btn_j_on'),(11,'ABURRIDO','btn_k_on'),(12,'DEPRIMIDO','btn_l_on'),(13,'ESTRESADO','btn_m_on');

/*Table structure for table `estado_emocional` */

DROP TABLE IF EXISTS `estado_emocional`;

CREATE TABLE `estado_emocional` (
  `estado_id` int(11) NOT NULL AUTO_INCREMENT,
  `emocion_id` int(11) NOT NULL,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_emocion` datetime NOT NULL,
  PRIMARY KEY (`estado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=309 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `estado_emocional` */

insert  into `estado_emocional`(`estado_id`,`emocion_id`,`usuario_id`,`fecha_emocion`) values (303,1,'adrianapyc1','2016-11-17 07:58:38'),(304,1,'adrianapyc1','2016-11-17 14:29:35'),(305,1,'adrianapyc1','2016-11-17 22:34:54'),(306,1,'adrianapyc1','2016-11-18 05:50:41'),(307,1,'adrianapyc1','2016-11-18 10:35:52'),(308,1,'adrianapyc1','2016-11-18 14:28:45');

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `usuario_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ciudad` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `pais` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `dia` int(11) NOT NULL,
  `mes` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `cualidades` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `gustos` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `intereses` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `ver` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `oir` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `recordar` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `allegados` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `apoyo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `url_perfil` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `url_portada` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `grupo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `token_boot` int(11) NOT NULL,
  `codigo_materia` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`usuario_id`,`nombre`,`apellidos`,`ciudad`,`pais`,`dia`,`mes`,`year`,`cualidades`,`gustos`,`intereses`,`ver`,`oir`,`recordar`,`allegados`,`apoyo`,`url_perfil`,`url_portada`,`grupo`,`token_boot`,`codigo_materia`) values ('adrianapyc1','john','doe','Bogota','stewart',10,5,2016,'good','gustos','intereses','ver','ori','recorder','allegados','apoyop','url_perfil','url_portada','1',1,'578001');

/*Table structure for table `mejoras_cubo` */

DROP TABLE IF EXISTS `mejoras_cubo`;

CREATE TABLE `mejoras_cubo` (
  `mejora_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_lado` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta` text COLLATE utf8_unicode_ci NOT NULL,
  `respuesta` int(11) NOT NULL DEFAULT '-1',
  `tipo` int(11) NOT NULL DEFAULT '1',
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`mejora_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `mejoras_cubo` */

/*Table structure for table `memorias` */

DROP TABLE IF EXISTS `memorias`;

CREATE TABLE `memorias` (
  `memoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `mision_id` int(11) NOT NULL,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `respuesta` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`memoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2704 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `memorias` */

insert  into `memorias`(`memoria_id`,`mision_id`,`usuario_id`,`respuesta`) values (21,1,'adrianapyc1',''),(2696,5,'user','¿Qué pensamiento te surge después de esta misión?'),(2697,5,'user','¿Qué pensamiento te surge después de esta misión?'),(2698,5,'user','kdksdfiiowekm'),(2699,5,'user','fasdfwqfasdfasd'),(2700,5,'user','fdsgdfgsd'),(2701,14,'user','adfssf'),(2702,8,'user','sdfwfdasdfasdfasd'),(2703,3,'user','adsfasdfasefawe');

/*Table structure for table `meses` */

DROP TABLE IF EXISTS `meses`;

CREATE TABLE `meses` (
  `id` int(12) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `meses` */

insert  into `meses`(`id`,`nombre`) values (1,'Enero'),(2,'Febrero'),(3,'Marzo'),(4,'Abril'),(5,'Mayo'),(6,'Junio'),(7,'Julio'),(8,'Agosto'),(9,'Septiembre'),(10,'Octubre'),(11,'Noviembre'),(12,'Diciembre');

/*Table structure for table `mision_5_upload` */

DROP TABLE IF EXISTS `mision_5_upload`;

CREATE TABLE `mision_5_upload` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subtitle` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `mision_5_upload` */

insert  into `mision_5_upload`(`id`,`filename`,`user_id`,`title`,`subtitle`,`content`) values (1,'./uploads/3772c8c1a6cf86e8b070738c183263d4.png','user','Gracia Da Vella1','Grafcidsiafj','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.');

/*Table structure for table `misiones` */

DROP TABLE IF EXISTS `misiones`;

CREATE TABLE `misiones` (
  `mision_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`mision_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `misiones` */

insert  into `misiones`(`mision_id`,`nombre`) values (1,'1'),(2,'2'),(3,'3'),(4,'4'),(5,'5'),(6,'6'),(7,'7'),(8,'8'),(9,'9'),(10,'10'),(11,'11');

/*Table structure for table `progreso_misiones` */

DROP TABLE IF EXISTS `progreso_misiones`;

CREATE TABLE `progreso_misiones` (
  `progreso_id` int(11) NOT NULL AUTO_INCREMENT,
  `mision_id` int(11) NOT NULL,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `estado` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '0-inactivo 1-activo 2-imcpleto 3 realizado',
  `etiqueta` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status_admin` int(100) DEFAULT '1',
  PRIMARY KEY (`progreso_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1454 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `progreso_misiones` */

insert  into `progreso_misiones`(`progreso_id`,`mision_id`,`usuario_id`,`estado`,`etiqueta`,`nombre`,`status_admin`) values (1453,4,'adrianapyc1','estado','1','2',1);

/*Table structure for table `respuestas_amigo` */

DROP TABLE IF EXISTS `respuestas_amigo`;

CREATE TABLE `respuestas_amigo` (
  `respuesta_amigo_id` int(11) NOT NULL AUTO_INCREMENT,
  `resultado_id` int(11) NOT NULL,
  `respuesta` int(11) NOT NULL,
  `pregunta` int(11) NOT NULL,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`respuesta_amigo_id`),
  KEY `resultado_id` (`resultado_id`),
  KEY `resultado_id_2` (`resultado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `respuestas_amigo` */

/*Table structure for table `resultados_mision_11` */

DROP TABLE IF EXISTS `resultados_mision_11`;

CREATE TABLE `resultados_mision_11` (
  `resultado_id` int(11) NOT NULL AUTO_INCREMENT,
  `efecto` int(11) NOT NULL DEFAULT '0',
  `flor` int(100) NOT NULL DEFAULT '0',
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `texto` text COLLATE utf8_unicode_ci NOT NULL,
  `mejora` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`resultado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_11` */

/*Table structure for table `resultados_mision_3` */

DROP TABLE IF EXISTS `resultados_mision_3`;

CREATE TABLE `resultados_mision_3` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_id` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `correct_route` int(11) DEFAULT NULL,
  `first` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_3` */

insert  into `resultados_mision_3`(`id`,`usuario_id`,`correct_route`,`first`,`second`) values (1,'user',16,'antsdf','gnwgerng');

/*Table structure for table `resultados_mision_4` */

DROP TABLE IF EXISTS `resultados_mision_4`;

CREATE TABLE `resultados_mision_4` (
  `resultado_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_persona` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_persona` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `ciudad` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `barrio` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `top` int(11) NOT NULL,
  `left` int(11) NOT NULL,
  PRIMARY KEY (`resultado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_4` */

/*Table structure for table `resultados_mision_5` */

DROP TABLE IF EXISTS `resultados_mision_5`;

CREATE TABLE `resultados_mision_5` (
  `resultado_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` int(11) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `vive` int(11) NOT NULL,
  `civil` int(11) DEFAULT NULL,
  `relacion` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `estado` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `left_node` varchar(11) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nodo al que pertenece',
  `right_node` varchar(11) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nodo al que está ligado',
  `top` int(11) NOT NULL,
  `left` int(11) NOT NULL,
  `url` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `mejorar` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`resultado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_5` */

/*Table structure for table `resultados_mision_6` */

DROP TABLE IF EXISTS `resultados_mision_6`;

CREATE TABLE `resultados_mision_6` (
  `mision_id` int(11) NOT NULL,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `total_amigos` int(11) DEFAULT NULL,
  `considerados` int(11) DEFAULT NULL,
  `utilidad` int(11) NOT NULL,
  `placer` int(11) NOT NULL,
  `afinidad` int(11) NOT NULL,
  `resultado_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`resultado_id`),
  KEY `resultado_id` (`resultado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_6` */

/*Table structure for table `resultados_mision_7` */

DROP TABLE IF EXISTS `resultados_mision_7`;

CREATE TABLE `resultados_mision_7` (
  `resultado_id` int(11) NOT NULL AUTO_INCREMENT,
  `mision_id` int(11) NOT NULL,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_amigo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `puntaje` int(11) NOT NULL,
  `foto` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `mejorar` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`resultado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_7` */

/*Table structure for table `resultados_mision_8` */

DROP TABLE IF EXISTS `resultados_mision_8`;

CREATE TABLE `resultados_mision_8` (
  `resultado_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_id` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `second` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `third` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`resultado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_8` */

insert  into `resultados_mision_8`(`resultado_id`,`usuario_id`,`first`,`second`,`third`,`comment`) values (1,'user','asdfas','sadfasd','werqwe','2341asdfasdf'),(2,'user','4','5','6','sdafwefasdf'),(3,'user','','','',''),(4,'user','','','',''),(5,'user','','','',''),(6,'user','','','',''),(7,'user','','','',''),(8,'user','','','',''),(9,'user','','','',''),(10,'user','','','',''),(11,'user','','','','');

/*Table structure for table `resultados_mision_9` */

DROP TABLE IF EXISTS `resultados_mision_9`;

CREATE TABLE `resultados_mision_9` (
  `resultado_id` int(11) NOT NULL AUTO_INCREMENT,
  `url_foto` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `titulo` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `fecha` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `suceso` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `importancia` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `aprendizaje` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`resultado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_mision_9` */

/*Table structure for table `resultados_misiones` */

DROP TABLE IF EXISTS `resultados_misiones`;

CREATE TABLE `resultados_misiones` (
  `resultado_id` int(11) NOT NULL AUTO_INCREMENT,
  `mision_id` int(11) NOT NULL,
  `usuario_id` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `respuesta` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pregunta` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`resultado_id`),
  UNIQUE KEY `resultado_id` (`resultado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `resultados_misiones` */

insert  into `resultados_misiones`(`resultado_id`,`mision_id`,`usuario_id`,`respuesta`,`pregunta`) values (55,1,'adrianapyc1','sdfasdf','Desde tu propia historia de vida, describe un momento de ELECCIÓN, AUTODETERMINACIÓN o ACEPTACIÓN:\n                          \n                          sdfasdf');

/*Table structure for table `session_log` */

DROP TABLE IF EXISTS `session_log`;

CREATE TABLE `session_log` (
  `usuario_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_login` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_login` datetime DEFAULT NULL,
  PRIMARY KEY (`id_login`)
) ENGINE=InnoDB AUTO_INCREMENT=317 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `session_log` */

insert  into `session_log`(`usuario_id`,`password`,`id_login`,`fecha_login`) values ('adrianapyc1','registro',304,'2016-11-16 23:47:24'),('adrianapyc1','registro',305,'2016-11-16 23:47:40'),('adrianapyc1','login',306,'2016-11-16 23:58:05'),('adrianapyc1','registro',307,'2016-11-17 02:07:31'),('adrianapyc1','registro',308,'2016-11-17 06:10:04'),('adrianapyc1','registro',309,'2016-11-17 06:13:08'),('adrianapyc1','login',310,'2016-11-17 07:56:41'),('adrianapyc1','login',311,'2016-11-17 07:58:14'),('adrianapyc1','login',312,'2016-11-17 14:29:28'),('adrianapyc1','login',313,'2016-11-17 22:34:42'),('adrianapyc1','login',314,'2016-11-18 05:48:32'),('adrianapyc1','login',315,'2016-11-18 10:35:47'),('adrianapyc1','login',316,'2016-11-18 14:28:39');

/*Table structure for table `tipo_respuesta` */

DROP TABLE IF EXISTS `tipo_respuesta`;

CREATE TABLE `tipo_respuesta` (
  `id` int(12) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tipo_respuesta` */

insert  into `tipo_respuesta`(`id`,`nombre`) values (-1,'No ha respondido'),(0,'Nunca'),(1,'A veces'),(2,'Siempre');

/*Table structure for table `vision_mision` */

DROP TABLE IF EXISTS `vision_mision`;

CREATE TABLE `vision_mision` (
  `vm_id` int(11) NOT NULL AUTO_INCREMENT,
  `vm_nombre` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_subida` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_archivo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`vm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `vision_mision` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
