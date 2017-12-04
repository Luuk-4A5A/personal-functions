<?php
//Welcome to the config file of Luuk Horsman's made github app, i just want to tell you that you may have a wonderful day and make the best off it!
//
// error_reporting(0);

/*DATABASE SETTINGS*/

define('SERVER_NAME', 'localhost');
define('DB_NAME', 'github');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');

/*END DATABASE SETTINGS*/

/*TECHNICAL STUFF - DONT TOUCH IF YOU DONT KNOW WHAT IT MEANS.*/

require_once('controller/controller.php');
require_once('model/dbhandler.php');
/*END TECHNICAL STUFF*/
