<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>

<?php $path='/wp-content/themes/macquarie_media_limited_v2/'; ?>

<meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
 <link rel="profile" href="http://gmpg.org/xfn/11">

	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $path;?>ico/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo $path;?>ico/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo $path;?>ico/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $path;?>ico/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo $path;?>ico/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $path;?>ico/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo $path;?>ico/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $path;?>ico/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $path;?>ico/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $path;?>ico/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $path;?>ico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo $path;?>ico/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $path;?>ico/favicon-16x16.png">
    <link rel="manifest" href="ico/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo $path;?>ico/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">




<?php

// Set up some base variables for the meta data: Then check to see if the User Agent is Facebook.
// If so, look up the data in WP for the page selected and display the correct meta data

if (
    strpos($_SERVER["HTTP_USER_AGENT"], "facebookexternalhit/") !== false ||          
    strpos($_SERVER["HTTP_USER_AGENT"], "Facebot") !== false
) {
    // it is probably Facebook's bot
	// Fetch the details from WP
	// that is not Facebook

	$Meta_title = 'Macquarie Media Limited';
	$Meta_Type = 'Article';
	$Meta_URL = $_SERVER['REQUEST_URI'];
	$Meta_Image = "";
	$Meta_Description = "This is a test of the Facebook BOT.";


}
else {
    // that is not Facebook
	$Meta_title = 'Macquarie Media Limited';
	$Meta_Type = 'Website';
	$Meta_URL = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$Meta_Image = "";
	$Meta_Description = "Our News Talk stations are home to Australia’s all-time most successful broadcasters. Talking Lifestyle is our new style of talk radio that aspires to be our audience’s second favourite radio station.";
	
}

?>

    <!-- Open Graph data -->
<meta name="ogtitle" property="og:title" content="<?php echo $Meta_title; ?>" />
<meta property="og:type" content="<?php echo $Meta_Type; ?>" />
<meta name="ogurl" property="og:url" content="<?php echo $Meta_URL; ?>" />
<meta name="ogimage" property="og:image" content="<?php echo $Meta_Image; ?>" />
<meta name="ogdescription" property="og:description" content="<?php echo $Meta_Description; ?>" />
<meta property="og:site_name" content="<?php echo $Meta_title; ?>" />

    <!-- Latest compiled and minified CSS -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo $path;?>css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo $path;?>css/font-awesome.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]
    <script charset="utf-8" src="<?php echo $path;?>js/bluebird.min.js?v=3.0"></script>-->

    <script  charset="utf-8" src="<?php echo $path;?>js/jquery.min.js"></script>
    
    <script  charset="utf-8" src="<?php echo $path;?>js/bootstrap.min.js"></script>
    

<?php wp_head(); ?>
<link href="<?php echo $path;?>style.css" rel="stylesheet">

</head>

<body <?php body_class(); ?> id="application">
<div id="page" class="site">