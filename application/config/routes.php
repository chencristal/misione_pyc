<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';

$route['home'] = 'welcome';

$route['m3'] = 'welcome/m3';
$route['m3/save_mission'] = 'welcome/m3_save_mission';
$route['m3/save_mission_route'] = 'welcome/m3_save_mission_route';

$route['m5'] = 'welcome/m5';
$route['m5/upload'] = 'welcome/m5_upload';
$route['m5/change_title'] = 'welcome/m5_change_title';
$route['m5/change_subtitle'] = 'welcome/m5_change_subtitle';
$route['m5/change_content'] = 'welcome/m5_change_content';

$route['terminar_memoria'] = 'welcome/terminar_memoria';

$route['m8'] = 'welcome/m8';
$route['m8/save_mission'] = 'welcome/m8_save_mission';

$route['m9'] = 'welcome/m9';


$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
