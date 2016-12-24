<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link id="page_favicon" href="<?php echo base_url('assets/img/favicon.ico')?>" rel="icon" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <script type="text/javascript">
        var base_url = "<?php echo base_url();?>";
    </script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/bootstrap.css')?>">
    <script type="text/javascript" src="<?php echo base_url('assets/js/jquery-1.11.3.min.js')?>"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/js/bootstrap.min.js')?>"></script>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/style.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/custom.css')?>">
    <script type="text/javascript" src="<?php echo base_url('assets/js/jquery.validate.js')?>"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/js/jquery-ui.min.js')?>"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery-ui.min.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery-ui.structure.min.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery-ui.theme.min.css')?>">

    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/js/waitme/waitMe.min.css')?>">
    <script type="text/javascript" src="<?php echo base_url('assets/js/waitme/waitMe.min.js')?>"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/js/jquery-ui-touch-punch.min.js')?>"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/js/jquery.isMobile.min.js')?>"></script>
    <script type="text/javascript" src="<?php echo base_url('assets/js/script.js')?>"></script>
    <link href="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet"/>
    <script src="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/js/bootstrap-editable.min.js"></script>

    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script src="//video.limelight.com/player/embed.js"></script>
    <script>

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-71587332-1', 'auto');
        ga('send', 'pageview');

    </script>

    <?php
    // Esta linea es para no mostrar los errores en la pagina view/access
    error_reporting(0);
    ?>
    <?php
    echo '<title>'.$title.' - Misión PyC</title>';
    switch ($name) {
    case 'misiones':
        ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">

    <?php

    break;

    case 'misiones2':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/tablero2.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsiveTablero2.css')?>">
    <?php

    break;
    case 'm1':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script src="<?php echo base_url('assets/js/m1.js')?>"></script>
    <?php
    break;

    case 'm2':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script src="<?php echo base_url('assets/js/m2.js')?>"></script>
    <?php
    break;
    case 'm3':
    ?>
        <script type="text/javascript" src="<?php echo base_url('assets/libs/jquery.svg/jquery.svg.js')?>"></script>
        <script type="text/javascript" src="<?php echo base_url('assets/js/jquery.connectingLine.js')?>"></script>
        <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery-ui.min.css')?>">
        <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/game.css')?>">
        <script src="<?php echo base_url('assets/js/m3_game.js')?>"></script>
        <script src="<?php echo base_url('assets/js/m3.js')?>"></script>
    <?php
    break;
    case 'm4':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script src="<?php echo base_url('assets/js/m4.js')?>"></script>
    <?php
    break;
    case 'm5':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/libs/jquery.svg/jquery.svg.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/libs/jquery.svg/jquery.svg.js')?>"></script>
        <script type="text/javascript" src="<?php echo base_url('assets/js/jquery.connectingLine.js')?>"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery-ui.min.css')?>">
        <script src="<?php echo base_url('assets/js/m5.js')?>"></script>
    <?php
    break;

    case 'm6':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script src="<?php echo base_url('assets/js/m6.js')?>"></script>
        <script type="text/javascript" src="<?php echo base_url('assets/libs/chartjs/Chart.min.js')?>"></script>
    <?php
    break;

    case 'm7':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery.Jcrop.min.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script src="<?php echo base_url('assets/js/m7.js')?>"></script>
        <script src="<?php echo base_url('assets/js/jquery.Jcrop.min.js')?>"></script>
    <?php
    break;
    case 'm8':
    ?>
    <!--<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery.booklet.latest.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem3.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/m3.css')?>">-->
    <script src="<?php echo base_url('assets/js/m8.js')?>"></script>
    <?php
    break;

    case 'm9':
    ?>
    <!--<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/timeline.css')?>">
    <script src="<?php echo base_url('assets/js/timeline.js')?>"></script>-->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
    <!--<script type="text/javascript" src="<?php echo base_url('assets/libs/chartjs/Chart.min.js')?>"></script>-->
    <script src="<?php echo base_url('assets/js/m9.js')?>"></script>
    <?php
    break;

    case 'm10':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script src="<?php echo base_url('assets/js/m10.js')?>"></script>
    <?php
    break;
    case 'm11':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script src="<?php echo base_url('assets/js/m11.js')?>"></script>
    <?php
    break;

    case 'm12':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m1.js')?>"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem1.css')?>">
    <?php
    break;

    case 'm13':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/m2.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m2.js')?>"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem2.css')?>">
    <?php
    break;

    case 'm14':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/jquery.booklet.latest.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem3.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m3.js')?>"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/m3.css')?>">
    <?php
    break;
    /* ///Esta mision no tiene guion
    case 'm15':
        ?>
        <?php
        break;*/

    case 'm16':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem5.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m5.js')?>"></script>
    <?php
    break;

    case 'm17':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/cubo.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem6.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/m6.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m6.js')?>"></script>
    <?php
    break;

    case 'm18':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem7.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/m7.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m7.js')?>"></script>
    <?php
    break;

    case 'm19':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/m8.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem8.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m8.js')?>"></script>
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/jquery.imageLens.js')?>"></script>
        <script src="<?php echo base_url('assets/js/mpyc2/jquery.elevatezoom.js')?>" type="text/javascript"></script>
    <?php
    break;
    case 'm20':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m9.js')?>"></script>
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/jquery.imageLens.js')?>"></script>
        <script src="<?php echo base_url('assets/js/mpyc2/jquery.elevatezoom.js')?>" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem9.css')?>">
    <?php
    break;
    case 'm21':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/m10.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/mpyc2/responsivem10.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/js/mpyc2/m10.js')?>"></script>
    <?php
    break;

    case 'diario':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/timeline.css')?>">
        <script src="<?php echo base_url('assets/js/timeline.js')?>"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/diario.css')?>">
        <script type="text/javascript" src="<?php echo base_url('assets/libs/chartjs/Chart.min.js')?>"></script>
        <script src="<?php echo base_url('assets/js/diario.js')?>"></script>
    <?php
    break;

    case 'vida':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/cubo.css')?>">
        <script src="<?php echo base_url('assets/js/cubo.js')?>"></script>
    <?php
    break;
    case 'niveles':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/niveles.css')?>">

    <?php
    break;
    case 'mapa':
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/diario.css')?>">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/css/tablero.css')?>">

    <?php
    break;
    case 'ayuda':
        break;

    case 'home':
    case 'home2':

    ?>

        <script type="text/javascript" src="<?php echo base_url('assets/js/home.js')?>"></script>
        <?php
        break;

    }
    ?>

</head>
<body>
<div class="bg-layer"></div>
<div class="subs" style="display:none">
    <a href="javascript"><span>S</span>Texto audio</a>
    <div class="b-shadow subs-panel" style="display:none">
        subs
    </div>
</div>
<div class="small-device text-normal">
    Gira tu celular para poder navegar.
</div>


<div class="container-fluid main">


    <header class="nav">
        <div class="logo-container">
            <img class="img-responsive" src="<?php echo base_url('assets/img/top_left.png')?>">
            <a href="/"><div class="toolbar">&nbsp;</div></a>
        </div>

        <div class="logout-container">
            <?php
            if ($name != 'login') {
                echo '<span class="btn btn-normal user-name">¡Hola '.$nombre.'!</span>';
            }
            ?>

            <img class="img-responsive" src="<?php echo base_url('assets/img/top_right.png')?>">

        </div>

    </header>
